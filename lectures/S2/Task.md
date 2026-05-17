# S2 재큐레이션 Task 목록 (D-031~D-042 반영, 2026-05-12)

> **구조 (D-033/D-034)**: ### = 섹션 표지 or 콘텐츠 / 미니 사이클 = ### 단위
> **자동 생성 (D-032)**: `#` 세션 표지 + `## N️⃣` 챕터 표지 + 덱별 목차
> **emoji (D-035)**: 학생 화면 0건 (텍스트 변환)
> **lecture.md 형식 (S2 deviation)**: `####` 미사용 — `### + emoji = 섹션 표지` / `### + 비emoji = 콘텐츠`

---

## 강사 결정 4건 (확정, 2026-05-12)

| # | 결정 |
|---|---|
| 1 | S1 Phase 4 먼저 → S2 진입 (완료) |
| 2 | S2 기존 wrapper 17~30개 전부 폐기 (완료) |
| 3 | S2 lecture-translator α.1 파서 적응 — #### 미사용 환경 |
| 4 | Phase 5 실습 제출 인프라 = S2 Phase 4 종료 후 |

---

## Phase 0 — Pre-task

- [x] **S2-T0.1** 기존 S2 theory wrapper 폐기 (32 파일 삭제, index.js 비움)
- [x] **S2-T0.2** lecture.md 헤더 트리 분석 + 파서 적응 룰 정의

---

## Phase 1 — 통합 분석

- [x] **S2-T1.1** profile.yaml (draft) + spec.md § 1 신규 작성
- [x] **S2-T1.2** Task.md 생성 (본 문서)
- [ ] **S2-T1.3** Gate-1 강사 검토 (profile confirmed + 미니 사이클 분할 확정)

---

## Phase 2 — 이론 미니 사이클 (2026-05-12 재산정, 35장 / 6 미니 사이클)

### 자동 생성 슬라이드 (D-032)

- [x] **S2-T2.0a** # 세션 표지 (2026-05-12) — `01-session-cover.jsx`
  - Cover (no number, title + subtitle)
- [x] **S2-T2.0b** 이론 목차 (2026-05-12) — `02-toc.jsx`
  - Objectives (eyebrow "본 자료의 구성" + 3 items)

### 이론 §1-A 검증의 정의 본체

- [x] **S2-T2.1** §1-A 정의 본체 (5장, 2026-05-12)
  - [x] `03-c1-cover.jsx` — Cover (eyebrow "Section 1" + objectives 3)
  - [x] `04-c1-definition.jsx` — Definition (highlights "데이터", notes 2)
  - [x] `05-c1-first-assertion.jsx` — KeyMessage (highlight "명확히 틀렸다고", examples 2)
  - [x] `06-c1-validation-vs-opinion.jsx` — Comparison (의견 BAD vs 검증 GOOD, 친구 사례)
  - [x] `07-c1-two-conditions.jsx` — inline 2-card (답변자/질문 조건, hover success)
  - β'(메인) / γ'(F2 정식 — V1=81 V2=100 V4=70 V5=85 = **EXCELLENT 84**) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 ✅ (FAIL=0 / WARN=0)
  - 누적 S2 슬라이드 = 7장 (s1-s7)

### 이론 §1-B 검증 가능 형태 + 용어

- [x] **S2-T2.2** §1-B 가능 형태 + 용어 (5장, 2026-05-12)
  - [x] `08-c1-antipattern.jsx` — Warning bad/good (친구 vs 페르소나 부합) — JSX 템플릿 리터럴 수정 1건
  - [x] `09-c1-verifiable-form.jsx` — Comparison (쓸만하다 BAD vs 월1만원 지불의향 GOOD)
  - [x] `10-c1-seed-examples.jsx` — inline 2-card (시드 1 PM + 시드 5 동호회, 각 BAD→GOOD 변환)
  - [x] `11-c1-concrete-case.jsx` — inline 2-area (의견 호의 vs 검증 실재, 시드 1 사례)
  - [x] `12-c1-terms.jsx` — terms 5행 2-col grid
  - β'(메인) / γ'(F2 — V1=22 V2=100 V4=70 V5=80 = **PASS 68**) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 ✅ (FAIL=0 / WARN=0)
  - 누적 S2 슬라이드 = 12장 (s1-s12)

