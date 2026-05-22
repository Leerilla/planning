// Source: lectures/S3/lecture.md lines 737-742 (0-4 도구 계정 점검)
// Type: activity (2-row 표)

export default function S3Activity_0_4_Accounts() {
  const tools = [
    { name: 'NotebookLM', url: 'notebooklm.google.com', account: 'Google 계정' },
    { name: 'Manyfast', url: 'manyfast.io', account: '별도 가입' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-4 · 산출물: 두 도구 접속 확인
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        도구 계정 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        본 세션 직전에 두 도구 모두 로그인 가능한 상태인지 확인한다.
      </p>

      <div className="rounded border border-divider overflow-hidden max-w-4xl">
        <div className="grid grid-cols-[1fr_2fr_1.4fr] bg-bg-soft border-b border-divider">
          <div className="px-5 py-3 text-base font-semibold text-text-sub">도구</div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-divider">URL</div>
          <div className="px-5 py-3 text-base font-semibold text-text-sub border-l border-divider">계정</div>
        </div>
        {tools.map((t, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr_1.4fr] ${i < tools.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-5 py-4 text-base text-text font-bold">{t.name}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">{t.url}</div>
            <div className="px-5 py-4 text-base text-text-sub border-l border-divider">{t.account}</div>
          </div>
        ))}
      </div>
    </>
  );
}
