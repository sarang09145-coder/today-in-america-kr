import type { ArticleCard } from "@/types/news";

export const MAX_BRIEF_KO_LENGTH = 280;

export const BANNED_DATA_FIELDS = [
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

export const hasRequiredArticleFields = (article: ArticleCard): boolean => {
  return Boolean(
    article.id &&
      article.sourceName &&
      article.sourceUrl &&
      article.originalUrl &&
      article.publishedAt &&
      article.region &&
      article.stateCode &&
      article.categoryId &&
      article.displayTitleKo &&
      article.briefKo,
  );
};

export const isBriefLengthSafe = (briefKo: string): boolean => {
  return briefKo.length <= MAX_BRIEF_KO_LENGTH;
};

export const getSafeOutboundLinkProps = () => ({
  target: "_blank",
  rel: "noopener noreferrer",
});
