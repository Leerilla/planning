// Source: lectures/S1/lecture.md § "기획이란 무엇인가" (lines 326, 338)
// Curator decision: KeyMessage 패턴 (신규) — 5축의 결정성 강조
// Phase K Deductive: 페르소나 5축 후 핵심 통찰 강화

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S1Theory14KeyMessage() {
  return (
    <KeyMessage
      eyebrow="페르소나 작성의 핵심"
      message={['검증 가능 채널이 비면,', '페르소나가 모호한 것이다']}
      highlight="검증 가능 채널"
      subtext="페르소나를 좁히는 것은 수를 줄이는 것이 아니라 윤곽을 명확하게 만드는 일이다."
      examples={[
        {
          label: '모호함',
          text: '30대 직장인 (누구를 만나지? 어디서?)',
          tone: 'bad'
        },
        {
          label: '명확함',
          text: '링크드인으로 "PM" 직군 검색 가능한 5-30인 PM',
          tone: 'good'
        }
      ]}
    />
  );
}
