// Source: lectures/S3/lecture.md lines 1247-1275 (4-4 .claude/CLAUDE.md 양식)
// Type: activity (code block — .claude/CLAUDE.md 양식)
// D-044 §3.5: .claude/CLAUDE.md 양식 SSOT

export default function S3Activity_4_4_ClaudeMd() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-4 · 산출물: planning_project/.claude/CLAUDE.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        Claude Code 컨텍스트 파일
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Claude Code가 자동으로 본 파일을 컨텍스트로 읽는다. <span className="highlight-mark">다음 단계 작업이 빨라진다</span>.
      </p>

      <pre className="text-sm text-text bg-bg-soft border-l-2 border-accent rounded p-5 leading-relaxed whitespace-pre-wrap max-w-4xl">{`# Claude Code 컨텍스트

## 프로젝트
{프로젝트 이름}

## 핵심 문서
- docs/prd.md
- docs/persona.md
- docs/painpoints.md

## 빌드 원칙
- 핵심 기능 3개만 구현
- 제약사항 준수
- 모호함은 임의 해석 금지, 확인 요청

## 다음 단계 시작 시
1. docs/prd.md를 먼저 읽기
2. 핵심 기능 3개 중 어느 것부터 시작할지 결정
3. src/ 폴더에 코드 작성`}</pre>
    </>
  );
}
