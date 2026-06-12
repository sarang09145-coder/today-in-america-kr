import type { ArticleCard, NewsFilters, StoryCluster } from "@/types/news";

export const defaultFilters: NewsFilters = {
  sourceName: "all",
  stateCode: "US",
  categoryId: "all",
  includeSensitive: true,
};

export const filterArticles = (
  articles: ArticleCard[],
  filters: NewsFilters,
): ArticleCard[] => {
  return articles.filter((article) => {
    const sourceMatches =
      filters.sourceName === "all" || article.sourceName === filters.sourceName;

    const stateMatches =
      filters.stateCode === "US" || article.stateCode === filters.stateCode;

    const categoryMatches =
      filters.categoryId === "all" || article.categoryId === filters.categoryId;

    const sensitivityMatches = filters.includeSensitive || article.sensitivity !== "sensitive";

    return sourceMatches && stateMatches && categoryMatches && sensitivityMatches;
  });
};

export const filterStoryClusters = (
  clusters: StoryCluster[],
  filters: NewsFilters,
): StoryCluster[] => {
  return clusters.filter((cluster) => {
    const stateMatches = filters.stateCode === "US" || cluster.region.includes(filters.stateCode);
    const categoryMatches = filters.categoryId === "all" || cluster.categoryId === filters.categoryId;
    const sensitivityMatches = filters.includeSensitive || cluster.sensitivity !== "sensitive";

    return stateMatches && categoryMatches && sensitivityMatches;
  });
};

export const getUniqueSources = (articles: ArticleCard[]): string[] => {
  return Array.from(new Set(articles.map((article) => article.sourceName))).sort((a, b) =>
    a.localeCompare(b),
  );
};
