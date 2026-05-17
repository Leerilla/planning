'use client';

// /sessions/[slug]/submit
// Phase 5 (2026-05-12) — 실습 제출 페이지

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import PasswordGate from '@/components/sections/PasswordGate';
import SubmitForm from '@/components/submit/SubmitForm';

const STUDENT_TOKEN_KEY = 'cc-student-password';

export default function SubmitPage() {
  const params = useParams();
  const slug = params.slug;

  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem(STUDENT_TOKEN_KEY);
    if (stored) {
      setPassword(stored);
      setAuthed(true);
    }
  }, []);

  const handleAuthed = (pw) => {
    // Phase 5: PasswordGate가 인증된 비밀번호를 그대로 전달
    if (pw) {
      sessionStorage.setItem(STUDENT_TOKEN_KEY, pw);
      setPassword(pw);
      setAuthed(true);
    }
  };

  const handleSubmit = async (payload) => {
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/submit-assignment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          password,
          studentName: payload.studentName,
          data: payload.data,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setResult({ id: data.id, submittedAt: data.submittedAt });
      } else if (res.status === 401) {
        setError('비밀번호가 만료되었습니다. 다시 로그인해 주세요.');
        sessionStorage.removeItem(STUDENT_TOKEN_KEY);
        setAuthed(false);
      } else {
        setError(data.detail ?? data.error ?? '제출 실패 — 잠시 후 다시 시도해 주세요.');
      }
    } catch {
      setError('네트워크 오류 — 잠시 후 다시 시도해 주세요.');
    } finally {
      setBusy(false);
    }
  };

  if (!authed) {
    return <PasswordGate onAuthed={handleAuthed} />;
  }

  if (result) {
    return (
      <main className="min-h-screen bg-bg text-text">
        <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col gap-6">
          <Link href={`/sessions/${slug}`} className="text-text-sub text-sm hover:text-text transition-colors w-fit">
            ← 세션 허브
          </Link>
          <div className="rounded-2xl border-l-4 border-success bg-success-soft p-8">
            <div className="text-success font-mono text-sm font-semibold tracking-wider uppercase mb-3">
              제출 완료
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              제출이 정상적으로 접수되었습니다
            </h1>
            <p className="text-base text-text-sub leading-relaxed mb-2">
              제출 ID: <span className="font-mono text-text">{result.id}</span>
            </p>
            <p className="text-base text-text-sub leading-relaxed mb-6">
              제출 시각: <span className="font-mono text-text">{new Date(result.submittedAt).toLocaleString('ko-KR')}</span>
            </p>
            <p className="text-sm font-medium text-text leading-relaxed">
              강사가 어드민에서 제출 내용을 확인합니다. 다음 단계 시작 전까지 추가 자료가 필요하면 다시 제출하세요.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="max-w-4xl mx-auto px-8 py-12 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Link href={`/sessions/${slug}`} className="text-text-sub text-sm hover:text-text transition-colors w-fit">
            ← 세션 허브
          </Link>
          <div className="text-text-sub font-mono text-sm tracking-wider uppercase">
            {slug.toUpperCase()} · ASSIGNMENT SUBMIT
          </div>
          <h1 className="text-4xl font-bold tracking-tight">실습 과제 제출</h1>
          <p className="text-base text-text-sub leading-relaxed">
            제출 후에도 같은 비밀번호로 다시 제출할 수 있습니다 — 누적되어 저장됩니다.
          </p>
        </div>

        {error ? (
          <div className="rounded-2xl border-l-4 border-danger bg-danger-soft p-4">
            <p className="text-sm font-medium text-text">{error}</p>
          </div>
        ) : null}

        <SubmitForm slug={slug} onSubmit={handleSubmit} busy={busy} />
      </div>
    </main>
  );
}
