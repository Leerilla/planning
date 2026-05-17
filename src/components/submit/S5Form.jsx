'use client';

// S5 실습 제출 폼 — 수직 슬라이스와 위임 3원칙 (화면 분석 → Issue → Stitch → PR 병합)
// Source: lectures/S5/assignment.md
// Phase 5 (2026-05-13) — D-043 planning_project (이전 단계 폴더 그대로)

import { useState } from 'react';

export default function S5Form({ onSubmit, busy }) {
  const [studentName, setStudentName] = useState('');

  // 1. 화면 분석
  const [screens, setScreens] = useState({
    screenCount: '',
    firstScreen: '',
    screen1TaskCount: '',
    screen2TaskCount: '',
  });

  // 2. GitHub Issue 등록
  const [issues, setIssues] = useState({
    totalCount: '',
    screen1LabelChecked: false,
    screen2LabelChecked: false,
  });

  // 3. Stitch 시안
  const [stitch, setStitch] = useState({
    prompt: '',
    exportDone: false,
  });

  // 4. 첫 PR 병합
  const [pr, setPr] = useState({
    branchName: '',
    prUrl: '',
    pageVisible: false,
    interactionOk: false,
    consoleOk: false,
  });

  // 5. 셀프 코드 리뷰
  const [review, setReview] = useState({
    personaMatch: false,
    codingGuide: false,
    constraints: false,
    folderArchitecture: false,
    noNextTaskLogic: false,
    notesMemo: '',
  });

  // 6. 회고
  const [reflection, setReflection] = useState({
    screenAnalysisEffect: '',
    delegationEffect: '',
    nextTaskPattern: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      studentName,
      data: {
        screens: {
          screenCount: Number(screens.screenCount) || 0,
          firstScreen: screens.firstScreen,
          screen1TaskCount: Number(screens.screen1TaskCount) || 0,
          screen2TaskCount: Number(screens.screen2TaskCount) || 0,
        },
        issues: {
          totalCount: Number(issues.totalCount) || 0,
          screen1LabelChecked: issues.screen1LabelChecked,
          screen2LabelChecked: issues.screen2LabelChecked,
        },
        stitch,
        pr,
        review,
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
            placeholder="예: 홍길동 / KAIST_2025_05"
          />
        </label>
      </fieldset>

      {/* 1. 화면 분석 결과 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">1. 화면 분석과 Task 매핑</legend>
        <p className="submit-hint">
          PRD 핵심 기능 3개 → 화면 2~5개 도출 → 화면 단위 Task 그룹화.
        </p>

        <label className="submit-label">
          <span>도출한 화면 개수 (3~5개 권장)</span>
          <input
            type="number"
            value={screens.screenCount}
            onChange={(e) => setScreens((s) => ({ ...s, screenCount: e.target.value }))}
            className="submit-input"
            min={1}
            max={10}
            placeholder="예: 2 (입력 화면 + 결과 화면)"
            required
          />
        </label>

        <label className="submit-label">
          <span>첫 화면 결정 + 한 줄 목적</span>
          <textarea
            value={screens.firstScreen}
            onChange={(e) => setScreens((s) => ({ ...s, firstScreen: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "카피 입력 화면 — 1인 셀러가 사진+키워드 5개 입력해 카피 생성을 요청"'
            required
          />
        </label>

        <label className="submit-label">
          <span>화면 1 Task 개수</span>
          <input
            type="number"
            value={screens.screen1TaskCount}
            onChange={(e) => setScreens((s) => ({ ...s, screen1TaskCount: e.target.value }))}
            className="submit-input"
            min={1}
            placeholder="예: 4"
            required
          />
        </label>

        <label className="submit-label">
          <span>화면 2 Task 개수</span>
          <input
            type="number"
            value={screens.screen2TaskCount}
            onChange={(e) => setScreens((s) => ({ ...s, screen2TaskCount: e.target.value }))}
            className="submit-input"
            min={1}
            placeholder="예: 6"
            required
          />
        </label>
      </fieldset>

      {/* 2. GitHub Issue 등록 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">2. GitHub Issue 등록</legend>
        <p className="submit-hint">
          docs/tasks.md → GitHub Issue 일괄 등록 + 화면 라벨(screen-1, screen-2) 부여.
        </p>

        <label className="submit-label">
          <span>등록한 Issue 총 개수</span>
          <input
            type="number"
            value={issues.totalCount}
            onChange={(e) => setIssues((s) => ({ ...s, totalCount: e.target.value }))}
            className="submit-input"
            min={1}
            placeholder="예: 10"
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={issues.screen1LabelChecked}
            onChange={(e) => setIssues((s) => ({ ...s, screen1LabelChecked: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>screen-1 라벨 필터링 결과 확인 완료</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={issues.screen2LabelChecked}
            onChange={(e) => setIssues((s) => ({ ...s, screen2LabelChecked: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>screen-2 라벨 필터링 결과 확인 완료</span>
        </label>
      </fieldset>

      {/* 3. Stitch 시안 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">3. Stitch로 첫 화면 시안</legend>
        <p className="submit-hint">
          자연어 프롬프트 + 1회 수정 + export (이미지 또는 코드).
        </p>

        <label className="submit-label">
          <span>Stitch 프롬프트 (실제 입력한 텍스트)</span>
          <textarea
            value={stitch.prompt}
            onChange={(e) => setStitch((s) => ({ ...s, prompt: e.target.value }))}
            className="submit-textarea"
            rows={4}
            placeholder="예: 1인 셀러 대상 카피 입력 화면. 상단에 상품 사진 업로드, 중간에 키워드 5칸, 하단에 생성 버튼. Notion 같은 미니멀 스타일."
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={stitch.exportDone}
            onChange={(e) => setStitch((s) => ({ ...s, exportDone: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>시안 export 완료 (이미지 또는 코드)</span>
        </label>
      </fieldset>

      {/* 4. 첫 PR 병합 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">4. 첫 Task 빌드와 PR 병합</legend>
        <p className="submit-hint">
          Issue #1 → 위임 3원칙 빌드 → PR 1-2개 파일 → 본인 리뷰 → 병합.
        </p>

        <label className="submit-label">
          <span>브랜치 이름 (feat/task-1-1-...)</span>
          <input
            type="text"
            value={pr.branchName}
            onChange={(e) => setPr((s) => ({ ...s, branchName: e.target.value }))}
            className="submit-input"
            placeholder="예: feat/task-1-1-input-form"
            required
          />
        </label>

        <label className="submit-label">
          <span>병합된 PR URL (또는 PR 번호)</span>
          <input
            type="text"
            value={pr.prUrl}
            onChange={(e) => setPr((s) => ({ ...s, prUrl: e.target.value }))}
            className="submit-input"
            placeholder="예: https://github.com/user/planning_project/pull/1"
            required
          />
        </label>

        <div className="submit-hint" style={{ marginTop: '0.75rem' }}>
          동작 3요소 부분 점검 (첫 Task 후):
        </div>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={pr.pageVisible}
            onChange={(e) => setPr((s) => ({ ...s, pageVisible: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>요소 1: 페이지가 뜬다 (CSS·레이아웃 정상)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={pr.interactionOk}
            onChange={(e) => setPr((s) => ({ ...s, interactionOk: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>요소 2: 인터랙션 작동 (클릭·입력 가능)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={pr.consoleOk}
            onChange={(e) => setPr((s) => ({ ...s, consoleOk: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>요소 3: 입력 반응 (콘솔 출력 확인)</span>
        </label>
      </fieldset>

      {/* 5. 셀프 코드 리뷰 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">5. 셀프 코드 리뷰</legend>
        <p className="submit-hint">
          AI가 만든 코드를 PRD/CLAUDE.md 기준으로 다시 점검 — 5개 항목.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={review.personaMatch}
            onChange={(e) => setReview((s) => ({ ...s, personaMatch: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>1. 페르소나 일치 확인</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={review.codingGuide}
            onChange={(e) => setReview((s) => ({ ...s, codingGuide: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>2. 코딩 가이드 준수 (camelCase 등)</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={review.constraints}
            onChange={(e) => setReview((s) => ({ ...s, constraints: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>3. 제약사항 위반 없음</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={review.folderArchitecture}
            onChange={(e) => setReview((s) => ({ ...s, folderArchitecture: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>4. 폴더 구조 원칙 (rules/architecture.md) 준수</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={review.noNextTaskLogic}
            onChange={(e) => setReview((s) => ({ ...s, noNextTaskLogic: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>5. 다음 Task 로직 미리 작성 안 함 (범위 좁힘 준수)</span>
        </label>

        <label className="submit-label">
          <span>미통과 항목 메모 (docs/review-notes.md 요약)</span>
          <textarea
            value={review.notesMemo}
            onChange={(e) => setReview((s) => ({ ...s, notesMemo: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "Task 1.2에서 폴더 원칙 일부 위반 — 화면 1 마무리 시 보강"'
          />
        </label>
      </fieldset>

      {/* 6. 회고 3 질문 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">6. 회고 (좋은 답 = 구체적)</legend>
        <p className="submit-hint">
          추상적 답("도움됐다")이 아니라 본인 작업 사례로 구체화.
        </p>

        <label className="submit-label">
          <span>화면 분석 효과 (구체 사례)</span>
          <textarea
            value={reflection.screenAnalysisEffect}
            onChange={(e) => setReflection((s) => ({ ...s, screenAnalysisEffect: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "기능 단위 Task가 화면 단위로 다시 묶이면서 빌드 순서가 명확해짐"'
            required
          />
        </label>

        <label className="submit-label">
          <span>위임 3원칙 효과 (구체 사례)</span>
          <textarea
            value={reflection.delegationEffect}
            onChange={(e) => setReflection((s) => ({ ...s, delegationEffect: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "한 파일만 수정하라는 범위 좁힘이 결과의 일관성 만들었음"'
            required
          />
        </label>

        <label className="submit-label">
          <span>다음 Task 패턴 (재사용 계획)</span>
          <textarea
            value={reflection.nextTaskPattern}
            onChange={(e) => setReflection((s) => ({ ...s, nextTaskPattern: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "Issue #2 이미지 업로드도 같은 위임 양식으로 명령 가능"'
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
