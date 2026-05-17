// Source: lectures/S4/lecture.md lines 24-32 (#### 컨텍스트는 명령보다 중요하다)
// Type: concept (Definition)

import Definition from '@/components/slides/patterns/Definition';

export default function S4TheoryC1ContextOverCommand() {
  return (
    <Definition
      term="컨텍스트"
      definition={[
        '에이전트가 명령을 처리할 때',
        '참조하는 정보의 집합.',
      ]}
      highlights={['컨텍스트']}
      notes={[
        '에이전트가 코드를 잘 쓰게 만드는 일은 명령의 기술이 아니라 컨텍스트의 기술이다.',
        '같은 명령이라도 컨텍스트가 다르면 결과가 다르다.',
        '컨텍스트가 비어 있으면 임의 추측, 명확하면 일관된 해석.',
      ]}
    />
  );
}
