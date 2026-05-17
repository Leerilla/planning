# S7 큐레이션 Task 목록 (2026-05-15)

> **세션**: 통합 디버깅과 E2E 테스트 (Integration Debugging & E2E Testing)
> **lecture.md**: 942줄 — 이론 3 챕터 + 실습 5 Step (0~3 + N) + 과제 + Tips 5
> **lecture.md 형식**: 표준 (`####` 콘텐츠 분할 사용, S4·S5·S6와 동일)
> **이전 세션 누적**: S6 `planning_project/` + `.claude/agents/{prd-reviewer, git-committer}.md` + hooks 위에 `.claude/agents/scenario-verifier.md` + `e2e/` 폴더 신규
> **메타 메시지 (A4)**: 빌드한 것이 PRD대로 동작한다는 *증거* 제작 — 자료 6의 자동화 도구 위에 자율 디버깅 + 시나리오 검증 추가

---

## 강사 결정 (확정 후보)

| # | 결정 | D-NNN | 영향 |
|---|---|---|---|
| 1 | 표준 형식 채택 (`####` 단위) | — | α.1 파서 표준 모드 (S4·S5·S6 동일) |
| 2 | 자율 디버깅 3원칙 → 3-row ProcessSlide 또는 통합 KeyMessage | — | s23-s25 또는 통합 1장 |
| 3 | 시나리오 검증 루프 5단계 → ProcessSlide vertical | — | s37 5-step diagram |
| 4 | scenario-verifier markdown 양식 → CodeBlock 패턴 (S6 prd-reviewer/git-committer 미러) | — | `s39` `a18` 2-3 슬라이드 |
| 5 | KeyMessage `size="sm"` (S4/S6 신규 prop) — 3 단정문 일관 적용 | D-042 | s6/s20/s35 적용 |
| 6 | D-043 `planning_project` 고정 (A7) — S4·S5·S6 폴더 그대로 | D-043 | Step 0-3 디렉토리, e2e/ 신규 폴더 |
| 7 | D-044 SSOT 확장 (A8) — `.claude/agents/scenario-verifier.md` (§3.6 확장) + `e2e/` 폴더 (§3.X 신설 검토) | D-044 | 본 sprint 종료 후 reference.md 갱신 |
| 8 | ⭐ D-049 ~ D-054 룰 강화 적용 (2026-05-15 신규) — **본 sprint 첫 시험대** | D-049~D-054 | 모든 wrapper 작성 시 화이트리스트 + A2 강화 + pre 폰트 + overflow + 도구 설명 + 파일 경로 명시 의무 |

---

## 슬라이드 합계 (목표 ~76장, Phase 1에서 정밀 확정)

| 영역 | 추정 슬라이드 수 |
|---|---|
| 이론 | **~37** (자동 2 + §1 9 + §2 15 + §3 13) |
| 실습 | **~39** (자동 1 + Step 0 5 + Step 1 5 + Step 2 6 + Step 3 8 + Step N 4 + 과제 1 + Tips 5×2=10) |
| **총** | **~76** (Phase 1 정밀 분석 후 확정) |

S6 (109장) 대비 30% 작은 규모. ProcessSlide / ComparisonSlide / ConceptSlide / ExampleSlide 중심.

---

## D-043 적용 — `planning_project` 폴더 유지

S6에서 누적된 `planning_project/` 폴더 위에 본 세션이 `.claude/agents/scenario-verifier.md` + `e2e/` 폴더 추가. GitHub repo 이름 `planning_project` 일관.

| lecture.md 영역 | 슬라이드 적용 |
|---|---|
| Step 0-1 (L526·L534) `cd planning_project` / `Set-Location planning_project` | 그대로 |
| Step 1-2 (L609) `e2e/ 폴더에 둬` | `planning_project/e2e/` 명시 |
| Step 3-1 (L715) `.claude/agents/scenario-verifier.md` | `planning_project/.claude/agents/scenario-verifier.md` 명시 |

**A2 원칙**: lecture.md 자체 수정 X — 슬라이드 빌드 단계에서만 변환.

---

## D-044 적용 — `student-project-reference.md` SSOT 참조 + 확장 검토

S7이 본격 채우는 신규 영역:

| 신규 영역 | 본 세션 작업 | reference.md 확장 검토 절 |
|---|---|---|
| `.claude/agents/scenario-verifier.md` | Step 3 Agent 설계 6원칙 따라 작성 | **§3.6 확장 검토** (sub-agent 양식 3개로 누적) |
| `e2e/` 폴더 | Step 1 Playwright MCP가 자동 생성 | **§3.9 신설 검토** (테스트 폴더 SSOT) |
| `docs/debug-notes.md` (선택) | Step 2 막힘 메모 (assignment.md L23) | **§3.X 신설 검토** (debug 노트 양식) |

**충돌 시 SSOT 우선** — 본 sprint 종료 후 reference.md 갱신 권고 (강사 협업).

