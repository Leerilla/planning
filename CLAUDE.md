# CLAUDE.md

> Claude Code가 매 세션 자동으로 읽는 **프로젝트의 헌법**. 모든 결정의 SSOT.
> **v2** (2026-05-11) — 패러다임 전환: 추론 → 파싱 + 미니 사이클 + 8타입 + 강사 명시 우선.

---

## 1. 정체성

**Claude Code 풀사이클 21시간 학습을 위한 인터랙티브 PPT 플랫폼.**

9세션 강의를 `lecture.md` (표준 형식) → 슬라이드로 변환. 

- 강사 1명 + 학생 10~30명
- lecture.md = **표준화된 4계층 헤더**. 슬라이드 단위는 *작성 시점*에 결정 (`####` + `---`)
- 학생은 빌드된 슬라이드만 봄
- 메타 강의: 학생들이 만들 서비스의 살아있는 모델

---

## 2. 절대 원칙 (NEVER 위반)

1. **PPT 일관성**: 한 슬라이드 = 한 메시지. 좌우 전환.
2. **lecture.md 수정 금지**: A2 자동 수정 절대 X. 강사 자료는 표준 형식 따르되 *내용*은 강사 자유.
3. **디자인 일관성**: `docs/design-system.md` 토큰만. 기존 컴포넌트 우선 재사용. 8타입 컴포넌트(`docs/slide-types.md`)만.
4. **인터랙티브 강제**: 8타입별 기본 인터랙티브 보장. 강사 명시(`<!-- @interactive: ... -->`)는 우선 적용. (v2 신규 — 정적 hover만 X)
5. **lecture.md 100% coverage**: 모든 콘텐츠 블록이 슬라이드에 매핑되거나 명시적으로 skipped 처리.
6. **`###` 미니 사이클** (D-034): agent가 한 미니 사이클 = `###` 섹션 전체 (표지 1장 + 모든 `####` 콘텐츠) 관리. 한 `####` 묶음 안에서 `---` 분할 슬라이드 5장 초과 시 WARN.
7. **미니 사이클 4단계 sub-agent 시퀀스 의무** ⭐ (D-047, 2026-05-14 신규): 한 미니 사이클 = **β' layer-composer → γ' quality-judge + creative-judge 병렬 → δ' lecture-translator → ε' render-validator** 4 sub-agent 호출 시퀀스 의무. `lecture-translator` 단독 호출 + 메인 grep 압축 **금지**. fall-back은 **명시적 실패 사유 발생 후만** (예: judges file read 실제 실패 후 grep, render-validator 빌드 도구 부재 후 npm build). 효율 / 비용 / 메타 슬라이드는 fall-back 사유 X. 모든 T 단위 ⛳ 보고에 **4단계 명시 체크박스** (`✓ β' / ✓ γ' / ✓ δ' / ✓ ε'` + 각 호출 사유) 의무.

---

## 3. 기술 스택

Next.js 14 App Router · JavaScript · Tailwind + CSS 변수 · Vercel KV · Notion API · Vercel.

**사용 X**: TypeScript, MDX, 외부 슬라이드 라이브러리, pages router, Redux.

---

## 4. 폴더 구조

