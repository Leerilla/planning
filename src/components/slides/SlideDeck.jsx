'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSlideEngine } from '@/lib/slide-engine';
import SlideFrame from './SlideFrame';
import SlideControls from './SlideControls';
import SlideHelpOverlay from './SlideHelpOverlay';

export default function SlideDeck({
  slides,
  sessionId,
  deckId,
  deckTitle = '이론',
  initialSlide = 1,
  onComplete,
}) {
  const router = useRouter();
  const total = slides.length;
  const [helpOpen, setHelpOpen] = useState(false);

  const engine = useSlideEngine({
    totalSlides: total,
    initialSlide,
    onComplete,
    paused: helpOpen,
  });

  useEffect(() => {
    const handler = (e) => {
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return;

      const isHelpKey = e.key === '?' || (e.shiftKey && e.key === '/');
      if (isHelpKey) {
        e.preventDefault();
        setHelpOpen((o) => !o);
      } else if (e.key === 'Escape' && helpOpen) {
        e.preventDefault();
        setHelpOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [helpOpen]);

  const handleExit = () => {
    router.push(`/sessions/${sessionId}`);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-bg"
      onTouchStart={engine.onTouchStart}
      onTouchEnd={engine.onTouchEnd}
    >
      <div
        className="slide-container"
        style={{
          transform: `translateX(-${(engine.current - 1) * 100}vw)`,
        }}
      >
        {slides.map((slide, idx) => {
          const SlideComponent = slide.component;
          const number = idx + 1;
          const isCurrent = number === engine.current;
          const shouldRender = engine.isWithinRenderRange(number);

          return (
            <div key={slide.id ?? number} className="slide" aria-hidden={!isCurrent}>
              <SlideFrame
                number={number}
                total={total}
                deckTitle={deckTitle}
                sessionId={sessionId}
                isActive={isCurrent}
              >
                {shouldRender ? (
                  <SlideComponent isActive={isCurrent} {...(slide.props || {})} />
                ) : null}
              </SlideFrame>
            </div>
          );
        })}
      </div>

      <SlideControls
        current={engine.current}
        total={total}
        onExit={handleExit}
        onJumpTo={engine.goTo}
        slides={slides}
      />

      <SlideHelpOverlay open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}
