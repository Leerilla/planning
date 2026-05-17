'use client';

// SubmitForm — 세션별 폼 라우터
// Phase 5 (2026-05-12)

import S1Form from './S1Form';
import S2Form from './S2Form';
import S3Form from './S3Form';
import S4Form from './S4Form';
import S5Form from './S5Form';
import S7Form from './S7Form';
import S8Form from './S8Form';
import S9Form from './S9Form';

export default function SubmitForm({ slug, onSubmit, busy }) {
  if (slug === 's1') return <S1Form onSubmit={onSubmit} busy={busy} />;
  if (slug === 's2') return <S2Form onSubmit={onSubmit} busy={busy} />;
  if (slug === 's3') return <S3Form onSubmit={onSubmit} busy={busy} />;
  if (slug === 's4') return <S4Form onSubmit={onSubmit} busy={busy} />;
  if (slug === 's5') return <S5Form onSubmit={onSubmit} busy={busy} />;
  if (slug === 's7') return <S7Form onSubmit={onSubmit} busy={busy} />;
  if (slug === 's8') return <S8Form onSubmit={onSubmit} busy={busy} />;
  if (slug === 's9') return <S9Form onSubmit={onSubmit} busy={busy} />;
  return (
    <div className="submit-empty">
      해당 세션의 제출 폼이 아직 준비되지 않았습니다.
    </div>
  );
}
