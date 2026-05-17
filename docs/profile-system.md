# Profile System SSOT (v2)

> `CLAUDE.md § 9` 상세. v2: 자동 도출(3항목) / 추론(2항목) 분리.

---

## 1. 5개 항목 개요

| 항목 | 분류 | 값 |
|---|---|---|
| `logic_structure` | **자동 도출** | linear / parallel / cyclic / hierarchical |
| `core_visual_kind` | **자동 도출** | diagram / comparison / simulation / data |
| `interactivity_density` | 추론 | low / medium / high |
| `tone_strength` | 추론 | soft / balanced / strong |
| `expected_slide_count` | **자동 도출** (실측) | { min, max } |

---

## 2. 자동 도출 항목 (lecture.md 파싱 결과)

### 2.1 logic_structure

`###` 챕터 순서 + `####` 묶음 패턴 분석.

```python
def derive_logic_structure(lecture_tree):
    chapters = lecture_tree.theory.chapters
    
    # 챕터 제목 키워드
    sequential = count_keywords(["1단계", "다음으로", "사슬", "흐름", "→"], chapters)
    parallel = count_keywords(["두 축", "vs", "반면", "동시에", "함께"], chapters)
    cyclic = count_keywords(["사이클", "한 바퀴", "반복", "다시"], chapters)
    hierarchical = count_keywords(["상위", "하위", "포함", "범주", "유형 N개"], chapters)
    
    # 8타입 분포 보조 신호
    process_count = count_type("process", all_slides)
    comparison_count = count_type("comparison", all_slides)
    
    sequential += process_count * 0.5
    parallel += comparison_count * 0.5
    
    return max(scores)
```

### 2.2 core_visual_kind

8타입 분포 기반.

```python
def derive_visual_kind(all_slides):
    type_counts = Counter(s.type for s in all_slides)
    
    # 8타입 → visual_kind 매핑
    diagram_score = type_counts.get("process", 0) + type_counts.get("title", 0) * 0.3
    comparison_score = type_counts.get("comparison", 0) * 2
    simulation_score = type_counts.get("activity", 0) * 1.5 + type_counts.get("example", 0) * 0.5
    data_score = 0  # 표 3열+ 안의 수치 신호 (보조)
    
    return max(scores)
```

#### 신호 강도 기준 (D-021)
- `signal_dominance`: 우세 종류 점수 / 전체 합 ≥ 0.6 권장 (< 0.4 fail, 0.4-0.6 WARN)
- `minimum_presence`: 우세 종류 슬라이드 ≥ 1 (없으면 FAIL)
- 절대 비율 강제 X

### 2.3 expected_slide_count

자동 매핑 후 **실측값** (예측 X).

```python
def derive_count(all_slides):
    return len(all_slides)

# range: ±5% (실측이므로 변동 폭 작음)
```

---

## 3. 추론 항목 (신호 카운트)

### 3.1 interactivity_density

```python
def infer_density(all_slides, lecture_md):
    # 8타입 기본 인터랙티브 카운트
    base_count = count_non_static(all_slides)
    
    # 강사 명시 추가
    instructor_hints = count_keywords(["@interactive", "@animation"], lecture_md)
    
    total = base_count + instructor_hints * 1.5
    
    if total <= 5: return "low"
    if total <= 9: return "medium"
    return "high"
```

### 3.2 tone_strength

| 신호 | 가중치 |
|---|---|
| "절대/필수/사용 불가/X 금지/반드시" ≥ 5회 | strong +3 |
| "단정/원칙" + 단언 어미 ≥ 5회 | strong +2 |
| "권장/경험상/보통/대체로" ≥ 5회 | soft +2 |
| 비교형/조건형 ("~수도 있다") ≥ 5회 | soft +1 |

판정:
- strong ≥ 5 + soft ≤ 2 → strong
- soft ≥ 5 + strong ≤ 2 → soft
- 둘 다 ≥ 3 → balanced
- 그 외 → low confidence (fall-back)

조건부 (tone.conditions):
- lecture.md "단정" 키워드 슬라이드 → strong 허용
- 활동 묶음 → soft 권장