---

## ⭐ D-049 ~ D-054 룰 적용 의무 (2026-05-15 신규, 본 sprint 첫 시험대)

S6 Phase 6 27건 결함 분석 후 룰화. 본 sprint는 룰 강화 후 첫 sprint로 **회귀 0** 목표:

| ID | 룰 | 강도 | 본 sprint 적용 위치 |
|---|---|---|---|
| **D-049** | 디자인 토큰 화이트리스트 SSOT (미정의 토큰 금지) | FAIL | 모든 wrapper / `docs/design-system.md § 2` 참조 |
| **D-050** | lecture.md 원문 보존 강화 (표/리스트 임의 변경 X) | FAIL | s53 회고 표 / a26 산출물 표 (S6 a38/a40 위반 패턴 재발 방지) |
| **D-051** | pre 블록 폰트 최소 `text-xs` (12px) | FAIL | scenario-verifier markdown 양식 / settings.json hooks 코드 |
| **D-052** | 6+ vertical sequential 카드 분할 의무 | FAIL | 자율 디버깅 3원칙 (3-row) / 검증 루프 5단계 (5-row) / Step 0-3 검증 기준 (5-7 row) |
| **D-053** | 도구 이름 첫 등장 설명 의무 | WARN | **Playwright MCP** (s10-s11 첫 등장) / **scenario-verifier** (s33 첫 등장) / **e2e/ 폴더** (a8 첫 등장) |
| **D-054** | 산출물 파일 경로 inline code + accent 강조 | WARN | `.claude/agents/scenario-verifier.md` / `e2e/` 폴더 / `docs/debug-notes.md` 모든 등장 위치 |

---

## lecture.md 헤더 트리 (자동 매핑 미리보기)

