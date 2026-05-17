# Curation Workflow v2 — 미니 사이클 파이프라인

> `CLAUDE.md § 5` 상세. v2: lecture.md (표준 형식) → 슬라이드의 전체 워크플로우.
> 핵심 변화: `####` 단위 미니 사이클 + 8타입 자동 매핑 + 100% coverage.

---

## 1. 전체 그림

```
lecture.md (LECTURE_FORMAT.md 표준)
    ↓
[Phase α: ANALYSIS — 한 번만 실행]
  lecture-translator
    ├─ α.1 파싱 (#/##/###/####/--- 트리 추출)
    ├─ α.2 자동 매핑 (8타입, SLIDE_GUIDE 우선순위)
    ├─ α.3 coverage_map (lecture.md → 슬라이드 1:1)
    ├─ α.4 profile 자동 도출 + 추론
    └─ α.5 spec § 1 작성
    ↓
⛳ Gate-1: 트리 + 자동 매핑 + profile + coverage 강사 검토
    ↓
for ### in lecture.md.sections:         # ⭐ 미니 사이클 = ### 섹션 단위 (D-034)
  ┌─────────────────────────────────────────┐
  │ Mini Cycle (### 섹션 전체, 1-15장)       │
  │  표지 1장 + 0~N개 #### 콘텐츠            │
  │                                          │
  │ β' layer-composer                       │
  │   ├─ β'.1 props (강도 보존)              │
  │   ├─ β'.2 interactive (8타입 기본 + @명시) │
  │   ├─ β'.3 visual                        │
  │   └─ β'.4 wireframe (필수 슬라이드만)    │
  │                                          │
  │ γ' quality-judge + creative-judge (병렬) │
  │   - 28축 + 5축 (현재 #### 범위만)        │
  │                                          │
  │ ⛳ Gate (조건부 — 모호 시만)             │
  │   - 자동 통과: PASS + 강사 명시 0건 + WARN ≤ 1 │
  │   - 강사 게이트: FAIL 또는 WARN > 1      │
  │                                          │
  │ δ' lecture-translator: 빌드              │
  │   - {chapter}-{group}-{N}.jsx           │
  │                                          │
  │ ε' render-validator: 검증                │
  │   - 빌드 + overflow + 줄바꿈 + 자가 grep │
  │                                          │
  └─────────────────────────────────────────┘
  ↓
[Final] render-validator (통합)
  ├─ ε.1 전체 npm build
  ├─ ε.2 capture-checker
  ├─ ε.3 coverage 사후 검증 (lecture.md 100%)
  ├─ ε.4 history.md 갱신
  └─ ε.5 spec § 5 Sign-off
    ↓
완성된 슬라이드 덱
```

---

## 2. Phase α — 분석 (한 번만)

**Agent**: lecture-translator
**입력**: `lectures/S{N}/lecture.md` (LECTURE_FORMAT.md 준수)
**산출**: `spec.md § 1`, `profile.yaml` (status: draft)

### α.1 파싱

```
헤더 트리 추출:
- # × 1 (수업 제목)
- ## × 2 (이론/실습)
- ### × N (챕터)
- #### × N (슬라이드 묶음, 1-5장)
- --- (#### 안 추가 슬라이드 경계)

산출: spec § 1.1 헤더 트리 yaml
```

### α.2 자동 매핑 (`docs/slide-types.md § 2` SSOT)

8타입 우선순위 8단계:

1. `##` 실습 하위 → `activity`
2. `###` 직후 본문 없이 시작 → `title` (자동 생성)
3. 첫 단락 "사례:" / "예시:" / "시나리오:" → `example`
4. `>` 블록 첫 콘텐츠 → `quote`
5. 표 2열 (용어 \| 설명) → `terms`
6. 표 3열 이상 → `comparison`
7. 번호 리스트 ≥ 3 → `process`
8. 그 외 → `concept` (기본)

**매핑 충돌 시**: 우선순위 ↑ 가 ↓을 이김. 작성자 의도(키워드)가 콘텐츠 패턴을 이김.

### α.3 coverage_map

```yaml
coverage_map:
  - lecture_lines: [3, 8]
    slides: []
    coverage: skipped
    reason: "메타 인트로"
  
  - lecture_lines: [10, 14]
    slides: [chapter-1-title]
    coverage: full
    
  - lecture_lines: [16, 22]
    slides: [s1, s2]
    coverage: full

total_coverage: 95%
```

⚠️ **100% coverage 강제** (A6). skipped 명시 X → FAIL.

### α.4 profile 자동 도출 + 추론

자동 도출 (lecture.md 파싱 결과):
- `logic_structure`: `###` 순서 분석
- `core_visual_kind`: 8타입 분포 (comparison多 → comparison, process多 → diagram)
- `expected_slide_count`: 자동 매핑 후 **실측값**

추론 (lecture.md 신호):
- `interactivity_density`: 인터랙티브 후보 카운트
- `tone_strength`: 톤 신호 카운트

상세: `docs/profile-system.md`.

