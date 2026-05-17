# 새 시스템 아키텍처 + CLAUDE.md 재설계 보고서

**작성일**: 2026-05-10
**기반**: 진단 리포트 + Q1-Q4 결정 사항
**범위**: 완전 재설계 (8개 agent 모두 대체) + CLAUDE.md 재설계
**적용**: S4 큐레이션부터

---

## 0. 한 페이지 요약

### 0-1. 패러다임 전환

| 기존 (PPT 큐레이션 시스템) | 새 시스템 (lecture.md 번역기) |
|---|---|
| 18개 패턴 카탈로그에 lecture.md 매핑 | lecture.md의 의도·강도를 추론해 시각 형태 생성 |
| 검증 축 66개 (모두 감산형) | 감산 28축 + 가산 5축 |
| history.md 차단 룰 무한 누적 | 차단 룰 만료 + 세션별 차등 |
| 모든 세션 균일 처리 | profile 기반 세션별 동적 분기 |
| 36개 결정 = 9세션 공통 SSOT | 31개 공통 + 세션별 분리 |
| Phase G 13단계 + 7중 검증 | Phase α 6단계 + 3중 검증 |

### 0-2. 새 시스템의 4대 원칙

1. **profile-driven** — 세션 특성이 워크플로우의 입력 변수
2. **add-only-creative** — 가산형 평가 축이 다양성을 강제
3. **strength-preserving** — lecture.md 원본 강도가 슬라이드에 반영
4. **rule-expiring** — 차단 룰은 유효기간을 가짐

### 0-3. 새 agent 구성 (8개 → 5개)

```
1. lecture-translator      (분석 + profile 추론 + 시퀀스)
2. layer-composer           (interactive + visual 통합)
3. quality-judge            (감산 통합 검증)
4. creative-judge           (가산 평가 — 신설 ⭐)
5. render-validator         (빌드 후 시각 검증)

+ utilities (별도 agent X, 함수형)
   - capture-checker (capture-validator 흡수)
   - design-checker  (design-reviewer 흡수)
```

---

## 1. 새 시스템 아키텍처

### 1-1. 시스템 다이어그램

```
┌─────────────────────────────────────────────────────────────────┐
│                    INPUT: lectures/S{N}/lecture.md               │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│  Phase α: ANALYSIS                                                │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Agent 1: lecture-translator                              │   │
│  │  ├─ α.1 구조 분석 (헤딩 + 평문 + 표 + 인용)              │   │
│  │  ├─ α.2 profile 추론 (5개 항목, fall-back 양쪽 후보)      │   │
│  │  ├─ α.3 강도 매핑 (단정/부연/예시 → 강도 5/3/1)           │   │
│  │  └─ α.4 시퀀스 초안 (profile 반영)                        │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓
                  ⛳ Gate-1: 강사 분류 + Profile 검토
                  (모호 항목 강사 결정, 분류 OK 확인)
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│  Phase β: COMPOSITION                                             │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Agent 2: layer-composer                                  │   │
│  │  ├─ β.1 시퀀스 + props 작성 (강도 매핑 보존)              │   │
│  │  ├─ β.2 interactive 명세 (profile.density 강제)           │   │
│  │  ├─ β.3 visual 명세 (profile.visual_kind 강제)            │   │
│  │  └─ β.4 wireframe (px 단위, mobile 포함)                  │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│  Phase γ: REVIEW (병렬 실행)                                      │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Agent 3: quality-judge   │  Agent 4: creative-judge ⭐    │   │
│  │  (감산 통합)               │  (가산 평가)                  │   │
│  │                            │                                │   │
│  │  ├─ 36 공통 결정 검증      │  ├─ 다양성 점수               │   │
│  │  ├─ profile 5항목 강제     │  ├─ 강도 일치 점수            │   │
│  │  ├─ 흐름 호흡 검증 (신규)  │  ├─ 세션 차별성 점수          │   │
│  │  ├─ 두께 검증              │  ├─ 인터랙티브 가산 점수      │   │
│  │  └─ design 토큰 grep       │  └─ wireframe 정교도 점수     │   │
│  │                            │                                │   │
│  │  → FAIL 시 회귀            │  → 점수 < 임계 시 회귀        │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓
                  ⛳ Gate-2: 강사 spec 검토
                  (감산 PASS + 가산 점수 보고)
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│  Phase δ: BUILD (섹션 분할)                                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  lecture-translator (재호출)                              │   │
│  │  ├─ §1 build → render-validator → 강사 §1 검증            │   │
│  │  ├─ §2 build → render-validator → 강사 §2 검증            │   │
│  │  └─ §3 build → render-validator → 강사 §3 검증            │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│  Phase ε: FINAL VALIDATION                                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Agent 5: render-validator                                │   │
│  │  ├─ overflow 픽셀 검증                                    │   │
│  │  ├─ 줄바꿈 시각폭 검증                                    │   │
│  │  ├─ capture 무결성                                        │   │
│  │  └─ 빌드 PASS 확인                                        │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────────┘
                           ↓
                  OUTPUT: 슬라이드 덱 + history.md 갱신
```

### 1-2. 핵심 차이점 — 기존 vs 신규

#### 차이 1. agent 수 8 → 5

| 기존 | → | 신규 | 변화 |
|---|---|---|---|
| slide-curator | → | lecture-translator | 이름 변경, profile 추론 추가 |
| interactive-planner | → | layer-composer | visual-planner와 통합 |
| visual-planner | → | (위와 통합) | layer-composer에 흡수 |
| layout-validator | → | render-validator | 빌드 후 검증으로 통합 |
| plan-reviewer | → | quality-judge | profile 검증 + 흐름 호흡 추가 |
| content-quality-reviewer | → | (quality-judge에 통합) | 흡수 |
| design-reviewer | → | (utility 함수) | quality-judge가 호출 |
| capture-validator | → | (utility 함수) | render-validator가 호출 |
| (없음) | → | **creative-judge** ⭐ | 신설 — 가산형 평가 |

**감산형 검증자 7개 → 3개로 압축**, **가산형 1개 신설**. 진단 리포트 처방 4 적용.

#### 차이 2. Phase 13단계 → 6단계

```
기존: 1 → 2 → 3 → 4 → 5 → 6 → G(7~10) → G+(11~12) → 13
신규: α → ⛳ Gate-1 → β → γ(병렬) → ⛳ Gate-2 → δ(섹션 빌드) → ε
```

13단계 → 6단계. 강사 게이트 3회 → 2회 + 섹션 검증.

#### 차이 3. 검증 축 통계

| 분류 | 기존 | 신규 |
|---|---|---|
| 감산형 검증 축 | 약 66개 | 28개 (통합/압축) |
| 가산형 평가 축 | 0개 | **5개** ⭐ |
| 36개 결정 강제 | 모든 세션 36개 | 31개 공통 + 세션별 5-10개 |

#### 차이 4. profile 기반 동적 분기

