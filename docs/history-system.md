# history.md 시스템

> `CLAUDE.md § 12` 상세. 결함 raw 기록 + 차단 룰 lifecycle + 강사 승인 게이트.

---

## 1. 설계 철학

### 1.1 핵심 원칙

기존 시스템의 결함:
- 결함 누적 3회 → 차단 룰 자동 추가
- 룰 무한 누적 → 시스템 점진적 경직
- 모든 세션 무차별 적용 → 본질 왜곡

새 시스템의 원칙:
- **만료 lifecycle** — 90일 후 자동 만료
- **강사 승인 게이트** — 자동 추가 X, 명시 승인 후 활성화
- **profile 차등 적용** — applies_when / exempt_when으로 세션별 차등
- **severity 차등** — warn (경고) / fail (차단) 분리

### 1.2 두 SSOT의 분리

| 파일 | 역할 |
|---|---|
| `progress.md` | sprint 단위 압축 — "어떤 작업을 했는가" |
| `history.md` | 결함 단위 raw — "어떤 결함이 발생했는가" |

둘 다 SSOT. 매 작업 시작 시 둘 다 읽음.

---

## 2. 파일 구조

```yaml
# history.md 전체 구조

# Section 1: active_rules
active_rules:
  - id: rule_YYYYMM_NNN
    category: ...
    description: ...
    triggered_by: ...
    activated_at: ...
    expires_at: ...
    applies_when: [...]
    exempt_when: [...]
    severity: warn | fail

# Section 2: expired_rules
expired_rules: [...]

# Section 3: defects
defects: [...]

# Section 4: pattern_counts
pattern_counts: { ... }

# Section 5: session_specific
session_specific: { ... }
```

각 섹션은 § 3 ~ § 7에서 상세.

---

## 3. Section 1 — active_rules (활성 차단 룰)

### 3.1 스키마

```yaml
active_rules:
  - id: rule_2026_05_001                   # 자동 생성 ID
    category: 특수문자/emoji                # 10가지 카테고리 중 1개 (§ 6 참조)
    description: "§ ⚠️ ✓ ✕ 학생 화면 노출 0건"
    triggered_by: "S1~S3 누적 17건"
    
    activated_at: 2026-05-09                # 활성화 일자
    expires_at: 2026-08-09                  # 만료 일자 (default: +90일)
    
    applies_when:                           # 적용 조건 (다중 조건 AND)
      - all_sessions: true                  # 모든 세션에 적용
      # 또는:
      # - profile.tone_strength: [soft, balanced]
      # - profile.core_visual_kind: comparison
    
    exempt_when:                            # 예외 조건 (다중 조건 OR)
      - profile.tone_strength: strong
      - lecture.md.has_keyword: "단정"
    
    severity: fail                          # warn | fail
    
    instructor_approved_at: 2026-05-09       # 강사 승인 시점
    instructor_approval_note: "S1-S3 누적 결과 차단 필요"
```

### 3.2 룰 ID 명명 규칙

```
rule_{YYYYMM}_{NNN}
  YYYYMM: 활성화 연월
  NNN: 그 월의 일련번호 (001부터)

예시:
  rule_2026_05_001
  rule_2026_05_002
  rule_2026_06_001
```

### 3.3 applies_when / exempt_when 작성법

#### applies_when (AND 결합)

여러 조건이 *모두* 만족할 때 룰 적용.

```yaml
applies_when:
  - all_sessions: true
```
→ 모든 세션에 적용.

```yaml
applies_when:
  - profile.tone_strength: [soft, balanced]
  - profile.interactivity_density: high
```
→ tone이 soft 또는 balanced *그리고* density가 high인 세션에만 적용.

```yaml
applies_when:
  - session: [S1, S2]
```
→ S1, S2에만 적용.

#### exempt_when (OR 결합)

여러 조건 중 *하나라도* 만족하면 룰 면제.

```yaml
exempt_when:
  - profile.tone_strength: strong
  - lecture.md.has_keyword: "단정"
```
→ tone이 strong이거나 lecture.md에 "단정" 키워드 있으면 면제.

#### 결합 평가

```python
def is_rule_active(rule, session_context):
    # applies_when 모두 만족 + exempt_when 하나도 매치 X
    applies = all(check(cond, session_context) for cond in rule.applies_when)
    exempt = any(check(cond, session_context) for cond in rule.exempt_when)
    return applies and not exempt
```

### 3.4 severity 차등