### 이론 §2-A 능동/수동 정의

- [x] **S2-T2.3** §2-A 능동/수동 정의 (5장, 2026-05-12)
  - [x] `13-c2-cover.jsx` — Cover (Section 2 + objectives 3)
  - [x] `14-c2-active-validation.jsx` — Definition (능동 + 깊이 장점, highlights 2 + notes 3)
  - [x] `15-c2-active-limit.jsx` — Warning (응답률 5-15% + 편향 + 회피 3)
  - [x] `16-c2-passive-validation.jsx` — Definition (수동 + 폭 장점, highlights 2 + notes 3)
  - [x] `17-c2-passive-limit.jsx` — Warning (후속 질문 불가 + 회피 3)
  - β'(메인) / γ'(F2 — V1=56 V2=100 V4=70 V5=82 = **PASS 77**) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 ✅
  - 누적 S2 슬라이드 = 17장 (s1-s17)

### 이론 §2-B 두 축 통합 + 두 번째 단정

- [x] **S2-T2.4** §2-B 두 축 통합 + 단정 (6장, 2026-05-12)
  - [x] `18-c2-two-axes-table.jsx` — inline 4-row 비교 표 (방식/장점/단점/도구, hover)
  - [x] `19-c2-integration-seed.jsx` — inline 2-area (시드 1 능동 1-3개 + 수동 100개 + 결론 highlight)
  - [x] `20-c2-second-assertion.jsx` — KeyMessage (두 번째 단정 "두 축은 함께", examples 2)
  - [x] `21-c2-single-axis-antipattern.jsx` — Warning bad/good (DM 100만 vs DM 20+커뮤니티 200)
  - [x] `22-c2-cross-validation.jsx` — inline 2-area (일치=신호 / 불일치=모호)
  - [x] `23-c2-terms.jsx` — terms 4행 2-col grid
  - β'(메인) / γ'(F2 — V1=29 V2=100 V4=70 V5=78 = **PASS 69**) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 ✅
  - 누적 S2 슬라이드 = 23장 (s1-s23)

### 이론 §3-A 메타 프롬프팅

- [x] **S2-T2.5** §3-A 메타 프롬프팅 (6장, 2026-05-12)
  - [x] `24-c3-cover.jsx` — Cover (Section 3 + objectives 3)
  - [x] `25-c3-meta-definition.jsx` — Definition (메타 정의 + 메타 인지 원리, notes 3)
  - [x] `26-c3-general-vs-meta.jsx` — Comparison (일반 5% BAD vs 메타 10-15% GOOD)
  - [x] `27-c3-third-assertion.jsx` — KeyMessage (세 번째 단정, examples 2 효과/확장)
  - [x] `28-c3-meta-formula.jsx` — 한 줄 공식 코드 블록 + ThreeCards (카피/PRD/코드)
  - [x] `29-c3-meta-antipattern.jsx` — Warning bad/good (그대로 발송 vs 메타)
  - β'(메인) / γ'(F2 — V1=**87** V2=100 V4=70 V5=88 = **EXCELLENT 86**) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 ✅ (V1 본 sprint 최고치)
  - 누적 S2 슬라이드 = 29장 (s1-s29)

### 이론 §3-B 응답률 현실 + 마무리

