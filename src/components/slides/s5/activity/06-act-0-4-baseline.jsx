// Source: lectures/S5/lecture.md lines 469-475 (0-4 베이스라인과 Stitch 점검)
// Type: activity (code + URL note)

export default function S5Activity_0_4_Baseline() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-4 · 산출물: 베이스라인 + Stitch 접속
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        베이스라인과 Stitch 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        토큰 베이스라인 측정 + Stitch 또는 폴백 도구 접속 확인.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            토큰 베이스라인
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
{`/cost`}
          </p>
          <p className="text-sm text-text-sub mt-3 leading-relaxed">
            출력 결과 메모 → Step N에서 비교.
          </p>
        </div>

        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Stitch 접속
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
            stitch.withgoogle.com
          </p>
          <p className="text-sm text-text-sub mt-3 leading-relaxed">
            안 되면 v0 또는 Lovable로 폴백.
          </p>
        </div>
      </div>
    </>
  );
}
