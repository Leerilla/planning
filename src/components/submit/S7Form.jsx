'use client';

// S7 실습 제출 폼 — 통합 디버깅과 E2E 테스트 (검증된 MVP 배포 진입)
// Source: lectures/S7/assignment.md
// Phase 5 (2026-05-16) — D-043 planning_project 누적 + scenario-verifier 신규 sub-agent

import { useState } from 'react';

export default function S7Form({ onSubmit, busy }) {
  const [studentName, setStudentName] = useState('');

  // 1. E2E 테스트
  const [e2e, setE2e] = useState({
    folderPath: '',
    testCount: '',
    passed: false,
    playwrightMcp: false,
  });

  // 2. 자율 디버깅 경험
  const [debug, setDebug] = useState({
    appliedCount: '',
    errorAsIs: false,
    analyzeFirst: false,
    verifyResult: false,
    notesMemo: '',
  });

  // 3. scenario-verifier sub-agent
  const [verifier, setVerifier] = useState({
    fileCreated: false,
    singleResponsibility: false,
    leastPermission: false,
    deterministicOutput: false,
    callOnDemand: false,
  });

  // 4. 시나리오 검증 루프
  const [loop, setLoop] = useState({
    firstReportThreePart: false,
    loopCount: '',
    blockerVerified: false,
    finalPass: false,
  });

  // 5. 통과 조건 (두 증거)
  const [pass, setPass] = useState({
    e2ePass: false,
    verifierPass: false,
    workerVerified: false,
    deployReady: false,
  });

  // 6. 회고 (구체적 답)
  const [reflection, setReflection] = useState({
    debugPrincipleEffect: '',
    e2ePassMoment: '',
    deployConfidence: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      studentName,
      data: {
        e2e: {
          folderPath: e2e.folderPath,
          testCount: Number(e2e.testCount) || 0,
          passed: e2e.passed,
          playwrightMcp: e2e.playwrightMcp,
        },
        debug: {
          appliedCount: Number(debug.appliedCount) || 0,
          errorAsIs: debug.errorAsIs,
          analyzeFirst: debug.analyzeFirst,
          verifyResult: debug.verifyResult,
          notesMemo: debug.notesMemo,
        },
        verifier,
        loop: {
          firstReportThreePart: loop.firstReportThreePart,
          loopCount: Number(loop.loopCount) || 0,
          blockerVerified: loop.blockerVerified,
          finalPass: loop.finalPass,
        },
        pass,
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
            placeholder="예: 홍길동 / KAIST_2025_07"
          />
        </label>
      </fieldset>

      {/* 1. E2E 테스트 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">1. E2E 테스트 (Playwright MCP)</legend>
        <p className="submit-hint">
          PRD 핵심 시나리오 기준 통과 테스트 1개 이상. 테스트 코드 직접 작성 X — 시나리오만 자연어로 위임.
        </p>

        <label className="submit-label">
          <span>e2e/ 폴더 경로 (planning_project 기준)</span>
          <input
            type="text"
            value={e2e.folderPath}
            onChange={(s) => setE2e((v) => ({ ...v, folderPath: s.target.value }))}
            className="submit-input"
            placeholder="예: planning_project/e2e/"
            required
          />
        </label>

        <label className="submit-label">
          <span>작성한 E2E 테스트 개수</span>
          <input
            type="number"
            value={e2e.testCount}
            onChange={(s) => setE2e((v) => ({ ...v, testCount: s.target.value }))}
            className="submit-input"
            min={1}
            placeholder="예: 1 (PRD 핵심 시나리오)"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={e2e.passed}
            onChange={(s) => setE2e((v) => ({ ...v, passed: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>E2E 테스트 통과 확인 완료 (자율 디버깅 거쳤다면 거쳐서라도)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={e2e.playwrightMcp}
            onChange={(s) => setE2e((v) => ({ ...v, playwrightMcp: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>Playwright MCP로 테스트 코드 작성 + 실행 (직접 작성 X)</span>
        </label>
      </fieldset>

      {/* 2. 자율 디버깅 3원칙 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">2. 자율 디버깅 3원칙</legend>
        <p className="submit-hint">
          테스트 실패 시 표준 명령 적용 1회 이상. 분석 → 수정 → 재실행 흐름 완수.
        </p>

        <label className="submit-label">
          <span>자율 디버깅 명령 적용 횟수</span>
          <input
            type="number"
            value={debug.appliedCount}
            onChange={(s) => setDebug((v) => ({ ...v, appliedCount: s.target.value }))}
            className="submit-input"
            min={1}
            placeholder="예: 3"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={debug.errorAsIs}
            onChange={(s) => setDebug((v) => ({ ...v, errorAsIs: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>원칙 1: 에러 전체 메시지 그대로 붙여넣기</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={debug.analyzeFirst}
            onChange={(s) => setDebug((v) => ({ ...v, analyzeFirst: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>원칙 2: 분석 먼저, 수정 방안 제시 후 적용</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={debug.verifyResult}
            onChange={(s) => setDebug((v) => ({ ...v, verifyResult: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>원칙 3: 재실행해 통과 여부 검증</span>
        </label>

        <label className="submit-label">
          <span>막힘 메모 (docs/debug-notes.md 요약, 막힘이 있었다면)</span>
          <textarea
            value={debug.notesMemo}
            onChange={(s) => setDebug((v) => ({ ...v, notesMemo: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "라우팅 후 빈 화면 — router.push에 query 추가로 해결"'
          />
        </label>
      </fieldset>

      {/* 3. scenario-verifier sub-agent */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">3. scenario-verifier sub-agent</legend>
        <p className="submit-hint">
          .claude/agents/scenario-verifier.md 작성 완료 + Agent 설계 6원칙 적용. prd-reviewer(코드 단위 자동) vs scenario-verifier(시나리오 단위 명시) 책임 분리.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={verifier.fileCreated}
            onChange={(s) => setVerifier((v) => ({ ...v, fileCreated: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>.claude/agents/scenario-verifier.md 파일 작성 완료</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={verifier.singleResponsibility}
            onChange={(s) => setVerifier((v) => ({ ...v, singleResponsibility: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>1. 단일 책임 (시나리오 검증만)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={verifier.leastPermission}
            onChange={(s) => setVerifier((v) => ({ ...v, leastPermission: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>2. 최소 권한 (Read / Grep / Glob — Write·Edit 없음)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={verifier.deterministicOutput}
            onChange={(s) => setVerifier((v) => ({ ...v, deterministicOutput: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>3. 결정적 출력 (3단 구조: 통과 여부 / 막힘 지점 / 수정 제안)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={verifier.callOnDemand}
            onChange={(s) => setVerifier((v) => ({ ...v, callOnDemand: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>4. 명시 호출 시점 (@scenario-verifier — 자동 아님)</span>
        </label>
      </fieldset>

      {/* 4. 시나리오 검증 루프 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">4. 시나리오 검증 루프</legend>
        <p className="submit-hint">
          첫 호출 보고서 3단 구조 + 루프 1회 이상 (검증 → 수정 → 재검증) + 최종 보고서 "통과".
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={loop.firstReportThreePart}
            onChange={(s) => setLoop((v) => ({ ...v, firstReportThreePart: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>첫 호출 보고서가 3단 구조 (통과 여부 / 막힘 / 수정)로 출력</span>
        </label>

        <label className="submit-label">
          <span>검증 루프 횟수 (검증 → 수정 → 재검증)</span>
          <input
            type="number"
            value={loop.loopCount}
            onChange={(s) => setLoop((v) => ({ ...v, loopCount: s.target.value }))}
            className="submit-input"
            min={1}
            placeholder="예: 2 (1차 부분 통과 → 수정 → 2차 통과)"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={loop.blockerVerified}
            onChange={(s) => setLoop((v) => ({ ...v, blockerVerified: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>막힘 지점 1-2개를 작업자가 직접 파일·줄 열어 확인</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={loop.finalPass}
            onChange={(s) => setLoop((v) => ({ ...v, finalPass: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>최종 보고서 "통과" 출력 확인</span>
        </label>
      </fieldset>

      {/* 5. 통과 조건 (두 증거) */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">5. 통과 조건 (두 증거)</legend>
        <p className="submit-hint">
          E2E 통과 + scenario-verifier 통과 두 증거가 손에 있어야 다음 단계(배포) 진입 가능.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={pass.e2ePass}
            onChange={(s) => setPass((v) => ({ ...v, e2ePass: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>증거 1: E2E 테스트 통과 (실행 증거)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={pass.verifierPass}
            onChange={(s) => setPass((v) => ({ ...v, verifierPass: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>증거 2: scenario-verifier 통과 보고서 (PRD 일치 증거)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={pass.workerVerified}
            onChange={(s) => setPass((v) => ({ ...v, workerVerified: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>작업자 본인 검증 완료 (sub-agent 보고도 AI 산출물)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={pass.deployReady}
            onChange={(s) => setPass((v) => ({ ...v, deployReady: s.target.checked }))}
            className="submit-checkbox"
          />
          <span>다음 단계(배포) 진입 준비 완료</span>
        </label>
      </fieldset>

      {/* 6. 회고 3 질문 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">6. 회고 (좋은 답 = 구체적)</legend>
        <p className="submit-hint">
          추상적 답("다 좋았다")이 아니라 본인 작업 사례로 구체화.
        </p>

        <label className="submit-label">
          <span>자율 디버깅 3원칙 중 가장 효과적이었던 원칙 + 이유 (구체 사례)</span>
          <textarea
            value={reflection.debugPrincipleEffect}
            onChange={(s) => setReflection((v) => ({ ...v, debugPrincipleEffect: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "분석 먼저. 추측 수정 차단됨 — 첫 막힘에서 에이전트가 원인 정확히 찾음"'
            required
          />
        </label>

        <label className="submit-label">
          <span>E2E 통과 시점 안도감 (구체 사례)</span>
          <textarea
            value={reflection.e2ePassMoment}
            onChange={(s) => setReflection((v) => ({ ...v, e2ePassMoment: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "라우팅 문제로 3번 막혔다가 통과 시 시나리오가 한 흐름으로 작동"'
            required
          />
        </label>

        <label className="submit-label">
          <span>배포 진입 자신감의 근거 (구체 사례)</span>
          <textarea
            value={reflection.deployConfidence}
            onChange={(s) => setReflection((v) => ({ ...v, deployConfidence: s.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "scenario-verifier 통과 보고 + E2E 통과 두 증거로 진입"'
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