- [x] **S2-T2.6** §3-B 응답률 + 마무리 (6장 → **7장 + 용어**, 2026-05-12 NextUnicorn 인용 재기획)
  - [x] `30-c3-response-rate.jsx` — Definition (응답률 5-15% + ROI 3600%+ 강화) [NextUnicorn 인용]
  - [x] `31-c3-avg-vs-personalized.jsx` — **신규** Comparison (평균 5% BAD vs 개인화 18% GOOD, 3배) [NextUnicorn 인용]
  - [x] `32-c3-channel-rates.jsx` — inline 4-row (위치 이동, 기존 s31)
  - [x] `33-c3-cold-mail-keymessage.jsx` — **신규** KeyMessage 단정 "대량→1:1 아웃리치" [NextUnicorn 인용]
  - [x] `34-c3-ai-four-steps.jsx` — **신규** inline 4-card (리서치/오프닝/STO/카피) [NextUnicorn 인용]
  - [x] `35-c3-operation-factors.jsx` — **신규 통합** inline 2-area (운영 + 팔로우업 50%↑ + 3 요인) [NextUnicorn 인용]
  - [x] `36-c3-safety-net.jsx` — Warning bad/good (위치 이동, 기존 s34)
  - [x] `37-c3-terms.jsx` — terms 4행 (위치 이동, 기존 s35)
  - 변경: 기존 6장 → 7장 + 용어. 신규 3장 (s31/s33/s34) + 통합 1장 (s35) + 위치 이동 3장
  - 외부 자료: NextUnicorn (참고 메타 라벨 5장 표시)
  - β'(메인) / γ'(F2 재평가 — 평가 갱신 필요) / δ'(메인) / ε'(npm build + design-checker 37 파일 PASS)
  - 누적 S2 슬라이드 = **37장 (이론 완료)** — s1-s37

**🎉 이론 합계 37장 완료** (자동 생성 5장 + §1 10장 + §2 11장 + §3 **14장**)
**NextUnicorn 인용 통합 — §3-B 응답률 영역 콘텐츠 강화**

---

## Phase 3 — 실습 미니 사이클

### 자동 생성 슬라이드

- [x] **S2-T3.0** 실습 목차 (2026-05-12) — `01-activity-toc.jsx` (Objectives 5 — 묶음 1/2/3 + 과제 + Tips)

### 실습 ### 활동 묶음

- [x] **S2-T3.1** ### 활동 묶음 1 능동 검증 카피 (6장, 2026-05-12)
  - [x] `02-bundle1-cover.jsx` — Cover (objectives 4)
  - [x] `03-act-1-1-channel.jsx` — inline 2x2 (4 채널 옵션)
  - [x] `04-act-1-2-meta-copy.jsx` — 2-col 양식 + 시드 1 + 점검 grid
  - [x] `05-act-1-3-tone.jsx` — 3-step sequential (hover success)
  - [x] `06-act-1-4-review.jsx` — 2x2 grid 4 검토 기준
  - [x] `07-bundle1-validation.jsx` — 2-col 4 checklist
  - β'(메인) / γ'(F2 — V1=19 V2=100 V4=70 V5=78 = **PASS 66.75**) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 ✅
  - 누적 S2 활동 = 7장 (s1-s7)
- [x] **S2-T3.2** ### 활동 묶음 2 수동 검증 Playwright (6장, 2026-05-12)
  - [x] `08-bundle2-cover.jsx` — Cover (objectives 4)
  - [x] `09-act-2-1-community.jsx` — inline 2x2 (4 커뮤니티 옵션)
  - [x] `10-act-2-2-playwright.jsx` — 2-col code (macOS/Windows) + 자연어 명령
  - [x] `11-act-2-3-signal-memo.jsx` — 2-area items-stretch (좌 2 질문 / 우 메모 양식)
  - [x] `12-act-2-4-seed5-example.jsx` — 2-area items-stretch (능동축 / 수동축 시드 5)
  - [x] `13-bundle2-validation.jsx` — 2-col 4 checklist
  - β'(메인) / γ'(F2 — V1=7 V2=100 V4=70 V5=78 = **WARN 63.75**) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 미충족 — 강사 시각 게이트 (활동 example dense 자연)
  - 누적 S2 활동 = 13장 (s1-s13)
