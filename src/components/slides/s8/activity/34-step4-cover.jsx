// Source: lectures/S8/activity lecture.md Step 4
// Type: Activity cover (Step 4: 분석 도구 3종 셋업)
// Profile: linear flow / activity-heavy / strong tone

import Cover from '@/components/slides/patterns/Cover';

export default function S8ActivityStep4Cover() {
  return (
    <Cover
      eyebrow="Step 4"
      title="분석 도구 3종 셋업"
      subtitle="Clarity + Sentry + 이벤트 추적 — 다음 단계 노출 전 데이터 수집 인프라"
      objectives={[
        'Clarity 추적 코드 layout.tsx 삽입',
        'Sentry SDK FE+BE 모두 초기화',
        '이벤트 추적 3개 (페이지/버튼/완료)',
        'Clarity 대시보드에 본인 세션 1개',
        '이벤트 3개 Clarity Events 탭',
        'Sentry 테스트 에러 도착',
      ]}
      size="sm"
    />
  );
}
