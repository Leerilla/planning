# S4 큐레이션 Task 목록 (2026-05-12)

> **세션**: PRD를 에이전트에게 전달하기 (PRD → Agent Context)
> **lecture.md**: 1065줄 — 이론 3 챕터 + 실습 6 Step + 과제 + Tips
> **lecture.md 형식**: 표준 (`####` 콘텐츠 분할 사용 — S3 호환 모드와 다름)
> **이전 세션 누적**: S3 `planning_project/` (D-043/D-044) 폴더 위에 본 세션이 `.claude/CLAUDE.md` 본격 채움 + `rules/` 추가

---

## 강사 결정 (확정 후보)

| # | 결정 | 영향 |
|---|---|---|
| 1 | 표준 형식 채택 (`####` 단위) | α.1 파서 표준 모드 — strip_emoji + D-033/D-034 그대로 |
| 2 | 옵션 B 적용 검토 | 1영역~4영역 정의+시드 6 통합 (각 2 #### → 1슬라이드) 권장 |
| 3 | Tips 6개 → 1슬라이드 6-card 또는 6장 분할 | Phase 1 Gate-1에서 결정 |
| 4 | D-043 `planning_project` 고정 (A7) | S3 만든 폴더 위에 작업 — `git init` / GitHub repo 이름도 일치 |
| 5 | D-044 SSOT 확장 (A8) | `.claude/CLAUDE.md` 본격 양식 / `rules/` 폴더 / `.claude/settings.json` 신규 |

---

## 슬라이드 합계 (목표, Phase 1에서 확정)

| 영역 | 추정 슬라이드 수 |
|---|---|
| 이론 | **~32~36** (자동 5 + §1 7 + §2 ~12 + §3 ~12) |
| 실습 | **~30~36** (자동 1 + Step 0 5 + Step 1 ~9 + Step 2 5 + Step 3 4 + Step 4 6 + Step N 5) |
| 과제 + Tips | **~7** (과제 1 + Tips 6 또는 통합) |
| **총** | **~70~80** (Phase 1 정밀 분석 후 확정) |

---

## D-043 적용 — `planning_project` 고정

S3에서 생성된 `planning_project/` 폴더 위에 본 세션이 `.claude/CLAUDE.md` + `rules/` + `.claude/settings.json` 추가. GitHub repo 이름도 `planning_project`.

| lecture.md 영역 | 슬라이드 적용 |
|---|---|
| Step 0-2 작업 폴더 + git 초기화 (L487~) | `cd planning_project && git init` |
| Step 4 GitHub repo 이름 (L863~) | `planning_project` |

---

## D-044 적용 — `student-project-reference.md` SSOT 확장

S4가 본격 채우는 docs:
| docs | 본 세션 작업 | reference.md 참조 절 |
|---|---|---|
| `.claude/CLAUDE.md` 4영역 | Step 1 1차 초안 → AI 개선 → 작업자 수정 → 검증 루프 | §3.5 |
| `docs/rules/` (신규) | Step 2 rules/ AI 채우기 | (확장 항목 필요 시 §3.6 신설 검토) |
| `.claude/settings.json` (신규) | Step 3 Permissions | (확장 §3.7 검토) |
| `.gitignore` | Step 4 GitHub 셋업 | (확장 §3.8 검토) |

**충돌 시 SSOT 우선** — `.claude/CLAUDE.md` 양식이 lecture.md와 충돌하면 reference.md 우선 (강사 협업 갱신).

---

## Phase 0 — Pre-task (완료, 2026-05-12)

- [x] **S4-T0.1** 기존 자산 점검 ✅ — `src/components/slides/s4/` 부재 확인, placeholder `theory/index.js` + `activity/index.js` 신규 (빈 배열) + `deck-registry.js`에 s4 entry 등록
- [x] **S4-T0.2** lecture-translator α.1 파서 점검 ✅ — 표준 형식 채택 (`####` 콘텐츠 분할 / `### emoji` 챕터 표지 / `### Step N` 실습 섹션 표지) — S3 호환 모드와 다름, classify_header() + strip_emoji() 그대로 작동

---

## Phase 1 — 통합 분석 (Gate-1) (완료, 2026-05-12)

- [x] **S4-T1.1** `profile.yaml` (confirmed) + `spec.md` § 1 신규 ✅
  - `logic_structure`: hierarchical (3 챕터 + 6 Step 순차)
  - `core_visual_kind`: comparison (4영역 / OODA / Permissions / 안티 vs 권장 다수) + diagram (OODA 4단계, AI 검증 5단계)
  - **`expected_slide_count`: 85** (이론 41 + 실습 44 — spec § 1.2 매핑 행 85개 검증)
  - `interactivity_density`: medium (BAD/GOOD toggle + sequential + 4-card + inline 2-area)
  - `tone_strength`: balanced (단정 3 + 안티 3 + 메타 A4)
  - spec § 1.1 헤더 트리 yaml + § 1.2 자동 매핑 (이론 41 + 실습 44) + § 1.3 coverage_map (L1~L1065 100%)
- [x] **S4-T1.2** Gate-1 강사 검토 ✅ (reasonable defaults 자동 통과)
  - decisions_resolved 5건:
    1. profile 자동 도출 → confirmed (그대로)
    2. 미니 사이클 분할 → Task.md 명시안 (§2 3개 / §3 2개)
    3. 옵션 B 통합 → 확정 (S3 패턴 일관)
    4. Tips 6 카테고리 → 각 1슬라이드 (6장)
    5. 메뉴 캡처 → 텍스트 설명 위주 (S3와 동일)
  - `profile.yaml status: confirmed` → Phase 2 진입 가능

---

## Phase 2 — 이론 미니 사이클 (3 챕터 + 자동 2장) (완료, 2026-05-12)

- [x] **S4-T2.0a/b** 자동 ✅ — `01-session-cover` + `02-toc` (3 챕터 Objectives)
- [x] **S4-T2.1 §1 AI 에이전트와 대화하는 법** (8장) ✅ — `03-c1-cover` ~ `10-c1-terms`
- [x] **S4-T2.2 §2-A 4영역 한눈 + 1·2영역** (5장) ✅ — `11-c2-cover` ~ `15-c2-area2-seed`
- [x] **S4-T2.3 §2-B 3·4영역 + 단정 + 비교** (5장) ✅ — `16-c2-area3-seed` ~ `20-c2-pitfalls`
- [x] **S4-T2.4 §2-C AI 검증 루프** (6장) ✅ — `21-c2-ai-verify-intro` ~ `26-c2-terms`
- [x] **S4-T2.5 §3-A OODA** (5장) ✅ — `27-c3-cover` ~ `31-c3-third-assertion`
- [x] **S4-T2.6 §3-B Permissions** (10장) ✅ — `32-c3-permissions-3` ~ `41-c3-terms`
- **빌드 검증** ✅ — `/sessions/[slug]/[deck]` 60.1 → 60.2 kB (S4 theory 41장 통합)

---

## Phase 3 — 실습 미니 사이클 (8 + 자동 1, 44장) (완료, 2026-05-12)

- [x] **S4-T3.0** 실습 목차 자동 ✅ — `01-activity-toc`
- [x] **S4-T3.1 Step 0 환경 진단** (5장) ✅ — `02-step0-cover` ~ `06-step0-validation` (D-043 planning_project + git init)
- [x] **S4-T3.2 Step 1 CLAUDE.md 협업 작성** (8장) ✅ — `07-step1-cover` ~ `14-step1-validation` (1-1~1-4 inline 2-area 통합)
- [x] **S4-T3.3 Step 2 PRD 참조 + 환경 구축** (6장) ✅ — `15-step2-cover` ~ `20-step2-validation` (docs/rules/ + CLAUDE.md §5)
- [x] **S4-T3.4 Step 3 settings.json + Permissions** (5장) ✅ — `21-step3-cover` ~ `25-step3-validation` (의도된 차단 시연)
- [x] **S4-T3.5 Step 4 GitHub 셋업 + 초기 커밋** (7장) ✅ — `26-step4-cover` ~ `32-step4-validation` (planning_project repo + 자연어 커밋)
- [x] **S4-T3.6 Step N 정리·회고** (5장) ✅ — `33-stepN-cover` ~ `37-stepN-validation`
- [x] **S4-T3.7 과제** (1장) ✅ — `38-assignment`
- [x] **S4-T3.8 Tips 6 카테고리** (6장) ✅ — `39-tip-1-folder` ~ `44-tip-6-system` (각 ### 안 2~3 #### 통합 card)
- **빌드 검증** ✅ — `/sessions/[slug]/[deck]` 60.2 → 77 kB (S4 activity 44장 통합, +16.8 kB)

---

## Phase 4 — Final ε (통합 검증) (완료, 2026-05-12)

- [x] **S4-T4.1** ε.1 npm build ✅ — 9/9 페이지 통과 (`/sessions/[slug]/[deck]` 60.2 → 77 kB)
- [x] **S4-T4.2** ε.2 capture-checker ✅ — N/A (CaptureSlide 사용 0건)
- [x] **S4-T4.3** ε.3 design-checker 5축 ✅ — 0 violation (emoji JSX 0건 / § 0건 / hex 0건 / rounded-lg 0건 / pattern prop mismatch 0건)
- [x] **S4-T4.4** ε.4 coverage 사후 ✅ — lecture.md L1~L1065 85장 매핑 100%
- [x] **S4-T4.5** ε.5 history.md 갱신 ✅ — § 0에 S4 Sprint 완료 기록 + D-044 SSOT 확장 예고 (§3.6/§3.7/§3.8)
- [x] **S4-T4.6** ε.6 spec § 5 Final Sign-off ✅

---

## Phase 5 — S4Form 제출 인프라 (완료, 2026-05-12)

- [x] **S4-P5.1** `S4Form.jsx` 신규 ✅ — 5 fieldset:
  - (1) CLAUDE.md 4영역 (각 textarea) + 총 줄 수 (200 미만)
  - (2) AI 검증 루프 (반복 횟수 + 마지막 요약 + 의도 일치 체크)
  - (3) .claude/settings.json (템플릿 적용 + deny 차단 통과 체크)
  - (4) GitHub planning_project repo URL + 초기 셋업 커밋 메시지
  - (5) 회고 3 질문 (AI 검증 효과 / 가장 모호한 영역 / 다음 단계 준비)
- [x] **S4-P5.2** `SubmitForm.jsx` — s4 분기 추가 ✅
- [x] **S4-P5.3** `/admin` — `SUBMIT_SUPPORTED_SLUGS`에 `'s4'` 추가 ✅
- **빌드 재검증** ✅ — `/sessions/[slug]/submit` 6.95 → **8.66 kB** (S4Form 통합, +1.71 kB)

---

## Phase 6 — 강사 검증 + 결함 수정 사이클 (2026-05-13)

> 입력: `lectures/S4/request.md`
> 범위: 이론 6건 + 실습 11건 = **결함 17건**
> Task 설계 규칙: 한 Task = 한 결함, 변경 대상 파일 inline 코드, request 원문 인용

### 이론 결함

- [x] **S4-T6.1** 이론 #10 본문 폰트 — `s4/theory/10-c1-terms.jsx`
  - request: '#10 본문 크기 키우기'
  - 처리: term `text-base → text-lg`, definition `text-sm → text-base`, gap `gap-y-3 → gap-y-4`

- [x] **S4-T6.2** 이론 #18 타이틀 폰트 축소 — `s4/theory/18-c2-second-assertion.jsx`
  - request: '#18, #21, #31 타이틀 크기 줄여서 가독성 높이기'
  - 처리: **KeyMessage 패턴에 `size: 'sm'` prop 신규 추가** (`clamp(28px, 4vw, 52px)`) + wrapper에 `size="sm"` 명시

- [x] **S4-T6.3** 이론 #21 타이틀 폰트 축소 — `s4/theory/21-c2-ai-verify-intro.jsx`
  - 처리: T6.2와 동일 (`size="sm"`)

- [x] **S4-T6.4** 이론 #24 본문 폰트 — `s4/theory/24-c2-seed-verify.jsx`
  - request: '#24 본문 크기 키우기 : 가독성 확보'
  - 처리: pre `text-xs → text-sm` (p-3 → p-4), 점검 `text-sm → text-base` (OK 라벨 + 항목 + 결과)

- [x] **S4-T6.5** 이론 #31 타이틀 폰트 축소 — `s4/theory/31-c3-third-assertion.jsx`
  - 처리: T6.2와 동일 (`size="sm"`)

- [x] **S4-T6.6** 이론 #39 settings.json 파일 경로 + 키 이름 변경 — `s4/theory/39-c3-recommended-settings.jsx`
  - request: '#39 어떤 파일에 설정을 해줘야 하는지 명시 필요하고 "auto_allow"->"allow", "auto_deny"->"deny", "ask_before" -> "ask"로 변경'
  - 처리: 파일 경로 명시 inline 라벨 ("파일 경로 · .claude/settings.json") + JSON 키 변경 (`auto_allow → allow`, `ask_before → ask`, `deny` 그대로)

### 실습 결함

- [x] **S4-T6.7** 실습 #9~#12 본문 폰트 — `s4/activity/09~12-*.jsx` (4 파일)
  - request: '#9 ~ #12 본문 텍스트 크기 키우기'
  - 처리: pre `text-[11px] / text-xs → text-sm` 일괄, 점검 항목 `text-sm → text-base`

- [x] **S4-T6.8** 실습 #15 § emoji 제거 — `s4/activity/15-step2-cover.jsx`
  - request: '#15 `§` 이모지 제거'
  - 처리: objectives 마지막 항목 "§5 시스템 설계 참조 지침" → "시스템 설계 참조 지침" (§ 제거 + 자연 문구로)
  - 적용 룰: D-035 (학생 화면 특수문자 제거)

- [x] **S4-T6.9** 실습 #18 본문 폰트 — `s4/activity/18-act-2-3-fill.jsx`
  - 처리: pre `text-sm → text-base`

- [x] **S4-T6.10** 실습 #19 본문 폰트 — `s4/activity/19-act-2-4-claude-ref.jsx`
  - 처리: pre `text-xs → text-sm`

- [x] **S4-T6.11** 실습 #30 본문 폰트 — `s4/activity/30-act-4-4-commit.jsx`
  - 처리: 좌측 pre `text-xs → text-sm`, 우측 pre `text-[11px] → text-sm` (p-3 → p-4 동시)

- [x] **S4-T6.12** 실습 settings.json 권장 템플릿 — `s4/activity/23-act-3-2-template.jsx` (강사 #32 매핑 보정)
  - request: '#32 "auto_allow"->"allow", "auto_deny"->"deny", "ask_before" -> "ask"로 변경'
  - **매핑 보정**: 강사 #32 = step4-validation으로 settings.json 키 없음 → 실제 권장 템플릿 슬라이드는 #23 (act-3-2-template). 본 Task에서 #23 수정. 강사 슬라이드 번호 카운팅 차이 가능 (보고)
  - 처리: JSON 키 변경 + 파일 경로 명시 inline 라벨 (이론 #39와 동일 패턴)

- [x] **S4-T6.13** 실습 #42 OODA 팁 줄바꿈 (2건) — `s4/activity/42-tip-4-ooda.jsx`
  - 처리: 두 카드 본문에 `<br />` 줄바꿈

- [x] **S4-T6.14** 실습 #43 GitHub 팁 줄바꿈 (2건) — `s4/activity/43-tip-5-github.jsx`
  - 처리: 두 카드 본문에 `<br />` 줄바꿈

- [x] **S4-T6.15** 실습 #44 시스템 환경 팁 줄바꿈 (2건) — `s4/activity/44-tip-6-system.jsx`
  - 처리: 두 카드 본문에 `<br />` 줄바꿈

### Phase 6 검증

- [x] **S4-T6.ε** npm build 통과 + 시각 확인
- [x] **S4-T6.σ** history.md § 0 "S4 Phase 6 결함 수정 완료 (17건)" 블록 추가
- [ ] **S4-T6.f** spec.md § 5 Final Sign-off 갱신 (강사 시각 재검증 후)

---

## 핵심 적용 룰 (S1/S2/S3 일관)

- 미니 사이클 = `###` 섹션 단위 (D-034)
- 자동 통과 룰 / 100% coverage / emoji 학생 화면 0건 (D-035)
- D-041 화살표 sequence + D-042 패턴 props 확장
- D-043 `planning_project` 고정 (A7)
- D-044 student-project-reference.md SSOT (A8)

---

## 변경 파일 매트릭스

### 신규
- `lectures/S4/profile.yaml`
- `lectures/S4/spec.md`
- `src/components/slides/s4/theory/*.jsx` (~32~36개)
- `src/components/slides/s4/activity/*.jsx` (~30~36개)
- `src/components/slides/s4/theory/index.js`
- `src/components/slides/s4/activity/index.js`
- `src/components/submit/S4Form.jsx`

### 갱신
- `src/lib/deck-registry.js` (S4 theory + activity 등록)
- `src/components/submit/SubmitForm.jsx` (s4 분기)
- `src/app/admin/page.js` (`SUBMIT_SUPPORTED_SLUGS`)
- `history.md` (Phase 4)
- `docs/student-project-reference.md` (§3.6/§3.7/§3.8 확장 검토)

### 재사용 (변경 X)
- `src/components/slides/patterns/*` (모든 패턴)
- `src/components/slides/types/*`
- Phase 5 인프라 (KV / API / 라우팅 / PasswordGate)

---

**[S4 Task 청사진 — Phase 0부터 진행, slide count는 Phase 1 정밀 분석 후 확정]**