| severity | 의미 | 동작 |
|---|---|---|
| `warn` | 경고만 | 결함 발견 시 강사에게 보고. 빌드 진행. 강사 결정으로 수정 여부 |
| `fail` | 차단 | 빌드 차단. 즉시 자동 수정 시도 → 실패 시 강사 보고 |

#### severity 결정 기준 (룰 생성 시)

```
처음 룰 생성 시 → warn (1차)
  - 학습 단계, 강사가 케이스 파악 가능
  
재발 시 → fail로 격상
  - 만료 후 같은 카테고리 재발
  - 또는 warn 상태에서 5회+ 누적
```

---

## 4. Section 2 — expired_rules (만료 룰)

### 4.1 스키마

```yaml
expired_rules:
  - id: rule_2026_03_001
    category: ...
    description: ...
    activated_at: 2026-03-01
    expired_at: 2026-06-01                  # 만료 시점
    expiration_reason: "90일 자동 만료"
    
    re_activation_history:                  # 재활성화 이력
      - re_activated_at: 2026-05-15
        reason: "S5에서 같은 카테고리 재발"
        new_severity: fail                  # warn → fail 격상
        new_rule_id: rule_2026_05_003
```

### 4.2 만료 처리 로직

매 세션 시작 시 (Phase α 자동 실행):

```python
def expire_check():
    today = today()
    for rule in active_rules:
        if today >= rule.expires_at:
            rule.expired_at = today
            rule.expiration_reason = "90일 자동 만료"
            move_to(expired_rules, rule)
            log("expired", rule.id)
```

### 4.3 재활성화 처리

만료 후 같은 카테고리 결함 발생 시:

```python
def check_re_activation(new_defect):
    matching_expired = find_expired_by_category(new_defect.category)
    
    if matching_expired:
        # 같은 카테고리 재발 → 격상 재활성화
        new_rule = create_rule(
            category=new_defect.category,
            severity="fail",  # warn → fail 격상
            triggered_by=f"{matching_expired.id} 만료 후 {new_defect.session} 재발"
        )
        request_instructor_approval(new_rule)
```

---

## 5. Section 3 — defects (결함 raw)

### 5.1 스키마

```yaml
defects:
  - timestamp: 2026-05-09T14:23:00
    session: S2
    slide_number: 5
    pattern: KeyMessage
    category: 라인 분할                     # 10가지 카테고리 중 1개
    severity: minor | major | critical      # raw 단계 분류
    instructor_note: "것이<br>다 → 것이다"
    resolution: "message 배열 분리"
    rule_triggered: false                   # 1회 발생만으로 룰 추가 X
    fix_method: auto | manual               # 자동 수정 vs 수동
    related_rule: null                      # 룰 매칭 시 ID
```

### 5.2 결함 기록 의무 (즉시)

```
강사 결함 보고 1건당 1행 즉시 추가
```

자동 갱신 흐름:
```
1. 강사: "S2 #5 줄바꿈 이상" 보고
2. lecture-translator (재호출) 또는 layer-composer:
   - defects에 1행 추가
   - pattern_counts 갱신 (라인 분할 +1)
3. 누적 3회 이상 시 → 룰 후보 생성 (§ 7)
4. 자동 수정 시도 또는 강사 보고
```

### 5.3 raw 보존 원칙

- defects는 **추가만** 하고 *삭제 X*
- 결함이 해결되어도 raw 기록 유지
- 패턴 분석에 사용

---

## 6. Section 4 — pattern_counts (반복 패턴 분석)

### 6.1 스키마

```yaml
pattern_counts:
  특수문자/emoji:
    s1_count: 10
    s2_count: 4
    s3_count: 3
    s4_count: 0
    cumulative: 17
    rule_triggered: true
    rule_id: rule_2026_05_001
  
  라인 분할:
    s1_count: 0
    s2_count: 2
    s3_count: 5
    s4_count: 0
    cumulative: 7
    rule_triggered: true
    rule_id: rule_2026_05_002
```

### 6.2 결함 카테고리 (10가지)

