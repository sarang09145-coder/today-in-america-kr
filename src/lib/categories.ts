import type { NewsCategory } from "@/types/news";

export const NEWS_CATEGORIES: NewsCategory[] = [
  {
    id: "politics",
    labelKo: "정치",
    descriptionKo: "연방정부, 의회, 선거, 주정부 정책",
  },
  {
    id: "economy",
    labelKo: "경제·시사",
    descriptionKo: "금리, 증시, 물가, 기업 실적, 노동시장",
  },
  {
    id: "local",
    labelKo: "지역 뉴스",
    descriptionKo: "미국 각 주와 도시의 지역 이슈",
  },
  {
    id: "korean_asian_community",
    labelKo: "한인·아시아계 커뮤니티",
    descriptionKo: "한인사회, 아시아계 커뮤니티, 이민자 커뮤니티",
  },
  {
    id: "entertainment",
    labelKo: "연예",
    descriptionKo: "영화, TV, 음악, 셀럽, 대중문화",
  },
  {
    id: "sports",
    labelKo: "스포츠",
    descriptionKo: "미국 프로·대학 스포츠 주요 소식",
  },
  {
    id: "weird_animals",
    labelKo: "동물·황당뉴스",
    descriptionKo: "동물, 기묘한 사건, 가벼운 화제성 기사",
  },
  {
    id: "crime_accident",
    labelKo: "사건·사고",
    descriptionKo: "범죄, 사고, 소송, 안전 관련 보도",
  },
  {
    id: "weather_disaster",
    labelKo: "날씨·재난",
    descriptionKo: "산불, 허리케인, 폭염, 홍수, 대피령",
  },
  {
    id: "tech_business",
    labelKo: "기술·기업",
    descriptionKo: "기술기업, 스타트업, AI, 반도체, 플랫폼",
  },
];

export const getCategoryLabel = (categoryId: string): string => {
  return NEWS_CATEGORIES.find((category) => category.id === categoryId)?.labelKo ?? categoryId;
};
