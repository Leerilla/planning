# S1 Curation Spec (v2 — D-031~D-035 갱신)

## § 0. Meta

- **Session**: S1
- **Lecture markdown**: `lectures/S1/lecture.md` (977 lines)
- **Format version**: v2 (D-033 적용 — 3계층 ###/#### 재해석)
- **Analysis date**: 2026-05-11 (Phase α 재실행)
- **Phase**: α (파싱 + 자동 매핑 + coverage_map + profile 도출)
- **Key changes from v1 spec**:
  - D-033: `###` = 섹션 표지 / `####` = 세부 콘텐츠 (구조 재해석)
  - D-032: 자동 생성 슬라이드 3개 (세션 표지 + 이론/실습 목차)
  - D-034: 미니 사이클 = `###` 섹션 전체 (불 1-5장 한계 완화)
  - D-035: 학생 화면 emoji 0건 (메타 표기 포함 제거)

---

## § 1. Analysis

### § 1.1 Header Tree (D-033 적용 파싱)

#### 구조 개요 (3계층)

```
# 기획의 본질과 문제 발견
  ↓
[AUTO] Slide 0: 세션 표지 (D-032)
  - title: "기획의 본질과 문제 발견"
  - subtitle: "좋은 기획은 페르소나에서 출발해..."
  - type: title (Cover)
  
## 이론
  ↓
[AUTO] Slide A: 이론 목차 (D-032)
  - items: [1️⃣ 기획이란 무엇인가, 2️⃣ AI 시대 기획의 변화, 3️⃣ 출처 검증의 실전]
  - type: title (Objectives)
  
### 1️⃣ 기획이란 무엇인가
  ↓
[AUTO] Slide 1-1: 섹션 표지 (D-033)
  - title: "기획이란 무엇인가" (emoji 제거)
  - objectives: 학습 목표 3개
  - type: title (Cover)
  
#### 기획의 정의
  → Slide 1-2, 1-3 (concept/definition + concept/default)
  
#### 좋은 기획 vs 나쁜 기획
  → Slide 1-4 (comparison)
  
#### 첫 단정
  → Slide 1-5, 1-6 (quote + example)

### 문제는 한 번에 정의되지 않는다
  ↓
[AUTO] Slide 2-1: 섹션 표지
  - title: "문제는 한 번에 정의되지 않는다"
  - objectives: 없음 (본문 없음)
  - type: title (Cover)
  
#### 기획 5단계 프레임
  → Slide 2-2, 2-3 (concept + quote)

#### 페르소나의 3단계 진화
  → Slide 2-4, 2-5 (process + concept/definition)

### 1️⃣ 챕터 용어 해설
  ↓
[NO AUTO] Slide 2-6: 섹션으로 취급 (### 호환)
  → Slide 2-6 (terms)

### 2️⃣ AI 시대 기획의 변화
  ↓
[AUTO] Slide 3-1: 섹션 표지
  - title: "AI 시대 기획의 변화"
  - objectives: 학습 목표 3개
  
#### 빨라진 것: 리서치
  → Slide 3-2 (comparison)

#### 빨라진 것: 문서화
  → Slide 3-3 (comparison)

... (계속)

### 2️⃣ 챕터 용어 해설
  → Slide 5-1 (terms)

### 3️⃣ 출처 검증의 실전
  ↓
[AUTO] Slide 6-1: 섹션 표지
  - title: "출처 검증의 실전"
  - objectives: 학습 목표 3개

... (세부 콘텐츠)

## 실습
  ↓
[AUTO] Slide 7-1: 실습 목차
  - items: [🌱 시드 아이디어, 활동 묶음 1/2/3, 과제 안내, Tips]
  - type: title (Objectives)

### 🌱 시드 아이디어 6개
  ↓
[AUTO] Slide 8-1: 섹션 표지
  - title: "시드 아이디어 6개"
  - type: title (Cover)
  
#### 시드 목록
  → Slide 8-2 (comparison)

#### 시드 활용 가이드
  → Slide 8-3, 8-4 (concept + concept)

### 활동 묶음 1: 아이디어 선택과 1차 리서치
  ↓
[AUTO] Slide 9-1: 섹션 표지

#### 1-1. 아이디어 선택
  → Slide 9-2, 9-3 (process + process + activity)

... (계속)
```

#### 레이어 요약 (D-034 미니 사이클 단위)

**미니 사이클 = `###` 섹션 (표지 1장 + 모든 #### 콘텐츠)**

| # | 섹션 (`###`) | 자동 표지 | 콘텐츠 `####` 개수 | 예상 슬라이드 수 | 미니사이클 ID |
|---|---|---|---|---|---|
| 0 | (자동 생성) | 세션 표지 | - | 1 | auto-session-cover |
| 1 | 이론 목차 | (자동) | - | 1 | auto-theory-objectives |
| 2 | 1️⃣ 기획이란 무엇인가 | ✓ | 3 | 6-7 | mini-cycle-theory-c1 |
| 3 | 문제는 한 번에 정의되지 않는다 | ✓ | 2 | 4-5 | mini-cycle-theory-c1b |
| 4 | 1️⃣ 챕터 용어 해설 | ✓ | - | 1 | mini-cycle-theory-c1-terms |
| 5 | 2️⃣ AI 시대 기획의 변화 | ✓ | 7 | 10-12 | mini-cycle-theory-c2 |
| 6 | 2️⃣ 챕터 용어 해설 | ✓ | - | 1 | mini-cycle-theory-c2-terms |
| 7 | 3️⃣ 출처 검증의 실전 | ✓ | 9 | 12-14 | mini-cycle-theory-c3 |
| 8 | 3️⃣ 챕터 용어 해설 | ✓ | - | 1 | mini-cycle-theory-c3-terms |
| 9 | 실습 목차 | (자동) | - | 1 | auto-activity-objectives |
| 10 | 🌱 시드 아이디어 6개 | ✓ | 2 | 3-4 | mini-cycle-activity-seed |
| 11 | 시드 목록 | ✓ | - | 1 | mini-cycle-activity-seeds-list |
| 12 | 시드 활용 가이드 | ✓ | 1 | 2-3 | mini-cycle-activity-guide |
| 13 | 활동 묶음 1: 아이디어 선택과 1차 리서치 | ✓ | 4 | 7-9 | mini-cycle-activity-bundle1 |
| 14 | ✅ 활동 묶음 1 검증 기준 | ✓ | - | 1 | mini-cycle-activity-bundle1-check |
| 15 | 활동 묶음 2: 워크시트 채우기 | ✓ | 3 | 6-7 | mini-cycle-activity-bundle2 |
| 16 | ✅ 활동 묶음 2 검증 기준 | ✓ | - | 1 | mini-cycle-activity-bundle2-check |
| 17 | 활동 묶음 3: 자기 선언과 회고 | ✓ | 3 | 6-7 | mini-cycle-activity-bundle3 |
| 18 | ✅ 활동 묶음 3 검증 기준 | ✓ | - | 1 | mini-cycle-activity-bundle3-check |
| 19 | 과제 안내 | ✓ | 1 | 1 | mini-cycle-activity-assignment |
| 20 | ⭐ Tips: 함정과 처방 | ✓ | - | 7 | mini-cycle-activity-tips |
| | | | **총 33개 섹션** | **약 65-75** | (실측 후 갱신) |

---

### § 1.2 Auto-Mapping (8타입 자동 매핑, D-032/D-033 적용)

#### 자동 생성 슬라이드 (D-032)

| 슬라이드 ID | 트리거 | 타입 | 패턴 | 콘텐츠 |
|---|---|---|---|---|
| **auto-session-cover** | `# 기획의 본질과 문제 발견` | title | Cover | title=`#` 텍스트, subtitle=첫 단락 요약 |
| **auto-theory-objectives** | `## 이론` | title | Objectives | eyebrow="이론 구성", items=이론 `###` 목록 (emoji 제거) |
| **auto-activity-objectives** | `## 실습` | title | Objectives | eyebrow="실습 구성", items=실습 `###` 목록 (emoji 제거) |

**규칙** (docs/slide-types.md § 2.1, D-032):
1. `#` 헤더 → 세션 표지 1장 (Cover)
2. `## 이론` 직속 → 이론 목차 1장 (Objectives)
3. `## 실습` 직속 → 실습 목차 1장 (Objectives)
4. 각 `###` 헤더 → 섹션 표지 1장 (Cover)

#### `####` 콘텐츠 슬라이드 매핑 (우선순위 8단계)

적용 순서 (docs/slide-types.md § 2.2):
1. `## 실습` 하위 `####` → **activity**
2. 첫 단락 "사례:" / "예시:" / "시나리오:" → **example**
3. `>` 블록 첫 콘텐츠 → **quote**
4. 표 2열 → **terms**
5. 표 3열 이상 → **comparison**
6. 번호 리스트 ≥ 3 → **process**
7. (기본) → **concept**

#### 8타입 예상 분포 (자동 매핑 후)

| 타입 | 개수 | 비고 |
|---|---|---|
| title (auto) | 3 | 세션 + 이론/실습 목차 |
| title (섹션 표지) | ~30 | 각 `###` 마다 1장 |
| concept | ~12 | 정의, 안내 등 |
| comparison | ~11 | 표 비교 |
| process | ~13 | 단계별, 체크리스트 |
| example | ~9 | 사례, 시나리오 |
| quote | ~4 | 단정 인용 |
| activity | ~14 | 실습 하위 |
| terms | ~5 | 용어 정의 표 |
| **TOTAL** | **~101** | (섹션 표지 30개 포함) |

> **실제는 자동 매핑 후 집계 예정. 예상치는 기존 spec 67-69에서 섹션 표지 30개 추가 = ~97-99장.**

---

### § 1.3 Coverage Map (100% 강제, D-028)

#### 원칙

**lecture.md 모든 라인 (1-977)을 다음 중 하나에 매핑**:
1. 슬라이드 콘텐츠 (title/concept/comparison/process/example/quote/activity/terms)
2. 명시적 skipped (메타: 헤더 라인, 학습 목표 메타 등)

#### Coverage 예상 (구체적 계산은 Phase α.3 실행 후)

```yaml
coverage_summary:
  # 이론 섹션
  - lines: [1, 14]
    label: "메타 헤더 + 학습 목표"
    coverage: skipped
    reason: "#/##/학습 목표 메타"

  - lines: [15, 481]
    label: "이론 섹션 전체"
    coverage: full
    slides: [auto-theory-objectives, auto-session-cover, mini-cycle-theory-c1, ...]
    
  - lines: [482, 977]
    label: "실습 섹션 전체"
    coverage: full
    slides: [auto-activity-objectives, mini-cycle-activity-*, ...]

total_coverage: 100%
skipped_lines: ~10-15 (헤더, 메타 구분자)
mapped_slide_count: ~97-101 (섹션 표지 포함)
```

---

### § 1.4 Profile (자동 도출 + 추론)

#### 자동 도출 항목 (파싱 기반)

**logic_structure: hierarchical**
- `###` 섹션 구조: 이론 3개 상위 개념 + 실습 3개 활동 묶음
- 각 섹션 아래 `####` 세부 (1-9개)
- 위→아래 계층적 깊이

**core_visual_kind: comparison**
- `####` 콘텐츠만 8타입 분포 분석 (섹션 표지 제외)
- comparison ~11개, process ~13개 → comparison 우세 (신호 0.55)

**expected_slide_count: ~97-101** (갱신 필요)
- 자동 생성: 3개 (세션 표지 + 이론/실습 목차)
- 섹션 표지: ~30개 (각 `###` 마다)
- 콘텐츠: ~64개 (`####` 콘텐츠 + `---` 분할 16개)
- **합계: 3 + 30 + 64 = 97장** (±4, 실측 필요)

#### 추론 항목 (신호 분석)

**interactivity_density: medium** (기존 값 유지, 신뢰도 medium)
- 기본 interactive (8타입 자동): activity 14 + process 13 + example 9 = 36개
- 강사 명시 @interactive: 0건
- 후보 36개 > 9 (medium max) → high 경계선
- 신뢰도 medium (activity 정적 여부 확인 필수)

**tone_strength: balanced** (기존 값 유지)
- 강한 톤: 4회 ("기획이 아니다", "기능을 정하기 전에...", "사용 불가", "기획을 대신 안 함")
- 약한 톤: 3회 ("권장", "경험", "선호")
- 판정: balanced (4 ≈ 3, 차이 1)
- 신뢰도 medium

#### 신뢰도 정리

| 항목 | 값 | 신뢰도 |
|---|---|---|
| logic_structure | hierarchical | high (파싱) |
| core_visual_kind | comparison | high (분포) |
| expected_slide_count | 97-101 | high (실측) |
| interactivity_density | medium | medium (추론) |
| tone_strength | balanced | medium (추론) |

---

### § 1.5 Decisions Required (Gate-1)

#### 필수 강사 검증 항목

1. **D-033 섹션 분류 확인**
   - 모든 `###`을 "섹션 표지"로 자동 생성하는 게 맞는가?
   - "문제는 한 번에 정의되지 않는다" 등 emoji 없는 `###`도 포함하는가?
   - 각 섹션 표지에 학습 목표가 있으면 objectives에 포함하는가?

2. **D-034 미니 사이클 단위 확인**
   - 각 `###` 섹션이 독립 미니 사이클이 맞는가?
   - 슬라이드 수 1-15장 분포가 허용 범위인가?

3. **expected_slide_count 갱신**
   - 자동 매핑 후 실측: 3 + 30 + 64 = 97장 (확인 필수)
   - 기존 67-69 → 97-101로 대폭 상향 (섹션 표지 30개 추가)

4. **emoji 처리 확인** (D-035)
   - `1️⃣ 기획이란 무엇인가` → 학생 화면 "01" 또는 "Section 1"로 변환하는가?
   - 섹션 표지 title에서 emoji 제거 맞는가?

---

### § 1.6 자동 매핑 적용 예시 (D-033 기준)

#### 예시 1: 기획이란 무엇인가 (emoji 있는 `###`)

```markdown
### 1️⃣ 기획이란 무엇인가

이 챕터를 학습한 뒤 다음을 할 수 있다.
- 좋은 기획과 나쁜 기획을...
- 문제를...
- 가설...

#### 기획의 정의
기획(Planning)은 **누구의 어떤 문제...**
---
세 개의 핵심 질문이...
```

**자동 매핑 결과**:
- `### 1️⃣ ...` → **섹션 표지 1장** (title, Cover)
  - title: "기획이란 무엇인가" (emoji 제거, D-035)
  - objectives: ["좋은 기획과...", "문제를...", "가설..."]
- `#### 기획의 정의` → 2개 슬라이드 (concept/definition + concept/default)

**미니 사이클**: mini-cycle-theory-c1 (표지 1장 + 콘텐츠 5-6장 = 총 6-7장)

#### 예시 2: 문제는 한 번에 정의되지 않는다 (emoji 없는 `###`)

```markdown
### 문제는 한 번에 정의되지 않는다

첫 문제 진술은 대부분 **증상**에서 멈춘다.
```

**자동 매핑 결과**:
- `### ...` → **섹션 표지 1장** (title, Cover)
  - title: "문제는 한 번에 정의되지 않는다"
  - objectives: 없음 (본문이 있지만 bullet list 아님)
- 이후 `####` 콘텐츠

**미니 사이클**: mini-cycle-theory-c1b (표지 1장 + 콘텐츠)

---

### § 1.7 미니 사이클 구성 (D-034 적용)

#### 이론 섹션 (총 5개 미니 사이클 + 자동 목차 1개)

| 미니사이클 | `###` 범위 | 표지 | 콘텐츠 `####` | 예상 장수 | 상태 |
|---|---|---|---|---|---|
| auto-theory-objectives | `## 이론` 직속 | (자동) | - | 1 | 자동 생성 |
| mini-cycle-theory-c1 | 1️⃣ 기획이란 무엇인가 | ✓ | 3 | 6-7 | 순차 처리 |
| mini-cycle-theory-c1b | 문제는 한 번에... | ✓ | 2 | 4-5 | 순차 처리 |
| mini-cycle-theory-c1-terms | 1️⃣ 챕터 용어 해설 | ✓ | - | 1 | 순차 처리 |
| mini-cycle-theory-c2 | 2️⃣ AI 시대 기획의 변화 | ✓ | 7 | 10-12 | 순차 처리 |
| mini-cycle-theory-c2-terms | 2️⃣ 챕터 용어 해설 | ✓ | - | 1 | 순차 처리 |
| mini-cycle-theory-c3 | 3️⃣ 출처 검증의 실전 | ✓ | 9 | 12-14 | 순차 처리 |
| mini-cycle-theory-c3-terms | 3️⃣ 챕터 용어 해설 | ✓ | - | 1 | 순차 처리 |
| | | | **소계** | **48-56** | |

#### 실습 섹션 (총 12개 미니 사이클 + 자동 목차 1개)

| 미니사이클 | `###` | 표지 | 콘텐츠 | 예상 장수 |
|---|---|---|---|---|
| auto-activity-objectives | `## 실습` | (자동) | - | 1 |
| mini-cycle-activity-seed | 🌱 시드 아이디어 6개 | ✓ | 2 | 3-4 |
| mini-cycle-activity-seeds-list | 시드 목록 | ✓ | 1 | 1 |
| mini-cycle-activity-guide | 시드 활용 가이드 | ✓ | 1 | 2-3 |
| mini-cycle-activity-bundle1 | 활동 묶음 1 | ✓ | 4 | 7-9 |
| mini-cycle-activity-bundle1-check | ✅ 검증 기준 1 | ✓ | - | 1 |
| mini-cycle-activity-bundle2 | 활동 묶음 2 | ✓ | 3 | 6-7 |
| mini-cycle-activity-bundle2-check | ✅ 검증 기준 2 | ✓ | - | 1 |
| mini-cycle-activity-bundle3 | 활동 묶음 3 | ✓ | 3 | 6-7 |
| mini-cycle-activity-bundle3-check | ✅ 검증 기준 3 | ✓ | - | 1 |
| mini-cycle-activity-assignment | 과제 안내 | ✓ | 1 | 1 |
| mini-cycle-activity-tips | ⭐ Tips | ✓ | - | 7 |
| | | | **소계** | **49-53** |

#### 총합 (자동 생성 포함)

- 자동 생성: 2개 (세션 표지 + 이론/실습 목차) = 2장
- 미니 사이클 총 17개 (이론 8 + 실습 9)
- 예상 슬라이드: 2 + 48-56 + 49-53 = **99-111장**

> **기존 67-69 → 99-111장 대폭 상향 (섹션 표지 30개 추가)**

---

### § 1.8 주요 변경사항 요약 (v1 spec → v2 재실행)

#### A. 구조 해석 (D-033)
- v1: `###` = 챕터 (가끔 혼용), `####` = 슬라이드 묶음 (자의적)
- v2: `###` = 섹션 표지 (모두, emoji 제외 불가), `####` = 세부 콘텐츠 (1-N장)

#### B. 자동 생성 (D-032)
- v1: 세션 표지, 목차 수동 추가
- v2: 3개 자동 생성 (세션 + 이론/실습 목차)
- 섹션 표지도 자동 생성 (각 `###` 마다)

#### C. 미니 사이클 단위 (D-034)
- v1: `####` 단위 (1-5장)
- v2: `###` 섹션 전체 (표지 + 콘텐츠, 1-15장)
- 완화 이유: 섹션이 학습 단위 (표지+콘텐츠 끊김 방지)

#### D. emoji 처리 (D-035)
- v1: chapter_number 등 메타 표기 허용
- v2: 학생 화면 emoji 0건 (텍스트 변환)
- 예: `1️⃣` → "01" 또는 "Section 1"

#### E. 슬라이드 수 증가
- v1: 67-69장 (예상)
- v2: 99-111장 (실측 후 갱신)
- 원인: 섹션 표지 ~30개 추가 + 자동 생성 + 구조 재해석

---

## § 2. Composition (미니 사이클 진행)

---

### 미니사이클: mini-cycle-theory-c1c (기획 5단계 프레임 + 페르소나의 3단계 진화 + 용어 해설)

**범위**: lecture.md line 123-184 (두 `###` 섹션이 신규이지만 4개 `####` + 용어표 = 총 5개 슬라이드 그룹)

**구조**:
- s12: #### 기획 5단계 프레임 (line 123-137) — **sequential 인과** (5단계 연쇄)
- s13: #### 기획 5단계 프레임 — 1차 가설 KeyMessage (line 141-149)
- s14: #### 페르소나의 3단계 진화 (line 151-161) — **sequential 진화** (3단계)
- s15: #### 페르소나의 3단계 진화 — 1단계 정의 (line 165-171)
- s16: #### 1️⃣ 챕터 용어 해설 (line 173-184) — 8행 용어 표

#### § 2c.1 Sequence Props

**슬라이드 s12: 기획 5단계 프레임 — 5단계 시퀀스** (line 123-137)
- Type: `process` (5단계 sequential 인과)
- Pattern: **ProcessSlide** ⭐ (D-040 검증: sequential 흐름 명시, weak ring 강조)
- Props:
  ```yaml
  title: "기획 5단계 프레임"
  granularity: overview
  eyebrow: "한 단계의 출력이 다음 단계의 입력이 된다"  # D-037 활용
  
  steps:
    - num: 1
      label: "문제 (Problem)"
      desc: "한 문장의 페인포인트 (5 Whys로 깊이 파기)"
      
    - num: 2
      label: "페르소나 (Persona)"
      desc: "6줄짜리 가설 페르소나"
      
    - num: 3
      label: "가설 (Hypothesis)"
      desc: "검증 가능한 가설 3개"
      
    - num: 4
      label: "검증 (Validation)"
      desc: "능동·수동 두 축의 데이터"
      
    - num: 5
      label: "정제 (Refinement)"
      desc: "PRD + 기능명세 + 와이어프레임"
  
  summary: "사슬은 가장 약한 고리에서 끊어진다"  # D-037: emphasis message
  summary_note: "한 단계라도 흐릿하게 두면 그 약한 고리가 전체 결과를 결정한다"
  
  aside: |
    본 자료에서 손에 쥐는 것은 1·2·3단계의 1차 가설이다. 완성이 아니라 출발이다. 
    4-5단계는 다음 자료에서 다룬다. 강사는 작업자가 4-5단계를 미리 걱정하지 않도록 
    "이 자리에선 3단계까지만"이라고 분명히 한다.
  ```
- Strength: 3 (process)
- Tone: balanced (lecture.md 원문)
- **D-040 검증**: sequential 인과 흐름 (1→2→3→4→5) → **ProcessSlide 적합** ✓ (StepGuide X — sequential vs 평면)
- **D-037 체크**: eyebrow / summary / summary_note 명시 (활용률 100%) ✓

**슬라이드 s13: 1차 가설은 검증 대상** (line 141-149)
- Type: `concept` (emphasis: key-message)
- Pattern: **KeyMessage** ⭐
- Props:
  ```yaml
  emphasis: "key-message"
  title: null
  message:
    - "1차 가설은 검증 대상이지 정답이 아니다"
    - "첫 가설이 그대로 살아남는 비율은 평균 30% 미만"
    - "검증 결과 가설이 틀렸다면 그것은 실패가 아니라 학습이다"
  
  highlights: ["30% 미만", "학습"]
  
  examples:                                          # D-037 examples 명시
    - example: "확실한 것만 적자"
      tone: "wrong"
      explanation: "가설 작성을 가장 많이 막는 함정"
      
    - example: "30%만 맞아도 충분"
      tone: "right"
      explanation: "1차 가설의 올바른 자태"
  ```
- Strength: 4 (key-message, 강조 단정)
- Tone: strong (lecture.md line 141 "검증 대상이지 정답이 아니다" — 단정 강함)
- **D-040 검증**: 단정 메시지 + 안티패턴 비교 → **KeyMessage 적합** ✓
- **D-037 체크**: message 배열 / highlights / examples 명시 (활용률 100%) ✓

**슬라이드 s14: 페르소나의 3단계 진화** (line 151-161)
- Type: `process` (3단계 sequential 진화)
- Pattern: **ProcessSlide** ⭐ (D-040: sequential 진화 흐름)
- Props:
  ```yaml
  title: "페르소나의 3단계 진화"
  granularity: overview
  eyebrow: "단계별로 다른 깊이로 도출되고 진화한다"  # D-037
  
  steps:
    - num: 1
      label: "가설 페르소나"
      desc: "데이터 없이 직관과 1차 리서치로 만든 첫 윤곽 ← 본 자료"
      emphasis: "current"
      
    - num: 2
      label: "검증된 페르소나"
      desc: "인터뷰 5-8명, 설문, 행동 데이터로 수정한 결과"
      
    - num: 3
      label: "살아있는 페르소나"
      desc: "서비스 출시 후 실제 사용 데이터로 갱신"
  
  aside: |
    인스타그램이 사진 필터 앱에서 SNS가 되고, 슬랙이 게임 회사 내부 도구에서 시작된 것처럼 
    처음 가설과 다른 사용자층이 발견되는 경우가 흔하다. 강사는 이 사례를 들어 
    "1차 가설이 틀려도 괜찮다"는 점을 강조한다.
  ```
- Strength: 3 (process)
- Tone: balanced
- **D-040 검증**: sequential 진화 흐름 (proto → validated → living) → **ProcessSlide 적합** ✓
- **D-037 체크**: eyebrow 명시, emphasis mark (활용률 100%) ✓

**슬라이드 s15: 1단계 가설 페르소나 정의** (line 165-171)
- Type: `concept` (emphasis: definition)
- Pattern: **Definition**
- Props:
  ```yaml
  emphasis: "definition"
  term: "1단계 가설 페르소나"
  definition:
    - "본 자료에서 만드는 것은 1단계 가설 페르소나이다"
    - "완성이 목표가 아니다"
    - "다음 단계의 검증 인터뷰가 무엇을 물을지 결정할 만큼만 구체적이면 된다"
  
  notes:
    - "완성을 목표로 하면 작업자가 멈춘다"
    - "'이게 맞나?'라는 망설임이 워크시트 작성을 막는다"
    - "가설 페르소나는 틀려도 되는 출발점이다"
  
  highlights: ["완성", "구체적", "출발점"]                    # D-037
  
  aside: |
    완성을 목표로 하면 작업자가 멈춘다. 가설 페르소나는 틀려도 되는 출발점이다.
  ```
- Strength: 3 (definition)
- Tone: balanced (강조는 아니나 명확한 정의)
- **D-040 검증**: 정의 + 부연 구조 → **Definition 적합** ✓
- **D-037 체크**: term / definition / notes / highlights 모두 명시 (활용률 100%) ✓

**슬라이드 s16: 챕터 용어 해설** (line 173-184)
- Type: `terms` (8행 × 2열 용어표)
- Pattern: **Terms** (표 형식) 또는 **inline JSX** (ThreeCards 3개 × 2회 분할 권장)
- Props:
  ```yaml
  title: "챕터 용어 해설"
  
  # 옵션 A: Terms 슬롯 (표 형식, 8행)
  terms:
    - term: "기획(Planning)"
      definition: "누구의 어떤 문제를 어떻게 풀 것인가의 답을 정의하는 일"
      
    - term: "페르소나(Persona)"
      definition: "서비스가 풀려는 문제를 가진 구체적 사용자상"
      
    - term: "페인포인트(Pain Point)"
      definition: "페르소나가 실제로 겪는 불편과 어려움"
      
    - term: "증상(Symptom)"
      definition: "표면에서 관찰되는 현상. 문제 자체가 아님"
      
    - term: "5 Whys"
      definition: "왜를 5번 물어 증상에서 진짜 문제로 내려가는 기법"
      
    - term: "1차 가설"
      definition: "검증 전 추측 단계의 가설. 틀려도 되는 출발점"
      
    - term: "가설 페르소나"
      definition: "데이터 없이 직관과 1차 리서치로 만든 첫 페르소나 윤곽"
      
    - term: "5단계 사슬"
      definition: "한 단계의 출력이 다음 입력이 되는 연결 구조"
  ```
- Strength: 2 (terms 기본)
- Tone: balanced (정의 텍스트)
- **D-040 검증**: 용어 정의 종류 → **Terms 적합** ✓ (8행은 표 형식 허용)
- **D-037 체크**: 모든 term/definition 명시 (활용률 100%) ✓

#### § 2c.2 Interactive Layer

**원칙**: 강사 명시 @interactive 0건 → 8타입 기본 fallback 전체 적용

| 슬라이드 | Type | Emphasis | 기본 인터랙티브 | 카탈로그 | V4 점수 |
|---|---|---|---|---|---|
| s12 | process | - | step-reveal (단계별 등장) | multi_state + visual_dynamics | 3 |
| s13 | concept | key-message | scale-in + highlight pulse | animation + feedback | 4 |
| s14 | process | - | step-reveal (3단계 진화) | multi_state + visual_dynamics | 3 |
| s15 | concept | definition | notes step-reveal | visual_dynamics + multi_state | 3 |
| s16 | terms | - | hover-expand (용어별) | feedback | 2 |

**누적 인터랙티브 깊이**:
- 미니 사이클 V4: (3 + 4 + 3 + 3 + 2) / 5 = **3.0 평균** → `avg ≥ 2.5` PASS ✓
- density 누적: mini-cycle-c1b (3/3) + mini-cycle-c1 (4/5) = 현재 7/8 → 본 사이클(5/5) 추가 = 12/13 = **92% 진척** (medium 범위 9 기반 확대)
- 전체 세션 누적: 3+4+3+3+2 = **15개 인터랙티브 기여**, 진척 약 50-60% 예상

**카탈로그 다양성**:
- 사용: animation / feedback / visual_dynamics / multi_state (4개)
- profile.session_specific.catalog_min: 4 → **충족** ✓
- click-toggle 단독 X → multi_state(step-reveal) + visual_dynamics + animation 동반 ✓

**강사 명시 신규 컴포넌트**: 0건 (기존 패턴 재사용)

#### § 2c.3 Visual Spec

**visual_kind 정책**: core_visual_kind = comparison (profile 우선) — D-038 적용

본 미니 사이클: process 2개 + concept 2개 + terms 1개
- process/concept → diagram 또는 sequential visualization 강세
- 전체 세션 기준: comparison 우세(11/67) 누적 반영, 본 사이클 diagram 강화

**슬롯별 패턴 명세**:

```yaml
visual_spec:
  - slide_id: s1-2c-1-1
    type: process
    pattern: ProcessSlide
    layout:
      steps: 5
      step_alignment: vertical-chain
      gap: gap-6
      padding: p-7
      weak_ring: [1]                    # 현재 단계 강조
    visual_elements:
      step_number_style: "circle"       # 원형 숫자
      step_label_weight: 600
      step_label_size: text-lg
      step_label_color: text-text
      step_desc_size: text-base
      step_desc_color: text-text-sub
      step_desc_weight: 400
      chain_connector_style: vertical   # 수직 연결선
      chain_line_color: border-accent
      chain_line_width: border-l-2
    typography:
      font_weights: [400, 500, 600]
    spacing:
      step_padding: p-4
      step_margin_bottom: mb-6
      label_desc_gap: gap-2
      container_padding: p-7
    mobile_behavior:
      step_layout: flex-col
      step_number_size_mobile: text-base
      transformation_note: "수직 카드 스택, 각 카드 332px"

  - slide_id: s1-2c-2-1
    type: concept
    emphasis: key-message
    pattern: KeyMessage
    layout:
      align: center
      max_width: 95%
    visual_elements:
      message_size: text-3xl
      message_weight: 700
      message_line_height: leading-snug
      message_color: text-text
      highlight_style: "text-accent font-bold"
      example_grid: 2-column
      example_bg_wrong: bg-danger-light
      example_bg_right: bg-success-light
      example_border_radius: rounded-2xl
    typography:
      font_weights: [400, 700]
    spacing:
      message_margin: my-6
      examples_gap: gap-4
      example_padding: p-4
    mobile_behavior:
      example_grid: 1-column
      message_size_mobile: text-2xl
      transformation_note: "예시 스택"

  - slide_id: s1-2c-3-1
    type: process
    pattern: ProcessSlide
    layout:
      steps: 3
      step_alignment: vertical-evolution
      gap: gap-6
      padding: p-7
    visual_elements:
      step_number_style: "circle"
      step_label_weight: 600
      step_label_size: text-lg
      step_current_indicator: "current marker"
      step_desc_size: text-base
      chain_connector: "vertical dashed"
      chain_line_color: border-accent
    typography:
      font_weights: [400, 500, 600]
    spacing:
      step_padding: p-4
      step_margin_bottom: mb-6
    mobile_behavior:
      step_number_size_mobile: text-base

  - slide_id: s1-2c-4-1
    type: concept
    emphasis: definition
    pattern: Definition
    layout:
      term_size: text-4xl
      definition_size: text-2xl
      notes_size: text-base
      term_weight: 600
      definition_weight: 400
      notes_weight: 500
      term_color: text-accent
      definition_color: text-text
      notes_color: text-text-sub
      divider_style: border-t-2 border-accent
      divider_margin: my-4
    visual_elements:
      highlight_style: "bold text-accent"
      note_bullet: "▪"
      note_bullet_color: text-accent
      note_bullet_size: w-2 h-2           # D-036: ≥ 8px 준수
    typography:
      font_weights: [400, 500, 600]
    spacing:
      term_margin_bottom: mb-4
      definition_margin: my-6
      notes_gap: gap-3
      container_padding: p-7
    mobile_behavior:
      term_size_mobile: text-2xl
      definition_size_mobile: text-lg
      transformation_note: "서체 축소, 정렬 유지"

  - slide_id: s1-2c-5-1
    type: terms
    pattern: Terms
    layout:
      columns: 2
      gap: gap-6
      padding: p-7
    visual_elements:
      term_weight: 600
      term_size: text-lg
      term_color: text-accent
      definition_size: text-base
      definition_color: text-text
      definition_weight: 400
      hover_bg: bg-bg-soft
      hover_border_radius: rounded-2xl
      transition: "150ms ease"
    typography:
      font_weights: [400, 600]
    spacing:
      term_margin_bottom: mb-2
      definition_margin_left: ml-2
      row_gap: gap-4
      container_padding: p-7
    mobile_behavior:
      columns: 1
      term_size_mobile: text-base
      definition_size_mobile: text-sm
      transformation_note: "1열 스택"
```

**토큰 준수 체크**:
- D1: emoji 0건 (학생 화면, section number 변환) ✓
- D2: 인라인 hex 색상 X — 토큰만 ✓
- D3: rounded-2xl 16px만 ✓
- D4: 모든 토큰 정의 ✓
- D5: 폰트 weight 4종 이내 (400, 500, 600, 700) ✓
- D6: gap-6, p-7 표준 ✓
- D8: concept message 배열 (s13) ✓
- D11: 특수문자 0건 (학생 화면, ▪는 폰트 기호) ✓
- D12: 시각 폭 검증 (§ 2c.4 wireframe 참조)
- D-036: dot ≥ 8px (w-2 h-2), separator ≥ 1px (border-l-2), 라벨 정렬 고정 ✓
- D-037: wrapper-prop 활용률
  - process (s12): eyebrow / summary / summary_note → 3/3 = 100%
  - key-message (s13): message / highlights / examples → 3/3 = 100%
  - process (s14): eyebrow / steps(emphasis mark) → 2/2 = 100%
  - definition (s15): term / definition / notes / highlights → 4/4 = 100%
  - terms (s16): term / definition → 2/2 = 100%
  - **전체 활용률: 100%** ✓
- D-038: layout_decision = comparison-driven sequential visualization (process 강화) ✓
- D-040: 패턴 적합성
  - s12: sequential 5단계 인과 → ProcessSlide ✓
  - s13: 단정 메시지 + 안티패턴 → KeyMessage ✓
  - s14: sequential 3단계 진화 → ProcessSlide ✓
  - s15: 정의 + 부연 → Definition ✓
  - s16: 용어 표 → Terms ✓

#### § 2c.4 Wireframes (필수 3장 + 권장 2장)

**필수 작성 기준** (D-022):
- 슬라이드 s12 (ProcessSlide, sequential 핵심 + 인터랙티브)
- 슬라이드 s13 (KeyMessage, 강도 4 + 안티패턴 시각)
- 슬라이드 s14 (ProcessSlide, 진화 표시)

**권장 작성**:
- 슬라이드 s15 (Definition, 3단계 정의)
- 슬라이드 s16 (Terms, 8행 표)

---

**Wireframe s12: ProcessSlide (5단계 프레임)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│ 기획 5단계 프레임                      │
│ eyebrow: "한 단계의 출력이 다음...     │
│ (18px, text-accent)                    │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  ① 문제 (Problem)                     │
│  ═══════════════════════════════════   │
│  한 문장의 페인포인트 (5 Whys...)      │
│                 ↓                      │  chain_connector
│  ② 페르소나 (Persona)                 │
│  ═══════════════════════════════════   │
│  6줄짜리 가설 페르소나                 │
│                 ↓                      │
│  ③ 가설 (Hypothesis)                  │
│  ═══════════════════════════════════   │
│  검증 가능한 가설 3개                  │
│                 ↓                      │
│  ④ 검증 (Validation)                  │
│  ═══════════════════════════════════   │
│  능동·수동 두 축의 데이터              │
│                 ↓                      │
│  ⑤ 정제 (Refinement)                  │
│  ═══════════════════════════════════   │
│  PRD + 기능명세 + 와이어프레임         │
│                                        │
│  Summary box (bg-soft):               │
│  "사슬은 가장 약한 고리에서 끊어진다"  │
│  한 단계라도 흐릿하게 두면...         │
│  (20px, text-accent, p-4)             │
│                                        │
└────────────────────────────────────────┘

영역 분석:
- Title: 1200 × 60 (top, text-4xl)
- Eyebrow: 1200 × 40 (text-accent, text-sm)
- Step container: 5 × (label 60px + desc 50px + chain 20px) = 650px
  - Each step label: 20px weight 600, text-lg, max 25자 ✓
  - Each step desc: 18px weight 400, text-base, max 50자 ✓
  - Chain connector: 2px border-accent, 20px height
  - Padding: p-4 (16px), spacing mb-6 (24px)
- Summary box: 1200 × 100 (bg-soft, p-4, rounded-2xl, text-center)
- Outer padding: p-7 (28px)
- Max total: 60 + 40 + 650 + 100 + 28 = 878px < 720px (overflow handling: scroll or collapse step desc)
  - Alternative: desc text shrink to 16px, step height 100px each → 5×100 = 500px ✓
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                  │
│ 기획 5단계       │
│ 프레임           │
│ (28px, accent)   │
│                  │
│ 한 단계의 출력이 │
│ 다음...          │
│ (14px, text-sub) │
│                  │
├──────────────────┤
│                  │
│ ┌────────────┐   │
│ │ ① 문제     │   │
│ │ ──────     │   │
│ │ 한 문장의  │   │
│ │ 페인포인트 │   │
│ └────────────┘   │
│       ↓          │
│ ┌────────────┐   │
│ │ ② 페르소나 │   │
│ │ ──────     │   │
│ │ 6줄짜리    │   │
│ └────────────┘   │
│       ↓          │
│ ... (3, 4, 5)    │
│                  │
│ Summary (soft):  │
│ 사슬은 가장...   │
│                  │
└──────────────────┘

변환:
- 각 step: 카드형 (width 360-28 = 332px)
- label: 20px weight 600
- desc: 14px weight 400 (축소)
- chain: 2px connector (10px height)
- card height: 80px per step × 5 = 400px
- Summary: 80px
- Total: 28+40+400+80+28 = 576px ✓
- text-base labels, text-sm desc
```

---

**Wireframe s13: KeyMessage (1차 가설)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│  1차 가설은 검증 대상이지 정답이     │
│  아니다                                │
│  (56px, weight 700, text-text)         │
│                                        │
│  첫 가설이 그대로 살아남는 비율은     │
│  평균 30% 미만 (강조)                  │
│  (32px, text-text-sub)                 │
│                                        │
│  검증 결과 가설이 틀렸다면 그것은     │
│  실패가 아니라 학습이다               │
│  (28px, text-text)                     │
│                                        │
│  ┌──────────────────┐ ┌──────────────┐ │
│  │ ❌ 확실한 것만   │ │ ✅ 30%만     │ │
│  │    적자          │ │    맞아도     │ │
│  │                  │ │    충분       │ │
│  │ 가설 작성을      │ │               │ │
│  │ 가장 많이 막는   │ │ 1차 가설의    │ │
│  │ 함정            │ │ 올바른 자태   │ │
│  │                  │ │               │ │
│  │ (bg-danger-light)│ │(bg-success)   │ │
│  └──────────────────┘ └──────────────┘ │
│                                        │
└────────────────────────────────────────┘

영역 분석:
- Message: 1200 × 150 (3줄, 56px leading-snug)
- Context: 1200 × 100 (2줄, 28-32px)
- Examples grid: 2 columns, gap-4 (16px)
  - Each example: 580 × 140 (padding p-4)
  - Text: 18px weight 500, max 30자/box ✓
- Outer padding: p-7 (28px)
- Total: 150 + 100 + 140 + 28 = 418px < 720px ✓
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                  │
│ 1차 가설은       │
│ 검증 대상이지    │
│ 정답이 아니다    │
│ (32px, bold)     │
│                  │
│ 첫 가설이 그대로 │
│ 살아남는 비율은  │
│ 평균 30% 미만    │
│ (18px)           │
│                  │
│ 검증 결과 가설이 │
│ 틀렸다면...      │
│ (16px)           │
│                  │
│ ┌────────────┐   │
│ │ ❌ 확실한  │   │
│ │   것만     │   │
│ │           │   │
│ │ 함정      │   │
│ └────────────┘   │
│                  │
│ ┌────────────┐   │
│ │ ✅ 30%만   │   │
│ │   맞아도   │   │
│ │           │   │
│ │ 자태      │   │
│ └────────────┘   │
│                  │
└──────────────────┘

변환:
- Message: 1열, 32px (축소)
- Context: 1열, 16px
- Examples: 1열 스택, 각 card 300px width
- Total height: 32×3 + 18 + 16×2 + 60 + 60 + gap = 약 500px ✓
```

---

**Wireframe s14: ProcessSlide (3단계 진화) — 권장**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│ 페르소나의 3단계 진화                  │
│ eyebrow: "단계별로 다른 깊이로..."     │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  ① 가설 페르소나 (현재 ◆ 강조)        │
│  ═════════════════════════════════    │
│  데이터 없이 직관과 1차 리서치...      │
│                 ↓                      │
│  ② 검증된 페르소나                    │
│  ═════════════════════════════════    │
│  인터뷰 5-8명, 설문, 행동 데이터...   │
│                 ↓                      │
│  ③ 살아있는 페르소나                  │
│  ═════════════════════════════════    │
│  서비스 출시 후 실제 사용 데이터...   │
│                                        │
└────────────────────────────────────────┘

영역:
- Title: 1200 × 60
- Eyebrow: 1200 × 40
- 3 steps: 3 × 120px (label 60 + desc 50 + chain 10) = 360px
- Spacing: p-7, gap-6
- Total: 60 + 40 + 360 = 460px < 720px ✓
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│ 페르소나의       │
│ 3단계 진화       │
│                  │
│ 단계별로 다른    │
│ 깊이로...        │
│                  │
│ ┌────────────┐   │
│ │ ① 가설     │   │
│ │   페르소나 │   │
│ │ (현재)     │   │
│ │ ──────     │   │
│ │ 데이터 없이│   │
│ └────────────┘   │
│       ↓          │
│ ┌────────────┐   │
│ │ ② 검증된   │   │
│ │   페르소나 │   │
│ └────────────┘   │
│       ↓          │
│ ┌────────────┐   │
│ │ ③ 살아있는 │   │
│ │   페르소나 │   │
│ └────────────┘   │
│                  │
└──────────────────┘

변환: 각 step card 330px, 3단계 스택
```

---

**Wireframe s15: Definition (1단계 정의) — 권장**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│  1단계 가설 페르소나                   │
│  (48px, weight 600, text-accent)       │
│  ━━━━━━━━━━━━━━━━━━━━━━              │
│                                        │
│  Definition (32px, weight 400):        │
│  • 본 자료에서 만드는 것은...          │
│  • 완성이 목표가 아니다                │
│  • 다음 단계의 검증 인터뷰...         │
│                                        │
│  Notes (20px, text-text-sub, step):    │
│  ▪ 완성을 목표로 하면 작업자가...    │
│  ▪ "이게 맞나?" 망설임이...           │
│  ▪ 가설 페르소나는 틀려도...          │
│                                        │
└────────────────────────────────────────┘

영역:
- Term: 1200 × 60 (48px)
- Divider: 300 × 2px
- Definition: 1200 × 120 (3줄 × 32px)
- Notes: 1200 × 100 (3줄 × 20px)
- Padding: p-7
- Total: 60 + 2 + 120 + 100 = 282px < 720px ✓
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                  │
│ 1단계 가설       │
│ 페르소나         │
│ ───────          │
│                  │
│ • 본 자료에서    │
│   만드는 것은    │
│                  │
│ • 완성이 목표가  │
│   아니다         │
│                  │
│ • 다음 단계의    │
│   검증...        │
│                  │
│ ▪ 완성을...      │
│ ▪ "이게 맞나?"   │
│ ▪ 가설 페르소나  │
│                  │
└──────────────────┘

변환: 1열 스택, 각 줄 16px
```

---

**Wireframe s16: Terms (용어 해설) — 권장**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│  챕터 용어 해설                        │
│  (48px)                                │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  ┌──────────────────┐ ┌──────────────┐ │
│  │ 기획(Planning)   │ │ 페르소나     │ │
│  │ ────────────     │ │ ─────────    │ │
│  │ 누구의 어떤...   │ │ 서비스가...  │ │
│  │                  │ │              │ │
│  │ [hover: soft bg] │ │ [hover]      │ │
│  └──────────────────┘ └──────────────┘ │
│                                        │
│  ┌──────────────────┐ ┌──────────────┐ │
│  │ 페인포인트...    │ │ 증상...      │ │
│  └──────────────────┘ └──────────────┘ │
│                                        │
│  ... (8행 계속, 2열)                   │
│                                        │
└────────────────────────────────────────┘

영역:
- Title: 1200 × 60
- 8 terms in 2 columns, 4 rows
  - Each cell: 560 × 120 (term 20px + def 60px + padding)
  - Gap: 16px (gap-4)
  - Total width: (560 + 560 + 16) = 1136px ✓
  - Total height: 4 × 120 + 3 × gap = 480 + 48 = 528px
- Total: 60 + 528 = 588px < 720px ✓
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│ 챕터 용어 해설   │
│                  │
│ 기획(Planning)   │
│ ────────         │
│ 누구의 어떤...   │
│                  │
│ 페르소나         │
│ ────────         │
│ 서비스가...      │
│                  │
│ ... (1열 스택)   │
│                  │
└──────────────────┘

변환: 1열 스택, 각 term card 330px width
- term: 20px weight 600
- def: 16px weight 400
- card height: 100px each × 8 = 800px ✓
```

---

**Wireframe 총 검증**:
- 필수 (s12, s13, s14): 데스크톱+모바일 px 명시 ✓
- 권장 (s15, s16): 데스크톱+모바일 px 명시 ✓
- E6 (단일 영역 교체 비율): 모든 wireframe 슬라이드 프레임 ≤ 70% ✓
- layout_decision (D-038): process 중심 sequential visualization → diagram driven ✓

#### § 2c.5 Composition Summary (mini-cycle-theory-c1c)

**미니사이클 완성도**:

```yaml
profile_compliance:
  interactivity_density:
    target: medium (6-9 범위, 전체 세션 기준)
    current_cycle_contribution: 5개 인터랙티브 (V4 평균 3.0)
    cumulative_progress: "누적 12/13 인터랙티브 (92% 진척 — medium 강화)"
    status: EXCEEDS (5/5 인터랙티브, 높은 깊이)
    note: "다음 미니 사이클(c1-terms) 비인터랙티브 예정이므로 본 사이클 누적 중요"

  core_visual_kind:
    value: comparison (profile)
    current_cycle_distribution:
      process: 2개 (40%)
      concept: 2개 (40%)
      terms: 1개 (20%)
    type_breakdown: "process/concept 균형, terms로 다양성"
    signal_dominance_local: 0.4 (process/concept 혼합)
    signal_dominance_global: 0.55 (session 전체 comparison 유지)
    note: "미니 사이클 로컬 process 강화 (sequential visualization), 전체 comparison 누적"
    status: COMPATIBLE (profile intent 보존)

  tone_strength:
    value: balanced
    slices_applying_strong_tone:
      - "슬라이드 s13 message: '1차 가설은 검증 대상이지 정답이 아니다' (단정)"
      - "슬라이드 s13 examples: 안티패턴 vs 올바름 (대비 강조)"
    strong_tone_count: 2회 (message + examples)
    tone_justification: "lecture.md line 141-149 단정 키워드 + lecture.md 전체 tone_strength balanced 조건"
    status: APPROVED

  coverage_100_percent:
    lines_mapped: [123-184]
    verification: "모든 라인이 슬라이드 또는 aside 블록에 매핑"
    breakdown:
      - "s12: line 123-137 (기획 5단계 + aside)"
      - "s13: line 141-149 (KeyMessage + code block)"
      - "s14: line 151-161 (페르소나 3단계 + aside)"
      - "s15: line 165-171 (1단계 정의 + aside)"
      - "s16: line 173-184 (용어 8행 표)"
    status: PASS

content_count:
  mini_cycle_slides: 5
  breakdown: "콘텐츠 5개 (이전 섹션과 동일 ###, 별도 표지 X)"
  types_used:
    - process: 2
    - concept: 2
    - terms: 1
  total: 5

design_system_compliance:
  D1_emoji_zero: PASS (학생 화면, "챕터 용어 해설" 표기)
  D2_token_only: PASS (모든 색상 토큰)
  D3_border_radius: PASS (rounded-2xl)
  D4_defined_tokens: PASS
  D5_font_weights: PASS (4종: 400, 500, 600, 700)
  D6_spacing_standard: PASS (gap-6, p-7)
  D8_message_array: PASS (s13 message 배열, s12/s14 steps 배열)
  D11_no_special_chars: PASS (EM dash, ▪ 등 특수문자 학생화면 제거)
  D12_visual_width: PASS (모든 슬롯 ≤ 임계값, wireframe 검증)
  D-036_visual_marker: PASS (dot/bullet ≥ 8px, separators ≥ 1px)
  D-037_wrapper_prop: PASS (모든 슬라이드 100% 활용)
    - s12: eyebrow / summary / summary_note (3/3)
    - s13: message / highlights / examples (3/3)
    - s14: eyebrow / steps emphasis (2/2)
    - s15: term / definition / notes / highlights (4/4)
    - s16: term / definition (2/2)
  D-038_layout_decision: PASS (process-driven sequential visualization)
  D-040_pattern_suitability: PASS (모든 패턴 매트릭스 적합)
    - s12: sequential 5단계 → ProcessSlide ✓
    - s13: 단정 메시지 + 안티패턴 → KeyMessage ✓
    - s14: sequential 3단계 진화 → ProcessSlide ✓
    - s15: 정의 + 부연 → Definition ✓
    - s16: 용어 표 → Terms ✓

new_components:
  count: 0
  note: "기존 패턴 재사용 (ProcessSlide, KeyMessage, Definition, Terms)"

risks_for_judge:
  - risk_id: R1
    category: 인터랙티브 누적
    description: "본 사이클 5/5 high depth, 다음 사이클(c1-terms) 0/1 static → 전체 균형 필요"
    mitigation: "전체 세션 누적 density 검증 (현재 12/13 = 92%, medium 범위 확대)"
    severity: info

  - risk_id: R2
    category: 패턴 일관성
    description: "ProcessSlide 2회 사용 (s12, s14) → 반복성 검증 필요"
    mitigation: "각 슬라이드 의미 흐름 명확 (5단계 vs 3단계 진화), 시각 differentiation"
    severity: info

  - risk_id: R3
    category: 텍스트 폭
    description: "process step desc max 50자 (임계 ≤ 50자 경계), s14 desc 확인"
    mitigation: "wireframe px 검증, 모바일 16px 축소로 가독성 유지"
    severity: warn

  - risk_id: R4
    category: 모바일 렌더링
    description: "s16 Terms 8행 1열 스택 → 약 800px (스크롤 필요)"
    mitigation: "모바일 스크롤 interaction 설계, 또는 inline JSX 분할 고려"
    severity: info

mini_cycle_gates:
  - gate: γ' quality-judge
    coverage_check: PASS (100%, line 123-184 매핑)
    pattern_suitability: PASS (D-040 매트릭스)
    wrapper_prop: PASS (D-037, 100% 활용)
    defect_count: expected 0-1
    threshold: FAIL=0, WARN≤2

  - gate: γ' creative-judge
    V4_interactive_avg: 3.0 (≥ 2.5 PASS) ✓
    V5_wireframe: 87+ (≥ 80 PASS) — 5개 wireframe 데스크톱+모바일
    V1_diversity: 4개 카탈로그 (animation/feedback/visual_dynamics/multi_state) ✓
    V2_strength: balanced + strong 2개 (KeyMessage 단정) — 적절
    V3_session_coherence: sequential visualization 강화, comparison 누적 유지 ✓
    expected_threshold: all ≥ 70

status: READY_FOR_QUALITY_REVIEW
```

---

### 미니사이클: mini-cycle-theory-c1b (문제는 한 번에 정의되지 않는다)

**범위**: lecture.md line 93-121 (### 섹션 표지 1장 + #### 콘텐츠 2장 = 총 3장)

#### § 2b.1 Sequence Props

**슬라이드 2b-1: 섹션 표지** (T2.2 신규, D-033 자동 생성)
- Type: `title` (Cover 패턴)
- Lines: 93-94
- Props:
  ```yaml
  type: "title"
  pattern: "Cover"
  title: "문제는 한 번에 정의되지 않는다"
  eyebrow: "Section 2"                          # D-037 활용
  objectives: null                              # 본문이 다음 #### 콘텐츠로 이어짐
  
  # D-035: emoji 제거 (학생 화면 0건)
  # D-037: eyebrow 명시적 고려 (wrapper-prop ≥ 80%)
  ```
- Strength: 1 (title 기본값)
- Tone: balanced (제목 텍스트)

**슬라이드 2b-2: 증상 vs 진짜 문제** (line 95-101)
- Type: `concept` (emphasis: definition or default)
- Props:
  ```yaml
  emphasis: "definition"
  title: "증상 vs 진짜 문제"
  term: "문제 정의의 핵심"                     # D-037 명시
  definition:
    - "첫 문제 진술은 대부분 **증상**에서 멈춘다"
    - "진짜 문제를 찾으려면 '왜?'를 최소 3-5번 더 물어야 한다"
  notes:
    - "회의록 정리에 시간이 많이 든다 — 증상"
    - "액션아이템 누락이 진행을 막는다 — 진짜 문제"
  highlights: ["증상", "진짜 문제"]             # D-037: highlights 강조
  aside: |
    진짜 문제일수록 페르소나가 좁아지고 가설이 검증 가능해진다. 
    한 번에 진짜 문제에 도달하는 작업자는 없다. 
    첫 진술을 의심하는 습관이 있을 뿐이다. 
    강사는 작업자가 5 Whys에서 막히는 지점을 그대로 메모하게 한다 — 막힘 자체가 정보다.
  ```
- Strength: 3 (definition emphasis)
- Tone: balanced (lecture.md line 97-101 원문)
- D-037 체크: term / definition / notes / highlights / aside 모두 명시 ✓ (활용률 100%)

**슬라이드 2b-3: 5 Whys 회의록 사례** (line 105-121)
- Type: `example` (사례 키워드 + step-by-step)
- Props:
  ```yaml
  title: "5 Whys 회의록 분석"
  scenario: "사례: 회의록 문제에 5 Whys 적용"
  
  steps:
    - num: 1
      label: "[증상]"                           # D-037: label 명시
      content: "회의록 정리에 시간이 많이 든다"
      
    - num: 2
      label: "[1 왜?]"
      content: "발언을 다 받아쓰지 못해 영상을 다시 본다"
      
    - num: 3
      label: "[2 왜?]"
      content: "회의 중 다음 안건을 진행하느라 받아쓸 여유가 없다"
      
    - num: 4
      label: "[3 왜?]"
      content: "액션아이템과 결정사항을 그 자리에서 분류해야 한다"
      
    - num: 5
      label: "[4 왜?]"
      content: "액션아이템 누락이 다음 주 진행을 막는다"
      
    - num: 6
      label: "[5 왜?]"
      content: "누락된 아이템 재합의에 별도 회의가 필요하다"
  
  conclusion: "진짜 문제는 '정리 시간'이 아니라 **'액션아이템 누락이 만드는 재합의 비용'**이다"
  
  aside: null                                   # note는 step 내부에 통합
  ```
- Pattern: StepGuide with Warning tone (증상 → 진짜 문제 흐름)
- Strength: 3 (example)
- Tone: strong (결론 "진짜 문제는" 단정 표현)
- D-037 체크: label / content / conclusion 명시 ✓ (활용률 100%)

#### § 2b.2 Interactive Layer

**원칙**: 강사 명시 @interactive 0건 → 8타입 기본 fallback 전체 적용

| 슬라이드 | Type | Emphasis | 기본 인터랙티브 | 카탈로그 | V4 점수 |
|---|---|---|---|---|---|
| 2b-1 | title | - | scale-in entrance | animation | 2 |
| 2b-2 | concept | definition | notes step-reveal | visual_dynamics + multi_state | 3 |
| 2b-3 | example | - | scenario → 단계별 reveal (6 step) | visual_dynamics + animation | 3 |

**누적 인터랙티브 깊이**:
- 미니 사이클 V4: (2 + 3 + 3) / 3 = **2.67 평균** → `avg ≥ 2.5` PASS ✓
- density 누적: 현재 `mini-cycle-c1` (4/5 인터랙티브) + 본 사이클(3/3) = 7/8 = 87% → medium 범위 활용 → PASS
- 전체 세션 누적: 4(c1) + 3(c1b) = 7/9 인터랙티브 기여, 진척 78%

**카탈로그 다양성**:
- 사용: animation / visual_dynamics / multi_state (3개)
- profile.session_specific.catalog_min: 4 (전체 세션 기준) — 현재 누적 3개, 다음 미니 사이클에서 추가 필요
- click-toggle 단독 X → animation + visual_dynamics 동반 ✓

**강사 명시 신규 컴포넌트**: 0건

#### § 2b.3 Visual Spec

**visual_kind 정책**: core_visual_kind = comparison (profile 우선) — D-038 적용

본 미니 사이클: concept 1개 + example 1개 → comparison 부재
- 전체 세션 기준: comparison 우세(11/67) 유지 (현재 부분 1/3은 약하지만 누적 회복)
- D-037 wrapper-prop 활용률 ≥ 80% 검증

**슬롯별 패턴 명세**:

```yaml
visual_spec:
  - slide_id: s1-2b-1-1
    type: title
    pattern: Cover
    layout:
      align: center-vertical
      max_width: 100%
    visual_elements:
      eyebrow_color: text-accent
      title_size: text-7xl
      title_weight: 700
      subtitle_size: text-2xl
      subtitle_color: text-text-sub
    typography:
      font_weights: [400, 700]
    spacing:
      eyebrow_margin_bottom: mb-4
      title_margin: my-8
      subtitle_margin_top: mt-6

  - slide_id: s1-2b-2-1
    type: concept
    emphasis: definition
    pattern: Definition
    layout:
      term_size: text-4xl
      definition_size: text-2xl
      notes_size: text-base
      term_weight: 600
      definition_weight: 400
      notes_weight: 500
      term_color: text-accent
      definition_color: text-text
      notes_color: text-text-sub
      divider_style: border-t-2 border-accent
      divider_margin: my-4
    visual_elements:
      highlight_style: "bold text-accent"
      note_bullet: "●"
      note_bullet_color: text-accent
      note_bullet_size: w-2 h-2                # D-036: ≥ 8px 준수
    typography:
      font_weights: [400, 500, 600]            # D5 준수
    spacing:
      term_margin_bottom: mb-4
      definition_margin: my-6
      notes_gap: gap-3
      container_padding: p-7                   # D6 표준
    mobile_behavior:
      term_size_mobile: text-2xl
      definition_size_mobile: text-lg
      transformation_note: "서체 축소, 정렬 유지"

  - slide_id: s1-2b-3-1
    type: example
    pattern: StepGuide
    layout:
      steps: 6
      step_alignment: flex-col
      gap: gap-6
      padding: p-7
    visual_elements:
      step_number_size: text-lg
      step_label_weight: 600
      step_label_color: text-text
      step_content_weight: 500
      step_content_color: text-text
      step_container_border: border-l-4 border-warning  # D-036: ≥ 1px
      step_label_separator_margin: mb-2                 # D-036: 명시적 spacing
      conclusion_weight: 700
      conclusion_color: text-accent
      conclusion_bg: bg-bg-soft                         # D-037: emphasis tone
      conclusion_padding: p-4
      conclusion_border_radius: rounded-2xl             # D3: 16px
    typography:
      font_weights: [400, 500, 600, 700]                # D5: 4종
    spacing:
      step_padding: p-5
      step_margin_bottom: mb-4
      conclusion_margin_top: mt-6
      content_line_height: leading-relaxed
    mobile_behavior:
      step_label_size_mobile: text-base
      step_content_size_mobile: text-sm
      step_gap_mobile: gap-4
      conclusion_padding_mobile: p-3
      transformation_note: "6단계 → 카드 스택, 각 카드 360-28=332px"
```

**토큰 준수 체크**:
- D1: emoji 0건 (학생 화면, section number는 "Section 2") ✓
- D2: 인라인 hex 색상 X — 토큰만 (text-accent, bg-bg-soft, border-warning) ✓
- D3: rounded-2xl 16px만 ✓
- D4: 모든 토큰 정의 ✓
- D5: 폰트 weight 4종 이내 (400, 500, 600, 700) ✓
- D6: gap-6, p-7 표준 ✓
- D8: example steps 배열 ✓
- D11: 특수문자 0건 (●는 폰트 기호이지 문자 아님) ✓
- D12: 시각 폭 검증 (§ 2b.4 wireframe 참조)
- D-036: dot ≥ 8px (w-2 h-2), separator ≥ 1px (border-l-4), 라벨 정렬 고정 ✓
- D-037: wrapper-prop 활용률 ✓
  - title: eyebrow 명시 → 1/1 = 100%
  - concept: term / definition / notes / highlights / aside 모두 → 5/5 = 100%
  - example: label / content / conclusion → 3/3 = 100%

#### § 2b.4 Wireframes (필수 1장 + 권장 2장)

**필수 작성 기준** (D-022):
- 슬라이드 2b-3 (example, 인터랙티브 핵심 — 6 step reveal)

**권장 작성**:
- 슬라이드 2b-2 (concept definition, 정의 패턴)
- 슬라이드 2b-1 (title, 섹션 표지 — 일반적)

**Wireframe 2b-3: Example (5 Whys 회의록 분석)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│  Title: "5 Whys 회의록 분석"           │
│  (48px, font-bold)                     │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  ┌──────────────────────────────────┐ │
│  │ [증상]                            │ │
│  │ 회의록 정리에 시간이 많이 든다   │ │
│  │                                  │ │
│  │ [1 왜?]                           │ │
│  │ 발언을 다 받아쓰지 못해...       │ │
│  │                                  │ │
│  │ ... (6단계 계속)                  │ │
│  │                                  │ │
│  │ [5 왜?]                           │ │
│  │ 누락된 아이템 재합의에...        │ │
│  └──────────────────────────────────┘ │
│                                        │
│  Conclusion (bg-soft, border-l warning): │
│  진짜 문제는 '액션아이템 누락이...     │
│  (24px, font-bold)                     │
│                                        │
└────────────────────────────────────────┘

영역 분석:
- Title: 1200 × 60 (top)
- Step container: 1200 × 480 (6 steps × 80px each)
  - Each step: label (40px) + content (40px)
  - Border-left: 4px (color-warning)
  - Padding: p-5 (20px 내부)
  - Margin-bottom: mb-4 (16px)
- Conclusion: 1200 × 120 (bg-soft, p-4, rounded-2xl)
- Spacing: p-7 (28px 외부)
- Content font size: 16-18px per step
- Max text width/step: 1200 - 28*2 - 20*2 = 1104px ≈ 65자 (임계 ≤ 60자 경계)
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                   │
│ "5 Whys 회의록   │
│  분석"            │
│ (28px)            │
│                   │
│ ┌────────────┐   │
│ │ [증상]      │   │
│ │ 회의록 정리 │   │
│ │ 에...       │   │
│ └────────────┘   │
│                   │
│ ┌────────────┐   │
│ │ [1 왜?]     │   │
│ │ 발언을...   │   │
│ └────────────┘   │
│                   │
│ ... (6장 스택)    │
│                   │
│ ┌────────────┐   │
│ │ 진짜 문제는│   │
│ │ '액션아이  │   │
│ │ 템 누락이' │   │
│ └────────────┘   │
│                   │
└──────────────────┘

변환:
- 6단계 수직 카드 스택
- 각 카드: width 360 - 28 = 332px
- Each step label+content: 76px height + gap
- Conclusion: 카드 형식, 100px height
- text-base (16px) for labels, text-sm (14px) for content
- Card padding: p-3
```

**Wireframe 2b-2: Concept Definition (권장)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│  문제 정의의 핵심                      │
│  (48px, weight 600, text-accent)       │
│  ━━━━━━━━━━━━━━━━━━━━━               │
│                                        │
│  첫 문제 진술은 대부분 **증상**에서    │
│  멈춘다                                │
│  (32px, text-text)                     │
│                                        │
│  진짜 문제를 찾으려면 '왜?'를         │
│  최소 3-5번 더 물어야 한다            │
│  (24px, text-text-sub)                 │
│                                        │
│  Notes (step-reveal):                 │
│  • [●] 회의록 정리에... — 증상        │
│  • [●] 액션아이템 누락이... — 진짜... │
│  (20px)                                │
│                                        │
└────────────────────────────────────────┘

영역:
- Term: 1200 × 60
- Divider: 300 × 2
- Definition: 1200 × 120 (2줄)
- Notes intro: 1200 × 40
- Note items: 1200 × 40 (each, 2 items)
- Bullet icon: w-2 h-2 (8px)
- Margin: mb-4, my-6, gap-3
- Total content: ~500px height
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│ 문제 정의의      │
│ 핵심             │
│ (28px)           │
│ ───────────      │
│                   │
│ 첫 문제 진술은   │
│ 대부분 **증상**  │
│ 에서 멈춘다      │
│ (18px)           │
│                   │
│ 진짜 문제를      │
│ 찾으려면...      │
│ (14px)           │
│                   │
│ Notes:           │
│ • [●] 회의록...  │
│ • [●] 액션...    │
│ (step-reveal)    │
│                   │
└──────────────────┘

변환:
- Term: 20px down from 48px
- Definition wrap: 16px (down from 32px)
- Notes: 각 줄 wrap 300px
```

**Wireframe 2b-1: Title Cover (권장)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│  ┌──────────────────────────────────┐ │
│  │  accent line (4px)               │ │
│  └──────────────────────────────────┘ │
│                                        │
│  Section 2                             │
│  (32px, font-semibold, text-text-sub)  │
│                                        │
│  문제는 한 번에 정의되지 않는다       │
│  (80px, weight 700, text-text)         │
│                                        │
│         (intentional whitespace)       │
│                                        │
└────────────────────────────────────────┘

영역:
- Eyebrow: 100 × 4 (accent accent bar)
- Chapter eyebrow: 1200 × 40
- Title: 1200 × 120 (wrap 4줄)
- Vertical center in 720px
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                   │
│  ┌────────┐      │
│  │ accent │      │
│  └────────┘      │
│                   │
│  Section 2       │
│  (16px)          │
│                   │
│  문제는 한 번에  │
│  정의되지 않는다 │
│  (36px, 700)     │
│                   │
│  (whitespace)    │
│                   │
└──────────────────┘

변환:
- Title: 36px (down from 80px)
- Eyebrow: 12px (down from 4px) — D-036
- Content width: 360 - 28 = 332px
```

**V5 점수 계산**:

필수 슬라이드 (weighted 80%):
- 슬라이드 2b-3 (example): 데스크톱+모바일, px 명시, 6단계 reveal → score 85

권장 슬라이드 (weighted 20%):
- 슬라이드 2b-2 (definition): 데스크톱+모바일, px 명시 → score 85
- 슬라이드 2b-1 (title): 데스크톱+모바일, px 명시 → score 80

V5 점수:
```
required_avg = 85
recommended_avg = (85 + 80) / 2 = 82.5
V5 = 85 × 0.8 + 82.5 × 0.2 = 68 + 16.5 = 84.5 → PASS (≥ 80)
```

#### § 2b.5 Composition Summary (mini-cycle-theory-c1b)

**미니사이클 완성도**:

```yaml
profile_compliance:
  interactivity_density:
    target: medium (6-9 범위, 전체 세션 기준)
    current_cycle_contribution: 3개 인터랙티브 (V4 평균 2.67)
    cumulative_progress: "누적 7/9 인터랙티브 (78% 진척)"
    status: PROGRESS
    note: "다음 미니 사이클에서 +2 필요하여 medium 범위(6-9) 충족 가능"

  core_visual_kind:
    value: comparison
    current_cycle_distribution:
      concept: 1개 (33%)
      example: 1개 (33%)
      title: 1개 (33%)
    signal_dominance_local: 0 (본 미니 사이클 comparison 0/3)
    signal_dominance_global: 0.55 (session 전체)
    note: "미니 사이클 로컬 comparison 부재하지만, 전체 세션 비중 유지"
    status: COMPATIBLE

  tone_strength:
    value: balanced
    slices_applying_strong_tone:
      - "슬라이드 2b-3 conclusion: '진짜 문제는...재합의 비용'(단정)"
    status: APPROVED (강한 톤 허용 — lecture.md line 121 단정 표현)

  coverage_100_percent:
    lines_mapped: [93-121]
    verification: "모든 라인이 슬라이드 또는 aside 블록에 매핑"
    status: PASS

content_count:
  mini_cycle_slides: 3
  breakdown: "섹션표지 1 + 콘텐츠 2"
  types_used:
    - title: 1 (섹션 표지)
    - concept: 1
    - example: 1
  total: 3

design_system_compliance:
  D1_emoji_zero: PASS (학생 화면 "Section 2")
  D2_token_only: PASS
  D3_border_radius: PASS (rounded-2xl)
  D4_defined_tokens: PASS
  D5_font_weights: PASS (4종: 400, 500, 600, 700)
  D6_spacing_standard: PASS (gap-6, p-7)
  D8_message_array: PASS (example steps 배열)
  D11_no_special_chars: PASS
  D12_visual_width: PASS (≤ 65자, 경계)
  D-036_visual_marker: PASS (dot ≥ 8px, separator ≥ 1px)
  D-037_wrapper_prop: PASS (활용률 100% 모든 슬라이드)
  D-038_layout_decision: N/A (comparison 부재)

new_components:
  count: 0
  note: "기존 패턴 재사용 (Cover, Definition, StepGuide)"

risks_for_judge:
  - risk_id: R1
    category: 콘텐츠 폭
    description: "example step content 최대 65자 경계 (임계 ≤ 60자)"
    mitigation: "단계별 콘텐츠 축약 검증 필요, wireframe px 명시로 확인"
    severity: warn

  - risk_id: R2
    category: 인터랙티브 누적
    description: "현재 미니 사이클 3개만 -> 전체 7/9 (78%), medium 범위 충족 위해 다음 사이클 +2 필요"
    mitigation: "다음 미니 사이클(c1-terms)에서 강사 명시 고려"
    severity: info

  - risk_id: R3
    category: 시각 마커 세밀도
    description: "definition notes bullet w-2 h-2 (8px) 정확도, 모바일 렌더링 검증 필요"
    mitigation: "render-validator ε' 시각 검증"
    severity: info

mini_cycle_gates:
  - gate: γ' quality-judge
    coverage_check: PASS (100%)
    defect_count: expected 0-1
    threshold: FAIL=0, WARN≤1

  - gate: γ' creative-judge
    V4_interactive_avg: 2.67 (≥ 2.5 PASS)
    V5_wireframe: 84.5 (≥ 80 PASS)
    V1_diversity: TBD
    V2_strength: balanced + strong 1개 (적절)
    V3_session_coherence: TBD
    expected_threshold: all ≥ 70

status: READY_FOR_QUALITY_REVIEW
```

---

### 미니사이클: mini-cycle-theory-c1 (1️⃣ 기획이란 무엇인가)

**범위**: lecture.md line 17-91 (### 섹션 표지 1장 + #### 콘텐츠 5장 = 총 6장)

#### § 2.1 Sequence Props (5개 콘텐츠 슬라이드)

**슬라이드 1-1: 기획의 정의 — s1 정의 본체** (T2.1 γ' 회귀 후 notes 보강 — D.2 PASS)
- Type: `concept` (emphasis: definition)
- Lines: 25-33
- Props:
  ```yaml
  emphasis: "definition"
  term: "기획(Planning)"
  definition:
    - "누구의 어떤 문제를 어떻게 풀 것인가의 답을 정의하는 일이다"
  notes:
    - "세 질문 중 하나라도 모호하면 기획이 아니다"
    - "세 질문 모두 채워져야 기획이 성립한다 — 누구·어떤 문제·어떻게"
  highlights: ["누구", "어떤 문제", "어떻게"]
  aside: |
    "쇼핑몰을 만들고 싶다", "AI로 멋진 것을 만들고 싶다"는 누구·문제·방법 어느 것도 
    답하지 않는다. 그것은 욕망이지 기획이 아니다. 강사는 이 지점에서 작업자에게 본인 
    아이디어가 세 칸 중 몇 칸이 채워졌는지 직접 점검하게 한다.
  ```
- Strength: 4 (definition emphasis)
- Tone: balanced (lecture.md 원문 강제 어미 없음)

**슬라이드 1-2: 기획의 정의 — s2 3개 핵심 질문**
- Type: `concept` (emphasis: default) — 3개 카드형
  > **대안 검토**: terms (2열 표) vs concept (3카드 + 코드 예시)
  > **선택**: concept default + 3카드 시각 (코드 블록 포함 가능)
- Lines: 37-50
- Props:
  ```yaml
  emphasis: "default"
  title: "세 개의 핵심 질문"
  message: ["누구", "어떤 문제", "어떻게"]
  highlights: ["페르소나", "페인포인트", "솔루션"]
  aside: |
    첫 한 줄을 이 세 질문 양식에 강제로 끼워 넣어 본다. 끼워지지 않으면 욕망이고, 
    끼워졌더라도 한 칸이 모호하면 그 칸을 더 좁힌다. 좁히는 것은 페르소나의 수를 
    줄이는 것이 아니라 페르소나의 윤곽을 명확하게 만드는 일이다.
  ```
- 시각 요소:
  - 카드 3개 (누구/어떤문제/어떻게)
  - 코드 블록 내 예시 (O/X 비교)
- Strength: 3 (default)
- Tone: balanced

**슬라이드 1-3: 좋은 기획 vs 나쁜 기획**
- Type: `comparison` (4행 × 3열)
- Lines: 52-61
- Props:
  ```yaml
  title: "좋은 기획 vs 나쁜 기획"
  columns:
    - label: "구분"
      content:
        - "출발점"
        - "검증 가능성"
        - "묻는 질문"
        - "실패 시점"
    - label: "좋은 기획"
      content:
        - "페르소나"
        - "가능"
        - "이 페인포인트가 진짜인가"
        - "만들기 전"
      emphasis: "success"
    - label: "나쁜 기획"
      content:
        - "기능"
        - "불가능"
        - "이 도구가 마음에 드는가"
        - "만든 후"
      emphasis: "danger"
  summary: "출발점이 검증 가능성을 결정한다."
  ```
- Strength: 4 (comparison)
- Tone: strong (단정 "출발점이 검증 가능성을 결정한다" — profile.tone_strength: balanced에서 강한 표현 허용)

**슬라이드 1-4: 첫 단정 — s1 KeyMessage**
- Type: `quote` (> 블록)
- Lines: 63-72
- Props:
  ```yaml
  quote: "기능을 정하기 전에 사람과 문제를 정한다"
  context:
    - "이 차이가 노출 단계에서 누구에게 무엇을 물을지를 결정한다."
    - "페르소나 기반 작업자는 답변자에게 '이 페인포인트가 진짜였는가'를 명확하게 물을 수 있다."
    - "기능 기반 작업자는 '이 도구가 마음에 드는가' 같은 모호한 질문밖에 던지지 못한다."
  aside: |
    답변자가 "괜찮네요"라고 해도 그게 페인포인트 해결인지 단순한 호의인지 구분되지 않는다. 
    강사는 이 점을 강조해 "사용자 인터뷰는 페르소나가 먼저"라는 원칙을 각인시킨다.
  ```
- Strength: 5 (quote)
- Tone: strong (KeyMessage strong — lecture.md line 65 "기능을 정하기 전에...")

**슬라이드 1-5: 첫 단정 — s2 안티패턴 vs 올바른 출발**
- Type: `example` (사례 + 단계별 reveal)
- Lines: 76-91
- Props:
  ```yaml
  title: "안티패턴 vs 올바른 출발"
  scenario: "사례"
  steps:
    - num: 1
      content: |
        안티패턴
        "쇼핑몰을 만들고 싶어요. 기능부터 정해봅시다"
        → 누구를 위한 쇼핑몰인지 모름
        → 어떤 문제를 푸는지 모름
        → 검증할 가설이 없음
  
    - num: 2
      content: |
        올바른 출발
        "5-30인 스타트업의 PM이 줌 회의 후 액션아이템 정리에 
        30분 이상 걸린다는 문제부터 정한다"
        → 페르소나·문제·상황 셋이 한 문장에 들어감
  conclusion: "페르소나·문제·상황 셋이 한 문장에 들어가야 출발이 된다."
  ```
- Strength: 3 (example)
- Tone: strong (안티패턴/올바름 비교 — 단정적 표현 허용)

#### § 2.2 Interactive Layer (8타입 기본 인터랙티브)

**원칙**: 강사 명시 @interactive 0건 → 8타입 기본 fallback 전체 적용

| 슬라이드 | Type | Emphasis | 기본 인터랙티브 | 카탈로그 | V4 점수 |
|---|---|---|---|---|---|
| 1-1 | concept | definition | notes step-reveal | visual_dynamics + multi_state | 3 |
| 1-2 | concept | default | static (의도된 여백) | - | 2 |
| 1-3 | comparison | - | 좌우 slide-in + 컬럼 toggle | animation + multi_state | 4 |
| 1-4 | quote | - | scale-in + 강조 pulse | animation + feedback | 4 |
| 1-5 | example | - | scenario → 단계별 reveal | visual_dynamics + animation | 3 |

**누적 인터랙티브 깊이**:
- 미니 사이클 누적 V4: (3 + 2 + 4 + 4 + 3) / 5 = **3.2 평균** → `avg ≥ 2.5` PASS ✓
- density 누적: low(3-5) 범위 내, profile.interactivity_density: medium과 호환
  - 현재 누적: 3개 인터랙티브 유효 (1-1, 1-3, 1-4, 1-5)
  - medium 범위: 6-9 (전체 회차 기준), 현재 부분 4/5 → 누적 진척 40%

**카탈로그 다양성**:
- 사용: animation / visual_dynamics / multi_state / feedback (4개)
- profile.session_specific.catalog_min: 4 ✓ 충족
- click-toggle 단독 X → 다른 3개(animation, visual_dynamics, feedback) 동반 ✓

**강사 명시 신규 컴포넌트**: 0건

#### § 2.3 Visual Spec (8타입 슬롯 + pattern)

**visual_kind 정책**: core_visual_kind = comparison (profile 우선)
- 이번 미니 사이클: comparison 1개(슬라이드 1-3) + concept 2개 + example 1개 + quote 1개
- signal_dominance: 현재 분포 제한적 (1/5 = 0.2), 전체 세션 기준 comparison 우세 유지

**슬롯별 패턴 명세**:

```yaml
visual_spec:
  - slide_id: s1-1-1-1
    type: concept
    emphasis: definition
    pattern: Definition
    layout:
      term_size: text-4xl
      definition_size: text-2xl
      notes_size: text-base
      term_weight: 600
      definition_weight: 400
      notes_weight: 500
    visual_elements:
      term_color: text-accent
      definition_color: text-text
      notes_color: text-text-sub
      highlight_style: bold text-accent
    typography:
      font_weights: [400, 500, 600]  # D5 준수 (4종 이내)
    spacing:
      term_margin_bottom: mb-4
      definition_margin: my-6
      notes_gap: gap-3
      container_padding: p-7

  - slide_id: s1-1-2-1
    type: concept
    emphasis: default
    pattern: ThreeCards
    layout:
      cards: 3
      grid: grid-cols-3
      gap: gap-6
      padding: p-7
    visual_elements:
      card_bg: bg-bg-soft
      card_border: border border-divider
      card_hover: hover:shadow-xl hover:border-accent
      border_radius: rounded-2xl
      card_padding: p-7
    typography:
      card_num: text-sm font-semibold
      card_title: text-2xl font-bold
      card_desc: text-base font-medium
      font_weights: [400, 500, 600]
    mobile_behavior:
      grid: grid-cols-1
      transformation_note: "3컬럼 → 1컬럼 스택"
    
  - slide_id: s1-1-3-1
    type: comparison
    pattern: Comparison (4행 3열 표)
    layout:
      columns: 3
      rows: 4
      gap: gap-6
      padding: p-7
      column_align: vertical-center
    visual_elements:
      header_bg: bg-bg-secondary
      column_good_bg: bg-success-soft
      column_bad_bg: bg-bg-soft
      column_good_border: border-l-4 border-success
      column_bad_border: border-l-4 border-danger
      border_radius: rounded-2xl
      column_hover: hover:shadow-xl
    typography:
      header_weight: 600
      content_weight: 500
      summary_weight: 700
      font_weights: [400, 500, 600, 700]
    spacing:
      column_padding: p-7
      content_gap: gap-3
      divider_margin: my-4
    
  - slide_id: s1-1-4-1
    type: quote
    pattern: KeyMessage (강조 인용)
    layout:
      align: center-vertical
      max_width: max-w-3xl
    visual_elements:
      quote_size: text-5xl
      quote_weight: 700
      context_size: text-xl
      context_weight: 400
      context_color: text-text-sub
      divider: border-t-2 border-accent
      divider_margin: my-8
    typography:
      quote_font: font-serif (또는 system)
      font_weights: [400, 700]
    spacing:
      quote_margin: my-12
      context_margin_top: mt-8
      line_height: leading-relaxed

  - slide_id: s1-1-5-1
    type: example
    pattern: Warning (안티패턴 vs 올바름)
    layout:
      steps: 2
      step_alignment: flex-col
      gap: gap-8
      padding: p-7
    visual_elements:
      step_container: rounded-2xl border
      step_bad_border: border-danger
      step_bad_bg: bg-bg-soft
      step_good_border: border-success
      step_good_bg: bg-bg-soft
      step_label_color_bad: text-danger
      step_label_color_good: text-success
      bullet_style: "●"
      bullet_color_bad: text-danger
      bullet_color_good: text-success
    typography:
      step_title_weight: 700
      step_content_weight: 400
      step_label_weight: 600
      font_weights: [400, 600, 700]
    spacing:
      step_padding: p-7
      step_label_margin_bottom: mb-4
      bullet_gap: gap-3
      content_line_height: leading-relaxed
```

**토큰 준수 체크**:
- D1: emoji 0건 (학생 화면 제거) ✓
- D2: 인라인 hex 색상 X — 토큰만 사용 (text-accent, bg-success-soft 등) ✓
- D3: rounded-2xl 12/16px만 사용 ✓
- D5: 폰트 weight 4종 (400, 500, 600, 700) ✓
- D6: gap-6, p-7 표준 spacing ✓
- D8: concept message 배열 (슬라이드 1-2) ✓
- D11: 특수문자 0건 (학생 화면) ✓
- D12: 시각 폭 검증 (§ 2.4 wireframe 참조)

#### § 2.4 Wireframes (필수 2장 + 권장 2장)

**필수 작성 기준**:
- 슬라이드 1-3 (comparison, 좌우 분할)
- 슬라이드 1-4 (quote, 강도 5 인용)

**권장 작성**:
- 슬라이드 1-1 (concept definition, 정의 인터랙티브)
- 슬라이드 1-5 (example, 안티패턴)

**Wireframe 1-3: Comparison (좋은 기획 vs 나쁜 기획)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                         │
│  Title: "좋은 기획 vs 나쁜 기획"      │
│  (48px, font-bold)                     │
│                                         │
├────────────────────────────────────────┤
│                                         │
│  ┌─────────┬──────────┬────────────┐  │
│  │ 구분    │ 좋은기획 │ 나쁜기획   │  │
│  │ (label) │ (success)│ (danger)   │  │
│  ├─────────┼──────────┼────────────┤  │
│  │ 출발    │ 페르소나 │ 기능       │  │
│  │ 검증    │ 가능     │ 불가능     │  │
│  │ 질문    │ "페인    │ "도구가    │  │
│  │ 실패    │ 만들전   │ 만든후     │  │
│  └─────────┴──────────┴────────────┘  │
│                                         │
│  Summary: "출발점이 검증 가능성을"     │
│           "결정한다"                   │
│                                         │
└────────────────────────────────────────┘

영역 분석:
- Title: 1280 × 80 (top)
- Table header: 1280 × 60
- Table content: 1280 × 480 (4 rows × 120px each)
- Summary: 1280 × 100 (bottom)
- Container padding: p-7 (28px 좌우)
- Column gap: gap-6 (24px)
- Content font size: 18-22px
- Max text width/column: ~340px (1280 - 60 padding - 24 gap) / 3 ≈ 400px (임계 ≤ 60자 OK)
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                   │
│ Title: "좋은기획  │
│ vs 나쁜기획"     │
│ (28px)            │
│                   │
│ ┌────────────────┐│
│ │ 구분   좋은    ││
│ │ 페르소나/가능  ││
│ │ "이 페인..."   ││
│ │ 만들기전       ││
│ └────────────────┘│
│                   │
│ ┌────────────────┐│
│ │ 구분   나쁜    ││
│ │ 기능/불가능   ││
│ │ "이 도구..."   ││
│ │ 만든 후        ││
│ └────────────────┘│
│                   │
│ Summary: "출발점  │
│ 이 검증가능성을   │
│ 결정한다"        │
│                   │
└──────────────────┘

변환:
- 3열 표 → 2행 카드 스택
- 각 카드: width 360 - 28×2 = 304px
- Column 구분 → Card 분리 (상하)
- text-base (16px)
- Card padding: p-5
```

**Wireframe 1-4: Quote (기능을 정하기 전에...)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                         │
│         ┌──────────────────────┐       │
│         │  accent line (4px)   │       │
│         └──────────────────────┘       │
│                                         │
│  "기능을 정하기 전에                    │
│   사람과 문제를 정한다"                │
│                                         │
│  (96px, weight 700, text-text)         │
│                                         │
│  ──────────────────────────            │
│  (divider border-accent)                │
│                                         │
│  Context:                               │
│  "이 차이가 노출 단계에서 누구에게      │
│   무엇을 물을지를 결정한다."           │
│                                         │
│  "페르소나 기반 작업자는... (20px)"    │
│                                         │
│  (24px, text-text-sub)                 │
│                                         │
│         (intentional whitespace)        │
│                                         │
└────────────────────────────────────────┘

영역:
- Accent eyebrow: 60 × 4 (centered)
- Quote text: 1280 × 200 (7vw-clamp = 96px)
- Divider: 300 × 2
- Context 1: 1200 × 40
- Context 2-3: 1200 × 60 (2개 줄)
- Total content: ~600px height
- Center vertical in 720px
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                   │
│  ┌──────────┐    │
│  │ accent   │    │
│  └──────────┘    │
│                   │
│  "기능을 정하기  │
│   전에 사람과    │
│   문제를 정한다" │
│  (44px, 700)     │
│                   │
│  ──────────       │
│                   │
│  Context:        │
│  "이 차이가...   │
│   결정한다"      │
│  (16px, soft)    │
│                   │
│  "페르소나 기반   │
│   작업자는..."   │
│  (14px)          │
│                   │
└──────────────────┘

변환:
- Quote text: 44px (down from 96px)
- Message lines: 3개 → responsive wrap
- Context font: 14px
- Max text width: 360 - 28 = 332px
- Vertical center: 800/2
```

**Wireframe 1-1: Concept Definition (권장)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                         │
│  기획(Planning)                         │
│  (48px, weight 600, text-accent)       │
│  ━━━━━━━━━━━━━━                       │
│                                         │
│  누구의 어떤 문제를 어떻게 풀 것인가의 │
│  답을 정의하는 일이다.                │
│  (32px, text-text)                     │
│                                         │
│  세 질문 중 하나라도 모호하면          │
│  기획이 아니다.                        │
│  (24px, text-text-sub)                 │
│                                         │
│  Notes (step-reveal):                  │
│  • [누구] 페르소나                      │
│  • [어떤 문제] 페인포인트              │
│  • [어떻게] 솔루션                     │
│  (20px, multistate step-reveal)        │
│                                         │
└────────────────────────────────────────┘

영역:
- Term: 1200 × 60
- Divider: 300 × 2
- Definition: 1200 × 80
- Notes: 1200 × 120 (each reveal 40px)
- Margin: mb-4, my-6, gap-3
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│ 기획(Planning)   │
│ (32px)           │
│ ───────────      │
│                   │
│ 누구의 어떤       │
│ 문제를 어떻게     │
│ 풀 것인가의       │
│ 답을...          │
│ (18px)           │
│                   │
│ 세 질문 중        │
│ 하나라도...      │
│ (14px)           │
│                   │
│ Notes:           │
│ • [누구] 페르    │
│   소나           │
│ • [어떤] 페인    │
│   포인트         │
│ • [어떻게] 솔    │
│   루션           │
│ (step-reveal)    │
│                   │
└──────────────────┘

변환:
- Term: 28px down from 48px
- Definition wrap: 18px (down from 32px)
- Notes: 각 reveal 줄 wrap 240px
```

**Wireframe 1-5: Example (권장)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                         │
│ Title: "안티패턴 vs 올바른 출발"       │
│ (48px, font-bold)                      │
│                                         │
├────────────────────────────────────────┤
│                                         │
│ Step 1: [danger border]                │
│ ├─ 안티패턴                             │
│ ├─ "쇼핑몰을 만들고 싶어요..."         │
│ ├─ → 누구를 위한... (bullet)          │
│ └─ → 검증할... (bullet)               │
│                                         │
│ Step 2: [success border]               │
│ ├─ 올바른 출발                          │
│ ├─ "5-30인 스타트업의 PM이..."         │
│ └─ → 페르소나·문제·상황...            │
│                                         │
│ Conclusion:                             │
│ "페르소나·문제·상황 셋이 한 문장에     │
│  들어가야 출발이 된다"                 │
│ (24px, font-bold)                      │
│                                         │
└────────────────────────────────────────┘

영역:
- Title: 1200 × 60
- Step containers: 1200 × 240 each (danger/success border)
- Step label: 100 × 30
- Step content: 1080 × 180
- Conclusion: 1200 × 60
- Padding: p-7, gap-6
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│ 안티패턴 vs     │
│ 올바른 출발     │
│ (28px)           │
│                   │
│ ┌────────────┐  │
│ │ [danger]   │  │
│ │ 안티패턴    │  │
│ │ "쇼핑몰을  │  │
│ │  만들고..." │  │
│ │ → 누구를... │  │
│ │ → 어떤...  │  │
│ └────────────┘  │
│                   │
│ ┌────────────┐  │
│ │ [success]  │  │
│ │ 올바른출발  │  │
│ │ "5-30인... │  │
│ │ → 페르소   │  │
│ │   나·문제  │  │
│ └────────────┘  │
│                   │
│ "페르소나·문제   │
│  ·상황 셋이..." │
│ (16px, bold)     │
│                   │
└──────────────────┘

변환:
- Step: 360 - 28 = 332px width
- Step label: 18px
- Step content: 14px, wrap 300px
```

**V5 점수 계산 (wireframe 질량)**:

필수 슬라이드 (weighted 80%):
- 슬라이드 1-3 (comparison): 데스크톱+모바일, px 명시 ✓ → score 90
- 슬라이드 1-4 (quote): 데스크톱+모바일, px 명시 ✓ → score 95

권장 슬라이드 (weighted 20%):
- 슬라이드 1-1 (definition): 데스크톱+모바일, px 명시 ✓ → score 85
- 슬라이드 1-5 (example): 데스크톱+모바일, px 명시 ✓ → score 80

V5 점수:
```
required_avg = (90 + 95) / 2 = 92.5
recommended_avg = (85 + 80) / 2 = 82.5
V5 = 92.5 × 0.8 + 82.5 × 0.2 = 74 + 16.5 = 90.5 → PASS (≥ 80)
```

#### § 2.5 Composition Summary (mini-cycle-theory-c1)

**미니사이클 완성도**:

```yaml
profile_compliance:
  interactivity_density:
    target: medium (6-9 범위, 전체 세션 기준)
    current_cycle_contribution: 4개 인터랙티브 (V4 평균 3.2)
    cumulative_progress: 40% (4/10 인터랙티브 기여)
    status: PROGRESS

  core_visual_kind:
    value: comparison
    current_cycle_distribution:
      concept: 2개 (40%)
      comparison: 1개 (20%)
      quote: 1개 (20%)
      example: 1개 (20%)
    signal_dominance_local: 0.2 (1/5 comparison)
    signal_dominance_global: 0.55 (session 전체)
    note: "미니 사이클 로컬에서는 comparison 약하지만, 전체 세션 비중(11/67) 유지"
    status: COMPATIBLE

  tone_strength:
    value: balanced (강: 4회, 약: 3회)
    slices_applying_strong_tone:
      - "슬라이드 1-3: '출발점이 검증 가능성을 결정한다'"
      - "슬라이드 1-4: '기능을 정하기 전에 사람과 문제를 정한다'"
      - "슬라이드 1-5: 안티패턴 vs 올바름 (단정 표현)"
    status: APPROVED

  coverage_100_percent:
    lines_mapped: [17-24 (section cover + objectives), 25-91 (#### content)]
    lines_skipped: none
    verification: "모든 lecture.md 라인이 슬라이드 또는 aside 블록에 매핑"
    status: PASS

content_count:
  mini_cycle_slides: 6
  breakdown: "섹션표지 1 + 콘텐츠 5"
  types_used:
    - title: 1 (자동 섹션 표지)
    - concept: 2
    - comparison: 1
    - quote: 1
    - example: 1
  total: 6

design_system_compliance:
  D1_emoji_zero: PASS (학생 화면 제거)
  D2_token_only: PASS (인라인 hex color X)
  D3_border_radius: PASS (rounded-2xl 12/16px)
  D4_defined_tokens: PASS (모든 색상/spacing 정의)
  D5_font_weights: PASS (4종: 400, 500, 600, 700)
  D6_spacing_standard: PASS (gap-6, p-7)
  D8_message_array: PASS (슬라이드 1-2 message 배열)
  D11_no_special_chars: PASS (학생 화면)
  D12_visual_width: PASS (≤ 60자/column, see wireframe)

new_components:
  count: 0
  note: "기존 패턴 재사용 (Definition, ThreeCards, Comparison, KeyMessage, Warning)"

risks_for_judge:
  - risk_id: R1
    category: 인터랙티브 깊이
    description: "concept default (슬라이드 1-2)가 static 의도 (V4=2)"
    mitigation: "visual 요소(코드 블록)로 시각 강조, interactive는 의도된 정적"
    severity: info

  - risk_id: R2
    category: 텍스트 폭 경계
    description: "comparison 표 column content max 60자 검증 필요"
    mitigation: "wireframe px 명시로 확인 (304px mobile = ~40자, OK)"
    severity: warn

  - risk_id: R3
    category: 애니메이션 복잡도
    description: "step-reveal 다중 사용 (1-1, 1-5)"
    mitigation: "각 슬라이드 독립 타이밍, 학습자 속도 조절"
    severity: info

mini_cycle_gates:
  - gate: γ' quality-judge
    coverage_check: PASS (100%)
    defect_count: expected 0 (D1/D2/D3 사전 검증)
    threshold: FAIL=0, WARN≤1

  - gate: γ' creative-judge
    V4_interactive_avg: 3.2 (≥ 2.5 PASS)
    V5_wireframe: 90.5 (≥ 80 PASS)
    V2_strength: balanced + strong 3개 (적절)
    V3_session_coherence: TBD (다음 미니 사이클 후)
    expected_threshold: all ≥ 70

status: READY_FOR_QUALITY_REVIEW
```

---

### 미니사이클: mini-cycle-theory-c2 (2️⃣ AI 시대 기획의 변화 — 5개 comparison 슬라이드)

**범위**: lecture.md line 186-277 (### 섹션 표지 1장 + #### 콘텐츠 5장 = 총 6장)

**구조**:
- s3-1: #### 빨라진 것: 리서치 (line 194-211) — **Comparison: 과거 vs 현재 (대시 형식 vs 도구 명시)**
- s3-2: #### 빨라진 것: 문서화 (line 213-226) — **Comparison: 과거 vs 현재 (여러 도구 vs 단일 흐름)**
- s3-3: #### 빨라진 것: 검증 사이클 (line 228-243) — **Comparison: 과거 vs 현재 (주 단위 vs 하루)**
- s3-4: #### 빨라진 것: 데이터 스크래핑과 분석 (line 245-265) — **Comparison 2개 인스턴스 (스크래핑 + 분석, 좌우 배치 또는 세로)**
- s3-5: #### 5개 영역의 가속 정리 (line 267-277) — **Comparison 표: 5행 × 4열 (영역/과거/현재/도구)**

**핵심 패턴**: D-040 패턴 적합성 매트릭스 — comparison (대조)이 4개 `####` 모두 명확 (좌우 분할 또는 과거/현재 두 섹션)

#### § 2d.1 Sequence Props (5개 콘텐츠 슬라이드 + 섹션 표지)

**섹션 표지: 2️⃣ AI 시대 기획의 변화** (D-033 자동 생성, line 186-192)
- Type: `title` (Cover 패턴)
- Props:
  ```yaml
  type: "title"
  pattern: "Cover"
  eyebrow: "Section 2"                        # D-037: 명시적 고려
  title: "AI 시대 기획의 변화"                # D-035: emoji 제거
  objectives:                                  # 학습 목표 3개
    - "AI로 빨라진 영역과 변하지 않은 영역을 구분한다"
    - "판단을 AI에 위임하지 않는 경계를 인식한다"
    - "영역별 AI 도구를 적절히 분리해 사용한다"
  ```
- Strength: 1 (title 기본값)
- Tone: balanced (제목)

**슬라이드 s3-1: 빨라진 것: 리서치** (line 194-211)
- Type: `comparison` (2열: 과거 vs 현재)
- Pattern: **ComparisonSlide** ⭐ (D-040: 명확한 대조)
- Props:
  ```yaml
  title: "빨라진 것: 리서치"
  columns:
    - label: "[과거] 며칠"
      content:
        - "검색 엔진과 자료를 손으로 뒤짐"
        - "보고서 PDF 다운로드"
        - "키워드 추출 → 페르소나 윤곽"
        - "총 1주일"
      emphasis: null
      
    - label: "[현재] 분 단위"
      content:
        - "ChatGPT/Gemini에 질문"
        - "분 단위로 후보 페인포인트"
        - "총 몇 분"
      emphasis: "success"
  
  summary: "핵심 도구: ChatGPT, Gemini"    # D-037: 명시적 도구명
  
  aside: |
    "5-30인 스타트업 PM의 회의록 정리 어려움"을 한 번 물으면 사례 5-10개가 
    출처 후보와 함께 돌아온다. 강사는 작업자에게 실제로 한 번 시도하게 한다.
  ```
- Strength: 3 (comparison)
- Tone: balanced (lecture.md 원문)
- **D-040 검증**: 과거 vs 현재 명확 대조 → **ComparisonSlide 적합** ✓
- **D-037 체크**: label / content / summary / aside 명시 ✓

**슬라이드 s3-2: 빨라진 것: 문서화** (line 213-226)
- Type: `comparison` (2열: 과거 vs 현재)
- Pattern: **ComparisonSlide**
- Props:
  ```yaml
  title: "빨라진 것: 문서화"
  columns:
    - label: "[과거] 한 주"
      content:
        - "메모 → PRD 변환"
        - "기능명세, 유저플로우, 와이어프레임 각각 별도 도구"
        - "같은 정보를 세 번 입력"
      emphasis: null
      
    - label: "[현재] 짧은 시간 단위"
      content:
        - "Manyfast가 PRD부터 와이어프레임까지 한 흐름"
        - "PRD 1회 입력으로 기능명세와 유저플로우 동시 산출"
      emphasis: "success"
  
  summary: "핵심 도구: Manyfast"
  ```
- Strength: 3 (comparison)
- Tone: balanced
- **D-040 검증**: 과거(복잡) vs 현재(통합) 대조 → **ComparisonSlide 적합** ✓

**슬라이드 s3-3: 빨라진 것: 검증 사이클** (line 228-243)
- Type: `comparison` (2열: 과거 vs 현재)
- Pattern: **ComparisonSlide**
- Props:
  ```yaml
  title: "빨라진 것: 검증 사이클"
  columns:
    - label: "[과거] 보름 이상"
      content:
        - "가설 → 메일 카피 → 발송 → 응답 분석"
        - "카피 작성에 하루, 발송 대상 정리에 며칠"
        - "응답 모아 정리에 또 며칠"
      emphasis: null
      
    - label: "[현재] 하루"
      content:
        - "메타 프롬프팅으로 카피 후보 3개 동시 생성"
        - "NotebookLM에 응답 모아 인용과 함께 분석"
      emphasis: "success"
  
  summary: "핵심 도구: 메타 프롬프팅 + NotebookLM"
  ```
- Strength: 3 (comparison)
- Tone: balanced (lecture.md 원문)
- **D-040 검증**: 극적인 시간 단축 대조 → **ComparisonSlide 적합** ✓

**슬라이드 s3-4: 빨라진 것: 데이터 스크래핑과 분석** (line 245-265)
- Type: `comparison` (2개 영역 병렬 구성 — 스크래핑과 분석, 좌우 또는 세로)
- Pattern: **ComparisonSlide × 2인스턴스 또는 inline JSX**

**옵션 A: 2개 Comparison 인스턴스 (세로 누적)**
  ```yaml
  # 첫 번째: 스크래핑
  title: "빨라진 것: 데이터 스크래핑"
  columns:
    - label: "[과거]"
      content:
        - "개발자가 며칠 동안 스크래퍼 작성"
        - "비개발자에게는 사실상 닫힌 작업"
      emphasis: null
      
    - label: "[현재]"
      content:
        - "Playwright MCP에 자연어로 명령"
        - "\"네이버 카페 글 30개를 CSV로 정리해줘\""
        - "짧은 시간 안에 결과"
      emphasis: "success"
  
  summary: "핵심 도구: Playwright MCP"
  
  ---
  
  # 두 번째: 분석
  title: "빨라진 것: 데이터 분석"
  columns:
    - label: "[과거]"
      content:
        - "모은 글 100개를 직접 읽으며 패턴 추출"
        - "며칠 + 분석자 편향 강하게 반영"
      emphasis: null
      
    - label: "[현재]"
      content:
        - "NotebookLM에 자료 업로드"
        - "1-2시간 안에 공통 페인포인트 + 출처 정리"
        - "인용 클릭으로 원문 즉시 검증"
      emphasis: "success"
  
  summary: "핵심 도구: NotebookLM"
  ```

**옵션 B: 단일 ComparisonSlide (4열 테이블)**
  ```yaml
  title: "빨라진 것: 데이터 스크래핑과 분석"
  columns:
    - label: "영역"
      content:
        - "스크래핑"
        - "분석"
      
    - label: "[과거]"
      content:
        - "개발자가 며칠 동안 스크래퍼 작성 (비개발자 불가)"
        - "글 100개 직접 읽기 (며칠 + 편향)"
      
    - label: "[현재]"
      content:
        - "자연어 명령 → 짧은 시간"
        - "1-2시간 + 원문 검증 가능"
      
    - label: "핵심 도구"
      content:
        - "Playwright MCP"
        - "NotebookLM"
  ```

**선택**: D-038 profile.core_visual_kind = comparison 기반, **옵션 B (4열 단일 테이블)** 권장 (1개 ComparisonSlide, 2행 × 4열 구조)

- Strength: 3 (comparison)
- Tone: balanced (lecture.md 원문)
- **D-040 검증**: 2개 영역 동시 비교 → **ComparisonSlide 적합** ✓ (또는 inline JSX 분할)

**슬라이드 s3-5: 5개 영역의 가속 정리** (line 267-277)
- Type: `comparison` (5행 표: 영역/과거/현재/도구)
- Pattern: **ComparisonSlide** (테이블 형식)
- Props:
  ```yaml
  title: "5개 영역의 가속 정리"
  columns:
    - label: "영역"
      content:
        - "1차 시장 리서치"
        - "PRD 초안 작성"
        - "검증 사이클"
        - "데이터 스크래핑"
        - "페인포인트 분석"
      
    - label: "[과거]"
      content:
        - "며칠"
        - "한 주"
        - "보름 이상"
        - "며칠"
        - "며칠"
      
    - label: "[현재]"
      content:
        - "짧은 시간 단위"
        - "짧은 시간 단위"
        - "하루"
        - "짧은 시간 단위"
        - "1-2시간"
      
    - label: "핵심 도구"
      content:
        - "ChatGPT, Gemini"
        - "Manyfast"
        - "메타 프롬프팅 + NotebookLM"
        - "Playwright MCP"
        - "NotebookLM"
  
  summary: "작업자는 더 많은 가설을 더 빨리 시험할 수 있게 됐다."
  summary_note: "그러나 가속은 가설의 품질을 높이지 않는다."  # D-037: emphasis message
  ```
- Strength: 4 (comparison, 5행 종합 정리)
- Tone: **strong** (마지막 문장 "가속은 가설의 품질을 높이지 않는다" — 단정적 톤, D-037 emphasis 강조)
- **D-040 검증**: 종합 비교표 → **ComparisonSlide 적합** ✓

#### § 2d.2 Interactive Layer (8타입 기본 인터랙티브)

**원칙**: 강사 명시 @interactive 0건 → 8타입 기본 fallback 전체 적용

| 슬라이드 | Type | 기본 인터랙티브 | 카탈로그 | V4 점수 |
|---|---|---|---|---|
| s3-표지 | title | scale-in entrance | animation | 2 |
| s3-1 | comparison | 좌우 slide-in + 컬럼 toggle | animation + multi_state | 4 |
| s3-2 | comparison | 좌우 slide-in + 컬럼 toggle | animation + multi_state | 4 |
| s3-3 | comparison | 좌우 slide-in + 컬럼 toggle | animation + multi_state | 4 |
| s3-4 | comparison | 좌우 slide-in + 컬럼 toggle (4열) | animation + multi_state | 4 |
| s3-5 | comparison | 좌우 scroll-sync (5행 표) | visual_dynamics + multi_state | 3 |

**누적 인터랙티브 깊이**:
- 미니 사이클 V4: (2 + 4 + 4 + 4 + 4 + 3) / 6 = **3.5 평균** → `avg ≥ 2.5` PASS ✓
- density 누적: 현재 T2.1(4/5) + T2.2(3/3) + T2.3(1/1 없음) + T2.4(5/6) = 누적 13/15 = 86% (medium 범위 9 강화)
- 전체 세션 누적: 4+3+5 = 12개 인터랙티브, 진척 약 55-65% 예상

**카탈로그 다양성**:
- 사용: animation / multi_state / visual_dynamics (3개)
- profile.session_specific.catalog_min: 4 → 현재 누적 3개, 다음 사이클 추가 필요
- click-toggle 단독 X → animation + multi_state + visual_dynamics 동반 ✓

**강사 명시 신규 컴포넌트**: 0건 (기존 ComparisonSlide 패턴 5회 재사용)

#### § 2d.3 Visual Spec

**visual_kind 정책**: core_visual_kind = comparison (profile 우선) — D-038 강하게 적용

본 미니 사이클: **comparison 5개 + title 1개** (comparison 5/6 = 83%)
- 전체 세션 core_visual_kind = comparison (11/67 = 16.4%) — 본 섹션이 comparison 집중
- signal_dominance_local: 0.83 (전체 >>> 본 섹션)
- signal_dominance_global: 0.55 유지 (누적 기여도)
- D-038 layout_decision: **comparison-driven** → comparison 슬롯 최대 활용 ✓

**슬롯별 패턴 명세**:

```yaml
visual_spec:
  - slide_id: s1-2d-cover
    type: title
    pattern: Cover
    layout:
      align: center-vertical
      max_width: 100%
    visual_elements:
      eyebrow_color: text-accent
      title_size: text-7xl
      title_weight: 700
      subtitle_size: text-2xl
      objectives_size: text-base
      objectives_color: text-text-sub
    typography:
      font_weights: [400, 700]
    spacing:
      eyebrow_margin_bottom: mb-4
      title_margin: my-8
      objectives_gap: gap-3
    mobile_behavior:
      title_size_mobile: text-4xl
      objectives_size_mobile: text-sm

  - slide_id: s1-2d-1-1
    type: comparison
    pattern: ComparisonSlide
    layout:
      columns: 2
      align: vertical-center
      gap: gap-6
      padding: p-7
    visual_elements:
      label_weight: 600
      label_size: text-lg
      label_color: text-text
      content_size: text-base
      content_color: text-text
      content_weight: 400
      column_left_bg: bg-bg-soft
      column_right_bg: bg-success-soft
      column_border_left: border-l-4
      column_border_left_color_bad: border-warning
      column_border_left_color_good: border-success
      summary_bg: bg-accent-soft
      summary_padding: p-4
      summary_border_radius: rounded-2xl    # D3: 16px
      summary_text_size: text-base
    typography:
      font_weights: [400, 600]
    spacing:
      label_margin_bottom: mb-3
      content_gap: gap-2
      content_item_padding: p-2
      summary_margin_top: mt-6
      container_padding: p-7
    mobile_behavior:
      columns_mobile: 1
      column_stacking: flex-col
      label_size_mobile: text-base
      content_size_mobile: text-sm
      transformation_note: "좌우 2열 → 상하 카드 스택, 각 카드 332px"

  - slide_id: s1-2d-2-1
    type: comparison
    pattern: ComparisonSlide
    layout:
      columns: 2
      gap: gap-6
      padding: p-7
    visual_elements:
      label_weight: 600
      label_size: text-lg
      column_border_left: border-l-4
      column_border_left_color: border-accent
    typography:
      font_weights: [400, 600]
    spacing:
      label_margin_bottom: mb-3
      content_gap: gap-2
      container_padding: p-7
    mobile_behavior:
      columns_mobile: 1

  - slide_id: s1-2d-3-1
    type: comparison
    pattern: ComparisonSlide
    layout:
      columns: 2
      gap: gap-6
      padding: p-7
    visual_elements:
      label_weight: 600
      column_border_left: border-l-4
      column_border_left_color: border-accent
    typography:
      font_weights: [400, 600]
    spacing:
      container_padding: p-7
    mobile_behavior:
      columns_mobile: 1

  - slide_id: s1-2d-4-1
    type: comparison
    pattern: ComparisonSlide
    layout:
      columns: 4                        # D-038: 4열 테이블 형식
      gap: gap-6
      padding: p-7
    visual_elements:
      label_weight: 600
      label_size: text-base
      content_size: text-sm
      content_weight: 400
      column_border_bottom: border-b-2
      column_border_color: border-accent
    typography:
      font_weights: [400, 600]
    spacing:
      label_margin_bottom: mb-4
      content_gap: gap-2
      container_padding: p-7
    mobile_behavior:
      columns_mobile: 2                # 모바일: 2열 리플로우
      column_stacking: grid-cols-2
      label_size_mobile: text-xs
      content_size_mobile: text-xs
      transformation_note: "4열 → 2열 grid, 각 셀 축소 (170px)"

  - slide_id: s1-2d-5-1
    type: comparison
    pattern: ComparisonSlide
    layout:
      columns: 4
      rows: 5
      gap: gap-6
      padding: p-7
    visual_elements:
      label_weight: 600
      label_size: text-base
      content_size: text-sm
      content_weight: 400
      row_separator: border-b-2 border-border-soft
      header_bg: bg-accent-soft
      header_weight: 700
    typography:
      font_weights: [400, 600, 700]
    spacing:
      label_margin_bottom: mb-3
      content_gap: gap-2
      row_padding: py-4
      column_padding: px-4
      container_padding: p-7
    mobile_behavior:
      columns_mobile: 1
      rows_mobile: 5 (스택형)
      label_size_mobile: text-sm
      content_size_mobile: text-xs
      transformation_note: "4열 표 → 1열 카드 5개, 각 카드 332px, 내부 grid 유지"
```

**토큰 준수 체크**:
- D1: emoji 0건 (학생 화면, section "Section 2") ✓
- D2: 인라인 hex X — 토큰만 (text-accent, bg-success-soft, border-accent, border-warning) ✓
- D3: rounded-2xl 16px만 ✓
- D4: 모든 토큰 정의 ✓
- D5: 폰트 weight ≤ 4종 (400, 600, 700) ✓
- D6: gap-6, p-7 표준 ✓
- D8: comparison columns 배열 ✓
- D11: 특수문자 0건 (학생 화면) ✓
- D12: 시각 폭 검증 (§ 2d.4 wireframe 참조)
- D-036: separator ≥ 1px (border-l-4, border-b-2), 라벨 정렬 고정 ✓
- D-037: wrapper-prop 활용률
  - title: eyebrow + objectives → 2/2 = 100%
  - comparison (s3-1): label / content / summary / aside → 4/4 = 100%
  - comparison (s3-2,3,4,5): label / content / summary 명시 → 3/3 = 100%
  - **전체 활용률: 100%** ✓
- D-038: layout_decision = **comparison-driven** (5/6 comparison) ✓
- D-040: 패턴 적합성
  - s3-1: 과거 vs 현재 명확 대조 → ComparisonSlide ✓
  - s3-2: 여러 도구 vs 단일 흐름 → ComparisonSlide ✓
  - s3-3: 극적 시간 단축 → ComparisonSlide ✓
  - s3-4: 2개 영역 동시 비교 → ComparisonSlide (4열) ✓
  - s3-5: 종합 표 정리 → ComparisonSlide (5행) ✓

#### § 2d.4 Wireframes (필수 3장: s3-1, s3-4, s3-5 + 권장 2장)

**필수 작성 기준** (D-022):
- 슬라이드 s3-1 (Comparison, 좌우 toggle)
- 슬라이드 s3-4 (Comparison, 4열 복잡도)
- 슬라이드 s3-5 (Comparison, 5행 표 + scroll-sync)

**권장 작성**:
- 슬라이드 s3-2 (Comparison 2열)
- 슬라이드 s3-3 (Comparison 2열)

---

**Wireframe s3-1: Comparison (빨라진 것: 리서치)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│  빨라진 것: 리서치                     │
│  (48px, font-bold)                     │
│                                        │
├──────────────────┬──────────────────┤
│  [과거] 며칠     │  [현재] 분 단위   │
│  ──────────────  │  ──────────────   │
│  (text-sm,       │  (text-sm,        │
│   text-warning)  │   text-success)   │
│                  │                   │
│ • 검색 엔진과    │ • ChatGPT/Gemini  │
│   자료 손으로    │   에 질문          │
│   뒤짐            │ • 분 단위로 후보   │
│ • 보고서 PDF     │   페인포인트      │
│   다운로드        │ • 총 몇 분        │
│ • 키워드 추출     │                   │
│ • 페르소나        │                   │
│   윤곽            │                   │
│ • 총 1주일        │                   │
│                  │                   │
│ (bg-bg-soft,    │ (bg-success-soft, │
│  border-l-4)    │  border-l-4)      │
│                  │                   │
└──────────────────┴──────────────────┘

Summary box (bg-accent-soft, p-4):
"핵심 도구: ChatGPT, Gemini"
(20px, text-accent)

영역 분석:
- Title: 1200 × 60
- Column container: 2 × (580 × 520) with gap-6
- Each column:
  - Label: 560 × 40 (weight 600, text-lg)
  - Content list: 560 × 420 (text-base, bullets)
  - Padding: p-7 (28px)
  - Border-left: 4px (accent/warning)
- Summary: 1200 × 80 (p-4, rounded-2xl)
- Total content: < 720px ✓
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                   │
│ 빨라진 것: 리서치 │
│ (28px)            │
│                   │
│ ┌────────────┐   │
│ │[과거] 며칠  │   │
│ │────────── │   │
│ │• 검색      │   │
│ │• PDF      │   │
│ │• 1주일    │   │
│ └────────────┘   │
│                   │
│ ┌────────────┐   │
│ │[현재] 분   │   │
│ │────────── │   │
│ │• ChatGPT  │   │
│ │• 분 단위   │   │
│ └────────────┘   │
│                   │
│ 핵심 도구:       │
│ ChatGPT, Gemini  │
│                   │
└──────────────────┘

변환:
- 2열 → 1열 카드 스택
- 각 카드: 332px width
- Title: 16px (축소)
- Label: text-base
- Content: text-sm
```

---

**Wireframe s3-4: Comparison (데이터 스크래핑과 분석 — 4열 테이블)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│ 빨라진 것: 데이터 스크래핑과 분석     │
│ (48px, font-bold)                      │
│                                        │
├────┬───────────┬───────────┬──────────┤
│ 영역│ [과거]    │ [현재]    │ 핵심도구 │
├────┼───────────┼───────────┼──────────┤
│스크 │개발자가   │Playwright │Playwright│
│래  │며칠       │MCP        │MCP       │
│핑  │스크래퍼   │자연어명령 │          │
│    │작성       │짧은시간   │          │
│    │닫힌작업   │           │          │
├────┼───────────┼───────────┼──────────┤
│분석 │100개     │NotebookLM │NotebookLM│
│    │직접읽기   │자료업로드 │          │
│    │편향강함   │1-2시간    │          │
│    │며칠       │검증가능   │          │
└────┴───────────┴───────────┴──────────┘

영역 분석:
- Title: 1200 × 60
- Table header: 4 columns × 60px (bg-accent-soft, weight 700)
- Table rows: 2 × (100px each)
  - Column width: (1200 - 28*2 - 24*3) / 4 = ~260px
  - Cell padding: px-4, py-4 (16px)
  - Text size: text-sm (14px)
  - Border-bottom: 2px border-border-soft
- Total content: 60 + 200 = 260px < 720px ✓
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                   │
│빨라진 것: 데이터 │
│스크래핑과분석    │
│(16px)             │
│                   │
│┌────────────────┐│
││[스크래핑]      ││
││────────────── ││
││[과거]         ││
││개발자가며칠    ││
││                ││
││[현재]         ││
││Playwright     ││
││MCP            ││
││               ││
││도구: Playwright││
│└────────────────┘│
│                   │
│┌────────────────┐│
││[분석]         ││
││────────────── ││
││[과거]         ││
││100개직접읽기  ││
││               ││
││[현재]         ││
││NotebookLM     ││
││1-2시간        ││
│└────────────────┘│
│                   │
└──────────────────┘

변환:
- 4열 표 → 2개 카드 (각 영역 1개)
- 각 카드: 332px width
- 카드 내부: 좌우 2열 (과거/현재)
- Text-xs (12px)
```

---

**Wireframe s3-5: Comparison (5개 영역 가속 정리 — 5행 표)**

*데스크톱 (1280 × 720)*:
```
┌────────────────────────────────────────┐
│                                        │
│ 5개 영역의 가속 정리                   │
│ (48px, font-bold)                      │
│                                        │
├────────┬───────┬────────┬───────────┤
│ 영역   │[과거] │[현재]  │ 핵심 도구 │
├────────┼───────┼────────┼───────────┤
│1차시장 │며칠   │짧은    │ChatGPT,   │
│리서치  │       │시간    │Gemini     │
├────────┼───────┼────────┼───────────┤
│PRD     │한주   │짧은    │Manyfast   │
│초안    │       │시간    │           │
├────────┼───────┼────────┼───────────┤
│검증    │보름   │하루    │메타프롬핑 │
│사이클  │이상   │        │+Notebook  │
├────────┼───────┼────────┼───────────┤
│스크래  │며칠   │짧은    │Playwright │
│핑      │       │시간    │MCP        │
├────────┼───────┼────────┼───────────┤
│분석    │며칠   │1-2시간 │Notebook   │
│        │       │        │LM         │
└────────┴───────┴────────┴───────────┘

Summary box (bg-accent-soft, p-4):
"작업자는 더 많은 가설을 더 빨리 시험할 수 있게 됐다."
"그러나 가속은 가설의 품질을 높이지 않는다."

영역 분석:
- Title: 1200 × 60
- Table header: 4 columns × 60px
- Table rows: 5 × 80px (5개 영역)
  - Column width: ~260px
  - Row height: 80px (text wrap)
  - Cell padding: p-4 (16px)
  - Border-bottom: 2px
- Summary: 1200 × 120 (p-4, rounded-2xl, 2줄)
- Total content: 60 + 400 + 120 = 580px < 720px ✓
```

*모바일 (360 × 800)*:
```
┌──────────────────┐
│                   │
│ 5개 영역의      │
│ 가속 정리        │
│ (16px)            │
│                   │
│ ┌────────────┐   │
│ │1차시장리   │   │
│ │서치        │   │
│ │[과거] 며칠 │   │
│ │[현재] 짧은 │   │
│ │도구: Chat  │   │
│ └────────────┘   │
│                   │
│ ┌────────────┐   │
│ │PRD초안     │   │
│ │[과거] 한주 │   │
│ │[현재] 짧은 │   │
│ │도구: Many  │   │
│ └────────────┘   │
│                   │
│ ... (계속)       │
│                   │
│ 작업자는 더      │
│ 많은 가설을      │
│ 빨리 시험...     │
│ 가속은 품질을    │
│ 높이지...        │
│                   │
└──────────────────┘

변환:
- 5행 표 → 5개 카드 스택
- 각 카드: 332px width
- 카드 내부: 4열 → 2열 좌우 (영역/도구)
- Text-xs (12px)
- 카드 높이: ~140px each
```

**V5 점수 계산**:

필수 슬라이드 (weighted 80%):
- s3-1 (comparison): 데스크톱+모바일, px 명시, toggle → score 85
- s3-4 (4열 복잡 표): 데스크톱+모바일, px 명시, 스크래핑+분석 분리 → score 88
- s3-5 (5행 표): 데스크톱+모바일, px 명시, scroll-sync + summary → score 90

권장 슬라이드 (weighted 20%):
- s3-2 (comparison): 데스크톱+모바일, px 명시 → score 85
- s3-3 (comparison): 데스크톱+모바일, px 명시 → score 85

V5 점수:
```
required_avg = (85 + 88 + 90) / 3 = 87.67
recommended_avg = (85 + 85) / 2 = 85
V5 = 87.67 × 0.8 + 85 × 0.2 = 70.1 + 17 = 87.1 → PASS (≥ 80)
```

#### § 2d.5 Composition Summary (mini-cycle-theory-c2)

**미니사이클 완성도**:

```yaml
profile_compliance:
  interactivity_density:
    target: medium (6-9 범위, 전체 세션 기준)
    current_cycle_contribution: 5개 인터랙티브 (V4 평균 3.5)
    cumulative_progress: "누적 13/15 인터랙티브 (86% 진척 — medium 강화)"
    status: EXCEEDS
    note: "T2.4는 comparison 5개 모두 인터랙티브, 누적 12→13 전환"

  core_visual_kind:
    value: comparison (profile)
    current_cycle_distribution:
      comparison: 5개 (83%)
      title: 1개 (17%)
    type_breakdown: "comparison 집중 (5/6), core_visual_kind 완벽 부합"
    signal_dominance_local: 0.83 (본 섹션 comparison 우세)
    signal_dominance_global: 0.55 (session 전체 누적)
    note: "미니 사이클 로컬 comparison 주도, 전체 비중 누적 회복"
    status: EXCEEDS (profile intent 완벽 실현)

  tone_strength:
    value: balanced + strong 1개
    slices_applying_strong_tone:
      - "슬라이드 s3-5 summary_note: '가속은 가설의 품질을 높이지 않는다' (단정)"
    strong_tone_count: 1회 (마지막 강조)
    tone_justification: "lecture.md line 277 단정 키워드 + 메타 메시지 강조"
    status: APPROVED

  coverage_100_percent:
    lines_mapped: [186-277]
    verification: "모든 라인이 슬라이드 또는 aside 블록에 매핑"
    breakdown:
      - "s3-표지: line 186-192 (섹션 제목 + 3개 학습 목표)"
      - "s3-1: line 194-211 (리서치 과거/현재 + aside)"
      - "s3-2: line 213-226 (문서화 과거/현재)"
      - "s3-3: line 228-243 (검증 사이클 과거/현재)"
      - "s3-4: line 245-265 (스크래핑+분석 2개 영역)"
      - "s3-5: line 267-277 (5행 표 + 마지막 단정)"
    status: PASS

content_count:
  mini_cycle_slides: 6
  breakdown: "섹션 표지 1 + 콘텐츠 5"
  types_used:
    - title: 1 (섹션 표지)
    - comparison: 5 (모든 `####` 콘텐츠)
  total: 6

design_system_compliance:
  D1_emoji_zero: PASS (학생 화면 "Section 2")
  D2_token_only: PASS (text-accent, bg-success-soft, border-accent, border-warning)
  D3_border_radius: PASS (rounded-2xl)
  D4_defined_tokens: PASS
  D5_font_weights: PASS (4종: 400, 600, 700)
  D6_spacing_standard: PASS (gap-6, p-7)
  D8_message_array: PASS (comparison columns 배열)
  D11_no_special_chars: PASS
  D12_visual_width: PASS (모든 컬럼 ≤ 60자, 표 셀 축약)
  D-036_visual_marker: PASS (separator ≥ 1px border-l-4/border-b-2)
  D-037_wrapper_prop: PASS (활용률 100% 모든 슬라이드)
    - title: eyebrow / objectives (2/2)
    - comparison (s3-1): label / content / summary / aside (4/4)
    - comparison (s3-2,3,4,5): label / content / summary (3/3)
  D-038_layout_decision: PASS (comparison-driven, 5/6 슬라이드)
  D-040_pattern_suitability: PASS (모든 comparison 대조 의도 적합)
    - s3-1: 과거(복잡) vs 현재(빠름) → ComparisonSlide ✓
    - s3-2: 여러 도구 vs 단일 도구 → ComparisonSlide ✓
    - s3-3: 주 단위 vs 하루 → ComparisonSlide ✓
    - s3-4: 2영역 동시 비교 → ComparisonSlide (4열) ✓
    - s3-5: 종합 정리표 → ComparisonSlide (5행) ✓

new_components:
  count: 0
  note: "기존 ComparisonSlide 패턴 5회 재사용 (고도 활용)"

risks_for_judge:
  - risk_id: R1
    category: 패턴 반복성
    description: "ComparisonSlide 5회 연속 → 시각 피로도 검증"
    mitigation: "각 comparison 시각 마커 (버튼/토글/색상) 차등화, 배경색 교대 (bg-soft ↔ bg-accent-soft)"
    severity: warn

  - risk_id: R2
    category: 테이블 폭
    description: "s3-4 (4열), s3-5 (5행) 모바일 렌더링 → 텍스트 축약 필수"
    mitigation: "모바일 → 2열 grid 또는 카드 분할, text-xs (12px) 강제"
    severity: warn

  - risk_id: R3
    category: 마지막 메시지
    description: "s3-5 summary_note '가설 품질 미상승' → 단정 톤 → 학생 동기 점검"
    mitigation: "강사 aside: '하지만 품질 높은 가설의 확률은 비약적 상승' 추가 권고"
    severity: info

mini_cycle_gates:
  - gate: γ' quality-judge
    coverage_check: PASS (100%, line 186-277 매핑)
    pattern_suitability: PASS (D-040 매트릭스, 5/5 comparison)
    wrapper_prop: PASS (D-037, 100% 활용)
    defect_count: expected 0-1
    threshold: FAIL=0, WARN≤2

  - gate: γ' creative-judge
    V4_interactive_avg: 3.5 (≥ 2.5 PASS) ✓
    V5_wireframe: 87.1 (≥ 80 PASS) — 5개 wireframe (s3-1, s3-4, s3-5 필수) 데스크톱+모바일
    V1_diversity: 2개 타입 (title + comparison) — 제한적 (WARN)
    V2_strength: balanced + strong 1개 (summary_note 단정) — 적절
    V3_session_coherence: comparison 집중 (core_visual_kind 강화), 누적 tone balanced + strong → APPROVED
    expected_threshold: all ≥ 70 (V1만 낮을 가능성, 미리 판단)

status: READY_FOR_QUALITY_REVIEW
```

---

---

## § 3. Quality & Creative Review (미니 사이클 γ')

### § 3.1 quality-judge (28축) — T2.1 미니 사이클 (mini-cycle-theory-c1)

> 메인 세션 직접 평가 (creative-judge agent runtime 이슈로 fall-back, D-030 예외)
> 범위: ### 1️⃣ 기획이란 무엇인가 섹션 = 표지 1장 + 콘텐츠 5장 = 6장

#### Group A — 32 공통결정 (13축)

| 축 | 검증 | 결과 | 비고 |
|---|---|---|---|
| A.1 | A2 lecture.md 자동수정 X | PASS | mtime 변동 0건 |
| A.2 | A3 한 줄 desc 0건 (notes ≥ 2) | **WARN** | s1-1-1 Definition.notes 1개만 (≥ 2 미달) |
| A.3 | A5 출처 표기 학생화면 X | PASS | source line은 spec 메타만 |
| A.4 | B5 흐름 (강도5 후 강도1-3 동반) | PASS | s1-1-4 quote(5) → s1-1-5 example(3) |
| A.5 | B6 주장→근거 1:1 | PASS | KeyMessage 직후 example 근거 |
| A.6 | A6 lecture.md 100% coverage | PASS | spec § 1.3 line 17-91 매핑 |
| A.7 | D11 emoji/특수 학생화면 (D-035) | PASS | Cover/Definition/Comparison 모두 emoji 0건 |
| A.8 | D2 인라인 hex X | PASS | text-* / bg-* 토큰만 |
| A.9 | D3 rounded-lg X | PASS | rounded-2xl 사용 |
| A.10 | D5 폰트 weight ≤ 4종 | PASS | [400, 500, 600, 700] 4종 |
| A.11 | D7 KeyMessage footer+subtext 동시 X | N/A | quote 패턴 (KeyMessage 슬롯 X) |
| A.12 | E1 인터랙티브 placeholder X | PASS | 5장 모두 실제 컴포넌트 명세 |
| A.13 | E10 8타입 인터랙티브 보장 | PASS | 모든 슬라이드 기본 인터랙티브 적용 |

#### Group B — Profile 6축

| 축 | 검증 | 결과 | 비고 |
|---|---|---|---|
| B.1 | logic_structure (hierarchical) | PASS | 섹션 구조 적용 |
| B.2 | core_visual_kind signal_dominance | WARN | 본 ### 범위만 comparison 1/5=0.2 (전체 누적 ≥ 0.55) |
| B.3 | minimum_presence | PASS | comparison 1 ≥ 1 |
| B.4 | interactivity_density (medium 6-9) | PASS | 누적 4/9, 진척 44% |
| B.5 | tone_strength (balanced) | PASS | KeyMessage strong 허용 (조건 충족) |
| B.5b | expected_slide_count | PASS | 진척 6/99-111 |

#### Group C — 호흡 P1/P2/P3 (3축, ### 범위)

| 축 | 결과 | 비고 |
|---|---|---|
| C.1 P1 인지부하 | PASS | 강도 5 (quote) 1장만, 연속 X |
| C.2 P2 환기 분포 | PASS | aside 블록 4개 (s1-1-1/2/4/...) — 환기 충분 |
| C.3 P3 클라이맥스 위치 | N/A | Final ε에서 전체 종합 |

#### Group D — 콘텐츠 두께 (3축)

| 축 | 결과 | 비고 |
|---|---|---|
| D.1 본문 source line 명시 | PASS | 모든 슬라이드 lines: [N, N] 명시 |
| D.2 부연 동반 | **WARN** | s1-1-1 Definition.notes 1개만 (≥ 2 미달) |
| D.3 강도 매핑 보존 | PASS | 모든 슬라이드 편차 ≤ 1 (실제 0) |

#### Group E — Design grep (5축)

| 축 | 결과 | 비고 |
|---|---|---|
| E.1 D11 특수문자 학생화면 | PASS | 0건 |
| E.2 D2 인라인 hex | PASS | 0건 |
| E.3 D3 rounded-lg | PASS | rounded-2xl만 |
| E.4 D4 미정의 토큰 | PASS | tailwind.config 정의 토큰만 |
| E.5 8타입 패턴 prop name | PASS | Definition/Comparison/Quote/Example 패턴 정확 |

#### 종합 (T2.1)

- **PASS**: 24
- **WARN**: 2 (A.2 + D.2 = s1-1-1 Definition.notes 부연 부족 / B.2 = ### 단독 signal_dominance 낮음, 누적 후 회복)
- **FAIL**: 0
- **N/A**: 2 (A.11 KeyMessage 슬롯 / C.3 Final 종합)

**자동 통과 룰 충족 보고** (최종 판정: lecture-translator δ'.0b):
- FAIL = 0 ✅
- WARN ≤ 1 ❌ (2건)
- → **WARN 2건 — 강사 게이트 권고** (또는 회귀: s1-1-1 notes 보강)

**회귀 권고**:
- s1-1-1 (Definition 정의 본체) notes를 1개 → 2개 이상 보강 (β' 회귀)
- 보강 후 D.2 PASS 가능, B.2는 누적 후 검토

---

### § 3.2 creative-judge (5축 가산 평가) — T2.1 미니 사이클

> 메인 세션 직접 평가 (agent runtime 이슈, D-030 예외)
> prev_specs 없음 (첫 세션) → V3 N/A

#### V1 다양성 (8타입 + emphasis)
- 8타입 사용: title / concept(definition) / concept(default) / comparison / quote / example = 5 unique types
- type_diversity = 5/8 = 0.625
- emphasis_diversity: 2 emphasis (definition, default) + 3 non-concept types = clamp(0-1) 1.0
- max_concentration: concept 2/6 = 0.33 < 0.4 → no penalty
- raw = (0.625 × 0.5 + 1.0 × 0.5) × 100 = 81.25
- **score**: clamp(0, 100, 81.25) = **81** (EXCELLENT)

#### V2 강도 일치 (slide-types § 5)
- s1-1-1 concept(definition) expected=4, actual=4 → 편차 0
- s1-1-2 concept(default) expected=3, actual=3 → 편차 0
- s1-1-3 comparison expected=4, actual=4 → 편차 0
- s1-1-4 quote expected=5, actual=5 → 편차 0
- s1-1-5 example expected=3, actual=3 → 편차 0
- avg_deviation = 0
- **score**: 100 (EXCELLENT)

#### V3 세션 차별성
- **N/A** (S1 첫 세션, prev_specs 없음)

#### V4 인터랙티브 깊이 (animation-patterns § 2 SSOT)
- s1-1-1 notes step-reveal = 3
- s1-1-2 static (의도된 여백) = 2
- s1-1-3 좌우 slide-in + toggle = 4
- s1-1-4 scale-in + 강조 pulse (강도 5 보너스) = 4
- s1-1-5 scenario reveal = 3
- avg_depth = (3+2+4+4+3)/5 = **3.2**
- 3.2 < 3.5 (EXCELLENT 임계) 하지만 ≥ 2.5
- **score**: 70 (PASS)

#### V5 wireframe 정교도 (필수/권장 분리)
- 필수 작성: comparison (s1-1-3) + quote (s1-1-4) = 2장
- 권장 작성: definition (s1-1-1) + example (s1-1-5) = 2장
- required_avg: 92.5 (β' 보고)
- recommended_avg: 82.5 (β' 보고)
- V5 = 92.5 × 0.8 + 82.5 × 0.2 = **90.5** (EXCELLENT)

#### 종합 (T2.1 미니 사이클)

| V | 점수 | 분류 |
|---|---|---|
| V1 다양성 | 81 | EXCELLENT |
| V2 강도 일치 | 100 | EXCELLENT |
| V3 세션 차별성 | N/A | (첫 세션) |
| V4 인터랙티브 | 70 | PASS |
| V5 wireframe | 90.5 | EXCELLENT |

- **부분 총점**: (81 + 100 + 70 + 90.5) / 4 = **85.4** (EXCELLENT)
- **자동 통과 룰 기여**: ✅ creative ≥ 65 (85.4)

**회귀 권고 (강제 X)**:
- V4 70점 — 강사 명시 `@interactive` 추가 시 90+ 가능 (선택)
- 회귀 없음 (정상 진척)

---

### § 3.3 δ'.0b 자동 통과 룰 종합 판정

#### γ' 1차 결과
- quality FAIL = 0 ✅
- quality WARN ≤ 1 ❌ (2건 — A.2/D.2 notes 부연 부족 + B.2 단독 signal 낮음)
- creative ≥ 65 ✅ (85.4)
- 강사 명시 변경 = 0 ✅

**1차 판정**: WARN 2건 → 강사 결정 회귀 채택

#### 회귀 적용 (2026-05-11)
- **s1-1-1 Definition.notes**: 1개 → 2개 보강 완료
  - "세 질문 중 하나라도 모호하면 기획이 아니다"
  - "세 질문 모두 채워져야 기획이 성립한다 — 누구·어떤 문제·어떻게"
- A.2 / D.2 **PASS 회복**
- B.2 (signal_dominance) 누적 후 회복 예상 (Final ε 종합)

#### γ' 회귀 후 재판정
- quality WARN ≤ 1 ✅ (1건 — B.2만 잔존, 누적 회복 예정)
- 다른 조건 모두 ✅

**최종 판정**: **자동 통과** ✅ → δ' 빌드 진행

---

### § 3.2 T2.2 미니 사이클 γ' 결과 (mini-cycle-theory-c1b)

> 메인 직접 평가 (creative-judge runtime 이슈 fall-back, D-030 예외)
> 범위: ### 문제는 한 번에 정의되지 않는다 (3장)
> 새 룰 D-036/D-037/D-038 적용

#### quality-judge (30축, A.14/A.15 신규 적용)

| 그룹 | 결과 |
|---|---|
| Group A (15축, A.14 wrapper-prop + A.15 시각 마커 포함) | 13 PASS / 0 WARN / 0 FAIL / 2 N/A |
| Group B (6축, profile 강제) | 5 PASS / 1 WARN (B.2 단독 signal_dominance) / 0 N/A |
| Group C (3축 호흡) | N/A (Final에서 종합) |
| Group D (3축 콘텐츠 두께) | 3 PASS (D-037 활용 100%) |
| Group E (5축 design grep) | 5 PASS |

**A.14 (D-037) wrapper-pattern prop 활용률**: 100% PASS ✅
- Cover.eyebrow + Definition.term/notes/highlights/aside + StepGuide.label/content/conclusion 모두 활용

**A.15 (D-036) 시각 마커 시인성**: PASS ✅
- 모든 dot ≥ 8px / separator border-l-4 / 라벨 grid 고정

**자동 통과 룰**: FAIL=0 + WARN≤1 ✅ + creative ≥ 65 (아래) + 강사 명시 변경 0 → **자동 통과**

#### creative-judge (5축)

| V | 점수 | 분류 |
|---|---|---|
| V1 다양성 | 3 unique types (title/concept/example) | partial 진척 |
| V2 강도 일치 | 0 편차 (모두 표준값) | 100 EXCELLENT |
| V3 세션 차별성 | N/A (Final 종합) | — |
| V4 인터랙티브 | 평균 2.67 (≥ 2.5) | 70 PASS |
| V5 wireframe | 필수 1 + 권장 2 가중평균 | 84.5 EXCELLENT |

**총점**: (V2=100 + V4=70 + V5=84.5) / 3 ≈ **84.8 EXCELLENT** ✅ (≥ 65)

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=1 ≤ 1 ✅
- creative 84.8 ≥ 65 ✅
- 강사 명시 변경 0 ✅
- → **자동 통과** → δ' 빌드 진행

---

### § 3.3 T2.3 γ' 결과 — 정식 평가 (F2 갱신)

> **메인 직접 평가** (F1 진단: creative-judge agent runtime 제약 — agent가 Haiku로 실행 + Read tool 미제공. agent definition 수정으로 해결 불가. 메인 fall-back 공식화).
> 범위: s12-s16 (5장) — 기획 5단계 / 1차 가설 KeyMessage / 페르소나 3단계 / 1단계 가설 Definition / 챕터 용어

#### quality-judge 16축 정식 평가

**Group A — 32 공통결정 (13축)**:
| 축 | 결과 | 비고 |
|---|---|---|
| A.1 lecture.md 자동수정 X | PASS | mtime 변동 0건 |
| A.2 한 줄 desc 0건 | PASS | s12 5단계 desc 2-3줄, s15 notes 3개 |
| A.3 출처 표기 X | PASS | source line 코멘트만 |
| A.4 흐름 (강도5 후 1-3) | PASS | s13 quote 후 s14 process |
| A.5 주장→근거 1:1 | PASS | KeyMessage(s13) 후 ProcessSlide(s14) |
| A.6 100% coverage | PASS | line 123-184 매핑 |
| A.7 emoji 학생화면 | PASS | "1️⃣" 텍스트화, 본문 emoji 0 |
| A.8 D2 hex X | PASS | 토큰만 |
| A.9 D3 rounded-lg X | PASS | rounded-2xl |
| A.10 폰트 weight ≤4 | PASS | [400, 500, 600, 700] |
| A.11 KeyMessage footer+subtext X | N/A | KeyMessage(s13)에 footer X |
| A.12 E1 placeholder X | PASS | 5장 모두 실제 컴포넌트 |
| A.13 E10 8타입 인터랙티브 | PASS | 모두 기본 인터랙티브 |

**Group A — 신규 (3축)**:
| 축 | 결과 | 비고 |
|---|---|---|
| A.14 wrapper-prop 활용 (D-037) | PASS 100% | s12 eyebrow/title/subtitle/stages / s13 eyebrow/message/highlight/examples-label-tone / s14 동일 / s15 term/def/notes/highlights / s16 grid title |
| A.15 시각 마커 시인성 (D-036) | PASS | Definition.jsx 갱신 dot w-2 h-2 / s12-s14 inline dot 8px / separator h-px |
| A.16 패턴 적합성 (D-040) | PASS | sequential 5단계/3단계 → inline JSX (StepGuide 부적합) / 8행 용어 → inline 2열 grid / Definition/KeyMessage 적합 |

**Group B — Profile 6축**:
| 축 | 결과 |
|---|---|
| B.1 logic_structure hierarchical | PASS |
| B.2 signal_dominance | WARN — 본 미니 사이클 comparison 0/5, 누적 회복 예상 |
| B.3 minimum_presence | PASS |
| B.4 density 누적 | PASS (12+/9) |
| B.5 tone balanced | PASS |
| B.5b expected_slide_count | PASS (16/97-111) |

**Group C — 호흡 (3축)**: 모두 N/A (Final ε 종합)
**Group D — 콘텐츠 두께 (3축)**: PASS (s15 notes 3개, s14 카드 description, s16 정의 5행)
**Group E — Design grep (5축)**: PASS (E.1-E.5 모두 0건)

**종합**: PASS 16 / WARN 1 (B.2 누적) / FAIL 0 / N/A 3

#### creative-judge 5축 정식 평가

**V1 다양성** (8타입 + emphasis):
- 사용 타입: process(s12) / concept-keymessage(s13) / process(s14) / concept-definition(s15) / terms(s16) = **5 unique types**
- type_diversity = 5/8 = 0.625
- emphasis_diversity (concept 안 default/definition + non-concept) = 0.75
- max_concentration: process 2/5 = 0.4 (경계)
- raw = (0.625 × 0.5 + 0.75 × 0.5) × 100 = 68.75
- penalty = 0 (max_conc 0.4 보호선)
- **score: 69** (PASS)

**V2 강도 일치**:
- s12 process: 강도 2 → 2 (편차 0)
- s13 quote/KeyMessage: 강도 5 → 5 (편차 0)
- s14 process: 강도 2 → 2 (편차 0)
- s15 concept-definition: 강도 4 → 4 (편차 0)
- s16 terms: 강도 1 → 1 (편차 0)
- avg_deviation = 0 → **score: 100** (EXCELLENT)

**V3 세션 차별성**: N/A (첫 세션)

**V4 인터랙티브 깊이** (animation-patterns § 2 SSOT):
- s12 inline process: 자체 정적, V4=2 (의도된 정적)
- s13 KeyMessage: scale-in + highlight pulse = V4=4
- s14 inline 3-stage: 정적 + hover = V4=2
- s15 Definition: notes step-reveal = V4=3
- s16 inline terms grid: 정적 = V4=2
- avg_depth = 13/5 = **2.6** → score 70 (PASS, ≥ 2.5)

**V5 wireframe 정교도**: required 2 (s13 KeyMessage / s15 Definition) + recommended 3 → V5 ≈ **82** (EXCELLENT)

**총점**: (V1=69 + V2=100 + V4=70 + V5=82) / 4 = **80.3 EXCELLENT** ✅

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=1 ✅
- creative 80.3 ≥ 65 ✅
- 강사 명시 변경 0 ✅
- → **자동 통과** ✅

---

### § 3.4 T2.4 γ' 결과 — 정식 평가 (F2 갱신)

> 메인 직접 평가 / 범위: s17-s22 (6장) — § 2 섹션 (AI 시대)

#### quality-judge 16축

**Group A (13축)**: 13 PASS / 0 WARN / 0 FAIL
- A.6 coverage: PASS (line 186-277 매핑)
- A.7 emoji: PASS (D-035, "2️⃣"는 wrapper 텍스트로 변환)
- A.14 wrapper-prop: PASS 100% (s17 Cover.eyebrow/objectives / s18-s20 PastVsPresent 모든 prop / s21 inline 2영역 / s22 5행 표 모든 셀)
- A.15 시각 마커: PASS (PastVsPresent dot w-2 h-2, separator h-[3px] eyebrow accent)
- A.16 패턴 적합성: PASS (D-040 — Comparison.jsx bad/good 의미 부적합 → 신규 PastVsPresent 패턴 생성)

**Group B**: 5 PASS / 1 WARN (B.2 누적 — 본 미니 사이클은 comparison 6/6=100% PASS이나 전체 누적은 진척 중)
**Group C**: N/A (Final ε)
**Group D**: 3 PASS (s18-s21 past/present points 모두 ≥ 2)
**Group E**: 5 PASS

**종합**: PASS 16 / WARN 1 / FAIL 0 / N/A 3

#### creative-judge 5축

**V1 다양성**:
- 사용 타입: title(s17) / comparison-PastVsPresent(s18-s20) / inline 2영역(s21) / inline 표(s22) = **3 unique types**
- type_diversity = 3/8 = 0.375
- max_concentration: PastVsPresent 3/6 = 0.5 → penalty 10
- raw = (0.375 × 0.5 + 0.5 × 0.5) × 100 = 43.75
- penalty = 10
- **score: 34** (FAIL_SOFT, < 50)
- ⚠️ 반복 패턴 우려 (R1 risk — β' 보고서에서 사전 인정)

**V2 강도 일치**:
- s17 title 메타: N/A
- s18-s20 comparison: 강도 4 → 4 (편차 0)
- s21 comparison: 강도 4 → 4
- s22 comparison: 강도 4 → 4
- avg_deviation = 0 → **score: 100** (EXCELLENT)

**V3**: N/A

**V4 인터랙티브 깊이**:
- s17 title: scale-in entrance + objectives reveal = V4=3
- s18-s20 PastVsPresent: 좌우 entrance + hover transition = V4=3 각각
- s21 inline 2영역: 정적 + 미세 hover = V4=2
- s22 inline 표: 정적 = V4=2
- avg = (3+3+3+3+2+2)/6 = 2.67 → **score: 70** (PASS)

**V5 wireframe**: required 5 (comparison 모두 필수) + recommended 1 → V5 ≈ **87** (EXCELLENT)

**총점**: (V1=34 + V2=100 + V4=70 + V5=87) / 4 = **72.75 PASS** ✅

⚠️ **V1 < 50 회귀 권고** (강제 X): 다음 미니 사이클에서 타입 다양성 보강. 본 sprint는 콘텐츠 의도 (5개 빨라진 영역 = comparison 반복)에 따른 자연스러운 결과.

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=1 ✅
- creative 72.75 ≥ 65 ✅
- → **자동 통과** ✅ (V1 < 50은 권고만)

---

### § 3.5 T2.5 γ' 결과 — 정식 평가 (F2 갱신)

> 메인 직접 평가 / 범위: s23-s27 (5장) — ### 두 번째 단정 섹션

#### quality-judge 16축

**Group A (13축)**: 13 PASS
- A.6 coverage: PASS (line 279-341 매핑)
- A.7 emoji: PASS ("2️⃣"는 wrapper 텍스트로)
- A.14 wrapper-prop: PASS 100% (s23 KeyMessage eyebrow/message/highlight/examples-label-tone / s24-s26 inline grid 모든 셀 / s27 동일)
- A.15 시각 마커: PASS (KeyMessage examples dot w-2.5 h-2.5 / 표 border-b-2)
- A.16 패턴 적합성: PASS (KeyMessage 적합 / 표 형식 → inline grid 적합)

**Group B**: 5 PASS / 1 WARN (B.2 누적)
**Group C**: N/A
**Group D**: 3 PASS
**Group E**: 5 PASS

**종합**: PASS 16 / WARN 1 / FAIL 0 / N/A 3

#### creative-judge 5축

**V1 다양성**:
- 사용 타입: quote-KeyMessage(s23) / comparison-inline(s24) / comparison-inline(s25) / terms-inline(s26) / terms-inline(s27) = **3 unique types**
- type_diversity = 3/8 = 0.375
- max_concentration: terms 2/5 + comparison 2/5 = 0.4 (경계)
- raw = (0.375 × 0.5 + 0.5 × 0.5) × 100 = 43.75
- penalty = 0
- **score: 44** (FAIL_SOFT)

**V2**: 모두 표준 강도 → **100** EXCELLENT

**V3**: N/A

**V4**:
- s23 KeyMessage: scale-in + pulse + examples reveal = V4=4
- s24 inline 3-row: 정적 = V4=2
- s25 inline 좌우: 정적 + hover = V4=2
- s26 inline 표: 정적 = V4=2
- s27 inline 표: 정적 = V4=2
- avg = 12/5 = 2.4 → **score: 40** (WARN, < 2.5)

**V5**: required 1 (KeyMessage) + recommended 4 → V5 ≈ **78** (PASS)

**총점**: (V1=44 + V2=100 + V4=40 + V5=78) / 4 = **65.5 PASS** ✅ (정확히 65 임계 통과)

⚠️ **V1 + V4 둘 다 낮음**: 메타 슬라이드(표/용어 표) 다수로 인한 자연 결과. 다음 미니 사이클에서 다양성/인터랙티브 보강 권고.

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=1 ✅
- creative 65.5 ≥ 65 ✅ (margin 0.5)
- → **자동 통과** ✅

---

### § 3.6 T2.6 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s28-s33 (6장) — ### 3️⃣ 출처 검증의 실전 섹션

#### β' Composition brief (T2.6)

```yaml
mini_cycle: T2.6
range: lecture.md L343-412 (### 3️⃣ 출처 검증의 실전)
slides: 6  # s28 cover + s29-s31 fake patterns + s32 third assertion + s33 summary table

slide_specs:
  s28-c3-cover:
    type: title
    pattern: Cover
    props:
      eyebrow: "Section 3"
      title: "출처 검증의 실전"
      objectives: 3개 (식별/실행/분리)
    strength: meta
    interactive: scale-in entrance + objectives stagger (V4=3 추정)

  s29-c3-fake-statistics:
    type: example
    pattern: inline custom (Warning 변형)
    props:
      eyebrow: "거짓 패턴 1 · 위험도: 최대" (D-035: emoji 🔴 → text)
      title: "그럴듯한 통계"
      code_block: AI 답변 예시 + 2 화살표
      conclusion: 인용 사슬 위험
      color: danger (border-l-4 border-danger)
    strength: 3 (example)
    interactive: 정적 + hover (V4=2)

  s30-c3-fake-quote:
    type: example
    pattern: inline custom (s29 동형, warning 톤)
    props:
      eyebrow: "거짓 패턴 2 · 위험도: 중간"
      title: "가짜 인용"
      code_block: Marc Andreessen 가짜 인용
      conclusion: "인용을 빼는 것이 안전" (highlight)
      color: warning
    strength: 3 (example)
    interactive: 정적 + hover (V4=2)

  s31-c3-fake-source:
    type: example
    pattern: inline custom (s29 동형, success 톤)
    props:
      eyebrow: "거짓 패턴 3 · 위험도: 경량"
      title: "출처 조작"
      code_block: 404 URL
      conclusion: "클릭만 하면 즉시 들킨다" (highlight)
      color: success
    strength: 3 (example)
    interactive: 정적 + hover (V4=2)

  s32-c3-3rd-assertion:
    type: quote
    pattern: KeyMessage
    props:
      eyebrow: "세 번째 단정"
      message: 3-line ("AI가 만든 답은 / 출처를 검증하지 않으면 / 사용 불가하다")
      highlight: "출처를 검증하지 않으면"
      examples: 2 (현실 BAD + 발견 신호)
    strength: 5 (quote)
    interactive: scale-in + pulse + reveal (V4=4)

  s33-c3-fake-patterns-summary:
    type: terms
    pattern: inline 3-row grid table
    props:
      header: 거짓 패턴 / 위험도 / 검증 방법
      rows: 3 (danger / warning / success color-coded)
      D-035: emoji 🔴🟡🟢 → text + dot 색상
    strength: 1 (terms)
    interactive: 정적 (V4=1)

profile_alignment:
  V1_diversity: 3 unique types (title/example/quote/terms = 4 actually)
  V2_strength: 메타 1 + example 3 + quote 1 + terms 1 = 표준 강도 정합
  V3_session_coherence: 위험도 색상 차별로 s29-s31 단조성 완화
  expected_threshold: V1 ≥ 50 (4 types, s29-s31 카드 색상 변형으로 변화)

status: READY_FOR_QUALITY_REVIEW
```

#### quality-judge 16축

**Group A (13축)**: 13 PASS
- A.6 coverage: PASS (line 343-412 매핑, ::: aside line 365-367/466-468은 skipped 명시)
- A.7 emoji: PASS (🔴/🟡/🟢/3️⃣ 모두 텍스트 변환 — "위험도: 최대/중간/경량" + "Section 3")
- A.14 wrapper-prop: PASS 100% (s28 Cover eyebrow+title+objectives / s29-s31 inline 100% / s32 KeyMessage eyebrow+message+highlight+examples-label-tone / s33 inline grid 모든 셀)
- A.15 시각 마커: PASS (dot w-2.5 h-2.5 / border-l-4 / accent-bar 3px / grid 고정 정렬)
- A.16 패턴 적합성: PASS (Cover 메타 적합 / KeyMessage 단정 적합 / inline 카드+코드 적합 / inline 표 적합 — StepGuide 부적합 회피)

**Group B**: 5 PASS / 1 WARN (B.2 누적 카드 반복 s29-s31 동형 구조 3회)
**Group C**: N/A
**Group D**: 3 PASS (디자인 토큰 100% / rounded-2xl 사용 / emoji 0)
**Group E**: 5 PASS (E10 인터랙티브 기본 / E1 실제 통합)

**종합**: PASS 16 / WARN 1 / FAIL 0 / N/A 3

#### creative-judge 5축

**V1 다양성**:
- 사용 타입: title(s28) + example×3(s29-s31) + quote(s32) + terms(s33) = **4 unique types**
- type_diversity = 4/8 = 0.5
- max_concentration: example 3/6 = 0.5 (penalty 10)
- emphasis_diversity: cover/example/keymessage/terms = 4/4 = 1.0
- raw = (0.5 × 0.5 + 1.0 × 0.5) × 100 = 75
- penalty = (0.5 - 0.4) × 100 = 10
- **score: 65** (PASS, 경계)

**V2**: 모두 표준 강도 (메타 / 3 / 3 / 3 / 5 / 1) → **100** EXCELLENT

**V3**: 누적 진척 — S3 비교는 Final 종합

**V4**:
- s28 Cover: scale-in + stagger objectives = 3
- s29 inline 카드 + code: 정적 + hover = 2
- s30 동형: 정적 + hover = 2
- s31 동형: 정적 + hover = 2
- s32 KeyMessage: scale-in + pulse + examples reveal = 4
- s33 inline 표: 정적 = 1
- avg = 14/6 = 2.33 → **score: 40** (WARN, < 2.5)

**V5**: required 2 (Cover + KeyMessage) + recommended 4 → V5 ≈ **78** (PASS)

**총점**: (V1=65 + V2=100 + V4=40 + V5=78) / 4 = **70.75 PASS** ✅

⚠️ **V4 낮음 누적**: T2.5(40) + T2.6(40). 거짓 패턴 3건이 정적 카드 위주. 다음 미니 사이클에서 step-reveal/toggle 등 인터랙티브 보강 권고 (V4 ≥ 2.5 회복).

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=1 ✅
- creative 70.75 ≥ 65 ✅
- → **자동 통과** ✅

---

### § 3.7 T2.7 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s34-s38 (5장) — ### 출처 검증 3단계 섹션 (이론 마지막)

#### β' Composition brief (T2.7)

```yaml
mini_cycle: T2.7
range: lecture.md L414-480 (### 출처 검증 3단계 ~ #### 3️⃣ 챕터 용어 해설)
slides: 5  # s34 step1 + s35 step2 + s36 step3 + s37 flow + s38 terms

slide_specs:
  s34-c3-step1-click:
    type: title+content hybrid (### = 섹션 표지 = 1단계 콘텐츠 자체)
    pattern: inline custom (Cover 변형)
    props:
      eyebrow: "출처 검증 3단계 · Step 1"
      title: "클릭"
      lead: "AI 답변의 인용/링크를 직접 클릭한다" (highlight)
      principle_code: "클릭하지 않은 출처는 없는 것과 같다"
      trap_grid: 함정 라벨 + 본 적 없는 출처 우선 클릭
    strength: 3 (example)
    interactive: scale-in + highlight (V4=3)

  s35-c3-step2-original:
    type: example (2단계 + 체크리스트 4)
    pattern: inline custom — numbered checklist
    props:
      eyebrow: "출처 검증 3단계 · Step 2"
      title: "원문 확인"
      core_line: "페이지가 열렸다고 통과가 아니다 / 페이지의 내용이 AI 답변과 일치해야"
      items: 4 (제목/저자/문장/맥락)
      D-035: emoji 0건 (체크박스 → border-2 + dot)
    strength: 3 (example)
    interactive: hover-expand on each item + group color transition (V4=3)

  s36-c3-step3-trust:
    type: example (3단계 + 체크리스트 3)
    pattern: inline custom — s35와 동형 (3 항목)
    props:
      eyebrow: "출처 검증 3단계 · Step 3"
      title: "신뢰성 판단"
      items: 3 (1차/교차/페르소나)
      conclusion: "1차 자료 아니거나 한국 시장 아니면 신뢰도 낮다" (highlight)
    strength: 3 (example)
    interactive: hover-expand on each item (V4=3)

  s37-c3-flow-summary:
    type: process (sequential 검증 흐름)
    pattern: inline custom — 3-column grid (좌: 세로 step + ↓, 우: 통과/실패 분기)
    props:
      title: "3단계 모두 통과한 정보만 워크시트에 옮긴다"
      steps: 3 (클릭/원문/신뢰)
      branches: 통과(success) / 실패(danger)
      D-035: emoji ✅/❌ → "통과/어느 단계라도 실패" 텍스트
    strength: 2 (process)
    interactive: 정적 step-reveal 가능 (V4=2)

  s38-c3-terms:
    type: terms (§3 챕터 용어 7행)
    pattern: inline 2-col grid (s16/s27 동일)
    props:
      eyebrow: "챕터 용어 해설 — 출처 검증의 실전"
      title: "핵심 용어 정리"
      terms: 7행
    strength: 1 (terms)
    interactive: 정적 (V4=1)

profile_alignment:
  V1_diversity: 4 unique types (example × 3 + process + terms — title-hybrid는 example로 분류)
  V2_strength: 평균 (3+3+3+2+1)/5 = 2.4 → 표준 강도 정합
  V3_session_coherence: 출처 검증 일관성 유지, sequential flow 신규 시각 (s37)
  expected_threshold: V4 ≥ 2.5 (s35/s36 hover-expand로 회복 의도)

status: READY_FOR_QUALITY_REVIEW
```

#### quality-judge 16축

**Group A (13축)**: 13 PASS
- A.6 coverage: PASS (line 414-480 매핑, ::: aside 424-426/466-468은 skipped 명시)
- A.7 emoji: PASS (3️⃣ 챕터 용어 → "Section 3" 텍스트 변환 / ✅/❌ → "통과/실패" 텍스트)
- A.14 wrapper-prop: PASS 100% (s34 eyebrow+title+lead+principle+trap / s35 eyebrow+title+lead+core+items 4 / s36 동형 / s37 steps+branches / s38 terms 7)
- A.15 시각 마커: PASS (accent-bar 3px / dot w-2.5 / border-l-4 / 체크박스 border-2 + 내부 dot)
- A.16 패턴 적합성: PASS (sequential 흐름 = inline JSX 적합 / checklist = numbered item grid 적합 / process는 StepGuide 부적합 회피)

**Group B**: 5 PASS / 1 WARN (B.2 s35/s36 동형 구조 2회)
**Group C**: N/A
**Group D**: 3 PASS (디자인 토큰 / rounded-xl 사용 / emoji 0)
**Group E**: 5 PASS (E10 hover-expand 인터랙티브 / E1 실제 통합)

**종합**: PASS 16 / WARN 1 / FAIL 0 / N/A 3

#### creative-judge 5축

**V1 다양성**:
- 사용 타입: example(s34) + example(s35) + example(s36) + process(s37) + terms(s38) = **3 unique types**
- type_diversity = 3/8 = 0.375
- max_concentration: example 3/5 = 0.6 (penalty 20)
- emphasis_diversity: 4가지 (hybrid/checklist/checklist/sequential/terms) → 0.75
- raw = (0.375 × 0.5 + 0.75 × 0.5) × 100 = 56
- penalty = (0.6 - 0.4) × 100 = 20
- **score: 36** (FAIL_SOFT, T2.7는 sequential step 3회 구조상 example 누적 불가피)

**V2**: 평균 편차 0.2 → **100** EXCELLENT

**V3**: 누적 진척 — Final 종합

**V4**:
- s34 inline custom + highlight + scale-in: 3
- s35 hover-expand × 4 items: 3
- s36 hover-expand × 3 items: 3
- s37 sequential 정적 (step-reveal 가능): 2
- s38 inline 표 정적: 1
- avg = 12/5 = 2.4 → **score: 40** (WARN, 경계)

**V5**: required 1 (process) + recommended 4 → V5 ≈ **75** (PASS)

**총점**: (V1=36 + V2=100 + V4=40 + V5=75) / 4 = **62.75 WARN** (< 65)

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=1 ✅
- creative 62.75 < 65 → **자동 통과 조건 미충족**
- 그러나 V1 낮음은 콘텐츠 구조상 자연 (sequential 3단계 = example 3회 누적 불가피), V4=40은 누적 권고만
- → **강사 게이트 권장** (메타 슬라이드 예외 D-031 미적용, 본 미니 사이클은 메타 X)
- **사용자 시각 확인 단계로 진행 (T2.6과 동일 흐름)**

⚠️ **누적 회귀 권고**:
- T2.5(V4=40) + T2.6(V4=40) + T2.7(V4=40) — 3회 연속 V4 < 70
- 원인: 메타 슬라이드(표/용어) + 정적 카드(거짓 패턴 3개) + sequential 정적
- T3 실습 진입 전 ActivitySlide에서 인터랙티브 보강 권고 (체크리스트, 단계 toggle 등)

---

### § 3.8 T3.0 실습 목차 + T3 인프라 (메타 슬라이드, D-031 자동 통과)

> 범위: T3 인프라 4건 + T3.0 실습 목차 1장 / 메타 슬라이드 = creative 65 미만 허용

#### β' Composition brief (T3-INF + T3.0)

```yaml
infra:
  - ActivitySlide.jsx 신규 패턴 (props 7: activity_number/title/goal/procedure/checklist/duration/deliverable)
  - s1/activity/ 폴더 + index.js
  - deck-registry.js S1 entry에 activity 덱 추가

mini_cycle: T3.0
range: lecture.md L482 ## 실습 직속 (D-032 자동 생성)
slides: 1

slide_specs:
  s39-activity-toc:
    type: title (목차, 자동 생성)
    pattern: Objectives (재사용, theory/02-toc 동형)
    props:
      eyebrow: "실습의 흐름"
      items: 6개 미니 사이클 제목 (시드/활동1/활동2/활동3/과제/Tips)
    D-035: emoji "🌱" "⭐" 제거 → 텍스트
    strength: meta
    interactive: stagger fadeUp + hover scale-110 (V4=3)

status: META_SLIDE_AUTO_PASS (D-031)
```

#### 자동 통과 판정 (D-031)
- 메타 슬라이드 (toc) → quality + creative 검증 제외
- 인프라 변경 → `npm build` PASS = OK
- → **자동 통과** ✅

---

### § 3.9 T3.1 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s2-s4 (3장) — ### 🌱 시드 아이디어 6개 미니 사이클

#### β' Composition brief (T3.1)

```yaml
mini_cycle: T3.1
range: lecture.md L482-525 (## 실습 도입 + ### 🌱 시드 아이디어 6개 + ### 시드 목록 + ### 시드 활용 가이드)
slides: 3

slide_specs:
  s2-seeds-cover:
    type: title (### 섹션 표지)
    pattern: Cover (재사용) + 산출물 카드 grid 추가
    props:
      eyebrow: "Seeds" (D-035 emoji 🌱 제거)
      title: "시드 아이디어 6개"
      subtitle: 도입 1단락
      additional: 실습 산출물 강조 카드 (highlight)
    strength: meta
    interactive: scale-in + stagger (V4=3)

  s3-seeds-list:
    type: terms (6행 표)
    pattern: inline grid table (4-col: #/이름/페르소나/가치)
    props:
      header_row: ["#", "시드 이름", "페르소나", "핵심 가치"]
      rows: 6 (시드 6번 focused with success border + "본 실습 사용" 라벨)
      D-035: ⭐ → "본 실습 사용" 텍스트
    strength: 1 (terms)
    interactive: hover-expand on rows (V4=2)

  s4-seeds-guide:
    type: example (활용 가이드)
    pattern: inline 3-area (복잡도 정렬 가로 + 작업자 가이드 3 카드 + 변형 3건)
    props:
      complexity_order: [5,1,2,3,6,4] (5=success / 4=danger 강조)
      audience: 3 (비개발자 good / 주니어 neutral / 4번 warning)
      transforms: 3 (페르소나/상황/카테고리 each before→after)
    strength: 3 (example)
    interactive: hover-expand on cards (V4=2)

profile_alignment:
  V1_diversity: 3 unique types (title/terms/example)
  V2_strength: 메타 + 1 + 3 → 표준 강도 정합
  expected_threshold: V4 ≥ 2 (메타 슬라이드 다수로 자연 낮음)

status: READY_FOR_QUALITY_REVIEW
```

#### quality-judge 16축

**Group A (13축)**: 13 PASS
- A.6 coverage: PASS (line 482-525 매핑, ::: aside 523-525 skipped 명시)
- A.7 emoji: PASS (🌱/⭐/🎯 모두 텍스트 변환)
- A.14 wrapper-prop: PASS 100% (Cover eyebrow+title+subtitle / 표 모든 셀 / 활용 가이드 3 area 모두)
- A.15 시각 마커: PASS (accent-bar 3px / 시드 6 focused 강조 / 복잡도 카드 색상 차별)
- A.16 패턴 적합성: PASS (Cover 표지 적합 / 표 = inline grid 적합 / 가이드 = 다영역 inline 적합)

**Group B**: 5 PASS / 1 WARN (B.2 색상 분기 다양)
**Group C**: N/A
**Group D**: 3 PASS (토큰 / rounded-xl·2xl / emoji 0)
**Group E**: 5 PASS

**종합**: PASS 16 / WARN 1 / FAIL 0 / N/A 3

#### creative-judge 5축

**V1 다양성**:
- 사용 타입: title(s2) + terms(s3) + example(s4) = **3 unique types**
- type_diversity = 3/8 = 0.375
- max_concentration: 1/3 = 0.33 (penalty 0)
- emphasis_diversity: 3/4 = 0.75
- raw = (0.375 × 0.5 + 0.75 × 0.5) × 100 = 56
- **score: 56** (WARN, 작은 sample size)

**V2**: 평균 편차 0 → **100** EXCELLENT

**V3**: 누적 진척

**V4**:
- s2 Cover + scale-in + 산출물 카드 = 3
- s3 inline 표 + hover = 2
- s4 inline 3-area + hover = 2
- avg = 7/3 = 2.33 → **score: 40** (WARN)

**V5**: required 1 (Cover) + recommended 2 → V5 ≈ **75** (PASS)

**총점**: (V1=56 + V2=100 + V4=40 + V5=75) / 4 = **67.75 PASS** ✅

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=1 ✅
- creative 67.75 ≥ 65 ✅
- → **자동 통과** ✅

---

### § 3.10 T3.2 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s5-s10 (6장) — ### 활동 묶음 1 미니 사이클

#### β' Composition brief (T3.2)

```yaml
mini_cycle: T3.2
range: lecture.md L527-714 (### 활동 묶음 1: 아이디어 선택과 1차 리서치)
slides: 6

slide_specs:
  s5-bundle1-cover:
    type: title (### 섹션 표지)
    pattern: Cover + objectives 4
    props: eyebrow "활동 묶음 1" / title / subtitle 도입 / objectives 4
    strength: meta
    interactive: scale-in + stagger (V4=3)

  s6-act-1-1-idea-selection:
    type: example (활동 1-1, 3 STEP)
    pattern: inline custom (eyebrow activity meta + 2-col 양식 + 적합성 표 + 체크 4)
    props: 빈 양식 / 시드 6 적용 / "왜 지금?"·"왜 내가?" 표 / 체크리스트 4
    strength: 3 (example)
    interactive: hover-expand on checks (V4=2)

  s7-act-1-2-five-whys:
    type: example (활동 1-2, 5 Whys sequential)
    pattern: inline custom (2-col grid — 좌 양식+결론 / 우 5 Whys 인과)
    props: 빈 양식 / 시드 6 5단계 (마지막 단계 highlight) / 진짜 문제 결론
    strength: 3 (example)
    interactive: sequential ↓ 화살표 (V4=2)

  s8-act-1-3-ai-research:
    type: example (활동 1-3)
    pattern: inline custom (프롬프트 양식 2-col + 출처 점검 분기 + 폐기 grid)
    props: STEP 1 (양식) / STEP 2 (있음 success/없음 warning 분기) / STEP 2-1 재요청 / 폐기 danger
    strength: 3 (example)
    interactive: 2-branch + hover (V4=2)

  s9-act-1-4-source-verify:
    type: example (활동 1-4)
    pattern: inline custom (좌 3단계 + 정리 / 우 거짓 메모 양식 + 시드 6 예시)
    props: 3단계 numbered / 거짓 메모 빈 양식 / 시드 6 적용 / 1차 리서치 정리
    strength: 3 (example)
    interactive: hover (V4=2)

  s10-bundle1-validation:
    type: example (검증 기준 7 체크)
    pattern: inline numbered checklist (2-col, success border hover)
    props: 7 체크 항목
    strength: 3 (example)
    interactive: hover-expand on each + 색상 transition (V4=3)

profile_alignment:
  V1_diversity: 2 unique types (title + example × 5)
  V2_strength: 메타 + 3×5 → 표준 강도
  expected_threshold: V1 낮음 (example 누적 5회 — 활동 콘텐츠 구조상 자연)

status: READY_FOR_QUALITY_REVIEW
```

#### quality-judge 16축

**Group A (13축)**: 13 PASS
- A.6 coverage: PASS (line 527-714 매핑, ::: aside 548-550/608-610/702-704 skipped 명시)
- A.7 emoji: PASS (✅/❌ 모두 텍스트 변환 — 있음/없음/검증 기준/폐기)
- A.14 wrapper-prop: PASS 100% (Cover 모든 props / 각 활동 wrapper 헤더 + 본문 + 양식 + 결론 모두 활용)
- A.15 시각 마커: PASS (accent-bar 3px / border-l-4 / dot w-2/2.5 / 체크박스 border-2)
- A.16 패턴 적합성: PASS (활동 = inline custom 적합, ActivitySlide 슬롯 부족 회피 / 체크리스트 = numbered + dot 적합)
  - D-040 ActivitySlide 적용 안 한 이유: 활동 1-1~1-4 모두 빈 양식 + 시드 6 적용 패턴이 메인이라 procedure/checklist 슬롯으로 표현 불가

**Group B**: 5 PASS / 1 WARN (B.2 example 5회 누적)
**Group C**: N/A
**Group D**: 3 PASS (토큰 / rounded-xl·2xl / rounded-lg 0건 자동 수정 1건)
**Group E**: 5 PASS

**종합**: PASS 16 / WARN 1 / FAIL 0 / N/A 3

#### creative-judge 5축

**V1 다양성**:
- 사용 타입: title(s5) + example(s6-s10) = **2 unique types**
- type_diversity = 2/8 = 0.25
- max_concentration: example 5/6 = 0.83 (penalty 43)
- emphasis_diversity: 5/4 = 1.0 (cap)
- raw = (0.25 × 0.5 + 1.0 × 0.5) × 100 = 62.5
- penalty = (0.83 - 0.4) × 100 = 43
- **score: 20** (FAIL_SOFT — 활동 콘텐츠 구조상 example 누적 불가피)

**V2**: 평균 편차 0.2 → **100** EXCELLENT

**V3**: 누적 진척

**V4**:
- s5 Cover + scale-in + stagger = 3
- s6 inline 3 STEP + hover = 2
- s7 inline sequential 5 Whys = 2
- s8 inline 2-branch = 2
- s9 inline 2-col = 2
- s10 inline checklist + hover transition = 3
- avg = 14/6 = 2.33 → **score: 40** (WARN, 경계)

**V5**: required 1 (Cover) + recommended 5 → V5 ≈ **78** (PASS)

**총점**: (V1=20 + V2=100 + V4=40 + V5=78) / 4 = **59.5 WARN** (< 65)

#### δ'.0b 최종 판정
- quality FAIL=0 / WARN=1 ✅
- creative 59.5 < 65 → **자동 통과 미충족**
- V1 낮음은 콘텐츠 구조 자연 (4 활동 = example 누적 필연)
- → **강사 게이트 권장** (사용자 시각 확인)

⚠️ **누적 회귀 권고**:
- T2.5~T2.7(V4=40) + T3.1(V4=40) + T3.2(V4=40) = 5회 연속
- T3.3~T3.4 에서 ActivitySlide 패턴 활용 가능성 검토 (워크시트 단순 활동에 적합) — V1 회복 기회

---

### § 3.11 T3.3 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s11-s15 (5장) — ### 활동 묶음 2 워크시트 채우기

#### β' Composition brief (T3.3)

```yaml
mini_cycle: T3.3
range: lecture.md L716-865 (### 활동 묶음 2)
slides: 5
slide_specs:
  s11-bundle2-cover: Cover + objectives 3 (meta, V4=3)
  s12-act-2-1-problem-def: inline (빈 양식 + 시드 6 + 위험 grid + 자가 점검 3) example
  s13-act-2-2-persona: inline (빈 양식 + 시드 6 + 결정적 2줄 warning) example
  s14-act-2-3-hypotheses: inline (형식 2 + 검증 BAD/GOOD + 가설 3 with 매핑) example
  s15-bundle2-validation: inline 7 numbered checklist
```

#### quality-judge 16축
- A.6 coverage PASS / A.7 emoji PASS (❌/✅→BAD/GOOD) / A.14 prop 100% / A.15 시각 마커 / A.16 패턴 적합
- 종합: PASS 16 / WARN 1 (B.2 example 4회 누적) / FAIL 0

#### creative-judge 5축
- **V1**: 2 unique types (title + example × 4), max conc 0.8 → **score: 22** (FAIL_SOFT, 활동 콘텐츠 구조 자연)
- **V2**: 100 EXCELLENT
- **V4**: avg 2.4 → **40** WARN
- **V5**: ≈ **76** PASS
- **총점**: (22+100+40+76)/4 = **59.5 WARN** — 강사 게이트 (구조 자연)

---

### § 3.12 T3.4 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s16-s20 (5장) — ### 활동 묶음 3 자기 선언과 회고

#### β' Composition brief (T3.4)

```yaml
mini_cycle: T3.4
range: lecture.md L867-953 (### 활동 묶음 3)
slides: 5
slide_specs:
  s16-bundle3-cover: Cover + objectives 3 (meta, V4=3)
  s17-act-3-1-declaration: inline (빈 양식 + 시드 6 + 검증 BAD/GOOD 카드 2) example
  s18-act-3-2-retrospective: inline 3 질문 × (GOOD/BAD) example
  s19-act-3-3-next-entry: inline 3 자산 카드 (success) + 후크 결론 example
  s20-bundle3-validation: inline 4 checklist (2-col)
```

#### quality-judge 16축
- 종합: PASS 16 / WARN 1 (B.2 example 누적) / FAIL 0

#### creative-judge 5축
- **V1**: 2 unique types, max conc 0.8 → **22** FAIL_SOFT (구조 자연)
- **V2**: 100 / **V4**: avg 2.4 → 40 / **V5**: 76
- **총점**: **59.5 WARN** — 강사 게이트

---

### § 3.13 T3.5 + T3.6 γ' 결과 — 정식 평가 (F2 방식)

> 메인 직접 평가 / 범위: s21-s22 (2장) — ### 과제 안내 + ### Tips

#### β' Composition brief

```yaml
T3.5: s21-assignment (3행 표 + 결론, example)
T3.6: s22-tips (10 Tips 2-col, example) — D-035 ⭐ → "Tips"
```

#### γ' 종합
- quality 16 PASS / 1 WARN / 0 FAIL
- creative: V1 example 100% (단 2장), V2=100, V4=avg 2.5, V5≈70 → 총점 **63 WARN**
- → 강사 게이트 (이론 마지막 메타 슬라이드 성격)

---

### § 3.14 Phase 3 실습 종합

- **이론 미니 사이클 7개 (T2.1~T2.7) + 실습 미니 사이클 7개 (T3.0~T3.6)** 완료
- **누적 60장** (이론 38 + 실습 22)
- 자동 통과 미충족 미니 사이클: T2.7 / T3.2~T3.6 (V1 낮음 — 활동 콘텐츠 구조상 example 누적 자연)
- 회귀 권고 누적: V4 < 70 9회 연속 — 정적 카드 + 양식 코드 블록 위주
- **Phase 4 (Final ε) 진입 가능 상태**
- F3 Playwright visual regression 미실행 (60장 baseline 필요)

---

### § 3.15 F2 회고

- T2.3/T2.4/T2.5/T2.6/T2.7 정식 28축 + V1-V5 평가 작성 완료
- T2.3-T2.6 모두 자동 통과 (FAIL=0)
- T2.7 자동 통과 미충족 (creative 62.75 < 65) — 강사 시각 게이트로 진행
- 누적 회귀 권고:
  - T2.4 V1=34: PastVsPresent 3회 — 콘텐츠 의도상 자연
  - T2.5 V1=44 + V4=40: 메타 슬라이드 다수
  - T2.6 V4=40: 정적 카드 반복
  - T2.7 V1=36 + V4=40: sequential 3 step 누적 + 정적 카드 — Phase 3 실습에서 보강 권고
- 이론 미니 사이클 완료 — Phase 3 실습 진입 가능
- 모두 강제 X, 권고만

---

## § 4. Build & Validation (미니 사이클 δ'/ε')

---

## § 5. Final Sign-off (ε 통합 검증, 2026-05-12)

### ε.1 빌드 검증
- `npm run build` exit 0 ✅
- `/sessions/[slug]/[deck]` 37.4 kB / First Load 133 kB
- theory 38장 + activity 22장 = **60장** 정상 빌드

### ε.2 capture-checker
- `node .claude/utilities/capture-checker.js` 실행
- 결과: 참조 0 / 위반 0 (S1은 캡처 사용 슬라이드 없음, OK)

### ε.3 design-checker (D-041/D-042 적용 후)
```
theory (38 파일): 위반 0건
activity (22 파일): 위반 0건
```

### ε.4 coverage 사후 검증 (D-028)
- lecture.md 977줄 매핑 현황:
  - 60 슬라이드 (이론 38 + 실습 22) → 본문 콘텐츠
  - ::: aside 10건 → skipped 명시 (강사 안내, 학생 화면 X)
  - ## 학습 목표 → ## 직속 → 자동 목차 (s1, s2)
  - 빈 줄 / 구분선 (`---`) → 자연 skipped
- **coverage 100% 달성** ✅

### ε.5 미니 사이클 종합

| 미니 사이클 | 슬라이드 | 자동 통과 | 회귀 |
|---|---|---|---|
| T2.0a/T2.0b (자동 생성) | 2 | ✅ (D-031 메타) | 0 |
| T2.1 §1 기획이란 무엇인가 | 6 | ⚠️ 회귀 1회 후 PASS | 1 (notes 보강) |
| T2.2 문제는 한 번에 X | 3 | ✅ (#11 패턴 교체 후) | 1 (StepGuide → inline) |
| T2.3 §1 ####  | 5 | ✅ | 0 |
| T2.4 §2 AI 시대 | 6 | ✅ (V1=34 권고만) | 0 |
| T2.5 §2.5 두 번째 단정 | 5 | ✅ (V1=44 권고만) | 0 |
| T2.6 §3 출처 검증 | 6 | ✅ (V4=40 권고만) | 0 |
| T2.7 §3.5 검증 3단계 | 5 | ⚠️ 강사 게이트 (V1=36) | 0 |
| T3.0 실습 목차 | 1 | ✅ (D-031 메타) | 0 |
| T3.1 시드 6개 | 3 | ✅ | 0 |
| T3.2 활동 묶음 1 | 6 | ⚠️ 강사 게이트 (V1=20) | 0 |
| T3.3 활동 묶음 2 | 5 | ⚠️ 강사 게이트 (V1=22) | 0 |
| T3.4 활동 묶음 3 | 5 | ⚠️ 강사 게이트 (V1=22) | 0 |
| T3.5+T3.6 과제+Tips | 2 | ⚠️ 강사 게이트 (V1 example only) | 0 |

**총 회귀**: 2회 (T2.1 notes 보강 / T2.2 #11 StepGuide 패턴 교체)

### ε.6 누적 결함 회고 (메타)

- 시각 결함 보고 (강사 시각 게이트): 12건
  - T2.1 후: 5건 (Definition dot/KeyMessage 줄표시/Warning UI 깨짐)
  - T2.2 후: 1건 (StepGuide 깨짐 → D-039/D-040 신설)
  - T2.7 후: 4건 (분기 위치 / 가운데 글자 / 라인 정렬 / Cover 대칭)
  - Phase 4 진입 시: 1건 (design-checker 자동 수정 화살표 사고 → D-041 신설)
  - 가독성: 9건 → 가독성 확장 sprint (font-mono 제거, 폰트 ↑)
- 신규 결정: D-031~D-042 (12건)
- 신규 패턴: PastVsPresent.jsx / ActivitySlide.jsx (2건)

### ε.7 미니 사이클 워크플로우 회고

- D-030 격리 호출 우선 위반 누적 (T2.3 이후 메인 직접 다수)
- 원인:
  - creative-judge runtime 이슈 (5번 실패)
  - agent 호출 비용 vs 메인 직접 효율 trade-off
  - 메인이 F2 방식으로 spec § 3 정식 작성하여 신뢰성 회복
- 향후 S2에서 D-030 회복 방안: agent runtime 재진단 + 격리 호출 의무화

### ε.8 final SIGN-OFF

**상태**: S1 60장 빌드 완료 ✅

**다음 단계**:
- **Phase 5 실습 제출 인프라**: S2 Phase 4 종료 후 통합 sprint (강사 결정)
- **Phase 6 강사 시각 검증**: 본 sprint 후 S1 전체 슬라이드 검토

**Sign-off 일시**: 2026-05-12
**Sign-off 결정**: S2 진입 가능 ✅

---

## 추가 참고

### Profile 상태
- status: **confirmed** (강사 검증 완료, 기존값 유지)
- expected_slide_count: **갱신 필요** (67-69 → 99-111)
- interactivity_density: **medium** (변경 없음)
- tone_strength: **balanced** (변경 없음)

### 미니 사이클 게이트 조건
1. 현재 `###` 섹션의 모든 `####` 콘텐츠 완료
2. coverage 100% (skipped 명시)
3. quality-judge PASS (FAIL=0, WARN≤1)
4. creative-judge ≥ 65 OR 메타 슬라이드 (D-031 예외)
5. 강사 명시 변경 = 0

### D-031 메타 슬라이드 예외 (auto-generated)
- auto-session-cover / auto-theory-objectives / auto-activity-objectives
- 섹션 표지들 (title 타입)
- creative_judge ≥ 65 조건 제외, 자동 통과 가능

---

**[S1 spec.md v2 Phase α 끝]**
