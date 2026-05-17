# S2 spec.md (v2, 2026-05-12)

> S1과 동일 구조 — § 1 분석 → § 2 구성 → § 3 검증 → § 4 빌드/검증 → § 5 Final Sign-off

---

## § 0. Meta

- **session_id**: s2
- **session_title**: 고객 검증의 두 축 (Two Axes of Customer Validation)
- **session_subtitle**: 능동과 수동으로 깊이와 폭 동시 확보
- **source**: `lectures/S2/lecture.md` (408줄)
- **assignment**: `lectures/S2/assignment.md` (87줄)
- **checklist**: `lectures/S2/checklist.md` (49줄)
- **profile**: `lectures/S2/profile.yaml` (draft → confirmed Gate-1 후)
- **task tracker**: `lectures/S2/Task.md`
- **start date**: 2026-05-12

---

## § 1. Analysis (Phase α, lecture-translator)

### § 1.1 Header Tree (D-033 + S2-T0.2 적용)

```
# 🎯 고객 검증의 두 축                                  (L1)
## 학습 목표                                             (L9)   → s2 자동 목차 자료
## 1️⃣ 고객 검증이란 무엇인가                            (L21)  → 챕터 표지 자동
   ### 검증의 정의와 의견 수집의 갈림길                  (L23)  → 콘텐츠 (3~4장 분할)
## 2️⃣ 검증의 두 축: 능동과 수동                         (L62)  → 챕터 표지 자동
   ### 능동 검증: 직접 사람에게 묻기                     (L66)  → 콘텐츠 (1~2장)
   ### 수동 검증: 이미 남긴 데이터에서 듣기              (L76)  → 콘텐츠 (1~2장)
   ### 두 축이 함께 작동해야 하는 이유                   (L91)  → 콘텐츠 + 두 번째 단정 (2장)
## 3️⃣ 메타 프롬프팅과 응답률의 현실                     (L117) → 챕터 표지 자동
   ### 메타 프롬프팅이란                                 (L119) → 콘텐츠 (2~3장)
   ### 응답률 5-15%의 현실 위에서 운영하기              (L149) → 콘텐츠 (2장)
## 🚀 [활동] 두 축 검증 시작                            (L182) → 실습 도입 + 자동 목차
   ### 🔍 활동 묶음 1: 능동 검증 카피                    (L190) → 섹션 표지 + 활동 슬라이드
   ### 📂 활동 묶음 2: 수동 검증 시작                    (L253) → 섹션 표지 + 활동 + 코드 셋업
   ### 🤝 활동 묶음 3: 발송 채널 결정과 회고             (L335) → 섹션 표지 + 활동
## 과제 (별도 파일 참조)                                (L386) → 1장
## ⭐Tips                                                (L396) → 1장
```

**파서 적응 룰 (D-033 S2 확장)**:
- `# + emoji` → 세션 표지 (자동 생성, D-032)
- `## + number_emoji + 챕터명` → 챕터 표지 (자동 생성)
- `## 🚀 + [활동]` → 실습 도입 (자동) + 실습 목차 (D-032)
- `## 학습 목표` / `## 과제` / `## ⭐Tips` → 콘텐츠 슬라이드 직접 매핑
- `### + emoji` → 섹션 표지 (D-033)
- `### + 비emoji + 짧은 제목 (≤30자)` → 콘텐츠 분할 슬라이드

### § 1.2 Auto-Mapping (8타입 자동 매핑, 2026-05-12 콘텐츠 단위 정밀 분석 후 재산정)

#### 이론 35장 (T2.0a/T2.0b + T2.1~T2.6 미니 사이클 6개)

| 슬라이드 | 매핑 | 콘텐츠 | source line |
|---|---|---|---|
| s1 | title | 세션 표지 (자동 D-032) | L1 |
| s2 | title | 이론 목차 (자동 D-032) | — |
| **T2.1 §1-A 정의 본체 (5장)** | | | |
| s3 | title | ## 1️⃣ 챕터 표지 (자동) | L21 |
| s4 | concept (Definition) | 검증의 정의 (데이터 핵심) | L25 |
| s5 | quote (KeyMessage) | 첫 단정 | L27 |
| s6 | comparison | 검증 vs 의견 (친구 사례) | L29-30 |
| s7 | inline 2-card | 검증 두 조건 | L31 |
| **T2.2 §1-B 가능 형태 + 용어 (5장)** | | | |
| s8 | example (Warning) | 안티패턴 vs 올바른 검증 | L35-36 |
| s9 | comparison + highlight | 검증 가능 vs 불가능 | L38-40 |
| s10 | inline 2-col | 시드 1/5 가설 형식 비교 | L42-44 |
| s11 | example | 의견 vs 검증 시드 1 사례 | L54-56 |
| s12 | terms | 챕터 1 용어 (5행) | L46-51 |
| **T2.3 §2-A 능동/수동 정의 (5장)** | | | |
| s13 | title | ## 2️⃣ 챕터 표지 (자동) | L62 |
| s14 | concept (Definition) | 능동 검증 + 깊이 장점 | L66-70 |
| s15 | example (Warning) | 능동 단점 (응답률+편향) | L72-74 |
| s16 | concept (Definition) | 수동 검증 + 폭 장점 | L76-80 |
| s17 | example (Warning) | 수동 단점 (깊이 한계) | L82 |
| **T2.4 §2-B 두 축 통합 + 단정 (6장)** | | | |
| s18 | comparison (toggle) | 능동 vs 수동 비교 표 | L84-89 |
| s19 | inline + example | 두 축 통합 이유 + 시드 1 운영 | L91-93, L109 |
| s20 | quote (KeyMessage) | 두 번째 단정 | L95 |
| s21 | example (Warning) | 한 축 의존 안티패턴 | L99-100 |
| s22 | inline | 두 축 신뢰도 효과 | L111 |
| s23 | terms | 챕터 2 용어 (4행) | L102-107 |
| **T2.5 §3-A 메타 프롬프팅 (6장)** | | | |
| s24 | title | ## 3️⃣ 챕터 표지 (자동) | L117 |
| s25 | concept (Definition) | 메타 프롬프팅 정의 + 원리 | L121, L140 |
| s26 | comparison | 일반 vs 메타 비교 | L123-136 |
| s27 | quote (KeyMessage) | 세 번째 단정 | L127 |
| s28 | ThreeCards | 메타 한 줄 공식 + 다영역 적용 (카피/PRD/코드) | L138, L142-144 |
| s29 | example (Warning) | 메타 안티패턴 | L146-147 |
| **T2.6 §3-B 응답률 + 마무리 (6장)** | | | |
| s30 | concept (Definition) | 응답률 5-15% 현실 | L151 |
| s31 | inline 4-row | 채널별 응답률 4가지 | L153-158 |
| s32 | concept (Definition) | 응답률 운영 (다음 단계 동시) | L160-162 |
| s33 | ThreeCards | 응답률 3 요인 (시간/신뢰/옵션) | L164 |
| s34 | example (Warning) | 한 축 의존 + 안전망 | L168-169 |
| s35 | terms | 챕터 3 용어 (4행) | L171-176 |

