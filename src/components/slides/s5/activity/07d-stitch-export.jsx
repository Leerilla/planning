// Source: 강사 요청 — Stitch Export 방법 + 초보 흔한 실수 (2026-05-23 추가)
// Type: activity (inline 2-area — 좌 Export 방법 / 우 초보 실수 4가지)

export default function S5ActivityStitchExport() {
  const exports = [
    {
      name: 'Figma 복사',
      cond: 'Standard 모드 한정',
      steps: '시안 → "Copy to Figma" 클릭\n→ Figma 파일에 Ctrl+V (Cmd+V)',
    },
    {
      name: 'HTML / CSS 코드',
      cond: 'Standard / Experimental 모두',
      steps: '시안 클릭 → "Code" 탭 선택\n→ 코드 복사 → IDE에 붙여넣기',
    },
    {
      name: '.zip 내보내기',
      cond: '전체 자산 일괄 다운로드',
      steps: '시안 → "Download" 또는 "Export ZIP"\n→ HTML·CSS·이미지 자산 한 번에 받기',
    },
  ];

  const mistakes = [
    {
      title: '모호한 프롬프트',
      detail: '"좋은 UI 만들어줘" 한 줄 — 결과도 모호.',
    },
    {
      title: 'UI 요소 누락',
      detail: '알림 아이콘 등 빠뜨리면 placeholder로 렌더링.',
    },
    {
      title: '차트 유형 미지정',
      detail: '"그래프" → "원형 차트" / "막대 차트"로 명시.',
    },
    {
      title: '정적 UI 한계 미인식',
      detail: 'Stitch는 시안만 — 인터랙션·로직은 Step 4 빌드에서.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          0.5-4 · Export 3방법 + 초보 흔한 실수
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        시안을 <span className="highlight-mark">밖으로 꺼내는 법</span> + 피할 함정
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Step 3 export 작업의 사전 학습. 실수 4가지를 미리 알면 첫 시안에서 합격선 가까이 도달.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            Export 방법 2가지
          </div>
          <div className="space-y-3">
            {exports.map((e, i) => (
              <div key={i} className="border border-divider rounded p-4 bg-bg-soft">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-base font-bold text-text">{e.name}</span>
                  <span className="text-xs text-text-sub">({e.cond})</span>
                </div>
                <pre className="text-xs text-text leading-relaxed whitespace-pre-wrap mt-2">{e.steps}</pre>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            초보 흔한 실수 4가지
          </div>
          <ul className="space-y-2">
            {mistakes.map((m, i) => (
              <li key={i} className="border-l-2 border-accent pl-4 py-2">
                <div className="text-sm font-bold text-text mb-1">{m.title}</div>
                <p className="text-xs text-text-sub leading-relaxed">{m.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
