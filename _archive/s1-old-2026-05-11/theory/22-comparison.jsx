// Source: lectures/S1/lecture.md § "AI 시대 기획의 변화 - 빨라진 것" (lines 85-86, 100)
// Curator decision: Comparison 패턴 — 1차 시장 리서치 속도 (과거 vs 현재)
// Phase K: §2 — AI 가속 영역 1/3

import Comparison from '@/components/slides/patterns/Comparison';

export default function S1Theory22Comparison() {
  return (
    <Comparison
      title="리서치 속도 (과거 vs 현재)"
      bad={{
        label: '예전 방식',
        statement: '며칠~1주일 손뒤지기',
        points: [
          '검색 엔진 + 자료 수동 정리',
          'PDF 다운로드 + 키워드 추출',
          '페르소나 윤곽 그리는 데 한 주'
        ]
      }}
      good={{
        label: 'AI 시대',
        statement: '분 단위로 ChatGPT 리서치',
        points: [
          'ChatGPT/Gemini 1회 질문',
          '사례 5-10개 + 출처 후보 즉시',
          '시드 레벨 리서치 완료'
        ]
      }}
    />
  );
}
