# Slide Patterns SSOT (v2)

> 18 패턴 의도를 8타입 컴포넌트 슬롯에 매핑. layer-composer β'.1 / render-validator ε'.3 / creative-judge V2 참조.
> v2 핵심: 8타입 컴포넌트가 메인 SSOT, 18 패턴은 *콘텐츠 의도* 단위로 보존.

---

## 1. 8타입 컴포넌트 ↔ 18 패턴 매핑

| 8타입 컴포넌트 | 18 패턴 의도 (보존) | emphasis prop |
|---|---|---|
| `<TitleSlide>` | Cover, SessionMeta, Objectives, SectionDivider, ActivityCover | meta_kind |
| `<ConceptSlide>` | KeyMessage, Definition, Outro | emphasis (key-message/definition/outro/default) |
| `<ComparisonSlide>` | Comparison | columns_count |
| `<ProcessSlide>` | StepGuide, StepTitle, StepDetail | granularity (overview/title/detail) |
| `<ExampleSlide>` | ThreeCards(사례형), CaptureSlide | scenario_kind |
| `<QuoteSlide>` | Warning(인용 단정), KeyMessage(>인용형) | quote_kind |
| `<ActivitySlide>` | ActivityCover, Checklist | meta_kind (cover/check) |
| `<TermsSlide>` | Definition(용어형), Terms | - |

상세 슬롯 명세: `docs/slide-types.md § 4`.

---

## 2. 시각 폭 임계값 (D12 기준)

`docs/slide-types.md § 4` 슬롯별 임계값 SSOT.

| 8타입 + emphasis | prop | 데스크톱 폭 | 모바일 폭 |
|---|---|---|---|
| title | title | 30 | 20 |
| title | subtitle | 50 | 35 |
| concept (key-message) | message[i] | 24 | 18 |
| concept (definition) | term | 40 | 30 |
| concept (definition) | notes[i] | 80 | 60 |
| concept (outro) | message[i] | 30 | 22 |
| concept (default) | title | 40 | 30 |
| concept (default) | message[i] | 50 | 38 |
| comparison | column.content[i] | 60 | 45 |
| process | step.label | 30 | 22 |
| process | step.desc | 70 | 50 |
| example | scenario | 80 | 60 |
| example | conclusion | 60 | 45 |
| quote | quote | 80 | 60 |
| quote | context[i] | 60 | 45 |
| activity | goal | 60 | 45 |
| activity | procedure[i] | 70 | 50 |
| terms | term | 25 | 18 |
| terms | definition | 60 | 45 |

시각 폭 계산: `한글 × 1.0 + 영문대 × 0.7 + 영문소 × 0.55 + 숫자 × 0.55 + 공백 × 0.3 + 특수 × 0.3`.

---

## 3. 8타입 컴포넌트 props 시그니처

### 3.1 TitleSlide
```yaml
slots:
  meta_kind: cover | session | objectives | divider | activity_cover
  chapter_number: string         # "1️⃣" 또는 "§ 1"
  title: string                  # ≤ 30자
  subtitle: string               # ≤ 50자
  objectives: [string]           # 선택
  meta: { date, duration, deck }
  accent_color: string           # cluster-1/2/3/4 토큰
```

### 3.2 ConceptSlide
```yaml
slots:
  emphasis: key-message | definition | outro | default
  title: string                  # ≤ 40자 (default)
  message: [string]              # D8 배열 (key-message/outro)
  term: string                   # ≤ 40자 (definition)
  definition: [string]           # ≤ 80자 (definition)
  notes: [string]                # 부연 (definition)
  highlights: [string]           # 강조 단어
  aside: string                  # ::: aside 블록
```

### 3.3 ComparisonSlide
```yaml
slots:
  title: string
  columns:                       # 2-3 컬럼
    - label: string
      content: [string]          # ≤ 60자/행
      emphasis: null | success | warning | danger
  summary: string
  toggleable: bool               # 좌우 toggle
```

### 3.4 ProcessSlide
```yaml
slots:
  granularity: overview | title | detail
  title: string
  steps:                         # 3-6 단계
    - num: int
      label: string              # ≤ 30
      desc: string               # ≤ 70
      weak_ring: bool
  summary: string
  aside: string
```

