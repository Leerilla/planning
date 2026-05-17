# Wireframe Guide SSOT (v2)

> wireframe 작성 표준. layer-composer β'.4 / creative-judge V5 / render-validator ε'.2 참조.
> v2 핵심: 8타입 슬롯 기반 + 필수/권장 분리 (D-022).

---

## 1. 캔버스 표준

- **데스크톱**: 1280 × 720 (16:9)
- **모바일**: 360 × 800 (9:20)

### 1.1 작성 범위 (D-022)

**필수 작성** (데스크톱 + 모바일 의무):
- `quote` (강도 5)
- `comparison` (좌우 분할)
- `concept` (emphasis: key-message)
- 신규 컴포넌트 사용 슬라이드 (`@animation` 명시)
- 인터랙티브 핵심 슬라이드

**권장 작성** (강제 X):
- `title` (메타)
- `concept` (default / definition / outro)
- `process` / `example` / `terms` (단순한 경우)
- `activity`

**변경 사유**: 모든 슬라이드 wireframe은 작업 비대화. 핵심만 정밀 wireframe해도 빌드 결함 충분히 차단.

### 1.2 V5 점수 계산

```python
required_avg = mean(score(wf) for wf in required_slides) if required_slides else 0
recommended_avg = mean(score(wf) for wf in recommended_slides) if recommended_slides else 0

V5 = required_avg * 0.8 + recommended_avg * 0.2

# 예외
# 필수 0 + 권장 0 → V5 = 0 (FAIL)
# 필수 0 + 권장 ≥ 1 → V5 = recommended_avg × 0.5 (WARN)
# 필수 ≥ 1 + 권장 0 → V5 = required_avg × 0.8
```

임계: ≥ 80 PASS / 60-79 WARN / < 60 FAIL → β'.4 회귀.

---

## 2. 8타입 슬롯별 wireframe 표준

### 2.1 TitleSlide (1280×720)

```
┌──────────────────────────────────────┐
│                                       │
│  ┌──────────────┐                    │
│  │ accent (24px)│                    │
│  └──────────────┘                    │
│                                       │
│  Chapter Number (64px)                │
│  Title (96px, weight 700)            │
│                                       │
│  Subtitle (32px)                      │
│                                       │
└──────────────────────────────────────┘
```

영역: chapter_number(160×80) / title(1120×96) / subtitle(1120×40) / objectives(있다면 1120×120).

### 2.2 ConceptSlide (1280×720)

#### emphasis: key-message
```
┌──────────────────────────────────────┐
│  ┌─ eyebrow (24px) ─┐                │
│  └──────────────────┘                 │
│                                       │
│  message line 1 (96px)               │
│  message line 2 (96px)               │
│  highlights 강조                      │
│                                       │
│  ──── intentional whitespace ────    │
└──────────────────────────────────────┘
```

#### emphasis: definition
```
┌──────────────────────────────────────┐
│  term (48px, weight 600)             │
│  ━━━━━━━━━━━━━━━━━━━                │
│                                       │
│  definition line 1 (28px)            │
│  definition line 2 (28px)            │
│                                       │
│  notes:                              │
│  • note 1                             │
│  • note 2                             │
└──────────────────────────────────────┘
```

### 2.3 ComparisonSlide (1280×720)

```
┌──────────────────────────────────────┐
│  title (40px)                        │
│  ─────────────────────────────       │
│                                       │
│  ┌──── 50% ────┐ ┌──── 50% ────┐    │
│  │  label (28) │ │  label (28) │    │
│  │  content    │ │  content    │    │
│  │  • item 1   │ │  • item 1   │    │
│  │  • item 2   │ │  • item 2   │    │
│  └─────────────┘ └─────────────┘    │
│                                       │
│  summary (선택)                       │
└──────────────────────────────────────┘
```

영역: title(1120×56) / left_col(540×400) / right_col(540×400) / gap(32) / summary(1120×40).

### 2.4 ProcessSlide (1280×720)

```
┌──────────────────────────────────────┐
│  title (40px)                        │
│                                       │
│  ① label1     ② label2     ③ label3 │
│  desc1        desc2        desc3     │
│         →           →                 │
└──────────────────────────────────────┘
```

영역: title(1120×56) / steps_container(1120×400) / step(N×280) / arrows(N-1×40).

### 2.5 QuoteSlide (1280×720)

```
┌──────────────────────────────────────┐
│                                       │
│       "                                │
│       quote (64px, weight 500)        │
│       line 1                          │
│       line 2                          │
│       "                                │
│                                       │
│       context (28px)                  │
│                                       │
└──────────────────────────────────────┘
```

