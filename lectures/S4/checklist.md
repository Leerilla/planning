# 자가 점검 체크리스트

학습 종료 시점에 작업자가 본 학습을 충분히 했는지 확인한다.

---

## 영역 1: 이론 이해 점검

- [ ] CLAUDE.md가 프로젝트의 헌법인 이유를 설명할 수 있는가
- [ ] 무상태성이 왜 컨텍스트 앵커링을 필요로 하는지 떠올릴 수 있는가
- [ ] CLAUDE.md 4영역(개요·스택·가이드·제약)을 외울 수 있는가
- [ ] PRD와 CLAUDE.md의 차이를 한 문장으로 말할 수 있는가
- [ ] AI 검증 루프가 사람 검증보다 왜 효과적인지 설명할 수 있는가
- [ ] OODA 루프 4단계(Observe-Orient-Decide-Act)를 떠올릴 수 있는가
- [ ] Permissions가 OODA 루프 중 어느 지점에 개입하는지 알고 있는가
- [ ] Permissions 3단계(자동·확인·금지)를 떠올릴 수 있는가
- [ ] CLAUDE.md 200줄 미만 권장 상한의 이유를 알고 있는가
- [ ] 폴더와 저장소 이름을 planning_project로 고정하는 이유를 알고 있는가
- [ ] GitHub Issue 등록을 자료 5에서 진행하는 이유를 알고 있는가

---

## 영역 2: 실습 산출물 점검

### 환경 셋업

- [ ] 작업 폴더가 planning_project 이름으로 생성됐는가
- [ ] git 저장소가 초기화됐는가
- [ ] /cost 베이스라인을 메모했는가
- [ ] docs/prd.md가 작업 폴더에 복사됐는가

### CLAUDE.md 협업 작성

- [ ] 작업자가 1차 초안을 직접 작성했는가
- [ ] AI 개선 제안을 받아 수용·거부·수정 했는가
- [ ] AI 검증 루프(요약 요청)에 대한 답변이 작업자 의도와 일치했는가
- [ ] CLAUDE.md가 4영역으로 작성됐는가
- [ ] CLAUDE.md가 200줄 미만인가

### 시스템 환경 구축

- [ ] docs/ 폴더에 prd.md, persona.md, painpoints.md가 있는가
- [ ] rules/ 폴더에 coding-style.md, commit-convention.md, architecture.md가 있는가
- [ ] CLAUDE.md에 시스템 설계 참조 지침이 명시됐는가
- [ ] 디자인 가이드는 다음 단계로 미뤄졌음을 인지하고 있는가

### settings.json과 Permissions

- [ ] .claude/settings.json이 권장 템플릿으로 적용됐는가
- [ ] 의도된 차단(deny)이 동작했는가

### GitHub 저장소 셋업

- [ ] GitHub 저장소가 planning_project 이름으로 생성됐는가
- [ ] 로컬과 원격이 연결됐는가
- [ ] 초기 셋업이 첫 커밋으로 푸시됐는가
- [ ] 커밋 메시지가 CLAUDE.md의 [type] description 형식을 따르는가
- [ ] .gitignore가 적용됐는가

### 토큰 비용

- [ ] /cost 비교 결과를 메모했는가

---

## 영역 3: 다음 단계 진입 가능성 점검

- [ ] 다음 단계가 화면 분석과 Task 재구성임을 알고 있는가
- [ ] 다음 단계에서 GitHub Issue 등록과 PR 워크플로 진입을 알고 있는가
- [ ] CLAUDE.md를 갱신하는 시점(빌드 진행 단위)을 알고 있는가
- [ ] 막혔을 때 어떤 명령 패턴을 사용할지 알고 있는가
- [ ] Stitch 또는 폴백 디자인 도구 접속 가능 여부를 사전 확인했는가

---

## 영역 4: 다음 단계 연결 점검

- [ ] 다음 단계 시작 시점에 가져갈 입력 자산을 알고 있는가
  - CLAUDE.md (검증 통과 상태)
  - docs/ (PRD, 페르소나, 페인포인트)
  - rules/ (코딩 규칙 3종)
  - .claude/settings.json (Permissions)
  - GitHub 저장소 + 초기 커밋
- [ ] AI 검증 루프를 다음 단계에서도 활용할 수 있는가
- [ ] OODA 루프와 Permissions 3단계 분배의 의미를 떠올릴 수 있는가
- [ ] planning_project 폴더에서 작업이 누적되는 흐름을 인지하고 있는가

---

**[체크리스트 끝]**
