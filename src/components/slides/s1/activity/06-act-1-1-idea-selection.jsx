// Source: lectures/S1/lecture.md lines 531-573
// Type: example (활동 1-1 — 아이디어 선택)
// D-035: emoji 0건
// D-040: 활동 콘텐츠 = inline custom (3 STEP — 빈 양식 / 적합성 / 체크)

export default function S1Activity_1_1_IdeaSelection() {
  const checklist = [
    '누구·상황·문제 셋이 모두 들어갔는가',
    '한 줄로 끝나는가',
    '"왜 지금?" 점검을 통과했는가',
    '"왜 내가?" 점검을 통과했는가',
  ];

  return (
    <>
      {/* Eyebrow — 활동 메타 */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1 · 15분 · 산출물: 한 줄 정의 + 적합성 점검
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-4">
        아이디어를 한 줄로 정의한다
      </h2>

      {/* STEP 1 — 빈 양식 + 시드 6 적용 */}
      <div className="grid grid-cols-2 gap-4 mb-5 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            STEP 1 · 빈 양식
          </div>
          <p className="text-lg text-text leading-relaxed tracking-tight font-medium">
            {'{누구}가 {어떤 상황에서 어떤 문제}를 겪는다.'}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5">
          <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
            시드 6 적용
          </div>
          <p className="text-lg text-text leading-relaxed tracking-tight font-medium">
            1인 스마트스토어 셀러가 새 상품 등록 시 상세페이지 카피 작성에 한 상품당 1-2시간을 쓴다.
          </p>
        </div>
      </div>

      {/* STEP 2 — 적합성 점검 표 */}
      <div className="mb-5 max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          STEP 2 · 적합성 점검 (시드 6번의 답)
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[140px_1fr] gap-4 items-center rounded-xl border border-divider bg-bg-soft p-4">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              왜 지금?
            </span>
            <span className="text-base font-medium text-text leading-relaxed tracking-tight">
              스마트스토어 광고 단가 상승으로 카피 품질 압박이 어느 때보다 큼
            </span>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-4 items-center rounded-xl border border-divider bg-bg-soft p-4">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              왜 내가?
            </span>
            <span className="text-base font-medium text-text leading-relaxed tracking-tight">
              1인 셀러 카페·커뮤니티가 많고, 본인 주변에도 부업 셀러가 있어 직접 만나 검증할 수 있다
            </span>
          </div>
        </div>
        <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mt-3">
          한쪽 답이 약하면 다른 시드 또는 다른 페르소나 검토. 적합성 낮은 아이디어는 컨택 리스트 단계에서 무너진다.
        </p>
      </div>

      {/* STEP 3 — 체크리스트 4 */}
      <div className="max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          STEP 3 · 작업자 점검 체크리스트
        </div>
        <ul className="grid grid-cols-2 gap-2">
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
