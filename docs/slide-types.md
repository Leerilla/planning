# Slide Types SSOT (v2)

> 8타입 컴포넌트 + 18패턴 의도 매핑. layer-composer/render-validator/creative-judge가 참조.
> v2 핵심: 자동 매핑 우선순위 8단계 + 8타입 슬롯 + 18패턴 의도 보존.

---

## 1. 슬라이드 단위 식별

`####` 헤더 또는 `####` 안 `---` 수평선.

```markdown
#### 기획의 정의       ← 슬라이드 1
본문...
---                     ← 슬라이드 2
본문...
#### 좋은 vs 나쁜       ← 슬라이드 3 (새 묶음)
```

`###`, `##`, `#`은 슬라이드 경계 X. 챕터 표지(title)는 `###` 정보 자동 사용.

---

## 2. 자동 매핑 — 우선순위 (D-033/D-034 갱신)

**원칙**: 명시적 의도(키워드·구조)가 콘텐츠 패턴을 이김.

### 2.1 자동 생성 슬라이드 (우선)

| 우선순위 | 조건 | 타입 | 패턴 | D-NNN |
|---|---|---|---|---|
| **0a** | `#` 헤더 | `title` (세션 표지) | Cover | D-032 |
| **0b** | `## 이론` 직속 | `title` (이론 목차) | Objectives | D-032 |
| **0c** | `## 실습` 직속 | `title` (실습 목차) | Objectives | D-032 |
| **0d** | `###` 헤더 | `title` (섹션 표지) | Cover | D-033 |

### 2.2 `####` 세부 콘텐츠 매핑 (8단계 우선순위)

`####` 세부 콘텐츠 슬라이드만 본 룰 적용 (위 자동 생성은 별도).

| 우선순위 | 조건 | 타입 |
|---|---|---|
| 1 | `## 실습` 하위 `####` | `activity` |
| 2 | 첫 단락 "사례:" / "예시:" / "시나리오:" | `example` |
| 3 | `>` 블록 첫 콘텐츠 | `quote` |
| 4 | 표 2열 (용어 \| 설명) | `terms` |
| 5 | 표 3열 이상 | `comparison` |
| 6 | 번호 리스트 ≥ 3 항목 | `process` |
| 7 | 위 어디에도 X | `concept` (기본) |

### 우선순위 적용 예시

`5 Whys` 슬라이드 — 사례 키워드 + 번호 리스트 5개 → **`example`** (3이 7을 이김).

### 매핑 어긋날 때

자동 매핑이 의도와 다르면 **콘텐츠 수정** (frontmatter 추가 X):

| 문제 | 해결 |
|---|---|
| 개념인데 `comparison`으로 잡힘 | 표 제거 또는 본문 늘림 |
| 사례인데 `concept`으로 잡힘 | "사례:" 또는 "예시:" 명시 |
| 단계인데 `concept`으로 잡힘 | 번호 리스트 3개 이상 |
| 단정인데 `concept`으로 잡힘 | `>` 인용 블록 |

### 예외 — frontmatter 오버라이드

```markdown
#### 특수 슬라이드
<!-- slide-type: quote -->
```
**전체 5% 미만** 권장.

---

## 3. 8타입 컴포넌트 ↔ 18패턴 의도 매핑

v1 18패턴은 의도 단위로 **8타입 안에 흡수**됨. 시각 강조는 props로 표현.

| 8타입 | 컴포넌트 | 18패턴 의도 |
|---|---|---|
| `title` | `<TitleSlide>` | Cover, SessionMeta, Objectives, SectionDivider, ActivityCover |
| `concept` | `<ConceptSlide>` | KeyMessage, Definition, Outro |
| `comparison` | `<ComparisonSlide>` | Comparison |
| `process` | `<ProcessSlide>` | StepGuide, StepTitle, StepDetail |
| `example` | `<ExampleSlide>` | ThreeCards(사례형), CaptureSlide |
| `quote` | `<QuoteSlide>` | Warning(인용 단정), KeyMessage(>인용형) |
| `activity` | `<ActivitySlide>` | ActivityCover, Checklist |
| `terms` | `<TermsSlide>` | Definition(용어형), Terms |

### concept 의도 차별화 (v2 핵심)

`concept` 컴포넌트 안에서 v1의 KeyMessage/Definition/Outro 의도를 `emphasis` prop으로 표현:

```jsx
<ConceptSlide
  emphasis="key-message"      // 큰 단정 (KeyMessage)
  // 또는
  emphasis="definition"       // 정의 + notes
  // 또는
  emphasis="outro"            // 마무리 + next
  title="..."
  message="..."
  notes={[...]}
/>
```

---

## 4. 컴포넌트 슬롯 명세

### 4.1 TitleSlide
```yaml
slots:
  chapter_number: string         # "1️⃣" / "§ 1"
  title: string                  # ≤ 30자
  subtitle: string               # ≤ 50자
  objectives: [string]           # 학습 목표 (선택)
  meta: { date, duration, deck }
```
**시각 폭**: title ≤ 30 / subtitle ≤ 50.

### 4.2 ConceptSlide
```yaml
slots:
  emphasis: "key-message" | "definition" | "outro" | "default"
  title: string                  # ≤ 40자
  message: [string]              # 배열 (D8)
  notes: [string]                # 부연 (Definition 의도)
  highlights: [string]
  aside: string                  # ::: aside 블록
```
**시각 폭**:
- emphasis=key-message: message[i] ≤ 24
- emphasis=definition: notes[i] ≤ 80
- 기타: title ≤ 40 / message[i] ≤ 50

