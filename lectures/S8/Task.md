# S8 큐레이션 Task 목록 (2026-05-16)

> **세션**: 풀스택 배포와 분석 셋업 (Full-Stack Deployment & Analytics Setup)
> **lecture.md**: 1,721줄 — 이론 5 챕터 + 실습 6 Step + 과제 + Tips 7 카테고리
> **lecture.md 형식**: 표준 (`####` 콘텐츠 분할 사용, S4~S7 동일)
> **이전 세션 누적**: S7 `planning_project/` + `.claude/agents/{prd-reviewer, git-committer, scenario-verifier}.md` + `e2e/` 위에 Railway/Vercel/Clarity/Sentry/CORS 적층
> **메타 메시지 (A4)**: 검증된 로컬 MVP를 공개 인터넷에 노출 (FE Vercel + BE Railway) + 사용자 행동 자동 수집 (Clarity / Sentry / 이벤트 추적) — 학생들이 만들 배포·분석 모범

---

## 강사 결정 (확정 후보 8건)

| # | 결정 | D-NNN | 영향 |
|---|---|---|---|
| 1 | 표준 형식 (`####` 단위, S4~S7 동일) | — | α.1 파서 표준 모드 |
| 2 | Monorepo vs 분리 리포 — **양쪽 모두 슬라이드 작성** | — | Step 0-1 옵션 비교 표 (2-card 또는 comparison) |
| 3 | CORS Step 3 → 자율 디버깅 3원칙 재활용 (S7 Step 2 패턴) | — | Step 3 명령 prompt + 점검 표 일관 |
| 4 | 분석 도구 3종 의사결정 매핑 — **Gate-2 추가** | — | T2.5c 종료 후 강사 게이트 |
| 5 | KeyMessage 5 단정문 (각 이론 챕터 1개) | D-042 | t5/t15/t26/t36/t46 추정 (Phase 1 정밀 확정) |
| 6 | D-043 `planning_project` 고정 (A7) | D-043 | 모든 Step + e2e/ + analytics 설정 |
| 7 | D-044 SSOT 확장 (A8) — `analytics-plan.md` + Railway/Vercel 환경변수 + Clarity/Sentry 설정 | D-044 | sprint 종료 후 reference.md 갱신 검토 |
| 8 | ⭐ D-049~D-054 룰 강화 (S7 시험 → S8 표준 정착) | D-049~D-054 | 신규 도구 5개 (Vercel / Railway / Clarity / Sentry / CORS) 첫 등장 D-053 의무 |

---

## 슬라이드 합계 (목표 ~95-110장, Phase 1에서 정밀 확정)

