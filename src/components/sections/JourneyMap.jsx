'use client';

// Source: reference/index.html L1145-1181
// 4단계 여정 맵 — 호버 시 stage-num lift + rotate

import { useEffect, useRef } from 'react';
import { JOURNEY_STAGES } from '@/lib/principles-data';

export default function JourneyMap() {
  const headerRef = useRef(null);
  const wrapRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    [headerRef, wrapRef, gridRef].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-eyebrow">YOUR JOURNEY · 4 STAGES</div>
          <h2 className="section-title">9세션이 누적되어<br />실제 서비스가 됩니다</h2>
          <p className="section-sub">
            매 세션 산출물이 다음 세션의 입력값. 21시간 후 손에 쥐는 것은 슬라이드가 아니라 배포된 사이트입니다.
          </p>
        </div>
        <div className="journey reveal" ref={wrapRef}>
          <div className="journey-stages reveal-stagger" ref={gridRef}>
            {JOURNEY_STAGES.map((stage) => (
              <div className="stage" key={stage.num}>
                <div className="stage-num">{stage.num}</div>
                <p className="stage-meta">{stage.sessions}</p>
                <h3 className="stage-title">{stage.title}</h3>
                <p className="stage-desc">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
