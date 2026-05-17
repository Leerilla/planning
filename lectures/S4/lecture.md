# PRD를 에이전트에게 전달하기

CLAUDE.md는 프로젝트의 헌법이다. PRD가 무엇을 만들 것인가에 답한다면 CLAUDE.md는 어떻게 만들 것인가에 답한다.

본 자료는 컨텍스트 설계, CLAUDE.md 4영역, OODA 루프와 Permissions, PRD 참조와 GitHub 저장소 셋업을 다룬다. 시드 6번(1인 셀러 카피 생성기)을 기준으로 다음 단계 빌드 환경 진입 준비. 작업 폴더와 GitHub 저장소 이름은 본 학습 전체에서 planning_project로 고정한다.

학습 목표:
- 컨텍스트가 에이전트 일관성을 결정하는 이유 설명
- CLAUDE.md 4영역 채우기
- AI 검증 루프로 명확성 검증
- OODA 루프로 에이전트 작업 사이클 이해
- Permissions로 자율 권한 정의
- GitHub 저장소 셋업과 초기 커밋

## 이론

### 1️⃣ AI 에이전트와 대화하는 법

이 챕터를 학습한 뒤 다음을 할 수 있다.
- 컨텍스트의 정체를 설명한다
- 무상태성이 만드는 문제를 인식한다
- 컨텍스트 앵커링의 효과를 이해한다

#### 컨텍스트는 명령보다 중요하다

에이전트가 코드를 잘 쓰게 만드는 일은 **명령의 기술이 아니라 컨텍스트의 기술**이다.

컨텍스트는 에이전트가 명령을 처리할 때 참조하는 정보의 집합. 같은 명령이라도 컨텍스트가 다르면 결과가 다르다.

::: aside
컨텍스트가 비어 있으면 에이전트가 임의로 추측. 컨텍스트가 명확하면 일관된 해석으로 작업.
:::

#### 첫 단정

> **CLAUDE.md는 프로젝트의 헌법이다.**

이 단정의 의미는 무상태성에서 출발한다.

#### 무상태성의 의미

에이전트는 매 세션마다 백지 상태로 시작한다.

```
- 어제 작업한 내용을 오늘 기억 못 함
- 다른 폴더의 작업을 이 폴더로 가져오지 못함
- 인간 동료처럼 맥락을 이어가지 않음
```

::: aside
새 동료를 매일 처음 만나는 상황과 같다. 매일 처음부터 설명해야 하고, 설명이 매번 다르면 동료의 작업도 매번 다르다.
:::

#### CLAUDE.md 운영의 효과

| 운영 방식 | 비용/효과 |
| --- | --- |
| CLAUDE.md 없음 | 매 명령마다 컨텍스트 수동 입력. 토큰 누적 |
| CLAUDE.md 있음 | 한 번 작성. 모든 명령이 그 위에서 작동 |

#### 컨텍스트 앵커링

자동 로드의 효과는 컨텍스트 앵커링의 핵심이다.

> **정보를 한 곳에 고정하고, 모든 명령이 그 고정점을 참조하게 만드는 구조.**

고정점이 명확할수록 에이전트의 작업이 일관되고, 흐릿하면 작업도 흐릿하다.

#### 안티패턴 vs 컨텍스트 앵커링

안티패턴:
```
"쇼핑몰 만들어줘"
→ 너무 광범위. 에이전트가 추측. 매번 결과 다름
```

컨텍스트 앵커링:
```
"CLAUDE.md를 본 상태에서 회원가입 화면을 만들어줘"
→ 페르소나·기능에 맞춰 일관되게 만듦
```

#### 1️⃣ 챕터 용어 해설

| 용어 | 정의 |
| --- | --- |
| 컨텍스트 | 에이전트가 명령을 처리할 때 참조하는 정보의 집합 |
| 무상태성 | 매 세션마다 백지 상태로 시작하는 성질 |
| 컨텍스트 앵커링 | 핵심 정보를 자동 로드되게 하는 기법 |
| 자동 로드 | 매 세션 시작 시 자동으로 읽힘 |
### 2️⃣ CLAUDE.md 4영역

이 챕터를 학습한 뒤 다음을 할 수 있다.
- CLAUDE.md 4영역을 나열한다
- 각 영역의 역할을 설명한다
- AI 검증 루프로 명확성을 확인한다

#### 4영역 한눈에 보기

CLAUDE.md는 4영역으로 구성. 200줄 미만 유지.

