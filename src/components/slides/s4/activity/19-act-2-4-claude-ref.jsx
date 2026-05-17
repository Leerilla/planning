// Source: lectures/S4/lecture.md lines 787-805 (2-4 CLAUDE.md 참조 지침 추가)
// Type: activity (code block — §5 시스템 설계 참조 지침)

export default function S4Activity_2_4_ClaudeRef() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-4 · 산출물: CLAUDE.md §5 시스템 설계 참조 지침
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        CLAUDE.md 마지막에 참조 지침 추가
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        docs/와 rules/ 6개 파일을 <span className="highlight-mark">항상 참조</span>하는 헌법 조항 — 디자인 가이드는 다음 단계.
      </p>

      <pre className="text-sm text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-line max-w-5xl">{`## 5. 시스템 설계 참조 지침

다음 문서를 항상 참조한다:
- docs/prd.md: 제품 요구사항
- docs/persona.md: 페르소나 가설
- docs/painpoints.md: 검증된 페인포인트
- rules/coding-style.md: 네이밍·포맷
- rules/commit-convention.md: 커밋 형식
- rules/architecture.md: 폴더 구조 원칙

기능 구현 시 docs/prd.md의 핵심 기능 3개에 매핑되는지 확인.
모호함이 발견되면 임의 해석하지 말고 작업자에게 확인 요청.

(디자인 가이드는 다음 단계에서 추가됨)`}</pre>
    </>
  );
}
