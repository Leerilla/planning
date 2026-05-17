// Source: lectures/S1/lecture.md line 237-242
// Strength: 4
// Profile: linear / comparison / strong

import Definition from '@/components/slides/patterns/Definition';

export default function S1TheorySlide16() {
  return (
      <Definition
        term="거짓 정보의 직관"
        definition={[
          'AI 답변 5개 중 1-2개에 거짓이 섞여 있는 게 평균',
          '발견되지 않으면 다행, 발견되면 검증 능력을 키웠다는 신호'
        ]}
        notes={[
          '거짓을 발견하는 직관은 습관으로 만들어진다',
          '한 주에 한 번씩 직접 클릭해 보는 습관을 들인다'
        ]}
      />
  );
}
