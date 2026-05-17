// Source: lectures/S1/lecture.md § "AI 시대 기획의 변화 - 빨라진 것" (lines 90, 102)
// Curator decision: Comparison 패턴 — 검증 사이클 속도 (과거 vs 현재)
// Phase K: §2 — AI 가속 영역 2/3

import Comparison from '@/components/slides/patterns/Comparison';

export default function S1Theory23Comparison() {
  return (
    <Comparison
      title="검증 사이클 속도 (과거 vs 현재)"
      bad={{
        label: '예전 방식',
        statement: '보름 이상 메일/설문',
        points: [
          '카피 작성: 하루',
          '발송 대상 정리: 며칠',
          '응답 분석: 또 며칠'
        ]
      }}
      good={{
        label: 'AI 시대',
        statement: '하루 내 메타 프롬프팅 검증',
        points: [
          '카피 후보 3개 한번에 생성',
          'NotebookLM으로 응답 분석',
          '같은 사이클이 하루에 완료'
        ]
      }}
    />
  );
}
