# S4 spec.md (v2, 2026-05-12)

> S1/S2/S3와 동일 구조 — § 1 분석 → § 2 구성 → § 3 검증 → § 4 빌드/검증 → § 5 Final Sign-off

---

## § 0. Meta

- **session_id**: s4
- **session_title**: PRD를 에이전트에게 전달하기
- **session_subtitle**: CLAUDE.md는 프로젝트의 헌법 — OODA 루프와 Permissions
- **source**: `lectures/S4/lecture.md` (1065줄, 표준 형식 `####` 콘텐츠 분할)
- **assignment**: `lectures/S4/assignment.md` (130줄)
- **checklist**: `lectures/S4/checklist.md` (90줄)
- **profile**: `lectures/S4/profile.yaml` (draft → confirmed Gate-1 후)
- **task tracker**: `lectures/S4/Task.md` (Phase 0 완료, Phase 1 진행 중)
- **start date**: 2026-05-12
- **이전 세션 누적**: S3 `planning_project/` 폴더 위에 `.claude/CLAUDE.md` + `rules/` + `.claude/settings.json` + GitHub 셋업

---

## § 1. Analysis (Phase α, lecture-translator)

### § 1.1 Header Tree (S4 = 표준 형식)

```
# PRD를 에이전트에게 전달하기                              (L1)   → 세션 표지 자동 (D-032)
## 이론                                                    (L15)  → 이론 목차 자동 (D-032)

### 1️⃣ AI 에이전트와 대화하는 법                          (L17)  → 챕터 표지 자동 (D-033 + strip_emoji)
   #### 컨텍스트는 명령보다 중요하다                       (L24)
   #### 첫 단정                                            (L34)
   #### 무상태성의 의미                                    (L40)
   #### CLAUDE.md 운영의 효과                              (L54)
   #### 컨텍스트 앵커링                                    (L61)
   #### 안티패턴 vs 컨텍스트 앵커링                        (L69)
   #### 1️⃣ 챕터 용어 해설                                 (L83)

### 2️⃣ CLAUDE.md 4영역                                    (L91)  → 챕터 표지 자동
   #### 4영역 한눈에 보기                                  (L98)
   #### 1영역: 프로젝트 개요                               (L113)
   #### 1영역 시드 6번 예시                                (L121)
   #### 2영역 시드 6번 예시                                (L133)  ← 정의 한눈 표 흡수
   #### 3영역 시드 6번 예시                                (L153)
   #### 4영역 시드 6번 예시                                (L166)
   #### 두 번째 단정                                       (L182)
   #### PRD vs CLAUDE.md                                   (L186)
   #### 흔히 놓치는 3가지 함정                             (L196)
   #### AI 검증 루프란                                     (L204)
   #### AI 검증 루프 5단계                                 (L210)
   #### 사람 검증 vs AI 검증                               (L229)
   #### 시드 6번 AI 검증 예시                              (L238)
   #### 안티패턴 vs 올바른 검증                            (L258)
   #### 2️⃣ 챕터 용어 해설                                 (L274)

### 3️⃣ OODA 루프와 Permissions                            (L283) → 챕터 표지 자동
   #### OODA 루프란                                        (L290)
   #### OODA 4단계                                         (L296)
   #### Claude Code의 OODA 루프                            (L307)
   #### 세 번째 단정                                       (L333)
   #### Permissions 3단계                                  (L337)
   #### 자동 허용 도구                                     (L345)
   #### 매번 확인 도구                                     (L357)
   #### 절대 금지 도구                                     (L369)
   #### Permissions와 OODA의 연결                          (L380)
   #### 책임 분배의 의미                                   (L388)
   #### 두 극단의 위험                                     (L396)
   #### 권장 settings.json                                 (L405)
   #### 안티패턴 vs 권장 운영                              (L421)
   #### 3️⃣ 챕터 용어 해설                                 (L435)

## 실습                                                    (L445) → 실습 목차 자동 (D-032)

### Step 0: 환경 진단                                      (L463) → 섹션 표지 자동 (D-033)
   #### 0-1 환경 확인 명령                                 (L467)
   #### 0-2 작업 폴더 + git 초기화 (D-043)                 (L487)
   #### 0-3 토큰 베이스라인 + PRD 복사                     (L505)
   #### Step 0 검증 기준                                   (L522)

### Step 1: CLAUDE.md 협업 작성과 AI 검증 루프              (L530) → 섹션 표지 자동
   #### 1-1 빈 CLAUDE.md 생성                              (L538)
   #### 1-1 1차 초안 가이드 (+ 시드 6 통합)                (L550+L577)
   #### 1-2 AI 개선 요청 (+ 시드 6 답변 통합)              (L605+L619)
   #### 1-3 작업자 수정 원칙 (+ 시드 6 수정 후 통합)       (L644+L652)
   #### 1-4 AI 검증 루프 (+ 시드 6 통과 통합)              (L664+L672)
   #### 1-5 분량 점검                                      (L691)
   #### Step 1 검증 기준                                   (L705)

### Step 2: PRD 참조 지침과 초기 환경 구축                 (L713) → 섹션 표지 자동
   #### 2-1 docs/ 구성 + 페르소나·페인포인트 복사 통합     (L721+L731)
   #### 2-2 rules/ 구성 + 폴더 생성 통합                    (L745+L755)
   #### 2-3 rules/ AI에 채우게 하기                         (L773)
   #### 2-4 CLAUDE.md에 참조 지침 추가                     (L787)
   #### Step 2 검증 기준                                   (L807)

### Step 3: settings.json과 Permissions                    (L814) → 섹션 표지 자동
   #### 3-1 .claude/settings.json 생성                     (L818)
   #### 3-2 권장 템플릿 입력                               (L832)
   #### 3-3 의도된 차단 시연                               (L848)
   #### Step 3 검증 기준                                   (L857)

### Step 4: GitHub 저장소 셋업과 초기 커밋                 (L863) → 섹션 표지 자동
   #### 4-1 GitHub 저장소 생성 (메뉴 6 STEP)               (L871)
   #### 4-2 로컬과 원격 연결                               (L888)
   #### 4-3 .gitignore 생성                                (L896)
   #### 4-4 초기 셋업 커밋 (+ 시드 6 커밋 메시지 통합)     (L905+L914)
   #### 4-5 커밋 확인 점검                                 (L928)
   #### Step 4 검증 기준                                   (L937)

### Step N: 정리와 비용 비교                              (L944) → 섹션 표지 자동
   #### N-1 산출물 정리                                    (L948)
   #### N-2 /cost 비교                                     (L963)
   #### N-3 회고 좋은 답 vs 나쁜 답                        (L971)
   #### Step N 검증 기준                                   (L979)

## 과제                                                    (L985) → 콘텐츠 1장 (Checklist + 표)

## Tips                                                    (L999) → 카테고리 6 ### × 1장씩 = 6장

### 폴더와 저장소 일관성                                   (L1001) → 1장 (2 #### 통합 card)
### CLAUDE.md 작성 팁                                      (L1011) → 1장 (3 #### 통합 card)
### AI 검증 루프 팁                                        (L1027) → 1장 (2 #### 통합 card)
### OODA 루프와 Permissions 팁                             (L1037) → 1장 (2 #### 통합 card)
### GitHub 셋업 팁                                         (L1047) → 1장 (2 #### 통합 card)
### 시스템 환경 팁                                         (L1057) → 1장 (2 #### 통합 card)
```

