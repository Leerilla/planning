// Source: lectures/S8/captures/lecture.md (#### 5 분석 도구 — Sentry 에러 자동 수집)
// Type: concept
// Pattern: concept (intro + pre flow + aside)
// D-053: Sentry 본격 정의
// S8 T19d (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화 (vertical → 한 줄 grid)
//                       D-035/D11/D21 위반 emoji 제거 (⚠ / ✓ → 단순 번호 + 색 강조)

export default function S8TheoryC5Sentry() {
  // 4단계 — step 3는 warning(사용자 떠남), step 4는 success(Sentry 있을 때)
  const steps = [
    { num: 1, label: '사용자가 에러 만남', detail: '예: API timeout, 버튼 무반응', tone: 'normal' },
    { num: 2, label: '"이거 안 되네" 한 마디', detail: '내부 화면에서 짧은 반응', tone: 'normal' },
    { num: 3, label: '그냥 떠남', detail: '작업자는 영원히 모름', tone: 'warning' },
    { num: 4, label: 'Sentry 있으면', detail: '에러 즉시 자동 전송 + 발생 컨텍스트 (페이지·버튼·입력)', tone: 'success' },
  ];

  const toneClass = (tone) => {
    if (tone === 'warning') return 'border-warning bg-warning-soft';
    if (tone === 'success') return 'border-success bg-success-soft';
    return 'border-accent bg-bg-soft';
  };
  const numColor = (tone) => {
    if (tone === 'warning') return 'text-warning';
    if (tone === 'success') return 'text-success';
    return 'text-accent';
  };

  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 5 · 도구 2 · Sentry
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-text leading-snug mb-1">
        Sentry — 에러 자동 수집
      </h2>

      <p className="text-sm text-text-sub mb-2 max-w-4xl leading-snug">
        <span className="font-bold text-text">답하는 질문</span>: <em className="text-accent italic">"우리가 모르는 에러가 얼마나 있는가?"</em>
      </p>

      <p className="text-sm text-text mb-3 max-w-4xl leading-snug">
        사용자는 에러를 <span className="font-semibold">알려주지 않음</span>. 본인이 만든 코드의 빈틈을 사용자가 발견하지만 보고 의무가 없음.
      </p>

      <ul className="flex flex-col gap-1.5 max-w-5xl">
        {steps.map((s) => (
          <li
            key={s.num}
            className={`border-l-4 rounded-r grid grid-cols-[28px_180px_1fr] gap-3 items-center px-4 py-2 ${toneClass(s.tone)}`}
          >
            <span className={`text-sm font-bold tabular-nums text-center ${numColor(s.tone)}`}>{s.num}</span>
            <span className="text-sm font-bold text-text leading-snug">{s.label}</span>
            <span className="text-xs text-text-sub leading-snug">{s.detail}</span>
          </li>
        ))}
      </ul>

      <aside className="mt-3 border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 max-w-5xl">
        <p className="text-xs text-text leading-snug">
          시드 6번 예시: OpenAI API 호출이 5% 사용자에게 timeout 발생 → Sentry가 알려주면 retry 로직 추가 결정. 알리지 않았다면 5% 사용자는 "안 됨"만 경험하고 떠남.
        </p>
      </aside>
    </>
  );
}
