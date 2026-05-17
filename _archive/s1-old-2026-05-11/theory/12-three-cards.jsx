// Source: lectures/S1/lecture.md § "워크시트 채우기 - 페르소나 가설 작성" (lines 331-333)
// Curator decision: ThreeCards 패턴 — 페르소나 5축 1/2 (정체성·맥락)
// Phase K Deductive: 페르소나를 5축으로 분해 (part 1)

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1Theory12ThreeCards() {
  return (
    <ThreeCards
      title="페르소나 5축 1/2 — 정체성·맥락"
      markerLabel="정체성·맥락"
      cards={[
        {
          num: '01',
          title: '직군/역할',
          desc: '5-30인 스타트업 PM'
        },
        {
          num: '02',
          title: '환경 조건',
          desc: '줌이나 구글미트 회의 한 주 5회 이상'
        },
        {
          num: '03',
          title: '도구 사용',
          desc: '슬랙과 노션 사용 중'
        }
      ]}
    />
  );
}
