// Source: lectures/S4/lecture.md lines 69-81 (#### 안티패턴 vs 컨텍스트 앵커링)
// Type: example (Warning bad/good 좌우)

import Warning from '@/components/slides/patterns/Warning';

export default function S4TheoryC1Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"쇼핑몰 만들어줘"`}
        description="너무 광범위한 명령. 에이전트가 추측 모드로 진입."
        reason="페르소나·핵심 기능·기술 스택 모두 빈 채로 출발"
        avoidance={[
          '컨텍스트 없이 명령만 받음',
          '매번 다른 결과 (LLM 출력 분산)',
          '결과: 재작업 반복',
        ]}
      />

      <Warning
        level="컨텍스트 앵커링"
        tone="good"
        title={`"CLAUDE.md를 본 상태에서 회원가입 화면을 만들어줘"`}
        description="고정점이 명확한 명령 — 헌법 위에서 작동."
        reason="페르소나·기능·스택이 자동 로드 컨텍스트로 작동"
        avoidance="명령은 짧아져도 결과는 일관 — 컨텍스트가 큰 짐을 진다"
      />
    </div>
  );
}
