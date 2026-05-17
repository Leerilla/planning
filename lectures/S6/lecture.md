# 확장과 자동화 (sub-agent와 hooks)

자료 5 종료 시 동작하는 건 화면 1의 입력 폼 1개. GitHub Issue #2-#10 9개가 미작업 상태. 같은 흐름을 9번 반복해야 하는 상황이 자료 6의 출발점.

본 자료는 확장(패턴 복사)과 자동화(도구 위임) 두 의미, Agent 설계 6원칙, hooks 5개 lifecycle 이벤트, 그리고 자동 검증·자동 커밋의 핵심 패턴을 다룬다. 시드 6번(1인 셀러 카피 생성기) 기준. 작업 폴더는 자료 4·5의 planning_project 그대로.

학습 목표:
- 확장과 자동화 차이 설명
- 자동화 가능한 반복 3조건 적용
- Agent 설계 6원칙으로 sub-agent 작성
- hooks 5개 이벤트 구분과 사용
- PostToolUse hook으로 자동 PRD 검증
- Stop hook으로 자동 git 커밋
- 자료 5의 남은 Issue 9개 자동화 흐름으로 처리

## 이론

### 1️⃣ 확장과 자동화의 본질

이 챕터를 학습한 뒤 다음을 할 수 있다.
- 자료 5 종료 상태와 본 단계 출발점을 인식한다
- 확장과 자동화의 차이를 구분한다
- 자동화 가능한 반복 3조건을 외울 수 있다

#### 자료 5 종료 상태

화면 1의 입력 폼만 동작 중. 9개 Task 미작업.

```
[자료 5 끝 손에 있는 것]
- CLAUDE.md (검증 통과)
- docs/, rules/ (채워짐)
- planning_project GitHub 저장소 (초기 커밋)
- docs/tasks.md (화면 단위 10개 Task)
- GitHub Issue #1-#10 등록
- 첫 PR(Issue #1) 병합

[미작업 9개]
- 화면 1: Issue #2, #3, #4
- 화면 2: Issue #5-#10
```

#### 9번 반복의 부담

한 Task당 같은 흐름:
```
빌드 명령 입력 → 코드 작성 → PRD 일치 확인
→ 커밋 메시지 작성 → PR 생성 → 본인 리뷰
```

::: aside
아홉 번 반복하면 아홉 번의 같은 흐름. 작업자가 같은 명령을 매번 입력하는 상태.
:::

#### 첫 단정

> **자동화는 반복을 발견하는 데서 시작한다.**

#### 확장과 자동화: 두 단어 분리

| 단어 | 의미 |
| --- | --- |
| **확장(Expansion)** | 패턴 복사 (화면 1 → 화면 2) |
| **자동화(Automation)** | 반복 작업의 도구 위임 (sub-agent + hook) |

::: aside
두 단어를 분리하지 않으면 본 자료가 "두 번째 화면 빌드"로 흐려진다. 분리하면 본질이 명확해진다.
:::

#### 자동화 가능한 반복 3조건

| # | 조건 | 의미 |
| :---: | --- | --- |
| 1 | 매번 같은 방식 | 매번 같은 절차로 진행 |
| 2 | 판단 기준 명확 | 통과/미통과가 명확 |
| 3 | 사람이 매번 X | 판단만 사람이, 실행은 도구 |

#### 조건 1: 매번 같은 방식

| 자동화 대상 | 자동화 부적합 |
| --- | --- |
| 코드 수정 후 PRD 일치 확인 | 페르소나 인터뷰 응답 분석 |
| 매번 같은 절차 | 응답자에 따라 후속 질문 달라짐 |

#### 조건 2: 판단 기준 명확

| 자동화 대상 | 자동화 부적합 |
| --- | --- |
| PRD 일치 / 커밋 메시지 형식 | 페인포인트 우선순위 결정 |
| 통과/미통과 명확 | 작업자 판단 필요 |

#### 조건 3: 사람이 매번 X

| 자동화 대상 | 자동화 부적합 |
| --- | --- |
| PRD 일치 보고서 | 페르소나 1명 그리기 |
| 보고서 보고 결정만 | 직관과 경험 필요 |

3조건 모두 충족 → 자동화 대상.
한 조건이라도 미충족 → 자동화 부적합.

#### 자료 5에서 발견된 반복

세 작업 모두 3조건 통과:

```
1. 코드 작성 후 PRD에 맞나 손으로 묻기 → 자동화 대상
2. 커밋 메시지 작성 → 자동화 대상
3. 새 화면 만들 때 기존 패턴 설명 → 자동화 대상
```

::: aside
이 세 작업을 sub-agent와 hook이 처리한다.
:::

#### 안티패턴 vs 확장과 자동화 결합

안티패턴:
```
"두 번째 화면도 처음부터 새로 명령"
→ 패턴 인식 실패

"매 Task마다 PRD 일치 확인을 손으로 묻기"
→ 자동화 도구 놓침
```

확장과 자동화 결합:
```
"첫 화면의 빌드 명령 메모를 90% 복사하고,
 PRD 일치 확인은 hook이 자동 호출한 sub-agent에 맡긴다"
```

#### 1️⃣ 챕터 용어 해설

