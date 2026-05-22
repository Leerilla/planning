// Source: lectures/S4/request.md (실습 #4) — claude.md에 AI 추천 기술 스택 작성 (2026-05-21 신규)
// Type: activity (inline 2-area — 좌 질문 / 우 AI 답변 + /project/claude.md 반영)

export default function S4Activity_1_1b_TechStack() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1b · 산출물: <code className="text-accent font-semibold">/project/claude.md</code>에 AI 추천 기술 스택 기록
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        기술 스택 AI 추천 — 받아서 <span className="highlight-mark">claude.md에 명시</span>
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        스택을 작업자가 임의로 정하지 않고 PRD 기반으로 AI가 추천 — 그 결과를 <code className="text-accent font-semibold">/project/claude.md</code> 2번 영역에 그대로 기록.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Step 1 · AI에게 추천 요청
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`"docs/prd.md를 읽고
 이 프로젝트에 가장 적합한
 기술 스택을 추천해줘.
 - 프론트엔드
 - 백엔드
 - 데이터 저장
 - 외부 API
 각 항목 1줄 이유와 함께
 가장 단순한 조합으로."`}</pre>
          <p className="text-xs text-text-sub leading-relaxed mt-2">
            PRD를 근거로 두면 "유행 따라가는" 추천을 피할 수 있다.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Step 2 · 답변 → /project/claude.md 2번 영역에 작성
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`## 2. 기술 스택과 파일 구조

AI가 추천한 기술 스택:
- 프론트엔드: Next.js + Tailwind
  (1인 운영 빠른 화면 작업)
- 백엔드: Next.js API Routes
  (별도 서버 없이 단일 배포)
- 데이터: Vercel KV
  (작은 규모 KV로 충분)
- 외부 API: OpenAI GPT-4o
  (카피 품질 우선)

폴더 구조:
- /pages, /components, /lib`}</pre>
          <p className="text-xs text-text-sub leading-relaxed mt-2">
            "AI가 추천한 ..." 헤더로 명시해두면 다음 세션에서 근거를 빠르게 확인 가능.
          </p>
        </div>
      </div>
    </>
  );
}
