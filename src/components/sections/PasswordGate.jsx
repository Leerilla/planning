'use client';

// Phase F1 — /api/auth POST로 학생 비밀번호 검증 (KV 환경변수 기반)
// 0.6초 fade transition 유지

import { useState, useRef, useEffect } from 'react';

export default function PasswordGate({ onAuthed }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const verify = async () => {
    if (submitting || unlocked) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: value, role: 'student' }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setUnlocked(true);
        // Phase 5: 비밀번호를 부모에 전달 — 제출 페이지에서 /api/submit-assignment 호출용
        // 기존 호출자(인자 무시)와 후방 호환
        setTimeout(() => onAuthed?.(value), 600);
      } else {
        setError('비밀번호가 일치하지 않습니다');
        setValue('');
        inputRef.current?.focus();
      }
    } catch {
      setError('네트워크 오류 — 다시 시도해주세요');
    } finally {
      setSubmitting(false);
    }
  };

  const onKey = (e) => {
    if (e.key === 'Enter') verify();
  };

  return (
    <div className={`gate${unlocked ? ' unlocked' : ''}`}>
      <div className="gate-content">
        <div className="gate-logo">CLAUDE CODE · CURRICULUM</div>
        <h1 className="gate-title">학습 플랫폼 진입</h1>
        <p className="gate-sub">강사로부터 받은 비밀번호를 입력해주세요</p>
        <div className="gate-input-wrap">
          <input
            ref={inputRef}
            type="password"
            className="gate-input"
            placeholder="비밀번호"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError('');
            }}
            onKeyDown={onKey}
            disabled={submitting}
          />
          <button className="gate-btn" onClick={verify} disabled={submitting}>
            {submitting ? '확인 중…' : '진입'}
          </button>
        </div>
        <p className="gate-error">{error}</p>
        <p className="gate-hint">데모 비밀번호: <strong>claude2026</strong></p>
      </div>
    </div>
  );
}
