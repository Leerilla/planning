// Source: lectures/S1/lecture.md lines 95-101
// Type: concept, emphasis: definition
// Profile: hierarchical / comparison / medium / balanced
// Curator decision: Definition 패턴 + definition배열 2개 + notes배열 2개 + highlights 3개
// D-037: term / definition / notes / highlights 모두 활용 (활용률 100%)

import Definition from '@/components/slides/patterns/Definition';

export default function S1TheoryC2bSymptomVsProblem() {
  return (
    <Definition
      term="문제 정의의 핵심"
      definition={[
        "'회의록 정리에 시간이 많이 든다'는 증상이지 문제가 아니다",
        "진짜 문제를 찾으려면 '왜?'를 최소 3-5번 더 물어야 한다"
      ]}
      notes={[
        "진짜 문제일수록 페르소나가 좁아지고 가설이 검증 가능해진다",
        "한 번에 진짜 문제에 도달하는 작업자는 없다. 첫 진술을 의심하는 습관이 있을 뿐이다"
      ]}
      highlights={["증상", "진짜 문제", "왜?"]}
    />
  );
}
