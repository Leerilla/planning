export default function Outro({
  message = '수고하셨습니다',
  summary = [],
  next,
}) {
  return (
    <div className="flex flex-col gap-12 justify-between h-full py-12">
      <div className="flex flex-col gap-2">
        <div className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          OUTRO
        </div>
        <h1 className="text-6xl font-bold tracking-tight text-text leading-[1.05]">
          {Array.isArray(message)
            ? message.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))
            : message}
        </h1>
      </div>

      {summary.length ? (
        <div className="flex flex-col gap-6">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
            오늘의 핵심
          </div>
          <ul className="flex flex-col gap-3">
            {summary.map((s, i) => (
              <li
                key={i}
                className="flex gap-4 items-start text-2xl font-medium text-text tracking-tight leading-snug"
              >
                <span className="text-accent text-base font-semibold mt-2 tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {next ? (
        <div className="relative overflow-hidden rounded-2xl border border-divider bg-bg-soft p-7 flex flex-col gap-1 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-accent before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-accent before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
            다음 단계
          </div>
          <div className="text-xl font-medium text-text tracking-tight">{next}</div>
        </div>
      ) : null}
    </div>
  );
}
