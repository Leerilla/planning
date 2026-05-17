// Source: lectures/S6/lecture.md lines 534-561
// Type: example (CodeBlock markdown + file path label)
// Pattern: D-042 파일 경로 라벨 의무 (.claude/agents/git-committer.md)
// Interactive: static (코드 블록)

export default function S6TheoryC4GitCommitterSpec() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          git-committer · 표준 구조
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        sub-agent 명세 작성 양식
      </h2>

      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        모든 sub-agent는 이 구조를 따른다. frontmatter 4필드 + 본문 역할/입력/절차/출력.
      </p>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-text-sub uppercase tracking-wider">파일 경로:</span>
        <code className="text-xs font-semibold text-accent bg-bg-soft px-2 py-1 rounded">.claude/agents/git-committer.md</code>
      </div>

      <pre className="text-sm text-text bg-bg-soft rounded p-4 leading-relaxed whitespace-pre-wrap border border-divider max-w-4xl">{`---
name: git-committer
description: 메인 에이전트 응답 종료 시 호출.
  변경 파일을 분석해 커밋 메시지 작성하고 push.
tools: Bash, Read
model: sonnet
---

git 커밋 자동화 전문가의 역할.

**입력**: 응답 종료 신호 (변경 파일은 git status로 감지)

**작업 절차**:
1. git status --porcelain → 변경 파일 확인
2. 변경 없으면 즉시 종료
3. CLAUDE.md 읽고 커밋 메시지 형식 확인
4. git diff --stat → 변경 요약
5. [type] description 형식 메시지 작성
6. git add → git commit → git push

**출력 형식**:
- 변경 파일: 목록
- 커밋 메시지: 전문
- 실행 결과: push 성공 여부`}</pre>
    </>
  );
}