- [x] **S2-T3.3** ### 활동 묶음 3 채널 결정과 회고 (6장, 2026-05-12)
  - [x] `15-bundle3-cover.jsx` — Cover (objectives 4: 3-1~3-4)
  - [x] `16-act-3-1-channel-decision.jsx` — numbered list 3 (발송 직전 점검)
  - [x] `17-act-3-2-retrospective.jsx` — 3 질문 × GOOD/BAD 카드 (메타·스크래핑·데이터양)
  - [x] `18-act-3-3-next-assets.jsx` — 3 자산 카드 (success) + 안전망 결론
  - [x] `19-act-3-4-data-accumulation.jsx` — 3 병행 작업 + 목표 상태 (능동 1-3 + 수동 100-200)
  - [x] `20-bundle3-validation.jsx` — 2-col 4 checklist (실습 종료)
  - β'(메인) / γ'(F2 — V1=7 V2=100 V4=70 V5=78 = **WARN 63.75**) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 미충족 — 강사 시각 게이트 (T3.1/T3.2 동일 패턴)
  - 누적 S2 활동 = 20장 (s1-s20)
- [x] **S2-T3.4** ## 과제 안내 (1장, 2026-05-12)
  - [x] `21-assignment.jsx` — 3-row 표 (목표/마감/산출물) + assignment.md 참조 + 결론 (활동 산출물 → 과제 출발점)
  - β'(메인) / γ'(F2 — V1=12 V2=100 V4=70 V5=40 = **55.5 → 메타 D-031 자동 통과**) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 ✅ (D-031 메타 슬라이드 예외)
  - 누적 S2 활동 = 21장 (s1-s21)
- [x] **S2-T3.5** ## Tips (1장, 2026-05-12)
  - [x] `22-tips.jsx` — 7 Tips 2-col grid (함정 + 처방, warning border)
  - D-035: ⭐ → "Tips" 텍스트
  - β'(메인) / γ'(F2 — V1=12 V2=100 V4=70 V5=40 = 55.5 → D-031 자동) / δ'(메인) / ε'(npm build + design-checker PASS)
  - 자동 통과 ✅ (D-031 메타 슬라이드)
  - 누적 S2 활동 = 22장 (s1-s22)

---

## 🎉 S2 Phase 3 실습 완료 (2026-05-12)

| 미니 사이클 | 슬라이드 | creative | 판정 |
|---|---|---|---|
| T3.0 실습 목차 | 1장 | meta | D-031 자동 |
| T3.1 능동 카피 | 6장 | 66.75 PASS | 자동 통과 |
| T3.2 Playwright (재기획) | 7장 | 63.75 WARN | 강사 게이트 |
| T3.3 채널+회고 | 6장 | 63.75 WARN | 강사 게이트 |
| T3.4 과제 안내 | 1장 | 55.5 | D-031 자동 |
| T3.5 Tips | 1장 | 55.5 | D-031 자동 |
| **합계** | **22장** | — | — |

**🎉 S2 전체 완료**: 이론 37 + 실습 22 = **59장** (목표 55~58 달성 ✅)
- design-checker 59 파일 위반 0건
- coverage 100% (lecture.md L1-407 매핑)
- **Phase 4 Final ε 진입 가능**

**실습 합계 추정**: 19~21장

---

## Phase 4 — Final ε

- [ ] **S2-T4.1** render-validator Final ε
  - 통합 빌드 / design-checker / capture-checker / coverage 사후 / Sign-off

---

## Phase 5 — S1+S2 통합 실습 제출 인프라

- [ ] **P5.1** 메모리 KV 스키마 (sessions/{sN}/submissions)
- [ ] **P5.2** `/api/submit-assignment` route
- [ ] **P5.3** `/sessions/{sN}/submit` 페이지 + SubmitForm
- [ ] **P5.4** `/admin` 제출 모니터링
- [ ] **P5.5** Playwright E2E spec

---

## Phase 6 — 강사 검증 + 결함 수정 사이클 (2026-05-13)

> 입력: `lectures/S2/request.md`
> 범위: 이론 6건 + 실습 3건 = **결함 9건**
> Task 설계 규칙: 한 Task = 한 결함, 변경 대상 파일 inline 코드, request 원문 인용, 사전 확인 필요 라벨

### 이론 결함