| # | 카테고리 | 설명 | 관련 결정 |
|---|---|---|---|
| 1 | 특수문자/emoji | § ⚠️ ✓ ✕ 등 학생 화면 노출 | D1 / D11 |
| 2 | 패턴 prop mismatch | wrapper props ≠ 패턴 expects | (전체 패턴) |
| 3 | 라인 분할 | message 배열 부적절, 끊김 | D8 / D12 |
| 4 | 인터랙티브 미통합 | placeholder만, import 누락 | E1 |
| 5 | 텍스트 폭증 | 시각 폭 임계값 초과 | D12 |
| 6 | 톤 강제 | 정설 톤 → 권장 톤 변환 필요 | C9 |
| 7 | 흐름 끊김 | 단정 → 근거 미연결, 브릿지 부재 | B5 / B6 |
| 8 | 콘텐츠 두께 부족 | 한 줄 desc, 부연 부재 | A3 / B7 |
| 9 | 가독성 | 색상 / 카드 정렬 / 화면 초과 | (D + 시각) |
| 10 | 기타 | 위에 해당 X | - |

### 6.3 카테고리 자동 분류

defects 추가 시:

```python
def classify_defect(instructor_note):
    if any(c in instructor_note for c in ["§", "⚠️", "✓", "✕", "→"]):
        return "특수문자/emoji"
    if "props" in instructor_note or "title" in instructor_note:
        return "패턴 prop mismatch"
    if "<br>" in instructor_note or "줄바꿈" in instructor_note:
        return "라인 분할"
    if "placeholder" in instructor_note:
        return "인터랙티브 미통합"
    if "초과" in instructor_note or "글자 수" in instructor_note:
        return "텍스트 폭증"
    if "정설" in instructor_note or "권장" in instructor_note:
        return "톤 강제"
    if "흐름" in instructor_note or "연결" in instructor_note:
        return "흐름 끊김"
    if "두께" in instructor_note or "한 줄" in instructor_note:
        return "콘텐츠 두께 부족"
    if "색상" in instructor_note or "정렬" in instructor_note or "초과" in instructor_note:
        return "가독성"
    return "기타"
```

자동 분류 결과는 강사 검토 가능 (정확도 보장 목적).

---

## 7. Section 5 — session_specific (세션 특화 룰 참조용)

```yaml
session_specific:
  S1:
    rules:
      - c1_persona: "페르소나 = 도구 (출발 X)"
      - c5_first_assertion: "기능은 답이고 사람과 문제는 질문이다"
      - b1_deductive_only: "§1만 Deductive"
    location: lectures/S1/profile.yaml § session_specific_decisions

  S2:
    rules:
      - "..."
    location: lectures/S2/profile.yaml § session_specific_decisions
```

⚠️ 실제 룰 본문은 `lectures/S{N}/profile.yaml`에 있음. 본 섹션은 *참조 인덱스*만.

---

## 8. 룰 lifecycle 전체 흐름

```
[1] 결함 발생
  ↓
defects에 raw 1행 추가
pattern_counts 갱신
1회 발생: rule_triggered = false
  ↓
[2] 누적 3회 이상
  ↓
룰 후보 자동 생성:
  - profile 조건 분석 → applies_when / exempt_when 자동 도출
  - severity 평가 (warn 1차)
  - expires_at = activated_at + 90일
  ↓
[3] ⛳ 강사 승인 게이트 ⭐
  ↓ 승인
active_rules에 추가 (§ 8.1 보고 형식)
rule_triggered = true
관련 defects의 related_rule 갱신
  ↓
[4] 매 세션 시작 시
  ↓
expire_check 실행
만료된 룰 → expired_rules 이동
  ↓
[5] 만료 후 같은 카테고리 재발
  ↓
새 룰 생성 (severity = fail로 격상)
  ↓
[3] 강사 승인 게이트 → 활성화
```

### 8.1 강사 승인 게이트 보고 형식

```markdown
🆕 새 차단 룰 후보 생성

카테고리: 라인 분할
누적: S2 2회 + S3 5회 = 7회
관련 결함:
  - S2 #5: "것이<br>다" 줄바꿈
  - S2 #22: "만들게<br> 한다"
  - S3 #15: "Google의 출처 기반 AI 노트북.<br>"
  - ... (총 7건)

자동 도출된 룰:
  id: rule_2026_05_002
  description: "KeyMessage / Definition / Warning에 message/definition/description 배열 의무"
  applies_when:
    - all_sessions: true
  exempt_when: []
  severity: warn (1차)
  expires_at: 2026-08-09 (90일 후)

강사 응답:
  (a) "승인" → active_rules 추가
  (b) "수정 후 승인" → applies_when / severity 등 조정
  (c) "거부" → 룰 추가 X (defects raw만 유지)
  (d) "더 보기" → 관련 defects 상세
```

### 8.2 거부 시 처리

```
강사 거부 → 룰 추가 X
defects.rule_triggered = false 유지
pattern_counts.{category}.rule_triggered = false

→ 같은 카테고리 추가 발생 시 다시 강사 승인 게이트
→ 강사가 "거부 결정 유지" 시 무한 거부 가능
```

