'use client';

// S8 실습 제출 폼 — 풀스택 배포와 분석 셋업 (공개 URL + 분석 인프라)
// Source: lectures/S8/captures/assignment.md
// Phase 5 (2026-05-17) — D-043 planning_project 누적 + Railway/Vercel/Clarity/Sentry/이벤트 추적

import { useState } from 'react';

export default function S8Form({ onSubmit, busy }) {
  const [studentName, setStudentName] = useState('');

  // 1. BE 배포 (Railway)
  const [be, setBe] = useState({
    railwayUrl: '',
    rootDirectory: false,
    openaiKeyRegistered: false,
    healthCheckPassed: false,
    portEnvUsed: false,
  });

  // 2. FE 배포 (Vercel)
  const [fe, setFe] = useState({
    vercelUrl: '',
    apiUrlRegistered: false,
    pageVisible: false,
    frameworkPreset: false,
  });

  // 3. CORS 디버깅
  const [cors, setCors] = useState({
    errorCollected: false,
    threePrincipleApplied: false,
    whitelistPolicy: false,
    scenarioWorks: false,
    notesMemo: '',
  });

  // 4. 분석 도구 3종
  const [analytics, setAnalytics] = useState({
    clarityInstalled: false,
    sentryFeInstalled: false,
    sentryBeInstalled: false,
    eventsCount: '',
    sessionRecorded: false,
    sentryTestError: false,
  });

  // 5. 비용 / /cost
  const [cost, setCost] = useState({
    baselineMemo: '',
    finalMemo: '',
  });

  // 6. 재피드백 메일 카피
  const [recopy, setRecopy] = useState({
    written: false,
    deployUrlIncluded: false,
    threeQuestionsIncluded: false,
  });

  // 7. 회고
  const [reflection, setReflection] = useState({
    devVocabEffect: '',
    corsDebugEffect: '',
    analyticsValue: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      studentName,
      data: {
        be,
        fe,
        cors,
        analytics: {
          ...analytics,
          eventsCount: Number(analytics.eventsCount) || 0,
        },
        cost,
        recopy,
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
            placeholder="예: 홍길동 / KAIST_2025_08"
          />
        </label>
      </fieldset>

      {/* 1. BE 배포 (Railway) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">1. BE 배포 (Railway, 8단계)</legend>
        <p className="submit-hint">
          Railway에 BE 배포 + Root Directory = server/ + OPENAI_API_KEY 등록 + Generate Domain + 헬스체크.
        </p>

        <label className="submit-label">
          <span>Railway BE URL (Generate Domain 결과)</span>
          <input
            type="text"
            value={be.railwayUrl}
            onChange={(s) => setBe((v) => ({ ...v, railwayUrl: s.target.value }))}
            className="submit-input"
            placeholder="예: https://planning-project-production.up.railway.app"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={be.rootDirectory}
            onChange={(s) => setBe((v) => ({ ...v, rootDirectory: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>Root Directory = server/ 설정 완료 (monorepo)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={be.openaiKeyRegistered}
            onChange={(s) => setBe((v) => ({ ...v, openaiKeyRegistered: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>OPENAI_API_KEY Railway Variables 등록 완료</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={be.portEnvUsed}
            onChange={(s) => setBe((v) => ({ ...v, portEnvUsed: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>BE 코드 process.env.PORT 사용 (고정 포트 X)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={be.healthCheckPassed}
            onChange={(s) => setBe((v) => ({ ...v, healthCheckPassed: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>헬스체크 /health 응답 정상 ({"\"status\": \"ok\""})</span>
        </label>
      </fieldset>

      {/* 2. FE 배포 (Vercel) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">2. FE 배포 (Vercel, 5단계)</legend>
        <p className="submit-hint">
          Vercel에 FE 배포 + Framework Preset 자동 감지 + NEXT_PUBLIC_API_URL 등록 + 화면 노출.
        </p>

        <label className="submit-label">
          <span>Vercel FE URL</span>
          <input
            type="text"
            value={fe.vercelUrl}
            onChange={(s) => setFe((v) => ({ ...v, vercelUrl: s.target.value }))}
            className="submit-input"
            placeholder="예: https://planning-project.vercel.app"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={fe.frameworkPreset}
            onChange={(s) => setFe((v) => ({ ...v, frameworkPreset: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>Framework Preset 자동 감지 (Next.js)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={fe.apiUrlRegistered}
            onChange={(s) => setFe((v) => ({ ...v, apiUrlRegistered: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>NEXT_PUBLIC_API_URL = Railway URL 등록 완료</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={fe.pageVisible}
            onChange={(s) => setFe((v) => ({ ...v, pageVisible: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>FE URL에서 화면 노출 확인 (CORS 에러는 다음 Step)</span>
        </label>
      </fieldset>

      {/* 3. CORS 디버깅 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">3. CORS 해결 (자율 디버깅 3원칙)</legend>
        <p className="submit-hint">
          F12 Console에서 에러 풀 메시지 복사 → 자율 디버깅 3원칙 명령 → 화이트리스트 정책으로 해결.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={cors.errorCollected}
            onChange={(s) => setCors((v) => ({ ...v, errorCollected: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>CORS 에러 풀 메시지 복사 (F12 Console)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={cors.threePrincipleApplied}
            onChange={(s) => setCors((v) => ({ ...v, threePrincipleApplied: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>자율 디버깅 3원칙 명령 적용 (에러 그대로 + 분석 먼저 + 결과 검증)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={cors.whitelistPolicy}
            onChange={(s) => setCors((v) => ({ ...v, whitelistPolicy: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>화이트리스트 정책 설정 (Access-Control-Allow-Origin: * 사용 X)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={cors.scenarioWorks}
            onChange={(s) => setCors((v) => ({ ...v, scenarioWorks: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>시드 6번 시나리오 공개 URL에서 동작 확인</span>
        </label>

        <label className="submit-label">
          <span>막힘 메모 (CORS 디버깅 중 발견한 점)</span>
          <textarea
            value={cors.notesMemo}
            onChange={(s) => setCors((v) => ({ ...v, notesMemo: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder="예: '풀 메시지 그대로 → 화이트리스트 명령 → Railway 자동 재배포 → 1회 해결'"
          />
        </label>
      </fieldset>

      {/* 4. 분석 도구 3종 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">4. 분석 도구 3종 셋업 (Clarity + Sentry + 이벤트 추적)</legend>
        <p className="submit-hint">
          다음 단계 노출 직전 셋업 — 첫 사용자부터 데이터 수집. 셋업 안 하면 데이터 영원히 회수 불가.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={analytics.clarityInstalled}
            onChange={(s) => setAnalytics((v) => ({ ...v, clarityInstalled: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>Microsoft Clarity 추적 코드 layout.tsx 삽입</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={analytics.sentryFeInstalled}
            onChange={(s) => setAnalytics((v) => ({ ...v, sentryFeInstalled: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>Sentry SDK FE 초기화 (Next.js DSN)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={analytics.sentryBeInstalled}
            onChange={(s) => setAnalytics((v) => ({ ...v, sentryBeInstalled: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>Sentry SDK BE 초기화 (Node.js DSN)</span>
        </label>

        <label className="submit-label">
          <span>이벤트 추적 코드 개수 (페이지 진입 / 핵심 버튼 / 핵심 기능 완료)</span>
          <input
            type="number"
            value={analytics.eventsCount}
            onChange={(s) => setAnalytics((v) => ({ ...v, eventsCount: s.target.value }))}
            className="submit-input"
            min={1}
            max={10}
            placeholder="예: 3 (페이지 진입 + 카피 생성 클릭 + 카피 복사 완료)"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={analytics.sessionRecorded}
            onChange={(s) => setAnalytics((v) => ({ ...v, sessionRecorded: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>Clarity 대시보드에 본인 세션 1+ 도착 확인</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={analytics.sentryTestError}
            onChange={(s) => setAnalytics((v) => ({ ...v, sentryTestError: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>Sentry 대시보드에 테스트 에러 도착 확인</span>
        </label>
      </fieldset>

      {/* 5. 비용 / /cost */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">5. 토큰 비용 비교 (/cost)</legend>
        <p className="submit-hint">
          Step 0 베이스라인과 본 sprint 종료 시점 비교 — 본 학습 후 본격 운영 시 비용 통제 결정 근거.
        </p>

        <label className="submit-label">
          <span>Step 0 베이스라인 /cost 결과</span>
          <textarea
            value={cost.baselineMemo}
            onChange={(s) => setCost((v) => ({ ...v, baselineMemo: s.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder="예: '입력 토큰 12,000 / 출력 토큰 4,500'"
          />
        </label>

        <label className="submit-label">
          <span>Step N 최종 /cost 결과</span>
          <textarea
            value={cost.finalMemo}
            onChange={(s) => setCost((v) => ({ ...v, finalMemo: s.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder="예: '입력 토큰 28,000 / 출력 토큰 9,500 — 약 2배 증가, Step 3 자율 디버깅 비중 큼'"
            required
          />
        </label>
      </fieldset>

      {/* 6. 재피드백 메일 카피 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">6. 재피드백 메일 카피</legend>
        <p className="submit-hint">
          다음 단계(노출) 사용자에게 보낼 재피드백 요청 메일 카피 1개 작성 — "드디어 만들었습니다" 톤.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={recopy.written}
            onChange={(s) => setRecopy((v) => ({ ...v, written: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>재피드백 메일 카피 1개 작성 완료</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={recopy.deployUrlIncluded}
            onChange={(s) => setRecopy((v) => ({ ...v, deployUrlIncluded: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>배포 URL (Vercel) 포함</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={recopy.threeQuestionsIncluded}
            onChange={(s) => setRecopy((v) => ({ ...v, threeQuestionsIncluded: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>응답 질문 3개 포함 (출시 사용 의향 / 월 지불 의향 / 개선점)</span>
        </label>
      </fieldset>

      {/* 7. 회고 3 질문 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">7. 회고 (좋은 답 = 구체적)</legend>
        <p className="submit-hint">
          추상적 답("어렵지 않았다")이 아니라 본인 작업 사례로 구체화.
        </p>

        <label className="submit-label">
          <span>개발 어휘 효과 (PORT, CORS, NEXT_PUBLIC_ 등) — 구체 사례</span>
          <textarea
            value={reflection.devVocabEffect}
            onChange={(s) => setReflection((v) => ({ ...v, devVocabEffect: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "PORT, CORS, NEXT_PUBLIC_ 어휘 알고 나니 막힐 때 정확한 명령으로 1회 해결"'
            required
          />
        </label>

        <label className="submit-label">
          <span>CORS 자율 디버깅 효과 — 구체 사례</span>
          <textarea
            value={reflection.corsDebugEffect}
            onChange={(s) => setReflection((v) => ({ ...v, corsDebugEffect: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "풀 메시지 그대로 → 화이트리스트 설정 명령 → Railway 자동 재배포 → 1회 해결"'
            required
          />
        </label>

        <label className="submit-label">
          <span>분석 도구 3종 가치 — 구체 사례 (세 도구가 답하는 다른 질문)</span>
          <textarea
            value={reflection.analyticsValue}
            onChange={(s) => setReflection((v) => ({ ...v, analyticsValue: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "Clarity는 UX 막힘, Sentry는 모르는 에러, 이벤트는 PRD 검증. 셋이 서로 다른 질문에 답함"'
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