### 4.3 ComparisonSlide
```yaml
slots:
  title: string
  columns:                       # 2-3 컬럼
    - label: string
      content: [string]
      emphasis: null | success | warning | danger
  summary: string                # 선택
```
**임계**: column.content[i] ≤ 60자.

### 4.4 ProcessSlide
```yaml
slots:
  title: string
  steps:                         # 3-6 단계
    - num: int
      label: string              # ≤ 30
      desc: string               # ≤ 70
      weak_ring: bool            # 약한 고리 강조
  summary: string
  aside: string
```

### 4.5 ExampleSlide
```yaml
slots:
  title: string
  scenario: string               # 시나리오 도입
  steps: [{ num, content }]      # 단계별 적용
  conclusion: string             # 결론
```

### 4.6 QuoteSlide
```yaml
slots:
  quote: string                  # 인용문 (큰 폰트)
  context: [string]              # 맥락 설명 배열
  attribution: string            # 선택 (출처)
```

### 4.7 ActivitySlide
```yaml
slots:
  activity_number: int
  title: string
  goal: string
  procedure: [string]
  checklist: [{ id, text }]
  duration: string
  deliverable: string
  capture_refs: [string]         # CaptureSlide 통합
```

### 4.8 TermsSlide
```yaml
slots:
  title: string
  terms:                         # 용어 표 (≥ 3)
    - term: string
      definition: string
```

---

## 5. 8타입 ↔ 강도 매핑 (creative V2 입력)

| 8타입 | emphasis | 표준 강도 |
|---|---|---|
| title | - | 메타 |
| concept | key-message | 5 |
| concept | definition | 4 |
| concept | outro | 2 |
| concept | default | 3 |
| comparison | - | 4 |
| process | - | 2 |
| example | - | 3 |
| quote | - | 5 |
| activity | - | 메타 |
| terms | - | 1 |

---

## 6. `::: aside` 블록 처리

- 자습 모드 전용 (라이브 모드 숨김)
- 슬라이드당 1개
- 컴포넌트에서 토글로 펼쳐짐
- 자동 매핑 영향 X (본문 분석에서 제외)

---

## 7. 자동 생성 슬라이드 (D-032, D-033 갱신)

### 7.1 세션 표지 (`#` 헤더 trigger)
- 슬라이드 1번 자동 생성
- Cover 패턴: `title` = `#` 텍스트 / `subtitle` = 자료 첫 단락 한 줄 요약 (lecture.md line 3-5 등)

### 7.2 덱 목차 (`## 이론` / `## 실습` 직속 trigger)
- 각 덱 시작 직후 자동 생성
- Objectives 패턴: `eyebrow` = "이론 구성" / "실습 구성" / `items` = 하위 `###` 제목 목록 (emoji 제거)

### 7.3 섹션 표지 (`###` 헤더 trigger) ⭐
- 각 `###` 시작 시 자동 생성 (모든 `###`에 적용)
- Cover 패턴: `title` = `###` 텍스트 (emoji 제거) / `objectives` = `###` 직후 학습목표 bullet list (있으면)

```markdown
### 1️⃣ 기획이란 무엇인가      ← Cover 슬라이드 (title="기획이란 무엇인가")

이 챕터를 학습한 뒤 다음을 할 수 있다.    ← Cover의 학습목표 도입 (별도 슬라이드 X)
- 좋은 기획과 나쁜 기획...                ← Cover.objectives[0]
- ...                                      ← Cover.objectives[1, 2]

#### 기획의 정의              ← 첫 #### 콘텐츠 (concept 매핑)
```
→ 슬라이드 1: Cover (1️⃣ 섹션 표지 + objectives) / 슬라이드 2~: `#### 기획의 정의` 콘텐츠.

---

## 8. 빌드 시점 검증

| 검증 | 위반 시 |
|---|---|
| `#` 1개 | ❌ |
| `##` 이론/실습 2개 | ❌ |
| 모든 `###` 하위에 `####` 또는 본문 | ❌ |
| 어떤 `####`도 ≤ 5장 | ⚠️ |
| 각 슬라이드 타입 결정 | ❌ |
| `::: aside` ≤ 1/슬라이드 | ⚠️ |

---

## 9. 참조 관계
- **lecture-translator.md** α.2 → 본 문서 § 2 우선순위 SSOT
- **layer-composer.md** β'.1 → 본 문서 § 4 슬롯 명세
- **render-validator.md** → 본 문서 § 4 임계값 검증
- **creative-judge.md** V2 → 본 문서 § 5 강도 매핑
- **docs/lecture-format.md** → 본 문서와 쌍 (입력 ↔ 출력)
- **docs/animation-patterns.md** → 8타입 기본 인터랙티브

---

## 10. v1 → v2 변경 요약

> **v2 신규 SSOT** — v1에는 본 문서 없음 (slide-patterns.md 18패턴이 SSOT였음).

| 항목 | v1 | v2 |
|---|---|---|
| 슬라이드 단위 결정 | layer-composer 추론 | 작성자 (`####` + `---`) |
| 컴포넌트 | 18 패턴별 .jsx | 8 타입 .jsx + emphasis prop |
| 강도 매핑 | 18 패턴별 표 | 8 타입 + emphasis 결합 (§ 5) |
| 자동 매핑 우선순위 | X | § 2 8단계 신규 |
| concept emphasis | KeyMessage/Definition/Outro 별도 컴포넌트 | ConceptSlide 안 emphasis prop |

---

**[docs/slide-types.md 끝]**
