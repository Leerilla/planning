// Source: lectures/S1/lecture.md lines 758-803
// Type: example (활동 2-2 — 가설 페르소나 6줄)

export default function S1Activity_2_2_Persona() {
  const criticalRows = [
    {
      label: '동기/목표',
      reason: '비면 인구통계 카드. 메일 카피의 후크와 인터뷰 질문이 만들어지지 않음',
    },
    {
      label: '검증 가능 채널',
      reason: '비면 카피 발송 대상이 누구인지 모름. 페르소나가 모호하다는 결정적 신호',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-2 · 20분 · 산출물: 가설 페르소나 6줄
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        가설 페르소나 (Proto-persona)
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        <span className="highlight-mark">행동·동기·맥락 세 축</span>으로 묘사. 인구통계만 가득한 페르소나는 의사결정에 도움이 되지 않는다.
      </p>

      {/* 2-col: 빈 양식 + 시드 6 적용 */}
      <div className="grid grid-cols-2 gap-4 mb-5 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            빈 양식
          </div>
          <p className="text-sm font-medium text-text-sub leading-relaxed tracking-tight whitespace-pre-line">
{`[가설 페르소나]

- 직군/역할: {예: 1인 셀러}
- 환경 조건: {예: 월 50-100 SKU 등록}
- 도구 사용: {예: 스마트스토어 에디터, 챗GPT}
- 동기/목표: {왜 이 문제 / 해결되면 무엇이 바뀌는가}
- 페인포인트 빈도: {예: 주 2-5회}
- 검증 가능 채널: {예: 네이버 카페, 커뮤니티}`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-4">
          <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
            시드 6 적용
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`[가설 페르소나, 시드 6번]

- 직군/역할: 1인 스마트스토어 셀러 (전업 1년차)
- 환경 조건: 주방용품/소품 중심, 월 50-100 SKU, 광고 중
- 도구 사용: 스마트스토어 에디터, 포토샵/캔바, 챗GPT
- 동기/목표: 카피 시간 줄여 상품 발굴/촬영에 시간 사용
- 페인포인트 빈도: 신규 등록 시마다 = 주 3-5회
- 검증 가능 채널: 네이버 카페 "스마트스토어 셀러 모임"`}
          </p>
        </div>
      </div>

      {/* 결정적 2줄 강조 */}
      <div className="max-w-5xl">
        <div className="text-warning text-xs font-semibold tracking-wider uppercase mb-2">
          여섯 줄 중 두 줄이 결정적이다
        </div>
        <div className="flex flex-col gap-2.5">
          {criticalRows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[140px_1fr] gap-4 items-center rounded-xl border-l-4 border-warning bg-warning-soft p-4"
            >
              <span className="text-warning text-sm font-bold tracking-wider uppercase">
                {r.label}
              </span>
              <span className="text-sm font-medium text-text tracking-tight leading-relaxed">
                {r.reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
