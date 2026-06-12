# Data Schema

## ArticleCard

```ts
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
  sensitivity: "normal" | "sensitive";
  storyClusterId?: string;
  sourceAccess: "official_api" | "metadata_only" | "rss_allowed" | "manual_seed";
};
```

## StoryCluster

```ts
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
  sensitivity: "normal" | "sensitive";
};
```

## 금지 필드

다음 필드는 저장소와 데이터베이스에 포함하지 않습니다.

```text
body
articleBody
content
fullText
fullTranslationKo
translation
longExcerpt
imageFile
imageBase64
paywalledContent
```
