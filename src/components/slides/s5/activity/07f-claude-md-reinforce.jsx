// Source: lectures/S5/request.md (T13b → T16h 재매핑, 2026-05-24)
// Type: activity (inline 2-area — 좌 AI 명령 / 우 강화된 claude.md 5번 영역 미리보기)
// T16h: eyebrow "활동 3-6" → "활동 1-11" (S5 재기획: claude.md 지침 강화가 Step 1 화면 설계 마지막 단계로 이동)
// T17b: 활동 1-11 → 활동 1-10 (a27 rules/design.md 제거에 따른 재매핑)
// 새 흐름: a27a(docs 배치 1-9) 직후 → a27b(claude.md 1-10) → Step 1 validation

export default function S5ActivityClaudeMdReinforce() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-10 · <code className="text-accent font-semibold">/project/claude.md</code> 지침 강화 — 화면 설계 마무리
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        추가 항목을 AI가 <span className="highlight-mark">검토 → 강화</span> 제안
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        직전 단계에서 추가한 docs 항목이 그저 "리스트 추가"에 머물지 않도록, AI가 사용 맥락과 우선순위를 함께 명시하도록 지침 강화.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Claude Code 명령
          </div>
          <pre className="text-xs text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`"/project/claude.md를 열어
 5번 시스템 설계 참조 지침을 확인해.

 방금 docs/design.md와
 docs/screen-*.png가 추가됐는데
 단순 리스트만 있다.

 다음 3가지를 지침으로 추가해서
 강화해줘:
 1) docs/screen-*.png는 빌드 명령마다
    화면 단위로 인용
 2) docs/design.md의 토큰을
    임의로 무시·재정의하지 말 것
 3) docs/ 항목이 PRD와 충돌하면
    docs/prd.md 우선

 수정안을 먼저 보여주고
 내 확인을 받은 뒤 적용."`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            강화된 <code className="text-accent font-semibold">/project/claude.md</code> 5번 영역 미리보기
          </div>
          <pre className="text-xs text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`## 5. 시스템 설계 참조 지침

다음 문서를 항상 참조한다:
- docs/prd.md
- docs/persona.md
- docs/painpoints.md
- docs/workflow.md
- docs/design.md
- docs/screen-1.png, screen-2.png ...
- rules/coding-style.md
- rules/commit.md
- rules/architecture.md

참조 우선순위:
- docs/screen-*.png는
  빌드 명령마다 화면 단위로 인용.
- docs/design.md의 색·간격·타이포 토큰은
  임의로 무시·재정의 금지.
- docs/ 항목이 PRD와 충돌하면
  docs/prd.md를 우선.`}</pre>
          <p className="text-xs text-text-sub leading-relaxed mt-2 border-l-2 border-accent pl-3">
            "리스트 추가"에서 "사용 맥락 + 우선순위 명시"로 한 단계 강화. Step 4 빌드 명령 정확도 상승.
          </p>
        </div>
      </div>
    </>
  );
}
