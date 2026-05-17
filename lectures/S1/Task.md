# S1 재큐레이션 Task 목록 (D-031~D-035 반영)

> **구조 재해석 (D-033)**: `###` = 섹션 표지 / `####` = 세부 콘텐츠
> **미니 사이클 단위 (D-034)**: `###` 섹션 전체 (표지 1장 + 모든 #### 콘텐츠) = 1 미니 사이클
> **자동 생성 (D-032)**: `#` 세션 표지 + `## 이론`/`## 실습` 덱별 목차
> **emoji (D-035)**: 학생 화면 0건 (메타 표기 포함)

---

## 강사 결정 8건 (확정)

| # | 결정 | D-NNN |
|---|---|---|
| 1 | 기존 wrapper 전부 폐기 | — |
| 2 | profile 통합 (단일 yaml) | — |
| 3 | 실습 제출 = 메모리 fallback 우선 | — |
| 4 | 실습 제출 위치 = `/sessions/s1/submit` 별도 페이지 | — |
| 5 | lecture-translator 파서 적응 | — |
| 6 | 메타 슬라이드 자동 통과 예외 | D-031 |
| 7 | 자동 생성 슬라이드 (# 표지 + ## 덱별 목차) | D-032 |
| 8 | ### = 섹션 표지 / 미니 사이클 = ### 단위 / emoji 완전 제거 | D-033, D-034, D-035 |

---

## Phase 0 — Pre-task (완료)

- [x] **T0.1** 기존 64장 wrapper 전부 제거 (백업 X)
- [x] **T0.2** lecture.md 재참조 (977줄)
- [x] **T0.3** lecture-translator α.1 파서 적응 (D-033/D-034/D-035 반영)
- [x] **T0.4** SSOT 정합성 갱신 — decisions.md / lecture-format.md § 9 / slide-types.md § 2 § 7 / lecture-translator NEVER / CLAUDE.md § 5 NEVER 6 / design-system D1/D11 / curation-workflow / quality-judge A.7

---

## Phase 1 — 통합 분석 (재실행 필요)

- [x] **T1.1** lecture-translator α 격리 호출 (구버전 — 재실행 필요)
- [x] **T1.2** Gate-1 (구버전 결과 기반)
- [ ] **T1.3 ⭐ NEW** lecture-translator α **재실행** (D-031~D-035 반영 신규 파서)
  - α.1a/α.1b/α.1c 새 헤더 분류 + 자동 생성 + 미니 사이클 묶음
  - spec.md § 1 재작성
  - profile.yaml expected_slide_count 재계산
- [ ] **T1.4 NEW** Gate-1 재검토 (새 결과 기반)

---

## Phase 2 — 이론 미니 사이클 (D-034 = ### 섹션 단위)

### 자동 생성 슬라이드 (D-032)

- [x] **T2.0a** # 세션 전체 표지 (완료) — `01-session-cover.jsx`
- [x] **T2.0b** 이론 목차 (완료) — `02-toc.jsx`

### §1 기획이란 무엇인가 (### 섹션 = 1 미니 사이클)

미니 사이클 슬라이드: ### 표지 1장 + 7개 #### 콘텐츠 슬라이드 = 약 13장

- [x] **T2.1** ### 1️⃣ 기획이란 무엇인가 — 섹션 표지 (완료) — `03-c1-cover.jsx`
- [x] **T2.1.x** §1 미니 사이클 #### 콘텐츠 5장 (완료, 2026-05-11)
  - [x] `04-c1-definition-main.jsx` — Definition (notes 2개, 회귀 후)
  - [x] `05-c1-three-questions.jsx` — ThreeCards (3 핵심 질문)
  - [x] `06-c1-good-vs-bad.jsx` — Comparison
  - [x] `07-c1-first-assertion.jsx` — KeyMessage
  - [x] `08-c1-antipattern-example.jsx` — Warning (D-035 자동 수정 1건: → 제거)
  - β'/γ'/δ'/ε' 5단계 모두 PASS (회귀 1회 후)
  - 미니 사이클 T2.1 = 6장 (섹션 표지 + 콘텐츠 5장) **완료**

> ⚠️ 참고: `### 문제는 한 번에 정의되지 않는다` / `#### 기획 5단계 프레임` / `#### 페르소나의 3단계 진화` / `#### 1️⃣ 챕터 용어 해설`은 **별도 ### 섹션이거나 다른 미니 사이클** — T1.3 재분석 결과 17 미니 사이클로 재집계됨.

### §1.5 ### 문제는 한 번에 정의되지 않는다 (D-033 분리)

- [x] **T2.2** ### 문제는 한 번에 정의되지 않는다 — 미니 사이클 (3장, 2026-05-11)
  - [x] `09-c2b-cover.jsx` — Cover
  - [x] `10-c2b-symptom-vs-problem.jsx` — Definition
  - [x] `11-c2b-five-whys-example.jsx` — StepGuide → **세로 inline JSX 교체** (T2.2 후 #11 깨짐 → D-039/D-040 신설)

- [x] **T2.3** ### 문제는 한 번에 (#### 부분) + ### 챕터 용어 해설 (5장, 2026-05-11)
  - [x] `12-c2b-5stage-framework.jsx` — 5단계 sequential inline JSX (ProcessSlide 부재)
  - [x] `13-c2b-hypothesis-keymessage.jsx` — KeyMessage (eyebrow + highlight + BAD/GOOD examples)
  - [x] `14-c2b-persona-evolution.jsx` — 3단계 진화 inline JSX
  - [x] `15-c2b-proto-persona-scope.jsx` — Definition (notes 3개 + highlights 3개)
  - [x] `16-c1-terms.jsx` — 8행 용어 표 inline grid (Terms 패턴 부재)
  - **신규 룰 D-039/D-040 첫 적용** — 패턴 적합성 매트릭스 (StepGuide 폐기)

### §2 AI 시대 기획의 변화 (### 섹션 = 1 미니 사이클)

- [x] **T2.4** ### 2️⃣ AI 시대 기획의 변화 — 미니 사이클 (6장, 2026-05-11)
  - [x] `17-c2-cover.jsx` — Cover (objectives 3)
  - [x] `18-c2-research.jsx` — PastVsPresent (리서치)
  - [x] `19-c2-documentation.jsx` — PastVsPresent (문서화)
  - [x] `20-c2-validation-cycle.jsx` — PastVsPresent (검증 사이클)
  - [x] `21-c2-scraping-analysis.jsx` — inline 2영역 (스크래핑 + 분석)
  - [x] `22-c2-5areas-summary.jsx` — inline 5행 표 + summary
  - **신규 패턴 `PastVsPresent.jsx` 생성** (D-040 적용, neutral 좌우 비교)

### §2.5 ### 두 번째 단정 (D-033 분리)

- [x] **T2.5** ### 두 번째 단정 — 미니 사이클 (5장, 2026-05-11)
  - [x] `23-c2-2nd-assertion.jsx` — KeyMessage ("AI는 기획을 대신하지 않는다")
  - [x] `24-c2-judgment-domain.jsx` — 3-row 표 (변하지 않은 것: 판단의 영역)
  - [x] `25-c2-ai-persona-limit.jsx` — 좌우 비교 (AI 가능 vs 못함)
  - [x] `26-c2-tool-separation.jsx` — 5행 도구 표
  - [x] `27-c2-terms.jsx` — 5행 용어 표

### §3 출처 검증의 실전 (### 섹션 = 1 미니 사이클)

- [x] **T2.6** ### 3️⃣ 출처 검증의 실전 — 미니 사이클 (6장, 2026-05-11)
  - [x] `28-c3-cover.jsx` — Cover (objectives 3)
  - [x] `29-c3-fake-statistics.jsx` — inline custom (위험도 최대, danger)
  - [x] `30-c3-fake-quote.jsx` — inline custom (위험도 중간, warning)
  - [x] `31-c3-fake-source.jsx` — inline custom (위험도 경량, success)
  - [x] `32-c3-3rd-assertion.jsx` — KeyMessage (세 번째 단정)
  - [x] `33-c3-fake-patterns-summary.jsx` — inline 3-row 표 (color-coded)
  - **D-035 적용**: emoji 🔴🟡🟢 → "위험도: 최대/중간/경량" 텍스트
  - **D-040 적용**: 패턴 적합성 — Warning 변형 inline (코드 블록 보존)
  - β'(메인) / γ'(메인 F2 방식 정식) / δ'(메인) / ε'(npm build PASS)
  - 자동 통과 (FAIL=0 / V4=40 권고만)
  - **미니 사이클 T2.6 = 6장 완료 — 사용자 시각 확인 대기**

### §3.5 ### 출처 검증 3단계 — 1단계: 클릭 (D-033 분리)

- [x] **T2.7** ### 출처 검증 3단계 — 미니 사이클 (5장, 2026-05-11)
  - [x] `34-c3-step1-click.jsx` — inline hybrid (### 섹션 표지 = 1단계 콘텐츠 자체)
  - [x] `35-c3-step2-original.jsx` — numbered checklist 4 항목 (hover-expand)
  - [x] `36-c3-step3-trust.jsx` — numbered checklist 3 항목 (hover-expand)
  - [x] `37-c3-flow-summary.jsx` — sequential 3 step + 통과/실패 분기 (3-col grid)
  - [x] `38-c3-terms.jsx` — §3 챕터 용어 7행 (2-col grid)
  - **D-035 적용**: ✅/❌ → "통과/실패" 텍스트
  - **D-040 적용**: sequential = inline JSX (StepGuide 부적합 회피)
  - β'(메인) / γ'(메인 F2) / δ'(메인) / ε'(npm build PASS)
  - **자동 통과 미충족** (creative 62.75 < 65) — sequential 3 step 구조상 자연, 강사 시각 게이트
  - **이론 미니 사이클 완료** — 누적 38장 (s1-s38)

---

## Phase 3 — 실습 미니 사이클

### 인프라 (선행 작업, 2026-05-11)

- [x] **T3-INF.1** `src/components/slides/patterns/ActivitySlide.jsx` 신규 패턴 — props 7개 (activity_number / title / goal / procedure / checklist / duration / deliverable)
- [x] **T3-INF.2** `src/components/slides/s1/activity/` 폴더 + `index.js` 생성
- [x] **T3-INF.3** `src/lib/deck-registry.js` S1 entry에 `activity` 덱 등록

### 자동 생성 슬라이드 (D-032)

- [x] **T3.0** 실습 목차 (2026-05-11) — `01-activity-toc.jsx`
  - Objectives 패턴 재사용 (theory/02-toc 동형)
  - eyebrow: "실습의 흐름" / 6개 미니 사이클 제목
  - D-035: 🌱/⭐ 제거 텍스트화
  - 메타 슬라이드 자동 통과 (D-031)
  - `npm build` PASS

### 실습 ### 섹션 별 미니 사이클

- [x] **T3.1** ### 🌱 시드 아이디어 6개 — 미니 사이클 (3장, 2026-05-11)
  - [x] `02-seeds-cover.jsx` — Cover + 실습 산출물 카드 (eyebrow "Seeds")
  - [x] `03-seeds-list.jsx` — 6행 시드 표 (#/이름/페르소나/핵심 가치, 시드 6 강조 — 본 실습 사용)
  - [x] `04-seeds-guide.jsx` — 복잡도 정렬 (5<1<2<3<6<4) + 작업자 가이드 3 + 변형 3건
  - D-035: 🌱 / ⭐ / 🎯 모두 제거 → "Seeds" / "본 실습 사용" 텍스트
  - β'(메인) / γ'(메인 F2) / δ'(메인) / ε'(npm build PASS)
  - 누적 활동 4장 (s1-s4)
- [x] **T3.2** ### 활동 묶음 1 — 미니 사이클 (6장, 2026-05-11)
  - [x] `05-bundle1-cover.jsx` — Cover (eyebrow "활동 묶음 1" + objectives 4 — 1-1/1-2/1-3/1-4)
  - [x] `06-act-1-1-idea-selection.jsx` — 3 STEP (빈 양식 + 시드 6 적용 + 적합성 점검 2 + 체크 4)
  - [x] `07-act-1-2-five-whys.jsx` — 5 Whys sequential 5단계 + 진짜 문제 highlight
  - [x] `08-act-1-3-ai-research.jsx` — 프롬프트 양식 2-col + 출처 점검 분기 (있음/없음 + 폐기)
  - [x] `09-act-1-4-source-verify.jsx` — 3단계 + 거짓 메모 양식 + 시드 6 적용 + 1차 리서치 정리
  - [x] `10-bundle1-validation.jsx` — 7 체크리스트 (2-col numbered + 체크박스 dot)
  - D-035: ✅/❌ 모두 텍스트화 (있음/없음/검증 기준/폐기)
  - D-040: 활동 = inline custom (빈 양식 + 적용 예시 패턴 / 콘텐츠 매우 dense)
  - β'(메인) / γ'(메인 F2) / δ'(메인) / ε'(npm build PASS)
  - 누적 활동 10장 (s1-s10)
- [x] **T3.3** ### 활동 묶음 2 — 미니 사이클 (5장, 2026-05-11)
  - [x] `11-bundle2-cover.jsx` — Cover + objectives 3 (2-1/2-2/2-3)
  - [x] `12-act-2-1-problem-def.jsx` — 빈 양식 + 시드 6 + 위험 grid + 자가 점검 3
  - [x] `13-act-2-2-persona.jsx` — 빈 양식 + 시드 6 + 결정적 2줄 강조 (동기/검증채널 warning)
  - [x] `14-act-2-3-hypotheses.jsx` — 형식 2 + 검증 가능성 BAD/GOOD + 가설 3개 (페인포인트 매핑)
  - [x] `15-bundle2-validation.jsx` — 7 체크리스트
  - β'/γ'/δ'/ε' 메인

- [x] **T3.4** ### 활동 묶음 3 — 미니 사이클 (5장, 2026-05-11)
  - [x] `16-bundle3-cover.jsx` — Cover + objectives 3
  - [x] `17-act-3-1-declaration.jsx` — 빈 양식 + 시드 6 + 검증 방법 BAD/GOOD
  - [x] `18-act-3-2-retrospective.jsx` — 3 질문 × GOOD/BAD 카드
  - [x] `19-act-3-3-next-entry.jsx` — 3 자산 카드 (success) + 후크 결론
  - [x] `20-bundle3-validation.jsx` — 4 체크리스트 (2-col)

- [x] **T3.5** ### 과제 안내 (1장, 2026-05-11)
  - [x] `21-assignment.jsx` — 3행 표 (목표/마감/산출물) + 결론

- [x] **T3.6** ### Tips: 함정과 처방 (1장, 2026-05-11)
  - [x] `22-tips.jsx` — 10 Tips 2-col (함정 + 처방) — D-035: ⭐ 제거 → "Tips" 텍스트

**Phase 3 실습 완료** — 활동 22장 (s1-s22), 이론 38장 + 활동 22장 = **누적 60장**

---

## Phase 4 — Final ε (통합 검증)

- [ ] **T4.1** render-validator Final ε
  - 통합 빌드 / capture-checker / coverage 사후 검증 / Sign-off

---

## Phase 5 — 실습 제출 인프라

- [ ] **T5.1** 메모리 KV 스키마 설계
- [ ] **T5.2** `/api/submit-assignment` route
- [ ] **T5.3** `/sessions/s1/submit` 페이지 + SubmitForm
- [ ] **T5.4** `/admin` 제출 모니터링
- [ ] **T5.5** Playwright E2E spec

---

## Phase 6 — 강사 검증 + 결함 수정 사이클 (2026-05-13)

> 입력: `lectures/S1/request.md`
> 범위: 이론 2건 + 실습 2건 = **결함 4건**
> Task 설계 규칙: 한 Task = 한 결함, 변경 대상 파일 inline 코드, request 원문 인용, 사전 확인 필요 라벨

### 이론 결함

- [x] **S1-T6.1** 이론 #12 — `s1/theory/12-c2b-5stage-framework.jsx`
  - request: "좌측에 01, 02, 03, 04, 05 별로 화살표 표시하고 예시 작성해줘."
  - 변경 유형: 시각 구조 보강 (5단계 sequential 좌측 번호 01~05 + 화살표 + 단계별 예시 1줄)
  - 적용 룰: D-041 (sequence 화살표 예외 허용 4종)
  - 검증: 시각 확인 + npm build

- [x] **S1-T6.2** 이론 #13 — `s1/theory/13-c2b-hypothesis-keymessage.jsx`
  - request: '"첫 가설이 그대로 살아남는 비율은 평균 30% 미만. <br> 검증 결과 가설이 틀렸다면 그것은 실패가 아니라 학습이다." 수정'
  - 변경 유형: KeyMessage `message` 배열 텍스트 교체 (`<br>` = 배열 2 요소로 줄바꿈)
  - 검증: 줄바꿈 시각 / hover 작동

### 실습 결함

- [x] **S1-T6.3** 실습 #2 — `s1/activity/02-seeds-cover.jsx`
  - request: '"본인 아이디어가 없거나 막연한 작업자를 위한 시드 6개. <br> 본인 아이디어가 있으면 그것을, 없으면 시드 1개를 선택한다."'
  - 변경 유형: 시드 소개 한 단락 텍스트 교체 (`<br>` 줄바꿈 반영)
  - 검증: 텍스트 시각 + npm build

- [x] **S1-T6.4** 실습 #6 — `s1/activity/06-act-1-1-idea-selection.jsx`
  - request: '"왜 내가?" -> "1인 셀러 카페·커뮤니티 다수 존재, 본인 주변 부업 셀러 접근 가능"의 내용을 잘 이해하지 못하겠음.'
  - 변경 유형: 텍스트 명확화 — "왜 내가?" 질문에 대한 답을 자연스러운 풀어쓰기 문장으로 교체
  - **사전 확인 필요**: 강사가 "잘 이해하지 못하겠음"이라 메모만 — 실행 단계 진입 전 강사와 문구 협의
  - 검증: 텍스트 시각

### Phase 6 검증

- [x] **S1-T6.ε** npm build 통과 + design-checker 0 violation + 시각 확인
- [x] **S1-T6.σ** history.md § 0 "S1 Phase 6 결함 수정 완료 (4건)" 블록 추가
- [ ] **S1-T6.f** spec.md § 5 Final Sign-off 갱신

---

## 📊 미니 사이클 재집계 (D-034)

| 영역 | ### 섹션 (미니 사이클) | 슬라이드 수 |
|---|---|---|
| 자동 생성 | # 표지 + 이론 목차 + 실습 목차 | 3장 |
| 이론 §1 기획이란 무엇인가 (1️⃣) | 1 미니 사이클 (T2.1) | ~12장 |
| 이론 §1.5 문제는 한 번에 X | 1 미니 사이클 (T2.2) | ~3장 |
| 이론 §2 AI 시대 (2️⃣) | 1 미니 사이클 (T2.3) | ~10장 |
| 이론 §2.5 두 번째 단정 | 1 미니 사이클 (T2.4) | ~1장 |
| 이론 §3 출처 검증 (3️⃣) | 1 미니 사이클 (T2.5) | ~7장 |
| 이론 §3.5 1단계 클릭 | 1 미니 사이클 (T2.6) | ~4장 |
| 실습 시드 (🌱) | 1 미니 사이클 (T3.1) | ~3장 |
| 실습 활동 묶음 1 | 1 미니 사이클 (T3.2) | ~6장 |
| 실습 활동 묶음 2 | 1 미니 사이클 (T3.3) | ~5장 |
| 실습 활동 묶음 3 | 1 미니 사이클 (T3.4) | ~5장 |
| 실습 과제 안내 | 1 미니 사이클 (T3.5) | ~1장 |
| 실습 ⭐ Tips | 1 미니 사이클 (T3.6) | ~1장 |
| **합계** | **12 미니 사이클 + 3 자동 생성** | **~61장** |

---

## 🛡️ 핵심 적용 룰 (갱신)

- **미니 사이클 = ### 섹션 단위** (D-034) — 1-15장 가변, 5장 한계는 #### 내부 ---에만
- **격리 호출 우선** (D-030) — 모든 agent
- **자동 통과 룰** — δ'.0b 판정 (메타 슬라이드는 D-031 예외)
- **회귀 제한** — 같은 ### 3회 초과 → 강사 결정
- **100% coverage** — 사전(A.6) + 사후(ε.3)
- **emoji 학생 화면 0건** (D-035) — 메타 포함

---

**[Task 목록 — D-031~D-035 반영 끝]**
