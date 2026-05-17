// Source: lectures/S5/lecture.md lines 492-504 (1-1 화면 분석이 필요한 이유)
// Type: activity (diagram sequential 4단계)

export default function S5Activity_1_1_Why() {
  const steps = [
    'PRD는 "기능 단위"로 정의',
    '빌드는 "화면 단위"로 진행',
    '한 화면에 여러 기능 / 한 기능이 여러 화면',
    '이 매핑이 명확하지 않으면 매번 흔들림',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1 · 산출물: 분석 필요성 인식
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        화면 분석이 필요한 이유
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        기능 단위 ↔ 화면 단위의 매핑이 빌드 직전 필수 절차.
      </p>

      <div className="space-y-3 max-w-4xl">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border-2 border-accent text-accent text-base font-bold tabular-nums shrink-0">
              {i + 1}
            </span>
            <div className="flex-1 border-l-2 border-accent bg-bg-soft p-4">
              <p className="text-base text-text leading-relaxed">{s}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-l-2 border-accent pl-4 max-w-4xl">
        <p className="text-base font-bold text-accent">
          화면 분석은 빌드 전의 필수 절차이다.
        </p>
      </div>
    </>
  );
}
