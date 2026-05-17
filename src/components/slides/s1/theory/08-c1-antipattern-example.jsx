// Source: lectures/S1/lecture.md lines 76-91
// Type: example
// Profile: hierarchical / comparison / medium / balanced
// Curator decision (T2.1): Warning 패턴 — 안티패턴(problem) + 올바른 출발(solution) 두 박스

import Warning from '@/components/slides/patterns/Warning';

export default function S1TheoryC1AntipatterExample() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      {/* 안티패턴 — 왼쪽 */}
      <Warning
        level="안티패턴"
        title="쇼핑몰을 만들고 싶어요"
        description="기능부터 정해봅시다"
        reason="누구를 위한 쇼핑몰인지 모름. 어떤 문제를 푸는지 모름. 검증할 가설이 없음."
        avoidance={[
          "누구? 답변 불가",
          "어떤 문제? 답변 불가",
          "어떻게? 욕망만 있음"
        ]}
      />

      {/* 올바른 출발 — 오른쪽 */}
      <Warning
        level="올바른 출발"
        tone="good"
        title="5-30인 스타트업의 PM 문제"
        description="줌 회의 후 액션아이템 정리에 30분 이상 걸린다"
        reason="페르소나·문제·상황 셋이 한 문장에 들어감"
        avoidance="페르소나·문제·상황 셋이 한 문장에 들어가야 출발이 된다"
      />
    </div>
  );
}
