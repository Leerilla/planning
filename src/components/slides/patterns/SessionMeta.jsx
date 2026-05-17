export default function SessionMeta({
  title = '세션 개요',
  objectives = [],
  deliverables = [],
  tools = [],
}) {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-4xl font-bold tracking-tight text-text">{title}</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <div className="text-xs font-semibold uppercase text-text-muted tracking-wider">
            학습 목표
          </div>
          <ul className="flex flex-col gap-4">
            {objectives.map((obj, i) => {
              const isObj = obj && typeof obj === 'object';
              const title = isObj ? obj.title : obj;
              const notes = isObj ? obj.notes : null;
              return (
                <li
                  key={i}
                  className="flex gap-4 items-start text-2xl font-medium tracking-tight text-text leading-snug"
                >
                  <span className="text-text-muted font-semibold text-base mt-2 tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span>{title}</span>
                    {notes ? (
                      <span className="text-base text-text-muted font-normal leading-relaxed">
                        {notes}
                      </span>
                    ) : null}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-xs font-semibold uppercase text-text-muted tracking-wider">
            산출물
          </div>
          <div className="flex flex-col gap-3">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-divider bg-bg-soft p-7 text-lg font-medium text-text tracking-tight transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-accent hover:bg-accent-soft before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-accent before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>

      {tools.length ? (
        <div className="flex flex-col gap-3 pt-4 border-t border-divider">
          <div className="text-xs font-semibold uppercase text-text-muted tracking-wider">
            사용 도구
          </div>
          <div className="flex gap-2 flex-wrap">
            {tools.map((t, i) => {
              const isObj = t && typeof t === 'object';
              const label = isObj ? t.label : t;
              const description = isObj ? t.description : null;
              return (
                <span
                  key={i}
                  className="rounded-full bg-accent-soft text-accent px-3 py-1 text-xs font-semibold tracking-wider"
                  title={description || undefined}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
