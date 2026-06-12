export type NewsCategoryId =
  | "politics"
  | "economy"
  | "local"
  | "korean_asian_community"
  | "entertainment"
  | "sports"
  | "weird_animals"
  | "crime_accident"
  | "weather_disaster"
  | "tech_business";

export type Sensitivity = "normal" | "sensitive";

export type SourceAccess =
  | "official_api"
  | "metadata_only"
  | "rss_allowed"
  | "manual_seed";

export type ArticleCard = {
  id: string;
  sourceName: string;
  sourceUrl: string;
  originalUrl: string;
  publishedAt: string;
  region: string;
  stateCode: string;
  categoryId: NewsCategoryId;
  topicTags: string[];
  displayTitleKo: string;
  briefKo: string;
  sensitivity: Sensitivity;
  storyClusterId?: string;
  sourceAccess: SourceAccess;
};

export type StoryCluster = {
  id: string;
  titleKo: string;
  region: string;
  categoryId: NewsCategoryId;
  summaryKo: string;
  articleIds: string[];
  angleNotes: {
    sourceName: string;
    focusKo: string;
  }[];
  sensitivity: Sensitivity;
};

export type NewsCategory = {
  id: NewsCategoryId;
  labelKo: string;
  descriptionKo: string;
};

export type NewsFilters = {
  sourceName: string;
  stateCode: string;
  categoryId: "all" | NewsCategoryId;
  includeSensitive: boolean;
};