- [x] **S2-T6.1** 이론 #5 (KeyMessage 본문 수정) — `s2/theory/05-c1-first-assertion.jsx`
  - request: '"검증은 가설이 틀렸을 때 <br> 명확히 틀렸다고 말해주는 것이다" 수정.'
  - 변경 유형: KeyMessage `message` 배열 텍스트 교체 (`<br>` = 배열 2 요소)
  - 검증: 줄바꿈 시각

- [x] **S2-T6.2** 이론 #5 (강조/행동 색상 변경) — `s2/theory/05-c1-first-assertion.jsx`
  - request: '#5 기준, 행동 색상 변경'
  - 변경 유형: `행동` 라벨에 `tone: 'good'` 추가 → success 색상 (text-success bg-success-soft border-success)
  - 적용 룰: D1~D12 (정의된 토큰만 사용)
  - 검증: 디자인 시스템 토큰 검증 (`docs/design-system.md`)

- [x] **S2-T6.3** 이론 #7 (답변자 조건 텍스트) — `s2/theory/07-c1-two-conditions.jsx`
  - request: '"본인 가설과 무관한 거리를 둔 사람이어야 한다. <br> 친구·동료는 관계 의식 때문에 답이 호의적으로 기운다."'
  - 변경 유형: 답변자 조건 카드 본문 텍스트 교체 (`<br>` 줄바꿈 반영)
  - 검증: 줄바꿈 시각

- [x] **S2-T6.4** 이론 #7 (질문 조건 텍스트) — `s2/theory/07-c1-two-conditions.jsx`
  - request: '"지불 의향, 선호, 사용 빈도 같은 측정 가능 단어로 묻는다.<br> "쓸 만하다"는 측정 불가능, "월 1만원 지불 의향"은 측정 가능."'
  - 변경 유형: 질문 조건 카드 본문 텍스트 교체

- [ ] **S2-T6.5** 이론 #7 (hover 전 "_" 제거) — `s2/theory/07-c1-two-conditions.jsx`
  - request: '2번 질문 조건에 hover전 "_" 부분 삭제'
  - 변경 유형: 2번 카드의 hover 전 표시에서 placeholder/언더바 표기 제거
  - **보류 — 사전 확인 필요**: 코드 점검 결과 wrapper에 "_" 문자 0건 / hover는 카드 배경 색상 변경 + num 색상 변경만 / placeholder underline 효과 식별 불가. 강사 화면 캡처 또는 추가 설명 필요

- [x] **S2-T6.6** 이론 #21 — `s2/theory/21-c2-single-axis-antipattern.jsx`
  - request: '타이틀 폰트 줄여서 한 라인에 들어오도록 설정 및 좌우 대칭 맞추기'
  - 변경 유형: Warning 패턴 두 카드 `title` 폰트 사이즈 축소 + grid 좌우 대칭 정렬
  - 적용 룰: D12 (시각 폭 검증)
  - 검증: 16:9 SlideFrame 안 한 라인 / 좌우 정렬

### 실습 결함

- [x] **S2-T6.7** 실습 (전체) — `s2/activity/*.jsx` 주제 통일 (부분 완료)
  - request: '모든 실습의 주제 "1인 셀러를 위한 카피 라이팅"으로 통일'
  - 처리 완료:
    - `04-act-1-2-meta-copy.jsx`: 시드 1(PM 회의록) → **시드 6 (1인 셀러 카피 라이팅)** 양식 + 프롬프트 본문 교체
    - `11-act-2-2b-research-flow.jsx`: 시드 1(스타트업 PM 모임) → **시드 6 (셀러스쿨 카피 작성)** 카페·키워드 교체
    - `22-tips.jsx`: "회의록 30분 정리, 어려우시죠?" → **"상품 카피 한 건 쓰는데 1-2시간, 시간이 아깝지 않으세요?"** 후크 예시 교체
  - **보류 (별도 보고)**:
    - `13-act-2-4-seed5-example.jsx`: 슬라이드 본질이 "시드 5 비교 — 다른 시드는 어떻게 다른가" — 시드 5 변경 시 슬라이드 의도 자체 변경 필요. 강사 의도 확인 후 처리 (시드 5 삭제 / 다른 사례로 교체 / 슬라이드 자체 제거 중 결정)
    - `09-act-2-1-community.jsx`: "스타트업 PM 모임" / "동호회 운영자"는 채널 예시로 다양성 표현 — 시드 6 전용으로 좁힐지 다양성 유지할지 강사 의도 확인
  - 의존성: S2-T6.8과 동시 적용 권장