기존: 모든 세션 동일 처리
신규: profile 5개 항목이 모든 후속 단계에 영향

```
S1 (linear, diagram, medium, balanced, 28-34장)
  → 사슬 다이어그램 우선, 인터랙티브 6-9건, 흐름 검증 linear

S2 (parallel, comparison, high, balanced, 36-44장)
  → 좌우 비교 우선, 인터랙티브 9-13건, 흐름 검증 parallel

S3 (linear, simulation, medium, strong, 30-38장)
  → 시뮬 컴포넌트 우선, 인터랙티브 6-9건, 흐름 검증 linear
```

→ 세션이 다르게 만들어짐. 핵심 문제 2 직접 해결.

---

## 2. 5개 새 agent 개요

각 agent의 *역할 한 줄*과 *핵심 변화*만 여기서. 세부 명세는 후속 작업.

### 2-1. Agent 1: lecture-translator

> **역할**: lecture.md를 분석하여 profile을 추론하고, 강도 매핑된 시퀀스 초안을 만든다. Phase δ에서는 빌드 실행자 역할.

**기존 slide-curator 대비 변화**:
- ✅ 신규: profile 추론 (Phase α.2)
- ✅ 신규: 강도 매핑 (Phase α.3)
- ✅ 변경: 헤딩 트리 중심 → *평문/표/인용 포함 전체 분석*
- ✅ 변경: 18개 패턴 카탈로그 강제 매핑 → *강도 기반 패턴 추천*
- ❌ 제거: 9단계 워크플로우 (단순화)

**모델**: sonnet
**파일**: `.claude/agents/lecture-translator.md`

### 2-2. Agent 2: layer-composer

> **역할**: 시퀀스 위에 interactive 레이어와 visual 레이어를 한 번에 구성한다. profile에 따라 분기.

**기존 interactive-planner + visual-planner 통합**:
- ✅ 두 agent의 책임을 한 곳에 (호출 비용 감소)
- ✅ visual과 interactive의 *상호 의존* 자연스럽게 처리
- ✅ wireframe을 *px 단위*로 작성 (진단 처방 6)
- ✅ profile.density에 따라 인터랙티브 수 *동적 결정*

**모델**: sonnet
**파일**: `.claude/agents/layer-composer.md`

### 2-3. Agent 3: quality-judge

> **역할**: 감산형 통합 검증. 36개 공통 결정 + profile 5항목 + 흐름 호흡 + 두께 + 디자인 토큰 모두 한 곳에서.

**기존 plan-reviewer + content-quality-reviewer + design-reviewer 통합**:
- ✅ 검증 비용 감소 (1번 호출로 모든 감산 검증)
- ✅ 검증 축 통합 — 약 28개 (66개에서 압축)
- ✅ 신규: **흐름 호흡(pacing) 검증 축** — 핵심 문제 1 직접 해결
- ✅ design-reviewer pre-build grep을 함수로 흡수

**모델**: sonnet (대부분), 흐름 검증만 opus 호출

**파일**: `.claude/agents/quality-judge.md`

### 2-4. Agent 4: creative-judge ⭐ (신설)

> **역할**: 가산형 평가. 다양성/강도일치/세션차별성/인터랙티브깊이/wireframe정교도 5축을 점수로.

**진단 리포트 처방 2의 직접 적용**:
- ✅ **다양성 점수** — 사용 패턴 종류 / 가능 종류
- ✅ **강도 일치 점수** — lecture.md 강도 vs 슬라이드 패턴 강도 매칭
- ✅ **세션 차별성 점수** — 이전 세션과의 차이도
- ✅ **인터랙티브 깊이 점수** — 카탈로그 다양성, 단순 toggle 페널티
- ✅ **wireframe 정교도 점수** — px 명시 / mobile 포함 / overflow 검증

**판정 방식**:
- 5축 점수 합 ≥ 임계 → PASS (강사 보고 시 점수 표시)
- 임계 미달 → 회귀 권고 (강사 결정)

**모델**: opus (질적 판단)
**파일**: `.claude/agents/creative-judge.md`

### 2-5. Agent 5: render-validator

> **역할**: 빌드 후 실제 시각 검증. overflow, 줄바꿈, capture, build PASS 모두.

**기존 layout-validator + capture-validator 통합 + 픽셀 단위 검증**:
- ✅ 신규: **픽셀 단위 wireframe 비교** (진단 처방 6)
- ✅ 신규: **시각 폭 기반 줄바꿈 검증** (진단 처방 5)
- ✅ capture-validator를 함수로 흡수
- ✅ Phase δ 섹션별 호출 (§1/§2/§3 각각)

**모델**: sonnet
**파일**: `.claude/agents/render-validator.md`

---

## 3. 5개 agent 협업 흐름 (구체)

### 3-1. Phase α: ANALYSIS (lecture-translator)

```
입력: lectures/S{N}/lecture.md, lectures/S{N-1}/profile.yaml (이전 세션)

α.1 구조 분석
  ├─ 헤딩 트리 추출
  ├─ 평문/표/인용/코드블록 모두 인식
  └─ 강도 신호 추출 ("단정", "절대", "권장" 등 키워드 + 어미)

α.2 profile 추론
  ├─ 5개 항목 신호 검출
  ├─ 모호 항목 fall-back 양쪽 후보 제시
  └─ 출력: profile draft + 추론 근거

α.3 강도 매핑
  ├─ 각 문장/문단을 강도 5(단정) ~ 1(예시)로 분류
  └─ 출력: lecture.md → 강도 매핑 표

α.4 시퀀스 초안
  ├─ 강도 매핑 + profile 기반 패턴 추천
  ├─ 단정(5) → KeyMessage / 정의(4) → Definition / 비교(4) → Comparison
  └─ 출력: 시퀀스 초안 + 출처 매핑

산출물: lectures/S{N}/spec.md § 1 (Analysis)
```

### 3-2. Gate-1: 강사 분류 + Profile 검토

강사가 *한 번에* 다음 3가지 검토:
1. 콘텐츠 분류 (이론/활동) OK?
2. profile 5개 항목 OK? (모호 항목 결정)
3. 시퀀스 초안 OK?

응답 형식:
```
"OK"  
또는  
"분류: line 117-180은 활동, density: high, 시퀀스 5번 빼고 6-7번 사이 KeyMessage 추가"
```

⚠️ **응답 받기 전 다음 단계 진입 X** (기존 룰 유지)

### 3-3. Phase β: COMPOSITION (layer-composer)

