// Source: lectures/S1/lecture.md § "기획이란 무엇인가" (lines 26-28)
// Curator decision: ThreeCards 패턴 — 기획의 3가지 핵심 질문 (Deductive 개념)
// Phase K: 정의 직후 개념 분해

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1Theory06ThreeCards() {
  return (
    <ThreeCards
      title="기획의 3가지 핵심 질문"
      markerLabel="핵심 3질문"
      cards={[
        {
          num: '01',
          title: '누구?',
          desc: '구체적 한 사람 (페르소나).\n"30대 직장인"이 아니라 "5-30인 PM"'
        },
        {
          num: '02',
          title: '어떤 문제?',
          desc: '사람이 실제로 겪는 불편과 어려움 (페인포인트)'
        },
        {
          num: '03',
          title: '어떻게?',
          desc: '검증 가능한 구체적 방법 (솔루션)'
        }
      ]}
    />
  );
}
