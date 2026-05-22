// Source: lectures/S5/lecture.md lines 766-771 (3-3 시안 export)
// Type: activity (inline 2-area — export 대상 + 파일 배치)

export default function S5Activity_3_3_Export() {
  const exports_ = [
    {
      format: '이미지 (PNG/JPG)',
      what: 'Stitch 우측 상단 "Export" → 이미지',
      where: 'planning_project/docs/design/screen-1.png',
      purpose: '시각 참조용 (Claude Code 빌드 시 첨부)',
    },
    {
      format: '코드 (HTML/CSS)',
      what: 'Stitch 우측 상단 "Export" → Code',
      where: 'planning_project/docs/design/stitch-export/',
      purpose: '구조 + 토큰 참조 (선택, 본 학습은 이미지로 충분)',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-3 · 산출물: 시안 export + planning_project 배치
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        시안 export — 무엇을 / 어디로
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-5xl">
        <span className="highlight-mark">planning_project/docs/design/</span> 폴더에 일관 배치 (다음 Step 4 빌드 시 참조).
      </p>

      <div className="space-y-4 max-w-6xl">
        {exports_.map((e, i) => (
          <div key={i} className="border border-divider rounded p-5 bg-bg-soft">
            <div className="grid grid-cols-[1.2fr_2fr_2fr] gap-5 items-start">
              <div>
                <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
                  형식
                </div>
                <div className="text-base font-bold text-text">{e.format}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
                  무엇을
                </div>
                <div className="text-sm text-text leading-relaxed">{e.what}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
                  어디에
                </div>
                <div className="text-sm text-text leading-relaxed border-l-2 border-accent pl-2">
                  {e.where}
                </div>
                <div className="text-xs text-text-sub leading-relaxed mt-2">
                  {e.purpose}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
