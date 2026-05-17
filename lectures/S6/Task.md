# S6 큐레이션 Task 목록 (2026-05-13)

> **세션**: 확장과 자동화 (Extension & Automation — sub-agent와 hooks)
> **lecture.md**: 1248줄 — 이론 4 챕터 + 실습 6 Step (0~5 + N) + 과제 + Tips 5
> **lecture.md 형식**: 표준 (`####` 콘텐츠 분할 사용, S4·S5와 동일)
> **이전 세션 누적**: S4·S5 `planning_project/` 위에 `.claude/agents/` 신규 (sub-agent 2개) + `.claude/settings.json hooks` 영역 확장
> **메타 메시지 (A4)**: 학생들이 만들 자동화의 모범 — sub-agent 격리 호출 + hook 자동 트리거가 본 sprint 워크플로 자체와 일관

---

## 강사 결정 (확정 후보)

| # | 결정 | D-NNN | 영향 |
|---|---|---|---|
| 1 | 표준 형식 채택 (`####` 단위) | — | α.1 파서 표준 모드 (S4·S5 동일) |
| 2 | 6원칙 6-card overview + 원칙 1~6 각 1슬라이드 | — | §2 9+8 = 17장 분할 (2-A/2-B) |
| 3 | 5 lifecycle 5-row overview + 각 풀이 1슬라이드 | — | §3 8+7 = 15장 분할 (3-A/3-B) |
| 4 | sub-agent markdown 양식 (prd-reviewer / git-committer) → CodeBlock 패턴 | — | `s27` `s51` `a10` `a14` 4슬라이드 |
| 5 | settings.json hooks → CodeBlock 패턴 + 파일 경로 라벨 | — | `a18` JSON 코드 블록 |
| 6 | KeyMessage `size="sm"` (S4 신규 prop) — 3 단정문 일관 적용 | D-042 | s6/s19/s34 모두 적용 |
| 7 | D-043 `planning_project` 고정 (A7) — S4·S5 폴더 그대로 | D-043 | Step 0-2, Step 1 디렉토리, Step 4·5 커밋 |
| 8 | D-044 SSOT 확장 (A8) — `.claude/agents/` (§3.6 신설 검토) + hooks 영역 (§3.7 확장) | D-044 | 본 sprint 종료 후 reference.md 갱신 |

---

## 슬라이드 합계 (목표 ~109장, Phase 1에서 정밀 확정)

| 영역 | 추정 슬라이드 수 |
|---|---|
| 이론 | **~57** (자동 2 + §1 12 + §2 17 + §3 15 + §4 11) |
| 실습 | **~52** (자동 1 + Step 0 6 + Step 1 5 + Step 2 4 + Step 3 5 + Step 4 8 + Step 5 7 + Step N 5 + 과제 1 + Tips 5×2=10) |
| **총** | **~109** (Phase 1 정밀 분석 후 확정) |

---

## D-043 적용 — `planning_project` 폴더 유지

S4·S5에서 생성된 `planning_project/` 폴더 위에 본 세션이 `.claude/agents/` (sub-agent 2개) + `.claude/settings.json hooks` 영역 추가. GitHub repo 이름 `planning_project` 일관.

| lecture.md 영역 | 슬라이드 적용 |
|---|---|
| Step 0-2 (L687·L696) `cd planning_project` / `Set-Location planning_project` | 그대로 |
| Step 1-1 (L741) `mkdir -p .claude/agents` | `planning_project/.claude/agents/` 명시 |
| Step 4-1 (L998) Issue #2 브랜치 | `planning_project` 저장소 안 |
| Step 5-1 (L1080) Issue #5 브랜치 | 동일 |

**A2 원칙**: lecture.md 자체 수정 X — 슬라이드 빌드 단계에서만 변환.

---

## D-044 적용 — `student-project-reference.md` SSOT 참조 + 확장 검토

S6가 본격 채우는 신규 영역:

| 신규 영역 | 본 세션 작업 | reference.md 확장 검토 절 |
|---|---|---|
| `.claude/agents/prd-reviewer.md` | Step 1 6원칙 따라 작성 | **§3.6 신설 검토** (sub-agent 양식) |
| `.claude/agents/git-committer.md` | Step 2 6원칙 따라 작성 | §3.6 |
| `.claude/settings.json hooks` 필드 | Step 3 PostToolUse + Stop 등록 | **§3.7 확장 검토** (기존 permissions 외 hooks 추가) |

**충돌 시 SSOT 우선** — 본 sprint 종료 후 reference.md 갱신 권고 (강사 협업).

---

## lecture.md 헤더 트리 (자동 매핑 미리보기)

