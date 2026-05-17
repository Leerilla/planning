'use client';

// S4 실습 제출 폼 — PRD를 에이전트에게 (CLAUDE.md + Permissions + GitHub)
// Source: lectures/S4/assignment.md
// Phase 5 (2026-05-12) — D-043 planning_project (폴더 + GitHub repo 일치)

import { useState } from 'react';

export default function S4Form({ onSubmit, busy }) {
  const [studentName, setStudentName] = useState('');

  // 1. CLAUDE.md 4영역
  const [claudeMd, setClaudeMd] = useState({
    overview: '',
    stackAndStructure: '',
    codingGuide: '',
    constraints: '',
  });
  const [claudeMdLines, setClaudeMdLines] = useState('');

  // 2. AI 검증 루프
  const [verify, setVerify] = useState({
    iterations: '',
    aiSummary: '',
    intentMatched: false,
  });

  // 3. Permissions + 차단 테스트
  const [permissions, setPermissions] = useState({
    templateApplied: false,
    denyBlocked: false,
  });

  // 4. GitHub 저장소
  const [github, setGithub] = useState({
    repoUrl: '',
    firstCommitMessage: '',
    pushedAt: '',
  });

  // 5. 회고 3 질문
  const [reflection, setReflection] = useState({
    aiVerifyEffect: '',
    mostVagueArea: '',
    nextStepReady: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      studentName,
      data: {
        claudeMd,
        claudeMdLines: Number(claudeMdLines) || 0,
        verify: {
          iterations: Number(verify.iterations) || 0,
          aiSummary: verify.aiSummary,
          intentMatched: verify.intentMatched,
        },
        permissions,
        github,
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

      {/* 1. CLAUDE.md 4영역 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">1. CLAUDE.md 4영역</legend>
        <p className="submit-hint">
          200줄 미만 / 작업자 1차 초안 + AI 개선 협업. 자세한 PRD는 docs/prd.md 참조.
        </p>

        <label className="submit-label">
          <span>(1) 프로젝트 개요 — 페르소나 + 핵심 기능 3개 + 성공 지표 (한 단락)</span>
          <textarea
            value={claudeMd.overview}
            onChange={(e) => setClaudeMd((c) => ({ ...c, overview: e.target.value }))}
            className="submit-textarea"
            rows={4}
            placeholder="예: 월 매출 100-500만원 1인 스마트스토어 셀러 대상. 상품 사진과 키워드 5개 입력 → 5초 이내 카피 3개. 성공 지표: 작성 시간 1-2h → 5min."
            required
          />
        </label>

        <label className="submit-label">
          <span>(2) 기술 스택과 파일 구조 — 5-7줄</span>
          <textarea
            value={claudeMd.stackAndStructure}
            onChange={(e) => setClaudeMd((c) => ({ ...c, stackAndStructure: e.target.value }))}
            className="submit-textarea"
            rows={5}
            placeholder={`예:\n- FE: Next.js + Tailwind\n- BE: Node.js + Express\n- AI: OpenAI GPT-4o\n- 폴더: src/app, src/components, docs/, rules/`}
            required
          />
        </label>

        <label className="submit-label">
          <span>(3) 코딩 가이드라인 — 5-10줄</span>
          <textarea
            value={claudeMd.codingGuide}
            onChange={(e) => setClaudeMd((c) => ({ ...c, codingGuide: e.target.value }))}
            className="submit-textarea"
            rows={5}
            placeholder={`예:\n- 함수: camelCase / 컴포넌트: PascalCase\n- 커밋: [type] description\n- 테스트: Jest + RTL\n- 포맷: Prettier + ESLint`}
            required
          />
        </label>

        <label className="submit-label">
          <span>(4) 제약사항 — 3-5줄 (의도적으로 하지 않을 것)</span>
          <textarea
            value={claudeMd.constraints}
            onChange={(e) => setClaudeMd((c) => ({ ...c, constraints: e.target.value }))}
            className="submit-textarea"
            rows={4}
            placeholder={`예:\n- 모바일 앱 미지원 (웹만)\n- 다국어 미지원 (한국어만)\n- 광고 자동 집행 미지원`}
            required
          />
        </label>

        <label className="submit-label">
          <span>CLAUDE.md 총 줄 수 (200줄 미만 권장)</span>
          <input
            type="number"
            value={claudeMdLines}
            onChange={(e) => setClaudeMdLines(e.target.value)}
            className="submit-input"
            min={1}
            placeholder="예: 45"
            required
          />
        </label>
      </fieldset>

      {/* 2. AI 검증 루프 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">2. AI 검증 루프</legend>
        <p className="submit-hint">
          작업자 의도와 일치할 때까지 반복. "이 CLAUDE.md만 보고 프로젝트가 무엇인지 한 문장으로 요약해줘"
        </p>

        <label className="submit-label">
          <span>검증 루프 반복 횟수 (최소 1회)</span>
          <input
            type="number"
            value={verify.iterations}
            onChange={(e) => setVerify((v) => ({ ...v, iterations: e.target.value }))}
            className="submit-input"
            min={1}
            placeholder="예: 2 (1차 불일치 → 1영역 보강 → 2차 통과)"
            required
          />
        </label>

        <label className="submit-label">
          <span>AI 마지막 요약 답변 (의도와 일치한 것)</span>
          <textarea
            value={verify.aiSummary}
            onChange={(e) => setVerify((v) => ({ ...v, aiSummary: e.target.value }))}
            className="submit-textarea"
            rows={3}
            placeholder='예: "1인 스마트스토어 셀러를 위한 차별화 카피 자동 생성 도구. 상품 사진과 키워드 입력 → 5초 이내 카피 3개 출력."'
            required
          />
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={verify.intentMatched}
            onChange={(e) => setVerify((v) => ({ ...v, intentMatched: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>AI 요약이 작업자 의도와 일치함 (검증 통과)</span>
        </label>
      </fieldset>

      {/* 3. Permissions + 차단 테스트 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">3. .claude/settings.json + Permissions</legend>
        <p className="submit-hint">
          권장 템플릿(auto_allow / ask_before / deny) 적용 + deny 차단 동작 확인.
        </p>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={permissions.templateApplied}
            onChange={(e) => setPermissions((p) => ({ ...p, templateApplied: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>.claude/settings.json에 권장 템플릿 적용 완료</span>
        </label>

        <label className="submit-label submit-label-inline">
          <input
            type="checkbox"
            checked={permissions.denyBlocked}
            onChange={(e) => setPermissions((p) => ({ ...p, denyBlocked: e.target.checked }))}
            className="submit-checkbox"
          />
          <span>의도된 차단 시연 통과 (예: "/etc/hosts 수정해줘" → 차단됨)</span>
        </label>
      </fieldset>

      {/* 4. GitHub 저장소 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">4. GitHub 저장소 셋업</legend>
        <p className="submit-hint">
          저장소 이름은 planning_project 고정 (폴더와 일치, D-043).
        </p>

        <label className="submit-label">
          <span>GitHub 저장소 URL</span>
          <input
            type="text"
            value={github.repoUrl}
            onChange={(e) => setGithub((g) => ({ ...g, repoUrl: e.target.value }))}
            className="submit-input"
            placeholder="예: https://github.com/honggildong/planning_project"
            required
          />
        </label>

        <label className="submit-label">
          <span>초기 셋업 커밋 메시지 ([type] description 형식)</span>
          <textarea
            value={github.firstCommitMessage}
            onChange={(e) => setGithub((g) => ({ ...g, firstCommitMessage: e.target.value }))}
            className="submit-textarea"
            rows={4}
            placeholder={`예: [chore] 초기 셋업: CLAUDE.md, docs/, rules/, settings.json\n\n- CLAUDE.md 4영역 + 시스템 설계 참조 지침\n- docs/ 3개 + rules/ 3개 + .claude/settings.json + .gitignore`}
            required
          />
        </label>

        <label className="submit-label">
          <span>푸시 일시 (선택)</span>
          <input
            type="text"
            value={github.pushedAt}
            onChange={(e) => setGithub((g) => ({ ...g, pushedAt: e.target.value }))}
            className="submit-input"
            placeholder="예: 2026-05-22 14:30"
          />
        </label>
      </fieldset>

      {/* 5. 회고 3 질문 */}
      <fieldset className="submit-fieldset">
        <legend className="submit-legend">5. 회고 3 질문</legend>
        <p className="submit-hint">측정 가능·구체적이면 좋은 답. 일반적·모호하면 나쁜 답.</p>

        <label className="submit-label">
          <span>(1) AI 검증 효과 (구체적 사례)</span>
          <textarea
            value={reflection.aiVerifyEffect}
            onChange={(e) => setReflection((r) => ({ ...r, aiVerifyEffect: e.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder={`예: "1차 초안 페르소나 모호하다고 AI가 짚어줘 '1인 셀러 월 매출 100-500만원'으로 명확화"`}
            required
          />
        </label>

        <label className="submit-label">
          <span>(2) 가장 모호했던 영역 (1~4영역 중 어느 것)</span>
          <textarea
            value={reflection.mostVagueArea}
            onChange={(e) => setReflection((r) => ({ ...r, mostVagueArea: e.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder={`예: "1영역 성공 지표가 측정 단위 누락이었음 (만족도 향상 → 1-2시간 → 5분)"`}
            required
          />
        </label>

        <label className="submit-label">
          <span>(3) 다음 단계 준비 (자료 5 화면 분석 진입 가능?)</span>
          <textarea
            value={reflection.nextStepReady}
            onChange={(e) => setReflection((r) => ({ ...r, nextStepReady: e.target.value }))}
            className="submit-textarea"
            rows={2}
            placeholder='예: "CLAUDE.md + GitHub 저장소 + Permissions 모두 준비. 화면 분석과 Task 재구성으로 진입 가능"'
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
