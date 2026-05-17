// POST /api/admin/toggle { slug, status } + Authorization: Bearer ADMIN_PASSWORD → { success, slug, status }
// 어드민 전용 — 세션 잠금/해제 토글

import { NextResponse } from 'next/server';
import { setSessionStatus, verifyAdminPassword } from '@/lib/kv';

export async function POST(request) {
  const auth = request.headers.get('authorization') ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!verifyAdminPassword(token)) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_json' }, { status: 400 });
  }

  const { slug, status } = body ?? {};
  try {
    const result = await setSessionStatus(slug, status);
    return NextResponse.json({ success: true, ...result });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: 'invalid_input', detail: String(e.message ?? e) },
      { status: 400 }
    );
  }
}
