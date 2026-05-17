# S5 spec.md (v2, 2026-05-13)

> S1/S2/S3/S4와 동일 구조 — § 1 분석 → § 2 구성 → § 3 검증 → § 4 빌드/검증 → § 5 Final Sign-off

---

## § 0. Meta

- **session_id**: s5
- **session_title**: 수직 슬라이스와 위임 3원칙
- **session_subtitle**: 한 화면을 통째로 완성한다 — Stitch와 동작의 정의
- **source**: `lectures/S5/lecture.md` (1035줄, 표준 형식 `####` 콘텐츠 분할)
- **assignment**: `lectures/S5/assignment.md` (예상 ~130줄)
- **checklist**: `lectures/S5/checklist.md` (예상 ~90줄)
- **profile**: `lectures/S5/profile.yaml` (confirmed Gate-1, 2026-05-13)
- **task tracker**: `lectures/S5/Task.md` (Phase 0 완료 후 Phase 1 진행)
- **start date**: 2026-05-13
- **이전 세션 누적**: S4 `planning_project/` 위에 CLAUDE.md (4영역+§5 참조) + docs/ + rules/ + .claude/settings.json + GitHub 저장소

---

## § 1. Analysis (Phase α, lecture-translator)

### § 1.1 Header Tree (S5 = 표준 형식)

