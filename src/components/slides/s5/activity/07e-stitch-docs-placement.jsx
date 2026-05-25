// Source: lectures/S5/request.md (T13b → T16g → T17b 재매핑, 2026-05-24)
// Type: activity (2 step 흐름 — 화면 이미지 배치 + claude.md 항목 추가)
// T17b: eyebrow "활동 1-10" → "활동 1-9" (a27 rules/design.md 제거에 따른 재매핑)
//        + step 01(design.md 이동) 제거: design.md 작성 슬라이드(a27)가 빠지면서 의존 step 사라짐

export default function S5ActivityStitchDocsPlacement() {
  const steps = [
    {
      n: '01',
      title: '화면 이미지 → docs/ 이동',
      from: 'Stitch export 결과 (.zip 압축 해제 또는 개별 download)',
      to: 'docs/screen-1.png\ndocs/screen-2.png\n...',
      why: '화면별 시안을 docs에 위치시켜 빌드 명령에서 "docs/screen-1.png 참조" 형태로 인용 가능.',
    },
    {
      n: '02',
      title: '/project/claude.md 5번 영역에 항목 추가',
      from: '5번 시스템 설계 참조 지침 (기존)',
      to: '+ docs/screen-*.png',
      why: '학생이 직접 claude.md를 열어 5번 영역 리스트에 추가. AI가 매 명령마다 자동 참조.',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-9 · Stitch Export 결과를 <code className="text-accent font-semibold">docs/</code>로 배치
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        화면 시안을 <span className="highlight-mark">프로젝트 문서</span>로 정착
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Stitch에서 받은 화면 이미지를 <code className="text-accent font-semibold">docs/</code>로 모으고, claude.md에 참조 항목을 추가해 빌드 시 자동 인용되게 만든다.
      </p>

      <div className="space-y-3 max-w-6xl">
        {steps.map((s) => (
          <div key={s.n} className="grid grid-cols-[60px_1fr_1fr_1.4fr] gap-3 items-start border border-divider rounded p-4">
            <span className="text-accent text-lg font-bold tabular-nums tracking-wider">
              {s.n}
            </span>
            <div>
              <div className="text-sm font-semibold text-text mb-2 leading-snug">{s.title}</div>
              <div className="text-xs uppercase tracking-wider text-text-sub mb-1">From</div>
              <pre className="text-xs text-text bg-bg-soft rounded px-2 py-1 leading-relaxed whitespace-pre-wrap border border-divider">{s.from}</pre>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-text-sub mb-1 mt-7">To</div>
              <pre className="text-xs text-text bg-bg-soft rounded px-2 py-1 leading-relaxed whitespace-pre-wrap border border-divider">{s.to}</pre>
            </div>
            <p className="text-xs text-text-sub leading-relaxed mt-7 border-l-2 border-accent pl-3">
              {s.why}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