### 3.5 ExampleSlide
```yaml
slots:
  scenario_kind: cards | capture | story
  title: string
  scenario: string               # ≤ 80자
  steps: [{ num, content }]      # 또는 cards: [{...}]
  conclusion: string             # ≤ 60자
  capture_refs: [string]         # scenario_kind=capture
```

### 3.6 QuoteSlide
```yaml
slots:
  quote_kind: assertion | warning | reference
  quote: string                  # ≤ 80자, 큰 폰트
  context: [string]              # ≤ 60자/행
  attribution: string            # 선택 출처
```

### 3.7 ActivitySlide
```yaml
slots:
  meta_kind: cover | check
  activity_number: int
  title: string
  goal: string                   # ≤ 60자
  procedure: [string]            # ≤ 70자/행
  checklist: [{ id, text }]
  duration: string
  deliverable: string
  capture_refs: [string]
```

### 3.8 TermsSlide
```yaml
slots:
  title: string
  terms:                         # ≥ 3개
    - term: string               # ≤ 25자
      definition: string         # ≤ 60자
```

---

## 4. SectionDivider 처리 (emoji 헤딩)

lecture.md의 `## 1️⃣ ...` → TitleSlide(meta_kind=divider):
- `number` prop: 1 (emoji 제거, D11)
- `accent_color`: cluster-1/2/3/4 (시각 변별)
- 학생 화면에 emoji 노출 X, 색상으로 섹션 구분

---

## 5. 8타입 강도 매핑 (creative V2 입력)

| 8타입 + emphasis | 표준 강도 |
|---|---|
| title (all) | 메타 |
| concept (key-message) | 5 |
| concept (definition) | 4 |
| concept (outro) | 2 |
| concept (default) | 3 |
| comparison | 4 |
| process | 2 |
| example | 3 |
| quote | 5 |
| activity (all) | 메타 |
| terms | 1 |

---

## 6. 강도별 콘텐츠 두께 (Group D.2)

| 강도 | 두께 기준 |
|---|---|
| 5 | KeyMessage/Quote — 의도된 여백 OK, footer/subtext 동시 X |
| 4 | Definition.notes ≥ 2 / Comparison.column.content ≥ 2 |
| 3 | Concept(default) — title + message ≥ 2줄 |
| 2 | Process step.desc ≥ 1 / Outro message + next |
| 1 | Terms — term + definition 매칭 |

---

## 7. 18 패턴 의도 → 8타입 props 매핑 (v1 호환 참고)

| v1 패턴 | v2 컴포넌트 | props 매핑 |
|---|---|---|
| Cover | TitleSlide(meta_kind=cover) | sessionNumber→chapter_number, title, subtitle |
| SessionMeta | TitleSlide(meta_kind=session) | duration, objectives, deliverables, tools |
| Objectives | TitleSlide(meta_kind=objectives) | items→objectives |
| SectionDivider | TitleSlide(meta_kind=divider) | number, label→title, accent_color |
| ActivityCover | TitleSlide(meta_kind=activity_cover) 또는 ActivitySlide(meta_kind=cover) | activity_number, title, goal |
| KeyMessage | ConceptSlide(emphasis=key-message) | message, highlights, footer |
| Definition | ConceptSlide(emphasis=definition) 또는 TermsSlide | term, definition, notes |
| Outro | ConceptSlide(emphasis=outro) | message, summary, next, actionButtons |
| Comparison | ComparisonSlide | bad/good→columns, toggleable |
| ThreeCards | ExampleSlide(scenario_kind=cards) 또는 ComparisonSlide | cards→columns 또는 cards |
| Warning | QuoteSlide(quote_kind=warning) | problem→quote, description→context, avoidance, personaContext |
| StepGuide | ProcessSlide(granularity=overview) | steps |
| StepTitle | ProcessSlide(granularity=title) | stepNumber, title, estimatedTime |
| StepDetail | ProcessSlide(granularity=detail) | stepNumber, title, description, hints |
| Checklist | ActivitySlide(meta_kind=check) | items→checklist, showProgress |
| CaptureSlide | ExampleSlide(scenario_kind=capture) | step, src→capture_refs, caption, highlight |
| ToolIntro | ExampleSlide | toolName→title, oneLiner→scenario, strengths→cards |
| CodeBlock | (인라인 또는 ExampleSlide의 cards 안) | language, code, osVariants |