```
├── CLAUDE.md
├── docs/                          # 지침 문서 (SSOT 분리, 14개)
│   ├── architecture.md
│   ├── animation-patterns.md      # 8타입 기본 인터랙티브 + V4 점수
│   ├── capture-workflow.md
│   ├── curation-workflow.md       # 미니 사이클 6단계
│   ├── decisions.md
│   ├── design-system.md           # D1-D12 토큰 + 폰트 + radius
│   ├── history-system.md
│   ├── lecture-format.md          # ⭐ v2 신규 — LECTURE_FORMAT 표준
│   ├── migration-matrix.md        # v1 → v2 산출물 매핑
│   ├── profile-system.md          # 자동 도출 / 추론 항목 분리
│   ├── slide-patterns.md          # 18 패턴 의도 보존 매핑
│   ├── slide-types.md             # ⭐ v2 신규 — 8타입 컴포넌트 SSOT
│   ├── strength-mapping.md        # 강도 매핑 (creative V2 보조)
│   └── wireframe-guide.md         # 8타입 슬롯 wireframe
│   # deployment.md / slide-engine.md: v1 산출물에만 존재 — 본 sprint 범위 외
├── lectures/S{N}/
│   ├── lecture.md                 # 표준 형식 (#/##/###/####/---)
│   ├── assignment.md
│   ├── checklist.md
│   ├── profile.yaml               # ⭐ 자동 도출 + 추론
│   ├── spec.md                    # 분석/구성/리뷰 통합 + coverage_map
│   └── captures/
├── src/
│   ├── app/sessions/[slug]/
│   └── components/
│       └── slides/
│           ├── types/             # 8타입 컴포넌트
│           │   ├── TitleSlide.jsx
│           │   ├── ConceptSlide.jsx
│           │   ├── ComparisonSlide.jsx
│           │   ├── ProcessSlide.jsx
│           │   ├── ExampleSlide.jsx
│           │   ├── QuoteSlide.jsx
│           │   ├── ActivitySlide.jsx
│           │   └── TermsSlide.jsx
│           └── s{N}/              # 세션별 wrapper
└── .claude/
    ├── agents/                    # 5개 sub-agent
    └── utilities/                 # design-checker.js, capture-checker.js
```

---

## 5. 핵심 워크플로우 — 미니 사이클 (v2, D-032/D-033/D-034 갱신)

```
lecture.md (LECTURE_FORMAT 표준)
  ↓
[Phase α] lecture-translator: 파싱 + 자동 매핑 + coverage_map
  - 헤더 트리 추출 (#/##/###/####/---)
  - 자동 생성 슬라이드 (D-032):
    · # → 세션 표지 (Cover, 1번 슬라이드)
    · ## 이론 직속 → 이론 목차 (Objectives)
    · ## 실습 직속 → 실습 목차 (Objectives)
    · ### → 섹션 표지 (Cover, D-033)
  - #### 콘텐츠 매핑 (8타입 2.2절 우선순위)
  - lecture.md 100% coverage 검증
  - profile 자동 도출 + 일부 추론
  ↓
⛳ Gate-1: 트리 + 자동 매핑 + profile + coverage 강사 검토
  ↓
for ### in lecture.md.sections:         # ← 미니 사이클 = ### 섹션 단위 (D-034)
  ┌─────────────────────────────────────────┐
  │ Mini Cycle (### 섹션 전체)              │
  │  표지 1장 + 0~N개 #### 콘텐츠 (1-N장)   │
  │                                          │
  │  β' layer-composer: interactive+visual+wireframe │
  │  γ' quality-judge + creative-judge      │
  │  ⛳ Gate (강사 검토, 모호 시만)         │
  │     · 메타 슬라이드 자동 통과 (D-031)    │
  │  δ' lecture-translator: 빌드            │
  │  ε' render-validator: 검증              │
  └─────────────────────────────────────────┘
  ↓
[Final] render-validator: 통합 검증 + history.md 갱신
```

**트리거**: `S{N} 슬라이드 큐레이션` / `S{N} ### {섹션제목} 빌드` (특정 섹션 단위).

상세는 `docs/curation-workflow.md`.

---

## 6. 강사 누적 결정 — 32개 공통 SSOT

> 9세션 공통. 세션 특화는 `lectures/S{N}/profile.yaml`의 `session_specific_decisions`로 분리.