**파서 적응 룰 (S4 표준 형식)**:
- `# PRD를 에이전트에게 전달하기` → 세션 표지 (자동 D-032)
- `## 이론` / `## 실습` → 덱 목차 자동 (D-032)
- `## 과제` / `## Tips` → activity 덱 마지막에 콘텐츠 흡수 (S2 패턴 일관)
- `### + emoji (1️⃣~3️⃣)` → 챕터 표지 자동 (D-033 + strip_emoji D-035)
- `### Step N` → 실습 섹션 표지 자동 (D-033)
- `### + Tips 카테고리` → Tips 통합 card 1장 (### 안 2-3 #### 통합)
- `#### + 한글 제목` → 콘텐츠 슬라이드 (S3 호환 모드와 다름, 표준)
- 코드블록 안 `# `, `## ` (L556, L582 등 CLAUDE.md 양식) → 헤더 인식 X (skipped)

### § 1.2 Auto-Mapping (8타입 자동 매핑)

#### 이론 41장 (T2.0a/T2.0b + T2.1~T2.6 미니 사이클 6개)

| 슬라이드 | 매핑 | 콘텐츠 | source line |
|---|---|---|---|
| s1 | title | 세션 표지 (자동 D-032) | L1 |
| s2 | title | 이론 목차 (자동 D-032) | L15 |
| **T2.1 §1 AI 에이전트와 대화 (8장)** | | | |
| s3 | title | ## 1️⃣ 챕터 표지 (자동) | L17 |
| s4 | concept (definition) | 컨텍스트는 명령보다 중요하다 | L24 |
| s5 | concept (key-message) | 첫 단정 | L34 |
| s6 | concept (definition) | 무상태성의 의미 | L40 |
| s7 | comparison | CLAUDE.md 운영의 효과 | L54 |
| s8 | concept (key-message) | 컨텍스트 앵커링 | L61 |
| s9 | comparison (BAD/GOOD) | 안티패턴 vs 컨텍스트 앵커링 | L69 |
| s10 | terms | 챕터 1 용어 (4행) | L83 |
| **T2.2 §2-A 4영역 한눈 + 1·2영역 (5장)** | | | |
| s11 | title | ## 2️⃣ 챕터 표지 (자동) | L91 |
| s12 | comparison | 4영역 한눈에 보기 (4행 표) | L98 |
| s13 | concept (definition) | 1영역: 프로젝트 개요 | L113 |
| s14 | example (code) | 1영역 시드 6 예시 | L121 |
| s15 | example (code) | 2영역 시드 6 예시 (정의 한눈 흡수) | L133 |
| **T2.3 §2-B 3·4영역 + 단정 + 비교 (5장)** | | | |
| s16 | example (code) | 3영역 시드 6 예시 | L153 |
| s17 | example (code) | 4영역 시드 6 예시 | L166 |
| s18 | concept (key-message) | 두 번째 단정 | L182 |
| s19 | comparison | PRD vs CLAUDE.md (5행) | L186 |
| s20 | comparison | 흔히 놓치는 3가지 함정 (3행) | L196 |
| **T2.4 §2-C AI 검증 루프 (6장)** | | | |
| s21 | concept (key-message) | AI 검증 루프란 | L204 |
| s22 | process | AI 검증 루프 5단계 (sequential) | L210 |
| s23 | comparison | 사람 검증 vs AI 검증 (4행) | L229 |
| s24 | example (code) | 시드 6 AI 검증 예시 | L238 |
| s25 | comparison (BAD/GOOD) | 안티패턴 vs 올바른 검증 | L258 |
| s26 | terms | 챕터 2 용어 (5행) | L274 |
| **T2.5 §3-A OODA (5장)** | | | |
| s27 | title | ## 3️⃣ 챕터 표지 (자동) | L283 |
| s28 | concept (definition) | OODA 루프란 | L290 |
| s29 | process | OODA 4단계 (4행 표) | L296 |
| s30 | process | Claude Code의 OODA 루프 (sequential) | L307 |
| s31 | concept (key-message) | 세 번째 단정 | L333 |
| **T2.6 §3-B Permissions (10장)** | | | |
| s32 | comparison | Permissions 3단계 (3행) | L337 |
| s33 | example | 자동 허용 도구 (3행) | L345 |
| s34 | example | 매번 확인 도구 (3행) | L357 |
| s35 | example | 절대 금지 도구 (2행) | L369 |
| s36 | comparison | Permissions와 OODA의 연결 | L380 |
| s37 | comparison | 책임 분배의 의미 | L388 |
| s38 | comparison | 두 극단의 위험 | L396 |
| s39 | example (json code) | 권장 settings.json | L405 |
| s40 | comparison (BAD/GOOD) | 안티패턴 vs 권장 운영 | L421 |
| s41 | terms | 챕터 3 용어 (6행) | L435 |

**이론 합계**: 41장 ✅

#### 실습 44장 (T3.0 + T3.1~T3.8 미니 사이클 8개)

| 슬라이드 | 매핑 | 콘텐츠 | source line |
|---|---|---|---|
| a1 | title | 실습 목차 (자동 D-032) | L445 |
| **T3.1 Step 0 환경 진단 (5장)** | | | |
| a2 | activity (Cover) | Step 0 섹션 표지 (자동 D-033) | L463 |
| a3 | activity (2-col code) | 0-1 환경 확인 (node·claude·git·gh) | L467 |
| a4 | activity (2-col code) | 0-2 작업 폴더 + git init — **D-043 planning_project** | L487 |
| a5 | activity | 0-3 토큰 베이스라인 + PRD 복사 (S3 docs/prd.md) | L505 |
| a6 | activity (Checklist) | Step 0 검증 (5 항목) | L522 |
| **T3.2 Step 1 CLAUDE.md 협업 작성 (8장)** | | | |
| a7 | activity (Cover) | Step 1 섹션 표지 | L530 |
| a8 | activity (2-col code) | 1-1 빈 CLAUDE.md 생성 | L538 |
| a9 | activity (inline 2-area) | 1-1 1차 초안 가이드 + 시드 6 통합 | L550+L577 |
| a10 | activity (inline 2-area) | 1-2 AI 개선 요청 + 시드 6 답변 통합 | L605+L619 |
| a11 | activity (inline 2-area) | 1-3 작업자 수정 원칙 + 시드 6 수정 후 통합 | L644+L652 |
| a12 | activity (inline 2-area) | 1-4 AI 검증 루프 + 시드 6 통과 통합 | L664+L672 |
| a13 | activity (2-col code) | 1-5 분량 점검 (wc -l / Measure-Object) | L691 |
| a14 | activity (Checklist) | Step 1 검증 (5 항목) | L705 |
| **T3.3 Step 2 PRD 참조 + 환경 구축 (6장)** | | | |
| a15 | activity (Cover) | Step 2 섹션 표지 | L713 |
| a16 | activity (inline 2-area) | 2-1 docs/ 구성 + 복사 — **D-044 §3.1/§3.2/§3.3** | L721+L731 |
| a17 | activity (inline 2-area) | 2-2 rules/ 구성 + 생성 — **D-044 §3.6 확장 검토** | L745+L755 |
| a18 | activity (prompt) | 2-3 rules/ AI에 채우게 하기 | L773 |
| a19 | activity (code) | 2-4 CLAUDE.md 참조 지침 추가 (§5 시스템 설계) | L787 |
| a20 | activity (Checklist) | Step 2 검증 (4 항목) | L807 |
| **T3.4 Step 3 settings.json + Permissions (5장)** | | | |
| a21 | activity (Cover) | Step 3 섹션 표지 | L814 |
| a22 | activity (2-col code) | 3-1 .claude/settings.json 생성 — **D-044 §3.7 확장** | L818 |
| a23 | activity (json code) | 3-2 권장 템플릿 입력 (auto_allow / ask_before / deny) | L832 |
| a24 | activity (prompt) | 3-3 의도된 차단 시연 (/etc/hosts 차단) | L848 |
| a25 | activity (Checklist) | Step 3 검증 (3 항목) | L857 |
| **T3.5 Step 4 GitHub 셋업 + 초기 커밋 (7장)** | | | |
| a26 | activity (Cover) | Step 4 섹션 표지 | L863 |
| a27 | activity | 4-1 GitHub 저장소 생성 (메뉴 6 STEP, planning_project) | L871 |
| a28 | activity (code) | 4-2 로컬-원격 연결 (git remote add) | L888 |
| a29 | activity (prompt) | 4-3 .gitignore 생성 — **D-044 §3.8 확장 검토** | L896 |
| a30 | activity (inline 2-area) | 4-4 초기 셋업 커밋 + 시드 6 커밋 메시지 통합 | L905+L914 |
| a31 | activity (Checklist) | 4-5 커밋 확인 점검 (4 항목) | L928 |
| a32 | activity (Checklist) | Step 4 검증 (4 항목) | L937 |
| **T3.6 Step N 정리·회고 (5장)** | | | |
| a33 | activity (Cover) | Step N 섹션 표지 | L944 |
| a34 | activity (6-card) | N-1 산출물 정리 (CLAUDE.md / settings.json / docs / rules / .gitignore / GitHub) | L948 |
| a35 | activity (code) | N-2 /cost 비교 | L963 |
| a36 | comparison | N-3 회고 좋은 답 vs 나쁜 답 (3 질문) | L971 |
| a37 | activity (Checklist) | Step N 검증 (4 항목) | L979 |
| **T3.7 과제 (1장)** | | | |
| a38 | activity (Checklist + 표) | 과제 안내 (목표·산출물·마감) | L985 |
| **T3.8 Tips (6장)** | | | |
| a39 | activity (2-card) | Tips 1 폴더·저장소 일관성 (2 ####) | L1001 |
| a40 | activity (3-card) | Tips 2 CLAUDE.md 작성 팁 (3 ####) | L1011 |
| a41 | activity (2-card) | Tips 3 AI 검증 루프 팁 (2 ####) | L1027 |
| a42 | activity (2-card) | Tips 4 OODA·Permissions 팁 (2 ####) | L1037 |
| a43 | activity (2-card) | Tips 5 GitHub 셋업 팁 (2 ####) | L1047 |
| a44 | activity (2-card) | Tips 6 시스템 환경 팁 (2 ####) | L1057 |

**실습 합계**: 44장 ✅

### § 1.3 Coverage Map (D-028, 100% 강제)

- **본문 매핑**: 85장 슬라이드 (이론 41 + 실습 44)
- **skipped 명시** (학생 화면 X):
  - 코드블록(```` ``` ````) 안 `# CLAUDE.md` / `## 1. 프로젝트 개요` / `## 2. 기술 스택` / `## 3. 코딩 가이드라인` / `## 4. 제약사항` / `## 5. 시스템 설계 참조 지침` (L556~L600, L582~L805 등) → CLAUDE.md 양식 코드 일부로 슬라이드 안 코드블록으로 표시 (헤더 인식 X)
  - lecture.md 강사 안내 메타 패러그래프 (L31~L32, L51~L52 등 ::: aside 주석) → 본문 흡수
- **coverage**: lecture.md L1~L1065 전 라인이 85장 슬라이드 중 하나 또는 skipped 명시에 매핑됨 → 100%

### § 1.4 Profile (자동 도출 + 추론)

- logic_structure: **hierarchical** (3 챕터 + 6 Step 순차)
- core_visual_kind: **comparison** (4영역 / OODA / Permissions / 안티 vs 권장 다수)
- expected_slide_count: **85** (이론 41 + 실습 44)
- interactivity_density: **medium** (BAD/GOOD toggle + sequential + 4-card + inline 2-area)
- tone_strength: **balanced** (단정 3 + 안티 3 + 메타 A4)

→ `lectures/S4/profile.yaml` (draft, Gate-1 후 confirmed)

### § 1.5 Decisions Required (Gate-1)

1. **profile 자동 도출 확정?** — logic=hierarchical / visual=comparison / count=85 / density=medium / tone=balanced
2. **미니 사이클 분할 확정?** — §2 3개(2-A/B/C) / §3 2개(3-A/B)
3. **옵션 B 통합 확정?** — 1-1~1-4 시드 6 inline 2-area / 2-1·2-2 통합 / 4-4 통합
4. **Tips 6 카테고리 → 각 1슬라이드 (총 6장) 확정?**
5. **메뉴 캡처** — 텍스트 설명 위주 (S3와 동일)?

---

## § 2. Composition (미니 사이클 진행 — Phase 2/3)

> Gate-1 통과 후 미니 사이클별로 본 절 채움.

### § 2.0 자동 생성 (T2.0a/T2.0b + T3.0)

- [ ] 진행 대기

(이하 미니 사이클별 섹션은 각 사이클 진행 시 채움)

---

## § 3. Verification (γ' quality-judge + creative-judge)

> 미니 사이클별 28축 감산 + 5축 가산 결과 누적.

---

## § 4. Build / Validation (δ' + ε')

> 미니 사이클별 빌드·검증 결과 누적.

---

## § 5. Final Sign-off (2026-05-12)

### Phase 4 ε 결과

| 검증 항목 | 결과 |
|---|---|
| **ε.1 npm build** | 9/9 페이지 컴파일 통과 (exit code 0) — `/sessions/[slug]/[deck]` 60.2 → 77 kB (S4 85장 통합) |
| **ε.2 capture-checker** | N/A — CaptureSlide·이미지 사용 0건 (메뉴 텍스트 설명) |
| **ε.3 design-checker 5축** | 0 violation — D-035 emoji JSX 0건 (코드 주석만 잔존) / D11 § 0건 / D2 hex 0건 / D3 rounded-lg 0건 / E.5 pattern prop mismatch 0건 |
| **ε.4 coverage 사후** | 100% — lecture.md L1~L1065 85장 매핑 + 코드블록 안 헤더(L556·L582 CLAUDE.md 양식) skipped |
| **ε.5 history.md** | § 0 S4 Sprint 완료 기록 + D-044 SSOT 확장 예고 (§3.6/§3.7/§3.8) — 결함 0건 |
| **ε.6 spec § 5** | 본 절 (Final Sign-off) |

### 결함 0건
- 표준 형식 (`####` 콘텐츠 분할) 처음 적용 — S3 호환 모드(`###`만)와 달리 깔끔하게 작동
- D-035 emoji 변환: 학생 화면 0건 / 코드 주석에만 메타 표기 잔존 (학생 노출 X)
- 옵션 B 통합 (inline 2-area 시드 6) — S3 패턴 일관 적용

### D-044 SSOT 확장 예고
S4에서 새로 만든 docs는 다음 sprint에서 `docs/student-project-reference.md`에 등록 검토:
- §3.6 `rules/` 폴더 — `coding-style.md` / `commit-convention.md` / `architecture.md`
- §3.7 `.claude/settings.json` — Permissions 3단계 권장 템플릿
- §3.8 `.gitignore` — Next.js 기준, `.claude/` 포함

### 미해결 (Phase 5/6)
- Phase 5: S4Form 제출 인프라 (S4-P5.1~P5.3)
- Phase 6: 강사 시각 검증 (S4-T6.1) + 결함 수정 (S4-T6.2)

### S4 종합
- **이론 41장 + 실습 44장 = 85장** 완성
- **deck-registry.js**: s4.decks에 theory + activity 등록 완료
- **다음 세션 진입 가능**: planning_project/ 구조 + CLAUDE.md + GitHub 저장소가 S5 빌드 기반