```
입력: spec.md § 1 (확정된 profile + 시퀀스)

β.1 시퀀스 + props
  ├─ 강도 매핑 보존 — KeyMessage message는 강도 5 문장 그대로
  ├─ Definition definition은 강도 4 문장
  └─ 한 줄 desc 0건 (B7 — 기존 룰 유지)

β.2 interactive 명세
  ├─ profile.interactivity_density 기반 슬라이드 선정
  ├─ profile.core_visual_kind 기반 카탈로그 우선순위
  └─ 카탈로그 다양성 ≥ 3 (단, density에 따라 가변)

β.3 visual 명세
  ├─ 슬라이드별 시각 명세 (레이아웃 + SVG/다이어그램/토글)
  └─ 신규 컴포넌트 자유 제안

β.4 wireframe (px 단위)
  ├─ 데스크톱 1280×720 — 각 영역 px 명시
  ├─ 모바일 360×800 — 변환 명시
  └─ 시각 폭 합 ≤ 1280 검증 (사전)

산출물: spec.md § 2 (Composition)
```

### 3-4. Phase γ: REVIEW (quality-judge + creative-judge 병렬)

#### quality-judge (감산)
```
입력: spec.md § 1, § 2

검증 축 (28개):
  Group A: 36개 공통 결정 (15개 검증 항목, 일부 통합)
  Group B: profile 5항목 강제 (5개)
  Group C: 흐름 호흡 (3개) ⭐ 신규
    - C1. 인지부하 곡선 (3장 연속 단정 X)
    - C2. 환기 슬라이드 분포 (5-7장에 1번 환기/예시)
    - C3. 클라이맥스 위치 (전체 60-75% 지점)
  Group D: 두께 (3개)
  Group E: design 토큰 grep (2개 — 함수 호출)

판정:
  - 각 축 PASS/WARN/FAIL
  - FAIL 1건이라도 → 회귀
  - 회귀 대상 명시: lecture-translator | layer-composer
```

#### creative-judge (가산)
```
입력: spec.md § 1, § 2, lectures/S{N-1}/spec.md (이전 세션)

평가 축 (5개):
  V1. 다양성 점수
       (사용 패턴 종류 / 18개) × 100
       임계: ≥ 50점

  V2. 강도 일치 점수
       lecture.md 강도 매핑 vs 슬라이드 패턴 강도 편차
       편차 ≤ 0.5 → 100점, > 1.0 → 0점

  V3. 세션 차별성 점수
       이전 세션과 패턴 중복률 (역수)
       중복 ≤ 60% → 100점, > 80% → 0점

  V4. 인터랙티브 깊이 점수
       단순 toggle = 1점 / 시뮬 = 5점 / SVG 애니 = 4점
       slide당 평균 ≥ 3 → 100점

  V5. wireframe 정교도 점수
       px 명시 + mobile 포함 + overflow 검증 = 100점

총점 = (V1+V2+V3+V4+V5) / 5
임계: ≥ 65점 → PASS / 50-64 → WARN / < 50 → 회귀 권고
```

**병렬 실행** — 둘 다 PASS면 Gate-2로. 한 쪽이라도 FAIL/WARN이면 강사 결정 또는 회귀.

### 3-5. Gate-2: 강사 spec 검토

강사가 *한 번에* 검토:
1. quality-judge 결과 (PASS/WARN/FAIL + 위반 항목)
2. creative-judge 점수 (5축 점수표)
3. wireframe (데스크톱 + 모바일)
4. 시퀀스 최종

응답:
```
"OK 빌드 진행"  
또는  
"V3 (세션 차별성) 점수 낮음 — 인터랙티브 카탈로그 더 다양화"
```

### 3-6. Phase δ: BUILD (섹션 분할)

```
spec.md 시퀀스를 §1, §2, §3로 분할

for §i in [§1, §2, §3]:
  lecture-translator.build(§i)
    ├─ wrapper 코드 생성
    ├─ design-checker 함수 호출 (grep)
    └─ npm run build PASS
  
  render-validator(§i)
    ├─ overflow px 검증
    ├─ 줄바꿈 시각 폭 검증
    └─ capture 무결성

  ⛳ 강사 §i 시각 검증
    ├─ OK → 다음 섹션
    └─ 결함 → §i 수정 → 재검증
```

### 3-7. Phase ε: FINAL VALIDATION

전체 빌드 완료 후 render-validator 1회 더 — 통합 빌드 PASS 확인.

산출물:
- `src/components/slides/s{N}/...` 모든 슬라이드 wrapper
- `lectures/S{N}/profile.yaml` (확정 profile)
- `lectures/S{N}/spec.md` (분석 + 구성 + 리뷰 통합)
- `history.md` 갱신 (이번 세션 결함 raw)

---

## 4. profile 시스템 전체 명세

### 4-1. profile.yaml 스키마

```yaml
# lectures/S{N}/profile.yaml
# Phase α.2에서 lecture-translator가 추론
# Gate-1에서 강사가 확정

session: S{N}
inferred_at: YYYY-MM-DDTHH:MM:SS
confirmed_at: YYYY-MM-DDTHH:MM:SS
confirmed_by: instructor

profile:
  # 5개 항목
  
  logic_structure:
    value: linear | parallel | cyclic | hierarchical
    confidence: high | medium | low
    signals: [list of evidence]
    range: false  # 카테고리 항목, range 없음
    
  core_visual_kind:
    value: diagram | comparison | simulation | data
    confidence: high | medium | low
    signals: [list]
    required_ratio: 0.5    # 슬라이드의 50% 이상이 이 종류
    forbidden_overflow: 0.3 # 다른 1개 종류 30% 이하
    
  interactivity_density:
    value: low | medium | high
    confidence: high | medium | low
    signals: [list]
    range:
      low:    { min: 3, max: 5 }
      medium: { min: 6, max: 9 }
      high:   { min: 10, max: 13 }
    
  tone_strength:
    value: soft | balanced | strong
    confidence: high | medium | low
    signals: [list]
    conditions:
      - if: lecture.md "단정" 키워드 명시
        then: 해당 슬라이드 strong 허용 (balanced에서 예외)
      - if: 활동 묶음 슬라이드
        then: soft 권장
    
  expected_slide_count:
    value: { min: int, max: int }   # 예: { min: 28, max: 34 }
    base: int
    adjustments:
      h2: +N
      assertion: +N
      density: +N
      structure: +N
    confidence: high | medium | low

decisions_required:    # Gate-1에서 강사 결정 필요한 모호 항목
  - field: ...
    candidates: [...]
    reason: ...

session_specific_decisions:    # 36개 결정에서 분리된 세션 특화
  flow:                         # B 카테고리 일부 (B1, B2, B7 등)
    deductive_only_in: [...]
    five_step_location: ...
  content:                      # C 카테고리 9개 모두
    persona_axes: [...]
    assertions:
      - "lecture.md line N 인용"
      - ...
  interactivity:                # E 카테고리 일부 (E8, E9)
    density_min: ...
    catalog_min: ...
```

### 4-2. 매트릭스 (CLAUDE.md에 들어갈 형태)