| 용어 | 정의 |
| --- | --- |
| 확장 | 첫 화면 빌드 패턴을 두 번째 화면에 복사 |
| 자동화 | 빌드 사이클 안의 반복 작업을 도구에 위임 |
| 반복 패턴 | 매번 같은 방식으로 일어나는 작업. 자동화 대상 |
| 자동화 부적합 | 매번 다른 판단 필요. 사람이 해야 함 |
| 3가지 조건 | 방식 일관성, 판단 기준 명확, 사람 매번 X |
### 2️⃣ Agent 설계 6원칙

이 챕터를 학습한 뒤 다음을 할 수 있다.
- sub-agent와 메인 에이전트의 차이를 구분한다
- Agent 설계 6원칙을 외울 수 있다
- prd-reviewer가 6원칙을 어떻게 적용하는지 설명한다

#### sub-agent의 정체

sub-agent는 **특정 역할을 가진 별도 에이전트**. 메인과 다른 컨텍스트로 일하고 요약만 메인에 반환.

::: aside
메인은 PM, sub-agent는 PM이 부르는 전문가(코드 리뷰어, 커밋 작성자).
:::

#### 메인 vs sub-agent 4차이

| 항목 | 메인 에이전트 | sub-agent |
| --- | --- | --- |
| 컨텍스트 | 사용자와 직접 | 격리된 컨텍스트 |
| 출력 | 사용자에게 직접 | 메인에 요약만 반환 |
| 도구 | 모든 도구 가능 | tools에 명시한 것만 |
| 호출 방식 | 사용자 직접 | 자동 위임, @-mention, hook |

#### 컨텍스트 격리의 의미

```
메인이 코드 + 리뷰 + 테스트 모두 하면
→ 컨텍스트 길어짐 → 품질 떨어짐

sub-agent로 분리:
→ 각 역할이 자기 영역 집중
→ 메인은 자기 작업 이어감
```

#### 두 번째 단정

> **sub-agent는 6원칙 위에서 만들어진다.**

원칙 없이 만든 sub-agent는 메인의 복제가 되거나 권한이 너무 넓어 위험.

#### Agent 설계 6원칙 한눈에

| # | 원칙 | 핵심 |
| :---: | --- | --- |
| 1 | 단일 책임 | 한 sub-agent는 한 역할만 |
| 2 | 최소 권한 | 역할에 필요한 최소 도구만 |
| 3 | 결정적 출력 | 출력 형식 고정 |
| 4 | 책임 분리 | sub-agent는 조언, 메인이 결정 |
| 5 | 호출 시점 명시 | description에 "~할 때" |
| 6 | 입출력 계약 | 입력·출력을 본문에 명시 |

#### 원칙 1: 단일 책임

```
좋음: "PRD 일치성 검토" (한 줄 description)
나쁨: "PRD 검토 + 커밋 메시지 작성" (두 역할)
```

::: aside
description이 한 문장으로 안 끝나면 둘로 쪼개는 신호.
:::

#### 원칙 2: 최소 권한

| sub-agent | tools | 이유 |
| --- | --- | --- |
| prd-reviewer | Read, Grep, Glob | 읽기·검색만 필요 |
| git-committer | Bash, Read | 커밋 명령과 변경 확인 |

::: aside
코드 리뷰어가 코드를 수정하지 못하게 차단. 검토 결과의 신뢰성 확보.
:::

#### 원칙 3: 결정적 출력 형식

| 좋은 출력 | 나쁜 출력 |
| --- | --- |
| "일치/불일치/검토 외 3카테고리" | "코드를 잘 검토해줘" |
| 매번 같은 구조 | 매번 다른 형식 |

::: aside
출력 형식 고정 → 메인이 일관된 구조로 받음.
:::

#### 원칙 4: 메인과의 책임 분리

```
sub-agent는 조언자
메인 에이전트는 결정자

[O] sub-agent가 "불일치" 보고 → 메인이 작업자에 전달
[X] sub-agent가 "불일치" 발견 → 자동 수정
```

::: aside
책임이 분리되지 않으면 sub-agent가 메인의 작업을 덮어쓰는 사고.
:::

#### 원칙 5: 호출 시점 명시

| 명확 | 모호 |
| --- | --- |
| "코드 작성/수정 직후 호출" | "코드 검토에 사용" |
| hook matcher가 잘 잡힘 | 자연어 호출도 일관됨 |

#### 원칙 6: 입출력 계약

본문에 명시:
```
**입력**: 방금 수정된 파일 경로
**출력**: 일치/불일치/검토 외 3카테고리 보고서
```

::: aside
hook이 호출할 때 무엇을 넘길지 명확. 작업자가 결과를 어디서 받을지 알 수 있음.
:::

#### prd-reviewer 표준 구조

```markdown
---
name: prd-reviewer
description: 코드 작성/수정 직후 호출.
  docs/prd.md를 읽고 현재 코드와 비교해 일치성을 보고합니다.
tools: Read, Grep, Glob
model: sonnet
---

PRD 일치성 검토 전문가의 역할을 수행합니다.

**입력**: 방금 수정된 파일 경로

**작업 절차**:
1. docs/prd.md를 Read로 읽기
2. 입력 파일을 Read로 읽기
3. 코드 기능을 PRD 핵심 기능에 매핑

**출력 형식**:
- 일치: PRD 핵심 기능과 매핑
- 불일치: 임의 기능 또는 모호한 표현
- 검토 외: rules/ 가이드 점검

**주의**: 수정 권한 없음 (tools에 Write/Edit 없음)
```

#### prd-reviewer의 6원칙 적용 점검

