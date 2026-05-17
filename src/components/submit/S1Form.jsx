'use client';

// S1 실습 제출 폼 — 1차 가설 워크시트 + 컨택 리스트 + 본인 아이디어
// Source: lectures/S1/assignment.md
// Phase 5 (2026-05-12)

import { useState } from 'react';

const PERSONA_FIELDS = [
  { key: 'role', label: '직군 / 역할', placeholder: '예: 5-30인 스타트업 PM' },
  { key: 'env', label: '환경 조건', placeholder: '예: 월 50-100 SKU 등록 / 광고 집행 중' },
  { key: 'tools', label: '도구 사용', placeholder: '예: 스마트스토어 에디터, 포토샵, 챗GPT' },
  { key: 'motive', label: '동기 / 목표', placeholder: '왜 이 문제 / 해결되면 무엇이 바뀌는가' },
  { key: 'frequency', label: '페인포인트 빈도', placeholder: '예: 주 3-5회 (신규 등록 시마다)' },
  { key: 'channel', label: '검증 가능 채널', placeholder: '예: 네이버 카페 "스타트업 PM 모임"' },
];

const emptyContact = () => ({ name: '', link: '', note: '' });

export default function S1Form({ onSubmit, busy }) {
  const [studentName, setStudentName] = useState('');
  const [problem, setProblem] = useState('');
  const [persona, setPersona] = useState(
    PERSONA_FIELDS.reduce((acc, f) => ({ ...acc, [f.key]: '' }), {})
  );
  const [hypotheses, setHypotheses] = useState(['', '', '']);
  const [contacts, setContacts] = useState(Array.from({ length: 10 }, emptyContact));
  const [ideas, setIdeas] = useState(['', '', '']);
  const [falseMemo, setFalseMemo] = useState('');

  const setHyp = (i, v) => setHypotheses((arr) => arr.map((x, j) => (j === i ? v : x)));
  const setIdea = (i, v) => setIdeas((arr) => arr.map((x, j) => (j === i ? v : x)));
  const setContact = (i, key, v) =>
    setContacts((arr) => arr.map((c, j) => (j === i ? { ...c, [key]: v } : c)));
  const addContact = () => setContacts((arr) => [...arr, emptyContact()]);
  const removeContact = (i) => setContacts((arr) => arr.filter((_, j) => j !== i));

  const handleSubmit = (e) => {
    e.preventDefault();
    const validContacts = contacts.filter((c) => c.name.trim() || c.link.trim());
    const validHypotheses = hypotheses.filter((h) => h.trim());
    const validIdeas = ideas.filter((i) => i.trim());

    onSubmit({
      studentName,
      data: {
        problem,
        persona,
        hypotheses: validHypotheses,
        contacts: validContacts,
        ideas: validIdeas,
        falseMemo,
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

      {/* 1. 문제 정의 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">1. 문제 정의 (1줄)</legend>
        <label className="submit-label">
          <span>누가 + 어떤 상황 + 어떤 문제</span>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
            className="submit-textarea"
            rows={2}
            placeholder="예: 1인 스마트스토어 셀러가 새 상품 등록 시 상세페이지 카피 작성에 한 상품당 1-2시간을 쓴다"
          />
        </label>
      </fieldset>

      {/* 2. 페르소나 6줄 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">2. 가설 페르소나 (6줄)</legend>
        {PERSONA_FIELDS.map((f) => (
          <label key={f.key} className="submit-label">
            <span>{f.label}</span>
            <input
              type="text"
              value={persona[f.key]}
              onChange={(e) => setPersona((p) => ({ ...p, [f.key]: e.target.value }))}
              className="submit-input"
              placeholder={f.placeholder}
              required
            />
          </label>
        ))}
      </fieldset>

      {/* 3. 핵심 가설 3개 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">3. 핵심 가설 3개 (검증 가능 형식)</legend>
        {hypotheses.map((h, i) => (
          <label key={i} className="submit-label">
            <span>가설 {i + 1}</span>
            <textarea
              value={h}
              onChange={(e) => setHyp(i, e.target.value)}
              className="submit-textarea"
              rows={2}
              placeholder='예: "1인 스마트스토어 셀러는 키워드 자연화 도구에 월 2만원 이상 지불할 의향이 있을 것이다"'
              required={i === 0}
            />
          </label>
        ))}
      </fieldset>

      {/* 4. 컨택 리스트 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">4. 컨택 리스트 (10명 이상 권장 20명)</legend>
        <p className="submit-hint">페르소나에 부합하는 실제 사람의 링크드인 URL, 이메일, 카페 ID — 클릭 가능한 형태</p>
        <div className="submit-contacts">
          {contacts.map((c, i) => (
            <div key={i} className="submit-contact-row">
              <span className="submit-contact-num">{String(i + 1).padStart(2, '0')}</span>
              <input
                type="text"
                value={c.name}
                onChange={(e) => setContact(i, 'name', e.target.value)}
                className="submit-input"
                placeholder="이름 또는 ID"
              />
              <input
                type="text"
                value={c.link}
                onChange={(e) => setContact(i, 'link', e.target.value)}
                className="submit-input"
                placeholder="링크 (URL 또는 이메일)"
              />
              <input
                type="text"
                value={c.note}
                onChange={(e) => setContact(i, 'note', e.target.value)}
                className="submit-input"
                placeholder="메모 (선택)"
              />
              <button
                type="button"
                onClick={() => removeContact(i)}
                className="submit-btn-ghost"
                aria-label="삭제"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <button type="button" onClick={addContact} className="submit-btn-ghost submit-add">
          + 컨택 추가
        </button>
      </fieldset>

      {/* 5. 본인 아이디어 후보 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">5. 본인 아이디어 후보 (1-3개)</legend>
        <p className="submit-hint">시드 그대로 1개 + 시드 변형 1개 + 본인 관심사 1개, 또는 본인 아이디어 1개로 좁힘</p>
        {ideas.map((idea, i) => (
          <label key={i} className="submit-label">
            <span>아이디어 {i + 1}</span>
            <textarea
              value={idea}
              onChange={(e) => setIdea(i, e.target.value)}
              className="submit-textarea"
              rows={2}
              placeholder="예: 시드 6 베이스 — 본인 가족의 부업 셀러 페르소나로 변형"
              required={i === 0}
            />
          </label>
        ))}
      </fieldset>

      {/* 6. (선택) 거짓 메모 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">6. 거짓 메모 (선택)</legend>
        <label className="submit-label">
          <span>1차 리서치에서 발견한 거짓 정보 메모</span>
          <textarea
            value={falseMemo}
            onChange={(e) => setFalseMemo(e.target.value)}
            className="submit-textarea"
            rows={4}
            placeholder="정보 / 거짓 판정 이유 / 다시 검증한다면 어디서 / 어느 거짓 패턴인가"
          />
        </label>
      </fieldset>

      <button type="submit" className="submit-btn-primary" disabled={busy}>
        {busy ? '제출 중…' : '제출하기'}
      </button>
    </form>
  );
}