```yaml
# decision_matrix
# 36개 결정과 profile의 우선순위 정의
# 변경은 강사 명시 결정으로만

categories:
  A_content_principle:    # A1-A5
    priority: rule_first
    rationale: 프로젝트 정체성. 9세션 공통.
    items: [A1, A2, A3, A4, A5]
    
  B_flow:                 # B1-B7
    priority: mixed
    items:
      B1:                 # §1만 Deductive
        priority: profile_first
        scope: session_specific
        moves_to: profile.session_specific_decisions.flow
      B2:                 # 5단계는 §1 안
        priority: profile_first
        scope: session_specific
        moves_to: profile.session_specific_decisions.flow
      B3:                 # §1=기획 / §2=AI / §3=출처
        priority: profile_first
        scope: session_specific
        moves_to: profile.session_specific_decisions.flow
      B4:                 # 사슬 메타포
        priority: profile_first
        scope: session_specific
      B5:                 # 스토리 연결
        priority: rule_first
        rationale: 불변 원칙. 모든 세션에 적용
      B6:                 # 주장-근거 매핑
        priority: rule_first
        rationale: 불변 원칙
      B7:                 # 슬라이드 수 제한 X
        priority: profile_first
        rationale: profile.expected_slide_count로 결정
        moves_to: profile.expected_slide_count
        
  C_content_decision:     # C1-C9
    priority: weakened_to_recommendation
    rationale: S1 lecture.md에서 도출된 S1 특화 결정. 다른 세션 강제 시 왜곡.
    items: [C1, C2, C3, C4, C5, C6, C7, C8, C9]
    moves_to: profile.session_specific_decisions.content
    
  D_design:               # D1-D12
    priority: rule_first
    rationale: 시각적 일관성. 9세션 통일 필수.
    items: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12]
    exception:
      D8:                 # message 배열
        note: profile.expected_slide_count에 따라 임계값 동적 조정 가능
        
  E_interactive:          # E1-E9
    priority: mixed
    items:
      E1:                 # 실제 통합 강제
        priority: rule_first
        rationale: 구현 원칙
      E2:                 # 호버/토글만 X
        priority: profile_first
      E3:                 # Stack carousel
        priority: rule_first
      E4:                 # 단계 양방향
        priority: rule_first
      E5:                 # 시뮬 자유 진입
        priority: rule_first
      E6:                 # 단일 영역 교체
        priority: rule_first
      E7:                 # 웹 장점 활용
        priority: profile_first
      E8:                 # ≥ 20% 임계값
        priority: profile_replaces
        replaced_by: profile.interactivity_density.range
      E9:                 # 카탈로그 ≥ 3
        priority: profile_replaces
        replaced_by: profile.session_specific_decisions.interactivity.catalog_min
        
  F_pipeline:             # F1-F6
    priority: rule_first
    rationale: 워크플로우 구조. profile과 무관.
    items: [F1, F2, F3, F4, F5, F6]
    note: F1은 *13단계 → 6단계*로 변경 (재설계로)

priority_levels:
  rule_first:
    meaning: 36개 결정이 강제. profile 위반보다 36개 위반이 우선.
  profile_first:
    meaning: profile이 강제. 36개 결정은 권고로 약화.
  weakened_to_recommendation:
    meaning: 36개 결정 자체가 권고로 약화. 위반해도 fail X (WARN만).
  profile_replaces:
    meaning: 36개 결정이 profile 항목으로 *대체*됨. 36개에서 제거.
  mixed:
    meaning: 카테고리 안에서 항목별 다름 — items 참조.
```

### 4-3. range 정의 (항목별 차등, Q3 결정)

```yaml
range_definitions:
  
  # 단순 수치 범위 (C1)
  expected_slide_count:
    type: integer_range
    width: ±15%
    fail_if: count < min OR count > max
    
  interactivity_density:
    type: count_range
    fail_if: count outside range[value]
    
  # 우세 비율 (C2)  
  core_visual_kind:
    type: ratio
    required_ratio: ≥ 0.5    # value 종류가 슬라이드의 50% 이상
    forbidden_overflow: ≤ 0.3 # 다른 1개 종류가 30% 이하
    fail_if: 
      - dominant_ratio < 0.5
      - any_other_ratio > 0.3
      
  # 복합 조건 (C3)
  tone_strength:
    type: complex
    metrics:
      strong_assertion_count: { soft: [0,2], balanced: [3,5], strong: [6,99] }
      soft_recommendation_count: { soft: [6,99], balanced: [3,7], strong: [0,2] }
    conditions:
      - if: lecture.md slide_source has "단정" keyword
        then: that slide allowed strong (override balanced)
      - if: slide is in activity bundle
        then: prefer soft
    fail_if: metrics outside range[value] AND no condition override
    
  logic_structure:
    type: complex
    metrics:
      sequence_pattern: 
        linear: 다음/이전 슬라이드 인과 ≥ 80%
        parallel: 좌우 동시 등장 슬라이드 ≥ 30%
        cyclic: 첫-끝 연결 슬라이드 존재
        hierarchical: 트리 구조 슬라이드 ≥ 20%
    fail_if: pattern_match[value] < threshold
```

### 4-4. fall-back 정책 (Q1 결정 — 양쪽 후보 제시)

```
추론 신뢰도 평가:
  high: 단일 분류 점수 ≥ 5, 2위 점수 ≤ 2
  medium: 단일 분류 점수 ≥ 3, 2위와 차이 ≥ 2
  low: 차이 < 2 OR 동률
  
low 또는 동률 시 → fall-back C 발동:
  - 후보 2-3개 제시
  - 각 후보의 신호 + 영향 명시
  - Gate-1에서 강사 결정
  - 강사 결정 전 Phase β 진입 차단
```

### 4-5. 후속 fail 시 대응 (Q3-H 결정 — range 완화)

```
시나리오: profile 확정 후 Phase β/γ에서 "이 profile로는 만들 수 없다" fail

대응:
  1. range 안에서 자동 조정 시도
     예: density: high (10-13) 강제했는데 lecture.md가 7개 인터랙티브만 가능
     → high의 하한 10이 강사 결정한 값이라면, 시도 9, 8 순으로 완화
     → 9 가능하면 PASS + 강사 보고
     
  2. range 하한도 깨지면 강사 결정 게이트
     → "density: high 못 만족, medium으로 낮출지?"
     
  3. 강사 거부 시 lecture.md 보강 권고
     → "lecture.md에 비교 사례 추가 필요"
```


---

## 5. 가산형 평가 시스템 (creative-judge 핵심)

진단 리포트 처방 2의 직접 구현. 여기가 *기존 시스템에 없던 완전 신규 영역*입니다.

### 5-1. 5개 가산 평가 축 상세

#### 축 V1: 다양성 점수 (Diversity)

