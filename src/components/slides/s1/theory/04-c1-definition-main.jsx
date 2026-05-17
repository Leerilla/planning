// Source: lectures/S1/lecture.md lines 25-33
// Type: concept, emphasis: definition
// Profile: hierarchical / comparison / medium / balanced
// Curator decision (T2.1 γ'회귀): Definition 패턴 + notes배열 2개 + highlights 3개

import Definition from '@/components/slides/patterns/Definition';

export default function S1TheoryC1DefinitionMain() {
  return (
    <Definition
      term="기획(Planning)"
      definition={[
        "누구의 어떤 문제를 어떻게 풀 것인가의 답을 정의하는 일이다"
      ]}
      notes={[
        "세 질문 중 하나라도 모호하면 기획이 아니다",
        "세 질문 모두 채워져야 기획이 성립한다\n누구·어떤 문제·어떻게"
      ]}
      highlights={["누구", "어떤 문제", "어떻게"]}
    />
  );
}
