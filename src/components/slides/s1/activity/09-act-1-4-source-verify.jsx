// Source: lectures/S1/lecture.md lines 656-704
// Type: example (활동 1-4 — 출처 검증과 거짓 메모)
// D-035: emoji 0건 / 코드 블록 양식
// D-040: 활동 콘텐츠 = inline custom (3단계 + 거짓 메모 양식 + 시드 6 적용 + 정리)

export default function S1Activity_1_4_SourceVerify() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-4 · 15분 · 산출물: 검증된 페인포인트 + 거짓 메모
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        출처 검증과 거짓 메모
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        거짓이 발견되면 폐기하지 않고 <span className="highlight-mark">별도 메모에 옮긴다.</span>
      </p>

      {/* 3단계 + 거짓 메모 양식 = 2-col (좌측 ↑ 우측 ↓) */}
      <div className="grid grid-cols-[1.3fr_1fr] gap-5 max-w-5xl items-start">
        {/* 좌: 3단계 순서 + 정리 */}
        <div>
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-3">
            검증 3단계
          </div>
          <ul className="flex flex-col gap-2.5">
            {[
              '본 적 없는 출처를 우선 클릭',
              '페이지가 진짜 답변 내용을 담고 있는지 확인',
              '1차 자료인지 본인이 판단',
            ].map((step, i) => (
              <li
                key={i}
                className="grid grid-cols-[36px_1fr] gap-3 items-center p-3.5 rounded-xl border border-divider bg-bg-soft"
              >
                <span className="text-accent text-lg font-bold tabular-nums tracking-wider">
                  {i + 1}
                </span>
                <span className="text-base font-medium text-text tracking-tight leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ul>

          {/* 정리 안내 */}
          <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5 mt-4">
            <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
              1차 리서치 정리
            </div>
            <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`- 검증된 페인포인트 1: {내용}. 출처: {URL}
- 검증된 페인포인트 2: {내용}. 출처: {URL}
- 검증 안 된 정보: 위 메모 참조 (워크시트에 옮기지 않음)`}
            </p>
          </div>
        </div>

        {/* 우: 거짓 메모 빈 양식 + 시드 6 적용 */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border-l-4 border-warning bg-warning-soft p-4">
            <div className="text-warning text-xs font-semibold tracking-wider uppercase mb-2">
              거짓 메모 빈 양식
            </div>
            <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`[검증 안 된 정보 메모]

- 정보: "{AI가 만든 통계 또는 인용}"
- 거짓 판정 이유: 출처 URL이 404
- 다시 검증한다면 어디서: {1차 출처가 될 만한 곳}
- 어느 거짓 패턴인가: 그럴듯한 통계 / 가짜 인용 / 출처 조작`}
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
            <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">
              시드 6 적용 예시
            </div>
            <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`[검증 안 된 정보 메모]

- 정보: "1인 셀러의 73%가 카피 작성에 2시간 이상 쓴다"
- 거짓 판정 이유: 출처 URL이 404
- 다시 검증한다면 어디서: 네이버 스마트스토어 공식 리포트, 셀러 커뮤니티 설문
- 어느 거짓 패턴인가: 그럴듯한 통계`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
