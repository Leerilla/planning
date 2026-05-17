# S9 Spec — 노출과 재피드백

> **세션**: S9 (9/9) — 노출과 재피드백 (본 학습의 마지막 자료)
> **lecture.md**: `lectures/S9/lecture.md` (1118줄, 직속 위치)
> **본 spec.md**: lecture-translator α (Phase 1 T1.1) 산출물 + 미니사이클 β/γ/δ/ε 누적
> **생성**: 2026-05-17 / Phase α 분석 완료, Gate-1 대기

---

## § 0. Meta

### 0.1 Session Identity

| 항목 | 값 |
|---|---|
| Session ID | S9 |
| 제목 | 노출과 재피드백 |
| 부제 | 검증된 MVP를 노출하고 4종 데이터로 살아있는 페르소나로 진화 — Pivot · Persevere · Kill |
| 메타 메시지 (A4) | 검증된 MVP를 실제 사용자에게 노출 → 응답·Clarity·Sentry·이벤트 추적 4종 데이터로 *살아있는 페르소나*로 진화 → Pivot · Persevere · Kill 결정 1개로 21시간 사이클 닫기 |
| lecture.md 줄 수 | 1118 |
| lecture.md 형식 | 표준 (S4~S8 동일) |
| 최종 세션 | ✅ (9세션 학습의 마지막 자료) |
| 이전 누적 | S8 `planning_project/` + Vercel/Railway 공개 URL + Clarity/Sentry/이벤트 추적 + 재피드백 메일 카피 + 컨택 리스트 10명+ |
| 신규 누적 | 노출 발송 + 4종 데이터 해석 + NotebookLM 재오픈 종합 + persona·prd 갱신 + Pivot/Persevere/Kill 결정 + 학습 회고 + 7종 신규 docs |

### 0.2 Source Files

| 파일 | 위치 | 책임 |
|---|---|---|
| lecture.md | `lectures/S9/lecture.md` | 강사 SSOT — 수정 절대 X (A2) |
| assignment.md | `lectures/S9/assignment.md` | 강사 SSOT |
| checklist.md | `lectures/S9/checklist.md` | 강사 SSOT |
| Task.md | `lectures/S9/Task.md` | 메인 T 단위 추적 |
| spec.md | `lectures/S9/spec.md` (본 파일) | 미니사이클 누적 산출 |
| profile.yaml | `lectures/S9/profile.yaml` | 자동 도출 + 추론 (T1.1 lecture-translator 산출) |
| 슬라이드 | `src/components/slides/s9/{theory,activity}/*.jsx` | δ' 산출물 (Phase 2-3 진행 시) |
| captures/ | `lectures/S9/captures/` | 빈 폴더 (외부 자료 슬롯) |

### 0.3 Build Status

| Phase | 상태 |
|---|---|
| Phase 0 (인프라) | ✅ 완료 (2026-05-17, T0.1~T0.4) |
| Phase 1 (α + Gate-1) | ⏳ 진행 중 (T1.1 lecture-translator ✓ / T1.2 본 작성 / T1.3 profile.yaml next / T1.4 Gate-1 대기) |

### 0.4 NEVER 7 (D-047) 시퀀스 룰

미니사이클(`###` 단위)당 4 sub-agent 호출 시퀀스 의무:
1. **β' layer-composer** — `####` 단위 interactive + visual + wireframe props 설계
2. **γ' quality-judge + creative-judge 병렬** — 감산 28축 + 가산 5축 + coverage 검증
3. **δ' lecture-translator** — 미니 사이클 빌드 실행 (.jsx 산출)
4. **ε' render-validator** — `####` 단위 + 통합 시각 검증

모든 T 단위 ⛳ 보고에 4단계 체크박스 + 호출 사유 의무.

---

## § 1. Header Tree + Coverage Map (lecture-translator α 산출)

### 1.1 Header Tree (정밀)

#### 이론 (`## 이론`, L15-506)

