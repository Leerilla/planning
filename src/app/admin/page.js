'use client';

// Phase F1 — 어드민 대시보드
// Phase 5 (2026-05-12) — 제출 모니터링 섹션 추가
// CLAUDE.md 원칙 1 예외: 어드민 패널은 PPT 모드 X (스크롤 형식)

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Lock, Play, LogOut, Home } from 'lucide-react';
import { SESSIONS } from '@/lib/sessions-data';

const TOKEN_KEY = 'cc-admin-token';
const SUBMIT_SUPPORTED_SLUGS = ['s1', 's2', 's3', 's4', 's5', 's7', 's8', 's9']; // Phase 5에서 폼 지원하는 세션

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [token, setToken] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [statuses, setStatuses] = useState({});
  const [busy, setBusy] = useState(null);
  const inputRef = useRef(null);

  // Phase 5 — 제출 모니터링
  const [subSlug, setSubSlug] = useState('s1');
  const [submissions, setSubmissions] = useState([]);
  const [subDetail, setSubDetail] = useState(null);
  const [subBusy, setSubBusy] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(TOKEN_KEY);
    if (stored) {
      setToken(stored);
      setAuthed(true);
    } else {
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetch('/api/sessions-status', { cache: 'no-store' })
      .then((r) => r.json())
      .then(setStatuses)
      .catch(() => {});
  }, [authed]);

  const login = async () => {
    setLoginError('');
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pwInput, role: 'admin' }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        sessionStorage.setItem(TOKEN_KEY, pwInput);
        setToken(pwInput);
        setAuthed(true);
        setPwInput('');
      } else {
        setLoginError('어드민 비밀번호가 일치하지 않습니다');
        setPwInput('');
      }
    } catch {
      setLoginError('네트워크 오류 — 다시 시도해주세요');
    }
  };

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setAuthed(false);
    setToken('');
  };

  // Phase 5 — 제출 목록 fetch
  useEffect(() => {
    if (!authed || !subSlug) return;
    setSubBusy(true);
    setSubDetail(null);
    fetch(`/api/admin/submissions?slug=${subSlug}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setSubmissions(data.list ?? []);
        else setSubmissions([]);
      })
      .catch(() => setSubmissions([]))
      .finally(() => setSubBusy(false));
  }, [authed, subSlug, token]);

  const viewDetail = async (id) => {
    setSubBusy(true);
    try {
      const res = await fetch(`/api/admin/submissions?slug=${subSlug}&id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      });
      const data = await res.json().catch(() => ({}));
      if (data.success) setSubDetail(data.record);
    } finally {
      setSubBusy(false);
    }
  };

  const toggle = async (slug, current) => {
    const next = current === 'active' ? 'locked' : 'active';
    setBusy(slug);
    try {
      const res = await fetch('/api/admin/toggle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ slug, status: next }),
      });
      if (res.ok) {
        setStatuses((prev) => ({ ...prev, [slug]: next }));
      } else if (res.status === 401) {
        logout();
      }
    } finally {
      setBusy(null);
    }
  };

  if (!authed) {
    return (
      <main className="admin-shell">
        <div className="admin-login">
          <div className="admin-eyebrow">CLAUDE CODE · ADMIN</div>
          <h1 className="admin-title">강사 어드민 패널</h1>
          <p className="admin-sub">세션 잠금/해제 관리. ADMIN_PASSWORD 입력.</p>
          <div className="admin-login-row">
            <input
              ref={inputRef}
              type="password"
              className="admin-input"
              placeholder="어드민 비밀번호"
              value={pwInput}
              onChange={(e) => {
                setPwInput(e.target.value);
                if (loginError) setLoginError('');
              }}
              onKeyDown={(e) => { if (e.key === 'Enter') login(); }}
            />
            <button type="button" className="admin-btn primary" onClick={login}>진입</button>
          </div>
          {loginError && <p className="admin-error">{loginError}</p>}
          <Link href="/" className="admin-back">← 메인 허브</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <div className="admin-dashboard">
        <header className="admin-header">
          <div>
            <div className="admin-eyebrow">CLAUDE CODE · ADMIN</div>
            <h1 className="admin-title">세션 잠금/해제 관리</h1>
            <p className="admin-sub">9세션의 학생 접근 상태를 토글합니다. 즉시 KV 반영.</p>
          </div>
          <div className="admin-header-actions">
            <Link href="/" className="admin-btn ghost">
              <Home size={14} strokeWidth={2.2} />
              메인 허브
            </Link>
            <button type="button" className="admin-btn ghost" onClick={logout}>
              <LogOut size={14} strokeWidth={2.2} />
              로그아웃
            </button>
          </div>
        </header>

        <div className="admin-table">
          <div className="admin-row admin-row-head">
            <span>세션</span>
            <span>제목</span>
            <span>상태</span>
            <span>토글</span>
          </div>
          {SESSIONS.map((s) => {
            const status = statuses[s.slug] ?? 'locked';
            const isActive = status === 'active';
            return (
              <div key={s.slug} className="admin-row">
                <span className="admin-row-num">SESSION {String(s.num).padStart(2, '0')}</span>
                <span className="admin-row-title">{s.title}</span>
                <span className={`admin-row-status ${isActive ? 'on' : 'off'}`}>
                  {isActive
                    ? <><Play size={12} fill="currentColor" strokeWidth={0} /> 활성</>
                    : <><Lock size={12} strokeWidth={2.2} /> 잠금</>}
                </span>
                <button
                  type="button"
                  className={`admin-btn ${isActive ? 'danger' : 'primary'}`}
                  onClick={() => toggle(s.slug, status)}
                  disabled={busy === s.slug}
                >
                  {busy === s.slug ? '갱신 중…' : (isActive ? '잠그기' : '해제')}
                </button>
              </div>
            );
          })}
        </div>

        {/* Phase 5 — 제출 모니터링 섹션 */}
        <section className="admin-submissions">
          <div className="admin-submissions-header">
            <h2 className="admin-submissions-title">실습 제출 모니터링</h2>
            <div className="admin-submissions-tabs">
              {SUBMIT_SUPPORTED_SLUGS.map((slug) => (
                <button
                  key={slug}
                  type="button"
                  className={`admin-btn ${subSlug === slug ? 'primary' : 'ghost'}`}
                  onClick={() => setSubSlug(slug)}
                >
                  {slug.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="admin-submissions-body">
            <div className="admin-submissions-list">
              <div className="admin-submissions-list-head">
                {subSlug.toUpperCase()} 제출 ({submissions.length}건)
                {subBusy ? ' · 로딩 중…' : ''}
              </div>
              {submissions.length === 0 && !subBusy ? (
                <div className="admin-submissions-empty">아직 제출이 없습니다</div>
              ) : (
                <ul className="admin-submissions-items">
                  {submissions
                    .slice()
                    .reverse()
                    .map((s) => (
                      <li
                        key={s.id}
                        className={`admin-submissions-item ${subDetail?.id === s.id ? 'active' : ''}`}
                      >
                        <button
                          type="button"
                          className="admin-submissions-item-btn"
                          onClick={() => viewDetail(s.id)}
                        >
                          <span className="admin-submissions-name">{s.studentName}</span>
                          <span className="admin-submissions-time">
                            {new Date(s.submittedAt).toLocaleString('ko-KR')}
                          </span>
                        </button>
                      </li>
                    ))}
                </ul>
              )}
            </div>

            <div className="admin-submissions-detail">
              {subDetail ? (
                <>
                  <div className="admin-submissions-detail-head">
                    <span className="admin-submissions-name">{subDetail.studentName}</span>
                    <span className="admin-submissions-time">
                      {new Date(subDetail.submittedAt).toLocaleString('ko-KR')}
                    </span>
                  </div>
                  <pre className="admin-submissions-detail-body">
                    {JSON.stringify(subDetail.data, null, 2)}
                  </pre>
                </>
              ) : (
                <div className="admin-submissions-empty">좌측 항목을 선택하면 상세가 표시됩니다</div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
