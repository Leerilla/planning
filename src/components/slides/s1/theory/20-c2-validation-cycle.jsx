// Source: lectures/S1/lecture.md lines 228-243
// Type: comparison ([과거] vs [현재])
// D-040: PastVsPresent 패턴

import PastVsPresent from '@/components/slides/patterns/PastVsPresent';

export default function S1TheoryC2ValidationCycle() {
  return (
    <PastVsPresent
      eyebrow="빨라진 것 — 검증 사이클"
      title="보름 이상에서 하루로"
      subtitle="검증 사이클은 가장 극적으로 줄어든 영역이다."
      past={{
        statement: '카피 작성 + 발송 + 분석 보름',
        points: [
          '메일 카피 작성에 하루, 발송 대상 정리에 며칠',
          '응답 모아 정리에 또 며칠',
          '총 보름 이상',
        ],
      }}
      present={{
        statement: '하루 안에 사이클 완료',
        points: [
          '메타 프롬프팅으로 카피 후보 3개 동시 생성',
          'NotebookLM에 응답 모아 인용과 함께 분석',
          '총 하루',
        ],
      }}
      tool="메타 프롬프팅 · NotebookLM"
    />
  );
}
