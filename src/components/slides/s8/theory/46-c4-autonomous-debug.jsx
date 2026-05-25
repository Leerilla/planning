// Source: lectures/S8/captures/lecture.md line 594-608 (#### 자율 디버깅 적용)
// Type: process
// Pattern: ProcessSlide with 4-step reveal
// Profile: logic=hierarchical / visual=comparison / tone=strong
// S8 T19d (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화 (vertical → 한 줄 grid)

export default function S8TheoryC4AutonomousDebug() {
  const steps = [
    {
      label: '에러 풀 메시지 복사',
      detail: 'F12 → Console 탭에서 "blocked by CORS policy..." 복사',
    },
    {
      label: '자율 디버깅 3원칙 명령',
      detail: '에러 그대로 + 분석 먼저 + 결과 검증',
    },
    {
      label: '수정 후 자동 재배포',
      detail: 'BE 코드 수정 → push → Railway 자동 빌드/배포',
    },
    {
      label: 'FE 새로고침 → 통과',
      detail: '에러 사라지면 통과',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 4 · 자율 디버깅
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-text leading-snug mb-1">
        자율 디버깅 적용
      </h2>

      <p className="text-sm text-text-sub mb-3 max-w-4xl leading-snug">
        직전 자료의 3원칙 그대로
      </p>

      <ul className="flex flex-col gap-1.5 max-w-5xl">
        {steps.map((s, idx) => (
          <li
            key={idx}
            className="border-l-4 border-accent bg-bg-soft rounded-r grid grid-cols-[28px_200px_1fr] gap-3 items-center px-4 py-2"
          >
            <span className="text-sm font-bold tabular-nums text-accent text-center">{idx + 1}</span>
            <span className="text-sm font-bold text-text leading-snug">{s.label}</span>
            <span className="text-xs text-text-sub leading-snug">{s.detail}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