| # | 영역 | 답하는 질문 | 분량 |
| :---: | --- | --- | :---: |
| 1 | 프로젝트 개요 | 무엇을 만드는가 | 한 단락 |
| 2 | 기술 스택과 파일 구조 | 어떤 도구로 만드는가 | 5-7줄 |
| 3 | 코딩 가이드라인 | 어떻게 작성하는가 | 5-10줄 |
| 4 | 제약사항 | 무엇을 안 하는가 | 3-5줄 |

::: aside
매 명령마다 자동 로드되는 토큰. 길수록 비용 증가. 200줄 미만이 균형.
:::

#### 1영역: 프로젝트 개요

PRD의 요약. 페르소나, 핵심 기능 3개, 성공 지표가 들어감.

::: aside
PRD 전체를 복사하지 않는다. 자세한 PRD는 docs/prd.md 조회. 요약과 참조 한 줄만.
:::

#### 1영역 시드 6번 예시

사례: 시드 6번 1영역.

```
월 매출 100-500만원 1인 스마트스토어 셀러 대상.
상품 사진과 키워드 5개를 입력하면
차별화 카피 3개 후보를 5초 이내에 생성.
스마트스토어 형식 텍스트 출력 지원.
자세한 내용은 docs/prd.md 참조.
```

#### 2영역 시드 6번 예시

사례: 시드 6번 기술 스택과 파일 구조.

```
[기술 스택]
- FE: Next.js + Tailwind CSS
- BE: Node.js + Express
- AI API: OpenAI GPT-4o
- 상태 관리: Zustand

[폴더 구조]
- src/app/         페이지 라우팅
- src/components/  UI 컴포넌트
- src/lib/         API 호출, 유틸
- docs/            PRD, 페르소나
- rules/           코딩 규칙
- server/          BE 코드
```

#### 3영역 시드 6번 예시

사례: 시드 6번 코딩 가이드라인.

```
- 함수명: camelCase
- 컴포넌트명: PascalCase
- 파일명: kebab-case
- 커밋 메시지: [type] description
- 단위 테스트: Jest + React Testing Library
- 코드 포맷: Prettier + ESLint
```

#### 4영역 시드 6번 예시

사례: 시드 6번 제약사항.

```
- 모바일 앱 미지원 (웹만)
- 이미지 자동 생성 미지원 (텍스트만)
- 다국어 미지원 (한국어만)
- 광고 자동 집행 미지원
- 결제 기능 미포함
```

::: aside
제약사항이 명확하면 에이전트가 임의 기능을 추가하지 않는다.
:::

#### 두 번째 단정

> **PRD는 무엇을 만들 것인가, CLAUDE.md는 어떻게 만들 것인가이다.**

#### PRD vs CLAUDE.md

| 비교 | PRD | CLAUDE.md |
| --- | --- | --- |
| 답하는 질문 | 무엇을 | 어떻게 |
| 분량 | 수 페이지 | 200줄 미만 |
| 갱신 주기 | 검증 사이클 단위 | 빌드 진행 단위 |
| 자동 로드 | 안 됨 | 매 세션 자동 |
| 의도 | 합의 문서 | 작업 절차 |

#### 흔히 놓치는 3가지 함정

| # | 함정 | 결과 |
| :---: | --- | --- |
| 1 | PRD를 통째로 복사 | 매 명령마다 비효율 |
| 2 | 너무 짧게 작성 | 빈 영역을 에이전트가 임의로 채움 |
| 3 | 한 번 작성 후 갱신 안 함 | 빌드 진행과 어긋남 |

#### AI 검증 루프란

CLAUDE.md를 만든 뒤 즉시 검증하는 방법.

> **AI가 CLAUDE.md만 읽고 프로젝트를 한 문장으로 요약할 수 있다면 헌법으로서 충분히 작동한다.**

#### AI 검증 루프 5단계

흐름:
```
[1] Claude Code 명령
    "이 CLAUDE.md만 보고 우리 프로젝트가 무엇인지
     한 문장으로 요약해줘"
       ↓
[2] AI의 요약 답변 확인
       ↓
[3] 작업자 의도와 비교
    - 일치 → 검증 통과
    - 불일치 → 모호한 부분 존재
       ↓
[4] 불일치 시 CLAUDE.md 수정
       ↓
[5] 재검증 (의도 일치까지 반복)
```

#### 사람 검증 vs AI 검증