```
계산:
  used_pattern_kinds = spec.md에서 사용된 18개 패턴 중 종류 수
  diversity_score = (used_pattern_kinds / 18) × 100

임계:
  ≥ 50  PASS  (9개 종류 이상)
  35-49 WARN  (6-8개 종류)
  < 35  FAIL  (5개 이하 — "고정 패턴" 신호)

영향:
  FAIL 시 → layer-composer 회귀 권고
  "더 다양한 패턴 사용 필요. 미사용 패턴 X종류 검토"
  
보호 장치:
  profile.core_visual_kind 우세 비율 ≥ 0.5와 충돌 X
  comparison 우세 + 9개 종류 = 가능 (50% comparison + 50% 다양화)
```

#### 축 V2: 강도 일치 점수 (Strength Match)

```
계산:
  for each slide:
    lecture_strength = lecture-translator의 강도 매핑 (1~5)
    slide_strength = 패턴별 표준 강도 (KeyMessage=5, Definition=4, ThreeCards=3, Comparison=4, Outro=2 등)
    deviation = |lecture_strength - slide_strength|
  
  avg_deviation = sum(deviation) / slide_count
  
  if avg_deviation ≤ 0.5: 100점
  elif ≤ 1.0: 70점
  elif ≤ 1.5: 40점
  else: 0점

임계:
  ≥ 70  PASS
  40-69 WARN
  < 40  FAIL → "lecture.md 강도와 슬라이드 패턴 강도가 어긋남"

영향:
  FAIL의 의미:
    - 약한 부연을 KeyMessage로 강제 매핑한 경우
    - 강한 단정을 ThreeCards로 분산한 경우
  → lecture-translator 회귀 (강도 매핑 재검토)
```

#### 축 V3: 세션 차별성 점수 (Session Differentiation)

```
계산:
  prev_session_patterns = lectures/S{N-1}/spec.md의 패턴 사용 빈도
  current_patterns = 이번 세션 패턴 사용 빈도
  
  pattern_overlap = sum(min(prev[p], curr[p]) for p in all_patterns) / sum(curr[p] for p in all_patterns)
  
  if pattern_overlap ≤ 0.4: 100점
  elif ≤ 0.6: 70점
  elif ≤ 0.8: 40점
  else: 0점

  추가 항목:
    - 인터랙티브 종류 중복률 ≤ 0.4 → +10점
    - 슬라이드 수 차이 ≥ 20% → +10점
    
  최대 100점 + 20점 = 120점 (정규화)

임계:
  ≥ 70  PASS
  50-69 WARN ("이전 세션과 비슷함")
  < 50  FAIL → "세션 차별성 부족"

영향:
  FAIL 시 → layer-composer 회귀
  "이전 세션과 다른 패턴/카탈로그 시도 권고"
  
이게 처방 2-C (세션 차별성)의 직접 구현
핵심 문제 2 "고정 패턴" 해결의 직접 경로
```

#### 축 V4: 인터랙티브 깊이 점수 (Interactive Depth)

```
카탈로그별 가중치:
  단순 click-toggle:        1점
  hover-expand:              2점
  step-reveal (StepFrameRevealer류):  3점
  custom 시뮬 (PRDComposer류):        5점
  SVG 애니메이션 (ChainDiagram류):    4점
  실시간 피드백 (검증 시뮬):           5점
  
계산:
  total_weight = sum(weight[type] for each interactive)
  interactive_count = profile.interactivity_density.range[value].min ~ max
  avg_depth = total_weight / interactive_count
  
  if avg_depth ≥ 3.5: 100점
  elif ≥ 2.5: 70점
  elif ≥ 1.5: 40점
  else: 0점

임계:
  ≥ 70  PASS
  40-69 WARN
  < 40  FAIL → "인터랙티브가 단순함만 사용"

영향:
  FAIL 시 → layer-composer 회귀
  "단순 toggle 비율 줄이고 시뮬·애니 추가"
  
처방 2 보강 — 인터랙티브 종류뿐 아니라 *깊이*도 평가
문제 1 (인터랙티브 3-5개 고정) 해결 보완
```

#### 축 V5: wireframe 정교도 점수 (Wireframe Precision)

```
체크리스트:
  + 데스크톱 wireframe 작성 (40점)
  + 각 영역 px 명시 (20점)
  + 모바일 wireframe 작성 (20점)
  + 모바일 변환 명시 (10점)
  + overflow 사전 검증 (1280px 합) (10점)

총 100점

임계:
  ≥ 80  PASS
  60-79 WARN
  < 60  FAIL

영향:
  FAIL 시 → layer-composer 회귀
  
처방 6 (wireframe 픽셀 단위) 직접 구현
문제 8 (디자인 화면 넘침) 해결의 사전 차단
```

### 5-2. 종합 점수와 판정

```
total_score = (V1 + V2 + V3 + V4 + V5) / 5

전체 판정:
  ≥ 75  EXCELLENT (강사 보고에 표시)
  65-74 PASS
  50-64 WARN (강사 결정 — 진행/회귀)
  < 50  FAIL (회귀 권고)

개별 축 FAIL 1개라도 있으면:
  - total_score 무관하게 강사에 명시 보고
  - 회귀 여부는 강사 결정
```

### 5-3. creative-judge 산출물 형식

```markdown
# Creative Review (creative-judge)

세션: S2
검토일: 2026-05-XX

## 5축 점수표

| 축 | 점수 | 판정 | 근거 요약 |
|---|---|---|---|
| V1. 다양성 | 67 | PASS | 12/18 패턴 종류 사용 |
| V2. 강도 일치 | 78 | PASS | 평균 편차 0.3 |
| V3. 세션 차별성 | 82 | PASS | S1 패턴 중복 35%, density 다름 |
| V4. 인터랙티브 깊이 | 56 | WARN | 평균 깊이 2.1 (단순 toggle 비율 높음) |
| V5. wireframe 정교도 | 90 | PASS | px + mobile + overflow 모두 명시 |

총점: 74.6 / 100 → PASS

## WARN/FAIL 항목 상세

### V4 WARN
- 9개 인터랙티브 중 click-toggle 4개 (44%)
- 시뮬·애니 비율 33%
- 권고: toggle 1-2개를 step-reveal 또는 시뮬로 격상
- 회귀 여부: 강사 결정

## 이번 세션의 강점
- 세션 차별성 강함 — S1과 명확히 다른 형태
- 강도 일치 좋음 — lecture.md 본질이 슬라이드에 반영

## 다음 단계
- 강사 결정 → V4 WARN 회귀 또는 진행
```

---

## 6. 흐름 호흡(pacing) 검증 시스템

진단 리포트 핵심 문제 1 직접 해결. 기존에 없던 완전 신규 영역.

### 6-1. 호흡 정의

흐름 호흡 = "강사가 슬라이드를 발표할 때 학습자가 자연스럽게 따라올 수 있는 리듬"

3가지 축으로 분해:

#### 축 P1: 인지부하 곡선 (Cognitive Load Curve)

