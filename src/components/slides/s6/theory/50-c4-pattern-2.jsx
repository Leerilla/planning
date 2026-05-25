// Source: lectures/S6/lecture.md lines 526-532
// Type: concept / definition
// Pattern: Stop → git-committer automation (Pattern 2 intro)
// S6 T5 (2026-05-24): 강사 요구 — 좌측 의미 불분명 + 디자인 재작업
//                     A5 위반("자료 4/5/6" 학생 화면 노출) 제거 + 좌(개념)/우(자동화 단계) 명확 분할

export default function S6TheoryC4Pattern2() {
  const steps = [
    { n: '1', label: '작업자 명령', desc: '"커밋해줘" 자연어 입력' },
    { n: '2', label: 'Stop hook 트리거', desc: '응답 종료 직후 자동 발동' },
    { n: '3', label: 'git-committer 호출', desc: 'sub-agent가 변경 파일 분석' },
    { n: '4', label: '자동 커밋', desc: '커밋 메시지 생성 + git commit 실행' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          핵심 패턴 2 도입
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-tight mb-2 max-w-5xl">
        Stop <span className="text-accent">{'->'}</span> git-committer
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        응답 종료 시 <span className="highlight-mark">변경 파일 자동 커밋</span>
      </p>

      <div className="grid grid-cols-[1fr_1.2fr] gap-6 max-w-6xl items-start">
        {/* 좌측: 패턴 정의 카드 */}
        <div className="border border-divider rounded p-5 bg-bg-soft flex flex-col gap-3">
          <p className="text-xs font-semibold text-accent tracking-wider uppercase">패턴 정의</p>
          <p className="text-lg font-bold text-text leading-snug">
            응답이 끝날 때마다 <span className="text-accent">자동으로 커밋</span>되는 흐름
          </p>
          <p className="text-sm text-text-sub leading-relaxed">
            메인 세션의 응답이 종료되는 그 시점에 Stop hook이 발동, 등록된 git-committer sub-agent가 호출되어 변경 사항을 정리해 커밋한다.
          </p>
          <p className="text-sm text-text-sub leading-relaxed border-l-2 border-accent pl-3">
            작업자는 "커밋해줘"라고 매번 말할 필요가 없다.
          </p>
        </div>

        {/* 우측: 자동화 단계 흐름 */}
        <div className="border border-divider rounded p-5 flex flex-col gap-2">
          <p className="text-xs font-semibold text-accent tracking-wider uppercase mb-1">자동화 단계</p>
          {steps.map((s, i, arr) => (
            <div key={s.n} className="flex flex-col">
              <div className="grid grid-cols-[28px_140px_1fr] gap-3 items-center px-3 py-1.5 rounded bg-bg-soft border-l-4 border-accent">
                <span className="text-sm font-bold tabular-nums text-accent text-center">{s.n}</span>
                <span className="text-sm font-bold text-text leading-snug">{s.label}</span>
                <span className="text-xs font-medium text-text-sub leading-snug">{s.desc}</span>
              </div>
              {i < arr.length - 1 ? (
                <span className="text-text-sub text-xs text-center leading-none py-0.5">v</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
