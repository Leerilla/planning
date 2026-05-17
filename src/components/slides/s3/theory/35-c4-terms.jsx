// Source: lectures/S3/lecture.md lines 512-519 (챕터 4 용어 4행)
// Type: terms
// 강사 결정 5: L519 "분석과 정제의 분리" 용어 행 보존 (용어 카운트 유지)
// 원본 lecture.md에는 "MCP 연동 | Claude Code가 Manyfast 프로젝트를 직접 조회" 행이 일반 LLM과의 차이를
// 가리키는 특징 용어로 들어있다. 본 슬라이드에서는 "MCP 연동" 행을 그대로 보존한다.

export default function S3TheoryC4Terms() {
  const terms = [
    { term: 'NotebookLM', definition: 'Google의 출처 기반 AI 노트북' },
    { term: 'Manyfast', definition: '한국제 AI 기획 에디터' },
    { term: '환각', definition: 'LLM이 학습 데이터에 없는 내용을 만들어내는 현상' },
    { term: '분석과 정제의 분리', definition: '한 도구로 두 작업을 처리하면 둘 다 흐려진다' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — NotebookLM과 Manyfast 활용
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 용어 정리
      </h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-5xl">
        {terms.map((t, i) => (
          <div key={i} className="border-l-2 border-accent pl-4 py-2">
            <div className="text-base font-bold text-text tracking-tight leading-snug">
              {t.term}
            </div>
            <div className="text-sm text-text-sub tracking-tight leading-relaxed mt-1">
              {t.definition}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
