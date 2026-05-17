// Source: lectures/S1/lecture.md lines 194-211
// Type: comparison ([과거] vs [현재])
// D-040: PastVsPresent 패턴 (neutral 좌우)

import PastVsPresent from '@/components/slides/patterns/PastVsPresent';

export default function S1TheoryC2Research() {
  return (
    <PastVsPresent
      eyebrow="빨라진 것 — 1차 시장 리서치"
      title="며칠에서 분 단위로"
      subtitle="리서치는 사이클이 가장 크게 줄어든 영역이다."
      past={{
        statement: '며칠 동안 검색 + 손 정리',
        points: [
          '검색 엔진과 자료를 손으로 뒤짐',
          '보고서 PDF 다운로드  키워드 추출  페르소나 윤곽',
          '총 1주일',
        ],
      }}
      present={{
        statement: '분 단위로 후보 페인포인트',
        points: [
          'ChatGPT/Gemini에 질문  분 단위로 사례 5-10개',
          '출처 후보와 함께 즉시 반환',
          '총 몇 분',
        ],
      }}
      tool="ChatGPT · Gemini"
    />
  );
}
