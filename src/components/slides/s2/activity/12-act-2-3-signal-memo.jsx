// Source: lectures/S2/lecture.md L291-311
// Type: example (활동 2-3 결과 확인 + 페인포인트 신호 메모)

export default function S2Activity_2_3_SignalMemo() {
  const questions = [
    {
      num: '1',
      title: '페인포인트가 가장 강하게 드러난 글 1-2개는 어느 것인가',
    },
    {
      num: '2',
      title: '같은 단어가 반복되는 패턴이 있는가',
      detail: '예: "정리 시간", "누락", "받아쓰기"',
    },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-3 · 산출물: 페인포인트 신호 1-2개 메모
        </span>
      </div>

      {/* 흐름 도입 */}
      <div className="rounded-2xl border border-divider bg-bg-soft p-3 mb-4 max-w-5xl">
        <p className="text-sm text-text-sub leading-relaxed tracking-tight">
          <span className="font-bold text-text">활동 2-2에서 Playwright MCP가 저장한 CSV 파일</span>을 입력으로 받는다 — 페르소나 커뮤니티 글 30개의 제목·본문·URL이 한 파일에 모여 있다. 이 파일을 빠르게 검토한다.
        </p>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        CSV 빠르게 훑기 — 깊이 읽지 않는다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        <span className="highlight-mark">2 질문에만 답한다.</span> 이 메모가 다음 단계 페인포인트 분석의 출발점이 된다.
      </p>

      {/* 2-area: 2 질문 + 메모 양식 */}
      <div className="grid grid-cols-[1fr_1.2fr] gap-5 max-w-5xl items-stretch">
        {/* 좌: 2 질문 */}
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 flex flex-col">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-4">
            훑으며 답할 2 질문
          </div>
          <ul className="flex flex-col gap-3 flex-1">
            {questions.map((q) => (
              <li
                key={q.num}
                className="grid grid-cols-[32px_1fr] gap-3 items-start"
              >
                <span className="text-accent text-lg font-bold tabular-nums tracking-wider">
                  {q.num}
                </span>
                <div>
                  <p className="text-base font-bold text-text leading-relaxed tracking-tight">
                    {q.title}
                  </p>
                  {q.detail ? (
                    <p className="text-sm text-text-sub leading-relaxed tracking-tight mt-1">
                      {q.detail}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 우: 메모 양식 */}
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5 flex flex-col">
          <div className="text-success text-xs font-semibold tracking-wider uppercase mb-4">
            페인포인트 신호 1차 메모 양식
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line flex-1">
{`- 키워드 패턴
  {예: "정리 누락", "받아쓰기 어려움"이 30개 중 12개 글에 등장}

- 가장 강한 글 1-2개
  {URL 또는 글 제목}

- 페르소나 1차 가설과의 일치도
  {일치 / 부분 일치 / 불일치}

- 다음 단계에서 더 볼 부분
  {예: 결정 누락 vs 액션아이템 누락 어느 쪽이 큰가}`}
          </p>
        </div>
      </div>
    </>
  );
}