### CodeBlock OS dual code

```yaml
osVariants:
  macos: { language: "bash", code: string }
  windows: { language: "powershell", code: string }
  default: macos
  ui: tab | toggle
```

---

## 7.5 패턴 적합성 매트릭스 (D-040, 2026-05-11 신설)

> layer-composer β'.1 패턴 선택 시 본 매트릭스 강제. 부적합 매핑 시 WARN/FAIL.
> 위반 사례: T2.2 #11 5 Whys → StepGuide (sequential vs 평면 미스매치).

### 7.5.1 패턴별 사용 조건

| 패턴 | 적합 콘텐츠 | 부적합 콘텐츠 | 임계값 |
|---|---|---|---|
| **StepGuide** | 평면 step (병렬), 짧은 label | sequential 인과 흐름, 긴 문장 | label ≤ 15자, desc ≤ 40자, 3-5개 |
| **ProcessSlide** ⭐ | sequential 인과 흐름 (5 Whys 등), weak ring 강조 | 평면 비교 | label ≤ 25자, 3-6단계 |
| **Comparison** | 좌우 대조 (A vs B) — 명시적 대비 | 단계별 진행 | content[i] ≤ 60자, 2-3 컬럼 |
| **Definition** | 정의 + 부연 (term + def + notes) | 사례 흐름 | def ≤ 80자, notes[i] ≤ 80자 |
| **KeyMessage** | 단정 + 근거 (강조 인용) | 비교/대조 | message[i] ≤ 24자, examples 1-3 |
| **Warning** | 안티/주의 + 회피 | 단순 사례 | title ≤ 25자, 1-2 인스턴스 (좌우/세로) |
| **ThreeCards** | 3가지 평면 병렬 | 인과 흐름 | desc ≤ 60자, 정확히 3개 |
| **Cover** | 표지 (메타) | 콘텐츠 슬라이드 | title ≤ 40자 |

### 7.5.2 의미 흐름 키워드 → 패턴 매핑

| lecture.md 키워드 | 권장 패턴 |
|---|---|
| "vs" / "안티 vs 올바름" / "❌ ✅" | Comparison / Warning(좌우 2인스턴스) |
| "왜? 왜? 왜?" / "↓" / "사슬" / 5 Whys | **ProcessSlide** 또는 세로 inline JSX (StepGuide X) |
| "단계 1, 2, 3" (평면) | StepGuide |
| "정의" / "term은 ~이다" | Definition |
| "사례:" / "예시:" / "시나리오:" | Example (Warning/ThreeCards 적용) |
| `>` 인용 + 단정 | KeyMessage / Quote |
| 3개 병렬 (3가지/3축) | ThreeCards |
| 표 2열 (용어/설명) | Terms |

### 7.5.3 적합성 위반 시

- layer-composer β'.1: 적합성 미달 시 다른 패턴 또는 inline JSX 사용
- quality-judge A.16: 패턴 적합성 검증 (PASS/WARN/FAIL)
- 위반 사례 history.md 기록 → 누적 시 룰 후보

---

## 8. 참조 관계
- **layer-composer.md** β'.1 → 본 문서 § 3 props
- **render-validator.md** ε'.3 → 본 문서 § 2 시각 폭 임계값
- **creative-judge.md** V2 → 본 문서 § 5 강도 매핑
- **design-checker.js** E.5 → 본 문서 § 3 prop name SSOT
- **docs/slide-types.md** → 본 문서와 쌍 (컴포넌트 정의 vs props 시그니처)

---

## 9. v1 → v2 변경 요약

| 항목 | v1 | v2 |
|---|---|---|
| 메인 SSOT | 18 패턴 .jsx 컴포넌트 | 8 타입 .jsx + emphasis prop |
| 18 패턴 보존 | 컴포넌트 단위 | 의도 단위로 8 타입 안에 흡수 (§ 1, § 7) |
| 시각 폭 임계값 | 18 패턴별 | 8 타입 + emphasis 결합 (§ 2) |
| 강도 매핑 | 18 패턴 표 | 8 타입 + emphasis 표 (§ 5) |
| props 시그니처 | 18 종 | 8 종 (§ 3) |

---

**[docs/slide-patterns.md v2 끝]**