| 항목 | 사람 검증 (기존) | AI 검증 루프 (현재) |
| --- | --- | --- |
| 비용 | 동료 시간 확보 | 즉시 가능 |
| 속도 | 한 번에 시간 소요 | 반복 빠름 |
| 객관성 | 동료의 사전 지식 영향 | 컨텍스트만으로 판단 |
| 본 학습 운영 | 비현실적 | 권장 |

#### 시드 6번 AI 검증 예시

사례: 시드 6번 검증 통과.

```
[프롬프트]
"이 CLAUDE.md만 보고 우리 프로젝트가 무엇인지
 한 문장으로 요약해줘"

[AI 답변]
"1인 스마트스토어 셀러를 위한 차별화 카피 자동 생성 도구.
 상품 사진과 키워드를 입력하면 5초 이내에 카피 3개를 출력."

[점검]
✓ 페르소나 일치
✓ 핵심 기능 일치
✓ 성공 지표 반영
→ 검증 통과
```

#### 안티패턴 vs 올바른 검증

안티패턴:
```
"CLAUDE.md를 동료에게 보여줘서
 30초 안에 이해되는지 물어본다"
```

올바른 검증:
```
"AI에게 CLAUDE.md만 읽혀 요약 시킨다.
 작업자 의도와 일치할 때까지 수정 반복."
```

결론: AI 검증은 즉시·반복 가능하며 객관적.

#### 2️⃣ 챕터 용어 해설

| 용어 | 정의 |
| --- | --- |
| CLAUDE.md | Claude Code가 모든 명령 전에 자동 로드하는 헌법 |
| 4영역 | 프로젝트 개요, 기술 스택, 코딩 가이드, 제약사항 |
| 헌법 위반 | 에이전트가 CLAUDE.md 규칙을 어긴 경우 |
| 200줄 미만 | 권장 상한. 토큰 비용 통제 |
| AI 검증 루프 | AI에게 요약을 시켜 의도와 일치 확인 |
### 3️⃣ OODA 루프와 Permissions

이 챕터를 학습한 뒤 다음을 할 수 있다.
- OODA 루프 4단계를 설명한다
- Permissions 3단계를 구분한다
- OODA와 Permissions의 연결을 인식한다

#### OODA 루프란

OODA 루프는 의사결정의 사이클을 4단계로 정의하는 프레임워크. 미군 전투 조종사 John Boyd가 개발.

본 학습에서는 Claude Code 운영 사이클로 적용.

#### OODA 4단계

| 단계 | 영문 | 의미 |
| :---: | --- | --- |
| 1 | Observe | 현재 상태 관찰 |
| 2 | Orient | 상황 인식과 방향 잡기 |
| 3 | Decide | 어떤 행동을 할지 결정 |
| 4 | Act | 결정한 행동을 실행 |

이 4단계가 순환. Act 이후 새 상태가 다시 Observe 입력이 됨.

#### Claude Code의 OODA 루프

흐름:
```
[Observe]
- CLAUDE.md 자동 로드
- 폴더 구조 인식
- 명령 텍스트 수신
       ↓
[Orient]
- 4영역 정보로 상황 정렬
- 페르소나·기술 스택 인식
- 현재 명령이 어느 기능인지 판단
       ↓
[Decide]
- 어떤 도구를 쓸지 결정
- 어떤 파일을 수정할지 결정
- Permissions에 따라 분류
       ↓
[Act]
- 결정한 도구 실행
- 파일 수정, 명령 실행
       ↓
(다시 Observe로 순환)
```

#### 세 번째 단정

> **에이전트의 OODA 루프 중 Decide와 Act 사이에 작업자가 개입하는 지점이 Permissions이다.**

#### Permissions 3단계

| 단계 | 영문 | 의미 |
| :---: | --- | --- |
| 자동 허용 | auto_allow | 확인 없이 사용 |
| 매번 확인 | ask_before | 사용 전 확인 |
| 절대 금지 | deny | 권한 자체 차단 |

#### 자동 허용 도구

| 도구 | 이유 |
| --- | --- |
| Read | 파일 읽기. 영향 없음 |
| Grep, Glob | 검색. 영향 없음 |
| Edit | 단순 코드 수정. 빈도 높음 |

::: aside
위험도가 낮고 빈도가 높아 매번 확인하면 작업자 부담만 커진다.
:::

#### 매번 확인 도구

| 도구 | 이유 |
| --- | --- |
| Bash | 셸 명령. 영향 범위 큼 |
| Write | 새 파일 작성. 신중 필요 |
| WebFetch | 외부 API. 비용 발생 |

