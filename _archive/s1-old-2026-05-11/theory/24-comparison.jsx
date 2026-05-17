// Source: lectures/S1/lecture.md § "AI 시대 기획의 변화 - 빨라진 것" (lines 94, 104)
// Curator decision: Comparison 패턴 — 페인포인트 분석 속도 (과거 vs 현재)
// Phase K: §2 — AI 가속 영역 3/3

import Comparison from '@/components/slides/patterns/Comparison';

export default function S1Theory24Comparison() {
  return (
    <Comparison
      title="페인포인트 분석 (과거 vs 현재)"
      bad={{
        label: '예전 방식',
        statement: '며칠 수동 정보 수집',
        points: [
          '글 100개 직접 읽기',
          '공통 패턴 수동 추출',
          '분석자 편향 강하게 반영'
        ]
      }}
      good={{
        label: 'AI 시대',
        statement: '1-2시간 NotebookLM 분석',
        points: [
          '자료 업로드 후 분석 요청',
          '공통 페인포인트 + 출처 정리',
          '신뢰도 빠르게 검증 가능'
        ]
      }}
    />
  );
}
