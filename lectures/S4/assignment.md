# 과제: 빌드 진입 가능한 상태로 환경 안정화

## 목표

다음 학습 단계 시작 전까지 빌드 환경을 안정화한다. CLAUDE.md(AI 검증 루프 통과), settings.json, 시스템 환경(docs/·rules/), GitHub 저장소 초기 커밋까지 완료한 상태로 다음 단계에 진입한다.

다음 단계(자료 5)에서 본 산출물을 입력으로 받아 화면 분석과 Task 재구성, GitHub Issue 등록, PR 워크플로가 시작된다. 본 단계의 책임은 빌드 환경 셋업까지이다.

---

## 산출물

### CLAUDE.md 협업 작성

- **CLAUDE.md**: 작업자 1차 초안 + AI 개선 협업으로 완성된 상태
- **AI 검증 루프 통과**: AI에게 CLAUDE.md 요약을 시켰을 때 작업자 의도와 일치
- **200줄 미만**

### 시스템 환경

- **docs/**: prd.md, persona.md, painpoints.md
- **rules/**: coding-style.md, commit-convention.md, architecture.md
- **CLAUDE.md에 시스템 설계 참조 지침** 명시
- 디자인 가이드는 다음 단계로 미룸 (현 단계 미포함)

### Permissions

- **.claude/settings.json**: Permissions 권장 템플릿 적용
- 의도된 차단(deny) 동작 확인

### GitHub 저장소 셋업

- **GitHub 저장소** `planning_project` 이름으로 생성
- 로컬과 원격 연결 완료
- **.gitignore** 적용
- **초기 셋업 커밋** 푸시 (CLAUDE.md 형식 따름)

---

## 최소 인정 범위

- 작업 폴더 planning_project 생성과 git 초기화
- CLAUDE.md 4영역 작성 + AI 검증 루프 1회 통과
- docs/, rules/ 폴더 구축
- settings.json + Permissions 권장 템플릿 적용
- GitHub 저장소 생성 + 초기 셋업 커밋 푸시

---

## 권장 범위

- AI 검증 루프 2회 이상 반복으로 CLAUDE.md 정제
- rules/ 3개 파일을 AI에게 채우게 한 뒤 작업자 검토
- 디자인 도구(Stitch 등) 사전 점검 (다음 단계 디자인 가이드 추가용)

---

## 자가 점검 체크리스트

- [ ] 폴더 이름이 planning_project인가
- [ ] CLAUDE.md에 대해 AI가 한 문장 요약을 작업자 의도와 일치하게 답하는가
- [ ] CLAUDE.md가 200줄 미만인가
- [ ] docs/와 rules/ 폴더가 각각 3개 파일로 채워졌는가
- [ ] CLAUDE.md에 docs/, rules/ 참조 지침이 있는가
- [ ] settings.json이 실제로 적용되었는가 (deny 차단 테스트 통과)
- [ ] GitHub 저장소 이름이 planning_project인가
- [ ] 초기 셋업 커밋이 푸시됐는가
- [ ] 커밋 메시지가 CLAUDE.md의 [type] description 형식을 따르는가

---

## 막혔을 때

| 시나리오 | 대응 |
| --- | --- |
| **1차 초안이 빈약하다** | 빈약한 채로 제출. AI가 개선·보강하는 게 협업 흐름의 핵심 |
| **AI 검증 답변이 매번 다르다** | CLAUDE.md가 모호한 신호. "어느 영역이 가장 모호한가"를 AI에 직접 질문 |
| **AI 검증 답변이 의도와 다르다** | 답변이 못 짚은 부분이 모호. 해당 영역(페르소나/기능/제약 등) 보강 |
| **GitHub 인증 실패** | gh auth status로 인증 확인 → Personal Access Token 권한 점검 (repo, workflow) |
| **Permissions 차단이 동작 안 한다** | settings.json의 deny 항목 정확한 도구 이름인지 확인 |
| **CLAUDE.md가 200줄 초과** | PRD를 통째로 복사한 신호. 요약과 docs/prd.md 참조로 분리 |

---

## AI 검증 루프 통과 방법

CLAUDE.md 작성을 마친 뒤 다음 절차로 검증한다.

### 1단계: AI 요약 요청

Claude Code에 입력:
```
"이 CLAUDE.md만 보고 우리 프로젝트가 무엇인지
 한 문장으로 요약해줘"
```

### 2단계: 의도와 일치 확인

| 점검 항목 | 통과 신호 |
| --- | --- |
| 페르소나 일치 | AI 답변에 페르소나 키워드 포함 |
| 핵심 기능 일치 | AI 답변에 핵심 기능 키워드 포함 |
| 성공 지표 반영 | AI 답변에 측정 가능한 수치 포함 |
| 제약사항 반영 | AI 답변에 "X 미지원" 등 표현 포함 |

### 3단계: 불일치 시 보강

답변이 의도와 다르면 다음을 AI에 추가로 묻는다:
```
"방금 답변을 만들 때 CLAUDE.md의 어느 영역이
 가장 명확했고, 어느 영역이 가장 모호했어?"
```

AI가 짚은 모호한 영역을 수정한 뒤 1단계로 돌아가 재검증.

### 4단계: 합격선

4가지 점검 모두 통과 + 200줄 미만 + 4영역 채워짐 → CLAUDE.md가 헌법으로서 충분히 작동.

---

## 마감

다음 학습 단계 시작 전.

산출물의 완성도가 100%가 아니어도 된다. 최소 인정 범위 + 자가 점검 체크리스트 통과가 합격선. GitHub Issue 등록과 PR 워크플로는 다음 단계(자료 5)에서 화면 분석을 거친 뒤 본격화한다.

---

**[과제 명세 끝]**
