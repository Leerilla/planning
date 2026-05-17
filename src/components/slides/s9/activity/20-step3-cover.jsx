// Source: lectures/S9/lecture.md L723-725 (자동 D-033, ### Step 3)
// Type: Cover

import Cover from '@/components/slides/patterns/Cover';

export default function S9ActivityStep3Cover() {
  return (
    <Cover
      eyebrow="Step 3"
      title="분석 도구 해석"
      subtitle="세 분석 도구(Clarity·Sentry·이벤트 추적) 데이터로 패턴 추출"
      objectives={[
        'Clarity 세션 리플레이 + 히트맵',
        'Sentry 에러 패턴',
        '이벤트 추적 funnel 전환율 계산',
        '분석 메모 정리 → 신호와 잡음 구분',
      ]}
    />
  );
}