| 원칙 | 적용 위치 |
| --- | --- |
| 1. 단일 책임 | "PRD 일치성 검토" 한 줄 |
| 2. 최소 권한 | Read, Grep, Glob만 |
| 3. 결정적 출력 | 3카테고리 고정 |
| 4. 책임 분리 | "수정 권한 없음" 명시 |
| 5. 호출 시점 | "코드 작성/수정 직후 호출" |
| 6. 입출력 계약 | 본문에 입력·출력 명시 |

#### frontmatter 4필드

| 필드 | 의미 |
| --- | --- |
| name | sub-agent 식별자. 영문 소문자와 하이픈 |
| description | 언제 호출되는지 |
| tools | 사용 가능 도구. 최소 권한 |
| model | 사용 모델. sonnet 권장 |

::: aside
이전 버전의 mcpServers 필드는 제거. Manyfast MCP 유료화로 본 학습에서 사용 안 함. sub-agent가 docs/prd.md 직접 Read.
:::

#### 안티패턴 vs 6원칙 적용

안티패턴:
```
"코드 리뷰어에 Write, Edit 부여"
→ 권한 너무 넓음. 위험

"한 sub-agent가 PRD 검토와 커밋 작성"
→ 단일 책임 위반
```

올바른 운영:
```
"prd-reviewer는 Read, Grep, Glob만
 git-committer는 Bash, Read만
 두 sub-agent로 분리"
```

#### 2️⃣ 챕터 용어 해설

| 용어 | 정의 |
| --- | --- |
| sub-agent | 특정 역할을 부여한 별도 에이전트 |
| frontmatter | 마크다운 파일 상단 YAML 메타데이터 |
| Agent 설계 6원칙 | 단일 책임, 최소 권한, 결정적 출력, 책임 분리, 호출 시점, 입출력 계약 |
| 컨텍스트 격리 | sub-agent가 메인과 분리된 컨텍스트 |
| 입출력 계약 | sub-agent의 입력·출력을 본문에 명시 |
### 3️⃣ hooks와 5개 lifecycle 이벤트

이 챕터를 학습한 뒤 다음을 할 수 있다.
- hooks의 결정적 동작을 설명한다
- 5개 lifecycle 이벤트를 구분한다
- matcher 정규식과 timeout을 설정한다

#### hooks의 정체

hook은 **특정 시점에 자동 실행되는 작업**. Claude Code 동작 흐름에 끼어드는 트리거.

가장 큰 장점: 결정적(deterministic). AI 해석이 아닌 코드 직접 실행.

#### 세 번째 단정

> **hook은 결정적 동작을 보장한다. 잊어버림을 방지하고 일관성을 유지한다.**

#### CLAUDE.md vs hook

| 항목 | CLAUDE.md | hook |
| --- | --- | --- |
| 강제력 | 권고 (약 70% 준수) | 강제 (100% 실행) |
| 용도 | 권장 가이드 | 반드시 일어나야 하는 검증 |
| 예시 | 코딩 규칙 | 자동 PRD 검증, 자동 커밋 |

#### hook의 type 두 가지

| type | 의미 | 결정성 |
| --- | --- | --- |
| command | 셸 명령 직접 실행 | 결정적 |
| agent | sub-agent 호출 | 출력 구조는 결정적 |

::: aside
본 학습 핵심 패턴은 agent 타입. 작업 내용에 따라 사용 도구가 달라지기 때문.
:::

#### 5개 lifecycle 이벤트

| 이벤트 | 시점 | 본 학습 사용 |
| --- | --- | --- |
| PreToolUse | 도구 실행 직전 | 위험 명령 차단 (선택) |
| PostToolUse | 도구 실행 직후 | 자동 PRD 검증 (핵심) |
| UserPromptSubmit | 프롬프트 입력 직후 | 프롬프트 점검 (선택) |
| Stop | 응답 종료 | 자동 git 커밋 (핵심) |
| SubagentStop | sub-agent 종료 | 결과 후처리 (선택) |

#### PreToolUse 풀이

도구 실행 *직전* 트리거.

| 사용 사례 | matcher 예시 |
| --- | --- |
| 위험 명령 차단 | "Bash" |
| 특정 패턴만 차단 | command 타입 + 정규식 검사 |

::: aside
deny 권한과 다른 점: deny는 도구 자체를 차단, PreToolUse는 특정 명령 패턴만 차단.
:::

#### PostToolUse 풀이 (핵심)

도구 실행 *직후* 트리거.

| 사용 사례 | matcher 예시 |
| --- | --- |
| 코드 수정 후 자동 검증 | "Edit\|Write" |
| 본 학습 첫 번째 핵심 패턴 | prd-reviewer 자동 호출 |

::: aside
코드가 수정될 때마다 PRD 일치 여부 자동 보고. 작업자가 "PRD에 맞나?" 손으로 묻지 않아도 됨.
:::

#### UserPromptSubmit 풀이

프롬프트 입력 *직후* 트리거.

| 사용 사례 | 적용 |
| --- | --- |
| 프롬프트 점검 | "위임 3원칙 확인했나요?" 안내 |
| 본 학습 | 선택 (자가 학습 영역) |

#### Stop 풀이 (핵심)

응답 *종료* 시 트리거. matcher 없음(흐름 이벤트).

| 사용 사례 | 적용 |
| --- | --- |
| 자동 git 커밋 | git-committer 호출 |
| 본 학습 두 번째 핵심 패턴 | 작업자 "커밋해줘" 입력 안 함 |