### α.5 spec § 1 작성

```markdown
# S{N} Curation Spec

## § 0. Meta
session, lecture_md_lines, format_version: v2

## § 1. Analysis
### § 1.1 Header Tree
### § 1.2 Auto-Mapping (8타입)
### § 1.3 Coverage Map (lecture → slides 1:1)
### § 1.4 Profile (자동 도출 + 추론)
### § 1.5 Decisions Required (Gate-1)
### § 1.6 Notes for Instructor
```

---

## 3. Gate-1 — 강사 검토

**검토 항목**: 자동 매핑 + profile + coverage.

**v1과 차이**: 시퀀스 검토 X (작성자가 `####` 순서로 결정).

### 응답 형식
```
(a) "OK" → 미니 사이클 시작
(b) "S1 #15 슬라이드는 concept 아니라 example로" → α.2 재매핑
(c) "interactivity_density: high로" → profile 수정
(d) "재분석"
```

응답 후 profile.yaml status: `confirmed`.

⛳ **응답 받기 전 미니 사이클 진입 X**.

---

## 4. 미니 사이클 (`####` 단위, 1-5장)

각 `####` 슬라이드 묶음마다 다음 6단계 실행.

### 4.1 입력 결정

```
chapter: ### {제목}                       # e.g. "1️⃣ 기획이란 무엇인가"
group: #### {제목}                         # e.g. "기획의 정의"
slides: [1-5장]                            # ---로 잘린 단위 또는 단일
slide_types: [from α.2]                    # e.g. ["concept", "concept"]
```

### 4.2 β' layer-composer — `####` 한정

**v1 차이**: 전체 슬라이드 X. 현재 `####`만.

```yaml
β'.1 props:
  - 8타입 슬롯에 lecture.md 콘텐츠 매핑
  - 강도 보존 검증 (8타입 강도: title=메타, concept=가변, comparison=4, process=2, ...)
  - profile.tone 적용
  
β'.2 interactive:
  - 강사 명시 우선: <!-- @interactive: ... -->
  - 자동 fallback: 8타입 기본 인터랙티브 (docs/animation-patterns.md § X)
  - profile.interactivity_density 충족 확인 (전체 누적)
  
β'.3 visual:
  - 8타입 컴포넌트 슬롯 채움
  - design 토큰만
  - 신규 컴포넌트 자유 제안 (강사 명시 시)
  
β'.4 wireframe (필수 슬라이드만, D-022):
  - 필수: quote / comparison / 신규 컴포넌트 / 인터랙티브 핵심
  - 권장: title / concept / process / example / terms / activity
```

### 4.3 γ' judge 병렬 — `####` 한정

```yaml
quality-judge (28축, 현재 #### 범위):
  - Group A: 12축 (A6 coverage 포함)
  - Group B: 6축 (profile 부분 적용)
  - Group C: 3축 (P1/P2/P3 — #### 범위)
  - Group D: 3축
  - Group E: 5축 (design-checker.js 호출)

creative-judge (5축):
  - V1-V5 (현재 #### 범위 + 누적 progress)
```

### 4.4 ⛳ Gate (조건부)

**v2 핵심 — 자동 통과 룰**:

> **판정 주체 = lecture-translator δ'.0** (`docs/agents/lecture-translator.md § 6 δ'.0b`).
> quality-judge와 creative-judge는 결과만 spec § 4.1 / § 4.2에 기록. 종합 판정 X.

```
자동 통과 (lecture-translator δ'.0b 판정):
- quality-judge PASS (FAIL 0건)
- creative-judge ≥ 65 (PASS 이상)
- 강사 명시 변경 0건 (Phase α 결과 대비)
- WARN ≤ 1건
→ 강사 게이트 생략, δ' 자동 진행

강사 게이트:
- FAIL ≥ 1건
- WARN ≥ 2건
- 강사 명시 변경 필요
- 모호한 매핑 발견
→ 강사 응답 받고 진행
```

### 메타 슬라이드 예외 (D-031, 2026-05-11 신설)

**대상**: 8타입 중 `title`, `activity` (cover/divider) — `docs/slide-types.md § 5`에서 강도 = 메타로 분류된 타입.

**근거**: 메타 슬라이드는 creative-judge V2/V3가 N/A이고 V1/V4/V5가 누적 진척이라 첫 슬라이드 단독 평가 시 ≥ 65 달성 불가능. 모든 메타 슬라이드를 매번 강사 게이트로 진입 시 비효율.

**예외 룰**: 메타 슬라이드는 자동 통과 룰의 `creative ≥ 65` 조건 **제외**.

```
자동 통과 (메타 슬라이드 한정):
- quality-judge FAIL 0건 + WARN ≤ 1 ✅
- 강사 명시 변경 0건 ✅
- creative-judge 임계 적용 X (메타 partial 점수 인정)
→ 자동 통과 (δ' 자동 진행)
```

**비메타 슬라이드**: 본 예외 적용 X. 정식 자동 통과 룰 (creative ≥ 65 포함) 그대로 적용.

**누적 평가**: 메타 슬라이드 V1/V4/V5 부분 점수는 Final ε에서 누적 종합 평가로 검증.

### 4.5 δ' 빌드 — `####` 한정

```
for slide in group:
  write src/components/slides/s{N}/{chapter}-{group}-{NN}.jsx
  
run design-checker (utility) → 자동 수정
run npm build → PASS 확인
run 자가 grep 5축
```

### 4.6 ε' render-validator — `####` 한정

```
ε'.1 빌드 검증
ε'.2 overflow 검증 (px 단위, 현재 ####)
ε'.3 줄바꿈 검증 (시각 폭, 현재 ####)
ε'.4 패턴 prop 검증
ε'.5 결과 → 다음 #### 진행 또는 강사 검증
```

---

## 5. Final — 통합 검증

모든 `####` 미니 사이클 완료 후.

**Agent**: render-validator

```yaml
ε.1 통합 npm build PASS
ε.2 capture-checker.js 호출
ε.3 coverage 사후 검증:
  - lecture.md 모든 콘텐츠 블록 → 슬라이드 빌드 완료 확인
  - skipped 명시된 영역 외 누락 0건
ε.4 history.md 갱신:
  - 본 세션 결함 raw
  - pattern_counts 갱신
  - 신규 룰 후보 강사 보고
ε.5 spec § 5 Sign-off
```

---

## 6. 강사 인터랙션 게이트 (v2)

| 게이트 | 시점 | 검토 항목 | 자동 통과? |
|---|---|---|---|
| **Gate-1** | Phase α 후 | 자동 매핑 + profile + coverage | X (항상 강사 응답) |
| **#### Gate** | 각 미니 사이클 γ' 후 | quality + creative 결과 | ⭐ 조건부 (자동 통과 룰) |
| **Final** | ε 후 | 통합 검증 결과 | X (항상 강사 확인) |

**v1 차이**:
- v1: 강사 검증 3회 + 섹션 검증 3회 = 6회
- v2: Gate-1 1회 + #### Gate (자동 통과 시 0회, 최대 N회) + Final 1회 = 2~(N+2)회

자동 통과로 강사 부담 감소.

---

## 7. 회귀 정책 (v2)

### 회귀 단위
- `####` 미니 사이클 내 회귀: 현재 `####`만 재실행
- 전체 회귀: lecture.md 수정 시만 (강사 명시)

### 회귀 횟수 제한
- 같은 `####` 3회 초과 → 강사 결정 게이트
- 옵션 A/B/C 제시

### history.md 갱신
- 결함 발생 즉시 `defects` 1행
- 누적 3회 이상 → 룰 후보 → 강사 승인 → active_rules

---

## 8. v1 → v2 변경 요약

| 항목 | v1 | v2 |
|---|---|---|
| Phase α 역할 | 구조 분석 + 강도 매핑 + 시퀀스 추론 | 파싱 + 자동 매핑 + coverage |
| 빌드 단위 | §1/§2/§3 (대규모) | `####` (1-5장 단위) |
| 강사 게이트 | 2개 (Gate-1, Gate-2) + 섹션 검증 3 = 6회 | Gate-1 + (#### 게이트 조건부) + Final = 2~(N+2)회 |
| profile | 5항목 추론 | 자동 도출 3 + 추론 2 |
| 슬라이드 단위 | layer-composer가 결정 | 작성자 (`####` + `---`) |
| 시퀀스 | lecture-translator α.4 추론 | 작성자 (`####` 순서) |
| coverage 검증 | X | A6 강제 (100%) |
| 인터랙티브 기본 | β.2 후보 식별 | 8타입 자동 fallback + @명시 우선 |

---

## 9. 실패 시 안전망

| 실패 | 대응 |
|---|---|
| lecture.md 형식 위반 | Phase α 진입 X — 강사에게 형식 수정 요청 |
| 자동 매핑 충돌 | 우선순위 표 그대로 적용, Gate-1 강사 검토 |
| coverage < 100% | 강사 결정: skipped 명시 추가 vs lecture.md 보강 |
| 미니 사이클 회귀 3회 초과 | 강사 결정 게이트 (A/B/C 옵션) |
| Final coverage 사후 검증 실패 | render-validator 보고 → 강사 결정 |
| 빌드 실패 | render-validator 보고 → 강사 결정 |

---

## 10. 참조 관계

- **CLAUDE.md § 5** → 본 문서의 요약
- **lecture-translator.md** → Phase α 상세 + 미니 사이클 진입
- **layer-composer.md** → 미니 사이클 β' 상세
- **quality-judge.md** + **creative-judge.md** → 미니 사이클 γ'
- **render-validator.md** → 미니 사이클 ε' + Final ε
- **docs/lecture-format.md** → lecture.md 표준 SSOT
- **docs/slide-types.md** → 8타입 매핑 SSOT
- **docs/animation-patterns.md** → 8타입 인터랙티브 기본값 SSOT

---

**[docs/curation-workflow.md v2 끝]**
