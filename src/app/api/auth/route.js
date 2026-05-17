// POST /api/auth { password, role: 'student' | 'admin' } → { success, role }
// Phase F1 — Vercel KV 환경변수 비교

import { NextResponse } from 'next/server';
import { verifyStudentPassword, verifyAdminPassword } from '@/lib/kv';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_json' }, { status: 400 });
  }

  const { password, role = 'student' } = body ?? {};
  if (typeof password !== 'string' || password.length === 0) {
    return NextResponse.json({ success: false, error: 'missing_password' }, { status: 400 });
  }

  let ok = false;
  if (role === 'student') ok = verifyStudentPassword(password);
  else if (role === 'admin') ok = verifyAdminPassword(password);
  else {
    return NextResponse.json({ success: false, error: 'invalid_role' }, { status: 400 });
  }

  if (!ok) {
    return NextResponse.json({ success: false, error: 'invalid_password' }, { status: 401 });
  }

  return NextResponse.json({ success: true, role });
}
