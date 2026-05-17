// Source: lectures/S5/lecture.md lines 938-944 (N-2 /cost 비교)
// Type: activity (code + note)

export default function S5Activity_N_2_Cost() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 N-2 · 산출물: 토큰 비교 메모
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        /cost 비교
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Step 0 시작 토큰과 Step N 종료 토큰의 차이를 메모.
      </p>

      <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-6 max-w-3xl space-y-3">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          명령
        </div>
        <p className="text-base font-medium text-text leading-relaxed tracking-tight">
{`/cost`}
        </p>
        <p className="text-sm text-text-sub mt-3 leading-relaxed">
          시작 → 종료 토큰 차이를 본 학습 회고에 반영. 화면 1 빌드 평균 비용 베이스라인.
        </p>
      </div>
    </>
  );
}
