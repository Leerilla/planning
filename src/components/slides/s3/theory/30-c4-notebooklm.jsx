// Source: lectures/S3/lecture.md lines 401-414 (NotebookLM 특징 4 + 장점 3 통합)
// Type: concept (inline 2-area — 특징 표 + 장점 리스트)
// 2026-05-12 수정: 헤더 폰트 통일 / 본문 텍스트 크기 향상 / 좌우 높이 stretch

export default function S3TheoryC4Notebooklm() {
  const features = [
    { feat: '자료 갇힘', diff: '업로드한 자료 안에서만 답함' },
    { feat: '출처 인용', diff: '모든 답변에 인용 번호' },
    { feat: '다중 소스 통합', diff: 'CSV, PDF, 웹 링크, 텍스트 동시 처리' },
    { feat: '노트북 단위 보존', diff: '같은 노트북에 답변 누적' },
  ];

  const benefits = [
    '환각 거의 없음 — 자료 밖 답변 안 함',
    '검증 자연스러움 — 인용 클릭이 기본 동작',
    '다음 단계 재사용 — 마지막 노출 단계에서 재오픈',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          NotebookLM
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        특징과 장점
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-6xl items-stretch">
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-text-sub mb-3">
            특징 (일반 LLM과의 차이)
          </div>
          <div className="rounded border border-line overflow-hidden flex-1">
            {features.map((f, i) => (
              <div
                key={i}
                className={`grid grid-cols-[140px_1fr] ${i < features.length - 1 ? 'border-b border-line' : ''}`}
              >
                <div className="px-4 py-3 text-sm font-medium text-text">{f.feat}</div>
                <div className="px-4 py-3 text-sm text-text-sub border-l border-line">{f.diff}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-semibold text-text-sub mb-3">
            장점
          </div>
          <ul className="space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="border-l-2 border-accent pl-4 py-2 text-base text-text leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-sub mt-auto pt-5 leading-relaxed">
            본인이 모은 50-200건은 1차 자료. ChatGPT는 학습 지식과 섞지만 NotebookLM은 자료 안에서만 답한다.
          </p>
        </div>
      </div>
    </>
  );
}
