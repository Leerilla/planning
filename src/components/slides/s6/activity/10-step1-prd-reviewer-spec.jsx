// Source: lectures/S6/lecture.md lines 749-785 (#### 1-2. prd-reviewer.md 작성)
// Type: example (CodeBlock markdown + file path header card)
// Pattern: D-042 파일 경로 라벨 의무 (.claude/agents/prd-reviewer.md)
// S6 T7 (2026-05-24): 강사 요구 — 레이아웃 안맞음 → #27/#51와 동일 카드 헤더+본문 통합
// S6 T14b (2026-05-24): 강사 요구 — 화면 겹침 → 헤더 mb 축소, pre 폰트 text-xs, leading-snug

export default function S6ActivityStep1PrdReviewerSpec() {
  return (
    <>
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-2 · 산출물: sub-agent 명세 작성
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-text leading-snug mb-1">
        1-2. prd-reviewer.md 작성
      </h2>

      <p className="text-xs font-medium text-text-sub tracking-tight leading-snug mb-2 max-w-4xl">
        모든 sub-agent는 이 구조를 따른다. frontmatter 4필드 + 본문 역할/입력/절차/출력/주의.
      </p>

      <div className="border border-divider rounded overflow-hidden max-w-5xl">
        <div className="bg-bg-soft border-b border-divider px-4 py-1.5 flex items-center gap-3">
          <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">파일 경로</span>
          <code className="text-xs font-semibold text-accent">.claude/agents/prd-reviewer.md</code>
        </div>
        <pre className="text-xs text-text bg-bg-soft px-4 py-3 leading-snug whitespace-pre-wrap">{`---
name: prd-reviewer
description: 코드 작성/수정 직후 호출.
  docs/prd.md를 읽고 현재 코드와 비교해 일치성을 보고합니다.
tools: Read, Grep, Glob
model: sonnet
---

PRD 일치성 검토 전문가의 역할을 수행합니다.

**입력**: 방금 수정된 파일의 경로

**작업 절차**:
1. docs/prd.md를 Read로 읽고 핵심 기능 3개와 제약사항 메모
2. 입력 파일을 Read로 읽기
3. 코드 기능을 PRD 핵심 기능에 매핑
4. rules/coding-style.md와 rules/architecture.md 점검

**출력 형식** (반드시 3카테고리로):
- 일치: PRD 핵심 기능과 매핑
- 불일치: 임의 기능 추가 또는 모호한 표현
- 검토 외: rules/ 가이드 점검

**주의**:
- 수정 권한 없음 (tools에 Write/Edit 없음)
- 추측하지 말고 PRD 그대로 비교
- 보고서는 한국어`}</pre>
      </div>
    </>
  );
}
