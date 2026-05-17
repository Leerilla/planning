// Source: lectures/S9/lecture.md L102-108 (자동 D-033, ### 2️⃣ 챕터 표지)
// Type: Cover

import Cover from '@/components/slides/patterns/Cover';

export default function S9TheoryC2Cover() {
  return (
    <Cover
      eyebrow="이론 2"
      title="세 축 데이터 해석"
      subtitle="신호와 잡음, 네 종류 데이터의 역할, NotebookLM 재오픈"
      objectives={[
        '신호와 잡음을 30% 기준 또는 3-5건 기준으로 구분한다',
        '네 종류 데이터(응답·Clarity·Sentry·이벤트 추적)의 역할 차이를 안다',
        'NotebookLM 재오픈으로 교차 분석한다',
      ]}
    />
  );
}
