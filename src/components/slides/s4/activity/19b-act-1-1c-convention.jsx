// Source: lectures/S4/request.md (실습 #5) — claude.md에 AI 추천 코드 컨벤션 작성 (2026-05-21 신규)
// Type: activity (inline 2-area — 좌 질문 / 우 AI 답변 + /project/claude.md 반영)

export default function S4Activity_1_1c_Convention() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1c · 산출물: <code className="text-accent font-semibold">/project/claude.md</code>에 AI 추천 코드 컨벤션 기록
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        코드 컨벤션 AI 추천 — <span className="highlight-mark">스택에 맞춰</span> 받아서 명시
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        직전 단계에서 정한 스택을 근거로 컨벤션 추천 요청. 결과를 <code className="text-accent font-semibold">/project/claude.md</code> 3번 영역에 그대로 기록.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Step 1 · AI에게 추천 요청
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`"/project/claude.md의 2번
 기술 스택을 보고
 그 스택에 맞는 코드 컨벤션을
 추천해줘.
 - 네이밍 규칙
 - 파일/폴더 명명
 - 커밋 메시지 형식
 - 테스트 도구
 1인 작업자 기준,
 과한 규칙은 빼고."`}</pre>
          <p className="text-xs text-text-sub leading-relaxed mt-2">
            "1인 작업자 기준"을 명시해 팀 규모 컨벤션을 피한다.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Step 2 · 답변 → /project/claude.md 3번 영역에 작성
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`## 3. 코딩 가이드라인

AI가 추천한 코드 컨벤션:
- 네이밍: camelCase 함수,
  PascalCase 컴포넌트
- 파일: kebab-case .jsx
- 커밋: feat / fix / docs
  + 한 줄 요약 (한국어)
- 테스트: 통합만, vitest 1개
  (단위 테스트 생략)
- 주석: 왜만 (무엇은 제외)

룰은 작업자가 1줄씩
직접 확인하고 채택.`}</pre>
          <p className="text-xs text-text-sub leading-relaxed mt-2">
            "왜만 적기" 같은 1줄 룰은 다음 세션 디버깅 비용을 크게 줄인다.
          </p>
        </div>
      </div>
    </>
  );
}
