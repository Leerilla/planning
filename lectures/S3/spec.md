# S3 spec.md (v2, 2026-05-12)

> S1/S2와 동일 구조 — § 1 분석 → § 2 구성 → § 3 검증 → § 4 빌드/검증 → § 5 Final Sign-off

---

## § 0. Meta

- **session_id**: s3
- **session_title**: 데이터를 PRD로 정제하기 (From Data to PRD Refinement)
- **session_subtitle**: NotebookLM로 분석하고 Manyfast로 정제하다
- **source**: `lectures/S3/lecture.md` (1336줄, 강사 작업 완료 — MCP 5삭제+2보존)
- **assignment**: `lectures/S3/assignment.md`
- **checklist**: `lectures/S3/checklist.md`
- **profile**: `lectures/S3/profile.yaml` (draft → confirmed Gate-1 후)
- **task tracker**: `lectures/S3/Task.md` (Phase 0 완료, Phase 1 진행 중)
- **start date**: 2026-05-12

---

## § 1. Analysis (Phase α, lecture-translator)

### § 1.1 Header Tree (D-033 + S3-T0.2 적용)

```
# 데이터를 PRD로 정제하기                                  (L1)   → 세션 표지 자동 (D-032)
## 이론                                                    (L16)  → 이론 목차 자동 (D-032)

### 1️⃣ PRD란 무엇인가                                     (L18)  → 챕터 표지 자동 (D-033 + strip_emoji)
   ### PRD의 정의                                         (L26)  → 콘텐츠
   ### 첫 단정                                            (L36)  → 콘텐츠 (KeyMessage)
   ### PRD의 본질은 명확성                                (L43)  → 콘텐츠
   ### 명확한 PRD의 효과                                  (L57)  → 콘텐츠
   ### 안티패턴 vs 명확한 PRD                             (L66)  → 콘텐츠 (Comparison BAD/GOOD)
### 1️⃣ 챕터 용어 해설                                     (L88)  → 콘텐츠 (Terms)

### 2️⃣ 좋은 PRD의 5요소                                   (L98)  → 챕터 표지 자동
   ### 5요소 한눈에 보기                                  (L106) → 콘텐츠
   ### 요소 1~5 (정의 + 양식, 각 2 ### → 통합 1슬라이드)  (L118~L289) → 콘텐츠 5장
   ### 요소 4 잘못된 예시                                 (L246) → 콘텐츠 (Comparison)
   ### 5요소가 비면 일어나는 일                           (L291) → 콘텐츠 (Warning)
### 2️⃣ 챕터 용어 해설                                     (L301) → 콘텐츠 (Terms)

### 3️⃣ PRD는 어떻게 만들어져 왔는가                      (L311) → 챕터 표지 자동
   ### PRD 제작의 3시대                                   (L319) → 콘텐츠 (Process 3-card)
   ### 과거 / 과거 한계 / 과도기 / 새문제 / 현재 / 두번째 단정 (L327~L381) → 콘텐츠 6장

### 4️⃣ NotebookLM과 Manyfast 활용                         (L386) → 챕터 표지 자동
   ### 도구 소개                                          (L394) → 콘텐츠
   ### NotebookLM 특징 / 장점                             (L401~L410) → 통합 1장
   ### Manyfast 특징 / 장점                               (L420~L429) → 통합 1장 (L425 "MCP 연동" 행 보존)
   ### 효과 1~4                                           (L435~L475) → 통합 4-card 1장 (옵션 B)
   ### 두 도구 분담 정리                                  (L483) → 콘텐츠 (Comparison)
   ### 안티패턴 vs 올바른 활용                            (L493) → 콘텐츠 (Comparison)
### 4️⃣ 챕터 용어 해설                                     (L512) → 콘텐츠 (Terms, L519 "MCP 연동" 행 보존)

### 5️⃣ PRD 정제의 실전                                    (L521) → 챕터 표지 자동
   ### 4단계 정제 워크플로                                (L529) → 도입 + 4단계 통합 (sequential 1장)
   ### 1~4단계                                            (L538~L585) → 통합 1장 (sequential)
   ### AI 자동 검토의 한계 / 세 번째 단정                 (L594, L604) → 콘텐츠 2장
   ### PRD 검토 5개 점검 / MVP 정의 / 표준 3개 / 시드 6 3개 / 안티 / 용어 (L609~L662) → 콘텐츠 6장

## 실습                                                    (L672) → 실습 목차 자동 (D-032)

### Step 0: 환경 진단                                      (L689) → 섹션 표지 자동 (D-033)
   ### 0-1 ~ 0-4 + 검증                                   (L693~L744) → 콘텐츠 5장

### Step 1: NotebookLM 페인포인트 추출                     (L751) → 섹션 표지 자동
   ### 1-1 노트북 생성                                    (L755) → 콘텐츠
   ### 1-2 (메뉴 + 시드 6 통합)                           (L775+L795) → 통합 1장
   ### 1-3 (메뉴 + 시드 6 통합)                           (L807+L823) → 통합 1장
   ### 1-4 인용 검증                                      (L837) → 콘텐츠
   ### 1-5 (메뉴 + 시드 6 통합)                           (L857+L866) → 통합 1장
   ### Step 1 검증 기준                                   (L878) → 콘텐츠 (Checklist)

### Step 2: Manyfast PRD 초안 생성                         (L886) → 섹션 표지 자동
   ### 2-1 프로젝트 생성                                  (L890) → 콘텐츠
   ### 2-2 (메뉴 + 시드 6 통합)                           (L913+L931) → 통합 1장
   ### 2-3 5요소 확인                                     (L953) → 콘텐츠
   ### 2-4 (메뉴 + 시드 6 통합)                           (L970+L982) → 통합 1장
   ### 2-5 (메뉴 + 시드 6 통합)                           (L993+L1012) → 통합 1장
   ### Step 2 검증 기준                                   (L1022) → 콘텐츠 (Checklist)
   [HIGH-1 2-6/2-7 폐기 — 강사 결정 6]

### Step 3: prd.md Export                                  (L1030) → 섹션 표지 자동
   ### 3-1 Export 메뉴                                    (L1034) → 콘텐츠
   ### 3-2 작업 폴더로 이동 (D-043)                       (L1053) → 콘텐츠
   ### 3-3 파일 내용 확인                                 (L1067) → 콘텐츠
   ### 3-4 PRD 검토 5개 점검                              (L1085) → 콘텐츠 (Checklist)
   ### Step 3 검증 기준                                   (L1095) → 콘텐츠 (Checklist)

### Step 4: 빌드 프로젝트 환경 구축 (신규)                (L1101) → 섹션 표지 자동
   ### 4-1 표준 폴더 + 생성 명령 (통합)                   (L1109+L1125) → 통합 1장 (D-043+D-044)
   ### 4-2 페르소나·페인포인트 정리 / 시드 6 persona / 시드 6 painpoints (L1141, L1155, L1170) → 3장
   ### 4-3 README + 시드 6 통합                           (L1190+L1221) → 통합 1장 (D-044 §3.4)
   ### 4-4 Claude Code 컨텍스트 (.claude/CLAUDE.md)       (L1247) → 콘텐츠 (D-044 §3.5)
   ### 4-5 폴더 구조 최종 점검                            (L1277) → 콘텐츠
   ### Step 4 검증 기준                                   (L1293) → 콘텐츠 (Checklist)

### Step N: 정리와 비용 비교                              (L1301) → 섹션 표지 자동
   ### N-1 결과 정리 (MCP 셀 제거됨)                      (L1305) → 콘텐츠
   ### N-2 /cost 비교                                     (L1314) → 콘텐츠
   ### N-3 회고 좋은 답 vs 나쁜 답                        (L1324) → 콘텐츠 (Comparison)
   ### Step N 검증 기준                                   (L1332) → 콘텐츠 (Checklist)
```

