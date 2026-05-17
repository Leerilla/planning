'use client';

// Source: reference/index.html L1342-1379
// 5대 운영 원칙 — 검정 배경 그리드

import { useEffect, useRef } from 'react';
import { PRINCIPLES } from '@/lib/principles-data';

export default function PrinciplesSection() {
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
    if (wrapRef.current) observer.observe(wrapRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="principles">
      <div className="container">
        <div className="principles reveal" ref={wrapRef}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <div className="section-eyebrow">5 PRINCIPLES</div>
            <h2 className="section-title">21시간 내내 흔들리지 않는 5가지</h2>
            <p className="section-sub">도구는 바뀌어도 원칙은 바뀌지 않습니다. 막힐 때 돌아오는 곳.</p>
          </div>
          <div className="principles-grid reveal-stagger" ref={gridRef}>
            {PRINCIPLES.map((p) => (
              <div className="principle" key={p.num}>
                <div className="principle-num">{p.num}</div>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
