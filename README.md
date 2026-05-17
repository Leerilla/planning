# Claude Code 풀사이클 PPT 큐레이션 시스템 — v2 Sprint

> 패러다임 전환: lecture.md 자유 형식 → **표준 형식 + 미니 사이클 + 8타입**.
> 2026-05-11 재설계 완료.

---

## 📦 산출물 구조

```
v2-sprint/
├── CLAUDE.md                      # 헌법 v2 (32결정, 미니 사이클)
├── history.md                     # 결함 raw + 룰 (v2 마이그레이션 포함)
│
├── docs/                          # 13개 SSOT
│   ├── architecture.md
│   ├── animation-patterns.md      # ⭐ 8타입 기본 인터랙티브 SSOT
│   ├── capture-workflow.md
│   ├── curation-workflow.md       # ⭐ 미니 사이클 6단계
│   ├── decisions.md               # D-001 ~ D-030 (v2 D-024-30 추가)
│   ├── history-system.md
│   ├── lecture-format.md          # ⭐ v2 신규 — lecture.md 표준
│   ├── migration-matrix.md
│   ├── profile-system.md          # ⭐ 자동 도출 / 추론 분리
│   ├── slide-patterns.md          # ⭐ 18 패턴 → 8타입 슬롯
│   ├── slide-types.md             # ⭐ v2 신규 — 8타입 + 자동 매핑 SSOT
│   ├── strength-mapping.md
│   └── wireframe-guide.md         # ⭐ 필수/권장 분리 (D-022)
│
├── .claude/
│   ├── agents/                    # 5개 sub-agent (v2)
│   │   ├── lecture-translator.md  # ⭐ 파싱 + 자동 매핑
│   │   ├── layer-composer.md      # ⭐ 8타입 인터랙티브 자동 fallback
│   │   ├── quality-judge.md       # ⭐ A.6 coverage + A.13 인터랙티브 강제
│   │   ├── creative-judge.md      # ⭐ V2 8타입 강도 매핑
│   │   └── render-validator.md    # ⭐ ε.3 coverage 사후 검증
│   └── utilities/                  # 2개 utility (테스트 통과)
│       ├── design-checker.js      # 5축 grep
│       └── capture-checker.js     # 4축 무결성
│
├── lectures/
│   ├── S1/profile.yaml             # 회고 작성 (linear/diagram/medium/strong)
│   └── S2/profile.yaml             # 회고 작성 (parallel/comparison/high/balanced)
│
└── reference/                      # 참고 자료
    ├── agent_system_diagnosis.md
    ├── new_system_architecture.md
    └── progress.md
```

---

## 🎯 v2 핵심 변화

### 1. lecture.md 자유 형식 → 표준 형식
- **4계층 헤더 강제** (`#` / `##` 이론·실습 / `###` 챕터 / `####` 슬라이드 묶음 1-5장)
- 슬라이드 단위 = **작성 시점**에 결정 (`####` + `---`)
- 시퀀스 = **작성자** 결정 (agent 추론 X)

### 2. 18 패턴 → 8타입 컴포넌트
- title / concept / comparison / process / example / quote / activity / terms
- 18 패턴 의도는 **emphasis props로 보존** (KeyMessage / Definition / Outro 등 concept 안에)
- **자동 매핑** (SLIDE_GUIDE.md 우선순위 8단계)

### 3. 인터랙티브 강제 (강사 명시 + 8타입 자동 fallback)
- 강사 `<!-- @interactive: ... -->` **우선**
- 명시 없으면 8타입 기본 인터랙티브:
  - process → step-reveal ⭐
  - comparison → 좌우 slide-in + toggle
  - quote → scale-in + 강조 pulse
  - 등

### 4. `####` 단위 미니 사이클
- agent가 한 번에 최대 5장만 관리
- 6단계: α(전체) → 각 #### : β'/γ'/Gate/δ'/ε' → Final ε
- **자동 통과 룰**: PASS + WARN ≤ 1 → 강사 게이트 생략

