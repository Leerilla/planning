// Source: lectures/S1/lecture.md lines 165-171
// Type: concept (definition)
// D-037: Definition 패턴 term/definition/notes/highlights 100% 활용

import Definition from '@/components/slides/patterns/Definition';

export default function S1TheoryC2bProtoPersonaScope() {
  return (
    <Definition
      term="1단계 가설 페르소나"
      definition={[
        "본 자료에서 만드는 것은 1단계 가설 페르소나이다",
        "완성이 목표가 아니다",
      ]}
      notes={[
        "다음 단계의 검증 인터뷰가 무엇을 물을지 결정할 만큼만 구체적이면 된다",
        "완성을 목표로 하면 작업자가 멈춘다 — '이게 맞나?'라는 망설임이 워크시트 작성을 막는다",
        "가설 페르소나는 틀려도 되는 출발점이다",
      ]}
      highlights={["1단계 가설 페르소나", "완성이 목표가 아니다", "틀려도 되는"]}
    />
  );
}
