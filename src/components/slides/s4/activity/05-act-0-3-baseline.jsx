// Source: lectures/S4/lecture.md lines 505-520 (0-3 토큰 베이스라인 + PRD 복사)
// Type: activity (code + 복사 명령)

export default function S4Activity_0_3_Baseline() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-3 · 산출물: 베이스라인 토큰 + docs/prd.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        토큰 베이스라인 + PRD 복사
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        시작 토큰을 메모. 마지막 Step에서 비교. PRD는 S3에서 만든 prd.md를 복사.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            Claude Code 세션 안에서
          </div>
          <p className="text-2xl font-bold text-text leading-tight tracking-wider">
            /cost
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            PRD 복사 (S3 산출물)
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`mkdir -p docs
cp ../planning_project/docs/prd.md docs/
# 또는 같은 폴더면 생략`}
          </p>
        </div>
      </div>
    </>
  );
}