#### SubagentStop 풀이

sub-agent 작업 *종료* 시 트리거.

| 사용 사례 | 적용 |
| --- | --- |
| sub-agent 결과 후처리 | 불일치 보고를 docs/에 자동 기록 |
| 본 학습 | 선택 (자가 학습 영역) |

#### matcher 정규식

PreToolUse와 PostToolUse에 필요.

| matcher | 의미 |
| --- | --- |
| `"Edit"` | Edit만 |
| `"Edit\|Write"` | Edit 또는 Write |
| `"Bash"` | Bash만 |
| `"."` | 모든 도구 (권장 안 함) |

::: aside
공백 넣으면 안 됨. "Edit | Write"는 잘못된 정규식. 본 학습은 "Edit|Write".
:::

#### timeout 설정

sub-agent 호출 시 작업 시간 제한.

| sub-agent | 권장 timeout |
| --- | :---: |
| prd-reviewer | 60-90초 |
| git-committer | 60초 |

::: aside
너무 짧으면 sub-agent가 중간에 끊김.
:::

#### 안티패턴 vs 올바른 hook

안티패턴:
```
"matcher: Edit | Write" (공백 있음)
→ 정규식 매칭 실패. hook 트리거 안 됨
```

올바른 운영:
```
"matcher: Edit|Write" (공백 없음)
→ 정확한 정규식. hook 정상 트리거
```

#### 3️⃣ 챕터 용어 해설

| 용어 | 정의 |
| --- | --- |
| hook | 특정 시점에 자동 실행되는 작업 |
| lifecycle 이벤트 | Claude Code 동작 흐름의 특정 시점 (5개) |
| command 타입 | 셸 명령 직접 실행. 결정적 |
| agent 타입 | sub-agent 호출. 출력 구조는 결정적 |
| matcher | 어떤 도구가 트리거 대상인지 명시하는 정규식 |
| timeout | hook 실행 최대 시간. 초 단위 |

### 4️⃣ 자동 검증과 자동 커밋의 핵심 패턴

이 챕터를 학습한 뒤 다음을 할 수 있다.
- 두 핵심 패턴의 흐름을 외울 수 있다
- 두 패턴이 결합된 한 Task 사이클을 설명한다
- 자동화 보고에도 검증 우선주의를 적용한다

#### 핵심 패턴 1: PostToolUse → prd-reviewer

코드 수정마다 PRD 일치 여부 자동 보고.

흐름:
```
[작업자] "이미지 업로드 처리 추가해줘"
       ↓
[메인] src/lib/upload.ts 작성 (Write 사용)
       ↓
[PostToolUse hook 자동 트리거: "Edit|Write"]
       ↓
[prd-reviewer 자동 호출]
       ↓
[sub-agent] docs/prd.md 읽기 + upload.ts 분석
       ↓
[sub-agent] 3카테고리 보고서 출력
       ↓
[메인 세션] 코드 + 보고서 함께 표시
```

#### 핵심 패턴 1의 변화

| 자동화 없음 | 자동화 있음 |
| --- | --- |
| 작업자가 매번 손으로 "PRD에 맞나?" 묻기 | 보고서 자동 출력. 작업자는 필요한 부분만 수정 |
| 잊어버림 발생 | 잊어버림 방지 |

#### 핵심 패턴 2: Stop → git-committer

응답 종료 시 변경 파일 자동 커밋.

::: aside
자료 4에서 작업자가 "커밋해줘" 자연어로 입력. 자료 5에서 PR 생성 명령. 자료 6에서는 그것도 자동화 대상.
:::

#### git-committer 표준 구조

```markdown
---
name: git-committer
description: 메인 에이전트 응답 종료 시 호출.
  변경 파일을 분석해 커밋 메시지 작성하고 push.
tools: Bash, Read
model: sonnet
---

git 커밋 자동화 전문가의 역할.

**입력**: 응답 종료 신호 (변경 파일은 git status로 감지)

**작업 절차**:
1. git status --porcelain → 변경 파일 확인
2. 변경 없으면 즉시 종료
3. CLAUDE.md 읽고 커밋 메시지 형식 확인
4. git diff --stat → 변경 요약
5. [type] description 형식 메시지 작성
6. git add → git commit → git push

**출력 형식**:
- 변경 파일: 목록
- 커밋 메시지: 전문
- 실행 결과: push 성공 여부
```

#### git-committer의 6원칙 점검

| 원칙 | 적용 |
| --- | --- |
| 1. 단일 책임 | "git 커밋 자동화" |
| 2. 최소 권한 | Bash, Read만 |
| 3. 결정적 출력 | 변경 파일/메시지/실행 결과 3단 |
| 4. 책임 분리 | 커밋만, 코드 수정 X |
| 5. 호출 시점 | "응답 종료 시" |
| 6. 입출력 계약 | 본문에 명시 |

#### 핵심 패턴 2 흐름

```
[작업자] "Issue #2 진행해줘"
       ↓
[메인] upload.ts + ImageUploader.tsx 작성
       ↓ (PostToolUse → prd-reviewer 보고서)
[메인] 응답 작성 완료
       ↓
[Stop hook 자동 트리거]
       ↓
[git-committer 자동 호출]
       ↓
[sub-agent] git status → 변경 파일 2개
       ↓
[sub-agent] CLAUDE.md 읽기 → 형식 확인
       ↓
[sub-agent] 커밋 메시지: "feat: Issue #2 이미지 업로드 처리"
       ↓
[sub-agent] git add → commit → push
       ↓
[메인 세션] "완료 + 자동 커밋 완료" 표시
```

