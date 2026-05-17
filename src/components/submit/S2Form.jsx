'use client';

// S2 실습 제출 폼 — 능동·수동 두 축 검증 본격 가동
// Source: lectures/S2/assignment.md
// Phase 5 (2026-05-12)

import { useState } from 'react';

const CHANNEL_OPTIONS = [
  '이메일',
  '링크드인 DM',
  '네이버 카페 쪽지',
  '디스코드 / 슬랙',
  '카카오톡',
  '기타',
];

export default function S2Form({ onSubmit, busy }) {
  const [studentName, setStudentName] = useState('');
  const [sendChannel, setSendChannel] = useState('');
  const [copyText, setCopyText] = useState('');
  const [sendCount, setSendCount] = useState('');
  const [scrapeCommunity, setScrapeCommunity] = useState('');
  const [scrapeCount, setScrapeCount] = useState('');
  const [scrapeKeywords, setScrapeKeywords] = useState('');
  const [signalMemo, setSignalMemo] = useState('');
  const [reflection, setReflection] = useState({ meta: '', pattern: '', dataAmount: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      studentName,
      data: {
        active: {
          channel: sendChannel,
          copyText,
          sendCount: Number(sendCount) || 0,
        },
        passive: {
          community: scrapeCommunity,
          scrapeCount: Number(scrapeCount) || 0,
          keywords: scrapeKeywords,
        },
        signalMemo,
        reflection,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="submit-form">
      {/* 학생 이름 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">학생 정보</legend>
        <label className="submit-label">
          <span>이름 또는 식별자</span>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
            className="submit-input"
            placeholder="예: 홍길동 / KAIST_2025_03"
          />
        </label>
      </fieldset>

      {/* 1. 능동 검증 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">1. 능동 검증 — 카피 발송</legend>
        <p className="submit-hint">최소 5명 / 권장 10명+. 발송 직전 상태의 카피와 채널을 입력.</p>

        <label className="submit-label">
          <span>발송 채널</span>
          <select
            value={sendChannel}
            onChange={(e) => setSendChannel(e.target.value)}
            required
            className="submit-input"
          >
            <option value="">선택 …</option>
            {CHANNEL_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <label className="submit-label">
          <span>발송 카피 (메타 프롬프팅 + 본인 톤 수정 후)</span>
          <textarea
            value={copyText}
            onChange={(e) => setCopyText(e.target.value)}
            className="submit-textarea"
            rows={6}
            placeholder="첫 줄 후크 + 본문 + 부담 없는 응답 옵션"
            required
          />
        </label>

        <label className="submit-label">
          <span>발송 인원 수 (실제 발송 또는 발송 예정)</span>
          <input
            type="number"
            value={sendCount}
            onChange={(e) => setSendCount(e.target.value)}
            className="submit-input"
            min={0}
            placeholder="예: 10"
            required
          />
        </label>
      </fieldset>

      {/* 2. 수동 검증 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">2. 수동 검증 — Playwright MCP 스크래핑</legend>
        <p className="submit-hint">최소 50건 / 권장 200건+. 페르소나 커뮤니티 + 키워드 입력.</p>

        <label className="submit-label">
          <span>수집 커뮤니티 (URL 또는 이름)</span>
          <input
            type="text"
            value={scrapeCommunity}
            onChange={(e) => setScrapeCommunity(e.target.value)}
            className="submit-input"
            placeholder='예: 네이버 카페 "스타트업 PM 모임" / Reddit r/KoreanStartups'
            required
          />
        </label>

        <label className="submit-label">
          <span>수집 데이터 건수 (CSV 행 수)</span>
          <input
            type="number"
            value={scrapeCount}
            onChange={(e) => setScrapeCount(e.target.value)}
            className="submit-input"
            min={0}
            placeholder="예: 50"
            required
          />
        </label>

        <label className="submit-label">
          <span>주요 검색 키워드 (검색어 또는 카테고리)</span>
          <input
            type="text"
            value={scrapeKeywords}
            onChange={(e) => setScrapeKeywords(e.target.value)}
            className="submit-input"
            placeholder="예: 회의록 정리, 액션아이템, 결정 사항"
          />
        </label>
      </fieldset>

      {/* 3. 페인포인트 신호 메모 (선택) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">3. 페인포인트 신호 1차 메모 (선택, 권장)</legend>
        <p className="submit-hint">
          가장 자주 등장한 키워드 3개 / 페르소나 1차 가설과의 일치도 / 가장 강한 페인포인트 1개 등
        </p>
        <textarea
          value={signalMemo}
          onChange={(e) => setSignalMemo(e.target.value)}
          className="submit-textarea"
          rows={6}
          placeholder="- 가장 자주 등장한 키워드 3개: ...&#10;- 페르소나 1차 가설과의 일치도: ...&#10;- 가장 강한 페인포인트 1개: ..."
        />
      </fieldset>

      {/* 4. 회고 3 질문 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">4. 회고 3 질문</legend>

        <label className="submit-label">
          <span>(1) 메타 프롬프팅 효과</span>
          <textarea
            value={reflection.meta}
            onChange={(e) => setReflection((r) => ({ ...r, meta: e.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder={`예: "가이드라인 3개 중 '첫 줄 후크에 페인포인트 키워드 박기'가 카피를 강하게 만들었다"`}
          />
        </label>

        <label className="submit-label">
          <span>(2) 스크래핑 패턴 (구체적인 키워드와 빈도)</span>
          <textarea
            value={reflection.pattern}
            onChange={(e) => setReflection((r) => ({ ...r, pattern: e.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder={`예: "'정리 누락' 키워드가 30개 중 12개 글에 등장했다"`}
          />
        </label>

        <label className="submit-label">
          <span>(3) 다음 단계 데이터의 양</span>
          <textarea
            value={reflection.dataAmount}
            onChange={(e) => setReflection((r) => ({ ...r, dataAmount: e.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder='예: "능동 카피 1건 + 수동 50건 = 분석 시작 가능"'
          />
        </label>
      </fieldset>

      <button type="submit" className="submit-btn-primary" disabled={busy}>
        {busy ? '제출 중…' : '제출하기'}
      </button>
    </form>
  );
}
