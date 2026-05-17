// Source: lectures/S1/lecture.md lines 453-468
// Type: process (검증 흐름 정리 — sequential)
// D-035: emoji ✅/❌  텍스트 "통과/실패"
// D-040: sequential 흐름 — 세로 inline JSX (StepGuide 부적합)
// Fix: 분기는 3단계 모두 통과한 뒤 — 세로 누적  마지막에 2-col 분기

export default function S1TheoryC3FlowSummary() {
  const steps = [
    { num: '1', title: '출처 클릭', detail: 'URL을 직접 클릭' },
    { num: '2', title: '원문 확인', detail: '페이지가 진짜 그 내용인가' },
    { num: '3', title: '신뢰성 판단', detail: '1차 자료인가, 검증 가능한가' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          검증 흐름 정리
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        3단계를 모두 통과한 정보만 워크시트에 옮긴다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        어느 한 단계라도 실패하면 검증 안 된 정보로 분류해 별도 메모에 둔다.
      </p>

      {/* 좌 (세로 흐름)  우 (분기) */}
      <div className="grid grid-cols-[minmax(280px,340px)_140px_1fr] gap-4 items-start max-w-5xl">
        {/* 좌: 입력  3 단계 누적 */}
        <div className="flex flex-col gap-2">
          <div className="rounded-2xl border border-divider bg-bg-soft p-3 text-center">
            <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
              입력
            </div>
            <p className="text-sm font-bold text-text mt-0.5">AI 답변</p>
          </div>

          {steps.map((s, i) => (
            <div key={i}>
              <div className="flex justify-center my-1">
                <span className="text-accent text-xl font-bold leading-none">↓</span>
              </div>
              <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-3 grid grid-cols-[32px_1fr] gap-2 items-center">
                <span className="text-accent text-base font-bold tabular-nums tracking-wider">
                  {s.num}
                </span>
                <div>
                  <div className="text-sm font-bold text-text leading-tight">
                    {s.title}
                  </div>
                  <div className="text-xs text-text-sub leading-snug mt-0.5">
                    {s.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 중: 마지막 분기 화살표 (3단계 후  ) */}
        <div className="flex flex-col items-center justify-end h-full pb-16 gap-3">
          <span className="text-accent text-base font-bold tracking-wider uppercase whitespace-nowrap">
            3단계 후
          </span>
          <span className="text-accent text-4xl font-bold leading-none">→</span>
          <span className="text-text-muted text-sm font-semibold tracking-wider uppercase whitespace-nowrap">
            분기
          </span>
        </div>

        {/* 우: 분기 결과 (마지막 단계 직후 정렬) */}
        <div className="flex flex-col gap-3 justify-end h-full pb-2">
          <div className="rounded-2xl border-l-4 border-success bg-success-soft p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-success" />
              <span className="text-success text-xs font-semibold tracking-wider uppercase">
                통과
              </span>
            </div>
            <p className="text-sm font-bold text-text leading-snug">검증된 정보</p>
            <p className="text-xs text-text-sub leading-snug mt-0.5">워크시트에 옮김</p>
          </div>

          <div className="rounded-2xl border-l-4 border-danger bg-danger-soft p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-danger" />
              <span className="text-danger text-xs font-semibold tracking-wider uppercase">
                어느 단계라도 실패
              </span>
            </div>
            <p className="text-sm font-bold text-text leading-snug">검증 안 된 정보</p>
            <p className="text-xs text-text-sub leading-snug mt-0.5">별도 메모로 분리</p>
          </div>
        </div>
      </div>
    </>
  );
}
