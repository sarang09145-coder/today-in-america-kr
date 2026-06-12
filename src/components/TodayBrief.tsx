type TodayBriefProps = {
  items: string[];
};

export function TodayBrief({ items }: TodayBriefProps) {
  return (
    <section className="today-brief section-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Daily overview</p>
          <h2>오늘의 미국 요약</h2>
        </div>
        <p>원문으로 이어지는 짧은 지도</p>
      </div>

      <ol className="brief-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}