---

## 9. 작업 시작 전 / 종료 시 절차

### 9.1 작업 시작 전 (모든 agent 의무)

```
1. progress.md 읽기 (sprint 단위)
2. history.md 읽기:
   - § active_rules 만료 검사
   - 만료 룰 → expired_rules 이동
   - 본 세션 profile에 따라 적용 룰 필터링
3. § pattern_counts 반복 패턴 검토
4. 본 세션 작업에 적용될 룰 목록 확정
```

### 9.2 작업 중 (강사 결함 보고 시)

```
즉시:
1. defects에 1행 추가
2. pattern_counts 갱신
3. 카테고리 자동 분류
4. 자동 수정 가능 여부 판단
   - 가능 → 즉시 수정 + render-validator 재실행
   - 불가 → 강사 보고
5. 누적 3회 이상 시 → § 8.1 강사 승인 게이트
```

### 9.3 작업 종료 시 (필수)

```
1. defects 모두 기록되었는지 확인
2. pattern_counts 정합성 확인 (sum 검증)
3. 신규 룰 후보 강사 승인 받았는지 확인
4. progress.md ✅ 완료 표에 1행 추가
   "S{N} 큐레이션 | YYYY-MM-DD | 결함 N건, 신규 룰 N개"
```

---

## 10. agent 별 의무

| Agent | history.md 역할 |
|---|---|
| **lecture-translator** | 시작 시 active_rules 만료 검사 + 본 세션 적용 룰 필터링. Phase δ에서 결함 발생 시 즉시 기록 |
| **layer-composer** | 시작 시 active_rules 참조하여 spec 작성 시 사전 차단 |
| **quality-judge** | active_rules의 fail severity 항목을 검증 축에 포함 |
| **creative-judge** | active_rules의 warn severity 항목을 가산 점수에 반영 (있다면) |
| **render-validator** | 빌드 후 결함 발견 시 즉시 defects 추가 + 카테고리 자동 분류 |

---

## 11. 누적 통계 예시 (참고)

### S1 (~Phase A~M, 2026-05-09 이전)

```yaml
S1 결함: ~30건 (다중 회귀)
주요 카테고리:
  - 특수문자/emoji: ~10건
  - 콘텐츠 두께 부족: 다수
  - 인터랙티브 미통합: 5건
  - 흐름 끊김: 다수
```

### S2 (2026-05-09)

```yaml
S2 결함: 30건 (15+8+7)
신규 룰 생성:
  - 특수문자/emoji 누적 17 → rule_2026_05_001
  - 라인 분할 누적 7 → rule_2026_05_002
```

### S3 (2026-05-10)

```yaml
S3 결함: 22건 (4+2+17)
신규 룰:
  - 톤 강제 누적 3 → rule_2026_05_003 (warn)
```

### S4 목표 (재설계 후)

```yaml
S4 결함 ≤ 5건
이유:
  - profile 시스템으로 본질 보존
  - 가산 평가로 다양성 확보
  - 룰 차등 적용으로 본질 왜곡 차단
```

---

## 12. 안전망

### 12.1 룰 폭주 방지

```
한 세션에 신규 룰 후보 ≥ 5개:
  ⚠️ 룰 폭주 신호
  → 강사에게 종합 보고 (개별 승인 X, 일괄 검토)
  → 시스템 패러다임 자체 재검토 권고
```

### 12.2 룰 충돌 검증

```
룰 추가 시 자동 검증:
- 같은 카테고리에 이미 active 룰 있는가
- applies_when 조건이 다른 룰과 충돌하는가
- exempt_when이 너무 광범위한가
충돌 시 → 강사 결정 게이트
```

### 12.3 만료 후 즉시 재발 방지

```
만료된 룰의 카테고리 재발 시:
- 만료 후 7일 이내 재발 → "만료 결정 자체 재검토 권고"
- 7일~30일 재발 → 자동 재활성화 (severity 격상)
- 30일+ 재발 → 새 룰로 처리 (warn 1차)
```

---

## 13. 참조 관계

- **CLAUDE.md § 12** → 본 문서의 요약
- **모든 agent .md** → 본 문서 § 9 시작 전 / 종료 시 절차 참조
- **progress.md** → 본 문서 § 9.3 종료 시 절차에서 갱신
- **profile.yaml § session_specific_decisions** → 본 문서 § 7 참조

---

**[docs/history-system.md 끝]**
