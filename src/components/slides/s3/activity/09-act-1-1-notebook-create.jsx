// Source: lectures/S3/lecture.md lines 755-773 (1-1 노트북 생성 메뉴)
// Type: activity (4 STEP 메뉴 조작)

export default function S3Activity_1_1_NotebookCreate() {
  const steps = [
    { n: '1', text: 'notebooklm.google.com 접속' },
    { n: '2', text: '좌측 상단 "Try NotebookLM" (첫 진입) 또는 "+ 새 노트북" 클릭' },
    { n: '3', text: '노트북 이름 입력 — 예: "1인-셀러-카피-생성기-검증"' },
    { n: '4', text: '"만들기" 클릭' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1 · 산출물: 빈 노트북 1개
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        노트북 생성 — 메뉴 조작 4 STEP
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        노트북 이름은 <span className="highlight-mark">본인 프로젝트 이름과 일치</span>시킨다.
      </p>

      <div className="space-y-3 max-w-4xl">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-accent pl-5 py-2">
            <span className="text-2xl font-bold text-accent leading-none mt-0.5 w-7 shrink-0">
              {s.n}
            </span>
            <span className="text-base text-text leading-relaxed">{s.text}</span>
          </div>
        ))}
      </div>
    </>
  );
}
