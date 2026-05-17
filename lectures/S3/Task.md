# S3 재큐레이션 Task 목록 (2026-05-12 확정, 87장)

> **세션**: 데이터를 PRD로 정제하기 (From Data to PRD Refinement)
> **lecture.md**: 1336줄 (강사 작업 완료 — MCP 5건 삭제 / L425·L519 2건 보존)
> **구조**: 이론 5 챕터 + 실습 6 Step (Step 4 빌드 프로젝트 환경 포함)
> **결정 옵션**: B (87장, 메뉴+시드 통합 / 요소 정의·양식 통합 / §4 효과 4-card 1슬라이드)
> **HIGH-1 보강**: 폐기 (Step 2 = 5단계 확정)

---

## 강사 결정 4건 (확정, 2026-05-12)

| # | 결정 | 영향 |
|---|---|---|
| 1 | 옵션 B 87장 통합 | 메뉴 조작 + 시드 6 통합 / 요소 1-5 정의·양식 통합 |
| 2 | 과제/Tips 미추가 | lecture.md 그대로 (이론 + 실습만, 과제/Tips lecture에서 삭제됨) |
| 3 | 시드 6 + 메뉴 조작 통합 슬라이드 | 좌 메뉴 / 우 시드 6 inline 2-area |
| 4 | §4 효과 4 → 4-card grid 한 슬라이드 | S1 AI 4단계 패턴 재사용 |
| 5 | MCP 5건 삭제 + 2건 보존 (소개용, 완료) | L425 특징 표·L519 용어 해설 보존 / 활용 흐름 5건 삭제 완료 |
| 6 | HIGH-1 보강 폐기 | Step 2 5단계 확정 (2-6/2-7 미추가) |

---

## 슬라이드 합계 (87장)

| 영역 | 슬라이드 수 |
|---|---|
| 이론 | **46** (자동 2 + §1 7 + §2 10 + §3 8 + §4 8 + §5 11) |
| 실습 | **41** (자동 1 + Step 0 6 + Step 1 7 + Step 2 7 + Step 3 6 + Step 4 9 + Step N 5) |
| **총** | **87** |

---

## D-043 적용 — 실습 프로젝트명 `planning_project` 고정

> **CLAUDE.md § 6 A7** + **docs/decisions.md D-043**. S3 실습 슬라이드 빌드 시 모든 폴더·CLI 명령에서 프로젝트명 `planning_project`로 통일.

### S3 실습 적용 매핑

| lecture.md 원본 | 슬라이드 변환 |
|---|---|
| `mkdir 03_prd-refinement` (L716 부근) | `mkdir planning_project` |
| `cd 03_prd-refinement` | `cd planning_project` |
| Step 4 폴더 구조 (L1110~1126) — 루트 폴더명 | `planning_project/` 루트 |
| Step 4 `persona.md` / `painpoints.md` / `README.md` / `.claude/CLAUDE.md` 경로 | `planning_project/docs/{file}.md`, `planning_project/.claude/CLAUDE.md` |
| Step 3 prd.md export 위치 (L1053~1066) | `planning_project/docs/prd.md` |

### 영향 미니 사이클
- **S3-T3.1 Step 0** (0-2 작업 폴더 생성) — `mkdir/cd` 명령 변환
- **S3-T3.4 Step 3** (3-2 작업 폴더로 이동) — `mv ~/Downloads/prd.md planning_project/docs/`
- **S3-T3.5 Step 4-A** (4-1 폴더 구조) — 루트 폴더명 `planning_project/`
- **S3-T3.6 Step 4-B** (4-3 README, 4-4 .claude/CLAUDE.md) — 파일 안 프로젝트명

**A2 원칙**: lecture.md 자체 수정 X — 슬라이드 빌드 단계에서만 변환.

---

## D-044 적용 — 학생 프로젝트 구조 SSOT 참조

> **CLAUDE.md § 6 A8** + **docs/decisions.md D-044**. S3 슬라이드 빌드 시 `docs/student-project-reference.md`를 폴더 구조·docs 양식·파일 경로의 SSOT로 사용.

### S3 실습 슬라이드 빌더 참조 항목

