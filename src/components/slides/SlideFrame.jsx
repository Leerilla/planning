'use client';

import { useEffect, useState } from 'react';

export default function SlideFrame({
  number,
  total,
  deckTitle,
  sessionId,
  isActive = true,
  children,
}) {
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (!isActive || played) return;
    const timer = setTimeout(() => setPlayed(true), 1000);
    return () => clearTimeout(timer);
  }, [isActive, played]);

  return (
    <div
      className="slide-frame"
      data-slide-number={number}
      data-active={isActive ? 'true' : 'false'}
      data-played={played ? 'true' : 'false'}
      aria-hidden={!isActive}
      role="group"
      aria-label={`슬라이드 ${number} / ${total}`}
    >
      <div className="slide-content">{children}</div>

      <div className="absolute bottom-6 left-8 flex items-center gap-2 text-text-muted text-sm font-semibold uppercase tracking-wider">
        <span>{deckTitle}</span>
        <span>·</span>
        <span>{(sessionId || '').toUpperCase()}</span>
      </div>

      <div className="absolute bottom-6 right-8 text-text-muted text-sm font-semibold tracking-wider">
        <span className="text-text">{number}</span>
        <span className="opacity-50"> / {total}</span>
      </div>
    </div>
  );
}
