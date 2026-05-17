// Source: lectures/S9/lecture.md L507-532 (자동 D-032, ## 실습 목차)
// Type: Objectives

import Objectives from '@/components/slides/patterns/Objectives';

export default function S9ActivityToc() {
  return (
    <Objectives
      eyebrow="실습 학습 목표"
      items={[
        '10명 이상에게 재피드백 메일 발송',
        '응답·Clarity·Sentry·이벤트 추적 4종 데이터 수집',
        'NotebookLM 재오픈 → 4종 데이터 종합 분석',
        'docs/persona.md + docs/prd.md 데이터 기반 갱신',
        'Pivot · Persevere · Kill 결정 1개 손에 쥐기',
      ]}
    />
  );
}