| ID | 라인 | 헤더 | 챕터 #### |
|---|---|---|---|
| **§1** | L17-101 | ### 1️⃣ 노출의 기획적 의미 | 7 |
| **§2** | L102-246 | ### 2️⃣ 세 축 데이터 해석 | 11 |
| **§3** | L247-368 | ### 3️⃣ 살아있는 페르소나로 진화 | 9 |
| **§4** | L369-506 | ### 4️⃣ 다음 사이클 결정과 학습 종합 | 10 |

**이론 #### 합계**: 37개

#### 실습 (`## 실습`, L507-1090)

| ID | 라인 | 헤더 | #### |
|---|---|---|---|
| **Step 0** | L534-599 | 환경 진단 | 4 + 검증 |
| **Step 1** | L600-668 | 노출 발송 | 5 + 검증 |
| **Step 2** | L669-722 | 응답 대기 운영 | 3 + 검증 |
| **Step 3** | L723-812 | 분석 도구 해석 | 6 + 검증 |
| **Step 4** | L813-885 | NotebookLM 종합 분석 | 4 + 검증 |
| **Step 5** | L886-958 | 페르소나·PRD 갱신 | 4 + 검증 |
| **Step 6** | L959-1042 | 다음 사이클 결정 + 회고 | 5 + 검증 |
| **Step N** | L1043-1090 | 산출물 + 학습 종료 | 3 + 검증 |

**실습 #### 합계**: 42개 (포함 검증 ####)

#### 과제 (`## 과제`, L1091-1101)
- 1 #### (assignment.md 링크 + 3행 표)

#### Tips (`## ⭐ Tips`, L1103-1115)
- 1 묶음 (10 bullets, 카테고리 분류 없음)

### 1.2 8타입 자동 매핑 분포 (lecture-translator α 측정값)

| 8타입 | 개수 | 비율 | 비고 |
|---|---|---|---|
| **concept** | 38 | 48% | 정의·원칙·기준 설명 중심 |
| **comparison** | 15 | 19% | 3축 표 多 (Pivot/Persevere/Kill 등) |
| **terms** | 8 | 10% | 4 챕터 용어 + 4 운영 용어 |
| **example** | 8 | 10% | ❌/✅ 안티·양호 패턴 |
| **process** | 5 | 6% | 이벤트 funnel / NotebookLM 흐름 등 |
| **quote** | 3 | 4% | blockquote 강조 (4 단정 중 3 인라인 강조) |
| **activity** | 2 | 2.5% | Step 0/3 검증 체크리스트 |
| **diagram** | 0 | 0% | 우선순위 8순위 → 미적용 |

**자동 매핑 근거**: `docs/slide-types.md § 2.2` 우선순위 규칙 적용.

### 1.3 자동 생성 슬라이드 (D-032/D-033, 15장)

| ID | 종류 | 패턴 | 라인 | 내용 |
|---|---|---|---|---|
| **t1** | 세션 표지 | Cover | L1 | "노출과 재피드백" + 학습 요약 |
| **t2** | 이론 목차 | Objectives | L15 | 4 챕터 목표 |
| **t3** | §1 챕터 표지 | Cover (D-033) | L17 | "노출의 기획적 의미" |
| **t-?** | §2 챕터 표지 | Cover (D-033) | L102 | "세 축 데이터 해석" |
| **t-?** | §3 챕터 표지 | Cover (D-033) | L247 | "살아있는 페르소나로 진화" |
| **t-?** | §4 챕터 표지 | Cover (D-033) | L369 | "다음 사이클 결정과 학습 종합" |
| **a1** | 실습 목차 | Objectives | L507 | 8 Step 목표 |
| **a-s0** | Step 0 표지 | Cover (D-033) | L534 | "환경 진단" |
| **a-s1** | Step 1 표지 | Cover (D-033) | L600 | "노출 발송" |
| **a-s2** | Step 2 표지 | Cover (D-033) | L669 | "응답 대기 운영" |
| **a-s3** | Step 3 표지 | Cover (D-033) | L723 | "분석 도구 해석" |
| **a-s4** | Step 4 표지 | Cover (D-033) | L813 | "NotebookLM 종합 분석" |
| **a-s5** | Step 5 표지 | Cover (D-033) | L886 | "페르소나·PRD 갱신" |
| **a-s6** | Step 6 표지 | Cover (D-033) | L959 | "다음 사이클 결정 + 회고" |
| **a-sN** | Step N 표지 | Cover (D-033) | L1043 | "산출물 + 학습 종료" |

