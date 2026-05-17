// POST /api/submit-assignment
// Body: { slug, studentName, password, data }
// Auth: STUDENT_PASSWORD 필요
// Phase 5 (2026-05-12) — 실습 제출 인프라

import { NextResponse } from 'next/server';
import { saveSubmission, verifyStudentPassword } from '@/lib/kv';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_json' }, { status: 400 });
  }

  const { slug, studentName, password, data } = body ?? {};

  if (!verifyStudentPassword(password)) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }

  try {
    const record = await saveSubmission(slug, { studentName, data });
    return NextResponse.json({ success: true, id: record.id, submittedAt: record.submittedAt });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: 'invalid_input', detail: String(e.message ?? e) },
      { status: 400 }
    );
  }
}
