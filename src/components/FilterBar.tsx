import { NEWS_CATEGORIES } from "@/lib/categories";
import { getUniqueSources } from "@/lib/filters";
import { US_STATES } from "@/lib/usStates";
import type { ArticleCard, NewsFilters } from "@/types/news";

type FilterBarProps = {
  articles: ArticleCard[];
  filters: NewsFilters;
  onFiltersChange: (filters: NewsFilters) => void;
};

export function FilterBar({ articles, filters, onFiltersChange }: FilterBarProps) {
  const sources = getUniqueSources(articles);

  return (
    <section className="filter-panel" aria-label="뉴스 필터">
      <label>
        <span>언론사</span>
        <select
          value={filters.sourceName}
          onChange={(event) => onFiltersChange({ ...filters, sourceName: event.target.value })}
        >
          <option value="all">전체 언론사</option>
          {sources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>주/지역</span>
        <select
          value={filters.stateCode}
          onChange={(event) => onFiltersChange({ ...filters, stateCode: event.target.value })}
        >
          {US_STATES.map((state) => (
            <option key={state.code} value={state.code}>
              {state.labelKo}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>카테고리</span>
        <select
          value={filters.categoryId}
          onChange={(event) =>
            onFiltersChange({
              ...filters,
              categoryId: event.target.value as NewsFilters["categoryId"],
            })
          }
        >
          <option value="all">전체 카테고리</option>
          {NEWS_CATEGORIES.map((category) => (
            <option key={category.id} value={category.id}>
              {category.labelKo}
            </option>
          ))}
        </select>
      </label>

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={filters.includeSensitive}
          onChange={(event) =>
            onFiltersChange({ ...filters, includeSensitive: event.target.checked })
          }
        />
        <span>민감 기사 포함</span>
      </label>
    </section>
  );
}
