// Source: lectures/S2/lecture.md line 82
// Type: example (Warning — 수동 단점)

import Warning from '@/components/slides/patterns/Warning';

export default function S2TheoryC2PassiveLimit() {
  return (
    <Warning
      level="수동의 단점"
      tone="bad"
      title="후속 질문 불가 + 맥락의 한계"
      description="글쓴이의 맥락을 직접 확인할 수 없다. 글의 일부만 보면 본의를 오해할 수도 있다."
      reason="이미 남긴 데이터라 작업자가 깊이를 더 파고들 통로가 없다"
      avoidance={[
        "수동 검증만으로는 깊이가 얕다",
        "깊이는 능동 검증이 채운다 (이전 챕터)",
        "두 축 함께 = 깊이(능동) + 폭(수동) 동시 확보",
      ]}
    />
  );
}