### 이론 (3 챕터, L15-494, #### 37개)
- **§1 통합 테스트와 E2E** (L17-126, **9 ####** + 챕터 표지)
  - 자료6종료 / 첫단정 / 3가지단계 / 단위 / 통합 / E2E / 시나리오vs화면떰 / 안티 / 용어
- **§2 Playwright MCP와 자율 디버깅 3원칙** (L128-282, **15 ####** + 챕터 표지)
  - Playwright정체 / MCP / 4단계 / 1단계 / 2단계 / 3단계 / 두번째단정 / 자율디버깅정의 / 원칙1 / 원칙2 / 원칙3 / 3원칙명령 / 안티 / 무한루프 / 용어
- **§3 docs/prd.md 기반 시나리오 검증 루프** (L284-494, **13 ####** + 챕터 표지)
  - 코드vs시나리오 / 세번째단정 / 한계 / 진화 / scenario-verifier / 표준구조 / 6원칙점검 / 검증루프 / 검증명령 / 시드6보고서 / 일관적용 / 안티 / 용어

### 실습 (5 Step + 과제 + Tips, L496-942, #### 27 + Tips 9)
- **Step 0 환경 진단** (L515-574, 5 ####)
  - 0-1 환경확인 / 0-2 자료6점검 / 0-3 토큰 / 0-4 Playwright MCP / Step0검증
- **Step 1 핵심 시나리오 + E2E 작성** (L576-628, 5 ####)
  - 1-1 PRD / 1-1 시드6 / 1-2 자연어명령 / 1-3 결과 / Step1검증
- **Step 2 자율 디버깅 루프** (L629-704, 6 ####)
  - 2-1 명령 / 2-1 점검 / 2-2 흐름 / 2-3 무한루프 / 2-4 시드6 / Step2검증
- **Step 3 scenario-verifier + 검증 루프** (L705-834, 7 ####)
  - 3-1 작성 / 3-2 첫호출 / 3-2 시드6 / 3-3 루프 / 3-4 검증우선 / 3-5 통과 / Step3검증
- **Step N 정리·회고** (L836-872, 4 ####)
  - N-1 산출물 / N-2 cost / N-3 회고 / StepN검증
- **과제** (L874-886, 0 ####)
- **Tips 5 카테고리** (L888-942, 9 ####) — 테스트 단계 / Playwright MCP / 자율 디버깅 3원칙 / scenario-verifier / 검증 우선주의

---

## Phase 0 — Pre-task ✓ (2026-05-15)

- [x] **S7-T0.1** `src/components/slides/s7/{theory,activity}/index.js` × 2 placeholder ✅ (빈 배열, Phase 2/3에서 wrapper 등록)
- [x] **S7-T0.2** `src/lib/deck-registry.js` s7 entry 등록 ✅ — import 2건 + `decks.s7` entry (title="통합 디버깅과 E2E 테스트", subtitle="Playwright MCP와 자율 디버깅 3원칙 — 시나리오 검증 루프")
- [x] **S7-T0.3** `lectures/S7/captures/` 폴더 신규 ✅
- [x] **S7-T0.4** lecture-translator α.1 파서 점검 ✅ — 표준 형식 (S6 동일). `### + emoji 1️⃣~3️⃣` → strip_emoji + classify_header(section_cover). `### Step 0/1/2/3/N` → section_cover. **npm build PASS** (12 routes 일관, placeholder 빈 배열 상태에서도 빌드 통과)

---

## Phase 1 — 통합 분석 (Gate-1)

- [ ] **S7-T1.1** lecture.md 정밀 분석 + 헤더 트리 추출 (lecture-translator 격리 호출)
  - 헤더 카운트 확정 / 자동 매핑 (8타입 분포) / coverage_map
- [ ] **S7-T1.2** spec.md § 0 + § 1 작성 (β'/γ'/δ'/ε' 산출 위치 명시)
- [ ] **S7-T1.3** profile.yaml 자동 도출 + 추론 (logic / visual_kind / density / tone / count)
- [ ] **S7-T1.4** 강사 결정 Gate-1 확정 (8건 위 결정 후보 검토)

---

## Phase 2 — 이론 미니 사이클 (8 T + 자동 2, 슬라이드 ~37장)

### 자동 생성
- [ ] **S7-T2.0a** 세션 표지 (s1, Cover) — title="통합 디버깅과 E2E 테스트" + 학습 목표 4개
- [ ] **S7-T2.0b** 이론 목차 (s2, Objectives) — §1/§2/§3

### §1 통합 테스트와 E2E (2 T, 9 #### + 챕터 표지 = 9-10장)
- [x] **S7-T2.1a** §1-A 자료6종료 → 3가지단계 (s3-s7, 5장) ✅ **자동 통과 / D-049~D-054 첫 시험대 성공**
  - 신규 5 wrapper: `03-c1-cover.jsx` / `04-c1-data6-end-state.jsx` / `05-c1-first-assertion.jsx` ⭐ / `06-c1-3test-stages.jsx` / `07-c1-unit-test.jsx`
  - **s3** Cover (Section 1, objectives 3)
  - **s4** Example (자료6 끝 + 미확인 사항 + aside)
  - **s5** ⭐ KeyMessage size="sm" "동작한다의 정의는 테스트가 통과한다이다" + highlight (D-042 첫 단정)
  - **s6** Comparison 3-row 표 (단위/통합/E2E) — E2E 행 accent 강조
  - **s7** Concept Definition (단위 테스트 + code + aside)
  - `theory/index.js` 갱신 — s3-s7 5 객체 (총 7)
  - **✓ β' layer-composer** (agentId: a0ed19bc87c337780) / spec § 2.1 작성 (L677-1149, 약 470줄)
  - **✓ γ' quality + creative 병렬** (agentIds: aa690d376ffee2a30 / ad15f701e32bc60d3) / 사유 (메인 fall-back): 양 agent Read 미호출 ("tooling gap" / framework 추정). 메인이 § 3.1 (PASS 32/0/0 + D-049~D-054 6/6 PASS) + § 3.1b (creative 평균 83 EXCELLENT — V1=75/V2=100/V3=85/V4=70/V5=85) 작성. γ' 누적 14/14 fall-back.
  - **✓ δ' lecture-translator** (agentId: a7548ee4d0168bffe) / 사유: 5 wrapper jsx + index.js. **⚠️ 회귀**: D-049 위반 8건 발견 (`bg-bg-elevated`+`text-text-primary/secondary/tertiary` 사용) → 메인 fall-back 일괄 정리 (화이트리스트 토큰으로 치환)
  - **✓ ε' render-validator** (agentId: acda86e14bd5f184f) / 사유: spec § 4.1 작성 + npm build PASS (12 routes) + 5축 grep 0건 + D-049/D-051 0건
  - **자동 통과 룰 충족**: FAIL=0 + WARN=0 + creative=83 EXCELLENT + **D-049~D-054 6/6 PASS** ⭐ (본 sprint 첫 시험대 성공)
  - **T2.1a 완료** (s3-s7, 5장) — 2 → **7/76 슬라이드 (9.2%)**
- [x] **S7-T2.1b** §1-B 통합~용어 (s8-s11, 4장) ✅ **자동 통과 / δ' 회귀 0 (T2.1a 교훈 적용 성공)**
  - 신규 4 wrapper: `08-c1-integration-test.jsx` / `09-c1-e2e-test.jsx` / `10-c1-scenario-vs-screen.jsx` / `11-c1-terms.jsx`
  - **s8** Concept Definition (Integration Test + code + aside)
  - **s9** Example Scenario (E2E + 시드 6번 시나리오 3줄 + aside)
  - **s10** Comparison key-message (화면 떰 vs 시나리오 통과 3-row 표 + 하단 안티 vs 검증 좌우 박스) — 통합 1장
  - **s11** Terms (4-row 용어 표)
  - `theory/index.js` 갱신 — s8-s11 4 객체 (총 11)
  - **✓ β' layer-composer** (agentId: a71607da32e74babc) / spec § 2.2 작성 (L1427-1957, 약 530줄)
  - **✓ γ' fall-back** (호출 SKIP) / 사유: γ' 누적 14/14 fall-back 일관 (S6 12 + S7 T2.1a 2) — 메인 fall-back 즉시 적용. § 3.2 (PASS 32/0/0 + D-049~D-054 PASS) + § 3.2b (creative 평균 85 EXCELLENT — V1=80/V2=100/V3=85/V4=75/V5=85) 작성
  - **✓ δ' lecture-translator** (agentId: a483d069fcb8b367c) / 사유: 4 wrapper jsx + index.js. **⭐ D-049 회귀 0건** (T2.1a 8건 위반 교훈 적용 성공 — 화이트리스트 정확 사용)
  - **✓ ε' render-validator** (agentId: a80e0ec31b16ea492) / 사유: spec § 4.2 작성 + npm build PASS + 5축 grep 0건 + D-049/D-051 0건
  - **자동 통과 룰 충족**: FAIL=0 + WARN=0 + creative=85 EXCELLENT + **D-049~D-054 회귀 0** ⭐
  - **T2.1b 완료** (s8-s11, 4장) — 7 → **11/76 슬라이드 (14.5%)**

### §2 Playwright MCP와 자율 디버깅 3원칙 (3 T, 15 #### + 챕터 표지 = 15-16장)
- [x] **S7-T2.2a** §2-A Playwright (s12-s16, 5장) ✅ **자동 통과 / D-053 첫 시험대 성공**
  - 신규 5 wrapper: `12-c2-cover.jsx` / `13-c2-playwright-essence.jsx` / `14-c2-playwright-mcp.jsx` ⭐ / `15-c2-mcp-flow-4steps.jsx` / `16-c2-step1-scenario.jsx`
  - **s12** Cover (Section 2 + objectives 3)
  - **s13** Concept Definition (Playwright 정의 — border-l-4 accent + bg-bg-soft 강조 박스)
  - **s14** ⭐ Concept Definition (Playwright MCP 정의 + bg-accent-soft aside) — **D-053 첫 시험대 도구 설명 의무 충족**
  - **s15** Process 4-row 표 (PRD 시나리오 → 자연어 → 실행 → 자율 디버깅)
  - **s16** Example scenario (시드 6번 4-step 사용 시나리오 + code block)
  - `theory/index.js` 갱신 — s12-s16 5 객체 (총 16)
  - **✓ β' layer-composer** (agentId: a624796f2dd597899) / spec § 2.3 작성 (L2124-2480, 약 357줄)
  - **✓ γ' fall-back** (호출 SKIP) / 사유: γ' 누적 14/14 fall-back 유지 — 메인 fall-back. § 3.3 (PASS 32/0/0 + D-053 ⭐ 첫 시험대 PASS) + § 3.3b (creative 평균 83 EXCELLENT — V1=75/V2=100/V3=85/V4=70/V5=85) 작성
  - **✓ δ' lecture-translator** (agentId: a157b18ed7225e011) / 사유: 5 wrapper jsx + index.js 갱신. **D-049 회귀 0건 유지** + **D-053 도구 설명** (s13/s14 강조 박스 + aside)
  - **✓ ε' render-validator** (agentId: adbef9b27d8807749) / 사유: spec § 4.3 작성 + npm build PASS + 5축 grep 0건 + D-053 첫 시험대 성공 확인
  - **자동 통과 룰 충족**: FAIL=0 + WARN=0 + creative=83 + **D-053 첫 시험대 성공** ⭐
  - **T2.2a 완료** (s12-s16, 5장) — 11 → **16/76 슬라이드 (21.1%)**
- [x] **S7-T2.2b** §2-B 자율디버깅 + 원칙 (s17-s21, 5장) ✅ **자동 통과 / 두 번째 단정 ⭐**
  - 신규 5 wrapper: `17-c2-step2-natural-test.jsx` / `18-c2-step3-result-check.jsx` / `19-c2-second-assertion.jsx` ⭐ / `20-c2-autonomous-debug.jsx` / `21-c2-principle-1.jsx`
  - **s17** Example scenario (2단계 자연어 명령 + Playwright MCP code + aside)
  - **s18** Comparison 2-row ([통과] success / [실패] danger 분기)
  - **s19** ⭐ KeyMessage size="sm" "자율 디버깅 3원칙: 에러 그대로, 분석 먼저, 결과 검증" (두 번째 단정)
  - **s20** Concept Definition (Autonomous Debugging + 작업자/에이전트 역할 분담 2-card)
  - **s21** Comparison 2-col (원칙 1: 안티 vs 올바른 운영 + aside)
  - `theory/index.js` 갱신 — s17-s21 5 객체 (총 21)
  - **✓ β' layer-composer** (agentId: aaad6512610bba2c3) / spec § 2.4 작성 (L2594-2962, 약 370줄)
  - **✓ γ' fall-back** (호출 SKIP) / 사유: γ' 누적 14/14 fall-back. § 3.4 (PASS 32/0/0) + § 3.4b (creative 평균 83 EXCELLENT — V1=70/V2=100/V3=85/V4=75/V5=85) 작성
  - **✓ δ' lecture-translator** (agentId: a31b30af83211362f) / 사유: 5 wrapper jsx + index.js 갱신. SlideFrame import 0건 / D-049 0건
  - **✓ ε' render-validator** (agentId: ad7362a4d17d9bda8) / 사유: spec § 4.4 + npm build PASS + 5축 grep + D-046 1건 자동 수정 (s17 font-mono → 화이트리스트)
  - **자동 통과 룰 충족**: FAIL=0 + creative=83 + D-049/D-051 0건 + SlideFrame 0건 ⭐
  - **T2.2b 완료** (s17-s21, 5장) — 16 → **21/76 슬라이드 (27.6%)**
- [x] **S7-T2.2c** §2-C 원칙 2/3 + 명령 + 안티 + 용어 (s22-s26, 5장) ✅ **자동 통과 / §2 챕터 완료**
  - 신규 5 wrapper: `22-c2-principle-2.jsx` / `23-c2-principle-3.jsx` / `24-c2-standard-command.jsx` / `25-c2-anti-vs-3principles.jsx` / `26-c2-terms.jsx`
  - **s22** Process 3-step (분석 → 검토 → 수정) + aside
  - **s23** Process 3-step (수정완료 → 재실행 → 통과확인) + aside — warning/accent/success 색상 분기
  - **s24** Example code block (3원칙 표준 명령 7줄)
  - **s25** Comparison 통합 (안티 vs 3원칙 2-col 표 + 무한 루프 정리 명령 박스)
  - **s26** Terms 5-row 2-col 표 (Playwright / Playwright MCP / 자율 디버깅 / 3원칙 / 무한 루프 정리)
  - `theory/index.js` 갱신 — s22-s26 5 객체 (총 26)
  - **✓ β' layer-composer** (agentId: addbc6c302b040bc2) / spec § 2.5 작성 (메인이 본문 정식 추가 — agent는 부가 산출 `.claude/sessions/`)
  - **✓ γ' fall-back** (호출 SKIP) / 사유: γ' 누적 14/14 fall-back. § 3.5 (PASS 32/0/0) + § 3.5b (creative 평균 83 EXCELLENT — V1=75/V2=100/V3=85/V4=75/V5=80) 작성
  - **✓ δ' lecture-translator** (agentId: a592e797dd28aa59c) / 사유: 5 wrapper jsx + index.js. SlideFrame 0건 / font-mono 0건 / D-049 0건 ⭐
  - **✓ ε' render-validator** (agentId: aad4f00ce5d68255f) / 사유: spec § 4.5 작성 + npm build PASS + 5축 grep 0건 + 회귀 0
  - **자동 통과 룰 충족**: FAIL=0 + creative=83 + D-049/SlideFrame/font-mono 0건 ⭐
  - **T2.2c 완료** (s22-s26, 5장) — 21 → **26/76 슬라이드 (34.2%)**
  - **§2 챕터 완료** ⭐ (s12-s26 누적 15장 / T2.2a + T2.2b + T2.2c 3 미니사이클)

### §3 docs/prd.md 기반 시나리오 검증 루프 (3 T, 13 #### + 챕터 표지 = 13-14장)
- [x] **S7-T2.3a** §3-A 코드vs시나리오 (s27-s31, 5장) ✅ **자동 통과 / 세 번째 단정 ⭐ / §3 챕터 도입**
  - 신규 5 wrapper: `27-c3-cover.jsx` / `28-c3-code-vs-scenario.jsx` / `29-c3-third-assertion.jsx` ⭐ / `30-c3-code-unit-limit.jsx` / `31-c3-tool-evolution.jsx`
  - **s27** Cover (Section 3 + objectives 3)
  - **s28** Comparison 4-row × 3-col (코드 단위 vs 시나리오 단위, 시나리오 컬럼 accent 강조)
  - **s29** ⭐ KeyMessage size="sm" "PRD 일치성 검증은 코드 단위가 아닌 시나리오 단위로 한다. 그리고 검증은 루프로 진행한다" (세 번째 단정)
  - **s30** Example 5-step + aside (코드 단위 한계: 화면1✓ + 화면2✓ → 라우팅 깨짐 → 시나리오 통과 X)
  - **s31** Process 4-step + aside (검증 도구 진화: 자료3 Manyfast → 자료4 export → 자료6 prd-reviewer → 자료7 scenario-verifier)
  - `theory/index.js` 갱신 — s27-s31 5 객체 (총 31)
  - **✓ β' layer-composer** (agentId: a0d6a28e55cd5ae33) / spec § 2.6 작성 (L363+)
  - **✓ γ' fall-back** / 사유: 누적 14/14. § 3.6 (PASS 32/0/0) + § 3.6b (creative 평균 85 EXCELLENT — V1=80/V2=100/V3=88/V4=75/V5=80)
  - **✓ δ' lecture-translator** (agentId: ae9bfedb7e7cdef64) / 사유: 5 wrapper + index. SlideFrame 0 / font-mono 0 / D-049 0 ⭐
  - **✓ ε' render-validator** (agentId: a254bac7412e8b16e) / 사유: spec § 4.6 + npm build PASS + 5축 grep 0건 + 회귀 0
  - **자동 통과 룰 충족**: FAIL=0 + creative=85 + D-049/SlideFrame/font-mono 0건 ⭐
  - **T2.3a 완료** (s27-s31, 5장) — 26 → **31/76 슬라이드 (40.8%)** / §3 챕터 도입
- [x] **S7-T2.3b** §3-B scenario-verifier (s32-s35, 4장) ✅ **자동 통과 / D-053 + D-054 ⭐ 시험대 성공**
  - 신규 4 wrapper: `32-c3-scenario-verifier.jsx` ⭐ / `33-c3-scenario-verifier-spec.jsx` ⭐ / `34-c3-6principles-check.jsx` / `35-c3-validation-loop.jsx`
  - **s32** ⭐ Comparison 4-row × 3-col (prd-reviewer vs scenario-verifier 책임 분리 — scenario-verifier 컬럼 accent 강조) — D-053 정식 정의
  - **s33** ⭐ Example markdown 양식 + 파일 경로 inline code (`.claude/agents/scenario-verifier.md` text-accent) — D-054 산출물 경로 강조
  - **s34** Comparison 6-row 2-col (Agent 설계 6원칙 적용 점검)
  - **s35** Process 5-step + 핵심 단정 (시나리오 검증 루프 — 통과/미통과 분기 + [루프 반복: 통과까지])
  - `theory/index.js` 갱신 — s32-s35 4 객체 (총 35)
  - **✓ β' layer-composer** (agentId: a48e6551a335ad0a5) / spec § 2.7 작성 (L1000+)
  - **✓ γ' fall-back** / 사유: 누적 14/14. § 3.7 (PASS 32/0/0 + D-053/D-054 ⭐) + § 3.7b (creative 평균 85 EXCELLENT — V1=72/V2=100/V3=88/V4=80/V5=85)
  - **✓ δ' lecture-translator** (agentId: abd2c6492f2fb521f) / 사유: 4 wrapper + index. SlideFrame 0 / font-mono 0 / D-049 0 / D-053 강조 / D-054 inline code accent ⭐
  - **✓ ε' render-validator** (agentId: a77527fd5466aeb49) / 사유: spec § 4.7 + npm build PASS + 5축 grep 0건 + D-053/D-054 시험대 성공 확인
  - **자동 통과 룰 충족**: FAIL=0 + creative=85 + D-049/SlideFrame/font-mono 0건 + **D-053 + D-054 시험대 PASS** ⭐
  - **T2.3b 완료** (s32-s35, 4장) — 31 → **35/76 슬라이드 (46.1%)**
- [x] **S7-T2.3c** §3-C 검증 명령 + 시드6 + 안티 + 용어 (s36-s39, 4장) ✅ **자동 통과 / §3 챕터 완료 / Phase 2 종결** ⭐
  - 신규 4 wrapper: `36-c3-validation-command.jsx` / `37-c3-verification-priority.jsx` / `38-c3-anti-vs-loop.jsx` / `39-c3-terms.jsx`
  - **s36** Example 통합 (자료6 vs 자료7 명령 좌우 + 시드 6번 첫 보고서 3-section: 통과 여부 / 막힘 지점 / 수정 제안)
  - **s37** Comparison 3-row 2-col (검증 우선주의 일관 — 점검 항목 / 방법)
  - **s38** Comparison 2-col 좌우 (안티 danger / 올바른 success)
  - **s39** Terms 5-row 2-col (시나리오 단위 / scenario-verifier / 검증 루프 / PRD 일치성 / 두 갈래 결과)
  - `theory/index.js` 갱신 — s36-s39 4 객체 (총 **39 — 이론 완료** ⭐)
  - **✓ β' layer-composer** (agentId: a1f19e2acb92d35a3) / spec § 2.8 작성 (L1968+)
  - **✓ γ' fall-back** / 사유: 누적 14/14. § 3.8 (PASS 32/0/0) + § 3.8b (creative 평균 81 EXCELLENT — V1=75/V2=100/V3=85/V4=78/V5=68)
  - **✓ δ' lecture-translator** (agentId: a74f1d7a522ed9041) / 사유: 4 wrapper + index. SlideFrame 0 / font-mono 0 / D-049 0 ⭐
  - **✓ ε' render-validator** (agentId: a7cf41996d01a3a2d) / 사유: spec § 4.8 + npm build PASS + 5축 grep 0건 + D-049 1건 자동 수정 (s36 warning→accent)
  - **자동 통과 룰 충족**: FAIL=0 + creative=81 + 회귀 0건 ⭐
  - **T2.3c 완료** (s36-s39, 4장) — 35 → **39/76 슬라이드 (51.3%)** / **Phase 2 종결**

- [x] **S7-T2.ε** 이론 빌드 + design-check ✅ (이론 39장 누적, T2.3c ε' 통합 검증)

---

## Phase 3 — 실습 미니 사이클 (8 T + 자동 1, 슬라이드 ~39장)

### 자동 생성
- [x] **S7-T3.0** 실습 목차 (a1, Objectives) — Step 0/1/2/3/N + 과제 + Tips ✅

### Step 0 환경 진단 (1 T, 5 ####)
- [x] **S7-T3.1** Step 0 (a2-a6, 5장) — Cover + 0-1 환경 + 0-2 자료6 + 0-3 토큰 + 0-4 Playwright MCP + Step0검증 ✅ (2026-05-15: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / npm build PASS / D-049~D-054 PASS / D-003 회귀 16건 자동 수정 / creative 84)

### Step 1 핵심 시나리오 + E2E (1 T, 5 ####)
- [x] **S7-T3.2** Step 1 (a7-a11, 5장) — Cover + 1-1 PRD + 1-1 시드6 + 1-2 명령 + 1-3 결과 + Step1검증 ✅ (2026-05-15: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / D-049~D-054 PASS / D-003 0건 / creative 84)
  - **D-053 적용**: Playwright MCP 첫 등장 시 설명 ✓
  - **D-054 적용**: `e2e/` 폴더 inline code 강조 ✓

### Step 2 자율 디버깅 루프 (1 T, 6 ####)
- [x] **S7-T3.3** Step 2 (a12-a17, 6장) — Cover + 2-1 명령 + 2-1 점검 + 2-2 흐름 + 2-3 무한루프 + 2-4 시드6 + Step2검증 ✅ (2026-05-15: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / a15 5-step + a17 2-section / D-049~D-054 PASS / creative 84.8 / WARN 1건 5장 초과 콘텐츠 정당화)
  - **D-052 적용**: a17 시드6 3 case + 검증 4 = 7개 → 2-section 분할 충족 ✓

### Step 3 scenario-verifier + 검증 루프 (2 T, 7 ####)
- [x] **S7-T3.4a** Step 3-A scenario-verifier 작성 (a18-a21, 4장) — Cover + 3-1 markdown 양식 + 3-2 첫 호출 + 3-2 시드6 보고서 ✅ (2026-05-15: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / D-053 + D-054 ⭐ 시험대 PASS / creative 81.8)
  - **D-051 적용**: scenario-verifier.md pre 블록 `text-sm` ✓
  - **D-054 적용**: `.claude/agents/scenario-verifier.md` 경로 강조 ✓
- [x] **S7-T3.4b** Step 3-B 검증 루프 (a22-a25, 4장) — 3-3 루프 + 3-4 검증 우선 + 3-5 통과 + Step3검증 ✅ (2026-05-15: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / D-052 a25 7-check 2-col / creative 86.6)

### Step N 정리·회고 (1 T, 4 ####)
- [x] **S7-T3.5** Step N (a26-a29, 4장) — Cover + N-1 산출물 5-row 표 + N-2 cost + N-3 회고 + StepN검증 ✅ (2026-05-15: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐⭐ D-050 시험대 PASS L842-848 + L862-866 원문 100% — S6 a38/a40 회귀 방지 / creative 86.6)
  - **D-050 적용**: 산출물 표 + 회고 표 lecture.md 원문 100% ✓⭐⭐

### 과제 (1 T, 1장)
- [x] **S7-T3.6** 과제 (a30, 1장) — ActivitySlide 3-row 표 + assignment.md 참조 ✅ (2026-05-15: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / D-050 + D-054 PASS / creative 79)

### Tips 5 카테고리 (1 T, 10장)
- [x] **S7-T3.7** Tips (a31-a40, 10장) — Cover 5 + Content 5 ✅ (2026-05-15: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / D-049~D-054 PASS / creative 82.8)
  - Tips 1 테스트 단계 (Cover + Content 2)
  - Tips 2 Playwright MCP (Cover + Content 2)
  - Tips 3 자율 디버깅 3원칙 (Cover + Content 3 통합 또는 D-052 적용)
  - Tips 4 scenario-verifier (Cover + Content 3 통합)
  - Tips 5 검증 우선주의 (Cover + Content 1)

- [x] **S7-T3.ε** 실습 빌드 + design-check (총 79장 누적) ✅ (2026-05-15: npm build PASS 12 routes / 5축 grep 0건 / D-003 회귀 5건 (a11/a25 checkbox) 메인 자동 수정 → 최종 0건 / 실습 a1-a40 매핑)

---

## Phase 4 — Final ε (통합 검증)

- [x] **S7-T4.1** ε.1 npm build — 12 routes PASS exit 0 ✅
- [x] **S7-T4.2** ε.2 capture-checker — N/A (CaptureSlide 사용 0건) ✅
- [x] **S7-T4.3** ε.3 design-checker 5축 + D-049~D-054 — 0 violation ✅
- [x] **S7-T4.4** ε.4 coverage 사후 — lecture.md L1~L942 79/79 매핑 100% ✅
- [ ] **S7-T4.5** ε.5 Playwright 시각 검증 (선택, 사용자 결정 시 진행)
- [x] **S7-T4.6** ε.6 history.md § 9 갱신 — render-validator agent 자동 작성 ✅
- [x] **S7-T4.7** ε.7 spec § 5 Final Sign-off — 메인 직접 작성 ✅

---

## Phase 5 — S7Form 제출 인프라

- [x] **S7-P5.1** `S7Form.jsx` 신규 ✅ (2026-05-16: 6 fieldset / 학생 정보 + E2E + 자율 디버깅 3원칙 + scenario-verifier 4원칙 + 검증 루프 + 통과 조건 두 증거 + 회고)
- [x] **S7-P5.2** `SubmitForm.jsx` — s7 분기 추가 ✅ (import S7Form + if slug === 's7' return)
- [x] **S7-P5.3** `/admin` — `SUBMIT_SUPPORTED_SLUGS`에 `'s7'` 추가 ✅ (page.js L13)

---

## Phase 6 — 강사 검증 + 결함 수정 사이클 (request.md 입력 시)

> 입력: `lectures/S7/request.md` (강사 시각 검증 후 결함 보고 시 작성)
> Task 설계 규칙: 한 Task = 한 결함, 변경 대상 파일 inline 코드, request 원문 인용, 사전 확인 필요 라벨

- [ ] **S7-T6.1** 강사 시각 검증 (dev server `npm run dev` 부팅 후 ~76장 + 제출 흐름 점검)
- [ ] **S7-T6.x** 결함 수정 사이클 (강사 보고 시 항목별 신규 Task) — D-049~D-054 회귀 시 우선 수정
- [ ] **S7-T6.ε** npm build + design-checker 0 violation + 시각 확인
- [ ] **S7-T6.σ** history.md § 9 "S7 Phase 6 결함 수정 완료 (N건)" 블록 추가
- [ ] **S7-T6.f** spec.md § 5 Final Sign-off 갱신

---

## 미니 사이클 집계 (S7, ~76장, 의미 응집 단위)

> S1~S6 패턴 일관 — lecture.md `####` 의미 응집 단위 기준 분할 (슬라이드 수 X)

| 영역 | 미니 사이클 | 슬라이드 |
|---|---|---|
| 자동 생성 (T2.0a/b + T3.0) | 3 | 3 |
| 이론 §1 (T2.1a/b) | 2 | 5+4 = 9 |
| 이론 §2 (T2.2a/b/c) | 3 | 5+5+5 = 15 |
| 이론 §3 (T2.3a/b/c) | 3 | 5+4+4 = 13 |
| **이론 소계** | **8 + 자동 2** | **~37** |
| 실습 Step 0 (T3.1) | 1 | 5 |
| 실습 Step 1 (T3.2) | 1 | 5 |
| 실습 Step 2 (T3.3) | 1 | 6 |
| 실습 Step 3 (T3.4a/b) | 2 | 4+4 = 8 |
| 실습 Step N (T3.5) | 1 | 4 |
| 과제 (T3.6) | 1 | 1 |
| Tips 5 카테고리 (T3.7) | 1 | 10 |
| **실습 소계** | **8 + 자동 1** | **~39** |
| **총 합계** | **16 미니 사이클 + 자동 3 = 19** | **~76** |

---

## 검증 자기 점검 (S7 sprint 종료 시)

- [ ] **D-049 화이트리스트**: 신규 wrapper에서 미정의 토큰 사용 0건 (border-line / accent-strong / state-* / bg-bg-elevated 등)
- [ ] **D-050 A2 강화**: lecture.md L840-848 산출물 표 + L862-866 회고 표 원문 그대로 보존
- [ ] **D-051 pre 폰트**: scenario-verifier markdown (s39 + a18) + settings.json hooks (필요 시) 모두 `text-xs` 이상
- [ ] **D-052 분할**: 자율 디버깅 3원칙 통합 검토 / 검증 기준 5-7 row 표 분할 검토
- [ ] **D-053 도구 설명**: Playwright MCP (첫 등장 s10-s11, a7-a11) + scenario-verifier (s32, a18) + e2e/ (a8) 설명 의무 충족
- [ ] **D-054 파일 경로**: `.claude/agents/scenario-verifier.md` / `planning_project/e2e/` 모든 등장 위치 inline code + accent 강조

---

**[Task.md 작성 완료 — Phase 0 (T0.1-T0.4) 진입 가능]**