#### 두 패턴 결합: 한 Task 사이클

```
[작업자] Task 빌드 명령
       ↓
[메인] 코드 작성
       ↓
[PostToolUse hook] → prd-reviewer → 보고서
       ↓
[메인] 응답 작성 (보고서 포함)
       ↓
[Stop hook] → git-committer → 자동 커밋
       ↓
[작업자] 보고서 보고 다음 결정만
```

::: aside
작업자가 명령 한 줄 입력 → 코드, PRD 검증, 커밋이 모두 도구의 일. 본 학습 자동화의 본질.
:::

#### 검증 우선주의의 일관 적용

sub-agent 보고서도 AI 산출물.

| 점검 항목 | 방법 |
| --- | --- |
| prd-reviewer "일치" 보고 | docs/prd.md 직접 보면서 확인 |
| git-committer 커밋 메시지 | git log로 확인 |

::: aside
자동화가 작업을 줄여주지만 판단을 대신하지는 않는다.
:::

#### 안티패턴 vs 검증 우선주의

안티패턴:
```
"sub-agent가 일치라고 했으니 그대로 신뢰"
"자동 커밋된 메시지를 안 봄"
→ 검증 누락
```

올바른 운영:
```
"sub-agent 보고도 AI 산출물.
 직접 확인하고 잘못된 부분은 다시 수정."
```

#### 4️⃣ 챕터 용어 해설

| 용어 | 정의 |
| --- | --- |
| PostToolUse 패턴 | 코드 수정 직후 sub-agent 자동 검증 |
| Stop 패턴 | 응답 종료 시 sub-agent 자동 커밋 |
| 결합 패턴 | 두 패턴이 함께 작동 |
| 검증 우선주의 | 자동화 보고도 작업자 직접 검증 |
## 실습

본 실습은 sub-agent 두 개 작성 → hook 두 개 등록 → 자료 5의 미작업 Issue 9개를 자동화 흐름으로 처리. 시드 6번(1인 셀러 카피 생성기) 기준. 작업 폴더는 자료 4·5의 planning_project 그대로.

산출물 흐름:
```
이전 단계 산출물 (자료 5)
- 화면 단위 docs/tasks.md
- GitHub Issue 10개 등록 (screen-1, screen-2)
- 첫 PR(Issue #1) 병합
- 동작하는 InputForm 컴포넌트
       ↓
[Step 1] prd-reviewer sub-agent 작성
[Step 2] git-committer sub-agent 작성
[Step 3] hook 두 개 등록 (PostToolUse + Stop)
[Step 4] 화면 1 나머지 Task 자동화 빌드 (#2, #3, #4)
[Step 5] 화면 2 빌드 (#5-#10, 패턴 복사)
       ↓
화면 2개 동작 + Issue 9개 PR 병합
```

### Step 0: 환경 진단

본 단계 목표는 자료 5 산출물 점검과 토큰 베이스라인.

#### 0-1. 환경 확인 명령

macOS / Linux:
```bash
node --version
claude --version
git --version
gh --version
cd planning_project
```

Windows (PowerShell):
```powershell
node --version
claude --version
git --version
gh --version
Set-Location planning_project
```

#### 0-2. 자료 5 산출물 점검