---

## 4. 신뢰도 평가

```python
def confidence(scores):
    winner = max(scores)
    runner_up = second_max(scores)
    
    if winner >= 5 and runner_up <= 2:
        return "high"
    if winner >= 3 and (winner - runner_up) >= 2:
        return "medium"
    return "low"  # fall-back
```

**v2 차이**: 자동 도출 항목은 추론 X → 신뢰도 high 기본. fall-back은 추론 항목만.

---

## 5. Fall-back (추론 항목만)

```yaml
interactivity_density:
  value: AMBIGUOUS
  candidates:
    - value: medium
      score: 6
      consequence: "인터랙티브 6-9건"
    - value: high
      score: 7
      consequence: "10-13건"
  reason: "후보 카운트 경계"
  requires_decision: true
```

Gate-1에서 강사 결정.

---

## 6. profile.yaml 스키마

```yaml
session: S{N}
status: draft | confirmed
inferred_at: ISO8601
confirmed_at: ISO8601                # confirmed 시
confirmed_by: instructor

profile:
  logic_structure:
    value: linear | parallel | cyclic | hierarchical
    confidence: high                  # 자동 도출이라 보통 high
    derivation_source: lecture_tree_analysis
    signals: [list]
    score: { linear: N, parallel: N, ... }
  
  core_visual_kind:
    value: diagram | comparison | simulation | data
    confidence: high
    derivation_source: type_distribution
    signals: [list]
    score: { diagram: N, comparison: N, simulation: N, data: N }
    # 검증 임계값 (자동 적용, profile.yaml 직접 입력 X)
    # signal_dominance: 0.6
    # minimum_presence: 1
  
  interactivity_density:              # 추론
    value: low | medium | high
    confidence: high | medium | low
    signals: [list]
    range:
      low:    { min: 3, max: 5 }
      medium: { min: 6, max: 9 }
      high:   { min: 10, max: 13 }
  
  tone_strength:                       # 추론
    value: soft | balanced | strong
    confidence: high | medium | low
    signals: [list]
    conditions:
      - if: lecture.md "단정" keyword
        then: strong 허용
      - if: 활동 묶음
        then: soft 권장
  
  expected_slide_count:                # 실측
    value: { min: int, max: int }
    actual: int                        # 자동 매핑 결과
    confidence: high

decisions_required:                    # Gate-1 강사 결정
  - field: ...
    candidates: [...]
    reason: ...

session_specific_decisions:            # 32개에서 분리된 세션 특화
  flow:
    deductive_only_in: [...]
  content:
    persona_axes: [...]
    assertions:
      - "lecture.md line N 인용"
  interactivity:
    density_min: ...
    catalog_min: 4
```

---

## 7. 세션 차별성

profile은 세션마다 *독립 도출*. 이전 세션 영향 X.

차별성은 **creative-judge V3** 별도 검증:
- 이전 세션 패턴 중복률 ≤ 60% 권장
- 인터랙티브 종류 중복률 ≤ 40%
- 슬라이드 수 차이 ≥ 20% 권장

---

## 8. v1 → v2 변경 요약

| 항목 | v1 | v2 |
|---|---|---|
| logic_structure | 추론 | 자동 도출 (`###` + 8타입 분포) |
| core_visual_kind | 추론 | 자동 도출 (8타입 분포) |
| expected_slide_count | 공식 추론 | 실측 (자동 매핑 후 count) |
| interactivity_density | 추론 | 추론 유지 (후보 카운트) |
| tone_strength | 추론 | 추론 유지 (신호 카운트) |
| fall-back 발동 | 5항목 가능 | 추론 2항목만 |
| 신뢰도 분포 | 다양 | 자동 도출 high 기본 |

---

## 9. 참조 관계
- **CLAUDE.md § 9** → 본 문서 요약
- **lecture-translator.md** α.4 → 본 문서 SSOT 따름
- **quality-judge.md** Group B → 본 문서 임계값 적용
- **creative-judge.md** V3 → 본 문서 profile_distance 정의

---

**[docs/profile-system.md v2 끝]**