```
# 수직 슬라이스와 위임 3원칙                              (L1)   → 세션 표지 자동 (D-032)
## 이론                                                  (L15)  → 이론 목차 자동 (D-032)

### 1️⃣ 수직 슬라이스란 무엇인가                          (L17)  → 챕터 표지 자동 (D-033 + strip_emoji)
   #### 수직 슬라이스의 정의                             (L24)
   #### 수평 슬라이스의 정의                             (L32)
   #### 첫 단정                                          (L40)
   #### 수직 슬라이스의 4가지 이점                       (L44)
   #### 시드 6번 이점 적용                               (L53)
   #### 수평 슬라이스의 위험                             (L64)
   #### 안티패턴 vs 수직 슬라이스                        (L72)
   #### 수직 vs 수평 비교                                (L87)
   #### 1️⃣ 챕터 용어 해설                               (L96)

### 2️⃣ 위임 3원칙                                       (L104) → 챕터 표지 자동
   #### AI 협업의 본질                                   (L111)
   #### 두 번째 단정                                     (L121)
   #### 위임 3원칙                                       (L125)
   #### 원칙 1: 범위를 좁힌다                            (L133)
   #### 원칙 2: 결과물을 명시한다                        (L143)
   #### 원칙 3: 검증 방법을 미리 정한다                  (L153)
   #### 위임 3원칙 표준 양식                             (L163)
   #### 광범위한 명령의 위험                             (L176)
   #### 3원칙 적용 습관 만들기                           (L187)
   #### 안티패턴 vs 위임 3원칙                           (L199)
   #### 본 학습 전반 적용                                (L214)
   #### 2️⃣ 챕터 용어 해설                               (L228)

### 3️⃣ Stitch와 동작의 정의                             (L235) → 챕터 표지 자동
   #### Google Stitch란                                  (L242)
   #### Stitch와 Claude Code 연결                        (L250)
   #### Stitch 폴백 도구                                 (L263)
   #### 세 번째 단정                                     (L276)
   #### 동작 3요소                                       (L280)
   #### 요소 1: 페이지가 뜬다                            (L290)
   #### 요소 2: 핵심 인터랙션 작동                       (L300)
   #### 요소 3: 입력에 대한 반응                         (L308)
   #### 합격선 범위                                      (L320)
   #### 동작과 예쁨의 분리                               (L328)
   #### 디자인 정제를 다음으로 미루는 이유               (L341)
   #### 시드 6번 동작 합격선                             (L352)
   #### 안티패턴 vs 동작 정의                            (L367)
   #### 동작 vs 예쁨                                     (L381)
   #### 3️⃣ 챕터 용어 해설                               (L389)

## 실습                                                  (L397) → 실습 목차 자동 (D-032)

### Step 0: 환경 진단                                    (L419) → 섹션 표지 자동 (D-033)
   #### 0-1 환경 확인 명령                               (L423)
   #### 0-2 planning_project 폴더 진입 (D-043)           (L441)
   #### 0-3 자료 4 산출물 점검                           (L455)
   #### 0-4 베이스라인과 Stitch 점검                     (L469)
   #### Step 0 검증 기준                                 (L477)

### Step 1: 화면 분석과 Task 매칭                        (L484) → 섹션 표지 자동
   #### 1-1 화면 분석이 필요한 이유                      (L492)
   #### 1-2 PRD 핵심 기능 재확인 (+ 시드 6 통합)         (L506+L514)
   #### 1-3 화면 도출 명령 (+ 시드 6 결과 통합)          (L524+L534)
   #### 1-4 첫 화면 결정 기준 (+ 시드 6 첫 화면 통합)    (L552+L559)
   #### 1-5 Task 화면 단위 재구성 명령                   (L573)
   #### 1-5 시드 6번 화면 1 Task 결과                    (L588)
   #### 1-5 시드 6번 화면 2 Task 결과                    (L613)
   #### 1-6 화면-Task 매핑 검토                          (L647)
   #### Step 1 검증 기준                                 (L660)

### Step 2: GitHub Issue 등록                            (L668) → 섹션 표지 자동
   #### 2-1 Issue 등록 명령 (+ 시드 6 결과 통합)         (L676+L697)
   #### 2-2 라벨 확인                                    (L715)
   #### Step 2 검증 기준                                 (L732)

### Step 3: Stitch로 첫 화면 시안                        (L738) → 섹션 표지 자동
   #### 3-1 Stitch 자연어 프롬프트                       (L742)
   #### 3-2 시안 검토와 1회 수정                         (L756)
   #### 3-3 시안 export                                  (L766)
   #### Step 3 검증 기준                                 (L773)

### Step 4: 첫 Task 빌드와 PR 워크플로                   (L779) → 섹션 표지 자동
   #### 4-1 첫 Task 브랜치 생성                          (L783)
   #### 4-2 위임 3원칙 빌드 명령 (+ 명령 점검 통합)      (L793+L812)
   #### 4-3 결과 확인                                    (L820)
   #### 4-4 동작 3요소 부분 점검                         (L833)
   #### 4-5 PR 생성 명령                                 (L847)
   #### 4-6 본인 리뷰와 병합 (+ PR 크기 원칙 통합)       (L863+L883)
   #### Step 4 검증 기준                                 (L891)

### Step 5: 셀프 코드 리뷰                               (L900) → 섹션 표지 자동
   #### 5-1 셀프 리뷰 5개 점검                           (L904)
   #### 5-2 미통과 항목 메모                             (L914)
   #### Step 5 검증 기준                                 (L918)

### Step N: 정리와 비용 비교                             (L923) → 섹션 표지 자동
   #### N-1 산출물 정리                                  (L927)
   #### N-2 /cost 비교                                   (L938)
   #### N-3 회고 좋은 답 vs 나쁜 답                      (L946)
   #### Step N 검증 기준                                 (L954)

## 과제                                                  (L960) → 콘텐츠 1장 (Checklist + 표)

## Tips                                                  (L974) → 카테고리 5 ### × 2장씩 = 10장

### 화면 분석 팁                                         (L976) → 표지 + 통합 1장
### 위임 3원칙 팁                                        (L986) → 표지 + 통합 1장
### 동작 정의 팁                                         (L999) → 표지 + 통합 1장
### 빌드 워크플로 팁                                     (L1009) → 표지 + 통합 1장
### Issue·PR 팁                                          (L1023) → 표지 + 통합 1장
```