::: aside
영향 범위가 크거나 외부 비용이 발생. 매번 확인이 안전.
:::

#### 절대 금지 도구

| 도구 | 이유 |
| --- | --- |
| BashWithSudo | 시스템 명령. 회복 불가 |
| 환경 변수 노출 | 보안 위험 |

::: aside
잘못 사용되면 회복 어려운 결과. 권한 자체를 차단.
:::

#### Permissions와 OODA의 연결

| Permissions | OODA 흐름 | 작업자 개입 |
| --- | --- | --- |
| auto_allow | Decide → 바로 Act | 없음 |
| ask_before | Decide → 확인 → Act | 매번 |
| deny | Decide → 차단 | 시스템 차원 |

#### 책임 분배의 의미

| 단계 | 책임 | 의미 |
| --- | --- | --- |
| auto_allow | 에이전트 | 자율에 맡김 |
| ask_before | 함께 | 작업자+에이전트 결정 |
| deny | 작업자도 안 함 | 시스템 차단 |

#### 두 극단의 위험

| 극단 | 결과 |
| --- | --- |
| 모두 ask_before | 빌드 속도 절반 |
| 모두 auto_allow | 시스템 파일 위험 |

권장 템플릿이 균형.

#### 권장 settings.json

```json
{
  "permissions": {
    "auto_allow": ["Read", "Grep", "Glob", "Edit"],
    "ask_before": ["Bash", "Write", "WebFetch"],
    "deny": ["BashWithSudo"]
  }
}
```

::: aside
본 학습은 권장 템플릿을 그대로 사용. 자유 변형은 자가 학습 영역.
:::

#### 안티패턴 vs 권장 운영

안티패턴:
```
"Permissions를 너무 느슨하게 두면"
→ 에이전트가 시스템 파일까지 만짐
```

권장 운영:
```
"권장 settings.json 템플릿을 그대로 적용"
→ 안전과 속도의 균형
```

#### 3️⃣ 챕터 용어 해설

| 용어 | 정의 |
| --- | --- |
| OODA 루프 | Observe-Orient-Decide-Act 의사결정 사이클 |
| settings.json | 프로젝트별 Claude Code 설정 파일 |
| Permissions | 자율 권한 정의. 자동/확인/금지 |
| auto_allow | 확인 없이 사용 가능 |
| ask_before | 사용 전 확인 필요 |
| deny | 권한 자체 차단 |
## 실습

본 실습의 모든 예시는 시드 6번(1인 셀러 상품 상세페이지 카피 생성기) 기준이다.

작업 폴더와 GitHub 저장소 이름은 본 학습 전체에서 **planning_project**로 고정한다. 학습 단계가 진행되어도 같은 폴더에서 누적된다.

산출물 흐름:
```
이전 단계 자료 (자료 3: docs/prd.md)
       ↓
[Step 1] CLAUDE.md 협업 작성 + AI 검증 루프
[Step 2] PRD 참조 지침 + docs/, rules/ 환경 구축
[Step 3] settings.json + Permissions
[Step 4] GitHub 저장소 셋업 + 초기 셋업 커밋
       ↓
다음 단계 (자료 5: 화면 분석 + Task 재구성 + Issue 등록)
```

### Step 0: 환경 진단

본 단계 목표는 환경 확인과 토큰 베이스라인 측정.

#### 0-1. 환경 확인 명령

macOS / Linux:
```bash
node --version
claude --version
git --version
gh --version
```

Windows (PowerShell):
```powershell
node --version
claude --version
git --version
gh --version
```

통과 조건: node 18.0 이상, claude/git/gh 동작.

#### 0-2. 작업 폴더와 git 초기화

폴더 이름 planning_project로 고정.

macOS / Linux:
```bash
mkdir planning_project
cd planning_project
git init
```

Windows:
```powershell
New-Item -ItemType Directory -Path planning_project
Set-Location planning_project
git init
```

#### 0-3. 토큰 베이스라인과 PRD 복사

Claude Code 세션 시작 후:
```
/cost
```

이전 단계 prd.md 복사:
```bash
mkdir -p docs
cp ../03_prd-refinement/docs/prd.md docs/
```

::: aside
시작 토큰을 메모. 마지막 Step에서 비교한다.
:::

#### Step 0 검증 기준

