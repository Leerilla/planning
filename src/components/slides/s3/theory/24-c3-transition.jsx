// Source: lectures/S3/lecture.md lines 347-351 (과도기: 일반 LLM의 등장)
// Type: concept (Definition)

import Definition from '@/components/slides/patterns/Definition';

export default function S3TheoryC3Transition() {
  return (
    <Definition
      eyebrow="과도기 (2023-2024)"
      term="일반 LLM의 등장"
      definition={[
        'ChatGPT, Claude 같은 범용 LLM에',
        '"인터뷰 자료에서 페인포인트 5개를 뽑아줘"를 묻기 시작했다.',
      ]}
      highlights={['범용 LLM']}
      notes={[
        '분석 시간은 크게 줄었다.',
        '그러나 LLM의 학습 데이터·환각·맥락 혼합이라는 새로운 문제가 발생.',
      ]}
    />
  );
}
