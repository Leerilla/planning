// Source: lectures/S7/lecture.md L885, L896-898 (E2E 통과 + scenario-verifier 통과 두 증거)
// Type: comparison (inline JSX — 3-row 3-col 책임 분리 표)
// S7 T16a (2026-05-25): 강사 분석 — Step 1-2 E2E와 Step 3 verifier 중복 의문
//                       lecture.md 원문 "두 증거" 메시지를 학생 화면에 명시화
// 위치: a25 (Step 3 검증 기준) 직후, a26 (Step N 산출물 정리) 직전

export default function S7ActivityStep3TwoEvidences() {
  const rows = [
    {
      axis: '증거 종류',
      e2e: '동작 증거 (실행 로그)',
      verifier: 'PRD 일치 증거 (보고서)',
    },
    {
      axis: '검증 방식',
      e2e: '실제 브라우저 실행',
      verifier: '코드 + docs/prd.md 매핑',
    },
    {
      axis: '단독으로 잡는 결함',
      e2e: '환경 의존 / 런타임 에러 / UI 미동작',
      verifier: '누락된 화면 / 시나리오에 없는 코드 추가',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          Step 3 마무리 · 두 증거
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug mb-1">
        두 증거 — E2E 통과 + scenario-verifier 통과
      </h2>

      <p className="text-text-sub text-sm mb-3 max-w-4xl leading-snug">
        각 도구는 다른 종류의 증거를 만든다. 둘 다 통과해야 다음 단계 진입.
      </p>

      <div className="max-w-5xl overflow-hidden rounded border border-divider">
        <div className="grid grid-cols-[160px_1fr_1fr] bg-bg-soft px-4 py-2 border-b border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">축</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">
            E2E (Step 1-2)
          </div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">
            scenario-verifier (Step 3)
          </div>
        </div>

        {rows.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[160px_1fr_1fr] px-4 py-2.5 border-b border-divider last:border-b-0"
          >
            <div className="text-sm font-semibold text-text leading-snug">{row.axis}</div>
            <div className="text-sm text-text leading-snug">{row.e2e}</div>
            <div className="text-sm text-text-sub leading-snug">{row.verifier}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 max-w-5xl border-l-4 border-accent bg-bg-soft rounded-r px-4 py-2.5">
        <p className="text-sm text-text leading-snug">
          <span className="font-semibold text-accent">핵심: </span>
          한 증거만으로는 배포 진입 불가. 두 증거가 모두 손에 있어야 다음 단계.
        </p>
      </div>
    </>
  );
}
