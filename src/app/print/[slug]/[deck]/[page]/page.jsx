'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import { getDeck } from '@/lib/deck-registry';
import '../../../print.css';

export default function PrintSlidePage() {
  const params = useParams();
  const slug = params.slug;
  const deckId = params.deck;
  const pageNum = Number.parseInt(params.page, 10);

  useEffect(() => {
    document.body.classList.add('print-mode');
    return () => document.body.classList.remove('print-mode');
  }, []);

  useEffect(() => {
    let cancelled = false;
    document.body.removeAttribute('data-export-ready');
    (async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
      } catch {}
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) {
            document.body.setAttribute('data-export-ready', '1');
          }
        });
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [slug, deckId, pageNum]);

  const deck = getDeck(slug, deckId);
  if (!deck) notFound();

  if (!Number.isInteger(pageNum) || pageNum < 1 || pageNum > deck.slides.length) {
    notFound();
  }

  const slide = deck.slides[pageNum - 1];
  const SlideComponent = slide.component;

  return (
    <div className="print-root">
      <div
        className="slide-frame"
        data-slide-number={pageNum}
        data-active="true"
        data-played="true"
        role="group"
        aria-label={`슬라이드 ${pageNum} / ${deck.slides.length}`}
      >
        <div className="slide-content">
          <SlideComponent isActive={true} {...(slide.props || {})} />
        </div>
      </div>
    </div>
  );
}
