# Today in America KR

한국어 사용자를 위한 **미국 뉴스 발견(discovery) 서비스**입니다. 미국 주요 매체와 지역 매체의 당일 뉴스를 언론사, 주/지역, 카테고리별로 탐색할 수 있게 하고, 기사 전문을 재게시하지 않고 짧은 한국어 안내문과 원문 링크만 제공합니다.

> This project does **not** republish full articles or provide full translations.  
> It provides short Korean discovery briefs and links users to original publishers.

## 핵심 원칙

1. 기사 전문을 저장하지 않습니다.
2. 기사 전문 번역을 제공하지 않습니다.
3. 원문 기사 이미지, 캡처, 유료 기사 본문을 저장하지 않습니다.
4. 카드에는 출처, 지역, 카테고리, 짧은 한국어 안내문, 원문 링크만 제공합니다.
5. 자세한 내용은 원문 언론사 사이트에서 확인하도록 설계합니다.

## MVP 기능

- 오늘의 미국 요약: 그날 많이 보도된 미국 이슈를 짧게 정리합니다.
- 언론사별 보기: 사용자가 특정 매체의 기사 링크를 골라 볼 수 있습니다.
- 주/지역별 보기: 미국 50개 주와 지역 뉴스를 기준으로 필터링합니다.
- 카테고리별 보기: 정치, 경제, 지역, 한인·아시아계 커뮤니티, 연예, 동물·황당뉴스 등을 지원합니다.
- 스토리 묶기: 같은 사건을 여러 매체가 보도하면 하나의 이슈 카드로 묶습니다.
- 원문 이동: 모든 카드에는 원문 기사 보기 버튼을 제공합니다.

## MVP에서 의도적으로 제외한 기능

- 기사 본문 전체 수집
- 기사 전문 한국어 번역
- 기사 첫 문단 또는 긴 발췌문 재게시
- 원문 기사 이미지 저장 또는 표시
- 유료 기사 본문 접근
- 약관이 불명확한 직접 스크래핑

## 빠른 시작

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

샘플 데이터가 안전 정책을 지키는지 검사하려면 다음 명령어를 실행합니다.

```bash
npm run validate:samples
```

## 폴더 구조

```text
today-in-america-kr/
  data/
    sample_articles.json              # GitHub 데모용 가짜 샘플 기사 카드
    sample_story_clusters.json        # GitHub 데모용 가짜 이슈 묶음
  docs/
    MVP_SPEC.md                       # MVP 명세
    NOTIFICATION_PLAN.md              # 잠금화면 알림 설계
  scripts/
    validate-samples.mjs              # 샘플 데이터 안전성 검사
  src/
    app/
      page.tsx                        # 메인 화면
      layout.tsx                      # 앱 레이아웃
      globals.css                     # 기본 스타일
    components/
      NewsDashboard.tsx               # 필터와 카드 목록
      ArticleCard.tsx                 # 개별 기사 카드
      StoryClusterCard.tsx            # 스토리 묶기 카드
      TodayBrief.tsx                  # 오늘의 미국 요약
      FilterBar.tsx                   # 언론사/지역/카테고리 필터
    data/
      sampleArticles.ts               # JSON 샘플 데이터 import
      sampleStoryClusters.ts          # JSON 샘플 데이터 import
    lib/
      filters.ts                      # 필터링 로직
      safety.ts                       # 콘텐츠 안전 규칙
    types/
      news.ts                         # 뉴스 카드 타입
```

## 데이터 구조 요약

기사 카드에는 다음 정보만 저장합니다.

```json
{
  "id": "article_001",
  "sourceName": "Example Local News",
  "sourceUrl": "https://example.com",
  "originalUrl": "https://example.com/news/article-001",
  "publishedAt": "2026-06-12T09:30:00-05:00",
  "region": "Georgia",
  "stateCode": "GA",
  "categoryId": "korean_asian_community",
  "topicTags": ["한인사회", "지역사회"],
  "displayTitleKo": "조지아 지역사회 관련 보도가 이어지고 있습니다",
  "briefKo": "현지 매체들은 조지아주 한 지역사회에서 열린 추모 행사와 커뮤니티 반응을 보도했습니다. 자세한 내용은 원문 기사에서 확인할 수 있습니다.",
  "sensitivity": "sensitive",
  "storyClusterId": "cluster_georgia_community",
  "sourceAccess": "metadata_only"
}
```

저장하지 않는 정보:

```text
article_body
full_translation_ko
long_excerpt
paywalled_content
downloaded_image_file
```

## 안전 정책

이 프로젝트는 뉴스 콘텐츠를 재출판하는 서비스가 아니라, 한국어 사용자가 미국 뉴스를 발견하고 원문으로 이동하도록 돕는 서비스입니다. 자세한 정책은 다음 문서를 참고하세요.

- [LEGAL_SAFETY.md](./LEGAL_SAFETY.md)
- [SOURCE_POLICY.md](./SOURCE_POLICY.md)
- [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md)

## 개발 로드맵

- Phase 1: 정적 MVP 화면과 샘플 데이터
- Phase 2: 허용된 API 또는 메타데이터 기반 데이터 수집
- Phase 3: 스토리 묶기 고도화
- Phase 4: 관심사 기반 웹 푸시 알림
- Phase 5: 관리자 검토 도구와 삭제 요청 프로세스

자세한 내용은 [ROADMAP.md](./ROADMAP.md)를 참고하세요.

## 주의

이 저장소는 법률 자문이 아닙니다. 실제 상업 서비스로 배포하거나 광고·구독 모델을 붙이기 전에는 저작권, 미디어 라이선스, 개인정보, 명예훼손 리스크에 대해 전문가 검토를 받는 것이 좋습니다.
