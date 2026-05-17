'use client';

// Phase F1 — KV 기반 동적 잠금 상태 + locked 카드 클릭 차단
// /api/sessions-status로 9세션 active/locked 조회

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Play, Lock } from 'lucide-react';
import { SESSIONS } from '@/lib/sessions-data';

const DEFAULT_STATUSES = Object.fromEntries(SESSIONS.map((s) => [s.slug, 'locked']));

export default function SessionGrid() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [statuses, setStatuses] = useState(DEFAULT_STATUSES);

  useEffect(() => {
    let cancelled = false;
    const load = () => {
      fetch('/api/sessions-status', { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (!cancelled && data) setStatuses(data);
        })
        .catch(() => {});
    };
    load();
    // 탭 복귀 / 페이지 표시 시 재조회 — 어드민 토글 후 학생이 탭 전환만으로 반영 확인 가능
    const onFocus = () => load();
    const onVisibility = () => { if (document.visibilityState === 'visible') load(); };
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelled = true;
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="sessions">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-eyebrow">9 SESSIONS · 21 HOURS · 1 DEPLOY</div>
          <h2 className="section-title">9개 세션 21시간<br />하나의 풀사이클</h2>
          <p className="section-sub">
            각 세션 산출물이 다음 세션의 입력값. 21시간 후 손에 쥐는 것은 슬라이드가 아니라 배포된 사이트입니다.
          </p>
        </div>
        <div className="sessions-grid reveal-stagger" ref={gridRef}>
          {SESSIONS.map((s) => {
            const status = statuses[s.slug] ?? 'locked';
            const locked = status !== 'active';
            const cardProps = {
              className: `session-card ${locked ? 'locked' : 'active'}`,
              'data-slug': s.slug,
              'data-status': status,
            };
            const inner = (
              <>
                {locked && <span className="lock-overlay" aria-hidden="true" />}
                <div className="session-card-head">
                  <span className="session-card-num">SESSION {String(s.num).padStart(2, '0')}</span>
                  <span
                    className="session-card-status"
                    aria-label={locked ? '잠금' : '진행 가능'}
                  >
                    {locked
                      ? <Lock size={14} strokeWidth={2.2} />
                      : <Play size={14} fill="currentColor" strokeWidth={0} />}
                  </span>
                </div>
                <h3 className="session-card-title">{s.title}</h3>
                <p className="session-card-desc">{s.desc}</p>
                <div className="session-card-meta">
                  <span className="session-card-date">{s.date}</span>
                  <span className="session-card-tag">{locked ? '잠금' : s.tag}</span>
                </div>
              </>
            );
            return locked ? (
              <button
                key={s.num}
                type="button"
                {...cardProps}
                onClick={(e) => e.preventDefault()}
                aria-disabled="true"
              >
                {inner}
              </button>
            ) : (
              <div key={s.num} {...cardProps}>
                <Link href={`/sessions/${s.slug}`} className="session-card-main">
                  {inner}
                </Link>
                <div className="session-card-pdfs">
                  <a
                    href={`/pdfs/${s.slug}-theory.pdf`}
                    download
                    className="session-card-pdf-btn"
                    aria-label={`${s.title} 이론 PDF 다운로드`}
                  >
                    이론 PDF
                  </a>
                  <a
                    href={`/pdfs/${s.slug}-activity.pdf`}
                    download
                    className="session-card-pdf-btn"
                    aria-label={`${s.title} 활동 PDF 다운로드`}
                  >
                    활동 PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