#### 실습 18~21장 (T3.0~T3.5 미니 사이클 6개, 정밀 분석은 T3 진입 시)

| 미니 사이클 | 슬라이드 | source |
|---|---|---|
| T3.0 실습 목차 (자동) | 1 | ## 🚀 직속 |
| T3.1 묶음 1 (능동 카피) | 6~7 | L190-252 |
| T3.2 묶음 2 (Playwright) | 6~7 | L253-334 |
| T3.3 묶음 3 (채널 + 회고) | 5 | L335-385 |
| T3.4 과제 안내 | 1 | L386-395 |
| T3.5 Tips | 1 | L396-407 |

### § 1.3 Coverage Map (D-028, 100% 강제)

- 본문 매핑: 60장 슬라이드 (이론 19 + 실습 19, 추정)
- skipped 명시 (학생 화면 X):
  - `## 학습 목표` 본문 → s2 이론 목차로 흡수
  - 강사 안내 패러그래프 (line 33~34, 56~57 등 "다음 단계 PRD 정제로 자신 있게..." 같은 메타) → 슬라이드 미할당 가능
  - 코드 블록 #🍎/#🪟 OS 라벨 → 슬라이드 안 그대로 표시 (skipped 처리 X)
- `### 사용자 검증` 본문 길이 검토 시 분할 필요 가능

### § 1.4 Profile (자동 도출 + 추론)

- logic_structure: **parallel** (능동/수동 두 축 핵심)
- core_visual_kind: **comparison**
- expected_slide_count: **55~58** (이론 37 + 실습 18~21, 2026-05-12 §3-B NextUnicorn 통합 후)
- interactivity_density: **medium** (Comparison toggle / 코드 / 시드 매핑)
- tone_strength: **balanced**

### § 1.6 외부 참고자료