**파서 적응 룰 (S5 표준 형식)**:
- `# 수직 슬라이스와 위임 3원칙` → 세션 표지 (자동 D-032)
- `## 이론` / `## 실습` → 덱 목차 자동 (D-032)
- `## 과제` / `## Tips` → activity 덱 마지막에 콘텐츠 흡수 (S4 패턴 일관)
- `### + emoji (1️⃣~3️⃣)` → 챕터 표지 자동 (D-033 + strip_emoji D-035)
- `### Step N` → 실습 섹션 표지 자동 (D-033)
- `### + Tips 카테고리` → Tips 표지 + 통합 콘텐츠 슬라이드 짝 (2-3 #### 흡수)
- `#### + 한글 제목` → 콘텐츠 슬라이드 (표준 형식)
- **Step 1 안 ## 화면 1 / ## 화면 2 (L593, L618) → 본문 내 강조 헤더로 처리, 슬라이드 분할 X (1-5 시드 6 화면 1/2 Task 결과 슬라이드 안에 흡수)**
- **Step 1 안 ### Task 1.1~2.6 (L595~L640) → 본문 내 강조 헤더, 슬라이드 분할 X (위와 동일)**
- 코드블록 안 헤더 (L593~L640 일부) → 헤더 인식 X (skipped)

### § 1.2 Auto-Mapping (8타입 자동 매핑)

#### 이론 39장 (T2.0a/T2.0b + T2.1~T2.5 미니 사이클 5개)

| 슬라이드 | 매핑 | 콘텐츠 | source line |
|---|---|---|---|
| s1 | title | 세션 표지 (자동 D-032) | L1 |
| s2 | title | 이론 목차 (자동 D-032) | L15 |
| **T2.1 §1 수직 슬라이스 (8장)** | | | |
| s3 | title | ## 1️⃣ 챕터 표지 (자동) | L17 |
| s4 | comparison | 수직 정의 + 수평 정의 통합 | L24+L32 |
| s5 | concept (key-message) | 첫 단정 | L40 |
| s6 | concept (4-card) | 4가지 이점 + 시드 6번 적용 통합 | L44+L53 |
| s7 | concept | 수평 슬라이스의 위험 (4 risk) | L64 |
| s8 | comparison (BAD/GOOD) | 안티패턴 vs 수직 슬라이스 | L72 |
| s9 | comparison | 수직 vs 수평 비교 (4행) | L87 |
| s10 | terms | 챕터 1 용어 (4행) | L96 |
| **T2.2 §2-A 위임 3원칙 본질·원칙·양식 (8장)** | | | |
| s11 | title | ## 2️⃣ 챕터 표지 (자동) | L104 |
| s12 | concept (definition) | AI 협업의 본질 | L111 |
| s13 | concept (key-message) | 두 번째 단정 | L121 |
| s14 | concept (3-card overview) | 위임 3원칙 (개요 표) | L125 |
| s15 | comparison | 원칙 1: 범위를 좁힌다 (광범위 vs 좁은 범위) | L133 |
| s16 | comparison | 원칙 2: 결과물을 명시한다 (모호 vs 명시) | L143 |
| s17 | comparison | 원칙 3: 검증 방법 (모호 vs 명시) | L153 |
| s18 | example (code) | 위임 3원칙 표준 양식 | L163 |
| **T2.3 §2-B 위험·습관·안티·전반 적용 (5장)** | | | |
| s19 | comparison | 광범위한 명령의 위험 (4행) | L176 |
| s20 | activity (3-card) | 3원칙 적용 습관 (3 질문) | L187 |
| s21 | comparison (BAD/GOOD) | 안티패턴 vs 위임 3원칙 | L199 |
| s22 | concept (6-card) | 본 학습 전반 적용 (6 영역) | L214 |
| s23 | terms | 챕터 2 용어 (3행) | L228 |
| **T2.4 §3-A Stitch와 단정 (5장)** | | | |
| s24 | title | ## 3️⃣ 챕터 표지 (자동) | L235 |
| s25 | concept (definition) | Google Stitch란 | L242 |
| s26 | process | Stitch ↔ Claude Code 연결 4단계 (sequential) | L250 |
| s27 | example (table) | Stitch 폴백 도구 (v0 / Lovable) | L263 |
| s28 | concept (key-message) | 세 번째 단정 | L276 |
| **T2.5 §3-B 동작 3요소 + 합격선 + 분리 (11장)** | | | |
| s29 | concept (3-card overview) | 동작 3요소 (개요) | L280 |
| s30 | concept | 요소 1: 페이지가 뜬다 | L290 |
| s31 | concept | 요소 2: 핵심 인터랙션 작동 | L300 |
| s32 | concept | 요소 3: 입력에 대한 반응 | L308 |
| s33 | comparison | 합격선 범위 (충족 필수 vs 다음 단계) | L320 |
| s34 | comparison | 동작과 예쁨의 분리 (신호 vs 본질) | L328 |
| s35 | concept | 디자인 정제를 다음으로 미루는 이유 (이중 손실) | L341 |
| s36 | example | 시드 6번 동작 합격선 (합격 상태 vs 다음) | L352 |
| s37 | comparison (BAD/GOOD) | 안티패턴 vs 동작 정의 | L367 |
| s38 | comparison | 동작 vs 예쁨 (3행) | L381 |
| s39 | terms | 챕터 3 용어 (4행) | L389 |

**이론 합계**: 39장 ✅

#### 실습 54장 (T3.0 + T3.1~T3.7 + 과제 + Tips 5×2)

| 슬라이드 | 매핑 | 콘텐츠 | source line |
|---|---|---|---|
| a1 | title | 실습 목차 (자동 D-032) | L397 |
| **T3.1 Step 0 환경 진단 (6장)** | | | |
| a2 | activity (Cover) | Step 0 섹션 표지 (자동 D-033) | L419 |
| a3 | activity (2-col code) | 0-1 환경 확인 (node·claude·git·gh) | L423 |
| a4 | activity (2-col code) | 0-2 planning_project 폴더 진입 (D-043) | L441 |
| a5 | activity (5-card check) | 0-3 자료 4 산출물 점검 (D-044 §3.5/§3.6/§3.7) | L455 |
| a6 | activity (code) | 0-4 베이스라인 + Stitch 점검 | L469 |
| a7 | activity (Checklist) | Step 0 검증 (4 항목) | L477 |
| **T3.2 Step 1 화면 분석과 Task 매칭 (10장)** | | | |
| a8 | activity (Cover) | Step 1 섹션 표지 | L484 |
| a9 | activity (diagram) | 1-1 화면 분석이 필요한 이유 (sequential) | L492 |
| a10 | activity (inline 2-area) | 1-2 핵심 기능 재확인 + 시드 6 통합 | L506+L514 |
| a11 | activity (inline 2-area) | 1-3 화면 도출 명령 + 시드 6 결과 통합 | L524+L534 |
| a12 | activity (inline 2-area) | 1-4 첫 화면 결정 기준 + 시드 6 통합 | L552+L559 |
| a13 | activity (prompt) | 1-5 Task 화면 단위 재구성 명령 | L573 |
| a14 | activity (code) | 1-5 시드 6번 화면 1 Task 결과 (4 Task) | L588 |
| a15 | activity (code) | 1-5 시드 6번 화면 2 Task 결과 (6 Task) | L613 |
| a16 | activity (Checklist) | 1-6 화면-Task 매핑 검토 (4 점검) | L647 |
| a17 | activity (Checklist) | Step 1 검증 (5 항목) | L660 |
| **T3.3 Step 2 GitHub Issue 등록 (4장)** | | | |
| a18 | activity (Cover) | Step 2 섹션 표지 | L668 |
| a19 | activity (inline 2-area) | 2-1 Issue 등록 명령 + 시드 6 Issue 10개 통합 | L676+L697 |
| a20 | activity (diagram) | 2-2 라벨 확인 (4 step) | L715 |
| a21 | activity (Checklist) | Step 2 검증 (3 항목) | L732 |
| **T3.4 Step 3 Stitch로 첫 화면 시안 (5장)** | | | |
| a22 | activity (Cover) | Step 3 섹션 표지 | L738 |
| a23 | activity (prompt) | 3-1 Stitch 자연어 프롬프트 (시드 6번) | L742 |
| a24 | activity (diagram) | 3-2 시안 검토와 1회 수정 (3 step) | L756 |
| a25 | activity (table) | 3-3 시안 export (이미지/코드) | L766 |
| a26 | activity (Checklist) | Step 3 검증 (3 항목) | L773 |
| **T3.5 Step 4 첫 Task 빌드와 PR 워크플로 (8장)** | | | |
| a27 | activity (Cover) | Step 4 섹션 표지 | L779 |
| a28 | activity (code) | 4-1 첫 Task 브랜치 생성 (feat/task-1-1) | L783 |
| a29 | activity (inline 2-area) | 4-2 위임 3원칙 빌드 명령 + 명령 점검 통합 | L793+L812 |
| a30 | activity (code) | 4-3 결과 확인 (npm run dev + 3 점검) | L820 |
| a31 | activity (table) | 4-4 동작 3요소 부분 점검 (3행) | L833 |
| a32 | activity (prompt) | 4-5 PR 생성 명령 | L847 |
| a33 | activity (inline 2-area) | 4-6 본인 리뷰·병합 + PR 크기 원칙 통합 | L863+L883 |
| a34 | activity (Checklist) | Step 4 검증 (6 항목) | L891 |
| **T3.6 Step 5 셀프 코드 리뷰 (4장)** | | | |
| a35 | activity (Cover) | Step 5 섹션 표지 | L900 |
| a36 | activity (5-card check) | 5-1 셀프 리뷰 5개 점검 | L904 |
| a37 | activity | 5-2 미통과 항목 메모 (review-notes.md) | L914 |
| a38 | activity (Checklist) | Step 5 검증 (2 항목) | L918 |
| **T3.7 Step N 정리·회고 (5장)** | | | |
| a39 | activity (Cover) | Step N 섹션 표지 | L923 |
| a40 | activity (6-card) | N-1 산출물 정리 (tasks.md / Issue / 시안 / 폼 / PR / 명령 메모) | L927 |
| a41 | activity (code) | N-2 /cost 비교 | L938 |
| a42 | comparison | N-3 회고 좋은 답 vs 나쁜 답 (3 질문) | L946 |
| a43 | activity (Checklist) | Step N 검증 (4 항목) | L954 |
| **T3.8 과제 (1장)** | | | |
| a44 | activity (table) | 과제 (목표 / 산출물 / 마감) | L960 |
| **T3.9 Tips 5 카테고리 (10장)** | | | |
| a45 | activity (Cover) | Tips 1 · 화면 분석 팁 표지 | L976 |
| a46 | activity (2-card) | 화면 분석 팁 통합 (2 ####) | L978+L982 |
| a47 | activity (Cover) | Tips 2 · 위임 3원칙 팁 표지 | L986 |
| a48 | activity (2-card) | 위임 3원칙 팁 통합 (2 ####) | L988+L992 |
| a49 | activity (Cover) | Tips 3 · 동작 정의 팁 표지 | L999 |
| a50 | activity (2-card) | 동작 정의 팁 통합 (2 ####) | L1001+L1005 |
| a51 | activity (Cover) | Tips 4 · 빌드 워크플로 팁 표지 | L1009 |
| a52 | activity (3-card) | 빌드 워크플로 팁 통합 (3 ####) | L1011+L1015+L1019 |
| a53 | activity (Cover) | Tips 5 · Issue·PR 팁 표지 | L1023 |
| a54 | activity (3-card) | Issue·PR 팁 통합 (3 ####) | L1025+L1029+L1033 |

**실습 합계**: 54장 ✅

**총 합계**: 이론 39 + 실습 54 = **93장** ✅

### § 1.3 Coverage Map (사전 검증)

**lecture.md L1~L1035 라인 매핑**:
- 라인 매핑된 슬라이드: 93장 (위 표)
- skipped (코드블록 안 헤더): L593~L640 일부 (Task 매핑 양식 코드 — 본문 강조 헤더)
- skipped (덱 마커): L15 `## 이론`, L397 `## 실습`, L960 `## 과제`, L974 `## Tips` — 자동 처리
- coverage 100% (a44 과제 1장에 L960~L972 흡수)

---

## § 2. Composition (Phase β')

**미니 사이클 매핑** (15개 + 자동 3):

| 미니 사이클 | 슬라이드 | 범위 |
|---|---|---|
| T2.0a 자동 | s1 | # 세션 표지 (D-032) |
| T2.0b 자동 | s2 | ## 이론 목차 (D-032) |
| T2.1 §1 수직 슬라이스 | s3~s10 (8) | L17~L103 |
| T2.2 §2-A 위임 3원칙 본질·원칙·양식 | s11~s18 (8) | L104~L175 |
| T2.3 §2-B 위험·습관·안티·전반 | s19~s23 (5) | L176~L234 |
| T2.4 §3-A Stitch와 단정 | s24~s28 (5) | L235~L279 |
| T2.5 §3-B 동작 3요소 + 합격선 | s29~s39 (11) | L280~L396 |
| T3.0 자동 | a1 | ## 실습 목차 (D-032) |
| T3.1 Step 0 환경 진단 | a2~a7 (6) | L419~L483 |
| T3.2 Step 1 화면 분석·Task 매칭 | a8~a17 (10) | L484~L667 |
| T3.3 Step 2 GitHub Issue | a18~a21 (4) | L668~L737 |
| T3.4 Step 3 Stitch 시안 | a22~a26 (5) | L738~L778 |
| T3.5 Step 4 첫 Task 빌드·PR | a27~a34 (8) | L779~L899 |
| T3.6 Step 5 셀프 코드 리뷰 | a35~a38 (4) | L900~L922 |
| T3.7 Step N 정리·회고 | a39~a43 (5) | L923~L959 |
| T3.8 과제 | a44 (1) | L960~L972 |
| T3.9 Tips 5 카테고리 | a45~a54 (10) | L974~L1035 |

**합계**: 자동 3 + 미니 사이클 15 = 18 단위 / 93장

---

## § 3. Validation (Phase γ')

- **quality-judge** (28축): 미니 사이클 단위 적용
- **creative-judge** (5축 + 8타입 강도): 미니 사이클 단위 적용
- **메타 슬라이드 자동 통과** (D-031): 표지·목차·검증 체크리스트

---

## § 4. Build & Verify (Phase δ' + ε')

- **lecture-translator δ'**: 93장 wrapper 생성
- **render-validator ε'**: 미니 사이클 단위 시각 검증

**Final ε (Phase 4)**:
- npm build 통과 (Routes 9~13)
- design-checker 5축 0 violation (D-045/D-046 처음부터 적용)
- coverage 사후 100% (lecture.md L1~L1035)
- history.md § 0 갱신
- 본 spec § 5 Sign-off

---

## § 5. Final Sign-off (Phase 4 완료 시) ✓

- [x] 이론 39장 + 실습 54장 = 93장 빌드 완료
- [x] design-checker 0 violation (D-045/D-046 처음부터 적용)
- [x] coverage 100% (lecture.md L1~L1035)
- [x] history.md § 0 "S5 Sprint 완료" 블록 추가
- [x] Phase 5 S5Form 인프라 등록

**[Phase 0~5 완료, 2026-05-13. Phase 6 강사 시각 검증 대기.]**