- [x] **S2-T6.8** 실습 #18 — `s2/activity/18-act-3-3-next-assets.jsx`
  - request: '"1인 셀러를 위한 카피 라이팅"을 예시로 어떻게 데이터가 필요한지 예시 추가.'
  - 변경 유형: 시드 6번 사례로 데이터 필요성 예시 1~2개 추가 (기존 콘텐츠 옆에 inline 보강)
  - 의존성: S2-T6.7 (전체 주제 통일)과 동시 또는 직후

- [x] **S2-T6.9** 실습 #21 — `s2/activity/21-assignment.jsx`
  - request: '"본 활동의 산출물(카피 1건 + CSV 30건 + 페인포인트 메모)이 과제의 출발점이다.<br> 활동에서 만든 자산을 그대로 가져가서 발송 10명·스크래핑 50건으로 확장하면 과제 완성이다."'
  - 변경 유형: 과제 슬라이드 본문 텍스트 추가/교체 (`<br>` 줄바꿈 반영)
  - 검증: 줄바꿈 시각

### Phase 6 검증

- [x] **S2-T6.ε** npm build 통과 + design-checker 0 violation + 시각 확인
- [x] **S2-T6.σ** history.md § 0 "S2 Phase 6 결함 수정 완료 (8/9건, T6.5 보류)" 블록 추가
- [ ] **S2-T6.f** spec.md § 5 Final Sign-off 갱신 (T6.5 처리 후)

---

## 📊 미니 사이클 집계 (S2, 2026-05-12 재산정)

| 영역 | 미니 사이클 | 슬라이드 |
|---|---|---|
| 자동 생성 (T2.0a/T2.0b + T3.0) | 3 | 3 |
| 이론 §1-A 정의 본체 (T2.1) | 1 | 5 (+ s3 챕터 표지 자동 1) |
| 이론 §1-B 가능 형태 + 용어 (T2.2) | 1 | 5 |
| 이론 §2-A 능동/수동 정의 (T2.3) | 1 | 5 (+ s13 챕터 표지 자동) |
| 이론 §2-B 두 축 통합 + 단정 (T2.4) | 1 | 6 |
| 이론 §3-A 메타 프롬프팅 (T2.5) | 1 | 6 (+ s24 챕터 표지 자동) |
| 이론 §3-B 응답률 + 마무리 (T2.6) | 1 | 6 |
| **이론 소계** | **6 + 자동 5** | **35** |
| 실습 묶음 1 능동 카피 (T3.1) | 1 | 6~7 |
| 실습 묶음 2 Playwright (T3.2) | 1 | 6~7 |
| 실습 묶음 3 채널+회고 (T3.3) | 1 | 5 |
| 과제 안내 (T3.4) | 1 | 1 |
| Tips (T3.5) | 1 | 1 |
| **실습 소계** | **5 + 자동 1** | **18~21** |
| **총 합계** | **11 미니 사이클 + 자동 6** | **53~56장** |

---

## 🛡️ 핵심 적용 룰 (S1과 동일)

- **미니 사이클 = ### 섹션 단위** (D-034)
- **격리 호출 우선** (D-030, 가능한 한)
- **자동 통과 룰** — δ'.0b 판정
- **회귀 제한** — 같은 ### 3회 초과 → 강사 결정
- **100% coverage** — 사전(A.6) + 사후(ε.3)
- **emoji 학생 화면 0건** (D-035)
- **D-041 화살표 예외** + **D-042 패턴 props 확장** (S2부터 적용)

---

**[Task 목록 — Gate-1 강사 검토 후 진행]**