**자동 생성 합계**: 15장

### 1.4 Coverage Map (100%)

| 라인 범위 | 콘텐츠 | 매핑 | 상태 |
|---|---|---|---|
| L1 | # 세션 제목 | t1 (자동 Cover) | full |
| L2-14 | 학습 목표 + intro | t1 + t2 (자동 Objectives) | full |
| L15 | ## 이론 헤더 | t2 wrapper | full |
| L17-23 | ### §1 헤더 + 학습목표 | §1 Cover (자동 D-033) | full |
| L24-101 | §1 7 #### | 7 슬라이드 | full |
| L102-108 | ### §2 헤더 + 학습목표 | §2 Cover (자동 D-033) | full |
| L109-246 | §2 11 #### | 11 슬라이드 | full |
| L247-253 | ### §3 헤더 + 학습목표 | §3 Cover (자동 D-033) | full |
| L254-368 | §3 9 #### | 9 슬라이드 | full |
| L369-375 | ### §4 헤더 + 학습목표 | §4 Cover (자동 D-033) | full |
| L376-506 | §4 10 #### | 10 슬라이드 | full |
| L507-532 | ## 실습 헤더 + 산출물 흐름 | a1 (자동 Objectives) | full |
| L534-599 | Step 0 (4 #### + 검증) | 5 슬라이드 (Cover + 4) | full |
| L600-668 | Step 1 (5 #### + 검증) | 6 슬라이드 (Cover + 5) | full |
| L669-722 | Step 2 (3 #### + 검증) | 4 슬라이드 (Cover + 3) | full |
| L723-812 | Step 3 (6 #### + 검증) | 7 슬라이드 (Cover + 6) | full |
| L813-885 | Step 4 (4 #### + 검증) | 5 슬라이드 (Cover + 4) | full |
| L886-958 | Step 5 (4 #### + 검증) | 5 슬라이드 (Cover + 4) | full |
| L959-1042 | Step 6 (5 #### + 검증) | 6 슬라이드 (Cover + 5) | full |
| L1043-1090 | Step N (3 #### + 검증) | 5 슬라이드 (Cover + 3 + ⭐ 학습 종착) | full |
| L1091-1101 | ## 과제 (assignment.md 링크) | 1 슬라이드 | full |
| L1103-1115 | ## ⭐ Tips (10 bullets) | 3 슬라이드 (Cover 1 + Content 2) | full |

**Coverage = 100%** (1118줄 모두 매핑 — skipped 0건)

### 1.5 슬라이드 합계

| 영역 | 슬라이드 |
|---|---|
| 자동 (세션 1 + 이론 목차 1 + 실습 목차 1 + 챕터 표지 4 + Step 표지 8) | 15 |
| 이론 콘텐츠 (37 ####) | 37 |
| 실습 콘텐츠 (35 #### + 검증 7 → 통합 슬라이드) | ~35 |
| ⭐ 학습 종착 슬라이드 (Step N 마지막) | 1 |
| 과제 | 1 |
| Tips (Cover 1 + Content 2) | 3 |
| **총** | **~92** |

S8 (122장) 대비 -25%. lecture.md 0.65배 + 신규 도구 0개 반영.

### 1.6 KeyMessage 4 단정 위치 (D-042)

| # | 라인 | 콘텐츠 | 슬라이드 ID 후보 | 챕터 |
|---|---|---|---|---|
| 1️⃣ | L35-37 | "검증된 MVP는 시장이 원하는 것과 다르다." | §1 첫 단정 | §1 |
| 2️⃣ | L121-123 | "한 사용자의 한 행동은 신호가 아니다. 패턴이 신호다." | §2 두 번째 단정 | §2 |
| 3️⃣ | L265-267 | "본 단계가 두 번째에서 세 번째로 가는 다리다." | §3 세 번째 단정 | §3 |
| 4️⃣ | L381-383 | "학습 종착점은 다음 결정을 손에 쥐는 것이다." | §4 네 번째 단정 | §4 |

**KeyMessage size**: 모두 `size="sm"` 일관 (S8 Phase 6 회귀 학습).
**tone_strength**: strong (high confidence) — 4 blockquote 명시 + 의사결정 강조 톤.

### 1.7 메타 메시지 강조 위치 (학생 체감 포인트)

| lecture.md 패턴 | 메타 메시지 슬라이드 위치 |
|---|---|
| 페르소나 3단계 진화 (L259-263 표 + L270-290 시드 6번 예시) | §3 — *9세션 누적의 가시화* |
| NotebookLM 재오픈 (L205-225 이론 + L813-885 실행) | §2 + Step 4 — *21시간 후 자료 3 노트북이 다시 살아남* |
| Pivot/Persevere/Kill 결정 (L398-451) | §4 + Step 6 — *학습 = 결정* |
| 학습 회고 3 질문 (L478-491) | §4 + Step 6-3 — *본인 약점 → 다음 사이클 강화 대상* |
| ⭐ 학습 종착 슬라이드 (L1059-1089 기반) | Step N 마지막 — *9세션 닫는 마지막 화면* |

---

## § 2~§ 4. Composition / Validation / Build (Phase 2~3 진행 시 누적 추가)

> 본 § 2~§ 4는 Phase 2-3 미니사이클 진행 시 각 T마다 β'/γ'/δ'/ε' 4단계 시퀀스 결과 누적 작성. 현 단계(T1.2)에서는 placeholder.

### 2.1 Mini-Cycle 진행 표 (예정)

| Mini Cycle | Lecture Range | Scope | 슬라이드 ID | Status | 4단계 시퀀스 |
|---|---|---|---|---|---|
| T2.0a | L1-6 | 자동 세션 표지 | t1 | 대기 | β'/γ'/δ'/ε' |
| T2.0b | L7-14 | 자동 이론 목차 | t2 | 대기 | β'/γ'/δ'/ε' |
| T2.1 | L17-101 | §1 노출의 기획적 의미 | t3-t10 | 대기 | β'/γ'/δ'/ε' |
| T2.2a | L102-148 | §2-A 1명+단정+기준+4종 | t11-t16 | 대기 | β'/γ'/δ'/ε' |
| T2.2b | L150-246 | §2-B 4종특징+NotebookLM+안티+용어 | t17-t22 | 대기 | β'/γ'/δ'/ε' |
| T2.3a | L247-303 | §3-A 3단계+단정+시드6+두종류 | t23-t27 | 대기 | β'/γ'/δ'/ε' |
| T2.3b | L305-368 | §3-B persona·prd+자동커밋+안티+비교+용어 | t28-t32 | 대기 | β'/γ'/δ'/ε' |
| T2.4a | L369-452 | §4-A 학습≠빌드+단정+3갈래+Pivot/Persevere/Kill | t33-t38 ⛳ Gate-2 | 대기 | β'/γ'/δ'/ε' |
| T2.4b | L458-506 | §4-B Kill빠른실패+안티+회고+용어 | t39-t43 | 대기 | β'/γ'/δ'/ε' |
| T3.0 | L507-532 | 자동 실습 목차 | a1 | 대기 | β'/γ'/δ'/ε' |
| T3.1~T3.8 | L534-1090 | Step 0-N 실습 | a2-a44 | 대기 | β'/γ'/δ'/ε' |
| T3.9 | L1091-1101 | 과제 | a45 | 대기 | β'/γ'/δ'/ε' |
| T3.10 | L1103-1115 | Tips Cover + Content×2 | a46-a48 | 대기 | β'/γ'/δ'/ε' |

---

## § 5. Final Sign-off (Phase 4 종료 시 갱신)

> 본 sprint 종료 시 메인이 직접 작성. 현 단계 placeholder.

---

**[S9 spec.md § 0 + § 1 완료 — Phase 1 T1.2 끝]**
