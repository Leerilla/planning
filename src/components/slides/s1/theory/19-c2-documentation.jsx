// Source: lectures/S1/lecture.md lines 213-226
// Type: comparison ([과거] vs [현재])
// D-040: PastVsPresent 패턴

import PastVsPresent from '@/components/slides/patterns/PastVsPresent';

export default function S1TheoryC2Documentation() {
  return (
    <PastVsPresent
      eyebrow="빨라진 것 — 문서화"
      title="한 주에서 짧은 시간 단위로"
      subtitle="문서화 사이클은 크게 줄었다."
      past={{
        statement: '메모  PRD 변환 한 주',
        points: [
          '기능명세 / 유저플로우 / 와이어프레임을 각각 별도 도구로',
          '같은 정보를 세 번 입력',
          '총 한 주 이상',
        ],
      }}
      present={{
        statement: 'Manyfast 한 흐름',
        points: [
          'PRD부터 와이어프레임까지 한 도구',
          'PRD 1회 입력으로 기능명세와 유저플로우 동시 산출',
          '총 짧은 시간 단위',
        ],
      }}
      tool="Manyfast"
    />
  );
}
