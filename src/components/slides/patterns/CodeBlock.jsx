export default function CodeBlock({
  eyebrow,
  title,
  description,
  code,
  language = 'text',
  highlights = [],
  caption,
  notes = [],
}) {
  const lines = Array.isArray(code) ? code : String(code ?? '').split('\n');

  return (
    <div className="flex flex-col gap-6 max-w-5xl">
      {eyebrow ? (
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase">
          {eyebrow}
        </div>
      ) : null}

      {title ? (
        <h2 className="text-3xl font-bold tracking-tight text-text leading-tight">
          {title}
        </h2>
      ) : null}

      {description ? (
        <p className="text-base text-text-sub tracking-tight leading-relaxed">
          {description}
        </p>
      ) : null}

      <div className="relative rounded-2xl border border-divider overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-divider bg-bg-soft">
          <span className="text-text-muted text-xs font-semibold tracking-wider uppercase">
            {language}
          </span>
          {caption ? (
            <span className="text-text-sub text-xs font-medium tracking-tight">
              {caption}
            </span>
          ) : null}
        </div>
        <pre
          className="px-5 py-5 overflow-x-auto"
          style={{ background: 'var(--code-bg)' }}
        >
          <code
            className="text-sm leading-relaxed whitespace-pre"
            style={{ color: 'var(--code-text)' }}
          >
            {lines.map((line, i) => {
              const isHighlight = highlights.includes(i + 1);
              return (
                <div
                  key={i}
                  className={
                    isHighlight
                      ? '-mx-5 px-5 border-l-2 border-accent'
                      : ''
                  }
                  style={isHighlight ? { background: 'rgba(255,255,255,0.08)' } : undefined}
                >
                  {line || ' '}
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {notes.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {notes.map((note, i) => (
            <li
              key={i}
              className="text-sm text-text-sub tracking-tight leading-relaxed pl-4 border-l-2 border-divider"
            >
              {note}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
