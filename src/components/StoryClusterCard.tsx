import { getCategoryLabel } from "@/lib/categories";
import { getSafeOutboundLinkProps } from "@/lib/safety";
import type { ArticleCard, StoryCluster } from "@/types/news";

type StoryClusterCardProps = {
  cluster: StoryCluster;
  articles: ArticleCard[];
};

export function StoryClusterCard({ cluster, articles }: StoryClusterCardProps) {
  const relatedArticles = articles.filter((article) => cluster.articleIds.includes(article.id));
  const outboundProps = getSafeOutboundLinkProps();

  return (
    <article className="cluster-card">
      <div className="card-meta-row">
        <span className="pill">{getCategoryLabel(cluster.categoryId)}</span>
        <span className="pill muted">{cluster.region}</span>
        {cluster.sensitivity === "sensitive" ? <span className="pill warning">민감</span> : null}
      </div>

      <h3>{cluster.titleKo}</h3>
      <p className="brief-text">{cluster.summaryKo}</p>

      <div className="angle-box">
        <strong>매체별 초점</strong>
        <ul>
          {cluster.angleNotes.map((note) => (
            <li key={`${cluster.id}-${note.sourceName}`}>
              <span>{note.sourceName}</span>
              <p>{note.focusKo}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="related-links">
        <strong>관련 원문</strong>
        {relatedArticles.map((article) => (
          <a key={article.id} href={article.originalUrl} {...outboundProps}>
            {article.sourceName}에서 보기
          </a>
        ))}
      </div>
    </article>
  );
}