- [ ] 폴더 이름이 planning_project인가
- [ ] git 저장소 초기화됐는가
- [ ] docs/prd.md가 작업 폴더에 있는가
- [ ] /cost 베이스라인을 메모했는가
- [ ] gh 명령이 동작하는가

### Step 1: CLAUDE.md 협업 작성과 AI 검증 루프

본 단계 목표는 작성자 1차 초안 + AI 개선 협업 + AI 검증 루프 통과.

::: aside
기존은 AI에게 처음부터 작성을 맡기는 방식. 새 방식은 작업자가 1차 초안 → AI가 개선·검증하는 협업 흐름.
:::

#### 1-1. 빈 CLAUDE.md 생성

macOS / Linux:
```bash
touch CLAUDE.md
```

Windows:
```powershell
New-Item -ItemType File -Path CLAUDE.md
```

#### 1-1. 1차 초안 작성 가이드

작업자가 docs/prd.md를 보면서 4영역을 러프하게 채운다.

빈 양식:
```
# CLAUDE.md

## 1. 프로젝트 개요
{한 단락: 페르소나 + 핵심 기능 3개 + 성공 지표}

## 2. 기술 스택과 파일 구조
{스택과 폴더 구조}

## 3. 코딩 가이드라인
{네이밍, 커밋, 테스트}

## 4. 제약사항
{하지 않을 것}

자세한 내용은 docs/prd.md 참조
```

::: aside
완벽하지 않아도 된다. 작업자의 의도를 거칠게 담는 것이 1차 초안의 목적.
:::

#### 1-1. 시드 6번 1차 초안 예시

사례: 시드 6번 거친 1차 초안.

```
# CLAUDE.md

## 1. 프로젝트 개요
1인 스마트스토어 셀러를 위한 카피 생성 도구.
상품 사진과 키워드로 카피 3개를 빠르게 만들어줌.

## 2. 기술 스택
- Next.js + Tailwind
- OpenAI API

## 3. 코딩 가이드라인
- camelCase 함수
- 커밋은 feat/fix 형식

## 4. 제약사항
- 모바일 안 함
- 한국어만

자세한 내용은 docs/prd.md 참조
```

이 초안은 거칠고 빈약하다. 다음 단계에서 AI가 개선.

#### 1-2. AI 개선 요청 명령

Claude Code 세션에서 입력:
```
"현재 작성된 CLAUDE.md를 읽고
 docs/prd.md를 참조해서 개선해줘.
 다음 기준으로 검토:
 - 4영역이 모두 충분히 채워졌는가
 - 모호한 표현이 있는가
 - PRD의 핵심 정보가 빠지지 않았는가
 - 빠진 부분이 있다면 어디인가
 개선안과 함께 이유를 설명해줘."
```

#### 1-2. 시드 6번 AI 개선 답변

사례: 시드 6번 1차 초안에 대한 AI 개선 제안.

```
[AI 개선 제안]

1. 1영역 개선:
   - "빠르게" → "5초 이내에" (성공 지표 누락)
   - 페르소나 모호 → "월 매출 100-500만원 1인 셀러" 권장

2. 2영역 보강:
   - BE 스택 누락
   - 권장: "Node.js + Express, OpenAI GPT-4o"

3. 3영역 보강:
   - 컴포넌트 네이밍 누락
   - "테스트는 나중에" 대신 명확한 도구 권장

4. 4영역 추가 권장:
   - "이미지 자동 생성 미지원"
   - "광고 자동 집행 미지원"
   - "결제 기능 미포함"
```

#### 1-3. 작업자 수정 원칙

| 원칙 | 의미 |
| --- | --- |
| 수용 | AI가 PRD 기반 정확히 짚은 부분 |
| 거부 | 작업자가 의도적으로 뺀 내용 |
| 수정 | AI 제안을 일부만 적용 |

#### 1-3. 시드 6번 수정 후 CLAUDE.md

사례: AI 협업 후 1영역 정제 결과.

```
월 매출 100-500만원 규모의 1인 스마트스토어 셀러를 위한
차별화 카피 자동 생성 도구. 상품 사진과 키워드 5개를 입력하면
카테고리별 차별화 카피 3개 후보를 5초 이내에 생성.
성공 지표: 카피 작성 시간 1-2시간 → 5분 이내,
         카피 후보 사용률 70% 이상.
```

#### 1-4. AI 검증 루프 명령

수정 후 검증:
```
"이 CLAUDE.md만 보고 우리 프로젝트가
 무엇인지 한 문장으로 요약해줘"
```

