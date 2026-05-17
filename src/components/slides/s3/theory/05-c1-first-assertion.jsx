// Source: lectures/S3/lecture.md lines 36-41
// Type: quote (KeyMessage — 첫 단정)

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S3TheoryC1FirstAssertion() {
  return (
    <KeyMessage
      eyebrow="첫 단정"
      message={[
        'PRD는 같은 그림을 공유하기 위해',
        '명확해야 한다',
      ]}
      highlight="명확해야 한다"
      examples={[
        {
          label: '본질',
          text: '누구를 위해 명확한가가 아니라, 왜 명확해야 하는가가 본질이다',
        },
        {
          label: '귀결',
          text: '모호함은 임의 해석을 낳고, 임의 해석은 재작업을 낳는다',
        },
      ]}
    />
  );
}
