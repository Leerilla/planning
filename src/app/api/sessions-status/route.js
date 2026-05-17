// GET /api/sessions-status → { s1: 'active', s2: 'locked', ... }
// 공개 엔드포인트 — 로그인 학생이 SessionGrid에서 조회

import { NextResponse } from 'next/server';
import { getAllSessionStatuses } from '@/lib/kv';

// 기본 정적 캐싱 무력화 — 어드민 토글이 즉시 반영되도록
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const statuses = await getAllSessionStatuses();
  return NextResponse.json(statuses, {
    headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' },
  });
}
