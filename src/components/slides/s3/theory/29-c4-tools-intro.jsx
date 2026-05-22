// Source: lectures/S3/lecture.md lines 394-399 (도구 소개 2-row 표)
// Type: concept (inline 2-area: NotebookLM / Manyfast 소개)

export default function S3TheoryC4ToolsIntro() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          도구 소개
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-8">
        분석과 정제를 나누어 책임지는 두 도구
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-6xl">
        <div className="border border-divider rounded p-6">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            분석 도구
          </div>
          <div className="text-2xl font-bold text-text mb-3">
            NotebookLM
          </div>
          <div className="space-y-2 text-base text-text-sub">
            <div><span className="text-text-sub uppercase text-xs tracking-wider mr-2">제작</span>Google</div>
            <div><span className="text-text-sub uppercase text-xs tracking-wider mr-2">용도</span>출처 기반 자료 분석</div>
            <div><span className="text-text-sub uppercase text-xs tracking-wider mr-2">URL</span>notebooklm.google.com</div>
          </div>
        </div>

        <div className="border border-divider rounded p-6">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            정제 도구
          </div>
          <div className="text-2xl font-bold text-text mb-3">
            Manyfast
          </div>
          <div className="space-y-2 text-base text-text-sub">
            <div><span className="text-text-sub uppercase text-xs tracking-wider mr-2">제작</span>한국 스타트업</div>
            <div><span className="text-text-sub uppercase text-xs tracking-wider mr-2">용도</span>PRD/기능명세/와이어프레임 생성</div>
            <div><span className="text-text-sub uppercase text-xs tracking-wider mr-2">URL</span>manyfast.io</div>
          </div>
        </div>
      </div>
    </>
  );
}
