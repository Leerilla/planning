// Source: lectures/S1/lecture.md lines 720-756
// Type: example (활동 2-1 — 문제 정의 5줄)

export default function S1Activity_2_1_ProblemDef() {
  const checklist = [
    '5줄 모두 한 문장으로 끝나는가',
    '"그 어려움이 만드는 결과" 칸이 채워졌는가',
    '누가·상황·어려움·결과·해결 5개가 명확히 구분되는가',
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-1 · 15분 · 산출물: 문제 정의 5줄
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-4">
        문제 정의 워크시트 5줄
      </h2>

      {/* 2-col: 빈 양식 + 시드 6 적용 */}
      <div className="grid grid-cols-2 gap-4 mb-4 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            빈 양식
          </div>
          <p className="text-sm font-medium text-text-sub leading-relaxed tracking-tight whitespace-pre-line">
{`[문제 정의 워크시트]

- 누가: {페르소나. 짧고 구체적으로}
- 어떤 상황에서: {언제·어디서 이 문제를 만나는가}
- 어떤 어려움: {5 Whys로 도달한 진짜 문제}
- 그 어려움이 만드는 결과: {지속될 때 무슨 일이 벌어지는가}
- 현재 어떻게 해결하나: {지금 사람들이 사용하는 방법}`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-4">
          <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
            시드 6 적용
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`[문제 정의, 시드 6번]

- 누가: 1인 스마트스토어 셀러 (전업 1년차, 월 50-100 SKU)
- 어떤 상황에서: 새 상품 등록 후 카피 작성 시
- 어떤 어려움: 키워드를 자연스러운 문장으로 다듬는 데 시간이 든다
- 결과: 카피 품질이 ROAS 직결 → 한 달 수익 타격
- 현재 해결: 경쟁사 상세페이지 참고 + 본인 직접 다듬기`}
          </p>
        </div>
      </div>

      {/* 위험 경고 */}
      <div className="grid grid-cols-[80px_1fr] gap-3 items-center mb-4 max-w-5xl">
        <span className="text-warning bg-warning-soft border border-warning text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
          위험
        </span>
        <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed">
          한 칸이라도 비면 1-1로 돌아가 아이디어를 더 좁힌다. 특히 <span className="font-bold text-text">"그 어려움이 만드는 결과"</span> 칸이 비면 5 Whys가 충분히 깊지 않은 결정적 신호.
        </p>
      </div>

      {/* 자가 점검 체크리스트 3 */}
      <div className="max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          작업자 자가 점검
        </div>
        <ul className="grid grid-cols-3 gap-2">
          {checklist.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[28px_1fr] gap-3 items-center p-3 rounded-xl border border-divider hover:border-accent hover:bg-bg-soft transition-colors"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-xl border-2 border-accent bg-bg-soft">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-medium text-text tracking-tight leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