### 5. lecture.md 100% coverage 강제
- coverage_map (lecture lines → slides 1:1)
- A.6 사전 검증 + ε.3 사후 검증 (이중)
- skipped는 명시 강제

---

## 📊 v1 → v2 비교

| 항목 | v1 | v2 |
|---|---|---|
| lecture.md 형식 | 자유 | 4계층 헤더 표준 |
| 슬라이드 결정 | agent 추론 | 작성자 (`####`) |
| 패턴 수 | 18 | 8타입 (18 의도 보존) |
| 빌드 단위 | §1/§2/§3 섹션 | `####` (1-5장) |
| 강사 게이트 | 6회 | 2~(N+2)회 (자동 통과로 감소) |
| 인터랙티브 | β.2 후보 식별 | 강사 명시 + 8타입 자동 |
| coverage | X | A.6 + ε.3 강제 |
| profile | 5 추론 | 자동 도출 3 + 추론 2 |

---

## 🚀 다음 단계 (운영)

1. **S4 lecture.md 표준화** — LECTURE_FORMAT.md 따라 작성/변환
2. **v2 통합 테스트** — lecture-translator α 격리 호출로 파싱 + 자동 매핑 검증
3. **미니 사이클 첫 실행** — 첫 `####` 빌드 (β'/γ'/Gate/δ'/ε')
4. **자동 통과 룰 효과 측정** — Gate 횟수 v1 vs v2

---

## 📝 의사결정 (D-024 ~ D-030, v2)

- **D-024** lecture.md 표준 형식 (LECTURE_FORMAT)
- **D-025** 18 패턴 → 8타입 컴포넌트 (의도 emphasis 보존)
- **D-026** 인터랙티브: 강사 명시 + 8타입 자동 fallback
- **D-027** `####` 단위 미니 사이클
- **D-028** lecture.md 100% coverage 강제
- **D-029** profile: 자동 도출 / 추론 분리
- **D-030** sub-agent 격리 호출 우선 (메인 직접 수행 X)

상세: `docs/decisions.md`.

---

## ⚠️ 사용자 진행 룰

- progress 트래커 X, 작업에만 집중
- 압축판 유지 (긴 버전 폐기)
- docs가 SSOT, agent.md는 참조만
- 격리 sub-agent 호출 우선 (메인 직접 X)
- 사용자 로컬 Claude Code 격리 호출 테스트 → 결과 공유 → 메인 분석/수정 사이클

---

## 🔁 마이그레이션 가이드 (v1 → v2)

1. **기존 v1 lecture.md → v2 표준 형식 변환** — `docs/lecture-format.md § 1, 2` 따라 헤더 트리 정비
2. **profile.yaml 재생성** — lecture-translator Phase α 격리 호출
3. **spec.md v2 구조 채택** — § 1 (analysis) / § 2 (composition) / § 4 (review) / § 5 (sign-off)
4. **history.md 마이그레이션** — 기존 결함 raw 보존, v2 신규 카테고리 `coverage_누락` 추가
5. **deployment.md / slide-engine.md** — v1 산출물 그대로 재사용 (본 sprint 변경 X)

---

## 🛠 트러블슈팅

- **결함 발견 시**: `history.md § defects`에 yaml 1행 추가 → 누적 3회 이상 시 강사 승인 게이트 → `active_rules`
- **자동 매핑 어긋남**: `docs/slide-types.md § 2` 우선순위 적용 결과 — lecture.md 콘텐츠 수정 (frontmatter 오버라이드는 5% 미만 권장)
- **5장 초과 `####`**: Phase α.0 = WARN (분할 권고), Phase δ' 진입 = FAIL (강사 결정 게이트)
- **coverage < 100%**: `skipped` 명시 추가 vs lecture.md 보강 — 강사 결정

---

**[README v2 끝]**
