// Source: lectures/S6/lecture.md lines 260-286 (#### prd-reviewer 표준 구조)
// Type: example (CodeBlock markdown + file path label)
// Pattern: D-042 파일 경로 라벨 의무 (.claude/agents/prd-reviewer.md)
// Profile: hierarchical / comparison / medium-high / balanced
// Interactive: static (코드 블록)

export default function S6TheoryC2PrdReviewerSpec() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          prd-reviewer · 표준 구조
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        sub-agent 명세 작성 양식
      </h2>

      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        모든 sub-agent는 이 구조를 따른다. frontmatter 4필드 + 본문 역할/입력/절차/출력/주의.
      </p>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">파일 경로:</span>
        <code className="text-xs font-semibold text-accent bg-bg-soft px-2 py-1 rounded">.claude/agents/prd-reviewer.md</code>
      </div>

      <pre className="text-sm text-text bg-bg-soft rounded p-4 leading-relaxed whitespace-pre-wrap border border-divider max-w-4xl">{`---
name: prd-reviewer
description: 코드 작성/수정 직후 호출.
  docs/prd.md를 읽고 현재 코드와 비교해 일치성을 보고합니다.
tools: Read, Grep, Glob
model: sonnet
---

PRD 일치성 검토 전문가의 역할을 수행합니다.

**입력**: 방금 수정된 파일 경로

**작업 절차**:
1. docs/prd.md를 Read로 읽기
2. 입력 파일을 Read로 읽기
3. 코드 기능을 PRD 핵심 기능에 매핑

**출력 형식**:
- 일치: PRD 핵심 기능과 매핑
- 불일치: 임의 기능 또는 모호한 표현
- 검토 외: rules/ 가이드 점검

**주의**: 수정 권한 없음 (tools에 Write/Edit 없음)`}</pre>
    </>
  );
}
