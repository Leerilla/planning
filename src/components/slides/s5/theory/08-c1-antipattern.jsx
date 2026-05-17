// Source: lectures/S5/lecture.md lines 72-85 (#### 안티패턴 vs 수직 슬라이스)
// Type: example (Warning bad/good 좌우)

import Warning from '@/components/slides/patterns/Warning';

export default function S5TheoryC1Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"카피 입력·결과·복사 UI 다 그렸어요. 이제 로직 짜야 해요"`}
        description="수평 슬라이스 — 모든 UI를 그린 다음 로직으로."
        reason="UI 층이 끝날 때까지 동작 없음, 가설 검증 미뤄짐"
        avoidance={[
          'UI 층 끝까지 동작하는 결과물 없음',
          '셀러에게 검증 못 보여줌',
          'PRD 변경 시 3개 화면 다시 그림',
        ]}
      />

      <Warning
        level="수직 슬라이스"
        tone="good"
        title={`"카피 입력 화면 한 개를 UI부터 데이터까지 동작시킨다"`}
        description="한 기능 통째 — 첫 화면 동작 후 패턴 복사."
        reason="한 화면 동작 즉시 가설 검증 가능"
        avoidance="첫 동작이 다음 화면의 출발점 — 빌드 자신감 유지"
      />
    </div>
  );
}