| 영역 | 추정 슬라이드 수 |
|---|---|
| 자동 생성 (세션 표지 + 이론 목차 + 실습 목차) | **3** |
| 이론 §1 (9 ####) | ~10 |
| 이론 §2 (12 ####) | ~14 |
| 이론 §3 (10 ####) | ~10 |
| 이론 §4 (11 ####) | ~12 |
| 이론 §5 (14 ####) | ~16 |
| **이론 소계** | **~62** (자동 2 + 콘텐츠 60) |
| 실습 Step 0 (8 ####) | ~7 |
| 실습 Step 1 Railway (9 ####) | ~10 |
| 실습 Step 2 Vercel (6 ####) | ~6 |
| 실습 Step 3 CORS (8 ####) | ~8 |
| 실습 Step 4 분석 도구 (8 ####) | ~9 |
| 실습 Step N (4 ####) | ~5 |
| 과제 (1) | 1 |
| Tips 7 카테고리 (15 ####) | 14 (Cover 7 + Content 7) |
| **실습 소계** | **~61** (자동 1 + 콘텐츠 60) |
| **총** | **~123** (S7 79장 대비 +56%) |

S7 (79장) 대비 +56% — lecture.md 1.83배 증가 반영. ComparisonSlide / ProcessSlide / ExampleSlide 중심.

---

## D-043 적용 — `planning_project` 폴더 유지

S7 누적 `planning_project/` 위에 본 세션이 신규 추가:

| lecture.md 영역 | 슬라이드 적용 |
|---|---|
| Step 0-3 (L955-) 리포 구조 결정 | `planning_project/` (Monorepo) vs `planning_project-backend/` + `planning_project-frontend/` (분리) — **양쪽 모두** |
| Step 1 (L1078) Root Directory | Monorepo: `planning_project/server/` / 분리: 루트 |
| Step 2 (L1230) Vercel Import | Monorepo: `planning_project/` Root + Framework Preset Next.js |
| Step 3 (L1377) CORS 화이트리스트 | `planning_project/server/` 코드 수정 |
| Step 4 (L1457) Clarity 삽입 | `planning_project/src/app/layout.tsx` |
| Step 4 (L1499) Sentry 설치 | `planning_project/src/` + `planning_project/server/` |
| Step 4 (L1527) 이벤트 추적 | `planning_project/src/components/` |
| 권장 산출물 (assignment.md) | `planning_project/docs/analytics-plan.md` |

**A2 원칙**: lecture.md 자체 수정 X — 슬라이드 빌드 단계에서만 변환.

---

## D-044 적용 — `student-project-reference.md` SSOT 확장 검토

S8이 본격 채우는 신규 영역:

| 신규 영역 | 본 세션 작업 | reference.md 확장 검토 절 |
|---|---|---|
| Railway 환경변수 (`.env.production`) | Step 1-5 등록 | §3.X 신설 검토 (배포 환경변수 양식) |
| Vercel 환경변수 (`NEXT_PUBLIC_API_URL`) | Step 2-3 등록 | 동일 |
| `planning_project/docs/analytics-plan.md` | 권장 산출물 (Step 4 + assignment) | §3.X 신설 검토 (의사결정 매핑 양식) |
| Clarity/Sentry/이벤트 추적 코드 | Step 4 삽입 | §3.X 신설 검토 (분석 도구 설정 SSOT) |

**충돌 시 SSOT 우선** — sprint 종료 후 reference.md 갱신 권고 (강사 협업).

---

## ⭐ D-049~D-054 룰 적용 의무 (S7 시험대 → S8 표준 정착)

S7 첫 시험대 6/6 PASS 후 본 sprint에서 표준 운영. **회귀 0 목표**:

| ID | 룰 | 강도 | 본 sprint 적용 위치 |
|---|---|---|---|
| **D-049** | 디자인 토큰 화이트리스트 SSOT (미정의 토큰 금지) | FAIL | 모든 wrapper / 환경변수 / 분석 도구 코드 블록 |
| **D-050** | lecture.md 원문 보존 강화 (표/리스트 임의 변경 X) | FAIL | 신뢰경계 표 (t6) / FE·BE 비교 (t11) / 6어휘 표 (t17) / 환경변수 3종 (t29) / 리포 구조 옵션 (a4) / 산출물 (a44) / 회고 (a45) — **S7 T3.5 시험대 재현** |
| **D-051** | pre 블록 폰트 최소 `text-xs` (12px) | FAIL | Railway 환경변수 / Sentry DSN / Clarity 스크립트 / CORS 명령 코드 블록 |
| **D-052** | 6+ vertical sequential 카드 분할 의무 | FAIL | Step 1 (8단계) → 2-col 또는 process / Step 4 (이벤트 8행) / CORS 검증 체크리스트 (6+ row) |
| **D-053** | 도구 이름 첫 등장 설명 의무 | WARN | **Vercel** (§3-A) / **Railway** (§3-A) / **Clarity** (§5-B) / **Sentry** (§5-B) / **CORS** (§4-A) — 5개 도구 모두 D-053 적용 |
| **D-054** | 산출물 파일 경로 inline code + accent 강조 | WARN | `planning_project/server/` (CORS) / `planning_project/src/app/layout.tsx` (Clarity) / `.env.production` / `analytics-plan.md` / 모든 등장 위치 |

---

## lecture.md 헤더 트리 (자동 매핑 미리보기)

### 이론 (5 챕터, L15-901, #### 56개)

- **§1 풀스택 구조와 FE/BE 분리** (L17-129, **9 ####** + 챕터 표지)
  - 풀스택 정체 / BE 필요 / **첫 단정** / 신뢰 경계 / 식당 비유 / 분리 배포 / 안티 / FE 직접 vs BE 경유 / 용어

- **§2 최소 개발 지식** (L131-360, **12 ####** + 챕터 표지)
  - 왜 필요 / 6어휘 / HTTP / 도메인 / 포트 / 환경변수 / 빌드배포 / API / 보너스 F12 / **두 번째 단정** / 어휘=정확성 / 안티 / 용어

- **§3 Vercel·Railway·환경변수** (L362-495, **10 ####** + 챕터 표지)
  - 두 플랫폼 / 분담 / 환경변수 3종 / BE 비밀 / FE 공개 / 로컬용 / **세 번째 단정** / .gitignore / 안티 / 키 노출 대응 / 용어

- **§4 CORS** (L497-656, **11 ####** + 챕터 표지)
  - 정의 / 왜 존재 / 두 정책 / 화이트리스트 / **네 번째 단정** / 통과 의례 / 두 갈래 / 자율 디버깅 / 표준 명령 / 검증 / 안티 / 용어

- **§5 분석 도구 3종** (L658-901, **14 ####** + 챕터 표지)
  - 왜 필요 / **다섯 번째 단정** / 1명 사용자 / 3종 질문 / Clarity / Clarity 핵심 비교 / Sentry / Sentry 알려줌 / Sentry 본질 / 이벤트 / 이벤트 표준 3 / 이벤트 vs Clarity / 의사결정 흐름 / 종합 비교 / 셋업 시점 / 안티 / 용어

### 실습 (6 Step + 과제 + Tips 7, L902-1721, #### 43 + Tips 15)

- **Step 0 환경 진단 + 리포 구조** (L922-1037, **8 ####**)
  - 0-1 환경 확인 / 0-2 자료7 점검 / 0-3 리포 구조 / 0-3 폴더 점검 / 0-4 BE 코드+PORT / 0-5 .gitignore / 0-6 토큰 / Step0 검증
- **Step 1 BE 배포 Railway** (L1039-1209, **9 ####**)
  - 1-1 가입 / 1-2 새 프로젝트 / 1-3 Root Directory / 1-4 빌드 명령 / 1-5 환경 변수 / 1-6 Generate Domain / 1-7 헬스체크 / 1-8 빌드 실패 / Step1 검증
- **Step 2 FE 배포 Vercel** (L1211-1313, **6 ####**)
  - 2-1 가입 / 2-2 Import + Framework / 2-3 환경 변수 / 2-4 빌드 + URL / 2-5 화면 확인 / Step2 검증
- **Step 3 CORS 해결 (자율 디버깅)** (L1315-1424, **8 ####**)
  - 3-1 에러 수집 / 3-1 에러 구조 / 3-2 명령 / 3-2 명령 점검 / 3-3 자동 재배포 / 3-4 동작 확인 / 3-5 CORS 검증 / Step3 검증
- **Step 4 분석 도구 3종 셋업** (L1426-1577, **8 ####**)
  - 4-1 Clarity 가입 / 4-1 Clarity 삽입 / 4-2 Sentry 가입 / 4-2 Sentry 설치 / 4-3 이벤트 결정 / 4-3 이벤트 삽입 / 4-4 시나리오 실행 / Step4 검증
- **Step N 정리·비용·회고** (L1579-1613, **4 ####**)
  - N-1 산출물 / N-2 /cost / N-3 회고 / StepN 검증
- **과제** (L1615-1628, 1 ####)
- **Tips** (L1629-1721, 7 카테고리 × 평균 2 #### = 15 ####)
  - 최소 개발 지식 (2) / 분리 배포 (2) / Railway (3) / Vercel (2) / CORS (3) / 분석 도구 (4) / 의사결정 흐름 (1)

---

## Phase 0 — Pre-task (인프라, 4 T 단위)

- [x] **S8-T0.1** `src/components/slides/s8/{theory,activity}/` 폴더 + placeholder `index.js` × 2 (빈 배열) ✅ (2026-05-16)
- [x] **S8-T0.2** `src/lib/deck-registry.js` s8 entry 등록 ✅ (2026-05-16)
  - title: "풀스택 배포와 분석 셋업"
  - subtitle: "Vercel·Railway·CORS·분석 도구 3종 (Clarity / Sentry / 이벤트 추적)"
- [x] **S8-T0.3** `lectures/S8/` 폴더 구조 확정 ✅ (2026-05-16)
  - **결정**: 강사 자료는 `lectures/S8/captures/{lecture.md, assignment.md, checklist.md}` **유지** — Write 권한이 captures/ 하위만 허용 = 강사 자료 보호 정책
  - **S7과 차이**: S7은 직접 위치(`lectures/S7/lecture.md`)이나 S8은 captures/ 위치 정책
  - **lecture-translator 호출 시 경로 명시 의무**: `E:\claude-curriculum-platform_copy\lectures\S8\captures\lecture.md`
  - **메인 산출물 (spec.md / profile.yaml / Task.md / request.md)은 `lectures/S8/` 직접 위치에 작성** (Task.md 이미 성공)
- [x] **S8-T0.4** lecture-translator α.1 파서 점검 ✅ (2026-05-16: 표준 형식 # / ## / ### / #### 사용 확인 / npm build PASS 12 routes / s8 빈 배열 정상 처리)

---

## Phase 1 — 통합 분석 + Gate-1 (4 T 단위)

- [x] **S8-T1.1** lecture.md 정밀 분석 + 헤더 트리 추출 ✅ (2026-05-16: lecture-translator α / 헤더 트리 # 1 / ## 4 / ### 17 / #### 114 / coverage 100%)
- [x] **S8-T1.2** `lectures/S8/spec.md` § 0 + § 1 작성 ✅ (2026-05-16: Meta + Header Tree + 8타입 분포 + coverage map + 5 단정 위치)
- [x] **S8-T1.3** `lectures/S8/profile.yaml` 자동 도출 + 추론 ✅ (2026-05-16):
  - logic_structure: **hierarchical** (high confidence)
  - core_visual_kind: **comparison** (primary) + **process** (secondary, high confidence)
  - expected_slide_count: **122** (이론 63 + 실습 44 + 과제 1 + Tips 14)
  - tone_strength: **strong** (high confidence, 5 단정 명시)
  - interactivity_density: **medium** (medium confidence)
- [x] **S8-T1.4** ⛳ **Gate-1 강사 검토 완료** ✅ (2026-05-16: 8 강사 결정 확정 / D-049~D-054 적용 위치 / Monorepo·분리 양쪽 슬라이드 작성 / Gate-2 추가 / profile.yaml status → confirmed)

---

## Phase 2 — 이론 미니사이클 (12 T + 자동 2, ~62장)

### 자동 매핑 (D-032/D-033, 2장)
- [x] **S8-T2.0a** 세션 표지 (t1, Cover 자동) ✅ (2026-05-16: D-031 메타 자동 통과)
- [x] **S8-T2.0b** 이론 목차 (t2, Objectives 자동) ✅ (2026-05-16: 6 학습 목표)

### §1 풀스택 구조와 FE/BE 분리 (2 미니사이클, ~10장)
- [x] **S8-T2.1a** §1-A 풀스택 정체 + BE 필요 + 첫 단정 + 신뢰 경계 + 식당 비유 (t3-t8, 6장) ✅ (2026-05-16: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / D-049~D-054 PASS / D-035 ✗/✓ → 차단/허용 텍스트 대체 / creative 87)
- [x] **S8-T2.1b** §1-B 분리 배포 + 안티 + FE 직접 vs BE 경유 + 용어 (t9-t12, 4장) ✅ (2026-05-16: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / **D-053 ⭐ Vercel/Railway 첫 등장 시험대 PASS** / D-050 표 4개 원문 100% / creative 85.4)

### §2 최소 개발 지식 (3 미니사이클, ~14장)
- [x] **S8-T2.2a** §2-A 왜 필요 + 6어휘 개요 + HTTP (t13-t16, 4장) ✅ (2026-05-16: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / D-053 ⭐ HTTP 시험대 PASS / D-050 6어휘 표 + HTTP flow 원문 100% / creative 82.8)
- [x] **S8-T2.2b** §2-B 도메인 + 포트 + 환경변수 (t17-t19, 3장) ✅ (2026-05-16: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / D-053 PORT/process.env.PORT 시험대 PASS / D-054 OPENAI_API_KEY accent / creative 80.4)
- [x] **S8-T2.2c** §2-C 빌드배포 + API + F12 + **두 번째 단정** + 어휘=정확성 + 안티 + 용어 (t20-t25, 6장) ✅ (2026-05-16: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ 두 번째 단정 t23 quote(5) + D-052 t25 9-row → 2-col 분할 시험대 PASS / D-035 자동 수정 1건 (2️⃣) / creative 86)

### §3 Vercel·Railway·환경변수 (2 미니사이클, ~10장)
- [x] **S8-T2.3a** §3-A 두 플랫폼 + 분담 + 환경변수 3종 + BE 비밀 + FE 공개 + 로컬용 (t26-t32, 7장) ✅ (2026-05-16: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / D-053 ⭐ Vercel/Railway 본격 정의 + D-054 ⭐ OPENAI_API_KEY/NEXT_PUBLIC_API_URL/.env.local/.gitignore accent / creative 85.4)
- [x] **S8-T2.3b** §3-B **세 번째 단정** + .gitignore + 안티 + 키 노출 대응 + 용어 (t33-t37, 5장) ✅ (2026-05-16: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ 세 번째 단정 t33 + D-053/D-054 시험대 PASS / .env.local/.gitignore/*.pem/*.key/NEXT_PUBLIC_ accent / creative 86.4)

### §4 CORS (2 미니사이클, ~12장)
- [x] **S8-T2.4a** §4-A CORS 정의 + 왜 존재 + 두 정책 + 화이트리스트 효과 (t38-t42, 5장) ✅ (2026-05-16: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ D-053 CORS = Cross-Origin Resource Sharing 정식 정의 시험대 PASS / D-054 Access-Control-Allow-Origin accent / D-035 자동 수정 1건 (2️⃣) / creative 84.2)
- [x] **S8-T2.4b** §4-B **네 번째 단정** + 통과 의례 + 두 갈래 + 자율 디버깅 + 표준 명령 + 검증 체크리스트 + 안티 + 용어 (t43-t49, 7장) ✅ (2026-05-16: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ 네 번째 단정 t43 + D-035 ✓/❌ → 필수/선택/복잡 텍스트 대체 + D-054 Access-Control-Allow-Origin warning accent / creative 88.6)

### §5 분석 도구 3종 (3 미니사이클, ~16장)
- [x] **S8-T2.5a** §5-A 왜 필요 + **다섯 번째 단정** + 1명 사용자 + 3종 질문 (t50-t54, 5장) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ 다섯 번째 단정 t52 + D-053 Microsoft Clarity/Sentry/이벤트 추적 첫 등장 시험대 PASS / creative 85.4)
- [x] **S8-T2.5b** §5-B Clarity + Clarity 핵심 비교 + Sentry + Sentry 알려줌 + Sentry 본질 (t55-t59, 5장) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ D-053 Clarity + Sentry 본격 정의 시험대 PASS / 시드6 예시 2건 / creative 84.4)
- [x] **S8-T2.5c** §5-C 이벤트 추적 + 이벤트 표준 3 + 이벤트 vs Clarity + 의사결정 흐름 + 종합 비교 + 셋업 시점 + 안티 + 용어 (t60-t67, 8장) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ D-052 t67 6용어 2-col 분할 + 세 도구 의사결정 흐름 완성 / D-050 종합 비교 표 + 셋업 시점 원문 / creative 89.6)
  - **D-050 적용**: 종합 비교 표 (L848-855) 원문 ✓
  - **D-052 적용**: t67 6용어 2-col 분할 ✓

⛳ **Gate-2 (T2.5c 종료 후) — 자동 통과 권고**: 강사 승인 사항 (1) Clarity → UX 개선 / Sentry → 버그 수정 / 이벤트 추적 → PRD 갱신 의사결정 매핑 t54/t63/t64 슬라이드에 명시 / (2) `analytics-plan.md` 양식은 assignment.md 가이드 그대로 적용 / (3) 작성 시기 = 다음 단계(노출) 직전. 모호도 0 — 자동 통과 적용.

---

## Phase 3 — 실습 미니사이클 (8 T + 자동 1, ~50장)

### 자동 매핑 (1장)
- [ ] **S8-T3.0** 실습 목차 (a1, Objectives)

### Step 0 환경 진단 + 리포 구조 (1 T, ~7장)
- [x] **S8-T3.1** Step 0 (a2-a8, 7장) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ D-054 8개 산출물 경로 (planning_project/server/e2e/.claude/agents/.gitignore/.env*/process.env.PORT//cost) 시험대 PASS / D-043 planning_project + D-050 옵션 A·B 표 원문 / creative 85.4)

### Step 1 BE 배포 Railway (1 T, ~10장)
- [x] **S8-T3.2** Step 1 (a9-a18, 10장, 8단계) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ D-054 Railway/server/OPENAI_API_KEY/process.env.PORT/.up.railway.app/.health/Deployments/Build Logs accent / D-053 Railway/Nixpacks/curl/Invoke-WebRequest 첫 등장 / creative 87.8)

### Step 2 FE 배포 Vercel (1 T, ~6장)
- [x] **S8-T3.3** Step 2 (a19-a25, 7장, 5단계) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ D-054 NEXT_PUBLIC_API_URL/Vercel/Next.js/.vercel.app accent + D-053 Vercel/Framework Preset/Next.js/NEXT_PUBLIC_/CORS policy 첫 등장 / D-035 ✓/✗ → [정상]/[에러] 텍스트 대체 / creative 84.8)

### Step 3 CORS 해결 (자율 디버깅 3원칙) (1 T, ~8장)
- [x] **S8-T3.4** Step 3 (a26-a33, 8장) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ S7 자율 디버깅 3원칙 재활용 + D-054 railway.app/vercel.app/server/Access-Control-Allow-Origin/git-committer/Console/Network/cors 미들웨어 accent + D-053 Console/Network 첫 등장 / D-035 ✓/❌ → 필수 텍스트 대체 / creative 90)

### Step 4 분석 도구 3종 셋업 (1 T, ~9장)
- [x] **S8-T3.5** Step 4 (a34-a42, 9장) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ D-054 src/app/layout.tsx / InputForm.tsx / CopyButton.tsx / window.clarity / DSN accent + D-053 Clarity/Sentry/window.clarity/DSN/Sentry SDK 본격 활용 / creative 87.4)

### Step N 정리·비용·회고 (1 T, ~5장)
- [x] **S8-T3.6** Step N (a43-a47, 5장) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐⭐ D-050 시험대 PASS (산출물 6-row + 회고 3-row 원문 100% — S7 a40 위반 재발 방지) / D-046 자동 수정 1건 (font-mono) / creative 85.2)
  - N-1 산출물 표 (5-6행) / N-2 `/cost` / N-3 회고 표 (3-row) / 검증
  - **D-050 적용 ⭐⭐**: 산출물 표 + 회고 표 lecture.md 원문 100% — **S7 T3.5 시험대 재현**

### 과제 (1 T, 1장)
- [x] **S8-T3.7** 과제 (a48, 1장, Activity 3-row 표 + `assignment.md` 참조) ✅ (2026-05-17: 메인 직접 작성 / D-050 원문 보존 / D-054 assignment.md+Clarity+Sentry accent / build PASS)

### Tips 7 카테고리 (1 T, 14장)
- [x] **S8-T3.8** Tips (a49-a62, 14장, S7 패턴: Cover 7 + Content 7) ✅ (2026-05-17: 4단계 ✓β'/✓γ' fall-back/✓δ'/✓ε' / build PASS / ⭐ D-054 NEXT_PUBLIC_/server/process.env.PORT/Access-Control-Allow-Origin/copy_generation_completed accent + a60 3 도구 표 통합 / creative 85.4)
  - Tip 1 최소 개발 지식 (2 ####) ✓
  - Tip 2 분리 배포 (2 ####) ✓
  - Tip 3 Railway (3 ####) ✓
  - Tip 4 Vercel (2 ####) ✓
  - Tip 5 CORS (3 ####) ✓
  - Tip 6 분석 도구 (4 ####, 3 도구 비교 표 포함) ✓
  - Tip 7 의사결정 흐름 (1 ####) ✓

### T3.ε 실습 통합 검증
- [x] **S8-T3.ε** 실습 빌드 + design-check (총 129장 누적: 이론 67 + 실습 62) ✅ (2026-05-17: build PASS / 5축 grep 0건 / coverage 100% / D-049~D-054 PASS)

---

## Phase 4 — Final ε (통합 검증, 7 T 단위)

- [x] **S8-T4.1** ε.1 npm build — 12 routes PASS exit 0 ✅
- [x] **S8-T4.2** ε.2 capture-checker — N/A (CaptureSlide 사용 0건) ✅
- [x] **S8-T4.3** ε.3 design-checker 5축 + D-049~D-054 — 0 violation ✅
- [x] **S8-T4.4** ε.4 coverage 사후 — lecture.md L1~L1721 모든 매핑 100% (129/129) ✅
- [ ] **S8-T4.5** ε.5 Playwright 시각 검증 (선택, 사용자 결정 시 진행)
- [x] **S8-T4.6** ε.6 history.md § 9 갱신 — render-validator agent 자동 작성 ✅
- [x] **S8-T4.7** ε.7 spec § 5 Final Sign-off — 메인 직접 작성 ✅

---

## Phase 5 — S8Form 제출 인프라

- [x] **S8-P5.1** `S8Form.jsx` 신규 ✅ (2026-05-17: 8 fieldset / 학생 정보 + BE 배포 (Railway URL+env+health) + FE 배포 (Vercel URL+API_URL+화면) + CORS 디버깅 + 분석 도구 3종 (Clarity/Sentry/이벤트) + /cost 비교 + 재피드백 메일 카피 + 회고 3)
- [x] **S8-P5.2** `SubmitForm.jsx` — s8 분기 추가 ✅ (import S8Form + if slug === 's8' return)
- [x] **S8-P5.3** `/admin` — `SUBMIT_SUPPORTED_SLUGS`에 `'s8'` 추가 ✅ (page.js L13)

---

## Phase 6 — 강사 검증 + 결함 수정 사이클 (request.md 입력 시)

> 입력: `lectures/S8/request.md` (강사 시각 검증 후 결함 보고 시 작성)
> Task 설계 규칙: 한 Task = 한 결함, 변경 대상 파일 inline 코드, request 원문 인용, 사전 확인 필요 라벨

- [ ] **S8-T6.1** 강사 시각 검증 (dev server `npm run dev` 부팅 후 ~123장 + 제출 흐름 점검)
- [ ] **S8-T6.x** 결함 수정 사이클 (한 Task = 한 결함) — D-049~D-054 회귀 시 우선 수정
- [ ] **S8-T6.ε** npm build + design-checker 0 violation + 시각 확인
- [ ] **S8-T6.σ** history.md § 9 "S8 Phase 6 결함 수정 완료 (N건)" 블록 추가
- [ ] **S8-T6.f** spec.md § 5 Final Sign-off 갱신

---

## 미니 사이클 집계 (S8, ~123장, 의미 응집 단위)

> S1~S7 패턴 일관 — lecture.md `####` 의미 응집 단위 기준 분할 (슬라이드 수 X)

| 영역 | 미니사이클 | 슬라이드 |
|---|---|---|
| 자동 생성 (T2.0a/b + T3.0) | 3 | 3 |
| 이론 §1 (T2.1a/b) | 2 | ~10 |
| 이론 §2 (T2.2a/b/c) | 3 | ~14 |
| 이론 §3 (T2.3a/b) | 2 | ~10 |
| 이론 §4 (T2.4a/b) | 2 | ~12 |
| 이론 §5 (T2.5a/b/c) | 3 | ~16 |
| **이론 소계** | **12 + 자동 2** | **~62** |
| 실습 Step 0 (T3.1) | 1 | ~7 |
| 실습 Step 1 Railway (T3.2) | 1 | ~10 |
| 실습 Step 2 Vercel (T3.3) | 1 | ~6 |
| 실습 Step 3 CORS (T3.4) | 1 | ~8 |
| 실습 Step 4 분석도구 (T3.5) | 1 | ~9 |
| 실습 Step N (T3.6) | 1 | ~5 |
| 과제 (T3.7) | 1 | 1 |
| Tips 7 카테고리 (T3.8) | 1 | 14 |
| **실습 소계** | **8 + 자동 1** | **~60** |
| **총** | **20 미니사이클 + 자동 3 = 23 T 단위** | **~123** |

---

## S7 회귀 패턴 사전 대응

S7 누적 결함 39건 → 자동 수정 39건 (회귀 0). S8 사전 대응 명시:

| S7 결함 | S8 사전 대응 |
|---|---|
| **D-003 회귀 21건** (rounded-md) | β' / δ' 호출 시 명시: "checkbox 포함 모든 radius `rounded-xl` 의무" |
| **D-046 font-mono 1건** | β' / δ' prompt에 "font-mono 사용 0건" 명시 |
| **D-049 회귀 8건** | β' 호출 시 화이트리스트 토큰 명시 (bg-bg-soft / text-text / border-divider 등) |
| **SlideFrame 이중 wrap 9건** | δ' prompt에 "inline JSX 우선, Cover만 직접 import" 명시 |
| **γ' 27/27 fall-back** | D-048 정식 운영 룰 — agent 호출 시도 유지 + 메인 직접 spec § 3.NN 작성 |

---

## 강사 게이트 위치 (2건)

| 게이트 | 위치 | 결정 내용 |
|---|---|---|
| **Gate-1** | Phase 1 T1.4 종료 후 | 8 강사 결정 확정 + D-049~D-054 적용 위치 + Monorepo·분리 양쪽 슬라이드 작성 확정 |
| **Gate-2** | Phase 2 T2.5c 종료 후 | 분석 도구 3종 의사결정 매핑 + `analytics-plan.md` 양식 + 작성 시기 |

---

## 즉시 시작 작업 (Task.md 작성 완료 후)

1. **사용자 ⛳ 확정**: Task.md 검토 → Phase 0 진입 결정
2. **Phase 0**: 인프라 4 T 단위 진행

---

**[S8 Task.md 작성 완료 — 사용자 검토 대기]**

Generated: 2026-05-16 / Main v2 / 23 T 단위 + ~123 슬라이드 / D-049~D-054 표준 정착 / Gate-1 + Gate-2
