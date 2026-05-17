// Source: lectures/S1/lecture.md line 56-68
// Strength: 3
// Profile: linear / diagram / strong

import CodeBlock from '@/components/slides/patterns/CodeBlock';

export default function S1TheorySlide08c() {
  return (
    <CodeBlock
      eyebrow="5 WHYS 실전"
      title="회의록 정리 사례"
      code={[
        "[증상] 회의록 정리에 시간이 많이 든다",
        "   (왜?)",
        "[1] 회의에서 나온 발언을 다 받아쓰지 못해 영상을 다시 본다",
        "   (왜?)",
        "[2] 회의 중 다음 안건을 진행하느라 받아쓸 여유가 없다",
        "   (왜?)",
        "[3] 액션아이템과 결정사항을 그 자리에서 분류해야 하기 때문이다",
        "   (왜?)",
        "[4] 액션아이템 누락이 다음 주 진행을 막는다",
        "   (왜?)",
        "[5] 누락된 액션아이템을 다시 합의받는 데 별도 회의가 필요하다"
      ]}
      language="text"
      caption="증상에서 5단계 드릴다운"
      notes={[
        "5번째에 도달하면 진짜 문제는 '정리 시간'이 아니라 '액션아이템 누락이 만드는 재합의 비용'",
        "진짜 문제일수록 페르소나가 좁아지고 가설이 검증 가능해진다"
      ]}
    />
  );
}