영역: quote(800×200, 중앙) / context(800×120, 중앙 하단) / attribution(있다면 800×40).

---

## 3. 모바일 변환 규칙

| 데스크톱 | 모바일 변환 |
|---|---|
| 50:50 좌우 분할 | stacked (상하) |
| 80px padding | 24px padding |
| 96px 폰트 | 48px |
| 64px 폰트 | 36px |
| 40px 폰트 | 24px |
| gap-8 (32px) | gap-4 (16px) |

---

## 4. wireframe 형식

```yaml
wireframe:
  - slide_id: s4-1-1-1
    type: comparison
    category: required             # required | recommended
    desktop:
      canvas: { width: 1280, height: 720 }
      regions:
        - name: title
          position: { x: 80, y: 80 }
          size: { width: 1120, height: 56 }
          content: "PRD vs CLAUDE.md"
          font: { size: 40, weight: 600, line_height: 1.2 }
          visual_width_check: { total: 14, threshold: 30, result: OK }
        - name: left_col
          position: { x: 80, y: 200 }
          size: { width: 540, height: 400 }
          ...
      total_width_check: { sum: 1280, target: 1280, result: OK }
      total_height_check: { sum: 720, result: OK }
    mobile:
      canvas: { width: 360, height: 800 }
      regions: [...]
      transformation_notes: ["50:50 → stacked", "padding 80 → 24"]
```

---

## 5. E6 인터랙티브 영역 비율

인터랙티브 컴포넌트 영역 ≤ 70%. 초과 시 WARN.

```python
interactive_ratio = interactive_area / total_area
if interactive_ratio > 0.7:
    WARN("E6 위반 — 인터랙티브 영역 과대")
```

---

## 6. overflow 사전 검증

데스크톱:
- 시각 폭 합 ≤ 1280 (좌우)
- 영역 총 높이 ≤ 720 (상하)

모바일:
- 시각 폭 합 ≤ 360
- 스크롤 허용 (높이 제한 X, 대신 viewport 800 기준 검증)

---

## 7. 의도된 여백

key-message slide 등은 의도된 큰 여백 가능. `intentional_whitespace` 영역으로 명시.

```yaml
- name: intentional_whitespace
  position: { x: 80, y: 600 }
  size: { width: 1120, height: 40 }
```

---

## 8. 신규 컴포넌트 wireframe

강사 명시(`@animation`) 시 신규 컴포넌트 wireframe 필수.

```yaml
- slide_id: s4-1-3-1
  type: process
  emphasis: persona-builder    # @animation 명시
  category: required           # 신규 컴포넌트 = 필수
  custom_component:
    name: PersonaBuilder
    catalog: simulation + svg_illust
  desktop:
    regions:
      - name: builder_canvas
        position: { x: 80, y: 100 }
        size: { width: 1120, height: 520 }
        states:
          initial: "5 empty axes"
          axis_1_revealed: "직군 표시"
          ...
```

---

## 9. creative-judge V5 (점수)

```
슬라이드별 체크리스트 (0-100):
  + 데스크톱 wireframe 작성 (40)
  + 각 영역 px 명시 (20)
  + 모바일 wireframe 작성 (20)
  + 모바일 변환 노트 (10)
  + 1280 합 검증 OK (10)

V5 = required_avg × 0.8 + recommended_avg × 0.2

분류 (§ 1.1):
- 필수: quote / comparison / concept(key-message) / 신규 컴포넌트 / 인터랙티브 핵심
- 권장: title / concept(default/definition/outro) / process / example / terms / activity
```

---

## 10. 참조 관계
- **layer-composer.md** β'.4 → 본 문서 § 4 형식 + § 5 E6
- **creative-judge.md** V5 → 본 문서 § 9 점수
- **render-validator.md** ε'.2 → 본 문서 § 6 overflow
- **docs/slide-types.md** § 4 → 슬롯 명세 SSOT (본 문서는 wireframe 표준)

---

## 11. v1 → v2 변경 요약

| 항목 | v1 | v2 |
|---|---|---|
| 작성 범위 | 모든 슬라이드 강제 | 필수/권장 분리 (D-022) |
| 8타입 슬롯 | 18 패턴별 wireframe | 8타입별 표준 wireframe |
| V5 점수 | 단일 평균 | required × 0.8 + recommended × 0.2 |
| 신규 컴포넌트 | 강사 명시 시만 wireframe | 신규 컴포넌트 = 필수 카테고리 |

---

**[docs/wireframe-guide.md v2 끝]**
