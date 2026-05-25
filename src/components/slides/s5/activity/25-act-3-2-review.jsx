// Source: lectures/S5/lecture.md lines 756-764 (3-2 시안 검토와 1회 수정)
// Type: activity (diagram 3 step)
// T16g (2026-05-24): eyebrow "활동 3-2" → "활동 1-7" (S5 재기획: 시안 검토가 Step 1 화면 설계로 이동)

export default function S5Activity_3_2_Review() {
  const steps = [
    '생성된 시안이 페르소나에 맞는지 확인',
    '안 맞으면 "조금 더 [형용사]게 해줘"로 1회 수정',
    '1회 수정 후 OK 판정 (디자인 정제는 다음 단계)',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-7 · 산출물: 검토 + 1회 수정
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        시안 검토와 1회 수정 원칙
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        본 단계는 동작 합격선 — <span className="highlight-mark">디자인 정제는 다음 단계</span>.
      </p>

      <div className="space-y-3 max-w-4xl">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border-2 border-accent text-accent text-base font-bold tabular-nums shrink-0">
              {i + 1}
            </span>
            <div className="flex-1 border-l-2 border-accent bg-bg-soft p-3">
              <p className="text-base text-text leading-relaxed">{s}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