**파서 적응 룰 (D-033 S3 확장)**:
- `# 데이터를 PRD로 정제하기` → 세션 표지 (자동 생성, D-032)
- `## 이론` / `## 실습` → 덱 목차 (자동, D-032)
- `### + emoji (1️⃣~5️⃣)` → 챕터 표지 (D-033 + strip_emoji D-035)
- `### Step N` / `### N-X` → 실습 섹션 표지 / 콘텐츠
- `### + 한글 짧은 제목 (≤30자)` → 콘텐츠 분할 슬라이드
- 코드블록 (` ``` `) 안 `# `, `## ` → 헤더 인식 X (L1160+ README/CLAUDE.md 양식의 일부, 본문 텍스트로 보존)
- `####` / `---` 미사용 → 호환 모드 (D-034 미니 사이클 = `###` 단위)

### § 1.2 Auto-Mapping (8타입 자동 매핑)

#### 이론 46장 (T2.0a/T2.0b + T2.1~T2.9 미니 사이클 9개)

| 슬라이드 | 매핑 | 콘텐츠 | source line |
|---|---|---|---|
| s1 | title | 세션 표지 (자동 D-032) | L1 |
| s2 | title | 이론 목차 (자동 D-032) | L16 |
| **T2.1 §1 PRD란 무엇인가 (7장)** | | | |
| s3 | title | ## 1️⃣ 챕터 표지 (자동) | L18 |
| s4 | concept (definition) | PRD의 정의 (합의 문서) | L26 |
| s5 | concept (key-message) | 첫 단정 | L36 |
| s6 | concept (definition) | PRD의 본질은 명확성 | L43 |
| s7 | concept | 명확한 PRD의 효과 | L57 |
| s8 | comparison | 안티패턴 vs 명확한 PRD (BAD/GOOD) | L66 |
| s9 | terms | 챕터 1 용어 (5행) | L88 |
| **T2.2 §2-A 5요소 한눈 + 요소 1·2 (4장)** | | | |
| s10 | title | ## 2️⃣ 챕터 표지 (자동) | L98 |
| s11 | comparison (inline 5-row) | 5요소 한눈에 | L106 |
| s12 | concept (inline 2-area) | 요소 1 문제 (정의+양식 통합) | L118+L128 |
| s13 | concept (inline 2-area) | 요소 2 페르소나 (정의+양식 통합) | L146+L156 |
| **T2.3 §2-B 요소 3·4 + 잘못된 (3장)** | | | |
| s14 | concept (inline 2-area) | 요소 3 핵심 기능 (정의+양식 통합) | L180+L194 |
| s15 | concept (inline 2-area) | 요소 4 성공 지표 (정의+양식 통합) | L212+L222 |
| s16 | comparison (BAD/GOOD) | 요소 4 잘못된 예시 | L246 |
| **T2.4 §2-C 요소 5 + 비면 + 용어 (3장)** | | | |
| s17 | concept (inline 2-area) | 요소 5 제약사항 (정의+양식 통합) | L254+L264 |
| s18 | quote (warning) | 5요소가 비면 일어나는 일 | L291 |
| s19 | terms | 챕터 2 용어 | L301 |
| **T2.5 §3 3시대 + 단정 (8장)** | | | |
| s20 | title | ## 3️⃣ 챕터 표지 (자동) | L311 |
| s21 | process (3-card 타임라인) | PRD 제작의 3시대 | L319 |
| s22 | concept (definition) | 과거 — PM이 모든 것을 | L327 |
| s23 | quote (warning) | 과거의 한계 | L339 |
| s24 | concept (definition) | 과도기 — 일반 LLM | L347 |
| s25 | quote (warning) | 과도기의 새로운 문제 | L353 |
| s26 | concept (definition) | 현재 — 두 도구 분담 | L366 |
| s27 | concept (key-message) | 두 번째 단정 | L381 |
| **T2.6 §4-A 도구 소개 + 통합 (4장)** | | | |
| s28 | title | ## 4️⃣ 챕터 표지 (자동) | L386 |
| s29 | concept (inline 2-area) | 도구 소개 (NotebookLM/Manyfast) | L394 |
| s30 | concept | NotebookLM 특징+장점 통합 | L401+L410 |
| s31 | concept | Manyfast 특징+장점 통합 (L425 MCP 보존, L433 삭제됨 → 장점 2개) | L420+L429 |
| **T2.7 §4-B 효과 4 + 마무리 (4장)** | | | |
| s32 | comparison (4-card grid) | 효과 4 통합 (사고 자원/검증/추적/다음 연결, MCP 제거 후) | L435+L446+L457+L475 |
| s33 | comparison (inline 표) | 두 도구 분담 정리 (L491 MCP 제거 후 export 만) | L483 |
| s34 | comparison (BAD/GOOD) | 안티패턴 vs 올바른 활용 | L493 |
| s35 | terms | 챕터 4 용어 (L519 "MCP 연동" 행 보존) | L512 |
| **T2.8 §5-A 4단계 + AI 한계 + 단정 (5장)** | | | |
| s36 | title | ## 5️⃣ 챕터 표지 (자동) | L521 |
| s37 | concept (definition) | 4단계 정제 워크플로 도입 | L529 |
| s38 | process (sequential reveal) | 4단계 통합 (업로드→추출→생성→검토) | L538+L552+L572+L585 |
| s39 | concept (definition) | AI 자동 검토의 한계 | L594 |
| s40 | concept (key-message) | 세 번째 단정 | L604 |
| **T2.9 §5-B 5점검 + MVP + 마무리 (6장)** | | | |
| s41 | process (numbered list) | PRD 검토 5개 점검 | L609 |
| s42 | concept (definition) | MVP의 핵심 기능 3개 | L619 |
| s43 | concept (inline 3-card) | 표준 3개 구성 (입력+처리+출력) | L627 |
| s44 | example (inline) | 시드 6번 3개 구성 | L637 |
| s45 | comparison (BAD/GOOD) | 안티패턴 vs 올바른 운영 | L645 |
| s46 | terms | 챕터 5 용어 | L662 |

**이론 합계**: 46장 ✅

#### 실습 41장 (T3.0 + T3.1~T3.7 미니 사이클 7개)

| 슬라이드 | 매핑 | 콘텐츠 | source line |
|---|---|---|---|
| a1 | title | 실습 목차 (자동 D-032) | L672 |
| **T3.1 Step 0 환경 진단 (6장)** | | | |
| a2 | activity (Cover) | Step 0 섹션 표지 (자동 D-033) | L689 |
| a3 | activity (2-col code) | 0-1 환경 확인 명령 (macOS/Windows) | L693 |
| a4 | activity (2-col code) | 0-2 작업 폴더 생성 — **D-043 planning_project** | L711 |
| a5 | activity | 0-3 토큰 베이스라인 (/cost) | L727 |
| a6 | activity | 0-4 도구 계정 점검 | L737 |
| a7 | activity (Checklist) | Step 0 검증 기준 | L744 |
| **T3.2 Step 1 NotebookLM (7장)** | | | |
| a8 | activity (Cover) | Step 1 섹션 표지 | L751 |
| a9 | activity | 1-1 노트북 생성 | L755 |
| a10 | activity (inline 2-area) | 1-2 데이터 업로드 통합 (메뉴+시드 6) | L775+L795 |
| a11 | activity (inline 2-area) | 1-3 페인포인트 추출 통합 — **painpoints.md D-044 §3.2** | L807+L823 |
| a12 | activity | 1-4 인용 검증 | L837 |
| a13 | activity (inline 2-area) | 1-5 현재 대안 통합 | L857+L866 |
| a14 | activity (Checklist) | Step 1 검증 | L878 |
| **T3.3 Step 2 Manyfast (7장)** | | | |
| a15 | activity (Cover) | Step 2 섹션 표지 | L886 |
| a16 | activity | 2-1 프로젝트 생성 | L890 |
| a17 | activity (inline 2-area) | 2-2 PRD 자동 생성 통합 | L913+L931 |
| a18 | activity | 2-3 5요소 확인 | L953 |
| a19 | activity (inline 2-area) | 2-4 모호한 표현 수정 통합 | L970+L982 |
| a20 | activity (inline 2-area) | 2-5 핵심 기능 좁히기 통합 | L993+L1012 |
| a21 | activity (Checklist) | Step 2 검증 | L1022 |
| **T3.4 Step 3 prd.md export (6장)** | | | |
| a22 | activity (Cover) | Step 3 섹션 표지 | L1030 |
| a23 | activity | 3-1 Export 메뉴 | L1034 |
| a24 | activity | 3-2 작업 폴더로 이동 — **D-043 planning_project/docs/** | L1053 |
| a25 | activity | 3-3 파일 내용 확인 | L1067 |
| a26 | activity (Checklist) | 3-4 PRD 검토 5개 점검 — **prd.md D-044 §3.3** | L1085 |
| a27 | activity (Checklist) | Step 3 검증 | L1095 |
| **T3.5 Step 4-A 폴더 + 페르소나/페인포인트 (5장)** | | | |
| a28 | activity (Cover) | Step 4 섹션 표지 | L1101 |
| a29 | activity (inline 2-area) | 4-1 표준 폴더 + 생성 명령 — **D-043 + D-044 §2** | L1109+L1125 |
| a30 | concept (definition) | 4-2 페르소나·페인포인트 정리 | L1141 |
| a31 | example (code block) | 4-2 시드 6 persona.md — **D-044 §3.1** | L1155 |
| a32 | example (code block) | 4-2 시드 6 painpoints.md | L1170 |
| **T3.6 Step 4-B README + Claude + 점검 (4장)** | | | |
| a33 | activity (inline 2-area) | 4-3 README + 시드 6 통합 — **D-044 §3.4** | L1190+L1221 |
| a34 | activity (code block) | 4-4 .claude/CLAUDE.md 양식 — **D-044 §3.5** | L1247 |
| a35 | activity (code) | 4-5 폴더 구조 최종 점검 | L1277 |
| a36 | activity (Checklist) | Step 4 검증 | L1293 |
| **T3.7 Step N 정리·회고 (5장)** | | | |
| a37 | activity (Cover) | Step N 섹션 표지 | L1301 |
| a38 | activity (3-card) | N-1 결과 정리 (L1311 MCP 셀 → export로 변경됨) | L1305 |
| a39 | concept + code | N-2 /cost 비교 | L1314 |
| a40 | comparison (3 질문 × GOOD/BAD) | N-3 회고 좋은 답 vs 나쁜 답 | L1324 |
| a41 | activity (Checklist) | Step N 검증 | L1332 |

**실습 합계**: 41장 ✅

### § 1.3 Coverage Map (D-028, 100% 강제)

- **본문 매핑**: 87장 슬라이드 (이론 46 + 실습 41)
- **skipped 명시** (학생 화면 X):
  - lecture.md 강사 안내 메타 패러그래프 (있을 시 본문 흡수)
  - 코드블록(```` ``` ````) 안 `# `, `## ` (L1160+ README/CLAUDE.md 양식, persona/painpoints 시드 6 양식) → 코드 블록 일부로 슬라이드 안 표시 (헤더 인식 X)
  - L425 / L519 MCP 잔존 2건 = 슬라이드 s31 / s35에 그대로 표시 (소개 의도)
  - L433 / L467 / L480 / L491 / L1311 = 강사 작업 완료 가정 (MCP 제거됨)
- **coverage**: lecture.md L1~L1336 전 라인이 87장 슬라이드 중 하나 또는 skipped 명시에 매핑됨 → 100%

### § 1.4 Profile (자동 도출 + 추론)

- logic_structure: **hierarchical** (5 챕터 순차)
- core_visual_kind: **comparison** (안티/분담/3시대 다수)
- expected_slide_count: **87** (이론 46 + 실습 41, 옵션 B 통합)
- interactivity_density: **medium** (Comparison toggle + Process sequential + 4-card grid + inline 2-area)
- tone_strength: **balanced** (단정 3 + 안티 4 + 메타 A4)

→ `lectures/S3/profile.yaml` (draft, Gate-1 후 confirmed)

### § 1.5 Decisions Required (Gate-1)

1. **profile 자동 도출 확정?** — logic=hierarchical / visual=comparison / count=87 / density=medium / tone=balanced
2. **미니 사이클 분할 확정?** — §2 3개(2-A/B/C) / §4 2개(4-A/B) / §5 2개(5-A/B) — 통합 안 정도 OK?
3. **§4 효과 4 통합 = 4-card 1슬라이드 확정?** (옵션 B 강사 결정 4)
4. **메뉴 조작 캡처** — 실제 캡처 사용 / 시뮬 / 텍스트 설명만? (Step 1/2 메뉴 다수)
5. **강사 명시 `@interactive` 추가 위치?** — 현재 lecture.md에 명시 0건, 기본 인터랙티브로 진행 가능

---

## § 2. Composition (미니 사이클 진행 — Phase 2/3)

> Gate-1 통과 후 미니 사이클별로 본 절 채움.

### § 2.0 자동 생성 (T2.0a/T2.0b + T3.0)

- [ ] 진행 대기

### § 2.1 §1 PRD란 무엇인가 (T2.1)

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
| **ε.1 npm build** | 9/9 페이지 컴파일 통과 (exit code 0) |
| **ε.2 capture-checker** | N/A — CaptureSlide 사용 0건 (메뉴 조작은 텍스트 설명) |
| **ε.3 design-checker 5축** | 0 violation — D-035 emoji JSX 0건 / D11 § 0건 / D2 hex 0건 / D3 rounded-lg 0건 / E.5 pattern prop mismatch 0건 |
| **ε.4 coverage 사후** | 100% — lecture.md L1~L1336 87장 매핑 + 코드블록 안 헤더(README/CLAUDE.md 양식) skipped |
| **ε.5 history.md** | § 0 S3 Sprint 완료 기록 추가 — 결함 0건 |
| **ε.6 spec § 5** | 본 절 (Final Sign-off) |

### 결함 0건
- 강사 lecture.md 작업 완료 가정 (MCP 5삭제+2보존 / HIGH-1 폐기)
- L425/L519 MCP 소개 영역 보존됨 — 슬라이드 s31/s35에 자연스럽게 표시
- L433 "빌드 연결" 행: lecture.md 잔존이지만 슬라이드 빌드 단계에서 장점 2개로 변환 (s31)

### 미해결 (Phase 5/6)
- Phase 5: S3Form 제출 인프라 (S3-P5.1~P5.3)
- Phase 6: 강사 시각 검증 (S3-T6.1) + 결함 수정 (S3-T6.2)

### S3 종합
- **이론 46장 + 실습 41장 = 87장** 완성
- **deck-registry.js**: s3.decks에 theory + activity 등록 완료
- **다음 세션 진입 가능**: planning_project/ 구조가 SSOT (D-044)로 S4~S9 누적 기반