```
규칙: 3장 연속 단정(KeyMessage) X — 학습자 피로
규칙: 5장 연속 활동/실습 X — 이론 환기 필요
규칙: 추상 개념 직후 ≥ 1장 구체 예시 동반

검출:
  for i in range(slide_count - 2):
    if all(slides[i:i+3].pattern == "KeyMessage"):
      WARN → "3장 연속 단정"
    if all(slides[i:i+3].kind == "abstract") and not any(slides[i:i+3].kind == "example"):
      FAIL → "추상 3장 연속, 예시 부재"
```

#### 축 P2: 환기 슬라이드 분포 (Refresh Distribution)

```
규칙: 5-7장에 1번 환기 슬라이드 (예시·시각 임팩트·인터랙티브)
규칙: 환기 부재 구간이 8장 이상이면 FAIL

검출:
  refresh_indices = [i for i, s in enumerate(slides) 
                     if s.kind in ["example", "visual_impact", "interactive"]]
  for i in range(len(refresh_indices) - 1):
    gap = refresh_indices[i+1] - refresh_indices[i]
    if gap > 8:
      FAIL → f"환기 부재 구간: 슬라이드 {refresh_indices[i]} ~ {refresh_indices[i+1]}"
```

#### 축 P3: 클라이맥스 위치 (Climax Position)

```
규칙: 가장 강한 단정(C5/C6/C7급)은 전체 60-75% 지점
규칙: Outro 직전에 약화 슬라이드 (요약/Recap) 1-2장

검출:
  strongest = max(slides, key=lambda s: s.strength)
  position_pct = strongest.index / slide_count
  if position_pct < 0.6 or position_pct > 0.75:
    WARN → "클라이맥스 위치 비표준"
  if not any(slides[-3:-1].kind == "summary"):
    WARN → "Outro 직전 요약 부재"
```

### 6-2. 호흡 검증 결과 형식

```markdown
# Flow Pacing Review (quality-judge.flow_module)

## P1. 인지부하 곡선
- 결과: PASS
- 검출: 3장 연속 단정 0건, 추상 연속 부재 0건

## P2. 환기 슬라이드 분포
- 결과: WARN
- 환기 위치: [4, 9, 18, 27]
- 부재 구간: 슬라이드 9 → 18 (9장 간격)
- 권고: 슬라이드 13-14 사이에 예시 또는 인터랙티브 추가

## P3. 클라이맥스 위치
- 결과: PASS
- 가장 강한 단정: 슬라이드 #22 (전체 73%)
- Outro 직전: #29 Recap 존재 ✓

종합: WARN — P2 1건, 회귀 여부 강사 결정
```

### 6-3. 호흡 검증의 lecture-translator 입력화

호흡은 *시퀀스 작성 시점*부터 의식해야 효율적입니다. lecture-translator Phase α.4에서 시퀀스 초안 작성 시 호흡 룰을 *사전 적용*:

```
α.4 시퀀스 초안 작성 시:
  - 단정 슬라이드 생성 후 즉시 근거 슬라이드 (B6 — 기존 룰)
  - 추상 슬라이드 후 구체 슬라이드 (P1)
  - 5-7장 간격으로 환기 슬라이드 배치 (P2)
  - 클라이맥스를 60-75% 지점에 배치 (P3)

→ quality-judge에서 사후 검증보다 사전 적용이 효율
→ 사후 검증은 보험
```

---

## 7. history.md 시스템 재설계

진단 리포트 처방 3 적용. 차단 시스템 → 참고 시스템.

### 7-1. 새 history.md 구조

```yaml
# history.md (새 구조)

# Section 1: Active Rules (활성 차단 룰)
active_rules:
  - id: rule_2026_05_001
    category: 특수문자/emoji
    description: "§ ⚠️ ✓ ✕ 학생 화면 노출 0건"
    triggered_by: "S1~S3 누적 17건"
    activated_at: 2026-05-09
    expires_at: 2026-08-09  # ⭐ 만료 기간
    applies_when:
      - all_sessions: true   # 모든 세션 적용
    severity: fail

  - id: rule_2026_05_002
    category: 톤 강제
    description: "정설 톤 차단 → 권장 톤"
    triggered_by: "S2-S3 누적 3건"
    activated_at: 2026-05-09
    expires_at: 2026-08-09
    applies_when:
      - profile.tone_strength: [soft, balanced]   # ⭐ profile 조건
    exempt_when:
      - profile.tone_strength: strong
      - lecture.md keyword: "단정"
    severity: warn   # ⭐ fail이 아니라 warn

# Section 2: Expired Rules (만료된 룰 보관)
expired_rules:
  - id: rule_2026_03_001
    expired_at: 2026-05-01
    expiration_reason: "3세션 후 자동 만료"
    re_activation: false   # 만료 후 재발 X

# Section 3: Defect Raw Log (결함 기록)
defects:
  - timestamp: 2026-05-09T14:23:00
    session: S2
    slide_number: 5
    pattern: KeyMessage
    category: 라인 분할
    severity: minor
    instructor_note: "것이<br>다 → 것이다"
    resolution: message 배열 분리
    rule_triggered: false   # ⭐ 1회 발생만으로 룰 추가 X

  # ... raw 기록 누적

# Section 4: Pattern Analysis (반복 패턴 분석)
pattern_counts:
  특수문자/emoji:
    s1_count: 10
    s2_count: 4
    s3_count: 3
    cumulative: 17
    rule_triggered: true   # 3회 이상으로 룰 추가됨
    rule_id: rule_2026_05_001
    
  톤 강제:
    s1_count: 0
    s2_count: 1
    s3_count: 2
    cumulative: 3
    rule_triggered: true
    rule_id: rule_2026_05_002

# Section 5: Session-specific Rules (세션 특화 룰)
session_specific:
  S1:
    rules: [c1_persona, c5_first_assertion, ...]   # 36개에서 분리된 것
  S2:
    rules: [...]
```

### 7-2. 새 history.md 작동 룰

```
1. 결함 발생 시:
   - defects 섹션에 raw 기록 (기존 동일)
   - pattern_counts 자동 갱신
   - 단일 발생: rule_triggered=false

2. pattern_counts 누적:
   - 3회 이상 누적 시 active_rule 추가
   - expires_at = activated_at + 90일 (3세션 추정)
   - severity = warn (1차) → fail (재발 시 격상)

3. 만료 처리:
   - 매 세션 시작 시 expires_at 검사
   - 만료된 룰 → expired_rules로 이동
   - 만료 후 같은 카테고리 재발 시 → 재활성화 (warn → fail)

4. profile 조건 적용:
   - applies_when으로 세션 차등
   - exempt_when으로 예외 명시
   - 모든 룰이 무차별 적용되지 않음

5. severity 차등:
   - fail: 빌드 차단
   - warn: 경고만, 강사 결정
   - minor: 기록만
```

### 7-3. 결함 처리 플로우 변경

