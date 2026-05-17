'use client';

// S9 실습 제출 폼 — 노출과 재피드백 (4종 데이터 종합 → Pivot/Persevere/Kill 결정)
// Source: lectures/S9/assignment.md
// Phase 5 (2026-05-17) — D-044 7종 신규 docs SSOT + 9세션 학습 종착

import { useState } from 'react';

export default function S9Form({ onSubmit, busy }) {
  const [studentName, setStudentName] = useState('');

  // 2. 노출 발송 (Step 1)
  const [dispatch, setDispatch] = useState({
    sentCount: '',
    deployUrlInBody: false,
    threeQuestionsInBody: false,
    sentAt: '',
    channelSplit: '',
  });

  // 3. 4종 데이터 메모 (Step 3)
  const [data, setData] = useState({
    responseCount: '',
    claritySessions: '',
    sentryErrors: '',
    eventConversion: '',
    analysisMemoWritten: false,
  });

  // 4. NotebookLM 종합 분석 (Step 4)
  const [notebooklm, setNotebooklm] = useState({
    uploaded3: false,
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    citationsVerified: false,
    synthesisMemoWritten: false,
  });

  // 5. 갱신된 persona·PRD (Step 5)
  const [update, setUpdate] = useState({
    personaUpdated: false,
    prdUpdated: false,
    addedTraits: '',
    removedTraits: '',
    commitSha: '',
    commitMessageHasReason: false,
  });

  // 6. 다음 사이클 결정 (Step 6)
  const [decision, setDecision] = useState({
    pivotPersevereKill: '',
    dataReason1: '',
    dataReason2: '',
    dataReason3: '',
    weekAction: '',
    monthAction: '',
  });

  // 7. 학습 회고 (Step 6)
  const [retrospective, setRetrospective] = useState({
    weakestStage: '',
    valuableAiTool: '',
    nextStep: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      studentName,
      data: {
        dispatch: {
          ...dispatch,
          sentCount: Number(dispatch.sentCount) || 0,
        },
        data: {
          ...data,
          responseCount: Number(data.responseCount) || 0,
          claritySessions: Number(data.claritySessions) || 0,
          sentryErrors: Number(data.sentryErrors) || 0,
        },
        notebooklm,
        update,
        decision,
        retrospective,
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
            placeholder="예: 홍길동 / KAIST_2025_09"
          />
        </label>
      </fieldset>

      {/* 1. 노출 발송 (Step 1) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">1. 노출 발송 (Step 1, 10명 이상)</legend>
        <p className="submit-hint">
          재피드백 메일을 10명+ 발송. 자료 2 응답자 우선 + 응답률 좋은 시간대.
        </p>

        <label className="submit-label">
          <span>발송 대상 수 (10명 이상)</span>
          <input
            type="number"
            value={dispatch.sentCount}
            onChange={(s) => setDispatch((v) => ({ ...v, sentCount: s.target.value }))}
            className="submit-input"
            placeholder="예: 12"
            min="10"
            required
          />
        </label>

        <label className="submit-label">
          <span>발송 시각 (날짜·시간대)</span>
          <input
            type="text"
            value={dispatch.sentAt}
            onChange={(s) => setDispatch((v) => ({ ...v, sentAt: s.target.value }))}
            className="submit-input"
            placeholder="예: 2026-05-17 평일 오전 9-11시"
            required
          />
        </label>

        <label className="submit-label">
          <span>채널별 분배 (이메일 N명, 카카오톡 N명 등)</span>
          <input
            type="text"
            value={dispatch.channelSplit}
            onChange={(s) => setDispatch((v) => ({ ...v, channelSplit: s.target.value }))}
            className="submit-input"
            placeholder="예: 이메일 8명, 링크드인 2명, 카페 쪽지 2명"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={dispatch.deployUrlInBody}
            onChange={(s) => setDispatch((v) => ({ ...v, deployUrlInBody: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>메일 본문에 배포 URL (Vercel) 포함</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={dispatch.threeQuestionsInBody}
            onChange={(s) => setDispatch((v) => ({ ...v, threeQuestionsInBody: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>응답 질문 3개 포함 (사용 의향 / 월 지불 / 개선점)</span>
        </label>
      </fieldset>

      {/* 2. 4종 데이터 메모 (Step 3) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">2. 4종 데이터 메모 (Step 3)</legend>
        <p className="submit-hint">
          응답 (능동) + Clarity 세션 + Sentry 에러 + 이벤트 추적 전환율. docs/analysis-memo.md 작성.
        </p>

        <label className="submit-label">
          <span>응답 수신 건수</span>
          <input
            type="number"
            value={data.responseCount}
            onChange={(s) => setData((v) => ({ ...v, responseCount: s.target.value }))}
            className="submit-input"
            placeholder="예: 2 (5-15% 응답률 기준)"
            min="0"
            required
          />
        </label>

        <label className="submit-label">
          <span>Clarity 세션 영상 분석 건수 (3-5건 이상 권고)</span>
          <input
            type="number"
            value={data.claritySessions}
            onChange={(s) => setData((v) => ({ ...v, claritySessions: s.target.value }))}
            className="submit-input"
            placeholder="예: 5"
            min="0"
            required
          />
        </label>

        <label className="submit-label">
          <span>Sentry 에러 패턴 메모 건수 (1-3개)</span>
          <input
            type="number"
            value={data.sentryErrors}
            onChange={(s) => setData((v) => ({ ...v, sentryErrors: s.target.value }))}
            className="submit-input"
            placeholder="예: 2"
            min="0"
            required
          />
        </label>

        <label className="submit-label">
          <span>이벤트 추적 전체 완료율 K/N (%)</span>
          <input
            type="text"
            value={data.eventConversion}
            onChange={(s) => setData((v) => ({ ...v, eventConversion: s.target.value }))}
            className="submit-input"
            placeholder="예: 60% (K=12명 / N=20명)"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={data.analysisMemoWritten}
            onChange={(s) => setData((v) => ({ ...v, analysisMemoWritten: s.target.checked }))}
            className="submit-checkbox"
          />
          <span><code>docs/analysis-memo.md</code> 작성 완료 (Clarity/Sentry/이벤트 3종 메모)</span>
        </label>
      </fieldset>

      {/* 3. NotebookLM 종합 분석 (Step 4) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">3. NotebookLM 종합 분석 (Step 4)</legend>
        <p className="submit-hint">
          자료 3 노트북 재오픈 + 4종 데이터 업로드 + 교차 질문 4개 답변 + 인용 검증.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={notebooklm.uploaded3}
            onChange={(s) => setNotebooklm((v) => ({ ...v, uploaded3: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>3종 자료 업로드 (응답 메모 + 분석 메모 + 스크래핑 CSV)</span>
        </label>

        <label className="submit-label">
          <span>Q1: 응답 페인포인트가 Clarity 행동에서도 보이는가? — 답변 요약</span>
          <textarea
            value={notebooklm.answer1}
            onChange={(s) => setNotebooklm((v) => ({ ...v, answer1: s.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder="NotebookLM 답변 + 인용 번호"
            required
          />
        </label>

        <label className="submit-label">
          <span>Q2: PRD 핵심 가설이 이벤트 추적 전환율에서 통과했는가?</span>
          <textarea
            value={notebooklm.answer2}
            onChange={(s) => setNotebooklm((v) => ({ ...v, answer2: s.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder="통과 / 미통과 / 보류 + 근거"
            required
          />
        </label>

        <label className="submit-label">
          <span>Q3: Sentry 에러 패턴과 응답 불만이 같은 부분을 가리키는가?</span>
          <textarea
            value={notebooklm.answer3}
            onChange={(s) => setNotebooklm((v) => ({ ...v, answer3: s.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder="겹침 여부 + 구체 사례"
            required
          />
        </label>

        <label className="submit-label">
          <span>Q4: 페르소나 가설과 다른 페르소나가 들어온 흔적이 있는가?</span>
          <textarea
            value={notebooklm.answer4}
            onChange={(s) => setNotebooklm((v) => ({ ...v, answer4: s.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder="흔적 발견 → Pivot 신호 / 없음 → Persevere"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={notebooklm.citationsVerified}
            onChange={(s) => setNotebooklm((v) => ({ ...v, citationsVerified: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>인용 1-2개 클릭 → 원문 검증 완료 (거짓 인용 메모 포함)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={notebooklm.synthesisMemoWritten}
            onChange={(s) => setNotebooklm((v) => ({ ...v, synthesisMemoWritten: s.target.checked }))}
            className="submit-checkbox"
          />
          <span><code>docs/synthesis-memo.md</code> 작성 완료 (페르소나·페인포인트·가설 통과 3섹션)</span>
        </label>
      </fieldset>

      {/* 4. 갱신된 persona·PRD (Step 5) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">4. 갱신된 persona·PRD (Step 5)</legend>
        <p className="submit-hint">
          docs/persona.md + docs/prd.md 동시 갱신. 추가/제거 변화 + git-committer 자동 커밋.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={update.personaUpdated}
            onChange={(s) => setUpdate((v) => ({ ...v, personaUpdated: s.target.checked }))}
            className="submit-checkbox"
          />
          <span><code>docs/persona.md</code> 갱신 (30% 기준 적용)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={update.prdUpdated}
            onChange={(s) => setUpdate((v) => ({ ...v, prdUpdated: s.target.checked }))}
            className="submit-checkbox"
          />
          <span><code>docs/prd.md</code> 5요소 검토 + 갱신 (문제·페르소나·핵심 기능·성공 지표·제약사항)</span>
        </label>

        <label className="submit-label">
          <span>추가된 특성 (데이터 근거 포함)</span>
          <textarea
            value={update.addedTraits}
            onChange={(s) => setUpdate((v) => ({ ...v, addedTraits: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "키워드 5개 중 평균 3개만 입력 (Clarity 세션 8건 중 6건)"'
            required
          />
        </label>

        <label className="submit-label">
          <span>제거된 특성 (데이터에서 안 보임)</span>
          <textarea
            value={update.removedTraits}
            onChange={(s) => setUpdate((v) => ({ ...v, removedTraits: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "광고비 의존도 동기 (응답에서 시간 절약만 강조)"'
            required
          />
        </label>

        <label className="submit-label">
          <span>자동 커밋 SHA (git log -1 결과)</span>
          <input
            type="text"
            value={update.commitSha}
            onChange={(s) => setUpdate((v) => ({ ...v, commitSha: s.target.value }))}
            className="submit-input"
            placeholder="예: a1b2c3d (또는 풀 sha)"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={update.commitMessageHasReason}
            onChange={(s) => setUpdate((v) => ({ ...v, commitMessageHasReason: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>커밋 메시지가 갱신 근거를 데이터로 명시</span>
        </label>
      </fieldset>

      {/* 5. 다음 사이클 결정 (Step 6) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">5. 다음 사이클 결정 (Step 6)</legend>
        <p className="submit-hint">
          Pivot · Persevere · Kill 중 1개 + 데이터 근거 3개 + 1주 안 + 1개월 안 행동. docs/next-cycle-decision.md 작성.
        </p>

        <label className="submit-label">
          <span>결정 (Pivot / Persevere / Kill 중 1개)</span>
          <select
            value={decision.pivotPersevereKill}
            onChange={(s) => setDecision((v) => ({ ...v, pivotPersevereKill: s.target.value }))}
            className="submit-input"
            required
          >
            <option value="">선택...</option>
            <option value="Pivot">Pivot — 페르소나 또는 핵심 가설 변경</option>
            <option value="Persevere">Persevere — PRD 일부만 갱신, 같은 방향 유지</option>
            <option value="Kill">Kill — 본 시드 폐기, 다른 시드로 이동</option>
          </select>
        </label>

        <label className="submit-label">
          <span>데이터 근거 1</span>
          <input
            type="text"
            value={decision.dataReason1}
            onChange={(s) => setDecision((v) => ({ ...v, dataReason1: s.target.value }))}
            className="submit-input"
            placeholder='예: "이벤트 추적 완료율 60% (50-70% 범위)"'
            required
          />
        </label>

        <label className="submit-label">
          <span>데이터 근거 2</span>
          <input
            type="text"
            value={decision.dataReason2}
            onChange={(s) => setDecision((v) => ({ ...v, dataReason2: s.target.value }))}
            className="submit-input"
            placeholder='예: "Clarity 세션 8건 중 6건이 키워드 5개에서 막힘"'
            required
          />
        </label>

        <label className="submit-label">
          <span>데이터 근거 3</span>
          <input
            type="text"
            value={decision.dataReason3}
            onChange={(s) => setDecision((v) => ({ ...v, dataReason3: s.target.value }))}
            className="submit-input"
            placeholder='예: "응답 2건이 키워드 가변 입력 선호 언급"'
            required
          />
        </label>

        <label className="submit-label">
          <span>1주 안에 할 일 1개 (구체적)</span>
          <textarea
            value={decision.weekAction}
            onChange={(s) => setDecision((v) => ({ ...v, weekAction: s.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder='예: "키워드 5개 → 3-5개 가변 입력 UI 수정 후 재배포"'
            required
          />
        </label>

        <label className="submit-label">
          <span>1개월 안에 할 일 (다음 사이클 시작 시점)</span>
          <textarea
            value={decision.monthAction}
            onChange={(s) => setDecision((v) => ({ ...v, monthAction: s.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder='예: "추가 컨택 10명 발송 → 2차 응답 수집 → 종합 분석"'
            required
          />
        </label>
      </fieldset>

      {/* 6. 학습 회고 (Step 6) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">6. 학습 회고 — 구체적 답 (Step 6)</legend>
        <p className="submit-hint">
          좋은 답 = 숫자·기간·도구명. 나쁜 답("어려웠다", "다 좋았다") 회피.
          docs/learning-retrospective.md 작성 (D-044 7번째 = 마지막 신규 docs).
        </p>

        <label className="submit-label">
          <span>5단계 사슬 중 가장 약했던 단계 (문제·페르소나·가설·검증·정제)</span>
          <textarea
            value={retrospective.weakestStage}
            onChange={(s) => setRetrospective((v) => ({ ...v, weakestStage: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "검증 단계. 응답률이 낮아 데이터 부족 (10명 발송에 응답 1명)"'
            required
          />
        </label>

        <label className="submit-label">
          <span>가치 있던 AI 도구 + 어려웠던 도구 (구체 사례)</span>
          <textarea
            value={retrospective.valuableAiTool}
            onChange={(s) => setRetrospective((v) => ({ ...v, valuableAiTool: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "가치: NotebookLM 인용 검증 (교차 분석 4질문). 어려움: Sentry 컨텍스트 해석"'
            required
          />
        </label>

        <label className="submit-label">
          <span>학습 종료 후 다음에 할 일 1개 (학습 종착점)</span>
          <textarea
            value={retrospective.nextStep}
            onChange={(s) => setRetrospective((v) => ({ ...v, nextStep: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "1주 안에 인터뷰 3명 추가 신청 → 키워드 입력 UX 검증"'
            required
          />
        </label>
      </fieldset>

      <button type="submit" className="submit-button" disabled={busy}>
        {busy ? '제출 중...' : '과제 제출'}
      </button>
    </form>
  );
}
