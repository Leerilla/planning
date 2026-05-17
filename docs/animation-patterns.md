# Animation Patterns SSOT (v2)

> 인터랙티브 + 애니메이션 패턴 카탈로그. layer-composer β'.2 / creative-judge V4 / render-validator 참조.
> v2 핵심: **8타입 기본 인터랙티브 매핑 + 강사 명시 우선**.

---

## 1. 6대 카탈로그

| 카탈로그 | 정의 | 예시 |
|---|---|---|
| **animation** | 진입/전환/시선 유도 | fadeUp, slide-in, scale-in |
| **visual_dynamics** | 시각 요소 동적 변화 | step-reveal, weak-ring pulse, gauge fill |
| **simulation** | 상태 변화 시뮬레이션 | PersonaBuilder, PRDComposer, FalsePatternValidator |
| **svg_illust** | SVG 일러스트레이션 + 애니메이션 | ChainDiagram, ValidationCycle |
| **feedback** | 사용자 입력 → 즉각 반응 | hover-expand, click-toggle, 응답률 게이지 |
| **multi_state** | 다중 상태 전환 | tab, carousel, toggle |

---

## 2. 기본 패턴 카탈로그 (V4 가중치) ⭐ V4 점수 SSOT

> 모든 V4 점수 참조의 단일 진실 (`creative-judge.md § 7`, `layer-composer.md § 5`, `docs/animation-patterns.md § 5` 모두 본 표 미러).

| 패턴 | 카탈로그 | V4 점수 |
|---|---|---|
| static (의도된 정적, raw) | - | 1 |
| static (concept default — 의도된 여백 보너스) | - | 2 |
| click-toggle | multi_state | 2 |
| hover-expand | feedback | 2 |
| scale-in (entrance, title 등) | animation | 2 |
| fade-in + action | animation | 3 |
| step-reveal (StepFrameRevealer류) | multi_state + visual_dynamics | 3 |
| scenario reveal (example 기본) | visual_dynamics | 3 |
| 강조 pulse (highlight) | feedback + animation | 3 |
| **scale-in + highlight pulse (concept key-message — 강도 5 보너스)** | animation + feedback | 4 |
| **scale-in + 강조 pulse (quote — 강도 5 보너스)** | animation + feedback | 4 |
| 좌우 slide-in + toggle (comparison 기본) | animation + multi_state | 4 |
| CSS animation (fadeUp/slide) | animation | 4 |
| SVG animation (ChainDiagram) | svg_illust + visual_dynamics | 4 |
| Custom React 시뮬 (PRDComposer) | simulation + feedback | 5 ⭐ |

**해석 룰**:
- `static` raw = 1, `concept default static` = 2 (의도된 여백 보너스 +1)
- `scale-in entrance` raw = 2 (title 등), 강도 5 슬라이드(concept key-message / quote)와 결합 시 = 4
- 단일 패턴 점수와 결합 패턴 점수가 다를 수 있음 — 표 행을 그대로 적용

---

## 3. V4 (creative-judge) 가중치 평균

```python
def v4_score(interactive_items):
    if not items:
        return 0
    avg_depth = sum(WEIGHT[item.type] for item in items) / len(items)
    
    if avg_depth >= 3.5: return 100
    if avg_depth >= 2.5: return 70
    if avg_depth >= 1.5: return 40
    return 0
```

**v2 변화**: 8타입 기본 인터랙티브가 강제이므로 평균 ≥ 2.5 PASS 가능. 강사 명시(`@interactive`)로 깊이 추가.

---

## 4. 카탈로그 다양성

- 사용 카탈로그 ≥ `profile.session_specific.catalog_min` (3-5)
- click-toggle 단독 X — 다른 ≥ 2 필수

세션당 Custom React 시뮬은 1-3개 권장 (학습자 피로 방지).

---

## 5. 8타입 기본 인터랙티브 SSOT ⭐ v2 핵심