```
[기존]
결함 발생 → 카테고리화 → 3회 이상 → 시스템 강화 → 모든 세션 강제

[신규]
결함 발생 → raw 기록 → pattern 갱신
  3회 이상 누적 → 룰 후보 생성
    profile 조건 분석 → applies_when/exempt_when 자동 도출
    severity 평가 → warn 또는 fail
    expires_at 90일 설정
    → 강사 승인 게이트 ⭐ 신규
  강사 승인 시 → active_rules 추가
  강사 거부 시 → 룰 추가 X (단순 기록만 유지)
```

→ 진단 리포트의 핵심 우려 ("결함 → 정설 변환")가 *강사 승인 게이트*로 차단됩니다.

---

## 8. 새 CLAUDE.md (전체 초안)

기존 CLAUDE.md (455 lines)를 새 시스템에 맞춰 재구성. 다음은 핵심 섹션의 변경된 부분 초안입니다.

### 8-1. 새 CLAUDE.md 목차

```
1. 프로젝트 정체성 (기존 유지, 일부 갱신)
2. 절대 원칙 (기존 6개 → 4개로 통합)
3. 기술 스택 (기존 유지)
4. 폴더 구조 (lectures/S{N}/ 아래 profile.yaml 추가)
5. 핵심 워크플로우 (Phase 1-9 → Phase α-ε, 13단계 → 6단계)
6. 강사 누적 결정 — 31개 공통 (이전 36개에서 분리) ⭐
7. Decision Matrix (신규) ⭐
8. Sub-agents (8개 → 5개 + utility)
9. profile 시스템 안내 (신규) ⭐
10. 작업 시작 전 체크리스트
11. 진척 기록 + history.md (룰 재설계)
12. 메타 메시지
```

### 8-2. § 강사 누적 결정 — 31개 공통 (변경 핵심)

```markdown
## 🧠 강사 누적 결정 — 31개 공통 SSOT

> 9세션 공통 적용. 세션 특화 결정은 lectures/S{N}/profile.yaml로 분리.
> Decision Matrix § 7 참조.

### A. 콘텐츠 원칙 (5개, 변경 없음)
- A1. lecture.md ≠ 학생 본문
- A2. 강사 자료 자동 수정 절대 금지
- A3. lecture.md 본문 충실 인용
- A4. 메타 메시지
- A5. 출처 표기 학생 화면 노출 X

### B. 흐름 원칙 (5개로 축소)
- B5. 스토리 연결 ⭐ 불변
- B6. 주장 → 근거 매핑 ⭐ 불변
- B7. 슬라이드 수 제한 X — profile.expected_slide_count로 동적 결정 ⭐ 변경

(B1, B2, B3, B4 → S1 profile.session_specific_decisions로 이동)

### C. 콘텐츠 결정 (제거 — 모두 세션 특화)

⚠️ 변경: C1-C9는 S1 lecture.md 도출 결정. 세션별 분리.
- profile.session_specific_decisions.content로 이동

### D. UI / 디자인 (12개, 변경 없음)
- D1 ~ D12 (기존 유지, D8만 profile에 따라 임계값 동적 조정)

### E. 인터랙티브 (5개로 축소)
- E1. 인터랙티브 실제 통합 강제 ⭐ 불변
- E3. Stack carousel
- E4. 단계 양방향 이동
- E5. 시뮬레이션 자유 진입
- E6. 단일 영역 교체

(E2, E7 → profile.session_specific_decisions.interactivity)
(E8, E9 → profile.interactivity_density로 대체)

### F. 파이프라인 (5개로 변경)
- F1. **6단계 파이프라인** (Phase α → Gate-1 → β → γ → Gate-2 → δ → ε) ⭐ 변경
- F2. quality-judge = 감산 통합 + profile 강제
- F3. creative-judge = 가산 평가 ⭐ 신규
- F4. design 검증 = 함수형 (agent 아닌 utility)
- F5. 사전 + 사후 검증 (render-validator가 빌드 후)
- F6. 섹션 분할 빌드 (§1 → §2 → §3)

> **이 섹션은 9세션 공통 SSOT.** 변경은 강사 명시 결정으로만.
> 세션별 분리된 결정은 lectures/S{N}/profile.yaml § session_specific_decisions.
```

### 8-3. § Decision Matrix (신규 섹션)

```markdown
## 🗺️ Decision Matrix

> 31개 공통 결정과 profile의 우선순위를 정의.
> 충돌 시 본 매트릭스가 SSOT.

### 우선순위 레벨

- **rule_first**: 31개 결정이 절대 우선. profile은 그 안에서 작동.
- **profile_first**: profile이 우선. 31개 결정 중 충돌 항목은 권고로 약화.
- **profile_replaces**: 31개 결정이 profile 항목으로 *대체*됨. 31개에서 제거됨.

### 카테고리별 적용

| 카테고리 | 우선순위 | 사유 |
|---|---|---|
| A. 콘텐츠 원칙 | rule_first | 프로젝트 정체성 |
| B5, B6 | rule_first | 불변 흐름 원칙 |
| B7 | profile_replaces | profile.expected_slide_count로 결정 |
| C 카테고리 | (제거됨) | 세션별 분리 |
| D 카테고리 | rule_first | 시각적 일관성 |
| E1, E3-E6 | rule_first | 구현 원칙 |
| E2, E7 | profile_first | 세션 성격 따라 |
| E8, E9 | profile_replaces | profile.interactivity_density로 |
| F 카테고리 | rule_first | 워크플로우 구조 |

### 새 결정 추가 시

새 결정이 추가될 때마다 이 매트릭스에 분류 명시 의무.

분류 가이드:
1. 9세션 공통인가 → A/D/F → rule_first
2. 세션 성격 따라 다른가 → profile_first
3. profile 항목으로 표현 가능한가 → profile_replaces
4. 1세션 특화인가 → 31개에 추가 X, profile.session_specific_decisions로
```

### 8-4. § 핵심 워크플로우 (변경)

```markdown
## 🚀 핵심 워크플로우 — 6단계 파이프라인

### Phase α: ANALYSIS (lecture-translator)
- α.1 구조 분석 (헤딩 + 평문 + 표 + 인용)
- α.2 profile 추론 (5항목, 양쪽 후보 fall-back)
- α.3 강도 매핑 (lecture.md 문장별 강도 1-5)
- α.4 시퀀스 초안 (호흡 룰 사전 적용)

### ⛳ Gate-1: 강사 분류 + Profile 검토
- 분류 / profile 모호 항목 / 시퀀스 초안 한 번에

### Phase β: COMPOSITION (layer-composer)
- β.1 시퀀스 + props (강도 매핑 보존)
- β.2 interactive 명세 (profile.density 강제)
- β.3 visual 명세 (profile.visual_kind 강제)
- β.4 wireframe (px 단위, mobile 포함)

### Phase γ: REVIEW (병렬)
- quality-judge (감산 통합 28축)
- creative-judge (가산 평가 5축) ⭐

### ⛳ Gate-2: 강사 spec 검토
- 감산 PASS + 가산 점수 + wireframe

### Phase δ: BUILD (섹션 분할)
- §1 → render-validator → 강사 §1 검증
- §2 → render-validator → 강사 §2 검증
- §3 → render-validator → 강사 §3 검증

### Phase ε: FINAL VALIDATION
- render-validator 통합 검증
- history.md 갱신
```