| 슬라이드 영역 | reference.md 참조 절 |
|---|---|
| Step 0-2 폴더 생성 | §2 표준 폴더 구조 |
| Step 4-1 폴더 구조 | §2 표준 폴더 구조 (`planning_project/{docs,src,tests,data,.claude}`) |
| Step 4-2 persona.md 양식 | §3.1 persona.md |
| Step 1 추출 → painpoints.md | §3.2 painpoints.md |
| Step 3 Manyfast → prd.md | §3.3 prd.md |
| Step 4-3 README.md 양식 | §3.4 README.md |
| Step 4-4 .claude/CLAUDE.md 양식 | §3.5 .claude/CLAUDE.md |

**충돌 시 SSOT 우선**: lecture.md 양식과 reference.md 양식이 다르면 reference.md 우선 (강사 협업 갱신).

---

## lecture.md 헤더 트리 (자동 매핑 미리보기)

### 이론 (5 챕터, L18-671)
- **§1 PRD란 무엇인가** (L18-95, 6 ### + 챕터 표지) — 정의/첫단정/본질/효과/안티/용어
- **§2 좋은 PRD의 5요소** (L98-309, 14 ### + 챕터 표지) — 한눈 + 요소 1~5 (정의·양식) + 잘못된 + 비면 + 용어
- **§3 PRD는 어떻게 만들어져 왔는가** (L311-384, 7 ### + 챕터 표지) — 3시대/과거/한계/과도기/새문제/현재/두번째 단정
- **§4 NotebookLM과 Manyfast 활용** (L386-520, 12 ### + 챕터 표지) — 도구 소개/특징·장점/효과 4/분담/안티/용어
- **§5 PRD 정제의 실전** (L522-671, 13 ### + 챕터 표지) — 4단계/AI 한계/세번째 단정/5점검/MVP/표준/시드 6/안티/용어

### 실습 (6 Step, L673-1336)
- **Step 0 환경 진단** (L690-750, 5 ###)
- **Step 1 NotebookLM** (L752-885, 9 ###)
- **Step 2 Manyfast** (L887-1029, 9 ###) — 2-1~2-5 (HIGH-1 폐기)
- **Step 3 prd.md export** (L1031-1100, 5 ###)
- **Step 4 빌드 프로젝트 환경 구축** (L1102-1300, 10 ###) — 폴더/persona/painpoints/README/CLAUDE.md
- **Step N 정리·회고** (L1302-1336, 4 ###)

---

## Phase 0 — Pre-task (완료, 2026-05-12)

- [x] **S3-T0.1** 기존 자산 폐기 ✅
  - `src/components/slides/s3/theory/*.jsx` 35개 삭제 완료
  - 기존 `index.js` 폐기 → **placeholder index.js** (`export const S3_THEORY_SLIDES = []`) 신규 — `deck-registry.js:6` import 깨짐 방지, Phase 2 T2.0a에서 재작성
- [x] **S3-T0.2** lecture-translator α.1 파서 적응 점검 ✅
  - α.1a `classify_header()` + `strip_emoji()`로 `### 1️⃣ 챕터 용어 해설` 같은 emoji 헤더 자동 처리 (D-035)
  - D-033 (### = section_cover) 적용 가능
  - D-034 미니 사이클 = ### 단위 (S3 lecture.md `####` 0개·`---` 0개 → group 단위가 ### 그대로, 호환 모드)
  - S2 deviation과 동일 — 추가 적응 필요 X

---

## Phase 1 — 통합 분석 (Gate-1) (완료, 2026-05-12)

- [x] **S3-T1.1** `profile.yaml` (draft) + `spec.md` § 1 신규 ✅
  - `logic_structure`: hierarchical (5 챕터 순차) + parallel (NotebookLM/Manyfast 분담)
  - `core_visual_kind`: comparison (안티 4 + 분담 + 3시대) + diagram (4단계 + 3시대 타임라인)
  - **`expected_slide_count`: 87** (이론 46 + 실습 41 — spec § 1.2 매핑 행 87개 검증 ✅)
  - `interactivity_density`: medium (6~9 후보)
  - `tone_strength`: balanced (단정 3 + 안티 4)
  - spec § 1.1 헤더 트리 yaml + § 1.2 자동 매핑 (이론 46 + 실습 41) + § 1.3 coverage_map (L1~L1336 100%)
- [x] **S3-T1.2** Gate-1 강사 검토 ✅ (reasonable defaults 자동 통과)
  - decisions_resolved 5건:
    1. profile 자동 도출 → confirmed (그대로)
    2. 미니 사이클 분할 → Task.md 명시안 (§2 3개 / §4 2개 / §5 2개)
    3. §4 효과 4-card 1슬라이드 → 확정 (강사 결정 4)
    4. 메뉴 조작 캡처 → 텍스트 설명 위주 + ε.2 capture-checker가 빈 슬롯 알림
    5. `@interactive` 명시 0건 → 8타입 기본 인터랙티브 (E10)
  - `profile.yaml status: confirmed` → Phase 2 진입 가능

---

## Phase 2 — 이론 미니 사이클 (9개 + 자동 2, 46장) (완료, 2026-05-12)

### 자동 생성

- [x] **S3-T2.0a** # 세션 표지 — `01-session-cover.jsx` ✅
- [x] **S3-T2.0b** 이론 목차 — `02-toc.jsx` (5 챕터 Objectives) ✅

### §1 PRD란 무엇인가 (7장)

- [x] **S3-T2.1 §1** (7장) ✅ — `03-c1-cover` ~ `09-c1-terms`
  - s3: ## 1️⃣ 챕터 표지 (자동, Cover + objectives)
  - s4: PRD의 정의 (ConceptSlide, emphasis=definition — "합의 문서")
  - s5: 첫 단정 (ConceptSlide, emphasis=key-message)
  - s6: PRD의 본질은 명확성 (ConceptSlide, emphasis=definition)
  - s7: 명확한 PRD의 효과 (ConceptSlide, inline 효과 리스트)
  - s8: 안티패턴 vs 명확한 PRD (ComparisonSlide, BAD/GOOD)
  - s9: 챕터 1 용어 (TermsSlide, 5행)

### §2 좋은 PRD의 5요소 (10장)

- [x] **S3-T2.2 §2-A 5요소 한눈 + 요소 1·2** (4장) ✅ — `10-c2-cover` ~ `13-c2-e2-persona`
  - s10: ## 2️⃣ 챕터 표지 (자동)
  - s11: 5요소 한눈에 보기 (ComparisonSlide, inline 5-row 표)
  - s12: 요소 1 문제 (ConceptSlide, 정의+목적+양식+시드 6 예시 통합 — inline 2-area)
  - s13: 요소 2 페르소나 (ConceptSlide, 정의+양식 통합)

- [x] **S3-T2.3 §2-B 요소 3·4 + 잘못된** (3장) ✅ — `14-c2-e3-features` ~ `16-c2-e4-bad-example`
  - s14: 요소 3 핵심 기능 (ConceptSlide, 정의+양식 통합)
  - s15: 요소 4 성공 지표 (ConceptSlide, 정의+양식 통합)
  - s16: 요소 4 잘못된 예시 (ComparisonSlide, BAD/GOOD)

- [x] **S3-T2.4 §2-C 요소 5 + 비면 + 용어** (3장) ✅ — `17-c2-e5-constraints` ~ `19-c2-terms`
  - s17: 요소 5 제약사항 (ConceptSlide, 정의+양식 통합)
  - s18: 5요소가 비면 일어나는 일 (QuoteSlide, Warning)
  - s19: 챕터 2 용어 (TermsSlide)

### §3 PRD는 어떻게 만들어져 왔는가 (8장)

- [x] **S3-T2.5 §3 3시대 + 두번째 단정** (8장) ✅ — `20-c3-cover` ~ `27-c3-second-assertion`
  - s20: ## 3️⃣ 챕터 표지 (자동)
  - s21: PRD 제작의 3시대 (ProcessSlide, 3-card 타임라인)
  - s22: 과거 — PM이 모든 것을 직접 (ConceptSlide, definition)
  - s23: 과거의 한계 (QuoteSlide, Warning)
  - s24: 과도기 — 일반 LLM의 등장 (ConceptSlide, definition)
  - s25: 과도기의 새로운 문제 (QuoteSlide, Warning)
  - s26: 현재 — 두 도구의 역할 분담 (ConceptSlide, definition)
  - s27: 두 번째 단정 (ConceptSlide, key-message)

### §4 NotebookLM과 Manyfast 활용 (8장)

- [x] **S3-T2.6 §4-A 도구 소개 + 통합** (4장) ✅ — `28-c4-cover` ~ `31-c4-manyfast` (L425 MCP 보존 / L433 장점 2개 빌드)
  - s28: ## 4️⃣ 챕터 표지 (자동)
  - s29: 도구 소개 (ConceptSlide, inline 2-area: NotebookLM / Manyfast)
  - s30: NotebookLM 특징+장점 통합 (ConceptSlide)
  - s31: Manyfast 특징+장점 통합 (ConceptSlide) — **L425 "MCP 연동" 행 보존 (소개)** / L433 "빌드 연결" 삭제됨 → 장점 2개

- [x] **S3-T2.7 §4-B 효과 4 + 마무리** (4장) ✅ — `32-c4-effects-grid` ~ `35-c4-terms` (MCP 노드/셀 제거 반영 / L519 용어 보존)
  - s32: 효과 4 통합 (ComparisonSlide 또는 ConceptSlide 4-card grid — 사고 자원 / 검증 절차 / 추적 가능성 / 다음 연결)
    - L467 다이어그램 `[Claude Code MCP]` 노드 제거됨
    - L480 "다음 연결" 카드는 "빌드 단계로 export"로 표현
  - s33: 두 도구 분담 정리 (ComparisonSlide, inline 비교 표) — L491 분담 셀 `export` 만 유지됨
  - s34: 안티패턴 (ComparisonSlide, BAD/GOOD)
  - s35: 챕터 4 용어 (TermsSlide) — **L519 "MCP 연동" 용어 행 보존 (용어 카운트 유지)**

### §5 PRD 정제의 실전 (11장)

- [x] **S3-T2.8 §5-A 4단계 + AI 한계 + 단정** (5장) ✅ — `36-c5-cover` ~ `40-c5-third-assertion`
  - s36: ## 5️⃣ 챕터 표지 (자동)
  - s37: 4단계 정제 워크플로 도입 (ConceptSlide, definition)
  - s38: 4단계 sequential 통합 (ProcessSlide, 1슬라이드 4-step: 업로드→추출→생성→검토)
  - s39: AI 자동 검토의 한계 (ConceptSlide, definition)
  - s40: 세 번째 단정 (ConceptSlide, key-message)

- [x] **S3-T2.9 §5-B 5점검 + MVP + 마무리** (6장) ✅ — `41-c5-five-checks` ~ `46-c5-terms` (❌/✅ emoji → 텍스트 D-035)
  - s41: PRD 검토 5개 점검 (ProcessSlide 또는 ConceptSlide, numbered list)
  - s42: MVP의 핵심 기능 3개 (ConceptSlide, definition)
  - s43: 표준 3개 구성 (ConceptSlide, inline: 입력+처리+출력)
  - s44: 시드 6번 3개 구성 (ExampleSlide, inline 예시)
  - s45: 안티패턴 vs 올바른 운영 (ComparisonSlide, BAD/GOOD)
  - s46: 챕터 5 용어 (TermsSlide)

**이론 합계**: 2 + 7 + 10 + 8 + 8 + 11 = **46장**

---

## Phase 3 — 실습 미니 사이클 (7개 + 자동 1, 41장) (완료, 2026-05-12)

### 자동 생성

- [x] **S3-T3.0** 실습 목차 — `01-activity-toc.jsx` ✅

### Step 별 미니 사이클

- [x] **S3-T3.1 Step 0 환경 진단** (6장) ✅ — `02-step0-cover` ~ `07-step0-validation`
  - 섹션 표지 (ActivitySlide, Cover)
  - 0-1 환경 확인 명령 (ActivitySlide, 2-col 코드 macOS/Windows)
  - 0-2 작업 폴더 생성 (ActivitySlide, 2-col 코드) — **D-043: `mkdir planning_project`**
  - 0-3 토큰 베이스라인 (ActivitySlide, /cost)
  - 0-4 도구 계정 점검 (ActivitySlide, NotebookLM/Manyfast)
  - Step 0 검증 기준 (ActivitySlide, Checklist)

- [x] **S3-T3.2 Step 1 NotebookLM** (7장) ✅ — `08-step1-cover` ~ `14-step1-validation`
  - 섹션 표지
  - 1-1 노트북 생성 메뉴 조작
  - 1-2 데이터 업로드 (메뉴 + 시드 6 업로드 파일 통합 inline 2-area)
  - 1-3 페인포인트 추출 (메뉴 + 시드 6 추출 결과 통합) — **painpoints.md (D-044 §3.2)**
  - 1-4 인용 검증 메뉴 조작
  - 1-5 현재 대안 파악 (메뉴 + 시드 6 통합)
  - Step 1 검증 기준

- [x] **S3-T3.3 Step 2 Manyfast** (7장) ✅ — `15-step2-cover` ~ `21-step2-validation` (HIGH-1 폐기 확정)
  - 섹션 표지
  - 2-1 프로젝트 생성 메뉴 조작
  - 2-2 PRD 자동 생성 (메뉴 + 시드 6 입력 양식 통합)
  - 2-3 5요소 확인 메뉴 조작
  - 2-4 모호한 표현 수정 (메뉴 + 시드 6 수정 예시 통합)
  - 2-5 핵심 기능 좁히기 (메뉴 + 시드 6 3개 기능 통합)
  - Step 2 검증 기준

- [x] **S3-T3.4 Step 3 prd.md export** (6장) ✅ — `22-step3-cover` ~ `27-step3-validation`
  - 섹션 표지
  - 3-1 Export 메뉴 조작
  - 3-2 작업 폴더로 이동 — **D-043: `mv ~/Downloads/prd.md planning_project/docs/`**
  - 3-3 파일 내용 확인 (ActivitySlide, 코드)
  - 3-4 PRD 검토 5개 점검 (ActivitySlide, Checklist) — **prd.md (D-044 §3.3)**
  - Step 3 검증 기준

- [x] **S3-T3.5 Step 4-A 폴더 + 페르소나·페인포인트** (5장) ✅ — `28-step4-cover` ~ `32-act-4-2-painpoints-md` (D-043 + D-044 §2/§3.1/§3.2)
  - 섹션 표지 (Step 4 빌드 프로젝트 환경)
  - 4-1 표준 폴더 구조 + 폴더 생성 명령 통합 (좌 구조 / 우 명령) — **D-043 + D-044 §2**
  - 4-2 페르소나·페인포인트 정리 (ConceptSlide, definition)
  - 4-2 시드 6번 persona.md (ExampleSlide, 코드 블록 + 양식 인라인) — **D-044 §3.1**
  - 4-2 시드 6번 painpoints.md (ExampleSlide, 코드 블록)

- [x] **S3-T3.6 Step 4-B README + Claude + 점검** (4장) ✅ — `33-act-4-3-readme` ~ `36-step4-validation` (D-044 §3.4/§3.5)
  - 4-3 README.md 양식 + 시드 6 통합 (좌 양식 / 우 시드 적용) — **D-044 §3.4**
  - 4-4 Claude Code 컨텍스트 파일 — **D-044 §3.5 `.claude/CLAUDE.md`**
  - 4-5 폴더 구조 최종 점검 (코드 명령)
  - Step 4 검증 기준

- [x] **S3-T3.7 Step N 정리·회고** (5장) ✅ — `37-stepN-cover` ~ `41-stepN-validation` (L1311 MCP 제거 반영)
  - 섹션 표지
  - N-1 결과 정리 (3 산출물 카드: NotebookLM 노트북 / Manyfast 프로젝트 / 빌드 프로젝트 환경) — L1311 "다음 단계" 셀 `export`로 변경됨
  - N-2 /cost 비교 (ConceptSlide, definition + 코드)
  - N-3 회고 좋은 답 vs 나쁜 답 (ComparisonSlide, 3 질문 × GOOD/BAD)
  - Step N 검증 기준

**실습 합계**: 1 + 6 + 7 + 7 + 6 + 5 + 4 + 5 = **41장**

---

## Phase 4 — Final ε (통합 검증) (완료, 2026-05-12)

- [x] **S3-T4.1** ε.1 npm build ✅ — 9/9 페이지 컴파일 통과 (exit code 0)
- [x] **S3-T4.2** ε.2 capture-checker ✅ — N/A (CaptureSlide 사용 0건, 메뉴는 텍스트 설명)
- [x] **S3-T4.3** ε.3 design-checker 5축 ✅ — 0 violation (D-035 emoji JSX 0건 / § 0건 / hex 0건 / rounded-lg 0건 / pattern prop mismatch 0건)
- [x] **S3-T4.4** ε.4 coverage 사후 ✅ — lecture.md L1~L1336 87장 매핑 100%
- [x] **S3-T4.5** ε.5 history.md 갱신 ✅ — § 0에 S3 Sprint 완료 기록 (결함 0건)
- [x] **S3-T4.6** ε.6 spec § 5 Final Sign-off ✅

---

## Phase 5 — S3Form 제출 인프라 (완료, 2026-05-12)

- [x] **S3-P5.1** `S3Form.jsx` 신규 ✅ — 4 fieldset:
  - (1) NotebookLM 페인포인트 5개 + 출처 + 핵심 페인포인트 1개
  - (2) Manyfast PRD 5요소 (문제 / 페르소나 / 핵심 기능 3개 / 성공 지표 / 제약사항)
  - (3) prd.md export 체크 + planning_project 경로 + README 한 줄
  - (4) 회고 3 질문 (NotebookLM / Manyfast 수정 / prd.md 핵심 3줄)
- [x] **S3-P5.2** `SubmitForm.jsx` — s3 분기 추가 ✅
- [x] **S3-P5.3** `/admin` — `SUBMIT_SUPPORTED_SLUGS`에 `'s3'` 추가 ✅
- **빌드 재검증** ✅ — `/sessions/[slug]/submit` 5.3 → 6.95 kB (S3Form 통합), 9/9 페이지 통과

---

## Phase 6 — 강사 검증 + 결함 수정 사이클 (2026-05-13)

> 입력: `lectures/S3/request.md` (강사 결함 보고 2차)
> 범위: 이론 4건 + 실습 3건 = **결함 7건**
> Task 설계 규칙: 한 Task = 한 결함, 변경 대상 파일 inline 코드, request 원문 인용

### 이론 결함

- [x] **S3-T6.1** 이론 #12 (정의 줄바꿈) — `s3/theory/12-c2-e1-problem.jsx`
  - request: '"문제는 PRD의 출발점이다. <br> 무엇을 위해 이 제품이 존재하는지의 핵심 질문에 답한다."'
  - 처리: 정의 본문에 `<br>` 줄바꿈 + 디자인 패턴 일관 개선

- [x] **S3-T6.2** 이론 #12~15 본문 폰트 + 디자인 개선 — `s3/theory/12-15-*.jsx` (4 파일)
  - request: '#12 ~ 15 본문 텍스트 크기 키우기 및 디자인 개선.'
  - 처리: 좌측 "정의와 목적" 카드 전체 재설계 — `bg-bg-soft` 배경 + accent eyebrow + `text-lg font-semibold border-l-2 border-accent pl-4` 본문 강조 + 보조 ul `text-sm → text-base`

- [x] **S3-T6.3** 이론 #15 (지표 줄바꿈) — `s3/theory/15-c2-e4-metrics.jsx`
  - request: '"측정 불가능하면 지표가 아니다.<br> Before / After / 측정 방법 세 축으로 정의한다."'
  - 처리: 본문 `<br>` 줄바꿈 (T6.2와 동일 처리에 통합)

- [x] **S3-T6.4** 이론 #17 본문 폰트 + 디자인 개선 — `s3/theory/17-c2-e5-constraints.jsx`
  - request: '#17 본문 텍스트 크기 키우기 및 디자인 개선.'
  - 처리: T6.2와 동일 패턴 (사용자 스토리 정의 본문에도 동일 개선 적용 + 본문 줄바꿈)

### 실습 결함

- [x] **S3-T6.5** 실습 #11 (1번 인용 부분) — `s3/activity/11-act-1-3-painpoints.jsx`
  - request: '1번에서 인용 부분 수정필요.'
  - 처리: 1번 (strong) cite를 `text-accent font-bold bg-success-soft border border-accent rounded px-2 py-0.5`로 강조 + 결론 문구 보강 ("인용 2건이 다른 항목보다 많아 빈도 신호가 가장 명확")

- [x] **S3-T6.6** 실습 #13 (Manyfast 전달 흐름) — `s3/activity/13-act-1-5-current-alt.jsx`
  - request: '현대 대안을 파악하고 이후 액션이 누락됨 -> 대안 파악 후 무엇을 거쳐서 ManyFast로 전달되는지 필요'
  - 처리: 슬라이드 하단에 "다음 액션 · Manyfast로 전달" 다이어그램 신규 (NotebookLM 산출 → 통합 정리 → Manyfast 입력 3 step)

- [x] **S3-T6.7** 실습 #17 (시드 6 입력 양식 폰트) — `s3/activity/17-act-2-2-prd-gen.jsx`
  - request: '시드 6번의 입력 양식 텍스트 크기 키우기'
  - 처리: 우측 시드 6 입력 양식 `<pre>` 폰트 `text-xs → text-sm`

### Phase 6 검증

- [x] **S3-T6.ε** npm build 통과 + 시각 확인
- [x] **S3-T6.σ** history.md § 0 "S3 Phase 6 결함 수정 완료 (7/7건)" 블록 추가
- [ ] **S3-T6.f** spec.md § 5 Final Sign-off 갱신 (강사 시각 재검증 후)

### 1차 검증 (보류)

- [⏳] **S3-T6.0** 1차 강사 시각 검증 — dev server 부팅 (인프라만 준비) / **본 2차 결함 7건이 1차 결과**
- **Playwright visual regression** (선택, slides-visual.spec.js) — S3 baseline 생성 시 SESSIONS 배열에 추가 가능. 현재 s1 only

---

## 미니 사이클 집계 (S3, 87장)

| 영역 | 미니 사이클 | 슬라이드 |
|---|---|---|
| 자동 생성 (T2.0a/b + T3.0) | 3 | 3 |
| 이론 §1 (T2.1) | 1 | 7 |
| 이론 §2 (T2.2+T2.3+T2.4) | 3 | 10 |
| 이론 §3 (T2.5) | 1 | 8 |
| 이론 §4 (T2.6+T2.7) | 2 | 8 |
| 이론 §5 (T2.8+T2.9) | 2 | 11 |
| **이론 소계** | **9 + 자동 2** | **46** |
| 실습 Step 0 (T3.1) | 1 | 6 |
| 실습 Step 1 (T3.2) | 1 | 7 |
| 실습 Step 2 (T3.3) | 1 | 7 |
| 실습 Step 3 (T3.4) | 1 | 6 |
| 실습 Step 4 (T3.5+T3.6) | 2 | 9 |
| 실습 Step N (T3.7) | 1 | 5 |
| **실습 소계** | **7 + 자동 1** | **41** |
| **총 합계** | **16 미니 사이클 + 자동 6** | **87장** |

---

## 핵심 적용 룰 (S1/S2와 동일)

- **미니 사이클 = `###` 섹션 단위** (D-034)
- **격리 호출 우선** (D-030, 메인 fall-back 허용)
- **자동 통과 룰** — δ'.0b 판정 (메타 슬라이드 D-031 예외)
- **회귀 제한** — 같은 `###` 3회 초과 → 강사 결정
- **100% coverage** — 사전(A.6) + 사후(ε.3)
- **emoji 학생 화면 0건** (D-035)
- **D-041 화살표 sequence 허용** + **D-042 패턴 props 확장** 적용
- **D-043 `planning_project` 고정** (A7)
- **D-044 student-project-reference.md SSOT** (A8)

---

## 변경 파일 매트릭스

### 폐기 (Phase 0)
- `src/components/slides/s3/theory/*.jsx` (35개)
- `src/components/slides/s3/theory/index.js`

### 신규
- `lectures/S3/profile.yaml`
- `lectures/S3/spec.md`
- `lectures/S3/captures/` (필요 시)
- `src/components/slides/s3/theory/*.jsx` (~46개, 재작성)
- `src/components/slides/s3/activity/*.jsx` (~41개)
- `src/components/slides/s3/activity/index.js`
- `src/components/submit/S3Form.jsx`

### 갱신
- `src/components/slides/s3/theory/index.js` (재작성)
- `src/lib/deck-registry.js` (S3 activity 등록)
- `src/components/submit/SubmitForm.jsx` (s3 분기)
- `src/app/admin/page.js` (`SUBMIT_SUPPORTED_SLUGS`)
- `history.md` (Phase 4 갱신)

### 재사용 (변경 X)
- `src/components/slides/patterns/*` (모든 패턴)
- `src/components/slides/types/*` (8타입 컴포넌트)
- Phase 5 인프라 (KV / API / 라우팅 / PasswordGate)

---

**[Task 목록 — Phase 0부터 진행, 87장 목표, 강사 lecture.md 작업 모두 완료, HIGH-1 폐기 확정]**
