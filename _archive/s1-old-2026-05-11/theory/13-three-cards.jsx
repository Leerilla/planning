// Source: lectures/S1/lecture.md § "페르소나 가설 작성" (lines 334-336, 338, 326)
// Curator decision: ThreeCards — 페르소나 5축 2/2 (빈도·접근)
// Phase L2: emphasis/markerLabel 제거 (강사 결정), 출처 표기 제거

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1Theory13ThreeCards() {
  return (
    <ThreeCards
      title="페르소나 5축 2/2 — 빈도·접근"
      cards={[
        {
          num: '04',
          title: '페인포인트 빈도',
          desc: '얼마나 자주 겪는가.\n예: "한 주 3회 이상 만남".\n빈도가 낮으면 우선순위가 낮다 — 검증 사이클의 시작점이 약해진다.',
        },
        {
          num: '05',
          title: '검증 가능 채널',
          desc: '이 사람들을 어디에서 만날 것인가.\n예: "링크드인 PM 직군 검색 가능".\n이 한 줄이 비면 카피 발송 대상이 누구인지 모르므로 페르소나가 모호하다는 신호이다.',
        },
        {
          num: '메타',
          title: '왜 5축이 모두 차야 하나',
          desc: '한 줄이라도 비면 1-1 단계로 돌아가 아이디어를 좁힌다.\n좁히는 것은 페르소나 수를 줄이는 게 아니라 윤곽을 명확하게 만드는 일이다.',
        },
      ]}
    />
  );
}