### 8-5. § profile 시스템 안내 (신규)

```markdown
## 🔬 Profile 시스템

### 개념
세션 특성(논리 구조, 시각 종류, 인터랙티브 밀도, 톤, 슬라이드 수)을 입력 변수로 받아
모든 후속 단계가 *동적으로 분기*하는 시스템.

### 5개 항목
1. logic_structure: linear | parallel | cyclic | hierarchical
2. core_visual_kind: diagram | comparison | simulation | data
3. interactivity_density: low | medium | high
4. tone_strength: soft | balanced | strong
5. expected_slide_count: { min, max }

### 추론 → 강사 승인 → 강제 적용
1. lecture-translator가 lecture.md 분석 후 profile.yaml 자동 추론
2. Gate-1에서 강사 검토 (모호 항목 결정)
3. Phase β 이후 모든 agent가 profile 강제 준수

### 위반 시
- range 안에서 자동 조정
- range 하한 깨지면 강사 결정 게이트
- 강사 거부 시 lecture.md 보강 권고

### 세션 차별성
- profile은 세션마다 독립 추론 (이전 세션 영향 X)
- 차별성은 creative-judge V3 축에서 검증
```

---

## 9. 마이그레이션 계획

### 9-1. S1-S3 처리 (소급 X)

```
S1: 완료 — 그대로 유지. profile.yaml 사후 작성 (기록용)
S2: 완료 — 그대로 유지. profile.yaml 사후 작성
S3: 완료 — 그대로 유지. profile.yaml 사후 작성

→ 새 시스템 적용 X. history.md의 결함 raw만 보존.
```

### 9-2. S4부터 적용

```
1주차:
  - 새 CLAUDE.md 적용
  - history.md 새 구조로 마이그레이션 (기존 raw 보존)
  - decision matrix 작성

2주차:
  - lecture-translator 신규 작성
  - 기존 slide-curator는 "deprecated" 표시 후 보관

3-4주차:
  - layer-composer, quality-judge, creative-judge, render-validator 작성
  - 기존 8개 agent 모두 deprecated 처리
  - utility (design-checker, capture-checker) 함수화

5주차:
  - S4 lecture.md를 새 시스템으로 큐레이션
  - 결함 분석 → 시스템 fine-tuning

S4 결함 ≤ 5건 목표 (기존 평균 22건 대비 78% 감소)
```

### 9-3. 작업 분량 추정

| 작업 | 추정 시간 | 우선순위 |
|---|---|---|
| 새 CLAUDE.md 작성 | 4시간 | P0 |
| Decision Matrix 작성 | 3시간 | P0 |
| profile.yaml 스키마 + S1 회고적 작성 | 4시간 | P0 |
| history.md 마이그레이션 | 3시간 | P0 |
| lecture-translator 명세 작성 | 8시간 | P0 |
| layer-composer 명세 | 6시간 | P1 |
| quality-judge 명세 | 8시간 | P1 |
| creative-judge 명세 | 6시간 | P1 |
| render-validator 명세 | 4시간 | P1 |
| design-checker, capture-checker 함수 | 4시간 | P2 |

총 약 50시간 (1.5주 풀타임 또는 3주 파트타임)

### 9-4. 위험과 대응

| 위험 | 대응 |
|---|---|
| 새 시스템에서도 결함 발생 | S4 큐레이션 후 결함 분석 → 룰 추가 (기존 메커니즘) |
| profile 추론 정확도 낮음 | Gate-1에서 강사 결정 보완. 운영하며 추론 규칙 fine-tuning |
| creative-judge 점수가 너무 낮게 나옴 | 임계값 조정. S4 첫 결과 보고 재설정 |
| 강사 학습 곡선 | 새 워크플로우 1-page summary 제공. Gate-1, Gate-2 응답 양식 표준화 |

---

## 10. 변화 요약 (1페이지)

### Before
- 8개 agent, 13단계 파이프라인, 검증 축 66개 (모두 감산형)
- 36개 결정 = 9세션 공통 강제
- history.md 차단 룰 무한 누적
- session 특성 무관 균일 처리
- S2 결함 30건, S3 결함 22건

### After (목표)
- 5개 agent + utility, 6단계 파이프라인
- 감산 28축 + **가산 5축** (다양성/강도일치/세션차별성/인터랙티브깊이/wireframe정교도)
- 31개 공통 + 세션별 분리 (Decision Matrix로 우선순위 명시)
- history.md 만료 + profile 차등 적용
- profile 5항목으로 세션마다 동적 분기
- S4 결함 ≤ 5건 목표

### 8개 문제 vs 처방 매핑

| 문제 | 처방 |
|---|---|
| 1. 인터랙티브 3-5개 고정 | profile.interactivity_density + creative-judge V1, V4 |
| 2. 줄바꿈 이상 | render-validator 시각 폭 검증 |
| 3. 콘텐츠 누락 | lecture-translator 강도 매핑 + B7 profile.expected_slide_count |
| 4. 정답 단정 | C5/C6/C7 권고로 약화 (Decision Matrix) |
| 5. 세션 균일 | profile 5항목 강제 + creative-judge V3 |
| 6. 슬라이드 두께 부족 | A3 + lecture-translator 강도 매핑 (강도 보존) |
| 7. 특수문자 남용 | CLAUDE.md/agent .md 자체에서 § ↳ ⛳ — 제거 (즉시 가능) |
| 8. 화면 넘침 | layer-composer wireframe px + render-validator overflow |
| 핵심 1. 흐름 안 맞음 | quality-judge 흐름 호흡 3축 (P1, P2, P3) |
| 핵심 2. 고정 패턴/장수 | 가산 5축 + profile + decision matrix 종합 |

---

## 11. 다음 작업 우선순위

이 보고서가 *아키텍처 + CLAUDE.md*까지입니다. 다음 작업은 5개 신규 agent의 세부 명세 작성입니다.

추천 순서:
1. **lecture-translator** (8시간) — 핵심. 모든 후속 agent의 입력을 만듦
2. **quality-judge** (8시간) — 감산 통합 검증
3. **creative-judge** (6시간) — 가산 평가 신설
4. **layer-composer** (6시간) — interactive + visual 통합
5. **render-validator** (4시간) — 빌드 후 검증

P0 단계 (새 CLAUDE.md + Decision Matrix + lecture-translator + history.md)만 먼저 완료해도 시스템 골격이 작동합니다.

---

**[새 시스템 아키텍처 + CLAUDE.md 보고서 끝]**

세부 agent 명세 작성으로 넘어갈 준비가 되시면 말씀해주세요.