| # | 산출물 | 점검 |
| :---: | --- | --- |
| 1 | docs/tasks.md (화면 단위) | 있는가 |
| 2 | GitHub Issue 10개 | screen-1 4개, screen-2 6개 |
| 3 | 첫 PR(Issue #1) 병합 | 됐는가 |
| 4 | InputForm.tsx | 동작하는가 |
| 5 | 빌드 명령 메모 | 손에 있는가 |

::: aside
비어 있는 항목이 있으면 자료 5의 해당 Step으로 돌아가 보강 후 본 단계 진입.
:::

#### 0-3. 점검 명령

```bash
cat docs/tasks.md | head -30
gh issue list --label task
ls src/components/
```

#### 0-4. 토큰 베이스라인

```
/cost
```

#### Step 0 검증 기준

- [ ] planning_project 폴더에서 작업 중인가
- [ ] 자료 5 산출물 5개가 모두 있는가
- [ ] /cost 베이스라인을 메모했는가

### Step 1: prd-reviewer sub-agent 작성

본 단계 목표는 6원칙을 따른 prd-reviewer 작성과 호출 테스트.

#### 1-1. 디렉토리 생성

macOS / Linux:
```bash
mkdir -p .claude/agents
```

Windows:
```powershell
New-Item -ItemType Directory -Path .claude/agents -Force
```

#### 1-2. prd-reviewer.md 작성

`.claude/agents/prd-reviewer.md`:

```markdown
---
name: prd-reviewer
description: 코드 작성/수정 직후 호출.
  docs/prd.md를 읽고 현재 코드와 비교해 일치성을 보고합니다.
tools: Read, Grep, Glob
model: sonnet
---

PRD 일치성 검토 전문가의 역할을 수행합니다.

**입력**: 방금 수정된 파일의 경로

**작업 절차**:
1. docs/prd.md를 Read로 읽고 핵심 기능 3개와 제약사항 메모
2. 입력 파일을 Read로 읽기
3. 코드 기능을 PRD 핵심 기능에 매핑
4. rules/coding-style.md와 rules/architecture.md 점검

**출력 형식** (반드시 3카테고리로):
- 일치: PRD 핵심 기능과 매핑
- 불일치: 임의 기능 추가 또는 모호한 표현
- 검토 외: rules/ 가이드 점검

**주의**:
- 수정 권한 없음 (tools에 Write/Edit 없음)
- 추측하지 말고 PRD 그대로 비교
- 보고서는 한국어
```

::: aside
이전 버전의 mcpServers 필드 삭제. Manyfast MCP 유료화로 제외. sub-agent가 docs/prd.md 직접 Read.
:::

#### 1-3. 호출 테스트 명령

Claude Code 세션:
```
@prd-reviewer src/components/InputForm.tsx 파일을 검토해줘.
```

#### 1-3. 시드 6번 보고서 예시

사례: 시드 6번 InputForm.tsx 검토 결과.

```
[일치]
- 상품 사진 업로드 영역 → PRD 핵심 기능 1(입력)에 매핑
- 키워드 입력 5칸 → PRD 핵심 기능 1에 명확히 매핑

[불일치]
- 발견된 불일치 없음

[검토 외]
- rules/coding-style.md의 PascalCase 컴포넌트명 규칙 준수
- 한 파일만 수정한 점이 PR 1-2개 파일 원칙에 부합
```

#### Step 1 검증 기준

- [ ] .claude/agents/prd-reviewer.md 파일이 작성됐는가
- [ ] frontmatter에 mcpServers 필드가 없는가
- [ ] @prd-reviewer 호출에 sub-agent가 응답하는가
- [ ] 보고서가 3카테고리로 출력됐는가

### Step 2: git-committer sub-agent 작성

본 단계 목표는 자동 커밋 sub-agent 작성과 호출 테스트.

::: aside
자료 4의 자연어 "커밋해줘"가 자료 6에서 sub-agent로 자동화.
:::

#### 2-1. git-committer.md 작성

`.claude/agents/git-committer.md`:

```markdown
---
name: git-committer
description: 메인 에이전트 응답 종료 시 호출.
  변경된 파일을 분석해 CLAUDE.md 형식대로 커밋·push.
tools: Bash, Read
model: sonnet
---

git 커밋 자동화 전문가의 역할.

**입력**: 응답 종료 신호 (변경 파일은 git status로 감지)

**작업 절차**:
1. `git status --porcelain` 실행 → 변경 파일 확인
2. 변경 없으면 즉시 종료 "변경 없음" 보고
3. CLAUDE.md를 Read로 읽고 커밋 형식 확인
4. rules/commit-convention.md를 Read로 읽고 type 목록 확인
5. `git diff --stat`으로 변경 요약
6. [type] description 형식 메시지 작성
7. git add → git commit -m "..." → git push

**출력 형식** (3단 구조):
- 변경 파일: 목록
- 커밋 메시지: 전문
- 실행 결과: push 성공 여부와 commit hash

**주의**:
- 변경 없으면 커밋 안 함
- type은 rules/commit-convention.md에 정의된 것만
- 추측 금지. git status 그대로 처리
- 보고서는 한국어
```

#### 2-2. 호출 테스트 명령

작은 변경 만들기:
```bash
echo "" >> README.md
```

Claude Code 세션:
```
@git-committer 변경된 파일을 커밋해줘.
```

#### 2-2. 시드 6번 보고서 예시

사례: 시드 6번 README 변경 자동 커밋.

```
[변경 파일]
- README.md (수정됨, 1줄 추가)

[커밋 메시지]
[chore] README 빈 줄 추가

[실행 결과]
- git add README.md: 성공
- git commit: 성공 (commit hash: a1b2c3d)
- git push origin main: 성공
```

#### Step 2 검증 기준

- [ ] .claude/agents/git-committer.md 파일이 작성됐는가
- [ ] frontmatter가 6원칙 따랐는가 (단일 책임, Bash·Read만)
- [ ] @git-committer 호출에 sub-agent가 응답하는가
- [ ] 보고서가 3단 구조로 출력됐는가
- [ ] GitHub 저장소에 커밋이 도착했는가

### Step 3: hook 작성 (PostToolUse + Stop)

본 단계 목표는 settings.json에 두 hook 등록과 자동 트리거 확인.

#### 3-1. settings.json에 hooks 추가

`.claude/settings.json`:

```json
{
  "permissions": {
    "auto_allow": ["Read", "Grep", "Glob", "Edit"],
    "ask_before": ["Bash", "Write", "WebFetch"],
    "deny": ["BashWithSudo"]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "agent",
            "prompt": "@prd-reviewer 방금 수정된 파일을 검토해주세요.",
            "timeout": 90
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "agent",
            "prompt": "@git-committer 변경된 파일이 있으면 커밋해주세요.",
            "timeout": 60
          }
        ]
      }
    ]
  }
}
```

::: aside
mcpServers 필드 제거. PostToolUse matcher "Edit|Write" 공백 없이. Stop은 matcher 없음.
:::

#### 3-2. PostToolUse hook 테스트

작은 코드 수정 명령:
```
README.md 첫 줄에 한 줄 코멘트를 추가해줘.
```

흐름:
```
[1] 메인이 Edit 도구로 README.md 수정
       ↓
[2] PostToolUse hook 자동 트리거
       ↓
[3] prd-reviewer 자동 호출
       ↓
[4] 보고서 메인 세션에 표시
```

#### 3-3. Stop hook 테스트

Step 3-2 응답 종료 시점에:
```
[1] Stop hook 자동 트리거
       ↓
[2] git-committer 자동 호출
       ↓
[3] README.md 변경 자동 커밋
       ↓
[4] GitHub에 커밋 도착
```

::: aside
두 hook이 한 번의 명령으로 모두 동작. 작업자가 입력한 건 "README에 코멘트 추가" 한 줄.
:::

#### Step 3 검증 기준

- [ ] settings.json에 hooks 필드 추가됐는가
- [ ] mcpServers 필드가 제거됐는가
- [ ] 코드 수정 후 prd-reviewer가 자동 호출됐는가
- [ ] 응답 종료 후 git-committer가 자동 호출됐는가
- [ ] GitHub에 자동 커밋이 도착했는가

### Step 4: 화면 1 나머지 Task 빌드

본 단계 목표는 Issue #2, #3, #4를 자동화 흐름으로 빌드해 화면 1 동작 3요소 완성.

#### 4-1. Issue #2 브랜치

```bash
git checkout main
git pull origin main
git checkout -b feat/task-1-2-image-upload
```

#### 4-2. Issue #2 빌드 명령

자료 5 메모 복사 + 화면 목적 변경:
```
"Issue #2를 진행해줘.
 CLAUDE.md와 rules/architecture.md,
 rules/coding-style.md를 참조해.

 PRD의 카피 입력 화면 안의
 이미지 업로드 처리를 Next.js + Tailwind로 만들어줘.

 기능은 다음 두 가지:
 1. 드래그앤드롭과 클릭 두 방식으로 상품 사진 업로드
 2. 업로드된 파일을 콘솔에 출력 (실제 처리는 다음 Task에서)

 이 PR은 src/lib/upload.ts와
 src/components/ImageUploader.tsx 두 파일만 수정해."
```

#### 4-2. 자동화 흐름

```
[작업자] 명령 한 줄 입력
       ↓
[메인] 두 파일 작성
       ↓ (PostToolUse → prd-reviewer 자동 보고서)
[메인] 응답 작성 완료
       ↓ (Stop → git-committer 자동 커밋)
[GitHub] 커밋 도착
```

::: aside
작업자가 한 일은 명령 한 줄과 보고서 확인. Issue #1보다 손이 절반 이상 줄어듦.
:::

#### 4-3. PR 생성

```bash
gh pr create \
  --title "feat: Issue #2 이미지 업로드 처리" \
  --body "Closes #2"
```

본인 리뷰 후 병합. Issue #2 자동 닫힘.

#### 4-4. Issue #3, #4 동일 패턴

같은 흐름으로 진행. 빌드 명령이 90% 같은 양식.

```
- Issue #3: 키워드 입력 검증
- Issue #4: 입력 화면 라우팅
```

#### 4-5. 화면 1 동작 3요소 점검

| 요소 | 화면 1 상태 |
| :---: | --- |
| 1. 페이지 뜸 | 입력 폼 표시 ✓ |
| 2. 인터랙션 | 사진 업로드 + 키워드 입력 ✓ |
| 3. 반응 | 생성 버튼 → 콘솔 출력 ✓ |

화면 1의 수직 슬라이스 완성.

#### Step 4 검증 기준

- [ ] Issue #2, #3, #4가 모두 PR 병합됐는가
- [ ] 각 Task가 자동화 흐름으로 진행됐는가
- [ ] 화면 1의 동작 3요소가 모두 충족됐는가
- [ ] 작업자의 손이 자료 5의 Issue #1보다 줄었는가

### Step 5: 화면 2 빌드 (패턴 복사)

본 단계 목표는 Issue #5-#10을 패턴 복사로 빌드해 화면 2 완성. 자료 6의 *확장*에 해당.

#### 5-1. Issue #5 브랜치

```bash
git checkout main && git pull origin main
git checkout -b feat/task-2-1-openai-client
```

#### 5-2. Issue #5 빌드 명령 (패턴 복사)

화면 1 명령 양식 그대로:
```
"Issue #5를 진행해줘.
 CLAUDE.md와 rules/architecture.md를 참조해.

 PRD의 카피 생성 기능을 위한
 OpenAI API 클라이언트를 만들어줘.

 기능은 다음 두 가지:
 1. GPT-4o 모델 호출을 위한 클라이언트 초기화
 2. 환경 변수로 API 키를 읽어 클라이언트 인스턴스 export

 이 PR은 src/lib/openai-client.ts 한 파일만 수정해."
```

::: aside
"PRD의 [화면명]을 만들어줘 / 기능은 두 가지 / 이 PR은 N파일만" 양식 재사용. 작업자는 화면 목적과 파일명만 변경.
:::

#### 5-3. Issue #6-#10 동일 흐름

같은 패턴으로 진행:

| Issue | 작업 |
| :---: | --- |
| #6 | 프롬프트 템플릿 |
| #7 | 카피 생성 API |
| #8 | 결과 컴포넌트 |
| #9 | 복사 버튼 |
| #10 | 결과 라우팅 |

각 Task에서:
- PostToolUse → prd-reviewer
- Stop → git-committer

#### 5-4. 화면 2 동작 3요소 점검

| 요소 | 화면 2 상태 |
| :---: | --- |
| 1. 페이지 뜸 | 결과 화면 표시 ✓ |
| 2. 인터랙션 | 화면 1 → 화면 2 라우팅 ✓ |
| 3. 반응 | 카피 3개 표시, 복사 버튼 작동 ✓ |

#### 5-5. 자동화 효과 측정

자료 5의 Issue #1 vs 자료 6의 Issue #5:

| 항목 | Issue #1 (수동) | Issue #5 (자동화) |
| --- | --- | --- |
| 빌드 명령 입력 | 새로 작성 | 메모 복사 |
| PRD 확인 | 손으로 | hook이 자동 |
| 커밋 작성 | 손으로 | hook이 자동 |
| 작업 시간 | 100% | 50% 이하 |

#### Step 5 검증 기준

- [ ] Issue #5-#10이 모두 PR 병합됐는가
- [ ] 화면 2의 동작 3요소가 모두 충족됐는가
- [ ] 화면 1에서 화면 2로의 라우팅이 자연스러운가
- [ ] 화면 2 빌드 시간이 화면 1보다 짧아졌는가

### Step N: 정리와 비용 비교

본 단계 목표는 산출물 확인과 토큰 비교, 회고.

#### N-1. 산출물 정리

| # | 산출물 | 다음 단계 활용 |
| :---: | --- | --- |
| 1 | 동작하는 화면 2개 | E2E 테스트 대상 |
| 2 | prd-reviewer | 다음 단계 검증 도구 |
| 3 | git-committer | 다음 단계 커밋 도구 |
| 4 | PostToolUse + Stop hook | 자동화 인프라 |
| 5 | 자동 검증 보고서 누적 | 패턴 분석 가능 |
| 6 | 자동 커밋 히스토리 9+ | 진행 추적 |
| 7 | 병합된 PR 9개 | 작업 완료 증거 |

#### N-2. /cost 비교

```
/cost
```

::: aside
sub-agent의 컨텍스트 격리 덕분에 메인 토큰 사용 줄어듦. Issue 9개 처리 양에 비해 토큰 증가가 작았다면 자동화가 토큰 효율도 만든 것.
:::

#### N-3. 회고 좋은 답 vs 나쁜 답

| 질문 | 좋은 답 | 나쁜 답 |
| --- | --- | --- |
| Issue #1 vs Issue #2 시간 차이 | "절반 줄어듦. 명령 복사 + hook 자동" | "빨라졌다" |
| PRD 검증 보고 불일치 | "Issue #7에서 영어 카피 임의 추가 발견. 거부" | "별 거 없었다" |
| Stop hook 자동 커밋 효과 | "커밋 메시지 작성 시간 0. 형식도 자동 일관" | "편했다" |

#### Step N 검증 기준

- [ ] 산출물 7개가 모두 손에 있는가
- [ ] /cost 비교를 메모했는가
- [ ] 회고 3개 질문에 모두 답했는가
- [ ] 다음 학습 단계 진입 준비가 됐는가
## 과제

본 자료의 과제는 `assignment.md` 파일에 정리되어 있다.

| 항목 | 내용 |
| --- | --- |
| 목표 | 화면 1·2 완성과 자동화 도구 안정화 |
| 산출물 | 두 화면 동작, sub-agent 2개, hook 2개, Issue #2-#10 PR 병합 |
| 마감 | 다음 학습 단계 시작 전 |

::: aside
화면 두 개가 모두 동작 3요소 충족하고 자동화 도구가 안정 작동하는 상태가 다음 단계 출발선.
:::

## Tips

### 확장과 자동화 팁

#### 두 단어 분리

확장은 패턴 복사(화면 1 → 화면 2), 자동화는 반복 작업의 도구 위임(sub-agent + hook). 분리하면 본 단계가 무엇을 하는지 명확.

#### 필요성에서 출발

자료 5의 9개 미작업 Task가 *반복의 압박*이 본 단계의 출발점. 도구를 먼저 알고 적용처 찾는 순서는 효과 떨어짐.

### Agent 설계 팁

#### 6원칙 모두 적용

단일 책임, 최소 권한, 결정적 출력, 책임 분리, 호출 시점 명시, 입출력 계약. 한 원칙이라도 무너지면 sub-agent가 메인의 복제가 되거나 위험.

#### tools 최소 권한

코드 리뷰어가 코드 수정 못 하게. Read, Grep, Glob만. 커밋 sub-agent도 Bash, Read만.

### hooks 팁

#### 두 핵심 패턴

PostToolUse → prd-reviewer (자동 검증), Stop → git-committer (자동 커밋). 두 패턴 결합 시 한 Task가 명령 한 줄로 끝.

#### CLAUDE.md vs hook

CLAUDE.md는 70% 권고, hook은 100% 강제. 반드시 일어나야 하는 검증과 커밋은 hook.

#### matcher 정규식 주의

"Edit|Write"에 공백 넣으면 안 됨. "Edit | Write"는 잘못된 정규식.

### 검증 우선주의 팁

#### sub-agent 보고도 AI 산출물

"PRD와 일치"라고 적힌 항목도 본인이 PRD 직접 보기. 자동 커밋된 메시지도 git log로 확인.

### 빌드 효율 팁

#### 시간 절반 = 자동화 작동

빌드 명령 메모 90% 재사용 + hook 자동 처리. 두 번째 화면이 첫 화면 시간의 절반 이하면 자동화 성공.
