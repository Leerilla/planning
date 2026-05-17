// Source: lectures/S1/lecture.md lines 321-331
// Type: terms (5행 도구 표)
// D-040: 표 형식 → inline 2열 grid

export default function S1TheoryC2ToolSeparation() {
  const tools = [
    { domain: '1차 시장 리서치', tool: 'ChatGPT · Gemini' },
    { domain: '출처 기반 자료 분석', tool: 'NotebookLM' },
    { domain: 'PRD와 기능명세', tool: 'Manyfast' },
    { domain: '코드 빌드', tool: 'Claude Code' },
    { domain: '스크래핑과 E2E 테스트', tool: 'Playwright MCP' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          AI 도구의 영역별 분리
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        영역별 도구 매트릭스
      </h2>
      <p className="text-base text-text-sub mb-6">
        도구를 섞어 쓰면 가속의 효과가 사라진다.
      </p>

      {/* Table */}
      <div className="max-w-5xl">
        {/* Header */}
        <div className="grid grid-cols-[2fr_2fr] gap-4 px-4 py-3 border-b-2 border-divider">
          <span className="text-text-muted text-xs font-semibold tracking-wider uppercase">영역</span>
          <span className="text-accent text-xs font-semibold tracking-wider uppercase">도구</span>
        </div>

        {/* Rows */}
        {tools.map((t, i) => (
          <div
            key={i}
            className="grid grid-cols-[2fr_2fr] gap-4 px-4 py-4 border-b border-divider items-center"
          >
            <span className="text-base font-bold text-text">{t.domain}</span>
            <span className="text-base font-semibold text-accent">{t.tool}</span>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className="border-l-4 border-accent bg-success-soft pl-5 py-4 mt-6 max-w-5xl">
        <p className="text-base font-bold text-text leading-snug">
          영역별로 도구를 분리하는 것이 <span className="text-accent">운영 원칙</span>이다
        </p>
      </div>
    </>
  );
}
