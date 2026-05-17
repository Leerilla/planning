// Source: lectures/S3/lecture.md lines 435-481 (효과 1~4 통합 4-card grid)
// Type: comparison (4-card grid)
// 강사 결정 4: §4 효과 4 → 4-card grid 한 슬라이드 (옵션 B)
// 강사 결정 5: L467 다이어그램 MCP 노드 제거 / L480 "다음 단계 연결" export로 변환

export default function S3TheoryC4EffectsGrid() {
  const effects = [
    {
      n: '1',
      title: '사고 자원 절약',
      summary: '각 도구가 책임지는 산출물이 명확해진다',
      detail: 'NotebookLM: 검증된 페인포인트 + 출처 / Manyfast: 5요소 갖춘 PRD.',
      emphasis: '"성공 지표를 어떻게 정해야 하는가"를 NotebookLM에서 고민하지 않는다.',
    },
    {
      n: '2',
      title: '검증 절차의 자연스러움',
      summary: '각 도구가 다른 검증 절차를 유도한다',
      detail: 'NotebookLM: 인용 클릭 → 원문 확인 / Manyfast: 모호한 표현 직접 수정.',
      emphasis: '같은 도구로 처리하면 한쪽 검증이 느슨해진다.',
    },
    {
      n: '3',
      title: '결과의 추적 가능성',
      summary: '데이터에서 빌드 명령까지 추적 가능',
      detail: '원본 데이터 → 페인포인트 + 출처 → PRD 5요소 → prd.md export → 빌드 명령.',
      emphasis: '변경 시 원본까지 거슬러 갈 수 있다.',
    },
    {
      n: '4',
      title: '다음 단계 연결',
      summary: '두 도구 출력이 다음 단계 입력으로',
      detail: 'NotebookLM 노트북 → 마지막 노출 단계에서 재오픈 / Manyfast 프로젝트 → 빌드 단계 prd.md export → 빌드 환경 컨텍스트.',
      emphasis: '',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          두 도구를 나누어 활용하는 효과
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        네 가지 효과가 동시에 따라온다
      </h2>

      <div className="grid grid-cols-2 gap-4 max-w-6xl">
        {effects.map((e, i) => (
          <div key={i} className="border border-line rounded p-5">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold text-accent leading-none">{e.n}</span>
              <span className="text-lg font-bold text-text">{e.title}</span>
            </div>
            <div className="text-sm text-text mb-2 font-medium">{e.summary}</div>
            <div className="text-xs text-text-sub leading-relaxed mb-2">{e.detail}</div>
            {e.emphasis && (
              <div className="text-xs text-text leading-relaxed font-medium border-l-2 border-accent pl-2 mt-2">
                {e.emphasis}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