각 8타입에 자동 fallback. 강사 `<!-- @interactive: ... -->` 명시 시 그대로 적용 (우선).

> V4 점수는 § 2 SSOT를 그대로 사용. 점수 불일치 발견 시 § 2 갱신 후 본 표 미러.

| 8타입 + emphasis | 기본 인터랙티브 | 카탈로그 | V4 점수 |
|---|---|---|---|
| `title` | scale-in entrance | animation | 2 |
| `concept` (key-message) | scale-in + highlight pulse | animation + feedback | 4 |
| `concept` (definition) | notes step-reveal | visual_dynamics + multi_state | 3 |
| `concept` (outro) | fade-in + action buttons | animation + feedback | 3 |
| `concept` (default) | static (의도된 여백) | - | 2 |
| `comparison` | 좌우 slide-in + 컬럼 toggle | animation + multi_state | 4 |
| `process` ⭐ | step-reveal (단계별 등장) | multi_state + visual_dynamics | 3 |
| `example` | scenario → 단계별 reveal | visual_dynamics + animation | 3 |
| `quote` | scale-in + 강조 pulse | animation + feedback | 4 |
| `activity` | 체크리스트 toggle + step reveal | multi_state + visual_dynamics | 3 |
| `terms` | hover-expand (용어별) | feedback | 2 |

### 강사 명시 우선

```markdown
<!-- @interactive: persona-builder -->
<!-- @animation: chain-diagram-with-weak-ring -->
```

→ `simulation + svg_illust` 카탈로그. V4 점수 4-5.

### 자동 fallback 작동
1. lecture-translator α.2에서 8타입 결정
2. layer-composer β'.2에서 강사 명시 확인
3. 명시 없으면 위 표 자동 적용

---

## 6. 신규 컴포넌트 명세 (강사 명시 시)

```yaml
new_component:
  name: PersonaBuilder
  location: src/components/animations/PersonaBuilder.jsx
  trigger: "<!-- @animation: persona-builder -->"
  purpose: "5축 페르소나 단계 등장"
  catalog: simulation + svg_illust
  V4_score: 5
  props: { axes: [...], auto_advance_ms: 2000 }
  state: { revealed_index: number }
  timing: { entry_ms: 200, between_axes_ms: 800 }
  accessibility: { keyboard: 'Space/R', aria_label, reduced_motion }
  status: PROPOSED → IMPLEMENTED
```

---

## 7. 트랜지션 표준

| 종류 | 시간 | easing |
|---|---|---|
| 슬라이드 전환 | 300ms | var(--easing) |
| 인터랙티브 진입 | 200ms | ease-out |
| Hover | 150ms | ease |
| 강조 pulse | 600ms | infinite alternate |

---

## 8. 접근성 표준

모든 인터랙티브:
- 키보드 조작: Space/Enter/R (재실행)
- aria-label 명시
- reduced-motion 감지 → 애니메이션 즉시 종료

---

## 9. 참조 관계
- **layer-composer.md** β'.2 → 본 문서 § 5 자동 fallback
- **creative-judge.md** V4 → 본 문서 § 2-3 가중치
- **render-validator.md** → 본 문서 § 7-8 트랜지션/접근성
- **docs/slide-types.md** § 5 → 8타입 + emphasis 정의

---

## 10. v1 → v2 변경 요약

| 항목 | v1 | v2 |
|---|---|---|
| 인터랙티브 결정 | layer-composer β.2 후보 식별 + 선정 | 8타입 결정 시 자동 fallback + 강사 `@interactive` 우선 |
| V4 점수 표 | creative-judge 내부 | § 2 SSOT (다른 곳은 미러) |
| 8타입 매핑 | X (18 패턴별) | § 5 신규 (8타입 × emphasis 11행) |
| 카탈로그 다양성 | profile.session_specific | 동일 + click-toggle 단독 X 강제 |
| 접근성 | 권장 | 표준 (Space/Enter/R + aria + reduced-motion) |

---

**[docs/animation-patterns.md v2 끝]**
