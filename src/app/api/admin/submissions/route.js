// GET /api/admin/submissions?slug=s1 → { list: [...] }
// GET /api/admin/submissions?slug=s1&id=sub_xxx → { record }
// Auth: Bearer ADMIN_PASSWORD
// Phase 5 (2026-05-12) — 어드민 제출 모니터링

import { NextResponse } from 'next/server';
import { listSubmissions, getSubmission, verifyAdminPassword } from '@/lib/kv';

export async function GET(request) {
  const auth = request.headers.get('authorization') ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!verifyAdminPassword(token)) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const id = searchParams.get('id');

  if (!slug) {
    return NextResponse.json(
      { success: false, error: 'slug_required' },
      { status: 400 }
    );
  }

  try {
    if (id) {
      const record = await getSubmission(slug, id);
      if (!record) {
        return NextResponse.json({ success: false, error: 'not_found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, record });
    }
    const list = await listSubmissions(slug);
    return NextResponse.json({ success: true, list });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: 'invalid_input', detail: String(e.message ?? e) },
      { status: 400 }
    );
  }
}