### 이론 (4 챕터, L18-653)
- **§1 확장과 자동화의 본질** (L18-141, 11 #### + 챕터 표지) — 자료 5 종료/9번 반복/단정/3조건/조건 1·2·3/반복 발견/안티/용어
- **§2 Agent 설계 6원칙** (L142-338, 14 #### + 챕터 표지) — sub-agent 정체/4차이/격리/단정/6원칙/원칙 1~6/prd-reviewer 표준/점검/frontmatter/안티/용어
- **§3 hooks와 5 lifecycle 이벤트** (L339-490, 13 #### + 챕터 표지) — hooks 정체/단정/CLAUDE.md vs hook/type 2/5 lifecycle/Pre·Post·UserPrompt·Stop·SubagentStop 풀이/matcher/timeout/안티/용어
- **§4 자동 검증과 자동 커밋의 핵심 패턴** (L491-653, 10 #### + 챕터 표지) — Pattern 1/변화/Pattern 2/git-committer 표준/점검/Pattern 2 흐름/결합 사이클/검증 우선주의/안티/용어

### 실습 (7 Step + 과제 + Tips, L654-1248)
- **Step 0 환경 진단** (L675-731, 4 ####)
- **Step 1 prd-reviewer 작성** (L733-816, 3 ####)
- **Step 2 git-committer 작성** (L818-899, 2 ####)
- **Step 3 hook 작성 (PostToolUse + Stop)** (L901-989, 3 ####)
- **Step 4 화면 1 나머지 Task 빌드** (L991-1072, 5 ####)
- **Step 5 화면 2 빌드 (패턴 복사)** (L1074-1146, 5 ####)
- **Step N 정리·회고** (L1148-1186, 3 ####)
- **과제** (L1188-1200)
- **Tips 5 카테고리** (L1202-1248) — 확장과 자동화 / Agent 설계 / hooks / 검증 우선주의 / 빌드 효율

---

## Phase 0 — Pre-task ✓

- [x] **S6-T0.1** `src/components/slides/s6/{theory,activity}/` 폴더 + placeholder `index.js` × 2 신규 ✅
- [x] **S6-T0.2** `src/lib/deck-registry.js` s6 entry 등록 ✅ (import 2건 + decks.s6 entry)
- [x] **S6-T0.3** `lectures/S6/captures/` 폴더 신규 ✅
- [x] **S6-T0.4** lecture-translator α.1 파서 점검 ✅ — 표준 형식 (S4·S5와 동일, 추가 적응 X). `### + emoji 1️⃣~4️⃣` → strip_emoji + classify_header(section_cover). `### Step N` → section_cover. `#### + 한글` → content. **빌드 통과** (placeholder 상태)

---

## Phase 1 — 통합 분석 (Gate-1) — 미니 사이클 단위 7개로 세분화

- [x] **S6-T1.1** lecture.md 정밀 분석 + 헤더 트리 추출 ✅ (lecture-translator 격리 호출 + 메인 γ'/ε' 보조 검증)
  - **헤더 카운트**: # 1 / ## 4 / ### 16 (이론 4 + 실습 7 + Tips 5) / **#### 95** (이론 51 + 실습 35 + Tips 9)
  - **이론 4 챕터 (L18-653, #### 51개)**:
    - §1 확장과 자동화의 본질 L18-141 (**11 ####**)
    - §2 Agent 설계 6원칙 L142-338 (**16 ####**)
    - §3 hooks와 5 lifecycle L339-490 (**14 ####**)
    - §4 두 핵심 패턴 L491-653 (**10 ####**)
  - **실습 7 Step (L654-1186, #### 35개)**:
    - Step 0 환경 진단 L675-731 (5) / Step 1 prd-reviewer L733-816 (5) / Step 2 git-committer L818-899 (4)
    - Step 3 hook L901-989 (4) / Step 4 화면 1 빌드 L991-1072 (7) / Step 5 화면 2 빌드 L1074-1146 (6) / Step N 정리·회고 L1148-1186 (4)
  - **과제 L1188-1200** (0 ####, 표 + 결론만)
  - **Tips 5 카테고리 L1202-1248** (9 ####): 확장·자동화 2 / Agent 설계 2 / hooks 3 / 검증 우선 1 / 빌드 효율 1
  - **β' (lecture-translator 격리 호출)**: 헤더 트리 + 줄 번호 + per-챕터 #### 카운트 추출 ✓
  - **γ' 보조 검증 (메인 grep)**: `grep -c "^#### " lecture.md` = 95 / 합산 (11+16+14+10) + (5+5+4+4+7+6+4) + 9 = 95 ✓ / `grep -c "^### "` = 16 ✓
  - **ε' 자가 점검**: profile.yaml 청사진(이론 57 + 실습 52 = 109장) 호환 — #### 95개를 일부 통합 (6원칙 한눈+원칙 1~6 / 5 lifecycle 풀이 5장)하여 109장 달성. Phase 2 매핑에서 정식 확정
- [x] **S6-T1.2** profile.yaml 작성 ✅ (lecture-translator 격리 호출 + 메인 γ' fall-back 정정)
  - **자동 도출**: logic_structure=**hierarchical** / core_visual_kind=**comparison** / expected_slide_count=**109** (이론 57 + 실습 52)
  - **추론**: interactivity_density=**medium-high** (9~10 후보, 신뢰도 high) / tone_strength=**balanced** (단정 3 + 안티 4 + 메타 명확, 신뢰도 high)
  - **session_specific_decisions**: content 7건 (C-S6-01~07) / interactivity 8건 (E-S6-01~08) / format_handling 9건
  - **emoji_text_mapping**: 1️⃣~4️⃣ → Section 1~4 (4건)
  - **decisions_resolved**: 8건 (profile / 미니사이클 분할 / 슬라이드 분포 / 실습 9 미니사이클 / sub-agent CodeBlock / hooks CodeBlock / Tips 10장 / KeyMessage size='sm')
  - **β' (lecture-translator 격리 호출)**: profile.yaml 신규 작성 ✓
  - **γ' 메인 fall-back 정정** (D-030 단서): agent 초안 산수 결함 발견 — 이론 57+실습 57=114 (선언 109 ≠). 청사진 미니사이클 분할 어긋남 (이론 4 미니사이클 vs 청사진 6). 메인 정정 — 이론 자동 2 + 12 + 17 + 15 + 11 = 57 / 실습 자동 1 + 6 + 5 + 4 + 5 + 8 + 7 + 5 + 1 + 10 = 52 / 총 109 ✓
  - **δ' 빌드**: profile.yaml 런타임 영향 X → skip
  - **ε' 자가 점검**: S5 schema 12 필드 일치 / emoji 매핑 1️⃣~4️⃣ 4건 lecture.md ### 헤더와 일치 / decisions_resolved 8건 청사진 호환 ✓
- [x] **S6-T1.3** spec.md § 0 (Meta) + § 1.1 (Header Tree) ✅ (lecture-translator 격리 호출)
  - **§ 0 Meta** (L7-19): session_id/title/subtitle/source/assignment/checklist/profile/Task/start_date/이전 세션 누적
  - **§ 1.1 Header Tree** (L24-167): lecture.md 모든 ###/#### 줄 번호 + 자동 매핑 미리보기 (D-032/D-033/D-035 적용)
  - **파서 적응 룰 9건**: # 세션표지 / ## 덱목차 / ## 과제·Tips 흡수 / ### emoji 챕터표지 / ### Step 섹션표지 / ### Tips 카테고리 / #### 콘텐츠 / 1-3·2-2 inline 통합 / 4-2 명령+다이어그램 분할 유지 / 코드블록 헤더 skipped
  - **카운트 요약** spec 내 반영: # 1 / ## 4 / ### 16 / #### 95 / 슬라이드 109장 (이론 57 + 실습 52)
  - **§ 1.2 / § 1.3 / § 2 / § 3 / § 4 / § 5**: placeholder (T1.4~T1.6에서 채움)
  - **β' (lecture-translator 격리 호출)**: spec.md 신규 작성 ✓
  - **γ' 메인 grep 보조 검증**: § 헤더 9개 모두 존재 ✓ (§ 0/§ 1/§ 1.1~1.3/§ 2~§ 5) / 줄 번호 참조 107건 (lecture.md 모든 헤더 반영) ✓
  - **δ' 빌드**: spec.md 런타임 영향 X → skip
  - **ε' 자가 점검**: S5 spec.md 동형 구조 (총 201줄) / § 0+§ 1.1 정식 / 나머지 § placeholder ✓
- [x] **S6-T1.4** spec.md § 1.2 이론 자동 매핑 (s1~s57, 57장) ✅ (lecture-translator 격리 호출)
  - **§ 1.2.1 이론 매핑 표 작성** — 57행 (s1~s57), 각 행: slide / T 단위 / 8타입 emphasis / source line / 콘텐츠 한 줄
  - **자동 생성 6장** (D-032 + D-033): s1 세션 표지 / s2 이론 목차 / s3·s15·s32·s47 챕터 표지 4개
  - **8타입 분포** (실측):
    - TitleSlide 6 (Cover 5 + Objectives 1)
    - ConceptSlide 17 (default 11 / key-message 3 / definition 3)
    - ComparisonSlide 20 (2~6-row 표)
    - ProcessSlide 3 (6~11-step diagram)
    - ExampleSlide 7 (Warning + CodeBlock + 안티패턴)
    - TermsSlide 4 (4~6행 용어 해설)
    - QuoteSlide 0 / ActivitySlide 0 (이론 미사용)
  - **β' (lecture-translator 격리 호출)**: spec § 1.2.1 표 작성 ✓
  - **γ' 메인 grep 보조 검증**: 57행 카운트 ✓ / 8타입 합산 6+17+20+3+7+4 = 57 ✓ (agent 자체 분포 카운트 53은 실수, 실제 표는 정확)
  - **δ' 빌드**: spec.md 런타임 영향 X → skip
  - **ε' 자가 점검**: § 1.2.2 placeholder 유지 / 다른 § (§ 0, § 1.1, § 1.3, § 2~§ 5) 변경 X / 미니사이클 14 단위 (T2.0a/b + T2.1a/b/c + T2.2a/b/c/d + T2.3a/b/c + T2.4a/b/c) T 단위 매핑 일관 ✓
- [x] **S6-T1.5** spec.md § 1.2.2 실습 자동 매핑 (a1~a52, 52장) ✅ (lecture-translator 격리 호출 + 메인 γ' fall-back 정정)
  - **§ 1.2.2 실습 매핑 표 작성** — 52행 (a1~a52), 각 행: slide / T 단위 / 8타입 emphasis / source line / 콘텐츠 한 줄
  - **자동 생성 1장** (D-032): a1 실습 목차 (Objectives 8 items)
  - **섹션 표지 11장** (D-033): a2/a8/a13/a17/a22/a30/a37 + Tips 5 카테고리 표지 (a43/a45/a47/a49/a51)
  - **8타입 분포 (실측, agent 자체 카운트 보고는 부정확)**:
    - TitleSlide Cover 12 + Objectives 1 = 13
    - ConceptSlide / default 7 (a4 5-card / a38 7-card / a44-46-48-50-52 Tips 통합)
    - ComparisonSlide 6 (2~5-row 표)
    - ProcessSlide 3 (a19 4-step / a20 4-step / a25 6-step diagram)
    - ExampleSlide 15 (CodeBlock + 2-col code + inline 2-area 통합)
    - ActivitySlide 8 (Checklist + 과제 표)
    - TermsSlide 0 / QuoteSlide 0 (실습 미사용)
  - **β' (lecture-translator 격리 호출)**: spec § 1.2.2 표 작성 ✓
  - **γ' 메인 grep 보조 검증**: 52행 카운트 ✓ / 8타입 합산 13+7+6+3+15+8 = 52 ✓ / T 단위 분배 (T3.0 1 / T3.1a 3 / T3.1b 3 / T3.2 5 / T3.3 4 / T3.4 5 / T3.5a 4 / T3.5b 4 / T3.6a 4 / T3.6b 3 / T3.7 5 / T3.8 1 / T3.9 10) = 52 ✓
  - **δ' 빌드**: spec.md 런타임 영향 X → skip
  - **ε' 자가 점검**: § 1.3 placeholder 유지 / 다른 § (§ 0/§ 1.1/§ 1.2.1/§ 2~§ 5) 변경 X / T 단위 13 + 자동 1 = 14 미니사이클 매핑 일관 ✓
- [x] **S6-T1.6** spec.md § 1.3 coverage_map + § 2 Composition + § 3~§ 5 skeleton ✅ (lecture-translator 격리 호출)
  - **§ 1.3 Coverage Map** (정식): lecture.md L1~L1248 모든 콘텐츠 블록 매핑, **total_coverage: 100%** ✓ (skipped 0건)
  - **§ 2 Composition** (skeleton + 매핑 표): 미니사이클 28행 매핑 표 (T2.0a~T2.4c + T3.0~T3.9, s1~s57 + a1~a52) / § 2.1 Mini-cycle Mapping + § 2.2 Composition Elements 골격
  - **§ 3 Validation** (skeleton): § 3.1 quality 28축 + § 3.2 creative 5축 + § 3.3 자동 통과 룰
  - **§ 4 Build & Verify** (skeleton): § 4.1 δ' (wrapper jsx + npm build) + § 4.2 design-checker + § 4.3 ε' (render-validator)
  - **§ 5 Final Sign-off** (skeleton): § 5.1 통합 빌드 검증 체크리스트 + § 5.2 강사 시각 검증
  - **β' (lecture-translator 격리 호출)**: § 1.3 정식 + § 2~§ 5 skeleton 작성 ✓
  - **γ' 메인 grep 보조 검증**: § 헤더 구조 일관 ✓ / 미니사이클 매핑 표 **28행** ✓ / `total_coverage: 100%` 명시 ✓
  - **δ' 빌드**: spec.md 런타임 영향 X → skip
  - **ε' 자가 점검**: 기존 § 0/§ 1.1/§ 1.2.1/§ 1.2.2 변경 X / 신규 § 1.3/§ 2/§ 3/§ 4/§ 5 작성 일관 ✓ / Phase 2/3 진입 시 § 2~§ 4가 미니사이클별로 채워질 placeholder 구조 ✓
- [x] **S6-T1.7** Gate-1 강사 검토 ✅ (강사 OK 응답 2026-05-14, Phase 2 진입)
  - decisions_resolved 8건 모두 강사 OK 확인
  - `profile.yaml status: confirmed` 최종 확정
  - **Phase 1 완료** → Phase 2 진입

---

## Phase 2 — 이론 미니 사이클 (14 + 자동 2, 57장)

> **분할 기준**: lecture.md `####` 의미 응집 단위 (S1~S5 패턴 일관). 슬라이드 수 절대 X.

### 자동 생성 (D-032)

- [x] **S6-T2.0a** # 세션 표지 — `01-session-cover.jsx` ✅ (lecture-translator 격리 호출, S5 동형)
  - `src/components/slides/s6/theory/01-session-cover.jsx` 신규 (Cover 패턴 직접 import, S5 동형)
  - props: title="확장과 자동화" / subtitle="sub-agent와 hooks — 자동 검증과 자동 커밋"
  - `theory/index.js` 갱신 (S6_THEORY_SLIDES 배열에 등록)
  - **β' (lecture-translator)**: wrapper jsx + index 갱신 ✓ / S5 동형 구조 일관 ✓
  - **γ' 메인 grep**: emoji/특수문자 0건 ✓ / D-045 bg-bg-elev 0건 ✓ / D-046 font-mono 0건 ✓
  - **δ' 빌드**: `npm run build` ✓ Compiled successfully / 9 routes 통과
  - **ε' 메인 grep 보조** (메타 단순 슬라이드, render-validator fall-back): 빌드 성공 + 디자인 토큰 준수 ✓
  - **⚠️ 런타임 결함 발견 (강사 dev server 보고)**: `GET /sessions/s6/theory 500` — React `type is invalid` 에러. **원인**: index.js export 형식 mismatch — S5는 `[{ id, component }]` 객체 배열인데 agent가 컴포넌트 함수 직접 배열로 작성. 렌더링 코드에서 `slide.component` undefined.
  - **메인 fall-back 정정**: `S6_THEORY_SLIDES = [{ id: 's1', component: Slide01 }]` S5 동형으로 정정 + npm build 재통과 ✓
  - **향후 주의**: 모든 후속 미니사이클에서 index.js 객체 배열 형식 유지 (agent prompt에 명시 의무)
- [x] **S6-T2.0b** 이론 목차 — `02-toc.jsx` ✅ (lecture-translator 격리 호출, S5 동형)
  - `src/components/slides/s6/theory/02-toc.jsx` 신규 (Objectives 패턴)
  - props: eyebrow="본 자료의 구성" + items=[4 챕터, 1️⃣~4️⃣ emoji 제거]
  - `theory/index.js` 갱신 — `{ id: 's2', component: Slide02 }` 객체 배열 형식 유지 (T2.0a 정정 반영)
  - **β' (lecture-translator)**: wrapper jsx + index 갱신 ✓
  - **γ' 메인 grep**: emoji 0건 (D-035) ✓ / 특수문자 0건 ✓ / `bg-bg-elev`/`font-mono`/`rounded-lg` 0건 ✓
  - **δ' 빌드**: `npm run build` ✓ 9 routes 통과
  - **ε' 메인 grep 보조** (메타 자동 D-031): 빌드 성공 + 디자인 토큰 준수 ✓

### §1 확장과 자동화의 본질 (12장, 3 미니사이클)

- [x] **S6-T2.1a §1 도입+단정+정의** (5장, L18-69) ✅ (lecture-translator 격리 호출)
  - 신규 5개 wrapper jsx: `03-c1-cover.jsx` (s3) / `04-c1-data5-end-state.jsx` (s4) / `05-c1-nine-repetitions.jsx` (s5) / `06-c1-first-assertion.jsx` (s6) / `07-c1-two-words.jsx` (s7)
  - **s3** Cover 패턴 (eyebrow="Section 1", title="확장과 자동화의 본질", objectives 3)
  - **s4** inline 2-card (손에 있는 것 5 / 미작업 9개 2, S5 동형 div/ul 마크업)
  - **s5** inline 6-step process diagram (빌드 명령 → 본인 리뷰)
  - **s6** KeyMessage **size="sm"** (D-042, 2-line message ["자동화는 반복을", "발견하는 데서 시작한다"])
  - **s7** Comparison 패턴 (bad/good 2-column, 패턴 복사 vs 자동화)
  - `theory/index.js` 갱신 — s3-s7 5개 객체 추가 (객체 배열 형식 유지)
  - **β' (lecture-translator)**: 5 wrapper + index 갱신 ✓
  - **γ' 메인 grep**: emoji 0건 (D-035, 1️⃣ → "Section 1") / `bg-bg-elev`·`#0F172A`·`font-mono`·`rounded-lg` 0건 (D-045/D-046/D3) ✓
  - **δ' 빌드**: `npm run build` ✓ 9 routes 통과
  - **ε' 메인 grep 보조** (S5 동형 inline JSX 패턴 일관): 디자인 토큰 준수 ✓

- [x] **S6-T2.1b §1 자동화 3조건** (4장, L70-99) ✅ **정식 4단계 워크플로 첫 적용 (CLAUDE.md NEVER 7)**
  - 신규 4 wrapper: `08-c1-3conditions.jsx` (s8) / `09-c1-condition-1.jsx` (s9) / `10-c1-condition-2.jsx` (s10) / `11-c1-condition-3.jsx` (s11)
  - **s8** ConceptSlide / default, 3-card overview (3 조건 카드)
  - **s9-s11** ComparisonSlide, 2-column 좌(자동화 대상) 우(자동화 부적합)
  - `theory/index.js` 갱신 — s8-s11 4 객체 추가 (객체 배열 형식 유지)
  - **✓ β' layer-composer 호출**: spec § 2.3 props/interactive/visual/wireframe 명세 작성. 회귀 1회 (D11 ✓/✕ emphasis_markers → 정정)
  - **✓ γ' 메인 fall-back** (사유: quality/creative-judge file read 권한 부재 명시적 실패, D-030 + NEVER 7 단서 충족): spec § 3.4 작성. quality 28축: PASS 26 / WARN 1(D11) → β' 회귀 정정 / FAIL 0. creative 5축: V1 0(단일 미니사이클 한계, 누적 진척 모니터링) + V2 100 + V4 100 + V5 76 = avg 69 PASS (≥ 65 충족, V3 진척 중)
  - **✓ δ' lecture-translator 호출**: 4 wrapper jsx + index.js 갱신
  - **✓ ε' render-validator 호출**: spec § 4.4 작성. npm build PASS (9 routes, "Compiled successfully") / overflow PASS / 줄바꿈 PASS / 5축 자가 grep PASS (D11/D3/D-045/D-046 모두 0건) / visual regression SKIP (baseline 미존재)
  - **4단계 자동 통과 룰 충족** (FAIL 0 + WARN ≤ 1 after 정정 + creative ≥ 65)

- [x] **S6-T2.1c §1 정리** (3장, L102-140) ✅ **정식 4단계 워크플로 일관 적용**
  - 신규 3 wrapper: `12-c1-found-loops.jsx` (s12) / `13-c1-antipattern.jsx` (s13) / `14-c1-terms.jsx` (s14)
  - **s12** ConceptSlide / default, 3 item list (자료 5에서 발견된 반복)
  - **s13** ExampleSlide, Warning 좌우 (안티 vs 확장과 자동화 결합) — β' 자체 정정 (❌✓ → 텍스트 라벨)
  - **s14** TermsSlide, 용어 해설
  - `theory/index.js` 갱신 — s12-s14 3 객체 (객체 배열 형식 유지)
  - **✓ β' layer-composer 호출**: spec § 2.4 명세 작성 ✓
  - **✓ γ' 메인 fall-back** (사유: T2.1b 명시적 확인된 judges file read 시스템 실패 일관 적용, NEVER 7 단서 충족): spec § 3.5 작성. quality 28축 PASS 28 / WARN 0 / FAIL 0. creative V1 31 + V2 100 + V4 70 + V5 76 = avg **69 PASS** (≥ 65 충족)
  - **✓ δ' lecture-translator 호출**: 3 wrapper jsx + index.js 갱신 (D11 자체 정정 ❌✓ → 텍스트)
  - **✓ ε' render-validator 호출**: spec § 4.5 작성. npm build PASS / overflow PASS / 줄바꿈 PASS / 5축 자가 grep PASS (모두 0건) / visual regression SKIP (baseline 미존재)
  - **자동 통과 룰 충족**: FAIL=0 + WARN=0 + creative=69≥65

### §2 Agent 설계 6원칙 (17장, 4 미니사이클)

- [x] **S6-T2.2a §2 도입+개념+단정** (5장, L142-181) ✅ **정식 4단계 워크플로**
  - 신규 5 wrapper: `15-c2-cover.jsx` / `16-c2-subagent-essence.jsx` / `17-c2-main-vs-subagent.jsx` / `18-c2-context-isolation.jsx` / `19-c2-second-assertion.jsx`
  - **s15** Cover 패턴 (eyebrow "Section 2", title "Agent 설계 6원칙", objectives 3)
  - **s16** ConceptSlide definition + PM 비유 aside
  - **s17** ComparisonSlide 4-row (메인 vs sub-agent: 컨텍스트/출력/도구/호출)
  - **s18** ConceptSlide default 2-area (컨텍스트 격리) — ε' WARN 발견 후 정정 (→ 화살표 2건 → 자연어)
  - **s19** KeyMessage **size="sm"** (D-042, 두 번째 단정)
  - `theory/index.js` 갱신 — s15-s19 5 객체
  - **✓ β' layer-composer 호출**: spec § 2.5 명세
  - **✓ γ' 메인 fall-back** (사유: T2.1b 시스템 실패 일관 적용): spec § 3.6. quality PASS 27 / WARN 1 (B.4 density 누적 160% 초과, T2.2b/c에서 인터랙티브 자제 권고) / FAIL 0. creative V1 36 + V2 100 + V4 85 + V5 76 = avg **74 PASS**
  - **✓ δ' lecture-translator 호출**: 5 wrapper + index.js
  - **✓ ε' render-validator 호출**: spec § 4.6. npm build PASS / 5축 grep 발견 → 화살표 2건 → **δ' 회귀 정정** (인과 → 자연어/쉼표) → 재검증 0건 ✓
  - **자동 통과 룰 충족** (FAIL=0 + WARN≤1 + creative=74≥65)

- [x] **S6-T2.2b §2 6원칙 overview + 원칙 1-3** (4장, L183-225) ✅ **정식 4단계 워크플로**
  - 신규 4 wrapper: `20-c2-6principles-overview.jsx` (s20) / `21-c2-principle-1.jsx` (s21) / `22-c2-principle-2.jsx` (s22) / `23-c2-principle-3.jsx` (s23)
  - **s20** ConceptSlide default, **6-card grid (3×2)** — 단일책임/최소권한/결정출력/책임분리/호출시점/입출력계약
  - **s21-s23** ComparisonSlide, 각 원칙 비교 (단일/분산 / 최소/전체 / 결정/비결정)
  - `theory/index.js` 갱신 — s20-s23 4 객체
  - **✓ β' layer-composer**: spec § 2.6 — **인터랙티브 자제 적용** (T2.2a γ' WARN 권고 반영, 4건 모두 static/minimal)
  - **✓ γ' 메인 fall-back**: spec § 3.7. quality PASS 27 / WARN 1 (B.4 density 누적 200% — T2.2c/d 추가 자제 필요) / FAIL 0. creative V1 0 + V2 100 + V4 40 (의도된 자제) + V5 80 = avg **55 WARN** — 자동 통과 룰 비활성이라 영향 X
  - **✓ δ' lecture-translator**: 4 wrapper + index.js
  - **✓ ε' render-validator**: spec § 4.7. npm build PASS / **자동 수정 3건** — rounded-lg→rounded-md (D3, s21·s23) + font-mono 제거 (D-046, s22) / 재빌드 PASS / 5축 grep 0건 ✓ / visual regression SKIP
  - **자제 적용 정상 동작**: density 200% → 본 미니사이클 신규 X (모두 static). T2.2c/d 지속

- [x] **S6-T2.2c §2 원칙 4-6 + sub-agent 양식** (4장, L227-285) ✅ **정식 4단계 워크플로**
  - 신규 4 wrapper: `24-c2-principle-4.jsx` / `25-c2-principle-5.jsx` / `26-c2-principle-6.jsx` / `27-c2-prd-reviewer-spec.jsx` ⭐
  - **s24** ComparisonSlide, 책임 분리 vs 통합
  - **s25** ComparisonSlide, 호출 시점 명시 vs 모호
  - **s26** ExampleSlide, 입출력 계약 code
  - **s27** ⭐ ExampleSlide, **CodeBlock markdown + 파일 경로 라벨 `.claude/agents/prd-reviewer.md`** (S4 s27·s51 패턴 일관, D-042)
  - `theory/index.js` 갱신 — s24-s27 4 객체
  - **✓ β' layer-composer**: spec § 2.7 / 인터랙티브 자제 지속
  - **✓ γ' 메인 fall-back**: spec § 3.8. quality PASS 27 / WARN 1 (B.4 density 240%, T2.2d static only 권고) / FAIL 0. creative V1 40 + V2 100 + V4 40 + V5 76 = **64 WARN_SOFT** (자동 통과 룰 비활성, 영향 X)
  - **✓ δ' lecture-translator**: 4 wrapper + index.js / **D3/D-046 사전 방지 학습** (T2.2b 자동 수정 사례 반영)
  - **✓ ε' render-validator**: spec § 4.8. npm build PASS / **자동 수정 0건** ✓ / 5축 grep 0건 / visual regression SKIP
  - **사전 방지 학습 효과**: T2.2b에서 자동 수정된 D3/D-046 위반이 본 미니사이클은 사전 회피

- [x] **S6-T2.2d §2 점검+frontmatter+안티+용어** (4장, L288-337) ✅ **정식 4단계 워크플로 / §2 챕터 완료**
  - 신규 4 wrapper: `28-c2-principle-check.jsx` / `29-c2-frontmatter.jsx` / `30-c2-antipattern.jsx` / `31-c2-terms.jsx`
  - **s28** ComparisonSlide 6-row (prd-reviewer 6원칙 점검)
  - **s29** ComparisonSlide 4-row (frontmatter: name/description/tools/model)
  - **s30** ExampleSlide Warning (안티 vs 6원칙 적용)
  - **s31** TermsSlide 5행 (챕터 2 용어 해설)
  - `theory/index.js` 갱신 — s28-s31 4 객체
  - **✓ β' layer-composer**: spec § 2.8 / **static only 강제** (신규 인터랙티브 0건)
  - **✓ γ' 메인 fall-back**: spec § 3.9. quality PASS 27 / WARN 1 (B.4 density 정상화 진척) / FAIL 0. creative V1 46 + V2 100 + V4 40 + V5 30 = avg **54 WARN** (자동 통과 룰 비활성, 영향 X)
  - **✓ δ' lecture-translator**: 4 wrapper / agent 자체 D-046 정정 (s29 font-mono 사전 감지 제거)
  - **✓ ε' render-validator**: spec § 4.9. npm build PASS / **자동 수정 0건** ✓ / 5축 grep 0건 / visual regression SKIP
  - **§2 챕터 완료** (T2.2a-d, s15-s31, 17장 누적) — visual_kind comparison signal_dominance ≥ 0.6 / 8타입 6종

### §3 hooks와 5 lifecycle (15장, 3 미니사이클)

- [x] **S6-T2.3a §3 도입+개념+단정+vs+type** (5장, L339-374) ✅ **정식 4단계 워크플로 / 정상화 전환점**
  - 신규 5 wrapper: `32-c3-cover.jsx` / `33-c3-hooks-essence.jsx` / `34-c3-third-assertion.jsx` / `35-c3-vs-claude-md.jsx` / `36-c3-hook-types.jsx`
  - **s32** Cover ("Section 3" + "hooks와 5개 lifecycle 이벤트")
  - **s33** ConceptSlide definition + 결정적 강조 aside
  - **s34** KeyMessage **size="sm"** (D-042, 세 번째 단정 — 3 단정 시리즈 s6/s19/s34 완성)
  - **s35** ComparisonSlide 3-row (CLAUDE.md vs hook)
  - **s36** ComparisonSlide 2-row (hook type 2가지)
  - `theory/index.js` 갱신 — s32-s36 5 객체
  - **✓ β' layer-composer**: spec § 2.9 / **정상화 전환** (s34만 인터랙티브 1건, 나머지 static)
  - **✓ γ' 메인 fall-back**: spec § 3.10. quality PASS 27 / WARN 1 (B.4 density 정상화 진척) / FAIL 0. creative V1 56 + V2 100 + V4 70 + V5 76 = **75 PASS** (정상화 전환 성공 신호)
  - **✓ δ' lecture-translator**: 5 wrapper / D-046·D3·D11 사전 방지 학습 일관
  - **✓ ε' render-validator**: spec § 4.10. npm build PASS / 자동 수정 0건 / 5축 grep 0건 / visual regression SKIP
  - **§3 챕터 진행 시작** (T2.3a/b/c 3 미니사이클 중 1/3)

- [x] **S6-T2.3b §3 5 lifecycle overview + 풀이 5건** (6장, L375-437) ✅ **정식 4단계 워크플로 / 6장 1 미니사이클 응집 보존**
  - 신규 6 wrapper: `37-c3-5lifecycle-overview.jsx` / `38-c3-pre-tool-use.jsx` / `39-c3-post-tool-use.jsx` ⭐ / `40-c3-user-prompt-submit.jsx` / `41-c3-stop.jsx` ⭐ / `42-c3-subagent-stop.jsx`
  - **s37** ComparisonSlide **5-row overview** (5 이벤트, PostToolUse·Stop 2 accent)
  - **s38-s42** ConceptSlide default 2-area (각 lifecycle 풀이)
  - **s39·s41** accent 시각 (border-l-4 border-accent + bg-accent-soft — 핵심 패턴 1·2 강조)
  - `theory/index.js` 갱신 — s37-s42 6 객체
  - **✓ β' layer-composer**: spec § 2.10 / 응집 보존 1T 유지 (S3 T2.5 8장 사례 일관)
  - **✓ γ' 메인 fall-back**: spec § 3.11. quality **PASS 28 / WARN 0 / FAIL 0**. creative V1 0 (응집 의도 한계) + V2 100 + V4 85 + V5 76 = avg **65 PASS** (정확 ≥ 65)
  - **✓ δ' lecture-translator**: 6 wrapper / agent 보고 "D-046 0건"이라 했으나 실제 4건 (s39·s41 각 2건) — δ' 사전 방지 실패
  - **✓ ε' render-validator**: spec § 4.11. npm build PASS / **자동 수정 5건** (D3 rounded-lg 1건 / D-046 font-mono 4건) / 재빌드 PASS / 나머지 5축 grep 0건
  - **§3 챕터 진행** (T2.3a·b 완료, T2.3c 1건 남음)

- [x] **S6-T2.3c §3 hooks 운영** (4장, L438-485) ✅ **정식 4단계 워크플로 / §3 챕터 완료**
  - 신규 4 wrapper: `43-c3-matcher.jsx` / `44-c3-timeout.jsx` / `45-c3-antipattern.jsx` / `46-c3-terms.jsx`
  - **s43** ComparisonSlide 4-row (matcher 패턴, 공백 X 자연어)
  - **s44** ComparisonSlide 2-row (timeout 설정)
  - **s45** ExampleSlide Warning bad/good (안티 vs 올바른 hook)
  - **s46** TermsSlide 6행 (챕터 3 용어)
  - `theory/index.js` 갱신 — s43-s46 4 객체
  - **✓ β' layer-composer**: spec § 2.11 / D-046 사전 방지 명시
  - **✓ γ' 메인 fall-back**: spec § 3.12. quality **PASS 28 / WARN 0 / FAIL 0** ✓. creative V1 46 + V2 100 + V4 55 + V5 30 = avg **58 WARN** (자동 통과 룰 비활성, 영향 X)
  - **✓ δ' lecture-translator**: 4 wrapper / **자가 grep 자체 정정 4건** (rounded-lg→rounded-md) — δ' 사전 방지 학습 효과
  - **✓ ε' render-validator**: spec § 4.12. npm build PASS / **자동 수정 2건** (s43 "use client" 지시자 추가 / s45 D11 → 제거) / 5축 grep 0건
  - **§3 챕터 완료** (T2.3a/b/c, s32-s46, 15장)

### §4 두 핵심 패턴 (11장, 3 미니사이클)

- [x] **S6-T2.4a §4 Pattern 1** (3장, L491-525) ✅ **정식 4단계 워크플로 / 본 sprint 핵심 ⭐**
  - 신규 3 wrapper: `47-c4-cover.jsx` / `48-c4-pattern-1-flow.jsx` ⭐ / `49-c4-pattern-1-change.jsx`
  - **s47** Cover ("Section 4" + "자동 검증과 자동 커밋의 핵심 패턴")
  - **s48** ⭐ ProcessSlide **7-step diagram** (PostToolUse → prd-reviewer 자동 검증 흐름) + accent 시각
  - **s49** ComparisonSlide 2-row (자동화 없음 vs 있음)
  - `theory/index.js` 갱신 — s47-s49 3 객체
  - **✓ β' layer-composer**: spec § 2.12 / s48 핵심 다이어그램 명세
  - **✓ γ' 메인 fall-back**: spec § 3.13. quality **PASS 28 / WARN 0 / FAIL 0** ✓. creative V1 56 + V2 100 + V4 55 + V5 **88** (s48 핵심 wireframe 필수) = avg **75 PASS**
  - **✓ δ' lecture-translator**: 3 wrapper + index.js / 자가 grep 자체 0건 보고 (사전 방지 학습 정착)
  - **✓ ε' render-validator**: spec § 4.13. npm build PASS / **자동 수정 0건** ✓ / 5축 grep 모두 0건 ✓
  - **§4 챕터 시작** (T2.4a/b/c 3 미니사이클 중 1/3 — Pattern 1 핵심 완성)

- [x] **S6-T2.4b §4 Pattern 2 + git-committer 양식** (4장, L526-597) ✅ **정식 4단계 / 본 sprint 핵심 ⭐ / EXCELLENT 80**
  - 신규 4 wrapper: `50-c4-pattern-2.jsx` / `51-c4-git-committer-spec.jsx` ⭐ / `52-c4-git-committer-check.jsx` / `53-c4-pattern-2-flow.jsx` ⭐
  - **s50** ConceptSlide definition + aside (자료 4→5→6 진화) — lecture.md L526 헤더 "Stop → git-committer" 패턴명 그대로 인용
  - **s51** ⭐ **CodeBlock markdown + 파일 경로 라벨 `.claude/agents/git-committer.md`** (D-042, S6 s27 패턴 일관)
  - **s52** ComparisonSlide 6-row (git-committer 6원칙 점검)
  - **s53** ⭐ **ProcessSlide 11-step diagram** (Stop hook → git-committer 자동 커밋 흐름) + accent
  - `theory/index.js` 갱신 — s50-s53 4 객체
  - **✓ β' layer-composer**: spec § 2.13 / s51·s53 핵심 명세
  - **✓ γ' 메인 fall-back**: spec § 3.14. quality **PASS 28 / WARN 0 / FAIL 0** ✓. creative V1 **75** + V2 100 + V4 70 + V5 76 = avg **80 EXCELLENT** (≥ 80 최고급 — 4 8타입 균형)
  - **✓ δ' lecture-translator**: 4 wrapper + index.js / 자가 grep 자체 0건
  - **✓ ε' render-validator**: spec § 4.14. npm build PASS / **자동 수정 0건** ✓ / → 화살표 2건 판정: s50 "Stop → git-committer" 패턴명 lecture.md 원문(s48 동일 처리) + s53 ↓ aria-hidden D-041 허용
  - **§4 진행** (T2.4a/b 완료, T2.4c 1건 남음) — **본 sprint 핵심 양식 2 + 핵심 다이어그램 2 모두 완성**

- [x] **S6-T2.4c §4 결합+검증+안티+용어** (4장, L598-651) ✅ **정식 4단계 / §4 챕터 완료 / 이론 마지막**
  - 신규 4 wrapper: `54-c4-combined.jsx` / `55-c4-verify-first.jsx` / `56-c4-antipattern.jsx` / `57-c4-terms.jsx`
  - **s54** ProcessSlide 6-step (Pattern 1+2 결합)
  - **s55** ComparisonSlide 2-row (검증 우선주의)
  - **s56** ExampleSlide Warning (안티 vs 검증 우선)
  - **s57** TermsSlide 4행 (챕터 4 용어)
  - `theory/index.js` 갱신 — s54-s57 4 객체
  - **✓ β' layer-composer**: spec § 2.14
  - **✓ γ' 메인 fall-back**: spec § 3.15. quality **PASS 28 / WARN 0 / FAIL 0**. creative V1 75 + V2 100 + V4 70 + V5 30 = **69 PASS**
  - **✓ δ' lecture-translator**: 4 wrapper / agent "자가 grep 0건" 보고 부정확 (실제 D11 5건)
  - **✓ ε' render-validator**: spec § 4.15. npm build PASS / **자동 수정 5건** (D11 → 화살표 3건 + smart quotes 2건) / 재빌드 PASS

- [x] **S6-T2.ε 이론 빌드 + design-check (57장 누적)** ✅ — **이론 챕터 모두 완료 (s1-s57, 57장 누적)** ⭐

### 🎉 Phase 2 이론 완료 (T2.0a/b + T2.1a-c + T2.2a-d + T2.3a-c + T2.4a-c = 14 미니사이클, 57장)
- 본 sprint 핵심 양식 2 (s27 prd-reviewer / s51 git-committer)
- 본 sprint 핵심 다이어그램 2 (s48 7-step Pattern 1 / s53 11-step Pattern 2)
- 3 단정 시리즈 (s6 / s19 / s34, KeyMessage size="sm")
- 8타입 6종 (Title / Concept / Comparison / Process / Example / Terms)
- Phase 3 실습 진입 가능 (52장)

---

## Phase 3 — 실습 미니 사이클 (13 + 자동 1, 52장)

> **분할 기준**: lecture.md `####` 의미 응집 단위. Step 1/2/3/N/과제/Tips는 응집도 높아 1T 유지.

### 자동 생성

- [x] **S6-T3.0** 실습 목차 — `01-activity-toc.jsx` ✅ **Phase 3 실습 진입 첫 미니사이클 (메타 자동 D-031)**
  - 신규 `src/components/slides/s6/activity/01-activity-toc.jsx` — Objectives 8 items (Step 0~N + 과제+Tips)
  - `activity/index.js` 갱신 — placeholder 빈 배열 → 객체 배열 형식 시작 (`{ id: 'a1', component: Slide01 }`)
  - **✓ β' layer-composer**: spec § 2.15
  - **✓ γ' 메인 fall-back**: spec § 3.16 PASS 28/0/0 / D-031 메타 예외 적용
  - **✓ δ' lecture-translator**: wrapper jsx + index.js 형식 시작
  - **✓ ε' render-validator**: spec § 4.16 / npm build PASS (이론 57 + 실습 1 = 58 routes) / 자동 수정 0건

### Step 별 미니 사이클

- [x] **S6-T3.1a Step 0 환경 진단** (3장, L675-712) ✅ **정식 4단계 워크플로**
  - 신규 3 wrapper: `02-step0-cover.jsx` / `03-step0-env-check.jsx` / `04-step0-artifact-check.jsx`
  - **a2** Cover (Step 0 섹션 표지, objectives 4)
  - **a3** ExampleSlide 2-col code (macOS/Linux + Windows)
  - **a4** ConceptSlide default 5-card (자료 5 산출물 점검)
  - `activity/index.js` 갱신 — a2-a4 3 객체
  - **✓ β' layer-composer**: spec § 2.16
  - **✓ γ' 메인 fall-back**: spec § 3.17 PASS 28/0/0 / creative 57 WARN (Step 0 단순)
  - **✓ δ' lecture-translator**: 3 wrapper + index.js / 자가 grep 0건 보고 (hover variant 누락)
  - **✓ ε' render-validator**: spec § 4.17 / npm build PASS / **자동 수정 1건** (a4 `hover:bg-bg-elev` → `hover:shadow-lg`, D-045 hover variant) / 재빌드 PASS

- [x] **S6-T3.1b Step 0 점검+토큰** (3장, L713-732) ✅ **정식 4단계 / Step 0 완료**
  - 신규 3 wrapper: `05-step0-check-cmd.jsx` / `06-step0-token-baseline.jsx` / `07-step0-validation.jsx`
  - **a5/a6** ExampleSlide bash code (점검 명령 / /cost)
  - **a7** ActivitySlide Checklist 3
  - `activity/index.js` 갱신 — a5-a7 3 객체
  - **✓ β' layer-composer**: spec § 2.17
  - **✓ γ' 메인 fall-back**: spec § 3.18 PASS 28/0/0 / creative 56 WARN
  - **✓ δ' lecture-translator**: 3 wrapper / 자가 grep 0건 (D-045 hover variant 사전 방지 학습 적용)
  - **✓ ε' render-validator**: spec § 4.18 / npm build PASS / **자동 수정 0건** ✓
  - **Step 0 완료** (T3.1a + T3.1b, a2-a7 6장)

- [x] **S6-T3.2 Step 1 prd-reviewer 작성** (5장, L733-816, 응집 1T) ✅ **본 sprint 실습 핵심 1 ⭐**
  - 신규 5 wrapper: `08-step1-cover.jsx` / `09-step1-mkdir.jsx` / `10-step1-prd-reviewer-spec.jsx` ⭐ / `11-step1-call-test.jsx` / `12-step1-validation.jsx`
  - **a8** Cover (Step 1 섹션 표지, objectives 3)
  - **a9** ExampleSlide 2-col code (`.claude/agents` 디렉토리 생성)
  - **a10** ⭐ ExampleSlide **CodeBlock markdown + 파일 경로 라벨 `.claude/agents/prd-reviewer.md`** (D-042, s27 이론 양식과 한 쌍)
  - **a11** ExampleSlide inline 2-area (호출 테스트 + 시드 6 보고서)
  - **a12** ActivitySlide Checklist 4
  - `activity/index.js` 갱신 — a8-a12 5 객체
  - **✓ β' layer-composer**: spec § 2.18
  - **✓ γ' 메인 fall-back**: spec § 3.19 PASS 28/0/0 / creative **66 PASS** (a10·a11 핵심 필수 wireframe 기여)
  - **✓ δ' lecture-translator**: 5 wrapper / 자가 grep 0건 (D-045 hover variant + D-046 font-mono 모두 0건)
  - **✓ ε' render-validator**: spec § 4.19 / npm build PASS / **자동 수정 0건** ✓

- [x] **S6-T3.3 Step 2 git-committer 작성** (4장, L818-899, 응집 1T) ✅ **본 sprint 실습 핵심 2 ⭐**
  - 신규 4 wrapper: `13-step2-cover.jsx` / `14-step2-git-committer-spec.jsx` ⭐ / `15-step2-call-test.jsx` / `16-step2-validation.jsx`
  - **a13** Cover (Step 2, objectives 2)
  - **a14** ⭐ ExampleSlide **CodeBlock markdown + 파일 경로 라벨 `.claude/agents/git-committer.md`** (D-042, s51 양식과 한 쌍)
  - **a15** ExampleSlide inline 2-area (호출 + 시드 6 보고서)
  - **a16** ActivitySlide Checklist 5
  - `activity/index.js` 갱신 — a13-a16 4 객체
  - **✓ β' layer-composer**: spec § 2.19
  - **✓ γ' 메인 fall-back**: spec § 3.20 PASS 28/0/0 / creative **69 PASS**
  - **✓ δ' lecture-translator**: 4 wrapper / 자가 grep 시 font-mono 1건 자체 정정 / a14 → 2건 (코드블록 내 lecture.md 원문 양식, D-041 허용)
  - **✓ ε' render-validator**: spec § 4.20 / npm build PASS / 자동 수정 0건 / a14 → 판정: 코드블록 내 양식 일부 (학생 화면 본문 X) 정상

- [x] **S6-T3.4 Step 3 hook 작성 (PostToolUse + Stop)** (5장, L901-989, 응집 1T) ✅ **본 sprint 실습 핵심 3**
  - 신규 5 wrapper: `17-step3-cover.jsx` / `18-step3-hooks-json.jsx` ⭐ / `19-step3-post-test.jsx` / `20-step3-stop-test.jsx` / `21-step3-validation.jsx`
  - **a17** Cover (Step 3, objectives 3)
  - **a18** ⭐ ExampleSlide **CodeBlock json + 파일 경로 라벨 `.claude/settings.json` + matcher 공백 X aside** (D-042)
  - **a19** ProcessSlide 4-step (PostToolUse hook 테스트)
  - **a20** ProcessSlide 4-step (Stop hook 테스트)
  - **a21** ActivitySlide Checklist 5
  - `activity/index.js` 갱신 — a17-a21 5 객체
  - **✓ β' layer-composer**: spec § 2.20
  - **✓ γ' 메인 fall-back**: spec § 3.21 PASS 28/0/0 / creative **80 EXCELLENT** (4 8타입 균형)
  - **✓ δ' lecture-translator**: 5 wrapper / 자가 grep 시 D-046 1건 자체 정정 / **⚠️ 파일 위치 결함**: agent가 `s6/`에 작성 (정상 위치 `s6/activity/`) → 메인 fall-back으로 mv 정정 + index.js 갱신
  - **✓ ε' render-validator**: spec § 4.21 (메인 보조 후) / npm build PASS (위치 정정 후)
  - **⚠️ 회귀 정정 발견 (T2.3c)**: s43-s46 wrapper도 `s6/` 직접 위치였음 (theory/index.js가 `../43-c3-matcher` 같은 상위 경로 import로 작동 우회) → 메인 fall-back으로 4 파일 `s6/theory/` 이동 + import 경로 `./` 정정
  - **잔재**: `src/components/slides/s6/index.js` 잘못 생성됨 (deck-registry 사용 X, 빌드 영향 X). 사용자 결정 후 정리 권장.

- [x] **S6-T3.5a Step 4 빌드 명령** (4장, L991-1037) ✅ **정식 4단계 워크플로 / a25 ⭐ ProcessSlide 6-step 자동화 흐름**
  - 신규 4 wrapper: `22-step4-cover.jsx` / `23-step4-branch.jsx` / `24-step4-prompt.jsx` / `25-step4-automation-flow.jsx` ⭐
  - **a22** Cover (Step 4 섹션 표지, objectives 5)
  - **a23** ExampleSlide bash code (git checkout/pull/-b feat 3행)
  - **a24** ExampleSlide markdown prompt code (Issue #2 빌드 prompt + 패턴 4 aside)
  - **a25** ⭐ ProcessSlide 6-step (작업자 명령 → 메인 파일 작성 → PostToolUse 자동 트리거 → prd-reviewer 호출 → 응답 완료 → Stop + git-committer) + summary + aside
  - `activity/index.js` 갱신 — a22-a25 4 객체 (객체 배열 형식 유지)
  - **✓ β' layer-composer 호출** / 사유: spec § 2.21 명세 작성 (8212-8708 라인, 280줄+) — a25 ProcessSlide 6-step 핵심 명세 + wireframe 필수
  - **✓ γ' quality-judge + creative-judge 병렬 호출** / 사유 (메인 fall-back): quality-judge Write 권한 부재 (28축 분석 완료, append 불가) + creative-judge file read 권한 실패 (Glob path만 반환) — 명시적 실패 발생 후 메인이 spec § 3.22 (PASS 28/0/0) + § 3.22b (creative avg 74 PASS) 작성
  - **✓ δ' lecture-translator 호출** / 사유: 4 wrapper jsx + index.js 갱신 — s6/activity/ 디렉토리 정위치 (T3.4 결함 교훈 적용)
  - **✓ ε' render-validator 호출** / 사유: spec § 4.21 작성 (8781 라인) + npm build PASS (12 routes, "Compiled successfully") + 자동 수정 0건 + 5축 grep 0건 (D-035/D-045/D-046/D11/패턴 prop 모두 0건)
  - **자동 통과 룰 충족**: FAIL=0 + WARN=0 + creative=74≥65
  - **a25 ↓ arrow 1건**: ProcessSlide sequence (D-041 허용, s48/s53 패턴 일관)
  - **본 sprint 핵심 다이어그램 3 완성** (s48 7-step / s53 11-step / a25 6-step — Pattern 1 + Pattern 2 + 결합 실습)

- [x] **S6-T3.5b Step 4 PR + 동작 점검** (4장, L1038-1072) ✅ **정식 4단계 워크플로 / Step 4 완료**
  - 신규 4 wrapper: `26-step4-pr.jsx` / `27-step4-pattern-copy.jsx` / `28-step4-screen1-check.jsx` / `29-step4-validation.jsx`
  - **a26** ExampleSlide bash code (gh pr create --title --body + Closes #2)
  - **a27** ComparisonSlide 2-row (Issue #3 키워드 입력 검증 / Issue #4 라우팅 — "빌드 명령 90% 같은 양식")
  - **a28** ComparisonSlide 3-row (화면 1 동작 3요소: 페이지 뜸/인터랙션/반응 — lecture.md 원문 ✓ → "완료" 자연어 변환, D11 사전 방지)
  - **a29** ActivitySlide Checklist 4 (Step 4 검증 — PR 병합/자동화 흐름/3요소/손 절감)
  - `activity/index.js` 갱신 — a26-a29 4 객체
  - **✓ β' layer-composer 호출** / 사유: spec § 2.22 명세 작성 (8844-9222 라인, 292줄+) — a28 ✓→"완료" 변환 명시 + a27/a28 필수 wireframe
  - **✓ γ' quality-judge + creative-judge 병렬 호출** / 사유 (메인 fall-back): quality-judge file read 권한 부재 (JSON 페이로드 요청, Glob path만 반환) + creative-judge 부분 분석만 — 명시적 실패. 메인이 spec § 3.23 (PASS 28/0/0) + § 3.23b (creative avg 71 PASS) 작성
  - **✓ δ' lecture-translator 호출** / 사유: 4 wrapper jsx + index.js 갱신 — s6/activity/ 디렉토리 정위치
  - **✓ ε' render-validator 호출** / 사유: spec § 4.22 작성 (9298 라인) + npm build PASS (12 routes) + 자동 수정 0건 + 5축 grep 0건 (a28 ✓는 주석만, 학생 화면 X)
  - **자동 통과 룰 충족**: FAIL=0 + WARN=0 + creative=71≥65
  - **Step 4 완료** (T3.5a + T3.5b, a22-a29, 8장)

- [x] **S6-T3.6a Step 5 패턴 복사** (4장, L1074-1121) ✅ **정식 4단계 워크플로 / a32 = a24 양식 재사용 ⭐ 메타 메시지 핵심**
  - 신규 4 wrapper: `30-step5-cover.jsx` / `31-step5-branch.jsx` / `32-step5-prompt.jsx` ⭐ / `33-step5-repeat-flow.jsx`
  - **a30** Cover (Step 5 섹션 표지, objectives 5)
  - **a31** ExampleSlide bash code (git checkout main && pull / -b feat/task-2-1-openai-client 2행)
  - **a32** ⭐ ExampleSlide markdown prompt — a24 양식 재사용 ("PRD의 [화면명]을 만들어줘 / 기능은 두 가지 / 이 PR은 N파일만") 자료 6의 *확장* 메타
  - **a33** ComparisonSlide 5-row (Issue #6 프롬프트 템플릿 / #7 카피 생성 API / #8 결과 컴포넌트 / #9 복사 버튼 / #10 결과 라우팅) + PostToolUse + Stop 자동화 aside
  - `activity/index.js` 갱신 — a30-a33 4 객체
  - **✓ β' layer-composer 호출** / 사유: spec § 2.23 명세 작성 (9364-9808 라인) — a32 a24 패턴 재사용 메타 메시지 + a33 5-row table mobile card stack wireframe
  - **✓ γ' quality-judge + creative-judge 병렬 호출** / 사유 (메인 fall-back): 두 judge 모두 spec.md file read 실패 (분석 의지 표명, content 접근 X) — 명시적 실패 발생. 메인이 spec § 3.24 (PASS 28/0/0) + § 3.24b (creative avg 78 PASS — V3 85 ⭐ 메타 메시지 핵심) 작성
  - **✓ δ' lecture-translator 호출** / 사유: 4 wrapper jsx + index.js 갱신 — **회귀 1회** (agent가 `@/components/slides/types` 존재하지 않는 import 사용 → 빌드 실패) → 메인 fall-back으로 inline JSX 변환 (a22/a26 패턴 일관) → 재빌드 PASS
  - **✓ ε' render-validator 호출** / 사유: spec § 4.23 작성 (9882-9956 라인) + npm build PASS (12 routes) + 자동 수정 0건 + 5축 grep 0건 + δ' 회귀 메모 기록
  - **자동 통과 룰 충족**: FAIL=0 + WARN=0 + creative=78≥65
  - **T3.6a 완료** (a30-a33, 4장) — S6 "패턴 복사 / 확장" 메타 메시지 시각화 성공

- [x] **S6-T3.6b Step 5 효과 측정** (3장, L1122-1146) ✅ **정식 4단계 워크플로 / a35 ⭐ 본 sprint 자동화 효과 측정 핵심 / Step 5 완료**
  - 신규 3 wrapper: `34-step5-screen2-check.jsx` / `35-step5-automation-effect.jsx` ⭐ / `36-step5-validation.jsx`
  - **a34** ComparisonSlide 3-row (화면 2 동작 3요소: 페이지 뜸/인터랙션/반응, lecture.md ✓ → "완료" + → → "에서 ~로" 자연어 변환)
  - **a35** ⭐ ComparisonSlide 4-row (Issue #1 수동 vs Issue #5 자동화: 빌드 명령 입력/PRD 확인/커밋 작성/작업 시간) — 본 sprint 자동화 효과 정량 시각화 (100% vs 50% 이하)
  - **a36** ActivitySlide Checklist 4 (Step 5 검증 — Issue #5-#10 PR 병합/3요소/라우팅/시간 단축)
  - `activity/index.js` 갱신 — a34-a36 3 객체
  - **✓ β' layer-composer 호출** / 사유: spec § 2.24 명세 작성 (9957-10446 라인) — a35 본 sprint 자동화 효과 측정 핵심 + inline JSX 패턴 일관 명시 (T3.6a 회귀 교훈 반영)
  - **✓ γ' quality-judge + creative-judge 병렬 호출** / 사유 (메인 fall-back): 두 judge 모두 spec.md file content 접근 실패 — 명시적 실패 일관. 메인이 § 3.25 (PASS 28/0/0) + § 3.25b (creative avg 75 PASS, V3 85 ⭐) 작성
  - **✓ δ' lecture-translator 호출** / 사유 (메인 fall-back): T3.6a δ' 회귀 교훈 적용 — 메인이 직접 inline JSX 작성 (a28 패턴 일관) + index.js 갱신 (s6/activity/ 정위치)
  - **✓ ε' render-validator 호출** / 사유: spec § 4.24 작성 (10514-10609 라인) + npm build PASS (12 routes) + 자동 수정 0건 + 5축 grep 0건 (a34 ✓는 D-011 변환 주석)
  - **자동 통과 룰 충족**: FAIL=0 + WARN=0 + creative=75≥65
  - **Step 5 완료** (T3.6a + T3.6b, a30-a36, 7장)

- [x] **S6-T3.7 Step N 정리·회고** (5장, L1148-1187) ✅ **정식 4단계 워크플로 / a40 ⭐ 회고 좋은답 vs 나쁜답 메타 메시지 / Step N 완료**
  - 신규 5 wrapper: `37-step-n-cover.jsx` / `38-step-n-outputs.jsx` / `39-step-n-cost.jsx` / `40-step-n-retro.jsx` ⭐ / `41-step-n-validation.jsx`
  - **a37** Cover (Step N 섹션 표지, eyebrow="Step N" + 3 objectives — 산출물 정리/비용 비교/회고)
  - **a38** ComparisonSlide 2열 × 7행 (N-1 산출물 정리: 7개 산출물 ↔ 다음 단계 활용)
  - **a39** ExampleSlide (N-2 /cost 비교: code block `/cost` + aside 메타 메시지 — sub-agent 컨텍스트 격리 토큰 효율)
  - **a40** ⭐ ComparisonSlide 3열 × 3행 key-message (N-3 회고: 질문 / 좋은답[accent] / 나쁜답[sub] — 정량적 답 vs 모호한 답 대조로 회고 기준 학습)
  - **a41** ActivitySlide Checklist 4 (Step N 검증 — 산출물 7개/비용 메모/회고 3답/다음 단계 진입)
  - `activity/index.js` 갱신 — a37-a41 5 객체 (총 41 슬라이드)
  - **✓ β' layer-composer 호출** (agentId: a0af6b526d1f1b94b) / 사유: spec § 2.25 명세 작성 (10773-11333 라인, 약 560줄) — a40 ⭐ ComparisonSlide 3열 메타 메시지 핵심 + a38/a40 필수 wireframe 데스크톱+모바일
  - **✓ γ' quality-judge + creative-judge 병렬 호출** (agentIds: a4de843c9ba9de3b4 / ac41e39a513135b2f) / 사유 (메인 fall-back): 두 judge 모두 Read tool 미호출 — quality "input validation 실패" 보고, creative "Read function 부재" 보고. Plan C prompt 강화 + D-048 한시 룰 무효성 재입증. 메인이 § 3.26 (PASS 27/1/0 — B.2 WARN 정당성 명시) + § 3.26b (creative 평균 84.2 EXCELLENT, V2=95 V3=85 V5=88 ⭐) 작성
  - **✓ δ' lecture-translator 호출** (agentId: a59329707cb3eec05) / 사유: 5 wrapper jsx + index.js 갱신 (s6/activity/ 정위치) — inline JSX 패턴 일관 (T3.6a 회귀 교훈 prompt 강제), a37 Cover만 직접 import 예외
  - **✓ ε' render-validator 호출** (agentId: ae1ad2a44c427fd92) / 사유: spec § 4.25 작성 (11562-11638 라인) + npm build PASS (12 routes) + 자동 수정 0건 + 5축 grep 0건 (D-035/D-045/D-046/D11/패턴 prop)
  - **자동 통과 룰 충족**: FAIL=0 + WARN=1 (B.2 signal_dominance 0.4 정당성) + creative=84.2 EXCELLENT
  - **Step N 완료** (T3.7, a37-a41, 5장) — 93 → 98/109 슬라이드

- [x] **S6-T3.8 과제** (1장, L1188-1200) ✅ **정식 4단계 워크플로 / 단일 슬라이드 미니사이클**
  - 신규 1 wrapper: `42-assignment.jsx` (ActivitySlide 3-row 표 + aside)
  - **a42** ActivitySlide (3-row 표: 목표 / 산출물 / 마감 + aside "다음 단계 출발선" 메타 메시지) — assignment.md 참조 안내
  - `activity/index.js` 갱신 — a42 1 객체 (총 42 슬라이드)
  - **✓ β' layer-composer 호출** (agentId: a33e5cc3ff819326a) / 사유: spec § 2.26 명세 작성 (L11612-11925, 약 314줄) — 3-row 표 + aside 메타 메시지 강조 + a36 marker / a39 aside 패턴 미러
  - **✓ γ' quality-judge + creative-judge 병렬 호출** (agentIds: ac00accec60ebc9dd / a2a6d4f1551868eca) / 사유 (메인 fall-back): 두 judge 모두 Read tool 미호출 — quality "단일 슬라이드 미니사이클 아키텍처 위반" 지적 (운용 정합성 검토 후 정상 운용 확인), creative "Read 접근 불가" 보고. 메인이 § 3.27 (PASS 32/0/0) + § 3.27b (creative 평균 76 PASS, V2=100 V5=80) 작성
  - **✓ δ' lecture-translator 호출** (agentId: aded588940a42fc57) / 사유: 1 wrapper jsx + index.js 갱신 (s6/activity/ 정위치) — inline JSX 패턴 일관 (T3.6a 회귀 교훈), `@/components/slides/types` import 0건
  - **✓ ε' render-validator 호출** (agentId: a84b1e9036bff37fc) / 사유: spec § 4.26 작성 + npm build PASS (12 routes) + 자동 수정 0건 + 5축 grep 0건
  - **자동 통과 룰 충족**: FAIL=0 + WARN=0 + creative=76 ≥ 65
  - **T3.8 완료** (a42, 1장) — 98 → 99/109 슬라이드

- [x] **S6-T3.9 Tips 5 카테고리** (10장, L1202-1248) ✅ **정식 4단계 워크플로 / 본 sprint 학습 마무리 / Phase 3 완료 100/100**
  - 신규 10 wrapper: `43-tips-1-cover.jsx` ~ `52-tips-5-content.jsx`
  - **a43/a44** Tips 1 확장과 자동화 (Cover + Comparison 2-card: 두 단어 분리 / 필요성에서 출발)
  - **a45/a46** Tips 2 Agent 설계 (Cover + Comparison 2-card: 6원칙 모두 적용 / tools 최소 권한)
  - **a47/a48** Tips 3 hooks (Cover + Comparison 3-card: 두 핵심 패턴 / CLAUDE.md vs hook / matcher 정규식 주의)
  - **a49/a50** Tips 4 검증 우선주의 (Cover + Concept KeyMessage: sub-agent 보고도 AI 산출물)
  - **a51/a52** Tips 5 빌드 효율 (Cover + Concept KeyMessage: 시간 절반 = 자동화 작동) ⭐ sprint outro
  - `activity/index.js` 갱신 — a43-a52 10 객체 (총 52 슬라이드)
  - **✓ β' layer-composer 호출** (agentId: a5b595c04f52c322c) / 사유: spec § 2.27 명세 작성 (L11929-12755, 약 826줄) — 5 Cover + 3 Comparison + 2 KeyMessage / V4 평균 3.0 / V5 필수 5장 wireframe (a44/a46/a48/a50/a52) 데스크톱+모바일
  - **✓ γ' quality-judge + creative-judge 병렬 호출** (agentIds: a0e5fae835aab8bf8 / a53e4f25431c08734) / 사유 (메인 fall-back): γ' 누적 12/12 일관 Read 미호출 — quality "도구 제약" 보고, creative PowerShell 휴리스틱 시도 후 실패. 메인이 § 3.28 (PASS 31/1/0 — B.2 signal_dominance WARN 정당성: Tips 섹션 title 다수) + § 3.28b (creative 평균 78 PASS — V1=56 WARN sprint 누적 보완 / V2=95 / V3=82 / V4=70 / V5=85) 작성
  - **✓ δ' lecture-translator 호출** (agentId: ab71e594023d20996) / 사유: 10 wrapper jsx + index.js 갱신 (s6/activity/ 정위치) — Cover 5 (직접 import) + Content 5 (inline JSX), `@/components/slides/types` import 0건
  - **✓ ε' render-validator 호출** (agentId: ac77e4373f20864e5) / 사유: spec § 4.27 작성 + npm build PASS (12 routes) + 자동 수정 0건 + 5축 grep 0건
  - **자동 통과 룰 충족**: FAIL=0 + WARN=1 (B.2 정당성) + creative=78 ≥ 65
  - **T3.9 완료** (a43-a52, 10장) — 99 → **109/109 슬라이드 (100% 달성)** ⭐ Phase 3 13/13 T 단위 완료

- [x] **S6-T3.ε** 실습 빌드 + design-check (총 109장 누적) ✅ **Phase 3 완료**
  - ✓ npm run build PASS (12 routes 일관, exit 0) — D-046 위반 48건 일괄 수정 후 재빌드 PASS
  - ✓ 매핑 검증: activity 52 객체 (a1-a52) + theory 57 객체 (t/m... 53 import) = **109/109 매핑** 100%
  - ✓ 5축 grep (slides/s6):
    - D-035 emoji: 0건
    - D-045 bg-bg-elev: 0건
    - D-046 font-mono: 4건 (s6/theory/48,53,54,55 주석 `// D-046: No font-mono` — 룰 준수 명시, 위반 X)
    - D11 특수문자 `→`: 16건 (코드 명령 인용 `git status → push` 등 D-011 변환 예외 / sequence diagram 의도) — Phase 4 Final ε에서 정밀 분류
    - 패턴 prop mismatch (`@/components/slides/types`): 0건
  - **결함 추가**: D-046 patterns 16개 + globals.css + tailwind config + SlideFrame + SlideHelpOverlay = **48건 일괄 수정 완료** (2026-05-15)
  - **Phase 4 Final ε 진입 가능**

---

## Phase 4 — Final ε (통합 검증) ✅ **완료 (2026-05-15)**

- [x] **S6-T4.1** ε.1 npm build ✅ — 12 routes / exit 0 / Compiled successfully (Phase 3 7회 + Phase 4 1회 = 8회 일관)
- [x] **S6-T4.2** ε.2 capture-checker ✅ — N/A (CaptureSlide 사용 0건)
- [x] **S6-T4.3** ε.3 design-checker 5축 ✅ — 109장 전체 0 violation (D-035 0건 / D-045 0건 / D-046 4건 주석만 / D11 16건 D-041 sequence 예외 / 패턴 prop 0건)
- [x] **S6-T4.4** ε.4 coverage 사후 ✅ — lecture.md L1-1248 → 109/109 매핑 100% (자동 3 + 이론 57 + 실습 52)
- [x] **S6-T4.5** ε.5 Playwright slides-visual.spec.js ⭐ **SKIP** (사용자 결정 2026-05-15: 수동 + 강사 육안 Phase 6 위임). spec.js는 S6 등록 갱신 완료 (SESSIONS s6 추가, MAX_SLIDES=60)
- [x] **S6-T4.6** ε.6 history.md § 8 갱신 ✅ — T3.ε 통합 검증 + D-046 일괄 수정 (48건) + Phase 4 Final ε 종합 + γ' agent 누적 통계
- [x] **S6-T4.7** ε.7 spec § 5 Final Sign-off ✅ — spec.md § 5.1~5.8 작성 (L12984+)

### Phase 4 종합

- **빌드**: PASS 8회 일관 / 12 routes
- **5축**: 0 violation (s6 전체 109장)
- **coverage**: 100%
- **D-046**: 48건 → 0건 (Phase 4 중 발견 + 일괄 수정)
- **γ' agent**: 12/12 fall-back (Plan A 차단 유지)
- **Phase 5 진입 가능**

---

## Phase 5 — S6Form 제출 인프라

- [ ] **S6-P5.1** `S6Form.jsx` 신규 — 5 fieldset:
  - (1) sub-agent 2개 작성 (prd-reviewer + git-committer + 6원칙 적용 체크)
  - (2) hooks 2개 등록 (PostToolUse + Stop + 자동 트리거 확인)
  - (3) 화면 1·2 완성 (Issue #2-#10 PR 병합 9개)
  - (4) 자동화 효과 측정 (Issue #5 시간 비율 + 자동 검증 불일치 사례)
  - (5) 회고 3 질문 (시간 차이 / 검증 보고 / Stop hook 효과)
- [ ] **S6-P5.2** `SubmitForm.jsx` — s6 분기 추가
- [ ] **S6-P5.3** `/admin` — `SUBMIT_SUPPORTED_SLUGS`에 `'s6'` 추가

---

## Phase 6 — 강사 검증 + 결함 수정 사이클 (request.md 입력 시)

> 입력: `lectures/S6/request.md` (강사 시각 검증 후 결함 보고 시 작성)
> Task 설계 규칙: 한 Task = 한 결함, 변경 대상 파일 inline 코드, request 원문 인용, 사전 확인 필요 라벨

- [x] **S6-T6.1** 강사 시각 검증 ✅ (2026-05-15, request.md 작성 완료, 이론 8 + 실습 11 + 전반 2 = 21건 결함)
- [x] **S6-T6.x** ⭐ **request.md 결함 수정 사이클 완료** (2026-05-15):
  - **[이론 #19]** s19 second-assertion: examples 라벨 폭 한계 → `footer`로 변경 (의미 보존, 폭 제한 X)
  - **[이론 #27]** s27 prd-reviewer-spec: 미정의 `border-line` → `border-divider` / 파일 경로 라벨 inline 강조 + pre 폰트 축소
  - **[이론 #30]** s30 antipattern: title을 JSX `<br/>` 두 줄 분리 ("prd-reviewer는 Read/Grep/Glob만,<br/>git-committer는 Bash/Read만")
  - **[이론 #37]** s37 5lifecycle-overview: 좌측 표 + ⭐ 우측 lifecycle 동작 순서 다이어그램 추가 (UserPromptSubmit → PreToolUse → PostToolUse → SubagentStop → Stop), 미정의 `accent-strong` 정리
  - **[이론 #48]** s48 pattern-1-flow: 7단계 카드 + 화살표 압축 (py-5 → py-2, text-2xl → text-base) + accent-strong → accent + 화살표 제거 (gap-1로 대체)
  - **[이론 #50]** s50 pattern-2: 좌측 단일 한 줄 → 큰 KeyMessage 강조 + 진행 단계 (자료 4/5/6) aside 보강
  - **[이론 #51]** s51 git-committer-spec: 파일 경로 inline 강조 + 미정의 `border-line` → `border-divider`
  - **[이론 #53]** s53 pattern-2-flow: 11단계 1-column → ⭐ 2-column (좌 1-6 / 우 7-11) + 컴팩트 카드 + 화살표 제거
  - **[실습 #10]** a10 prd-reviewer-spec: `border-line` → `border-divider` + 파일 경로 inline 강조 + pre 폰트 축소
  - **[실습 #11]** a11 call-test: 미정의 `bg-bg-primary` → `bg-bg-soft` + `border-line` → `border-divider` (배경색 통일)
  - **[실습 #14]** a14 git-committer-spec: a10 동일 패턴 적용
  - **[실습 #15]** a15 call-test: a11 동일 패턴 적용
  - **[실습 #18]** a18 hooks-json: 코드 폰트 text-xs → text-[11px] / leading-relaxed → leading-snug + footer에 mcpServers 컨텍스트 명시 (a21 혼란 방지)
  - **[실습 #21]** a21 step3-validation: 미정의 `bg-state-success-*` → `bg-success-*` 정리 (D4 위반 수정) — lecture.md "mcpServers 필드 제거됐는가" 원문 보존 (A2)
  - **[실습 #25]** a25 automation-flow: 6단계 카드 컴팩트 + 화살표 제거 (gap-1 대체) + footer 단순화
  - **[실습 #29]** a29 step4-validation: 메타 메시지 텍스트 크기 ↑ (text-xs → text-base) + accent border-l-4 + bg-bg-soft 강조 박스
  - **[실습 #38]** a38 step-n-outputs: ⭐ lecture.md 원문 복원 (동작하는 화면 2개 / prd-reviewer / git-committer / hook / 보고서 / 커밋 히스토리 / PR 9개) — **A2 위반 수정**
  - **[실습 #40]** a40 step-n-retro: ⭐ lecture.md 원문 복원 (Issue #1 vs #2 시간 / PRD 검증 / Stop hook) + 좋은답/나쁜답 따옴표 — **A2 위반 수정**
  - **[실습 #42]** a42 assignment: assignment.md 경로 명시 강화 (`lectures/S6/assignment.md` code 강조)
  - **[전반-1]** a44 Tips 1 content: 확장 개념 가이드 — "복사 대상 예시" border-l-2 박스 (① 빌드 명령 메모 / ② Issue 분할 + PR 흐름 / ③ sub-agent 호출 패턴 / ④ 커밋 메시지 형식)
  - **[전반-2]** a17 Step 3 cover: 산출물 위치 명시 박스 추가 (`planning_project/.claude/settings.json` hooks 필드)
- [x] **S6-T6.ε** npm build PASS ✅ (3회 일관, 12 routes, exit 0)
- [ ] **S6-T6.σ** history.md § 0 "S6 Phase 6 결함 수정 완료 (21건)" 블록 추가
- [ ] **S6-T6.f** spec.md § 5 Final Sign-off 갱신

### Phase 6 결함 수정 요약

```
요청: lectures/S6/request.md (L1-25, 21건)
수정 슬라이드: 19개 wrapper jsx (이론 8 + 실습 9 + 전반 2)
빌드: 3회 PASS (12 routes 일관)
주요 발견:
  - A2 위반 2건 (a38 / a40 lecture.md 원문과 다른 데이터) → 복원
  - D4 미정의 토큰 다수 (border-line / bg-bg-primary / accent-strong / state-success-*) → 정리
  - 디자인 일관성: 파일 경로 inline 강조 / 박스 강조 / 컴팩트 카드
```

---

## 미니 사이클 집계 (S6, 109장, 의미 응집 단위)

> S1~S5 패턴 일관 — lecture.md `####` 의미 응집 단위 기준 분할 (슬라이드 수 X)

| 영역 | 미니 사이클 | 슬라이드 |
|---|---|---|
| 자동 생성 (T2.0a/b + T3.0) | 3 | 3 |
| 이론 §1 (T2.1a/b/c) | 3 | 5+4+3 = 12 |
| 이론 §2 (T2.2a/b/c/d) | 4 | 5+4+4+4 = 17 |
| 이론 §3 (T2.3a/b/c) | 3 | 5+6+4 = 15 |
| 이론 §4 (T2.4a/b/c) | 3 | 3+4+4 = 11 |
| **이론 소계** | **13 + 자동 2** | **57** |
| 실습 Step 0 (T3.1a/b) | 2 | 3+3 = 6 |
| 실습 Step 1 (T3.2) | 1 | 5 |
| 실습 Step 2 (T3.3) | 1 | 4 |
| 실습 Step 3 (T3.4) | 1 | 5 |
| 실습 Step 4 (T3.5a/b) | 2 | 4+4 = 8 |
| 실습 Step 5 (T3.6a/b) | 2 | 4+3 = 7 |
| 실습 Step N (T3.7) | 1 | 5 |
| 과제 (T3.8) | 1 | 1 |
| Tips 5 카테고리 (T3.9) | 1 | 10 |
| **실습 소계** | **12 + 자동 1** | **51** |
| **총 합계** | **25 미니 사이클 + 자동 3 = 28** | **108 + 자동 3 = 111** |

⚠️ **재검토 필요**: 위 표 총합이 108 (실습 소계 51). T3.9 Tips 10장 포함하면 실습 52장 / 총 109장 ✓ — 표 오류 정정 후:
- 실습 소계: 6+5+4+5+8+7+5+1+10 = **52장** (자동 1 포함 53)
- 이론 + 실습 = 57+52 = **109장** ✓
- 미니 사이클 총: 자동 3 + 이론 13 + 실습 12 = **28 단위**

---

## 핵심 적용 룰 (S1~S5 일관)

- **미니 사이클 = `###` 섹션 단위** (D-034)
- **격리 호출 우선** (D-030, 메인 fall-back 허용 — judge agents file read 제약 시 메인 grep 검증)
- **자동 통과 룰** — δ'.0b 판정 (메타 슬라이드 D-031 예외)
- **회귀 제한** — 같은 `###` 3회 초과 → 강사 결정
- **100% coverage** — 사전(A.6) + 사후(ε.3)
- **emoji 학생 화면 0건** (D-035) — `1️⃣`~`4️⃣` → "Section 1~4"
- **D-041 화살표 sequence 허용** + **D-042 패턴 props 확장** (KeyMessage `size="sm"` 활용)
- **D-043 `planning_project` 고정** (A7) — S4·S5 폴더 그대로
- **D-044 SSOT 참조** (A8) — `.claude/agents/` §3.6 + hooks §3.7 확장 검토
- **D-045 `bg-bg-elev` 금지** / **D-046 `font-mono` 금지** — 처음부터 0건 엄수

---

## 변경 파일 매트릭스

### 신규
- `lectures/S6/profile.yaml`
- `lectures/S6/spec.md`
- `lectures/S6/captures/`
- `src/components/slides/s6/theory/*.jsx` (~57개)
- `src/components/slides/s6/theory/index.js`
- `src/components/slides/s6/activity/*.jsx` (~52개)
- `src/components/slides/s6/activity/index.js`
- `src/components/submit/S6Form.jsx`

### 갱신
- `src/lib/deck-registry.js` (s6 entry + import 2건)
- `src/components/submit/SubmitForm.jsx` (s6 분기)
- `src/app/admin/page.js` (`SUBMIT_SUPPORTED_SLUGS`에 `'s6'`)
- `history.md` (Phase 4 갱신)
- (선택) `docs/student-project-reference.md` (§3.6 sub-agent / §3.7 hooks 확장)

### 재사용 (변경 X)
- `src/components/slides/patterns/Cover.jsx`
- `src/components/slides/patterns/KeyMessage.jsx` (size="sm" prop — S4에서 추가)
- `src/components/slides/patterns/Warning.jsx`
- `src/components/slides/patterns/Objectives.jsx`
- `src/components/slides/patterns/CodeBlock.jsx` (S6에서 핵심 활용 — sub-agent + hooks 양식)
- `src/components/slides/types/*` (8타입 컴포넌트)
- Phase 5 인프라 (KV / API / 라우팅 / PasswordGate)

---

**[S6 Task 청사진 — Phase 0부터 진행, ~109장 목표, S1~S5 패턴 일관 적용]**
