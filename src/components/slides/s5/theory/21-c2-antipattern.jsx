// Source: lectures/S5/lecture.md lines 199-212 (#### 안티패턴 vs 위임 3원칙)
// Type: example (Warning bad/good 좌우)

import Warning from '@/components/slides/patterns/Warning';

export default function S5TheoryC2Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"카피 입력 기능 만들어줘"`}
        description="너무 광범위. 결과 예측 불가능."
        reason="범위·결과물·검증이 모두 빈 채로 출발"
        avoidance={[
          '범위 불명 (한 화면? 모든 화면?)',
          '결과물 모호 (콘솔? DB?)',
          '검증 방법 없음 (동작 정의 X)',
        ]}
      />

      <Warning
        level="위임 3원칙"
        tone="good"
        title={`"PRD 카피 입력 화면. 사진+키워드 5칸+버튼만"`}
        description="실제 카피 생성 로직은 다음 단계에서."
        reason="범위 좁힘 + 결과물 명시 + 다음 단계 분리"
        avoidance="3원칙이 한 명령 안에 모두 들어있다 — 결과 일관"
      />
    </div>
  );
}