### A. 콘텐츠 원칙 (7개)
- **A1**. lecture.md 표준 형식 (LECTURE_FORMAT.md) 준수. 자유 형식 X
- **A2**. 강사 자료 자동 수정 절대 금지
- **A3**. 본문 충실 인용 — `desc`/`note`/`footer` 한 줄 0건
- **A4**. 메타 메시지 — 학생들이 만들 서비스의 모범
- **A5**. 출처 표기(`(line N)` 등) 학생 화면 노출 X
- **A6** ⭐ v2 신규. lecture.md 100% coverage — 모든 콘텐츠 블록이 슬라이드 또는 skipped 명시
- **A7** ⭐ S3+ 신규 (D-043). **실습 프로젝트명 `planning_project` 고정** — S3~S9 실습 영역의 모든 작업 폴더·디렉토리·예시 명령은 `planning_project`로 통일. lecture.md에 `03_prd-refinement` 같은 단계별 폴더명이 있어도 슬라이드에선 `planning_project`로 변환. 9세션 동안 학생이 한 폴더에 작업물을 누적·진화시키는 메타 메시지(A4)와 직결.
- **A8** ⭐ S3+ 신규 (D-044). **학생 프로젝트 구조 SSOT** — `docs/student-project-reference.md`를 S3~S9 학생이 만드는 `planning_project/` 구조의 SSOT로 사용. 폴더 구조 / 핵심 docs 5개 양식(persona/painpoints/prd/README/CLAUDE.md) / 세션별 docs 매핑 / 슬라이드 빌더 참조 룰 명시. S4~S9 lecture.md와 SSOT 충돌 시 **SSOT 우선** (강사 협업으로 SSOT 갱신).

### B. 흐름 (3개)
- **B5**. 스토리 연결 — `####` 순서 기반. agent가 시퀀스 변경 X
- **B6**. 주장 → 근거 1:1 동반
- **B7**. 슬라이드 수는 `####` + `---`로 결정. agent가 임의 추가 X

### C. 콘텐츠 결정 (제거됨)
> C1-C9는 모두 세션별 분리 (profile.session_specific_decisions.content).

### D. UI / 디자인 (14개)
- **D1~D12**: emoji 0건 (학생 화면, 메타 표기 포함 — D-035) / 토큰만 / rounded-lg 금지 / 미정의 토큰 금지 / 폰트 4종 / gap-6 p-7 표준 / KeyMessage footer+subtext 동시 X / message 배열 / \\n 줄바꿈 / emphasis 절제 / 특수문자 학생 화면 X / 시각 폭 검증
- **D13** ⭐ 2026-05-13 신규 (D-045). **백그라운드 `#0F172A` (`bg-bg-elev` / `--code-bg`) 사용 금지** — wrapper 안 어두운 톤 직접 사용 X. 코드/표 헤더는 `bg-bg-soft` 사용. 학생 화면 가독성 저하 방지.
- **D14** ⭐ 2026-05-13 신규 (D-046). **`font-mono` 클래스 사용 금지** — wrapper 안 모노 폰트 직접 적용 X. 코드 블록은 `<pre>` 기본 또는 패턴 컴포넌트가 처리. 학생 화면 폰트 일관성.
- **D15** ⭐ 2026-05-15 신규 (D-049). **디자인 토큰 화이트리스트 SSOT** — `tailwind.config.js` + `globals.css` 정의 토큰만 사용. 미정의 토큰 (`border-line`, `bg-bg-primary`, `accent-strong`, `bg-state-*`, `bg-bg-elevated`, `highlight-soft`) 사용 시 FAIL. 화이트리스트 SSOT: `docs/design-system.md` 2절.
- **D16** ⭐ 2026-05-15 신규 (D-050). **lecture.md 원문 보존 강화 (A2 강화)** — 표/리스트 데이터 임의 변경 X. spec 2절 작성 시 `lecture_range: [N1, N2]` 인용 의무. β' agent가 원문 데이터를 재구성/요약/대체 시 FAIL.
- **D17** ⭐ 2026-05-15 신규 (D-051). **pre 블록 폰트 최소 `text-xs` (12px)** — `text-[11px]` / `text-[10px]` / `text-2xs` 사용 X. 학생 화면 가독성 보장. design-checker grep 패턴: `text-\[1[01]px\]` / `text-2xs`.
- **D18** ⭐ 2026-05-15 신규 (D-052). **6+ vertical sequential 카드 분할 의무** — 6개 이상 카드를 단일 column으로 720px viewport에 배치 X. 2-column grid 또는 통합/요약화. 폰트 축소로 해결 X (D-051 우선).
- **D19** ⭐ 2026-05-15 신규 (D-053). **도구 이름 첫 등장 시 설명 의무** — `Bash`, `Read`, `Grep`, `Glob`, `Write`, `Edit`, `WebFetch`, `SubagentStop` 등 도구 이름이 슬라이드에 처음 등장할 때 인라인 설명 또는 footer 1줄 명시. 학생 학습 경험.
- **D20** ⭐ 2026-05-15 신규 (D-054). **산출물 파일 경로 inline code + accent 강조 의무** — wrapper 안 산출물 위치는 `<code>` 태그 + `text-accent font-semibold` 강조. Cover 슬라이드에 "산출물 위치" 박스 권장.
- **D21** ⭐ 2026-05-21 신규. **비-ASCII 특수문자(section sign / pilcrow / reference mark 등) 사용 금지** — 학생 화면(슬라이드 본문)에 이미 D11로 금지되어 있던 것을 메타 문서 전체로 확장. 적용 범위: `CLAUDE.md` / `docs/` / `lectures/{Sn}/` / `.claude/agents/` / `plans/` / `history.md` / `progress.md` 및 슬라이드 코드 주석. 절·섹션 인용은 `N절` / `의 X` / markdown 헤더 텍스트 그대로 사용. 도구 호환·검색 편의·표기 일관성을 위해 강제. D11과 중복되더라도 메타 문서 적용 명문화 차원에서 분리 유지. 검증: ripgrep으로 코드포인트 매칭(U+00A7 / U+00B6 / U+203B 등).