#### 1-4. 시드 6번 검증 통과

사례: 시드 6번 검증 답변.

```
[AI 답변]
"1인 스마트스토어 셀러를 위한 차별화 카피
 자동 생성 도구. 상품 사진과 키워드를 입력하면
 5초 이내에 카피 3개를 출력. 모바일은 지원 않고
 한국어 웹 전용."

[점검]
✓ 페르소나 일치
✓ 핵심 기능 일치
✓ 성공 지표 반영
✓ 제약사항 반영
→ 검증 통과
```

#### 1-5. 분량 점검

macOS / Linux:
```bash
wc -l CLAUDE.md
```

Windows:
```powershell
(Get-Content CLAUDE.md | Measure-Object -Line).Lines
```

200줄 미만이 균형.

#### Step 1 검증 기준

- [ ] 1차 초안이 작업자 손으로 작성됐는가
- [ ] AI 개선 제안을 검토·수용·거부했는가
- [ ] AI 검증 답변이 작업자 의도와 일치하는가
- [ ] CLAUDE.md가 200줄 미만인가
- [ ] 4영역이 모두 채워졌는가

### Step 2: PRD 참조 지침과 초기 환경 구축

본 단계 목표는 PRD 참조 지침 등록과 docs/, rules/ 폴더 구축.

::: aside
디자인 가이드는 다음 단계 추가. 현 단계는 docs/와 rules/만 필수.
:::

#### 2-1. docs/ 폴더 구성

표준 구성:
```
docs/
├── prd.md           ← 자료 3 export
├── persona.md       ← 페르소나 가설
└── painpoints.md    ← 페인포인트
```

#### 2-1. 페르소나·페인포인트 복사

macOS / Linux:
```bash
cp ../03_prd-refinement/docs/persona.md docs/
cp ../03_prd-refinement/docs/painpoints.md docs/
```

Windows:
```powershell
Copy-Item -Path "..\03_prd-refinement\docs\persona.md" -Destination docs/
Copy-Item -Path "..\03_prd-refinement\docs\painpoints.md" -Destination docs/
```

#### 2-2. rules/ 폴더 구성

표준 구성:
```
rules/
├── coding-style.md      ← 네이밍, 포맷
├── commit-convention.md ← 커밋 메시지
└── architecture.md      ← 폴더 구조 원칙
```

#### 2-2. rules/ 폴더 생성

macOS / Linux:
```bash
mkdir -p rules
touch rules/coding-style.md
touch rules/commit-convention.md
touch rules/architecture.md
```

Windows:
```powershell
New-Item -ItemType Directory -Path rules -Force
New-Item -ItemType File -Path rules/coding-style.md
New-Item -ItemType File -Path rules/commit-convention.md
New-Item -ItemType File -Path rules/architecture.md
```

#### 2-3. rules/ AI에 채우게 하기

Claude Code 명령:
```
"CLAUDE.md의 3영역(코딩 가이드라인)을 참고해서
 rules/ 폴더의 3개 파일을 채워줘:

 - rules/coding-style.md: 네이밍·포맷·들여쓰기 상세
 - rules/commit-convention.md: 커밋 type 목록과 예시
 - rules/architecture.md: 폴더 구조와 모듈 분리 원칙

 각 파일은 50줄 이내로 짧게 작성해줘."
```

#### 2-4. CLAUDE.md에 참조 지침 추가

CLAUDE.md 마지막에:
```markdown
## 5. 시스템 설계 참조 지침

다음 문서를 항상 참조한다:
- docs/prd.md: 제품 요구사항
- docs/persona.md: 페르소나 가설
- docs/painpoints.md: 검증된 페인포인트
- rules/coding-style.md: 네이밍·포맷
- rules/commit-convention.md: 커밋 형식
- rules/architecture.md: 폴더 구조 원칙

기능 구현 시 docs/prd.md의 핵심 기능 3개에 매핑되는지 확인.
모호함이 발견되면 임의 해석하지 말고 작업자에게 확인 요청.

(디자인 가이드는 다음 단계에서 추가됨)
```

#### Step 2 검증 기준

- [ ] docs/ 폴더가 PRD 기반 문서 3개를 담고 있는가
- [ ] rules/ 폴더가 3개 파일로 구성됐는가
- [ ] CLAUDE.md에 시스템 설계 참조 지침이 명시됐는가
- [ ] 디자인 가이드는 다음 단계로 미뤄졌는가

### Step 3: settings.json과 Permissions

