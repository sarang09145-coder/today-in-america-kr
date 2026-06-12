import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const articlePath = path.join(root, "data", "sample_articles.json");
const clusterPath = path.join(root, "data", "sample_story_clusters.json");

const bannedFields = [
  "body",
  "articleBody",
  "content",
  "fullText",
  "fullTranslationKo",
  "translation",
  "longExcerpt",
  "imageFile",
  "imageBase64",
  "paywalledContent",
];

const maxBriefLength = 280;

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));

const findBannedFields = (value, trail = "root") => {
  const hits = [];

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      hits.push(...findBannedFields(item, `${trail}[${index}]`));
    });
    return hits;
  }

  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (bannedFields.includes(key)) {
        hits.push(`${trail}.${key}`);
      }
      hits.push(...findBannedFields(child, `${trail}.${key}`));
    }
  }

  return hits;
};

const validateArticles = (articles) => {
  const errors = [];
  const requiredFields = [
    "id",
    "sourceName",
    "sourceUrl",
    "originalUrl",
    "publishedAt",
    "region",
    "stateCode",
    "categoryId",
    "displayTitleKo",
    "briefKo",
    "sensitivity",
    "sourceAccess",
  ];

  articles.forEach((article, index) => {
    for (const field of requiredFields) {
      if (!article[field]) {
        errors.push(`articles[${index}] is missing required field: ${field}`);
      }
    }

    if (article.briefKo && article.briefKo.length > maxBriefLength) {
      errors.push(
        `articles[${index}].briefKo is ${article.briefKo.length} chars; max is ${maxBriefLength}`,
      );
    }

    if (article.originalUrl && !/^https?:\/\//.test(article.originalUrl)) {
      errors.push(`articles[${index}].originalUrl must be an absolute URL`);
    }
  });

  return errors;
};

const validateClusters = (clusters, articles) => {
  const errors = [];
  const articleIds = new Set(articles.map((article) => article.id));

  clusters.forEach((cluster, index) => {
    if (!cluster.id || !cluster.titleKo || !cluster.summaryKo || !Array.isArray(cluster.articleIds)) {
      errors.push(`clusters[${index}] is missing required cluster fields`);
    }

    if (cluster.summaryKo && cluster.summaryKo.length > 360) {
      errors.push(`clusters[${index}].summaryKo is too long for a discovery brief`);
    }

    for (const articleId of cluster.articleIds ?? []) {
      if (!articleIds.has(articleId)) {
        errors.push(`clusters[${index}] references missing article id: ${articleId}`);
      }
    }
  });

  return errors;
};

const articles = readJson(articlePath);
const clusters = readJson(clusterPath);

const errors = [
  ...findBannedFields(articles, "articles"),
  ...findBannedFields(clusters, "clusters"),
  ...validateArticles(articles),
  ...validateClusters(clusters, articles),
];

if (errors.length > 0) {
  console.error("Sample validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Sample validation passed. No banned full-text fields found.");
