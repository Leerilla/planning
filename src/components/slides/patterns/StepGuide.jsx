export default function StepGuide({
  title,
  steps = [],
}) {
  return (
    <div className="flex flex-col gap-10">
      {title ? (
        <h2 className="text-4xl font-bold tracking-tight text-text">{title}</h2>
      ) : null}

      <div className="flex items-stretch gap-3 flex-wrap">
        {steps.map((s, i) => (
          <div key={i} className="flex items-stretch gap-3 group/step">
            <div className="relative overflow-hidden rounded-2xl bg-bg-soft border border-divider p-7 flex flex-col gap-3 min-w-[180px] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-accent before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-accent before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100">
              <div className="text-text-muted text-xs font-semibold tracking-wider uppercase transition-colors group-hover/step:text-accent">
                STEP {String(i + 1).padStart(2, '0')}
              </div>
              <div className="text-xl font-bold tracking-tight text-text leading-snug">
                {s.title}
              </div>
              {s.desc ? (
                <div className="text-sm font-medium text-text-sub tracking-tight leading-relaxed">
                  {s.desc}
                </div>
              ) : null}
            </div>
            {i < steps.length - 1 ? (
              <div className="self-center w-6 h-px bg-divider shrink-0" aria-hidden />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
