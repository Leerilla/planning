'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SWIPE_THRESHOLD = 50;
const TRANSITION_MS = 300;
const COMPLETE_DELAY_MS = 1000;

export function useSlideEngine({ totalSlides, initialSlide = 1, onComplete, paused = false }) {
  const [current, setCurrent] = useState(() => {
    const clamped = Math.min(Math.max(initialSlide, 1), Math.max(totalSlides, 1));
    return clamped;
  });
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.slice(1);
    const n = parseInt(hash, 10);
    if (Number.isFinite(n) && n >= 1 && n <= totalSlides) {
      setCurrent(n);
    }
  }, [totalSlides]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.history.replaceState(null, '', `#${current}`);
  }, [current]);

  useEffect(() => {
    document.body.classList.add('slide-mode');
    return () => document.body.classList.remove('slide-mode');
  }, []);

  const goTo = useCallback((target) => {
    if (target < 1 || target > totalSlides) return;
    setTransitioning(true);
    setCurrent(target);
    const timer = setTimeout(() => setTransitioning(false), TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [totalSlides]);

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, totalSlides));
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), TRANSITION_MS);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 1));
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), TRANSITION_MS);
  }, []);

  const first = useCallback(() => goTo(1), [goTo]);
  const last = useCallback(() => goTo(totalSlides), [goTo, totalSlides]);

  useEffect(() => {
    const handler = (e) => {
      if (paused) return;
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) return;

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          first();
          break;
        case 'End':
          e.preventDefault();
          last();
          break;
        case 'f':
        case 'F':
          if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault();
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              document.documentElement.requestFullscreen?.();
            }
          }
          break;
        default:
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, first, last, paused]);

  const onTouchStart = useCallback((e) => {
    if (paused) return;
    touchStartX.current = e.changedTouches[0].screenX;
  }, [paused]);

  const onTouchEnd = useCallback((e) => {
    if (paused) return;
    const deltaX = e.changedTouches[0].screenX - touchStartX.current;
    if (deltaX > SWIPE_THRESHOLD) prev();
    else if (deltaX < -SWIPE_THRESHOLD) next();
  }, [prev, next, paused]);

  useEffect(() => {
    if (current !== totalSlides || completedRef.current || !onComplete) return;
    completedRef.current = true;
    const timer = setTimeout(() => onComplete(), COMPLETE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [current, totalSlides, onComplete]);

  const isWithinRenderRange = useCallback(
    (index) => Math.abs(index - current) <= 2,
    [current]
  );

  return {
    current,
    transitioning,
    next,
    prev,
    goTo,
    first,
    last,
    onTouchStart,
    onTouchEnd,
    isWithinRenderRange,
  };
}
