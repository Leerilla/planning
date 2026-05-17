// Source: lectures/S5/lecture.md lines 914-916 (5-2 미통과 항목 메모)
// Type: activity (note)

export default function S5Activity_5_2_Memo() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 5-2 · 산출물: docs/review-notes.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        미통과 항목 메모
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        본 학습 시간 내 모두 수정 안 해도 된다. <span className="highlight-mark">화면 1 나머지 Task와 함께 보강</span>.
      </p>

      <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-6 max-w-4xl space-y-3">
        <p className="text-base text-text leading-relaxed">
          미통과 항목 → <strong className="text-accent">docs/review-notes.md</strong>에 메모
        </p>
        <p className="text-base text-text-sub leading-relaxed">
          예시: "Task 1.2 (이미지 업로드)에서 rules/architecture.md의 폴더 원칙 일부 위반 — 화면 1 마무리 시 보강"
        </p>
        <p className="text-sm text-text-sub italic leading-relaxed">
          본 학습 후 과제 단계로 인계 — 화면 1 나머지 Task(#2-#4) 빌드 시 같이 처리.
        </p>
      </div>
    </>
  );
}
