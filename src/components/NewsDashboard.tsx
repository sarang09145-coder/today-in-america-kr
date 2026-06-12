"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { FilterBar } from "@/components/FilterBar";
import { StoryClusterCard } from "@/components/StoryClusterCard";
import { TodayBrief } from "@/components/TodayBrief";
import { defaultFilters, filterArticles, filterStoryClusters } from "@/lib/filters";
import type { ArticleCard as ArticleCardType, NewsFilters, StoryCluster } from "@/types/news";

const todayBriefItems = [
  "워싱턴 정치권에서는 예산안 협상과 연방정부 운영 문제가 주요 이슈로 다뤄지고 있습니다.",
  "월가와 기술업계에서는 주요 기술기업 실적 발표와 AI 투자 흐름에 관심이 모이고 있습니다.",
  "캘리포니아 등 일부 지역에서는 날씨와 재난 대비 관련 지역 보도가 이어지고 있습니다.",
  "조지아 등 지역 커뮤니티 뉴스에서는 한인·아시아계 커뮤니티 관련 보도도 확인됩니다.",
  "지역 매체들은 동물·황당뉴스처럼 가벼운 화제성 기사도 함께 다루고 있습니다.",
];

type NewsDashboardProps = {
  articles: ArticleCardType[];
  storyClusters: StoryCluster[];
};

export function NewsDashboard({ articles, storyClusters }: NewsDashboardProps) {
  const [filters, setFilters] = useState<NewsFilters>(defaultFilters);

  const filteredArticles = useMemo(
    () => filterArticles(articles, filters),
    [articles, filters],
  );

  const filteredStoryClusters = useMemo(
    () => filterStoryClusters(storyClusters, filters),
    [storyClusters, filters],
  );

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Today in America KR</p>
        <h1>미국 뉴스를 한국어로 빠르게 발견하세요.</h1>
        <p className="hero-copy">
          기사 전문을 재게시하지 않고, 짧은 한국어 안내문과 원문 링크를 제공합니다. 언론사,
          지역, 카테고리별로 오늘의 미국 뉴스를 골라 볼 수 있습니다.
        </p>
        <div className="principle-grid" aria-label="서비스 안전 원칙">
          <span>전문 저장 없음</span>
          <span>전문 번역 없음</span>
          <span>원문 링크 우선</span>
          <span>2~3줄 안내문</span>
        </div>
      </section>

      <TodayBrief items={todayBriefItems} />

      <FilterBar articles={articles} filters={filters} onFiltersChange={setFilters} />

      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Story clusters</p>
            <h2>오늘의 이슈 묶기</h2>
          </div>
          <p>{filteredStoryClusters.length}개 이슈</p>
        </div>

        <div className="cluster-list">
          {filteredStoryClusters.map((cluster) => (
            <StoryClusterCard key={cluster.id} cluster={cluster} articles={articles} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">News links</p>
            <h2>기사 카드</h2>
          </div>
          <p>{filteredArticles.length}개 링크</p>
        </div>

        <div className="article-grid">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="empty-state">
            선택한 필터에 맞는 샘플 카드가 없습니다. 다른 지역이나 카테고리를 선택해 보세요.
          </div>
        ) : null}
      </section>
    </main>
  );
}