### E. 인터랙티브 (6개)
- **E1**. 실제 통합 강제 — placeholder 빌드 X
- **E3**. Stack carousel — 누적 좌→우, 자동 중앙 포커스
- **E4**. 단계 양방향 이동 — 선택 기억
- **E5**. 시뮬레이션 자유 진입 — 문제 직접 선택
- **E6**. 단일 영역 교체 — 16:9 SlideFrame, 영역 비율 ≤ 70%
- **E10** ⭐ v2 신규. 8타입별 기본 인터랙티브 보장. 강사 명시(`@interactive`) 우선

### F. 파이프라인 (6개)
- **F1**. **미니 사이클** — `####` 단위 (1-5장) 6단계
- **F2**. quality-judge = 감산 통합 + coverage 검증
- **F3**. creative-judge = 가산 평가 5축
- **F4**. design 검증 = utility 함수
- **F5**. 사전(quality-judge) + 사후(render-validator) 검증
- **F6**. `####` 단위 강사 검증 (모호 시만 게이트 — 자동 통과 기본)

---

## 7. Decision Matrix — 32개 공통 vs profile 우선순위

| 카테고리 | 우선순위 | 비고 |
|---|---|---|
| A1-A8 | rule_first | 프로젝트 정체성. A1/A6는 v2 형식 강제. A7/A8은 S3+ 실습 SSOT |
| B5, B6, B7 | rule_first | 시퀀스 결정 = 작성자 (`####` 순서) |
| C1-C9 | session_specific | 세션별 분리 |
| D1-D20 | rule_first | 시각적 일관성. D13/D14는 2026-05-13 신규 (S3 이론 재수정 후 룰화). **D15-D20은 2026-05-15 신규** (S6 Phase 6 27건 결함 분석 후 룰화) |
| E1, E3-E6, E10 | rule_first | 구현 원칙. E10은 8타입 기본 |
| E2, E7 | session_specific | 세션 성격 따라 |
| E8, E9 | profile_replaces | profile.interactivity_density |
| F1-F6 | rule_first | 워크플로우 구조 |

**우선순위 의미**:
- `rule_first`: 32개 절대 우선
- `profile_replaces`: 32개에서 제거됨, profile 항목으로 대체
- `session_specific`: profile.session_specific_decisions로 분리

---

## 8. Sub-Agents

