// Source: lectures/S2/lecture.md lines 72-74
// Type: example (Warning — 능동 단점)
// D-037: Warning level + tone + title + description + reason + avoidance

import Warning from '@/components/slides/patterns/Warning';

export default function S2TheoryC2ActiveLimit() {
  return (
    <Warning
      level="능동의 단점"
      tone="bad"
      title="응답률 5-15%의 현실 + 편향 위험"
      description="컨택 20명에 보내면 응답 1-3명을 기대한다. 시간 소요와 편향 위험도 있다."
      reason="응답한 사람이 페르소나의 평균이 아니라 가장 적극적인 사람일 가능성이 높다"
      avoidance={[
        "능동 검증만으로는 시장의 폭을 보지 못한다",
        "폭은 수동 검증이 채운다 (다음 챕터)",
        "두 축을 함께 운영해야 깊이 + 폭 동시 확보",
      ]}
    />
  );
}
