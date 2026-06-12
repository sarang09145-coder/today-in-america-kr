import { formatPublishedAtKo } from "@/lib/dates";
import { getCategoryLabel } from "@/lib/categories";
import { getSafeOutboundLinkProps } from "@/lib/safety";
import { getStateLabel } from "@/lib/usStates";
import type { ArticleCard as ArticleCardType } from "@/types/news";

type ArticleCardProps = {
  article: ArticleCardType;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const outboundProps = getSafeOutboundLinkProps();

  return (
    <article className="article-card">
      <div className="card-meta-row">
        <span className="pill">{getCategoryLabel(article.categoryId)}</span>
        <span className="pill muted">{getStateLabel(article.stateCode)}</span>
        {article.sensitivity === "sensitive" ? <span className="pill warning">민감</span> : null}
      </div>

      <h3>{article.displayTitleKo}</h3>

      <p className="brief-text">{article.briefKo}</p>

      <div className="tag-row" aria-label="관련 태그">
        {article.topicTags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div className="source-box">
        <div>
          <span className="source-label">출처</span>
          <strong>{article.sourceName}</strong>
        </div>
        <time dateTime={article.publishedAt}>{formatPublishedAtKo(article.publishedAt)}</time>
      </div>

      <a className="primary-link" href={article.originalUrl} {...outboundProps}>
        원문 기사 보기
      </a>
    </article>
  );
}
