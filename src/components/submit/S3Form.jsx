'use client';

// S3 실습 제출 폼 — 데이터를 PRD로 정제하기
// Source: lectures/S3/assignment.md
// Phase 5 (2026-05-12) — D-043 planning_project + D-044 5 docs SSOT 적용

import { useState } from 'react';

const EMPTY_PAINPOINT = { text: '', source: '' };
const EMPTY_FEATURE = '';

export default function S3Form({ onSubmit, busy }) {
  const [studentName, setStudentName] = useState('');

  // 1. NotebookLM 페인포인트 5개
  const [painpoints, setPainpoints] = useState([
    { ...EMPTY_PAINPOINT },
    { ...EMPTY_PAINPOINT },
    { ...EMPTY_PAINPOINT },
    { ...EMPTY_PAINPOINT },
    { ...EMPTY_PAINPOINT },
  ]);
  const [corePainpoint, setCorePainpoint] = useState('');

  // 2. Manyfast PRD 5요소
  const [prd, setPrd] = useState({
    problem: '',
    persona: '',
    features: [EMPTY_FEATURE, EMPTY_FEATURE, EMPTY_FEATURE],
    metrics: '',
    constraints: '',
  });

  // 3. prd.md export + 빌드 프로젝트 폴더
  const [exportDone, setExportDone] = useState(false);
  const [projectPath, setProjectPath] = useState('');
  const [readmeOneLiner, setReadmeOneLiner] = useState('');

  // 4. 회고 3 질문
  const [reflection, setReflection] = useState({
    notebooklm: '',
    manyfastEdit: '',
    prdCoreThree: '',
  });

  const updatePainpoint = (i, key, value) => {
    setPainpoints((prev) => prev.map((p, idx) => (idx === i ? { ...p, [key]: value } : p)));
  };

  const updateFeature = (i, value) => {
    setPrd((prev) => ({
      ...prev,
      features: prev.features.map((f, idx) => (idx === i ? value : f)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      studentName,
      data: {
        painpoints,
        corePainpoint,
        prd,
        export: {
          done: exportDone,
          projectPath,
          readmeOneLiner,
        },
        reflection,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="submit-form">
      {/* 학생 정보 */}
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

      {/* 1. NotebookLM 페인포인트 5개 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">1. NotebookLM 페인포인트 5개</legend>
        <p className="submit-hint">
          데이터에서 추출한 페인포인트 5개와 인용 출처. 직감이 아니라 NotebookLM 답변의 인용 번호 또는 원문 키워드.
        </p>

        {painpoints.map((p, i) => (
          <div key={i} className="submit-row">
            <label className="submit-label">
              <span>페인포인트 {i + 1}</span>
              <input
                type="text"
                value={p.text}
                onChange={(e) => updatePainpoint(i, 'text', e.target.value)}
                className="submit-input"
                placeholder='예: "카피 차별화 부족 → 검색 노출 순위 하락"'
                required={i < 3}
              />
            </label>
            <label className="submit-label">
              <span>출처 (인용 번호 또는 원문 키워드)</span>
              <input
                type="text"
                value={p.source}
                onChange={(e) => updatePainpoint(i, 'source', e.target.value)}
                className="submit-input"
                placeholder="예: [3], [7] / 또는 원문 키워드"
              />
            </label>
          </div>
        ))}

        <label className="submit-label">
          <span>핵심 페인포인트 1개 (가장 강한 신호)</span>
          <input
            type="text"
            value={corePainpoint}
            onChange={(e) => setCorePainpoint(e.target.value)}
            className="submit-input"
            placeholder="예: 카피 차별화 부족 (인용 2건 이상)"
            required
          />
        </label>
      </fieldset>

      {/* 2. Manyfast PRD 5요소 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">2. Manyfast PRD 5요소</legend>
        <p className="submit-hint">
          모호한 표현 0건 / 핵심 기능 3개 이하 / 성공 지표는 Before·After·측정 방법 형태.
        </p>

        <label className="submit-label">
          <span>(1) 문제 — 누가 / 어떤 상황 / 어떤 어려움</span>
          <textarea
            value={prd.problem}
            onChange={(e) => setPrd((p) => ({ ...p, problem: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder="예: 월 매출 100-500만원 1인 스마트스토어 셀러가 신규 상품 등록 시 카피 차별화 부족으로 검색 노출 순위가 하락한다"
            required
          />
        </label>

        <label className="submit-label">
          <span>(2) 페르소나 — 6줄 압축 (1줄 핵심)</span>
          <textarea
            value={prd.persona}
            onChange={(e) => setPrd((p) => ({ ...p, persona: e.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder="예: 월 매출 100-500만원 1인 스마트스토어 셀러 (본업 병행, 주 5-10시간 카피 작성)"
            required
          />
        </label>

        <label className="submit-label">
          <span>(3) 핵심 기능 3개 — 입력 / 핵심 처리 / 출력</span>
          <p className="submit-hint">표준 3개 구성: 입력 1 + 핵심 처리 1 + 출력 1.</p>
        </label>
        {prd.features.map((f, i) => {
          const labels = ['기능 1 (입력)', '기능 2 (핵심 처리)', '기능 3 (출력)'];
          return (
            <label key={i} className="submit-label">
              <span>{labels[i]}</span>
              <input
                type="text"
                value={f}
                onChange={(e) => updateFeature(i, e.target.value)}
                className="submit-input"
                placeholder={i === 0 ? '예: 상품 사진 + 키워드 5개 입력' : i === 1 ? '예: 카테고리별 차별화 카피 3개 생성' : '예: 스마트스토어 형식 텍스트 출력'}
                required
              />
            </label>
          );
        })}

        <label className="submit-label">
          <span>(4) 성공 지표 — Before / After / 측정 방법</span>
          <textarea
            value={prd.metrics}
            onChange={(e) => setPrd((p) => ({ ...p, metrics: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder={`예:\n- 카피 작성 시간: 1-2시간 → 5분 (사용자 10명 인터뷰)\n- 카피 후보 사용률: 70% 이상 (도구 로그)`}
            required
          />
        </label>

        <label className="submit-label">
          <span>(5) 제약사항 — 기술 / 기능 / 리소스</span>
          <textarea
            value={prd.constraints}
            onChange={(e) => setPrd((p) => ({ ...p, constraints: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder={`예:\n- 기술: 모바일 앱 X, 웹만\n- 기능: 다국어 X, 광고 자동 X\n- 리소스: 빌드 2주, LLM 비용 월 10만원 이내`}
            required
          />
        </label>
      </fieldset>

      {/* 3. prd.md export + 빌드 프로젝트 폴더 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">3. prd.md export + 빌드 프로젝트 폴더</legend>
        <p className="submit-hint">
          planning_project/ 안에 docs·src·tests·data·.claude 폴더 생성 + prd.md / persona.md / painpoints.md / README.md / .claude/CLAUDE.md 5종 docs 작성.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={exportDone}
            onChange={(e) => setExportDone(e.target.checked)}
            className="submit-checkbox"
          />
          <span>prd.md를 planning_project/docs/에 export 완료</span>
        </label>

        <label className="submit-label">
          <span>작업 폴더 경로 (planning_project 절대 경로 또는 상대 경로)</span>
          <input
            type="text"
            value={projectPath}
            onChange={(e) => setProjectPath(e.target.value)}
            className="submit-input"
            placeholder="예: ~/work/planning_project 또는 C:\\Users\\Name\\planning_project"
            required
          />
        </label>

        <label className="submit-label">
          <span>README.md 한 줄 요약 (프로젝트 한눈 소개)</span>
          <input
            type="text"
            value={readmeOneLiner}
            onChange={(e) => setReadmeOneLiner(e.target.value)}
            className="submit-input"
            placeholder="예: 1인 스마트스토어 셀러를 위한 차별화 카피 자동 생성 도구"
            required
          />
        </label>
      </fieldset>

      {/* 4. 회고 3 질문 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">4. 회고 3 질문</legend>
        <p className="submit-hint">측정 가능·구체적이면 좋은 답. 일반적·모호하면 나쁜 답.</p>

        <label className="submit-label">
          <span>(1) NotebookLM에서 좋았던 점 (구체적)</span>
          <textarea
            value={reflection.notebooklm}
            onChange={(e) => setReflection((r) => ({ ...r, notebooklm: e.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder={`예: "인용 클릭으로 페인포인트 5개 모두 원문 확인"`}
            required
          />
        </label>

        <label className="submit-label">
          <span>(2) Manyfast에서 가장 많이 수정한 부분 (Before → After)</span>
          <textarea
            value={reflection.manyfastEdit}
            onChange={(e) => setReflection((r) => ({ ...r, manyfastEdit: e.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder={`예: "성공 지표를 '만족도 향상'에서 '1-2시간 → 5분'으로"`}
            required
          />
        </label>

        <label className="submit-label">
          <span>(3) prd.md 핵심 3줄 (한 문장씩)</span>
          <textarea
            value={reflection.prdCoreThree}
            onChange={(e) => setReflection((r) => ({ ...r, prdCoreThree: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder={`예:\n(1) 1인 스마트스토어 셀러\n(2) 카테고리별 차별화 카피 3개 생성\n(3) 응답 시간 5초 이내`}
            required
          />
        </label>
      </fieldset>

      <button type="submit" className="submit-btn-primary" disabled={busy}>
        {busy ? '제출 중…' : '제출하기'}
      </button>
    </form>
  );
}
