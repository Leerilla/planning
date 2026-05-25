// Source: lectures/S6/lecture.md lines 826-862 (#### 2-1. git-committer.md 작성)
// Type: example (CodeBlock markdown + file path header card)
// Pattern: D-042 파일 경로 라벨 의무 (.claude/agents/git-committer.md)
// S6 T7 (2026-05-24): 강사 요구 — 레이아웃 안맞음 → #27/#51와 동일 카드 헤더+본문 통합
// S6 T14b (2026-05-24): 강사 요구 — 화면 겹침 → 헤더 mb 축소, pre 폰트 text-xs, leading-snug

export default function S6ActivityStep2GitCommitterSpec() {
  return (
    <>
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-1 · 산출물: sub-agent 명세 작성
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-text leading-snug mb-1">
        2-1. git-committer.md 작성
      </h2>

      <p className="text-xs font-medium text-text-sub tracking-tight leading-snug mb-2 max-w-4xl">
        모든 sub-agent는 이 구조를 따른다. frontmatter 4필드 + 본문 역할/입력/절차/출력/주의.
      </p>

      <div className="border border-divider rounded overflow-hidden max-w-5xl">
        <div className="bg-bg-soft border-b border-divider px-4 py-1.5 flex items-center gap-3">
          <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">파일 경로</span>
          <code className="text-xs font-semibold text-accent">.claude/agents/git-committer.md</code>
        </div>
        <pre className="text-xs text-text bg-bg-soft px-4 py-3 leading-snug whitespace-pre-wrap">{`---
name: git-committer
description: 메인 에이전트 응답 종료 시 호출.
  변경된 파일을 분석해 CLAUDE.md 형식대로 커밋·push.
tools: Bash, Read
model: sonnet
---

git 커밋 자동화 전문가의 역할.

**입력**: 응답 종료 신호 (변경 파일은 git status로 감지)

**작업 절차**:
1. \`git status --porcelain\` 실행 → 변경 파일 확인
2. 변경 없으면 즉시 종료 "변경 없음" 보고
3. CLAUDE.md를 Read로 읽고 커밋 형식 확인
4. rules/commit-convention.md를 Read로 읽고 type 목록 확인
5. \`git diff --stat\`으로 변경 요약
6. [type] description 형식 메시지 작성
7. git add → git commit -m "..." → git push

**출력 형식** (3단 구조):
- 변경 파일: 목록
- 커밋 메시지: 전문
- 실행 결과: push 성공 여부와 commit hash

**주의**:
- 변경 없으면 커밋 안 함
- type은 rules/commit-convention.md에 정의된 것만
- 추측 금지. git status 그대로 처리
- 보고서는 한국어`}</pre>
      </div>
    </>
  );
}