본 단계 목표는 권장 settings.json 템플릿 적용과 의도된 차단 확인.

#### 3-1. .claude/settings.json 생성

macOS / Linux:
```bash
mkdir -p .claude
touch .claude/settings.json
```

Windows:
```powershell
New-Item -ItemType Directory -Path .claude -Force
New-Item -ItemType File -Path .claude/settings.json
```

#### 3-2. 권장 템플릿 입력

```json
{
  "permissions": {
    "auto_allow": ["Read", "Grep", "Glob", "Edit"],
    "ask_before": ["Bash", "Write", "WebFetch"],
    "deny": ["BashWithSudo"]
  }
}
```

::: aside
권장 템플릿을 그대로 적용하면 안전과 속도의 균형이 자동으로 갖춰진다.
:::

#### 3-3. 의도된 차단 시연

차단 동작 확인:
```
"시스템 파일 /etc/hosts를 수정해줘"
```

통과 기준: 차단되면 정상.

#### Step 3 검증 기준

- [ ] .claude/settings.json이 생성됐는가
- [ ] Permissions 3단계가 명시됐는가
- [ ] 의도된 차단이 동작했는가

### Step 4: GitHub 저장소 셋업과 초기 커밋

본 단계 목표는 GitHub 저장소 생성과 초기 셋업을 첫 커밋으로 푸시.

::: aside
GitHub Issue 등록과 PR 워크플로는 다음 단계(자료 5)에서 화면 분석 후 진행한다. 본 단계는 저장소 셋업과 초기 커밋까지만.
:::

#### 4-1. GitHub 저장소 생성 메뉴 조작

저장소 생성 단계:
```
[1] github.com 접속
       ↓
[2] 우측 상단 "+" → "New repository"
       ↓
[3] Repository name: planning_project
       ↓
[4] Privacy: Private (또는 Public)
       ↓
[5] "Create repository" 클릭
       ↓
[6] URL 복사
```

#### 4-2. 로컬과 원격 연결

공통 명령:
```bash
git remote add origin https://github.com/{user}/planning_project.git
git branch -M main
```

#### 4-3. .gitignore 생성

Claude Code 명령:
```
"이 프로젝트에 맞는 .gitignore를 만들어줘.
 Next.js 기준이고, .claude/는 제외하지 말고 포함.
 node_modules, .env, build 결과물은 제외."
```

#### 4-4. 초기 셋업 커밋 명령

자연어 커밋 요청:
```
"현재까지의 초기 셋업을 GitHub에 커밋해줘.
 커밋 메시지는 CLAUDE.md 3영역의 형식을 따라줘.
 단, 변경 파일을 먼저 보여주고 내 확인을 받은 뒤 진행."
```

#### 4-4. 시드 6번 예상 커밋 메시지

사례: 시드 6번 초기 셋업 커밋.

```
[chore] 초기 셋업: CLAUDE.md, docs/, rules/, settings.json

- CLAUDE.md 4영역 + 시스템 설계 참조 지침
- docs/prd.md, persona.md, painpoints.md
- rules/coding-style.md, commit-convention.md, architecture.md
- .claude/settings.json (Permissions 3단계)
- .gitignore
```

#### 4-5. 커밋 확인 점검

| 항목 | 통과 신호 |
| --- | --- |
| CLAUDE.md 저장소에 보임 | ✓ |
| docs/, rules/ 폴더 보임 | ✓ |
| .claude/settings.json 보임 | ✓ |
| 커밋 메시지가 [type] description 형식 | ✓ |

#### Step 4 검증 기준

- [ ] GitHub 저장소가 planning_project 이름으로 생성됐는가
- [ ] 로컬과 원격이 연결됐는가
- [ ] 초기 셋업이 첫 커밋으로 푸시됐는가
- [ ] 커밋 메시지가 CLAUDE.md 형식을 따르는가

### Step N: 정리와 비용 비교

본 단계 목표는 산출물 확인과 토큰 비교, 회고.

#### N-1. 산출물 정리

| # | 산출물 | 다음 단계 활용 |
| :---: | --- | --- |
| 1 | CLAUDE.md (검증 통과) | 자동 컨텍스트 |
| 2 | .claude/settings.json | Permissions |
| 3 | docs/ (3개 파일) | 시스템 설계 참조 |
| 4 | rules/ (3개 파일) | 코딩 규칙 |
| 5 | .gitignore | 버전 관리 |
| 6 | GitHub 저장소 + 초기 커밋 | 다음 단계 입력 |

