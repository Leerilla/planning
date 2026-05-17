// Source: lectures/S6/lecture.md L699 (#### 0-2. 자료 5 산출물 점검)
// Type: concept / default (5-card artifact checklist)

export default function S6Activity_0_2_ArtifactCheck() {
  const artifacts = [
    {
      num: 1,
      title: 'docs/tasks.md',
      desc: '화면 단위 작업 목록',
      check: '있는가',
    },
    {
      num: 2,
      title: 'GitHub Issue 10개',
      desc: 'screen-1 4개, screen-2 6개',
      check: '등록됐는가',
    },
    {
      num: 3,
      title: '첫 PR (Issue #1)',
      desc: '병합된 상태',
      check: '병합됐는가',
    },
    {
      num: 4,
      title: 'InputForm.tsx',
      desc: '입력 폼 컴포넌트',
      check: '동작하는가',
    },
    {
      num: 5,
      title: '빌드 명령 메모',
      desc: '손에 있는 상태',
      check: '손에 있는가',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-2 · 산출물 확인
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        자료 5 산출물 5개 점검
      </h2>
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        비어 있는 항목이 있으면 자료 5의 해당 Step으로 돌아가 보강 후 본 단계 진입.
      </p>

      <div className="grid grid-cols-5 gap-3 max-w-full">
        {artifacts.map((item) => (
          <div
            key={item.num}
            className="rounded-xl border border-divider bg-bg-soft p-4 hover:border-accent hover:shadow-lg transition-all duration-200"
          >
            <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
              {String(item.num).padStart(2, '0')}
            </div>
            <h3 className="text-sm font-bold text-text mb-1 leading-snug">
              {item.title}
            </h3>
            <p className="text-xs text-text-sub mb-3 leading-snug">
              {item.desc}
            </p>
            <div className="pt-3 border-t border-divider">
              <p className="text-xs font-medium text-accent tracking-tight">
                {item.check}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
