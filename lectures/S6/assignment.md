# 과제: 화면 1·2 완성과 자동화 도구 안정화

## 목표

다음 학습 단계 시작 전까지 자료 5에서 남긴 Issue 9개(#2-#10)를 모두 처리해 화면 1과 화면 2가 동작 3요소를 모두 충족하고, prd-reviewer와 git-committer가 hook을 통해 안정적으로 자동 작동하는 상태로 다음 단계에 진입한다.

다음 단계(통합 테스트와 자율 디버깅)에서 본 자료의 산출물(화면 2개, sub-agent 2개, hook 2개)이 그대로 입력이 된다.

---

## 산출물

### sub-agent 두 개

- **prd-reviewer**: PRD 일치성 검토. tools는 Read, Grep, Glob만
- **git-committer**: 자동 커밋과 push. tools는 Bash, Read만
- 두 sub-agent 모두 Agent 설계 6원칙을 따름

### hook 두 개

- **PostToolUse hook**: matcher "Edit|Write" → prd-reviewer 자동 호출, timeout 90
- **Stop hook**: matcher 없음 → git-committer 자동 호출, timeout 60
- settings.json에 등록 완료

### 화면 1 완성

- **Issue #2 (이미지 업로드 처리)** PR 병합
- **Issue #3 (키워드 입력 검증)** PR 병합
- **Issue #4 (입력 화면 라우팅)** PR 병합
- 화면 1의 동작 3요소 모두 충족

### 화면 2 완성

- **Issue #5 (OpenAI API 클라이언트)** PR 병합
- **Issue #6 (프롬프트 템플릿)** PR 병합
- **Issue #7 (카피 생성 API)** PR 병합
- **Issue #8 (결과 컴포넌트)** PR 병합
- **Issue #9 (복사 버튼)** PR 병합
- **Issue #10 (결과 라우팅)** PR 병합
- 화면 2의 동작 3요소 모두 충족
- 화면 1 → 화면 2 라우팅 자연스러움

### 자동화 효과 측정

- **자동 커밋 히스토리**: 9개 이상의 자동 커밋
- **자동 검증 보고서**: PostToolUse 트리거마다 누적
- **시간 비교 메모**: Issue #1과 Issue #5의 빌드 시간 차이

---

## 최소 인정 범위

- prd-reviewer와 git-committer 두 sub-agent 작성
- PostToolUse hook과 Stop hook 등록과 트리거 확인
- 화면 1의 Issue #2-#4 PR 병합 (화면 1 완성)
- 화면 2의 Issue #5 작업 시작과 PR 시도

---

## 권장 범위

- Issue #2-#10 모두 PR 병합 (화면 1·2 완성)
- 화면 1 → 화면 2 라우팅 동작 확인
- 자동 검증 보고서에서 발견된 불일치 1건 이상 메모
- 화면 1 빌드 시간 vs 화면 2 빌드 시간 비교 (자동화 효과)

---

## 자가 점검 체크리스트

- [ ] planning_project 폴더에서 작업 중인가
- [ ] sub-agent 두 개가 6원칙을 따라 작성됐는가
- [ ] hook 두 개가 settings.json에 등록됐는가
- [ ] mcpServers 필드가 settings.json에 없는가 (Manyfast 제외)
- [ ] 코드 수정 후 prd-reviewer가 자동 호출되는가
- [ ] 응답 종료 후 git-committer가 자동 커밋하는가
- [ ] 화면 1의 동작 3요소가 모두 충족됐는가
- [ ] 화면 2의 동작 3요소가 모두 충족됐는가
- [ ] sub-agent 보고서를 본인이 검증했는가 (자동 신뢰 금지)

---

## 막혔을 때

| 시나리오 | 대응 |
| --- | --- |
| **sub-agent 호출이 안 됨** | frontmatter 오타 확인, name이 정확한지 점검 |
| **hook이 트리거되지 않음** | matcher 정규식 확인 ("Edit\|Write" 공백 없음), settings.json 문법 점검 |
| **prd-reviewer 보고서가 환각** | 보고서의 PRD 인용 부분을 docs/prd.md에서 직접 확인. 자동 신뢰 금지 |
| **git-committer가 빈 커밋 만듦** | git status로 변경 없음 확인. sub-agent 본문의 "변경 없으면 종료" 절차 점검 |
| **두 hook이 동시에 실행돼 혼란** | PostToolUse는 도구 직후, Stop은 응답 종료. 시점이 다르므로 정상 |
| **timeout 초과로 hook 끊김** | timeout 값 늘림 (90 → 120) 또는 sub-agent 절차 간소화 |
| **화면 2 빌드가 화면 1보다 오래 걸림** | 빌드 명령 메모를 충분히 재사용 안 한 신호. 90% 복사 + 화면 목적만 변경 |
| **PR이 너무 자주 충돌** | Task 단위 브랜치 분리 안 한 신호. 한 Task = 한 브랜치 = 한 PR 원칙 |

---

## sub-agent 설계 6원칙 점검 방법

새 sub-agent를 만들거나 기존 sub-agent를 수정할 때 6원칙 모두 점검.

### 1단계: 단일 책임 점검

description이 한 문장으로 끝나는가? 두 가지 역할이 섞여 있으면 둘로 분리.

### 2단계: 최소 권한 점검

tools 목록에 *역할에 필요한 최소 도구만* 있는가? 코드 리뷰어에 Write가 들어 있으면 위험.

### 3단계: 결정적 출력 형식 점검

본문에 *"출력 형식"* 섹션이 있고 매번 같은 구조로 보고하도록 명시했는가?

### 4단계: 책임 분리 점검

본문에 *"수정 권한 없음"* 또는 *"검토만 수행"* 같은 책임 분리 문구가 있는가?

### 5단계: 호출 시점 명시 점검

description에 *"~할 때 호출"* 형태로 호출 시점이 명시되어 있는가?

### 6단계: 입출력 계약 점검

본문에 *입력*과 *출력*이 명확히 명시되어 있는가? hook이 호출할 때 무엇을 넘기는지, 메인이 무엇을 받는지 분명한가?

---

## hook 동작 점검 방법

### PostToolUse 동작 확인

작은 코드 수정 한 번:
```
README.md 첫 줄에 한 줄 코멘트를 추가해줘
```

기대 동작:
1. 메인이 Edit 도구로 README.md 수정
2. PostToolUse hook 자동 트리거
3. prd-reviewer가 자동 호출되어 보고서 출력

### Stop 동작 확인

위 명령의 응답 종료 시점:
1. Stop hook 자동 트리거
2. git-committer 자동 호출
3. 자동 커밋 + push 완료
4. GitHub 저장소에 커밋 도착

---

## 마감

다음 학습 단계 시작 전.

산출물의 완성도가 100%가 아니어도 된다. 최소 인정 범위 + 자가 점검 체크리스트 통과가 합격선이다. 화면 2의 Issue #5만 시작해도 자동화 흐름이 확인되며, 나머지 Issue는 같은 패턴 복사로 진행하면 빠르게 완료된다.

---

**[과제 명세 끝]**