::: aside
다음 단계(자료 5)에서 이 환경을 입력으로 받아 화면 분석과 Task 재구성, GitHub Issue 등록이 시작된다.
:::

#### N-2. /cost 비교

```
/cost
```

시작 토큰과 종료 토큰의 차이를 메모.

#### N-3. 회고 좋은 답 vs 나쁜 답

| 질문 | 좋은 답 | 나쁜 답 |
| --- | --- | --- |
| AI 검증 효과 | "1차 초안 페르소나 모호하다고 AI가 짚어줘 1인 셀러로 명확화" | "더 좋아진 것 같다" |
| 가장 모호했던 영역 | "1영역 성공 지표가 측정 단위 누락이었음" | "전반적으로 어려웠다" |
| 다음 단계 준비 | "화면 분석과 Task 재구성으로 진입 가능" | "준비됐다" |

#### Step N 검증 기준

- [ ] 산출물 6개가 모두 손에 있는가
- [ ] /cost 비교를 메모했는가
- [ ] 회고 3개 질문에 모두 답했는가
- [ ] 다음 단계 화면 분석 진입 준비가 됐는가
## 과제

본 자료의 과제는 `assignment.md` 파일에 정리되어 있다.

| 항목 | 내용 |
| --- | --- |
| 목표 | 빌드 진입 가능한 상태로 환경 안정화 |
| 산출물 | CLAUDE.md, docs/, rules/, settings.json, GitHub 저장소 초기 커밋 |
| 마감 | 다음 학습 단계 시작 전 |

::: aside
다음 단계(자료 5)에서 본 산출물을 입력으로 받아 화면 분석과 Task 재구성을 진행한다.
:::

## Tips

### 폴더와 저장소 일관성

#### planning_project로 고정

학습 단계가 진행되어도 같은 폴더에서 누적. 매 단계마다 새 폴더로 옮기면 이전 산출물 다시 복사해야 하고 흐름이 끊긴다.

#### 저장소 이름도 폴더와 일치

GitHub 저장소 이름도 planning_project. 학습 전체가 하나의 저장소에서 진행.

### CLAUDE.md 작성 팁

#### PRD와 CLAUDE.md의 차이

> PRD는 무엇을, CLAUDE.md는 어떻게.

둘이 헷갈리면 자료가 부풀거나 모호해진다.

#### 1차 초안은 거칠어도 된다

작업자가 의도를 거칠게 담는 게 1차 목적. AI가 개선·보강하는 협업 흐름. 완벽한 초안 만들려고 막히지 말 것.

#### 200줄 미만 유지

매 명령마다 자동 로드되는 토큰. 4영역 모두 채우면서 30-50줄이 균형.

### AI 검증 루프 팁

#### AI 답변이 매번 다르면 모호 신호

AI가 일관된 답을 못 한다는 건 컨텍스트가 흐릿하다는 뜻. "어느 영역이 가장 모호한가"를 AI에 직접 질문.

#### 답변이 의도와 다르면 못 짚은 부분이 모호

AI가 페르소나를 못 짚으면 1영역 모호. 핵심 기능 못 짚으면 핵심 기능 영역 모호.

### OODA 루프와 Permissions 팁

#### Permissions는 단순 차단이 아님

OODA 루프의 Decide→Act 사이 작업자 개입 지점. 도구 위험도에 따라 자율/확인/금지 분배.

#### 권장 템플릿을 그대로 사용

자유 변형은 자가 학습 영역. 본 학습은 템플릿 그대로 사용으로 안전과 속도 균형.

### GitHub 셋업 팁

#### Issue 등록은 다음 단계로

본 단계에서 Task를 Issue로 등록하지 않음. 화면 분석 후 그룹화된 Task로 Issue 등록이 자연스러운 흐름.

#### 자연어 커밋

git 명령 직접 입력 안 함. "현재 셋업을 커밋해줘"로 운영. CLAUDE.md 규칙을 따른 커밋 메시지 자동 생성.

### 시스템 환경 팁

#### docs/와 rules/는 필수, 디자인 가이드는 다음 단계

현 단계: docs/(PRD 참조)와 rules/(코딩 규칙)만. 디자인 가이드는 다음 단계 빌드 시작 시 추가.

#### 헌법 위반은 조항 번호로 지적

"CLAUDE.md 3조의 커밋 메시지 형식을 어겼다"라고 명시. 에이전트가 정확히 인식.