| Agent | 역할 (v2) | Phase |
|---|---|---|
| **lecture-translator** | 파싱 + 자동 매핑 + coverage_map + 미니 사이클 빌드 실행 | α, δ' |
| **layer-composer** | `####` 단위 interactive(8타입 기본+강사 명시) + visual + wireframe | β' |
| **quality-judge** | 감산 통합 (28축, coverage 검증 포함) | γ' |
| **creative-judge** | 가산 평가 (5축, V2 8타입 강도 매핑) | γ' |
| **render-validator** | `####` 단위 + 통합 시각 검증 (coverage 사후 검증) | ε' |

**Utilities** (함수): `design-checker.js`, `capture-checker.js`.

각 agent 상세는 `.claude/agents/{name}.md`.

---

## 9. Profile 시스템 (v2)

세션 특성. **v2에서 자동 도출 / 추론 분리**.

**자동 도출 항목** (lecture.md 파싱 결과 기반):
- `logic_structure`: `###` 챕터 순서 + `####` 묶음 분석 → linear / parallel / cyclic / hierarchical
- `core_visual_kind`: 자동 매핑된 8타입 분포 → diagram(process多) / comparison(comparison多) / simulation(activity多) / data
- `expected_slide_count`: 자동 매핑 후 **실측값** (예측 X)

**추론 항목** (lecture.md 신호 분석):
- `interactivity_density`: low(3-5) / medium(6-9) / high(10-13) — 인터랙티브 후보 카운트
- `tone_strength`: soft / balanced / strong — 톤 신호

**작동**:
1. lecture-translator α에서 자동 도출 + 추론
2. 추론 신뢰도 low → fall-back
3. Gate-1에서 강사 결정
4. profile.yaml status: confirmed → 미니 사이클 진입
5. 모든 agent가 profile 준수

**세션 차별성**: profile은 독립 도출. 차별성은 creative-judge V3에서 별도 검증.

상세는 `docs/profile-system.md`.

---

## 10. 작업 시작 전 체크리스트

**필수**:
- [ ] `history.md`의 `active_rules` (만료 검사 후)
- [ ] `history.md`의 `pattern_counts`
- [ ] `lectures/S{N}/profile.yaml`
- [ ] `docs/decisions.md`, `docs/curation-workflow.md`, `docs/design-system.md`
- [ ] `docs/lecture-format.md` (lecture.md 작성/검증 시)
- [ ] `docs/slide-types.md` (8타입 컴포넌트 작업 시)

**선택 (운영자 자유)**:
- [ ] `progress.md` 읽기 — 진척 추적은 운영자 판단. 의무 X.

---

## 11. 진척 기록

진척 추적 방식은 **운영자 자유** (progress.md 또는 별도 트래커 또는 추적 X 모두 허용).

**새 결정 발생 시** (방식 무관 필수):
- 9세션 공통 → 6절 추가 + 7절 분류
- 세션 특화 → `lectures/S{N}/profile.yaml`

**결함 발생 시** (방식 무관 필수):
- `history.md`의 `defects`에 yaml 형식 1행

---

## 12. history.md 시스템

**구조**: `active_rules` (만료 90일) + `expired_rules` + `defects` (raw) + `pattern_counts` + `session_specific`.

**작동**:
- 결함 발생 → defects 1행 + pattern_counts 갱신
- 누적 3회 이상 → 룰 후보 → **강사 승인 게이트** → active_rules
- profile 조건 적용 (`applies_when` / `exempt_when`)
- severity 차등 (warn / fail)

**결함 카테고리 (11가지)**: 특수문자/패턴 prop mismatch/라인 분할/인터랙티브 미통합/텍스트 폭증/톤 강제/흐름 끊김/콘텐츠 두께/가독성/**coverage 누락**(v2 신규)/기타.

상세는 `docs/history-system.md`.

---

## 13. 메타 메시지

**이 프로젝트의 모든 결정은 강의 자료다.**

- lecture.md 표준화 → S3 PRD 사례
- 미니 사이클 → S6 작업 분할 사례
- 8타입 시스템 → S5 컴포넌트 설계 사례
- 자동 매핑 → S4 자동화 사례

학생이 "잘 만들어졌네"가 아니라 "내가 만들 것의 모범이네"를 느껴야 한다.

---

**[CLAUDE.md v2 끝]**
