// Source: NextUnicorn 인용 (AI 활용 4 단계 워크플로우)
// Type: example (inline 4-card — AI 시대 콜드 메일 실행 단계)
// External ref: nextunicorn.kr insight 23e6cd6df02f25f5

export default function S2TheoryC3AIFourSteps() {
  const steps = [
    {
      num: 'STEP 1',
      title: '고객 리서치',
      desc: 'AI가 페르소나·회사·최근 활동의 Context를 빠르게 파악',
      icon: 'R',
    },
    {
      num: 'STEP 2',
      title: '개인화 오프닝',
      desc: 'LinkedIn·뉴스 기반 — 첫 줄 후크 자동 생성',
      icon: 'P',
    },
    {
      num: 'STEP 3',
      title: '최적 송신 시간',
      desc: 'STO(Send Time Optimization) 툴 — 개인별 메일 확인 패턴 학습',
      icon: 'T',
    },
    {
      num: 'STEP 4',
      title: '카피 작성',
      desc: '메타 프롬프팅 가이드라인 위에서 짧고 강력한 카피',
      icon: 'C',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          AI 활용 4 단계 — 메타 프롬프팅의 실행
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        평균 5%를 18%로 끌어올리는 4 단계
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        4 단계는 순서대로 진행 — <span className="highlight-mark">리서치 없이 개인화 오프닝 X / STO 없이 카피 X</span>.
      </p>

      {/* 4-card grid (2x2) */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {steps.map((s) => (
          <div
            key={s.num}
            className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 hover:bg-success-soft hover:border-success transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-accent bg-bg group-hover:border-success text-accent group-hover:text-success text-base font-bold transition-colors">
                {s.icon}
              </span>
              <div>
                <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
                  {s.num}
                </div>
                <div className="text-lg font-bold text-text tracking-tight leading-tight">
                  {s.title}
                </div>
              </div>
            </div>
            <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 외부 자료 메타 */}
      <div className="absolute top-6 right-8 text-text-muted text-xs tracking-wider">
        참고: NextUnicorn 인용
      </div>
    </>
  );
}
