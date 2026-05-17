// Source: lectures/S1/lecture.md § "가설 정의" + 활동 2-3 (lines 71-75, 340-360)
// Curator decision: ThreeCards — 가설 정의 후 예시. 페르소나 데이터에서 검증 가능 가설 도출
// Phase L2 신규 (강사 콘텐츠 추가 #2)

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1Theory15bHypothesisExample() {
  return (
    <ThreeCards
      title="예시 — 페르소나 데이터에서 가설을 어떻게 뽑는가"
      cards={[
        {
          num: '01',
          title: '입력 — 페르소나 5축',
          desc: '5-30인 스타트업 PM, 3년차\n줌 회의 주 5회 이상\n슬랙·노션 사용 중\n회의 후 정리에 주 3회 이상 시간 소비\n링크드인 PM 직군 검색 가능',
        },
        {
          num: '02',
          title: '검증 가능 가설 (지불 의향)',
          desc: '"5-30인 스타트업 PM은 회의록을 짧은 시간에 정리해주는 도구에 월 1만원 이상 지불할 의향이 있을 것이다."\n→ 사전판매 페이지로 검증.',
        },
        {
          num: '03',
          title: '검증 가능 가설 (선호 형태)',
          desc: '"PM은 슬랙 봇 형태보다 웹 페이지에 회의록을 붙여넣는 형태를 더 선호할 것이다."\n→ A/B 모의 화면으로 검증.',
        },
      ]}
    />
  );
}
