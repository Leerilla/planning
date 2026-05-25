// Source: lectures/S7/lecture.md L712-735 (3-1. scenario-verifier.md 작성)
// Type: example (inline JSX — sub-agent 스펙)
// Phase 6 fix (2026-05-16): max-w 통일 + pre 폰트 컴팩트 + aside 정렬
// S7 T16c (2026-05-25): 강사 요구 — 화면 겹침 해소 + aside 좌측 / pre 우측 2-column

export default function S7Activity_3_1_AgentSpec() {
  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          활동 3-1 · sub-agent 작성
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-text leading-snug mb-1">
        3-1. scenario-verifier.md 작성
      </h2>

      <p className="text-xs text-text-sub mb-3 max-w-4xl leading-snug">
        <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">
          .claude/agents/scenario-verifier.md
        </code>{' '}
        파일 작성
      </p>

      <div className="grid grid-cols-[280px_1fr] gap-3 max-w-5xl">
        <aside className="border-l-4 border-accent bg-accent-soft rounded-r px-4 py-3 self-start">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Agent 설계 6원칙
          </p>
          <ul className="text-xs text-text leading-snug space-y-1">
            <li>- 단일 책임 (시나리오 검증)</li>
            <li>- 최소 권한 (Read/Grep/Glob)</li>
            <li>- 결정적 출력 (3단 구조)</li>
            <li>- 책임 분리 (수정 권한 없음)</li>
            <li>- 호출 시점 (빌드 완료 후)</li>
            <li>- 입출력 계약 (본문 명시)</li>
          </ul>
        </aside>

        <pre className="bg-bg-soft border border-divider rounded px-4 py-3 text-xs whitespace-pre-wrap leading-snug text-text overflow-auto">
{`---
name: scenario-verifier
description: 빌드 완료 후 호출.
  docs/prd.md의 핵심 시나리오 1개와 전체 코드를 비교해
  시나리오가 처음부터 끝까지 통과 가능한지 검증합니다.
tools: Read, Grep, Glob
model: sonnet
---

시나리오 단위 PRD 검증 전문가의 역할.

**입력**: 검증할 시나리오 설명 1개

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
- 보고서는 한국어`}
        </pre>
      </div>
    </>
  );
}