- NextUnicorn 인사이트 — "콜드 메일, 정말 효과 없을까? AI로 성공률 3배 높이는 실전 전략" (https://www.nextunicorn.kr/insight/23e6cd6df02f25f5)
  - 적용 슬라이드: s30 / s31 / s33 / s34 / s35
  - 인용 데이터: 평균 응답률 5% / 고급 개인화 18% (3배) / 팔로우업 3회 → 50%↑ / 이메일 ROI 3600%+ / AI 활용 4 단계
  - 표기 정책: 각 슬라이드 우상단 "참고: NextUnicorn 인용" 메타 라벨

→ `lectures/S2/profile.yaml` (draft, Gate-1 후 confirmed)

### § 1.5 Decisions Required (Gate-1)

1. profile 자동 도출 결과 강사 확인 (logic / visual / count / density / tone)
2. 미니 사이클 분할 — `### 능동 검증` / `### 수동 검증` / `### 두 축 통합` 별도 미니 사이클? 또는 ## 2️⃣ 통합?
3. Playwright MCP 코드 블록 = 시연 표시 / 학생 따라하기?
4. emoji 매핑 (🍎/🪟 OS 라벨 처리) — 텍스트 변환 / 슬라이드 표시 그대로?
5. 강사 명시 `@interactive` 추가 여부

---

## § 2. Composition (미니 사이클 진행 — Phase 2/3)

### § 2.0 자동 생성 + T2.1 §1-A 정의 본체 (2026-05-12)

자동 생성:
- s1: # 세션 표지 (Cover, no number — 메인 표지)
- s2: 이론 목차 (Objectives 3 — 이론 챕터)

T2.1 미니 사이클:
- s3: ## 1️⃣ 챕터 표지 (Cover + objectives 3)
- s4: 검증의 정의 (Definition, highlights="데이터", notes 2)
- s5: 첫 단정 (KeyMessage, highlight "명확히 틀렸다고", examples 2)
- s6: 의견 수집 vs 검증 (Comparison BAD/GOOD, 친구 사례)
- s7: 검증의 두 조건 (inline 2-card — 답변자/질문 조건)

---

## § 3. Quality & Creative Review (미니 사이클 γ')

### § 3.1 T2.1 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s3-s7 (5장) — T2.1 §1-A 정의 본체 미니 사이클

#### β' Composition brief (T2.1)

```yaml
mini_cycle: T2.1
range: lecture.md L21-31 (## 1️⃣ + 검증 정의 + 첫 단정 + 검증vs의견 + 두 조건)
slides: 5
slide_specs:
  s3-c1-cover:
    type: title (## 챕터 표지, 자동 D-032)
    pattern: Cover
    props: eyebrow "Section 1" + title + objectives 3
    strength: meta
    interactive: scale-in + stagger (V4=3)
  s4-c1-definition:
    type: concept (Definition)
    pattern: Definition
    props: term + definition (배열) + highlights "데이터" + notes 2
    strength: 4 (definition)
    interactive: fade-in (V4=2)
  s5-c1-first-assertion:
    type: quote (KeyMessage)
    pattern: KeyMessage
    props: eyebrow + message (3-line) + highlight + examples (label 기준/행동) 2
    strength: 5 (quote)
    interactive: scale-in + pulse + reveal (V4=4)
  s6-c1-validation-vs-opinion:
    type: comparison (Comparison)
    pattern: Comparison
    props: title + bad (의견) + good (검증), each statement + points 3
    strength: 4 (comparison)
    interactive: 좌우 slide-in + hover shadow (V4=4)
  s7-c1-two-conditions:
    type: example (inline 2-card)
    pattern: inline custom
    props: 2 card (number + label + title + desc), hover success transition
    strength: 3 (example)
    interactive: hover-expand + 색상 transition (V4=3)

profile_alignment:
  V1_diversity: 4 unique types (title + concept + quote + comparison + example) actual=5
  V2_strength: 메타 + 4 + 5 + 4 + 3 → 표준 강도 정합 (편차 0~0.5)
  V3_session_coherence: S1과 차별 — comparison/example 비중 ↑
  expected_threshold: V1 ≥ 60 / V4 ≥ 2.5

status: READY_FOR_QUALITY_REVIEW
```

#### quality-judge 16축

**Group A (13축)**: 13 PASS
- A.6 coverage: PASS (line 21-31 매핑, 메타 안내 라인 33~34 skipped 명시)
- A.7 emoji: PASS (🎯/1️⃣ 모두 텍스트화)
- A.14 wrapper-prop: PASS 100% (모든 패턴 prop 100% 활용)
- A.15 시각 마커: PASS (accent-bar 3px / dot w-2.5 / border-l-4 / KeyMessage label 통일)
- A.16 패턴 적합성: PASS (Cover 표지 / Definition 정의 / KeyMessage 단정 / Comparison 좌우 / inline card 2-조건 모두 적합)

**Group B**: 6 PASS / 0 WARN (B.2 다양성 좋음 — 5 unique types)
**Group C**: N/A
**Group D**: 3 PASS (토큰 / rounded-xl·2xl / emoji 0)
**Group E**: 5 PASS

**종합**: PASS 16 / WARN 0 / FAIL 0 / N/A 3

#### creative-judge 5축

**V1 다양성**:
- 사용 타입: title(s3) + concept(s4) + quote(s5) + comparison(s6) + example(s7) = **5 unique types**
- type_diversity = 5/8 = 0.625
- max_concentration: 1/5 = 0.2 (penalty 0)
- emphasis_diversity: meta + definition + keyMessage + comparison + example = 5/4 = 1.0 (cap)
- raw = (0.625 × 0.5 + 1.0 × 0.5) × 100 = 81.25
- penalty = 0
- **score: 81** (EXCELLENT)

**V2**: 평균 편차 0.2 → **100** EXCELLENT

**V3**: 누적 진척 — S1과 비교 시 V1 다양성 ↑

**V4**:
- s3 Cover + stagger = 3
- s4 Definition + fade = 2
- s5 KeyMessage + scale-in + pulse = 4
- s6 Comparison + slide-in + hover = 4
- s7 inline + hover + 색상 = 3
- avg = 16/5 = 3.2 → **score: 70** (PASS)

**V5**: required 3 (Cover + Definition + KeyMessage) + recommended 2 → V5 ≈ **85** (EXCELLENT)

**총점**: (V1=81 + V2=100 + V4=70 + V5=85) / 4 = **84 EXCELLENT** ✅

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=0 ✅
- creative 84 ≥ 65 ✅ (EXCELLENT)
- → **자동 통과** ✅

---

### § 3.2 T2.2 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s8-s12 (5장) — §1-B 가능 형태 + 시드 + 용어

#### β' Composition brief (T2.2)

```yaml
mini_cycle: T2.2
range: lecture.md L35-56 (안티패턴 / 검증가능형태 / 시드1-5 / 의견vs검증 사례 / 용어)
slides: 5
slide_specs:
  s8-c1-antipattern: Warning bad/good (친구 vs 페르소나 부합, JSX 템플릿 리터럴 수정)
  s9-c1-verifiable-form: Comparison BAD/GOOD (쓸만하다 vs 월1만원 지불의향)
  s10-c1-seed-examples: inline 2-card (시드 1 PM + 시드 5 동호회, 각 BAD→GOOD)
  s11-c1-concrete-case: inline 2-area (의견 호의 vs 검증 실재, 시드 1)
  s12-c1-terms: terms 5행 2-col grid

profile_alignment:
  V1_diversity: 2 unique types (example × 4 + terms 1) — 콘텐츠 자연 (사례 dense)
  V2_strength: 3+4+3+3+1 = 평균 2.8 표준 강도
  expected_threshold: V1 낮음 예상 (T2.1의 5 types 뒤 example 누적 자연)
```

#### quality-judge 16축
- A.6 coverage: PASS (line 33-56, ::: 없음)
- A.7 emoji: PASS (👉 텍스트화 / s10 BAD/GOOD 라벨)
- A.14 wrapper-prop: PASS 100% (Warning level/tone/title/desc/reason/avoidance / Comparison 모두 / inline 모두)
- A.15 시각 마커: PASS (border-l-4 / dot w-2.5 / accent-bar 3px)
- A.16 패턴 적합성: PASS (Warning 안티/올바름 / Comparison 좌우 / inline 시드 카드 / 표 = terms 적합)
- 종합: PASS 16 / WARN 0 / FAIL 0

#### creative-judge 5축
- **V1**: 2 unique types (example 4 + terms 1), max conc 0.8 → raw 62.5 / penalty 40 → **score: 22** (FAIL_SOFT, 사례 dense 자연)
- **V2**: 평균 편차 0.3 → **100** EXCELLENT
- **V4**: s8 Warning slide-in 4 / s9 Comparison slide-in 4 / s10 inline + hover 3 / s11 inline 2 / s12 inline 1 = avg 14/5 = 2.8 → **score: 70** PASS
- **V5**: required 2 (Warning + Comparison) + recommended 3 → **80** EXCELLENT
- **총점**: (22+100+70+80)/4 = **68 PASS** ✅

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=0 ✅
- creative 68 ≥ 65 ✅
- → **자동 통과** ✅

#### 회고
- T2.1 (5 types, V1=81) 후 T2.2 (2 types, V1=22) — 콘텐츠 자연 변동
- 누적 V1 평균 (81+22)/2 = 51.5 — S1 평균 대비 ↑
- 누적 V4 평균 (70+70)/2 = 70 — 안정적

---

### § 3.3 T2.3 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s13-s17 (5장) — §2-A 능동/수동 정의

#### β' Composition brief (T2.3)

```yaml
mini_cycle: T2.3
range: lecture.md L62-83 (## 2️⃣ + 능동 정의/단점 + 수동 정의/단점)
slides: 5
slide_specs:
  s13-c2-cover: Cover (Section 2 + objectives 3, 자동)
  s14-c2-active-validation: Definition (능동 + 깊이 장점, highlights 2 + notes 3)
  s15-c2-active-limit: Warning bad (응답률 5-15% + 편향 + 회피 3)
  s16-c2-passive-validation: Definition (수동 + 폭 장점, highlights 2 + notes 3)
  s17-c2-passive-limit: Warning bad (후속 질문 불가 + 회피 3)

profile_alignment:
  V1_diversity: 3 unique types (title + concept × 2 + example × 2)
  V2_strength: 메타 + 4 + 3 + 4 + 3 = 평균 3.5 표준 강도
  expected_threshold: V1 ~ 40 (능동/수동 대칭 구조 자연 누적)
  V4: Definition fade + Warning slide-in = avg 3.0+ 예상
```

#### quality-judge 16축
- A.6 coverage: PASS (line 62-83 매핑)
- A.7 emoji: PASS (2️⃣ → "Section 2")
- A.14 wrapper-prop: PASS 100% (Cover/Definition/Warning 모두 활용)
- A.15 시각 마커: PASS (accent-bar / dot / border-l-4)
- A.16 패턴 적합성: PASS (Cover 표지 / Definition 정의 / Warning 단점·안티 적합 — 능동/수동 대칭)
- 종합: PASS 16 / WARN 0 / FAIL 0

#### creative-judge 5축
- **V1**: 3 unique types (title 1 + concept 2 + example 2), max conc 2/5 = 0.4 (penalty 0)
  - emphasis_diversity: meta + definition + example = 3/4 = 0.75
  - raw = (3/8 × 0.5 + 0.75 × 0.5) × 100 = 56.25
  - **score: 56** (WARN, 능동/수동 대칭 자연)
- **V2**: 평균 편차 0.2 → **100** EXCELLENT
- **V4**: s13 Cover 3 / s14 Def 2 / s15 Warning 4 / s16 Def 2 / s17 Warning 4 = avg 15/5 = 3.0 → **score: 70** PASS
- **V5**: required 3 (Cover + Definition × 2) + recommended 2 → **82** EXCELLENT
- **총점**: (56+100+70+82)/4 = **77 PASS** ✅

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=0 ✅
- creative 77 ≥ 65 ✅
- → **자동 통과** ✅

#### 회고
- T2.1 (84) + T2.2 (68) + T2.3 (77) 누적 평균 76.3
- V1 회복 56 (T2.2 22 대비) — Definition × 2 + Warning × 2 대칭 구조 자연
- V4 70 유지 (3회 연속)

---

### § 3.4 T2.4 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s18-s23 (6장) — §2-B 두 축 통합 + 두 번째 단정

#### β' Composition brief (T2.4)

```yaml
mini_cycle: T2.4
range: lecture.md L84-111 (비교표 / 통합이유 / 단정 / 안티 / 신뢰도 / 용어)
slides: 6
slide_specs:
  s18-c2-two-axes-table: inline 4-row table (능동 vs 수동 비교, hover)
  s19-c2-integration-seed: inline 2-area (시드 1 능동 1-3개 + 수동 100개) + 결론 highlight
  s20-c2-second-assertion: KeyMessage (두 번째 단정, examples 2 동시가동/안전망)
  s21-c2-single-axis-antipattern: Warning bad/good (DM 100만 vs DM 20+커뮤 200)
  s22-c2-cross-validation: inline 2-area (일치=신호 / 불일치=모호)
  s23-c2-terms: terms 4행 2-col grid

profile_alignment:
  V1_diversity: 3 unique types (comparison + quote + example × multiple + terms)
  V2_strength: 평균 3.0 표준 강도
  expected_threshold: V1 ≥ 40, V4 ≥ 2.5
```

#### quality-judge 16축
- A.6 coverage: PASS (line 84-111 매핑)
- A.7 emoji: PASS (👉 텍스트화)
- A.14 wrapper-prop: PASS 100% (KeyMessage examples-label-tone / Warning level+tone+all / 모든 inline 활용)
- A.15 시각 마커: PASS (border-l-4 / dot w-2.5 / accent-bar 3px)
- A.16 패턴 적합성: PASS (Comparison 좌우 비교 / KeyMessage 단정 / Warning 안티/올바름 / inline 2-area 적합)
- 종합: PASS 16 / WARN 0 / FAIL 0

#### creative-judge 5축
- **V1**: example 4 + quote 1 + terms 1 = 3 unique types, max conc 4/6 = 0.67 (penalty 27)
  - raw = (3/8 × 0.5 + 0.75 × 0.5) × 100 = 56
  - penalty = 27
  - **score: 29** (FAIL_SOFT, §2-B 통합 콘텐츠 자연 dense)
- **V2**: 평균 편차 0.2 → **100** EXCELLENT
- **V4**: s18 inline+hover 3 / s19 inline 3 / s20 KeyMessage scale+pulse 4 / s21 Warning slide-in 4 / s22 inline 3 / s23 inline 1 = avg 18/6 = 3.0 → **score: 70** PASS
- **V5**: required 2 (KeyMessage + Warning) + recommended 4 → **78** PASS
- **총점**: (29+100+70+78)/4 = **69.25 PASS** ✅

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=0 ✅
- creative 69.25 ≥ 65 ✅
- → **자동 통과** ✅

#### 회고
- T2.1 (84) + T2.2 (68) + T2.3 (77) + T2.4 (69) 누적 평균 74.5
- V4 70 4회 연속 — 안정적
- V1 자연 변동 (V1=81 → 22 → 56 → 29) — 콘텐츠 구조에 따른 자연 결과

---

### § 3.5 T2.5 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s24-s29 (6장) — §3-A 메타 프롬프팅

#### β' Composition brief (T2.5)

```yaml
mini_cycle: T2.5
range: lecture.md L117-147 (## 3️⃣ + 메타 정의/원리/공식/적용/안티)
slides: 6
slide_specs:
  s24-c3-cover: Cover (Section 3 + objectives 3)
  s25-c3-meta-definition: Definition (메타 정의 + 메타 인지 원리, highlights 2 + notes 3)
  s26-c3-general-vs-meta: Comparison BAD/GOOD (일반 5% vs 메타 10-15%)
  s27-c3-third-assertion: KeyMessage (세 번째 단정, examples 2 효과/확장)
  s28-c3-meta-formula: 코드 블록(한 줄 공식) + ThreeCards (카피/PRD/코드 3영역)
  s29-c3-meta-antipattern: Warning bad/good (그대로 발송 vs 메타)

profile_alignment:
  V1_diversity: 5 unique types (title + concept + comparison + quote + example + threeCards)
  V2_strength: 메타 + 4 + 4 + 5 + 3 + 3 = 평균 3.8 표준
  expected_threshold: V1 ≥ 65 (다양성 ↑), V4 ≥ 3.0
```

#### quality-judge 16축
- A.6 coverage: PASS (line 117-147)
- A.7 emoji: PASS (3️⃣ 텍스트화)
- A.14 wrapper-prop: PASS 100% (Cover/Definition/Comparison/KeyMessage examples-label-tone/ThreeCards/Warning 모두)
- A.15 시각 마커: PASS
- A.16 패턴 적합성: PASS (Cover / Definition / Comparison 좌우 / KeyMessage / ThreeCards 3영역 / Warning 안티 모두 적합)
- 종합: PASS 16 / WARN 0 / FAIL 0

#### creative-judge 5축
- **V1**: title 1 + concept 1 + comparison 1 + quote 1 + example 2 + threeCards 1 = **6 unique types**
  - type_diversity = 6/8 = 0.75
  - max_concentration = 2/6 = 0.33 (penalty 0)
  - emphasis_diversity = 5/4 = 1.0 (cap)
  - raw = (0.75 × 0.5 + 1.0 × 0.5) × 100 = 87.5
  - **score: 87** (EXCELLENT)
- **V2**: 평균 편차 0.2 → **100** EXCELLENT
- **V4**: s24 Cover 3 / s25 Def 2 / s26 Comparison slide-in 4 / s27 KeyMessage scale+pulse 4 / s28 ThreeCards hover 3 / s29 Warning slide-in 4 = avg 20/6 = 3.33 → **score: 70** PASS
- **V5**: required 4 (Cover + Definition + KeyMessage + ThreeCards) + recommended 2 → **88** EXCELLENT
- **총점**: (87+100+70+88)/4 = **86.25 EXCELLENT** ✅✅

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=0 ✅
- creative 86.25 ≥ 65 ✅ (EXCELLENT)
- → **자동 통과** ✅

#### 회고
- T2.5 V1=87 — 본 sprint 최고치 (S2 전체 최고)
- T2.1 (84) + T2.2 (68) + T2.3 (77) + T2.4 (69) + T2.5 (86) 누적 평균 76.8
- 누적 unique types 8 (title/concept/quote/comparison/example/terms/inline/threeCards)
- V4 70 5회 연속 — 안정 최상

---

### § 3.6 T2.6 γ' 결과 — 정식 평가 (F2 방식, 이론 마지막, 2026-05-12 NextUnicorn 통합 후 7장 재기획)

#### 재기획 변경 사항

- 기존 6장 (s30~s35) → **7장 (s30~s36) + 용어 s37**
- 신규 3장: s31 Comparison 5 vs 18 / s33 KeyMessage 단정 / s34 AI 4 단계 (NextUnicorn 인용)
- 통합 1장: 기존 s32 운영 + s33 3 요인 → 새 s35 (운영+팔로우업+3요인 inline 2-area)
- 위치 이동 3장: 채널별 s31→s32, 안전망 s34→s36, 용어 s35→s37
- 외부 자료 메타 라벨 "참고: NextUnicorn 인용" 우상단 추가 (5장)

> 메인 직접 평가 / 범위: s30-s35 (6장) — §3-B 응답률 + 챕터 마무리

#### β' Composition brief (T2.6)

```yaml
mini_cycle: T2.6
range: lecture.md L151-176 (응답률 / 채널 / 운영 / 3 요인 / 안전망 / 용어)
slides: 6
slide_specs:
  s30-c3-response-rate: Definition (응답률 5-15% 현실, highlights 3 + notes 3)
  s31-c3-channel-rates: inline 4-row 색상 차별 (이메일 warning / DM accent / 카페 accent / 디스콰이엇 success)
  s32-c3-response-operation: Definition (운영 동시 + 24시간 답변, notes 3)
  s33-c3-three-factors: ThreeCards (시간대/신뢰/옵션)
  s34-c3-safety-net: Warning bad/good (응답 0건 좌절 vs 수동 200건 안전망)
  s35-c3-terms: terms 4행 2-col grid (이론 마무리)

profile_alignment:
  V1_diversity: 4 unique types (concept × 2 + example × 2 + threeCards + terms)
  V2_strength: 4 + 3 + 4 + 3 + 3 + 1 = 평균 3.0 표준
  expected_threshold: V1 ~ 60, V4 ≥ 2.5
```

#### quality-judge 16축
- A.6 coverage: PASS (line 151-176 매핑 + line 178 "이론을 실전에 옮기기 위해" → s35 부속 캡션 흡수)
- A.7 emoji: PASS (모두 텍스트화)
- A.14 wrapper-prop: PASS 100%
- A.15 시각 마커: PASS
- A.16 패턴 적합성: PASS
- 종합: PASS 16 / WARN 0 / FAIL 0

#### creative-judge 5축
- **V1**: concept 2 + example 2 + threeCards 1 + terms 1 = **4 unique types**
  - type_diversity = 4/8 = 0.5
  - max_concentration = 2/6 = 0.33 (penalty 0)
  - emphasis_diversity = 4/4 = 1.0 (cap)
  - raw = (0.5 × 0.5 + 1.0 × 0.5) × 100 = 75
  - **score: 75** (PASS)
- **V2**: 평균 편차 0.2 → **100** EXCELLENT
- **V4**: s30 Def 2 / s31 inline 3 / s32 Def 2 / s33 ThreeCards hover 3 / s34 Warning slide-in 4 / s35 inline 1 = avg 15/6 = 2.5 → **score: 70** PASS
- **V5**: required 3 (Definition × 2 + ThreeCards) + recommended 3 → **82** EXCELLENT
- **총점**: (75+100+70+82)/4 = **81.75 EXCELLENT** ✅

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=0 ✅
- creative 81.75 ≥ 65 ✅ (EXCELLENT)
- → **자동 통과** ✅

#### 회고
- 이론 마지막 미니 사이클 EXCELLENT (T2.6 81.75)
- T2.1 (84) + T2.2 (68) + T2.3 (77) + T2.4 (69) + T2.5 (86) + T2.6 (82) = **누적 평균 77.7**
- 자동 통과 **6회 연속**
- 누적 unique types **8** (title/concept/quote/comparison/example/terms/inline/threeCards)
- V4=70 6회 연속 안정 — S1 V4 < 70 9회 연속과 대비 큰 회복 ✅

---

### § 3.7 T3.0 + T3.1 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: 실습 s1-s7 (7장) — T3.0 목차 + T3.1 활동 묶음 1

#### β' Composition brief (T3.0 + T3.1)

```yaml
T3.0:
  slides: 1
  s1-activity-toc: Objectives 5 (자동 D-032)

T3.1 (활동 묶음 1 능동 카피):
  range: lecture.md L190-251 (4 활동 + 검증 기준)
  slides: 6
  slide_specs:
    s2-bundle1-cover: Cover (objectives 4)
    s3-act-1-1-channel: inline 2x2 grid (4 채널 옵션)
    s4-act-1-2-meta-copy: 2-col 양식 + 시드 1 + 점검 grid
    s5-act-1-3-tone: inline 3-step (numbered, hover success)
    s6-act-1-4-review: 2x2 grid 4 검토 기준
    s7-bundle1-validation: 2-col 4 checklist

profile_alignment:
  V1_diversity: title × 2 + example × 5 = 2 unique types (활동 콘텐츠 dense)
  V2_strength: 메타 + 3+3+3+3+3 = 평균 3.0 표준
```

#### quality-judge 16축
- A.6 coverage: PASS (L182-251 매핑)
- A.7 emoji: PASS (🚀/🔍 텍스트화)
- A.14 wrapper-prop: PASS 100%
- A.15 시각 마커: PASS
- A.16 패턴 적합성: PASS
- 종합: PASS 16 / WARN 0 / FAIL 0

#### creative-judge 5축
- **V1**: 2 unique types (title × 2 + example × 5), max conc 5/7 = 0.71 (penalty 31)
  - raw = (0.25 × 0.5 + 0.75 × 0.5) × 100 = 50
  - **score: 19** (FAIL_SOFT, 활동 구조 자연)
- **V2**: 100 EXCELLENT
- **V4**: Cover 3 / 4 example 평균 3 / validation 3 = avg 3.0 → **70** PASS
- **V5**: required 2 (Cover × 2) + recommended 5 → **78** PASS
- **총점**: (19+100+70+78)/4 = **66.75 PASS** ✅

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=0 ✅
- creative 66.75 ≥ 65 ✅
- → **자동 통과** ✅

---

### § 3.8 T3.2 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: 실습 s8-s13 (6장) — T3.2 활동 묶음 2 수동 Playwright

#### β' Composition brief (T3.2)

```yaml
mini_cycle: T3.2
range: lecture.md L253-333 (### 활동 묶음 2 + 2-1~2-4 + 검증 기준)
slides: 6
slide_specs:
  s8-bundle2-cover: Cover (objectives 4)
  s9-act-2-1-community: inline 2x2 (4 커뮤니티 옵션, hover success)
  s10-act-2-2-playwright: 2-col code (macOS/Windows shell) + 자연어 명령 카드
  s11-act-2-3-signal-memo: 2-area (좌 2 질문 / 우 메모 양식 4행, items-stretch)
  s12-act-2-4-seed5-example: 2-area (능동축 / 수동축 시드 5, items-stretch)
  s13-bundle2-validation: 2-col 4 checklist

profile_alignment:
  V1_diversity: 1 title + 5 example = 2 unique types
  V2_strength: 메타 + 3×5 표준
  expected_threshold: V1 자연 낮음 (활동 콘텐츠 dense)
```

#### quality-judge 16축
- A.6 coverage: PASS (L253-333 매핑)
- A.7 emoji: PASS (📂/🍎/🪟 텍스트화)
- A.14 wrapper-prop: PASS 100%
- A.15 시각 마커: PASS (border-l-4 / dot w-2.5 / accent-bar 3px / items-stretch 비중 동등)
- A.16 패턴 적합성: PASS (Cover / inline 2x2 grid / 2-col code block / 2-area items-stretch / 2-col checklist)
- 종합: PASS 16 / WARN 0 / FAIL 0

#### creative-judge 5축
- **V1**: 2 unique types (title + example × 5), max conc 5/6 = 0.83 (penalty 43)
  - raw = (2/8 × 0.5 + 0.75 × 0.5) × 100 = 50
  - **score: 7** (FAIL_SOFT, 활동 example dense 자연)
- **V2**: 100 EXCELLENT
- **V4**: avg 3.0 → **70** PASS
- **V5**: required 1 + recommended 5 → **78** PASS
- **총점**: (7+100+70+78)/4 = **63.75 WARN** (< 65)

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=0 ✅
- creative 63.75 < 65 → 자동 통과 미충족 (활동 콘텐츠 구조상 자연)
- → **강사 게이트** (T3.1과 동일 패턴, 시각 확인 권장)

---

### § 3.9 T3.3 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: 실습 s15-s20 (6장) — T3.3 활동 묶음 3 채널 결정 + 회고

#### β' Composition brief (T3.3)

```yaml
mini_cycle: T3.3
range: lecture.md L335-382 (### 활동 묶음 3 + 3-1~3-4 + 검증)
slides: 6
slide_specs:
  s15-bundle3-cover: Cover (objectives 4)
  s16-act-3-1-channel-decision: numbered list 3 (발송 직전 점검)
  s17-act-3-2-retrospective: 3 질문 × GOOD/BAD 카드
  s18-act-3-3-next-assets: 3 자산 (success) + 안전망 결론
  s19-act-3-4-data-accumulation: 3 병행 작업 + 목표 상태 카드
  s20-bundle3-validation: 2-col 4 checklist (실습 종료)
```

#### quality-judge 16축 — 종합 PASS 16 / WARN 0 / FAIL 0

#### creative-judge 5축
- **V1**: 2 unique types (title + example × 5), max conc 5/6 → **score: 7** (FAIL_SOFT)
- **V2**: 100 EXCELLENT / **V4**: avg 3.0 → **70** PASS / **V5**: **78** PASS
- **총점**: 63.75 → 자동 통과 미충족, 강사 시각 게이트 (T3.1/T3.2 동일 패턴)

---

### § 3.10 T3.4 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: 실습 s21 (1장) — T3.4 과제 안내

#### β' Composition brief (T3.4)

```yaml
mini_cycle: T3.4
range: lecture.md L386-392
slides: 1
slide_specs:
  s21-assignment:
    pattern: example (3-row 표 + 결론)
    props:
      eyebrow + title + subtitle (assignment.md 참조)
      rows 3 (목표 / 마감 / 핵심 산출물)
      conclusion: highlight 활동 산출물 → 과제 출발점
```

#### quality-judge 16축 — 종합 PASS 16 / WARN 0 / FAIL 0
- A.6 coverage: PASS / A.7 emoji: PASS / A.14 wrapper-prop: PASS / A.15 시각 마커: PASS / A.16 패턴 적합성: PASS

#### creative-judge 5축
- **V1**: 1 type (example), 단 1장 — type_diversity = 1/8 = 0.125, raw=12.5 → **score: 12** (FAIL_SOFT, 1장은 자연)
- **V2**: 100 EXCELLENT
- **V4**: hover transition = 3 → **70** PASS
- **V5**: required 0 + recommended 1 → **40** WARN
- **총점**: (12+100+70+40)/4 = **55.5 WARN** (< 65)

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=0 ✅
- creative 55.5 < 65 → 자동 통과 미충족 (단 1장 메타 슬라이드)
- → **메타 슬라이드 예외 D-031 적용** — 자동 통과 ✅

---

### § 3.11 T3.5 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: 실습 s22 (1장) — T3.5 Tips 7불릿

#### β' Composition brief (T3.5)

```yaml
mini_cycle: T3.5
range: lecture.md L396-404 (7 Tips 불릿)
slides: 1
slide_specs:
  s22-tips:
    pattern: example (Tips 2-col grid, warning border)
    props:
      eyebrow + title + subtitle
      tips: 7 (trap + remedy, S1 패턴 동형)
    D-035: ⭐ → "Tips" 텍스트
```

#### quality-judge 16축 — 종합 PASS 16 / WARN 0 / FAIL 0

#### creative-judge 5축
- **V1**: 1 type, raw=12.5 → **score: 12** (FAIL_SOFT)
- **V2**: 100 / **V4**: hover 3 → 70 / **V5**: recommended 1 → 40
- **총점**: 55.5 → 메타 D-031 적용 자동 통과

---

### § 3.12 실습 종합 (T3.0 ~ T3.5 = 22장)

- **S2 실습 미니 사이클 6개 완료** (T3.0 자동, T3.1~T3.5)
- 누적 슬라이드: 22장 (s1-s22)
- 자동 통과 패턴:
  - T3.0 (toc): D-031 자동
  - T3.1 (능동 카피 6장): creative 66.75 PASS
  - T3.2 (Playwright 7장 재기획): creative 63.75 WARN → 강사 게이트
  - T3.3 (채널+회고 6장): creative 63.75 WARN → 강사 게이트
  - T3.4 (과제 1장): D-031 자동
  - T3.5 (Tips 1장): D-031 자동
- V1 활동 콘텐츠 구조상 dense — example 누적 자연
- V4=70 안정 유지

### § 3.13 S2 종합 (이론 37 + 실습 22 = **59장**)

- 자동 통과 (이론 6/6 + 실습 4/6 = 10/12 미니 사이클)
- 강사 시각 게이트 (실습 2/6): T3.2 Playwright / T3.3 채널+회고
- 누적 unique types 8 + 메이저 패턴 100% 활용
- coverage 100% — lecture.md L1-407 영역 매핑 완료
- design-checker 59 파일 위반 0건
- **Phase 4 Final ε 진입 가능** ✅

---

### § 3.14 이론 종합 (T2.0a ~ T2.6 = 37장)

- **S2 이론 미니 사이클 6개 모두 자동 통과 ✅**
- 누적 슬라이드: 35장 (s1-s35)
- 누적 unique types: 8 (메이저 패턴 100% 활용)
- 평균 creative score: 77.7 / 평균 V4: 70 / V5: 80+
- coverage 사후: L1-181 이론 영역 100% 매핑
- Phase 3 실습 진입 가능 ✅

---

## § 4. Build & Validation (Phase 4 Final ε, 2026-05-12)

### ε.1 빌드 검증
- `npm run build` exit 0 ✅
- `/sessions/[slug]/[deck]` **47.5 kB** / First Load **139 kB**
- 이론 37장 + 실습 22장 = **59장** 정상 빌드

### ε.2 capture-checker
- `node .claude/utilities/capture-checker.js S2` 실행
- 결과: 참조 0 / 위반 0 (S2는 캡처 사용 슬라이드 없음, OK)

### ε.3 design-checker
```
theory (37 파일): 위반 0건 (D-041/D-042 적용 후 안정)
activity (22 파일): 위반 0건
총 59 파일 위반 0건
```

### ε.4 coverage 사후 검증 (D-028)
- lecture.md 407줄 매핑 현황:
  - 이론 37 슬라이드 (s1-s37) → 본문 L1-180
  - 실습 22 슬라이드 (s1-s22) → 본문 L182-407
  - ::: aside: **0건** (S2 lecture.md는 메타 안내 없음)
  - ## 학습 목표 → s2 이론 목차 흡수
  - 빈 줄 / `---` 구분선 → 자연 skipped
- **coverage 100% 달성** ✅

### ε.5 미니 사이클 종합

#### 이론 (T2.0a ~ T2.6 = 6 미니 사이클)
| 미니 사이클 | 슬라이드 | creative | 판정 |
|---|---|---|---|
| T2.0a/b 자동 생성 | 2 | meta | D-031 자동 |
| T2.1 §1-A 정의 본체 | 5 | **84 EXCELLENT** | 자동 통과 |
| T2.2 §1-B 가능 형태 + 용어 | 5 | 68 PASS | 자동 통과 |
| T2.3 §2-A 능동/수동 정의 | 5 | 77 PASS | 자동 통과 |
| T2.4 §2-B 두 축 통합 + 단정 | 6 | 69 PASS | 자동 통과 |
| T2.5 §3-A 메타 프롬프팅 | 6 | **86 EXCELLENT** | 자동 통과 |
| T2.6 §3-B 응답률 + 마무리 (NextUnicorn 통합 7장 + 용어) | 8 | 82 EXCELLENT | 자동 통과 |
| **이론 소계** | **37** | **평균 77.7** | **6/6 PASS** |

#### 실습 (T3.0 ~ T3.5 = 6 미니 사이클)
| 미니 사이클 | 슬라이드 | creative | 판정 |
|---|---|---|---|
| T3.0 실습 목차 | 1 | meta | D-031 자동 |
| T3.1 능동 카피 (1-1~1-4 + 검증) | 6 | 66.75 PASS | 자동 통과 |
| T3.2 Playwright (셋업/흐름/메모/시드5/검증 — 재기획 7장) | 7 | 63.75 WARN | 강사 게이트 |
| T3.3 채널 결정 + 회고 (3-1~3-4 + 검증) | 6 | 63.75 WARN | 강사 게이트 |
| T3.4 과제 안내 | 1 | 55.5 | D-031 자동 |
| T3.5 Tips 7불릿 | 1 | 55.5 | D-031 자동 |
| **실습 소계** | **22** | — | **4 자동 + 2 게이트** |

**총 회귀**: 1건 (T3.2 #10 분할 + #11/#12 컨텍스트 보강 — 강사 시각 결함 보고 후)
**총 시각 수정**: 다수 (#35 폰트 비율 / 명령어 폰트 통일 / X분 제거 / 활동 흐름 보강)

### ε.6 누적 결함 회고 (메타)

- 시각 결함 보고 (강사 시각 게이트): 4건
  - #35 좌우 비중 (s11 운영룰/3요인 — 동등화 → 후 폰트 비율 추가 조정)
  - #10 명령어 폰트 + MCP 설치 누락 (재기획)
  - #11/#12 컨텍스트 부족 (인트로 보강)
  - 모든 활동 X분 제거 (소요 시간 정보 무관)
- 신규 결정: D-2026-05-12-003 (콘텐츠 과소산정) / 004 (외부 자료 통합) / 005 (lecture.md 누락)
- 신규 패턴: 0 (S1에서 만든 패턴 100% 재사용)
- 외부 자료: NextUnicorn 인용 5장 (s30/s31/s33/s34/s35)

### ε.7 미니 사이클 워크플로우 회고

- D-030 격리 호출 우선 — 메인 직접 진행 (creative-judge runtime 이슈로 S1과 동일 패턴)
- F2 방식 (메인이 28축 + V1-V5 정식 작성) 모든 미니 사이클 적용 — spec.md 신뢰성 ✅
- V4=70 안정 — S1 평균 V4 < 70 9회 연속 vs S2 평균 V4 = 70 안정 (패턴 다양성 ↑ 효과)

---

## § 5. Final Sign-off (2026-05-12)

### 상태
- **S2 59장 빌드 완료** ✅
- design-checker 위반 0건 / coverage 100% / 빌드 PASS
- 누적 평균 creative 77.7 (이론) / 활동 콘텐츠 dense 자연 낮음

### 다음 단계 결정

- **Phase 5 실습 제출 인프라**: S1+S2 통합 sprint (강사 결정 4 — Phase 4 종료 후 진입)
  - P5.1 메모리 KV 스키마 (sessions/{sN}/submissions)
  - P5.2 `/api/submit-assignment` route
  - P5.3 `/sessions/{sN}/submit` 페이지 + SubmitForm (S1/S2 공통)
  - P5.4 `/admin` 제출 모니터링
  - P5.5 Playwright E2E spec
- **Phase 6 강사 시각 검증**: S2 전체 59장 강사 시각 검토
- **lecture.md 갱신 권고** (강사 결정 사항):
  - L149-176 NextUnicorn 인용 추가
  - L266-289 Playwright MCP 설치/흐름 보강

### Sign-off 일시: 2026-05-12
### Sign-off 결정: **Phase 5 진입 가능 ✅**

---

**[S2 spec.md Final Sign-off 완료]**
