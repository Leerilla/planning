// Vercel KV 래퍼 + 키 네임스페이스 헬퍼
// docs/architecture.md § 데이터 스키마 준수
// KV 미연결 시 메모리 fallback (로컬 개발 편의)

import { kv } from '@vercel/kv';

const SESSION_SLUGS = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
const STATUS_KEY = (slug) => `session:${slug}:status`;
const DEFAULT_STATUS = (slug) => (slug === 's1' ? 'active' : 'locked');

const memory = new Map();

function isKvConfigured() {
  // E2E 회귀 시 메모리 fallback 강제 (시스템 환경변수에 KV 토큰이 있더라도)
  if (process.env.E2E_MEMORY_FALLBACK === '1') return false;
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function kvGet(key) {
  if (isKvConfigured()) return await kv.get(key);
  return memory.get(key) ?? null;
}

async function kvSet(key, value) {
  if (isKvConfigured()) return await kv.set(key, value);
  memory.set(key, value);
}

export async function getSessionStatus(slug) {
  const stored = await kvGet(STATUS_KEY(slug));
  return stored ?? DEFAULT_STATUS(slug);
}

export async function setSessionStatus(slug, status) {
  if (!SESSION_SLUGS.includes(slug)) {
    throw new Error(`unknown session slug: ${slug}`);
  }
  if (!['active', 'locked'].includes(status)) {
    throw new Error(`invalid status: ${status}`);
  }
  await kvSet(STATUS_KEY(slug), status);
  return { slug, status };
}

export async function getAllSessionStatuses() {
  const entries = await Promise.all(
    SESSION_SLUGS.map(async (slug) => [slug, await getSessionStatus(slug)])
  );
  return Object.fromEntries(entries);
}

export function verifyStudentPassword(password) {
  const expected = process.env.STUDENT_PASSWORD ?? 'claude2026';
  return typeof password === 'string' && password === expected;
}

export function verifyAdminPassword(password) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false; // 미설정 시 어드민 진입 차단
  return typeof password === 'string' && password === expected;
}

// ============================================================
// 실습 제출 인프라 (Phase 5, 2026-05-12)
// ============================================================

const SUBMISSIONS_INDEX_KEY = (slug) => `session:${slug}:submissions`;
const SUBMISSION_KEY = (slug, id) => `session:${slug}:submission:${id}`;

function makeSubmissionId() {
  return `sub_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * 학생 제출 저장
 * @param {string} slug — session slug (s1~s9)
 * @param {object} payload — { studentName, data }
 * @returns {Promise<{id, submittedAt, ...}>}
 */
export async function saveSubmission(slug, payload) {
  if (!SESSION_SLUGS.includes(slug)) {
    throw new Error(`unknown session slug: ${slug}`);
  }
  const studentName = String(payload?.studentName ?? '').trim();
  if (!studentName) throw new Error('studentName required');
  if (!payload?.data || typeof payload.data !== 'object') {
    throw new Error('data object required');
  }

  const id = makeSubmissionId();
  const submittedAt = new Date().toISOString();
  const record = { id, slug, studentName, submittedAt, data: payload.data };

  await kvSet(SUBMISSION_KEY(slug, id), record);

  // 인덱스에 id 추가
  const indexed = (await kvGet(SUBMISSIONS_INDEX_KEY(slug))) ?? [];
  indexed.push({ id, studentName, submittedAt });
  await kvSet(SUBMISSIONS_INDEX_KEY(slug), indexed);

  return record;
}

/**
 * 세션의 제출 인덱스 조회 (어드민)
 */
export async function listSubmissions(slug) {
  if (!SESSION_SLUGS.includes(slug)) {
    throw new Error(`unknown session slug: ${slug}`);
  }
  const indexed = (await kvGet(SUBMISSIONS_INDEX_KEY(slug))) ?? [];
  return indexed;
}

/**
 * 단일 제출 상세 조회 (어드민)
 */
export async function getSubmission(slug, id) {
  if (!SESSION_SLUGS.includes(slug)) {
    throw new Error(`unknown session slug: ${slug}`);
  }
  return await kvGet(SUBMISSION_KEY(slug, id));
}

export const SESSION_LIST = SESSION_SLUGS;
