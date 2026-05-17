# 자가 점검 체크리스트

학습 종료 시점에 작업자가 본 학습을 충분히 했는지 확인한다.

---

## 영역 1: 이론 이해 점검

- [ ] 자료 5 종료 상태와 본 단계 출발점을 설명할 수 있는가
- [ ] 확장(패턴 복사)과 자동화(도구 위임)의 차이를 구분할 수 있는가
- [ ] 자동화 가능한 반복의 3가지 조건을 외울 수 있는가
- [ ] sub-agent와 메인 에이전트의 4가지 차이를 떠올릴 수 있는가
- [ ] Agent 설계 6원칙(단일 책임·최소 권한·결정적 출력·책임 분리·호출 시점·입출력 계약)을 외울 수 있는가
- [ ] hooks의 5개 lifecycle 이벤트를 구분할 수 있는가
- [ ] PostToolUse와 Stop 두 핵심 패턴을 설명할 수 있는가
- [ ] hook의 결정적 동작이 CLAUDE.md와 어떻게 다른지 말할 수 있는가
- [ ] matcher 정규식 작성법을 알고 있는가 ("Edit|Write" 공백 없음)
- [ ] command 타입과 agent 타입 hook의 차이를 인식하는가

---

## 영역 2: 실습 산출물 점검

### 환경과 자료 5 산출물

- [ ] planning_project 폴더에서 작업 중인가
- [ ] 자료 5 산출물 5개(docs/tasks.md, Issue 10개, 첫 PR 병합, InputForm, 빌드 명령 메모)가 모두 있는가
- [ ] /cost 베이스라인을 메모했는가

### prd-reviewer sub-agent

- [ ] .claude/agents/prd-reviewer.md 파일이 작성됐는가
- [ ] frontmatter가 6원칙을 따랐는가 (단일 책임, Read·Grep·Glob만)
- [ ] mcpServers 필드가 없는가 (Manyfast 제외)
- [ ] @prd-reviewer 호출에 sub-agent가 응답하는가
- [ ] 보고서가 일치/불일치/검토 외 3카테고리로 출력됐는가

### git-committer sub-agent

- [ ] .claude/agents/git-committer.md 파일이 작성됐는가
- [ ] frontmatter가 6원칙을 따랐는가 (단일 책임, Bash·Read만)
- [ ] @git-committer 호출에 sub-agent가 응답하는가
- [ ] 보고서가 변경 파일/커밋 메시지/실행 결과 3단 구조로 출력됐는가
- [ ] GitHub에 자동 커밋이 도착했는가

### hook 등록

- [ ] settings.json에 hooks 필드가 추가됐는가 (PostToolUse + Stop)
- [ ] mcpServers 필드가 제거됐는가
- [ ] PostToolUse matcher가 "Edit|Write"인가 (공백 없음)
- [ ] Stop은 matcher가 없는가
- [ ] timeout이 적절한가 (PostToolUse 90, Stop 60)
- [ ] 코드 수정 후 prd-reviewer가 자동 호출됐는가
- [ ] 응답 종료 후 git-committer가 자동 호출됐는가

### 화면 1 나머지 Task

- [ ] Issue #2 PR 병합됐는가
- [ ] Issue #3 PR 병합됐는가
- [ ] Issue #4 PR 병합됐는가
- [ ] 화면 1의 동작 3요소가 모두 충족됐는가 (페이지 뜸·인터랙션·반응)

### 화면 2 빌드 (패턴 복사)

- [ ] Issue #5-#10 PR 모두 병합됐는가
- [ ] 화면 2의 동작 3요소가 모두 충족됐는가
- [ ] 화면 1에서 화면 2로의 라우팅이 자연스러운가
- [ ] 화면 2 빌드 시간이 화면 1보다 짧아졌는가 (자동화 효과)

### 토큰 비용

- [ ] /cost 비교 결과를 메모했는가

---

## 영역 3: 검증 우선주의 적용 점검

- [ ] prd-reviewer 보고서를 본인 판단으로 검증했는가
- [ ] "PRD와 일치"라고 적힌 항목을 docs/prd.md에서 직접 확인했는가
- [ ] git-committer가 작성한 커밋 메시지를 git log로 확인했는가
- [ ] 자동화 보고서의 환각 가능성을 인식하는가

---

## 영역 4: 다음 단계 연결 점검

- [ ] 다음 단계 시작 시점에 가져갈 입력 자산을 알고 있는가
  - 동작하는 화면 2개
  - prd-reviewer + git-committer 두 sub-agent
  - PostToolUse + Stop 두 hook
  - 자동 커밋 히스토리 9+
  - 병합된 PR 9개
- [ ] 다음 단계가 통합 테스트와 자율 디버깅임을 알고 있는가
- [ ] prd-reviewer가 다음 단계에서도 그대로 사용됨을 알고 있는가
- [ ] git-committer가 다음 단계에서도 그대로 사용됨을 알고 있는가
- [ ] sub-agent를 추가로 만들 때 6원칙을 적용할 준비가 됐는가

---

**[체크리스트 끝]**
