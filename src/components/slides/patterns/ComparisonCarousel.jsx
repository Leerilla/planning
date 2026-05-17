// ComparisonCarousel — 좌우 슬라이드 비교 컴포넌트
// 용도: 두 가지 방식을 순차적으로 비교할 때 사용 (클릭 또는 자동 진행)

'use client';

import { useState, useEffect } from 'react';

export default function ComparisonCarousel({
  title,
  items, // 배열: [{ label, statement, points: [] }, { label, statement, points: [] }, ...]
  autoPlay = false,
  autoPlayInterval = 4000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, items.length, autoPlayInterval]);

  if (!items || items.length === 0) return null;

  const current = items[currentIndex];
  const isGood = currentIndex % 2 === 1; // 홀수 인덱스는 'good' 쪽
  const hasNext = currentIndex < items.length - 1;
  const hasPrev = currentIndex > 0;

  return (
    <div className="flex flex-col gap-10">
      {title && (
        <h2 className="text-4xl font-bold tracking-tight text-text">{title}</h2>
      )}

      <div className="flex items-center justify-between gap-6">
        {/* 이전 버튼 */}
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={!hasPrev}
          className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-bold text-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent-soft transition-colors"
          aria-label="이전"
        >
          ←
        </button>

        {/* 카드 컨테이너 */}
        <div className="flex-grow">
          <CarouselCard data={current} isGood={isGood} />
        </div>

        {/* 다음 버튼 */}
        <button
          onClick={() => setCurrentIndex((prev) => Math.min(items.length - 1, prev + 1))}
          disabled={!hasNext}
          className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-bold text-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent-soft transition-colors"
          aria-label="다음"
        >
          →
        </button>
      </div>

      {/* 진행 지표 */}
      <div className="flex justify-center gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 transition-all ${
              idx === currentIndex ? 'bg-accent w-6' : 'bg-divider w-2 hover:bg-divider-strong'
            } rounded-full`}
            aria-label={`슬라이드 ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CarouselCard({ data, isGood }) {
  const bgClass = isGood ? 'bg-success-soft' : 'bg-danger-soft';
  const borderClass = isGood ? 'border-success' : 'border-danger';
  const labelClass = isGood ? 'text-success' : 'text-danger';
  const dotClass = isGood ? 'bg-success' : 'bg-danger';

  return (
    <div
      className={`rounded-2xl ${bgClass} border-l-4 ${borderClass} p-8 flex flex-col gap-6 transition-all duration-300 ease-out`}
    >
      <div className={`${labelClass} text-sm font-semibold tracking-wider uppercase`}>
        {data?.label}
      </div>
      <div className="text-2xl font-bold tracking-tight text-text leading-snug">
        {data?.statement}
      </div>
      <ul className="flex flex-col gap-3">
        {(data?.points ?? []).map((p, i) => (
          <li
            key={i}
            className="flex gap-3 items-start text-base font-medium text-text-sub tracking-tight"
          >
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full ${dotClass} mt-2.5 shrink-0`}
              aria-hidden
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
