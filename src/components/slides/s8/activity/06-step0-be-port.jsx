// Source: lectures/S8/captures/lecture.md L988-1007 (#### 0-4. BE 코드 점검과 PORT 처리)
// Type: Example (기대 vs 위험 2-section + aside)

export default function S8ActivityStep0BePort() {
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* Header */}
      <div className="flex items-baseline gap-3">
        <span className="h-1 w-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 0-4 · BE PORT 점검
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-text">0-4. BE 코드 점검과 PORT 처리</h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed">
        BE 코드의 포트 처리를 점검. Railway는 <code className="text-accent font-semibold bg-bg-soft px-1 py-0.5 rounded text-sm">PORT</code> 환경 변수로 포트 주입.
      </p>

      {/* Grep command */}
      <div>
        <p className="text-sm text-text-sub mb-2">점검 명령:</p>
        <pre className="bg-bg-soft border border-divider rounded-xl p-3 text-sm whitespace-pre-line max-w-3xl text-text mb-4">
{`cat server/index.js | grep -i "port"`}
        </pre>
      </div>

      {/* 2-section vertical: Expected vs Warning */}
      <div className="flex flex-col gap-3 max-w-4xl">
        {/* Expected section */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 block">
            Railway 호환
          </span>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`const port = process.env.PORT || 8000`}
          </pre>
        </div>

        {/* Warning section */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-4">
          <span className="text-warning font-bold text-xs uppercase tracking-widest mb-2 block">
            고정 포트 (Railway 빌드 실패 가능)
          </span>
          <pre className="bg-bg border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`const port = 8000`}
          </pre>
        </div>
      </div>

      {/* Aside: 조치 방법 */}
      <aside className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          BE 코드가 고정 포트면 Claude Code 명령: "server/index.js의 포트 설정을 <code className="text-accent font-semibold bg-bg px-1 py-0.5 rounded text-xs">process.env.PORT</code> 사용으로 변경해줘. 로컬 개발에서는 8000 폴백."
        </p>
      </aside>
    </div>
  );
}
