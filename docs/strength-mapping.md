# Strength Mapping SSOT (v2)

> 강도 매핑 기준. v2: SLIDE_GUIDE.md 자동 매핑이 대부분 대체. 강도는 *creative V2 검증용 보조 신호*로 잔존.

---

## 1. 강도 매핑의 v2 역할

| v1 | v2 |
|---|---|
| lecture-translator α.3에서 *1차 도출* | 자동 매핑 결과의 *보조 검증* |
| 패턴 선택의 기준 | 8타입 + emphasis가 자동 결정 |
| 시퀀스 추론의 핵심 | creative V2에서 평균 편차 검증 |

**v2 핵심**: 강도 매핑은 **자동 매핑된 8타입에 부합하는지** 확인하는 보조 도구.

---

## 2. 8타입 표준 강도 (SSOT)

`docs/slide-types.md § 5` 동일.

| 8타입 + emphasis | 강도 |
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

## 3. lecture.md 콘텐츠 블록 강도 신호 (보조 도구)

자동 매핑이 결정한 8타입이 *콘텐츠 신호*와 부합하는지 검증:

| 강도 | 신호 | 매칭되는 8타입 |
|---|---|---|
| **5** | 단정/원칙, `>` 블록, "절대/필수" | quote / concept(key-message) |
| **4** | 정의/대조, "X는 Y이다" (명사 종결), 표 좌우 대비 | concept(definition) / comparison |
| **3** | 사례/시나리오, "사례:", 3카드 | example / concept(default) |
| **2** | 단계/플로우, 번호 리스트, "1. 2. 3." | process / concept(outro) |
| **1** | 정보/메모, 용어 표 (2열), 단순 나열 | terms |

### 정규식 (참고)

```python
# 정의문 강도 4
def is_definition(text):
    return matches(text, r"^.{2,30}[은는]\s.{5,80}이다\.?$") and \
           not matches(text, r"한다\.?$|진다\.?$|된다\.?$|간다\.?$|온다\.?$|난다\.?$")
```

⚠️ 동사 종결문 false positive 차단 (M1 수정).

---

## 4. 강도 매핑 보존 검증 (creative V2)

```python
def v2_strength_alignment(spec):
    deviations = []
    for slide in spec.section_2_1.slides:
        if slide.type in ["title", "activity"]:
            continue  # 메타 패턴 제외
        
        expected = derive_strength_from_lecture_content(slide.source_lines)
        actual = TYPE_STRENGTH[(slide.type, slide.emphasis)]
        
        deviations.append(abs(expected - actual))
    
    avg = mean(deviations)
    return v2_score(avg)
```

---

## 5. 자동 매핑 vs 강도 매핑 — 충돌 시

자동 매핑은 *우선순위 8단계* (`docs/slide-types.md § 2`).
강도 매핑은 *콘텐츠 의미*.

충돌 사례:
- 자동 매핑: `concept` (default), 강도: 5 (단정)
  → emphasis를 key-message로 (lecture-translator α.2 결과 보정)
- 자동 매핑: `process`, 강도: 4 (정의)
  → 자동 매핑 우선 (작성자가 번호 리스트로 작성한 의도 존중)

---

## 6. 강사 명시 우선

```markdown
<!-- @strength: 5 -->         # 강도 강제 (drop)
<!-- slide-type: quote -->    # 타입 강제 (자동 매핑 우회)
```

→ 자동 매핑보다 우선. 단 전체 5% 미만 권장.

---

## 7. 참조 관계
- **lecture-translator.md** α.2 → 자동 매핑 우선
- **layer-composer.md** β'.1 → emphasis 결정 시 강도 신호 참조
- **creative-judge.md** V2 → 본 문서 § 4 평균 편차 검증
- **docs/slide-types.md** § 5 → 8타입 강도 SSOT

---

**[docs/strength-mapping.md v2 끝]**
