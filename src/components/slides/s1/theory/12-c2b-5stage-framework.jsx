// Source: lectures/S1/lecture.md lines 123-137
// Type: process (sequential 5단계 인과)
// D-040: ProcessSlide 패턴 부재 → inline JSX 세로 흐름 (StepGuide 부적합)
// D-036/D-037: dot ≥ 8px, eyebrow/highlights 활용

export default function S1TheoryC2b5StageFramework() {
  const stages = [
    {
      name: "문제",
      desc: "한 문장의 페인포인트 (5 Whys로 깊이 파기)",
      example: "1인 셀러는 새 상품마다 카피 작성에 1-2시간을 쓴다",
      emphasis: true,
    },
    {
      name: "페르소나",
      desc: "6줄짜리 가설 페르소나",
      example: "월 매출 100-500만원 · 1인 운영 · 카피 직접 작성",
      emphasis: true,
    },
    {
      name: "가설",
      desc: "검증 가능한 가설 3개",
      example: "카피 자동 생성으로 작성 시간을 5분 이내로 단축할 수 있다",
      emphasis: true,
    },
    {
      name: "검증",
      desc: "능동·수동 두 축의 데이터",
      example: "셀러 10명 인터뷰 + 카페 50건 후기 스크래핑",
      emphasis: false,
    },
    {
      name: "정제",
      desc: "PRD + 기능명세 + 와이어프레임",
      example: "핵심 기능 3개로 압축한 PRD + 입력·결과 와이어프레임",
      emphasis: false,
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          기획 5단계
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-2">
        한 단계의 출력이 다음 단계의 입력이 된다
      </h2>
      <p className="text-base text-text-sub mb-8">
        사슬은 가장 약한 고리에서 끊어진다.
      </p>

      {/* Sequential stages — 좌측 번호 + 화살표 + 단계별 예시 */}
      <ul className="flex flex-col gap-1 max-w-4xl">
        {stages.map((s, i) => (
          <li key={i} className="flex flex-col items-stretch">
            <div
              className={`grid grid-cols-[52px_120px_1fr] gap-4 items-center rounded-2xl border ${
                s.emphasis ? 'border-accent bg-success-soft' : 'border-divider bg-bg-soft'
              } px-5 py-3`}
            >
              <span
                className={`text-base font-bold tabular-nums tracking-wider text-center ${
                  s.emphasis ? 'text-accent' : 'text-text-muted'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-lg font-bold tracking-tight text-text">{s.name}</span>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-text-sub tracking-tight leading-snug">
                  {s.desc}
                </span>
                <span className="text-xs text-text-muted tracking-tight leading-snug border-l-2 border-accent pl-2 italic">
                  예시 · {s.example}
                </span>
              </div>
            </div>
            {i < stages.length - 1 ? (
              <span className="block text-accent text-lg font-bold tabular-nums leading-none pl-[78px] py-0.5">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Conclusion */}
      <p className="text-sm text-text-muted mt-6 max-w-3xl leading-relaxed">
        본 자료에서 손에 쥐는 것은 <span className="text-accent font-semibold">1·2·3단계의 1차 가설</span>이다. 완성이 아니라 출발이다.
      </p>
    </>
  );
}
