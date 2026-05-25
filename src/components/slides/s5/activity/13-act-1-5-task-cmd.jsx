// Source: lectures/S5/lecture.md lines 573-586 (1-5 Task 화면 단위 재구성 명령)
// Type: activity (inline 2-area — 좌 명령 / 우 docs/tasks.md 예시)
// T14b (2026-05-24): docs/prompt.md 참조 + 화면 단위 명시 추가
// T16i (2026-05-24): eyebrow "활동 1-5" → "활동 2-1" (S5 재기획: Task 설계가 Step 2로 분리)
// T18a (2026-05-24): 강사 요구 — prompt.md 참조 → #21의 docs/screen-*.png + docs/prd.md + docs/workflow.md
//                    참조로 변경. 우측에 docs/tasks.md 예시 추가 (단일 pre → 2-area)

export default function S5Activity_1_5_TaskCmd() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-1 · 산출물: <code className="text-accent font-semibold">docs/tasks.md</code> 재작성 명령
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        Task 화면 단위 재구성 명령
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        직전 단계에 배치한 <code className="text-accent font-semibold">docs/screen-*.png</code> 시안과 PRD·워크플로를 근거로 <span className="highlight-mark">화면 단위 Task</span>로 그룹화.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            Claude Code 명령
          </div>
          <pre className="bg-bg-soft border border-divider rounded p-4 text-xs text-text leading-relaxed whitespace-pre-wrap">{`"docs/prd.md, docs/workflow.md,
 docs/screen-1.png, docs/screen-2.png ...
 (Stitch 산출 화면 시안)을 모두 참조해서
 docs/tasks.md를 다시 작성해줘.

 기준:
 - 각 화면(docs/screen-N.png) 단위로
   Task를 그룹화
 - 각 Task는 1-3개 파일 수정 단위
 - 화면 1을 먼저 완성하고
   다음 화면으로 넘어가는 순서
 - 의존성 명시 (선행 Task 번호)
 - 너무 작은 Task와 너무 큰 Task 피함"`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            결과 예시 · <code className="text-accent font-semibold">docs/tasks.md</code>
          </div>
          <pre className="bg-bg-soft border-l-2 border-accent rounded p-4 text-xs text-text leading-relaxed whitespace-pre-wrap">{`# Tasks

## 화면 1 (docs/screen-1.png)
   카피 입력 화면
- 1.1 입력 폼 컴포넌트
       (Form.jsx)
- 1.2 이미지 업로드 처리
       (Upload.jsx)
- 1.3 키워드 검증
       (validation.js)
- 1.4 카피 생성 트리거
       (Form.jsx, 의존: 1.1)

## 화면 2 (docs/screen-2.png)
   카피 결과 화면
- 2.1 OpenAI 클라이언트
       (lib/openai.js)
- 2.2 결과 카드 컴포넌트
       (Result.jsx, 의존: 2.1)
- 2.3 복사 버튼
       (Copy.jsx)

의존성: 1.* → 2.*
(입력 화면 완성 후 결과 화면)`}</pre>
        </div>
      </div>
    </>
  );
}
