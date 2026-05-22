// Source: lectures/S7/lecture.md lines XXX-XXX (scenario-verifier 표준 구조)
// Type: example (markdown standard structure)
// D-054: 파일 경로 inline code + accent 강조 (scenario-verifier.md)
// Profile: hierarchical / comparison / medium / balanced

export default function S7TheoryC3ScenarioVerifierSpec() {
  return (
    <>
      {/* Header marker + label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          표준 구조
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        scenario-verifier 표준 구조
      </h2>

      {/* Subtitle */}
      <p className="text-text-sub text-lg mb-6 max-w-4xl leading-relaxed">
        Agent 설계 6원칙 모두 적용 + 책임 분리
      </p>

      {/* D-054: File path with accent inline code */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">
          파일 경로:
        </span>
        <code className="text-xs font-semibold text-accent bg-bg-soft px-2 py-1 rounded">
          .claude/agents/scenario-verifier.md
        </code>
      </div>

      {/* Code block with markdown structure */}
      <pre className="bg-bg-soft border border-divider rounded-xl p-4 text-xs whitespace-pre-wrap leading-relaxed max-w-4xl overflow-auto">
        <code>{`---
name: scenario-verifier
description: 빌드 완료 후 호출.
  docs/prd.md의 핵심 시나리오 1개와 전체 코드를 비교해
  시나리오가 처음부터 끝까지 통과 가능한지 검증합니다.
tools: Read, Grep, Glob
model: sonnet
---

시나리오 단위 PRD 검증 전문가의 역할.

**입력**: 검증할 시나리오 설명 1개
  (예: "셀러가 카피 입력 → 결과 확인")

**작업 절차**:
1. docs/prd.md를 Read로 읽고 시나리오 흐름 확인
2. Grep/Glob으로 시나리오 관련 파일 식별
3. 각 단계가 코드로 구현됐는지 추적
4. 화면 간 라우팅과 데이터 전달 점검
5. 막힘 지점이 있으면 구체적 위치 보고

**출력 형식** (3단 구조):
- 시나리오 통과 여부: 통과 / 부분 통과 / 미통과
- 막힘 지점: 어느 단계가 어디서 막히는지 (파일·줄)
- 수정 제안: 무엇을 추가/수정해야 하는지

**주의**:
- 수정 권한 없음 (tools에 Write/Edit 없음)
- 추측 금지. docs/prd.md와 실제 코드만 보고 판단
- 보고서는 한국어`}</code>
      </pre>
    </>
  );
}
