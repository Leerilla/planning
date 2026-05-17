# 의사결정 로그 (Decisions Log)

> **왜 우리가 이렇게 만들었는지**의 기록.
> 강의 중 학생들에게 "기획 → 결정 → 구현"의 실제 과정을 보여주는 메타 자료.
> 추가만, 삭제 X.

---

## D-001 · 프레임워크: Next.js (App Router)
Next.js 14 App Router. 학생들이 만들 React 기반 서비스의 메타 강의 가치.

## D-002 · 언어: JavaScript (TypeScript X)
강사 시간 최소화. JSDoc 타입 힌트로 보완.

## D-003 · 콘텐츠 형식: MDX 폐기 → 슬라이드 컴포넌트
lecture.md 분석 → 슬라이드 JSX 컴포넌트 생성.

## D-004 · 슬라이드 시스템 자체 구현
디자인 시스템 100% 준수 + 외부 의존성 최소화.

## D-005 · 스타일링: Tailwind + CSS 변수 병행

## D-006 · 접근 제어: Vercel KV

## D-007 · 과제 제출: Notion API

## D-008 · 캡처: A + D 하이브리드 (로컬 폴더 + SVG 재현)

## D-009 · lecture.md 안에 이론+실습 통합

## D-010 · 세션 페이지: 단순 링크 허브

## D-011 · sub-agent 하네스: Level 4 (완전 결의)

## D-012 · 렌더링 모드: 슬라이드 모드만

## D-013 · 슬라이드 분량: 이론 20-30장 + 실습 가변
> ⚠️ **D-019에서 재정의**

## D-014 · 페르소나 빌더 v0.2.0 검증 완료

---

## ⭐ 재설계 결정 (2026-05-10)

S1-S3 누적 결함 ~82건 분석 결과 → 패러다임 전환.

## D-015 · PPT 큐레이터 → lecture.md 번역기

## D-016 · profile 시스템 도입 (5항목)

## D-017 · Decision Matrix — 31개 공통 vs profile 우선순위

## D-018 · sub-agent 8개 → 5개 + utility 2개

## D-019 · 슬라이드 수 동적 결정 (D-013 재정의)
> ⚠️ **D-023에서 보완**

## D-020 · history.md 만료 시스템 + 강사 승인 게이트

## D-021 · profile.core_visual_kind: 절대 비율 → 신호 강도
signal_dominance: 0.6 + minimum_presence: 1.

## D-022 · wireframe 작성 범위: 전체 강제 → 필수/권장 분리

## D-023 · expected_slide_count 공식 보완 — Activity h2 가중치 분리

---

## ⭐ v2 패러다임 전환 (2026-05-11)

3가지 결함 (인터랙티브 부재 / 흐름 안 맞음 / PPT 누락) 분석 결과 → **lecture.md 표준화 + 미니 사이클**.

## D-024 · lecture.md 자유 형식 → 표준 형식

**상황**: v1은 lecture.md 자유 형식. lecture-translator가 추론으로 슬라이드 단위·시퀀스 결정. 결함 다수 — 흐름 불일치, 누락.

**결정**:
- lecture.md를 **LECTURE_FORMAT.md 4계층 헤더 표준**으로
- `#` 1개 / `##` 이론/실습 2개 / `###` 챕터 N개 / `####` 슬라이드 묶음 (1-5장)
- 슬라이드 단위는 **작성 시점**에 결정 (`####` + `---`)
- 시퀀스는 **작성자**가 결정 (agent 추론 X)

**이유**:
1. 흐름 안 맞음 (문제 2) 직접 해결 — 작성자가 작성 시점에 결정
2. 누락 (문제 3) 직접 해결 — coverage_map 1:1 매핑 + 100% 강제
3. agent 추론 비중 ↓ → 결정론적 판단

**영향**: lecture-translator α (구조 분석 → 파싱), 시퀀스 추론 폐기, profile 자동 도출.

## D-025 · 18 패턴 → 8타입 컴포넌트 (의도 보존)

**결정**:
- 렌더링은 **8타입 컴포넌트** (title/concept/comparison/process/example/quote/activity/terms)
- 18 패턴 의도는 *props/emphasis*로 보존 (KeyMessage/Definition/Outro → concept emphasis)
- SLIDE_GUIDE.md § 2 우선순위 8단계로 **자동 매핑**

**이유**:
1. SLIDE_GUIDE.md 표준 흡수
2. 18 패턴 의도 손실 X (emphasis props로 차별화)
3. 자동 매핑으로 layer-composer β.1 일부 단순화

**영향**: docs/slide-types.md (신규) / docs/slide-patterns.md (재구성) / lecture-translator α.2 / layer-composer β'.1.

## D-026 · 인터랙티브: 강사 명시 + 8타입 자동 fallback

**상황**: v1에서 인터랙티브 부재 (문제 1). layer-composer β.2가 후보 식별 → 선정. 후보 적으면 hover-toggle만.

**결정**:
- 강사 명시 (`<!-- @interactive: ... -->`) **우선**
- 명시 없으면 **8타입 기본 인터랙티브 자동 fallback**:
  - title: scale-in entrance
  - concept(key-message): scale-in + highlight pulse
  - comparison: 좌우 slide-in + toggle
  - process: step-reveal ⭐
  - example: scenario reveal
  - quote: scale-in + 강조 pulse
  - activity: 체크리스트 toggle + step reveal
  - terms: hover-expand

**이유**:
1. 문제 1 (인터랙티브 부재) 직접 해결 — 기본값 보장
2. 강사 자유 보존 — 명시 시 우선
3. 일률화 회피 — 8타입별 차별

**영향**: layer-composer.md NEVER 3 + § 5 / docs/animation-patterns.md § 5 (8타입 기본 SSOT) / CLAUDE.md § 6 E10.

## D-027 · `####` 단위 미니 사이클

**상황**: v1은 §1/§2/§3 섹션 단위로 빌드 (대규모 일괄). agent가 한 번에 많이 관리 → 결함 누적.

**결정**:
- `####` 단위 (1-5장) **미니 사이클**
- 각 `####` 마다 β'/γ'/Gate(조건부)/δ'/ε' 6단계
- 자동 통과 룰: PASS + 강사 명시 X + WARN ≤ 1 → 강사 게이트 생략

**이유**:
1. 작업 단위 세분화 — agent 컨텍스트 부담 ↓
2. 결함 발견 즉시 수정 — 회귀 범위 ↓
3. 강사 부담 ↓ — 자동 통과로 v1 6게이트 → v2 2-(N+2)게이트

**영향**: CLAUDE.md § 5 / docs/curation-workflow.md (재작성) / lecture-translator δ' / 모든 agent NEVER (`####` 범위 강제).

## D-028 · lecture.md 100% coverage 강제

**상황**: v1에서 중간중간 PPT 누락 (문제 3). lecture.md 콘텐츠 일부가 슬라이드에 매핑 안 됨.

**결정**:
- lecture.md 모든 콘텐츠 블록 → **coverage_map 1:1 매핑**
- 100% coverage 강제 (skipped 명시는 OK)
- quality-judge A.6 신설 (coverage 검증)
- render-validator Final ε.3 사후 검증

**이유**:
1. 문제 3 (누락) 직접 해결
2. 사전(A.6) + 사후(ε.3) 이중 검증
3. skipped는 명시 강제 — 의도 없는 누락 0건

**영향**: CLAUDE.md § 6 A6 / lecture-translator α.3 / quality-judge A.6 / render-validator ε.3 / docs/curation-workflow.md.

## D-029 · profile: 자동 도출 / 추론 분리

**상황**: v1은 5항목 모두 추론. fall-back 빈발.

**결정**:
- **자동 도출 3항목**: logic_structure / core_visual_kind / expected_slide_count
- **추론 2항목**: interactivity_density / tone_strength
- 자동 도출은 신뢰도 high 기본 (fall-back X)
- 추론 항목만 fall-back 가능

**이유**:
1. lecture.md 표준화로 자동 도출 가능
2. 추론 비중 ↓ — Gate-1 부담 ↓
3. expected_slide_count 실측 — 예측 X

**영향**: docs/profile-system.md (재작성) / lecture-translator α.4 / quality-judge Group B.

## D-030 · sub-agent 호출: 메인 직접 수행 X → 격리 호출 우선

**상황**: v1 운영 중 메인 세션이 lecture-translator 등 역할을 직접 수행하는 경우 다수. 격리 sub-agent 호출과 결과 차이 (4/5 항목).

**결정**:
- agent 작업은 반드시 `Agent(subagent_type=...)` **격리 호출**
- 메인은 *오케스트레이션*만 (호출 + 결과 통합)
- 격리 sub-agent는 자기 .md + 필요 docs만 컨텍스트로 읽음

**이유**:
1. 격리가 더 정확 — fall-back 정직 표기 (S4 사례: AMBIGUOUS)
2. 컨텍스트 효율 — 메인 비대화 차단
3. 의도된 sub-agent 시스템 (Anthropic 권장)

**영향**: CLAUDE.md § 5 + 모든 agent 트리거 섹션.

## D-031 · 메타 슬라이드 자동 통과 룰 예외

**상황**: title/activity 메타 슬라이드는 creative-judge V2/V3가 N/A, V1/V4/V5가 누적 진척으로 단독 평가 시 ≥ 65 달성 불가능. 모든 메타 슬라이드를 매번 강사 게이트 진입 시 비효율.

**결정**:
- 메타 슬라이드 (`title`, `activity cover`)는 자동 통과 룰의 `creative ≥ 65` 조건 **제외**
- 다른 조건 (quality FAIL=0, WARN≤1, 강사 명시 변경=0)은 그대로 적용
- 누적 V1-V5 점수는 Final ε에서 종합 평가

**영향**: docs/curation-workflow.md § 4.4 / lecture-translator δ'.0b / quality-judge

## D-032 · 자동 생성 슬라이드 — `#` 세션 표지 + `##` 덱별 목차

**상황**: 기존 SSOT에 `#` 세션 표지 + `##` 목차 자동 생성 룰 없음. T2.0a/T2.0b 수동 추가로 발견.

**결정**:
- `#` 헤더 → **세션 전체 표지 슬라이드 1장 자동 생성**
  - Cover 패턴: title = `#` 텍스트, subtitle = 자료 첫 단락 한 줄 요약
- `## 이론` 직속 → **이론 목차 슬라이드 자동 생성** (이론 챕터 리스트)
- `## 실습` 직속 → **실습 목차 슬라이드 자동 생성** (실습 활동 묶음 리스트)
- 패턴: Objectives.jsx 재사용 (eyebrow + numbered items)

**이유**:
1. 학생 인지 — 세션/덱 시작 시 전체 구조 보여줌
2. 강사 부담 ↓ — lecture.md에 명시 안 해도 자동
3. 일관성 — 모든 세션 동일 패턴

**영향**: docs/slide-types.md § 7 / lecture-translator α.2 / docs/curation-workflow.md

## D-033 · 구조 재해석 — `###` = 섹션 표지 / `####` = 세부 콘텐츠

**상황**: v2 LECTURE_FORMAT은 `###` = 챕터, `####` = 슬라이드 묶음. 실제 S1 lecture.md는 `###`을 섹션 표지로 사용. 강사 의도 = `###` 시각적 표지, `####` 콘텐츠.

**결정**:
- 모든 `###` (emoji 유무 무관) → **섹션 표지 슬라이드 1장**
  - Cover 패턴 (학습 목표 본문이 있으면 objectives prop으로 포함)
- 모든 `####` → **세부 콘텐츠 슬라이드(들)** — `---` separator로 1-N장 분할
- 한 `###` 섹션 = 표지 1장 + 0~N개 `####` (각각 1-3장) = **미니 사이클 1개**

**이유**:
1. 강사 의도 — 시각적 구분과 콘텐츠 분리
2. 자료 가독성 — 섹션 표지가 학습 전환점 표시
3. lecture.md 표준화 단순화 — 4계층 강제 X (3계층 호환)

**영향**: docs/lecture-format.md § 9 (단순화) / docs/slide-types.md § 2 자동 매핑 우선순위 / lecture-translator α.1a (파서) / CLAUDE.md § 2 NEVER 6

## D-034 · 미니 사이클 단위 재정의 — `###` 섹션 전체

**상황**: D-033 적용으로 한 `###` 섹션의 슬라이드 수가 가변(1-15장). 기존 미니 사이클 = `####` 단위 (1-5장 한계)와 충돌.

**결정**:
- **미니 사이클 = `###` 섹션 전체** (= 표지 1장 + 모든 `####` 콘텐츠)
- 5장 한계 완화 (한 미니 사이클 슬라이드 수 = 1-15장, 평균 2-5장)
- agent 컨텍스트 부담 ↑ 감수
- γ' judges 검증 범위도 `###` 섹션 전체로 확장
- `lecture-translator NEVER 5` (5장 초과 차단) → 룰 완화 또는 삭제

**이유**:
1. D-033 구조 해석과 정합 — 섹션이 학습 단위
2. 시퀀스 일관성 — 표지+콘텐츠가 끊김 없이 진행
3. judges 통합 평가 — 섹션 단위 호흡/흐름 검증 가능

**영향**: CLAUDE.md § 2 NEVER 6 + § 5 / docs/curation-workflow.md 전반 / 모든 agent NEVER (`####` 범위 → `###` 범위)

## D-036 · 패턴 시각 마커 최소 시인성 룰

**상황**: T2.1 시각 검증 결과 — Definition dot `w-1.5 h-1.5` (6px) / KeyMessage examples `·` middle dot 문자 / Warning 라벨 정렬 흔들림 → 시각 마커가 보이지 않거나 정렬 어긋남. 누적 가독성 결함 8→11건 (rule_pending_001).

**결정** — 패턴 시각 마커 최소 시인성 룰 신설:
- **dot/bullet**: 최소 크기 `w-2 h-2` (8px) 이상. middle dot 문자(`·`) 사용 금지
- **separator/divider**: 최소 `h-[1px] bg-divider` 명시
- **라벨 정렬**: `grid grid-cols-[Npx_1fr]` 고정 너비 사용 의무 (min-w- 같은 약한 정렬 금지)
- **검증 위치**: quality-judge Group A.14 + design-checker.js 자동 grep

**이유**:
1. 누적 시각 시인성 결함 11건 — 반복 결함 패턴
2. 강사 매번 시각 검증 부담 ↑
3. 자동화된 임계값 검증 필요

**영향**: docs/design-system.md § 시각 마커 / quality-judge A.14 / `.claude/utilities/design-checker.js` 추가 grep

## D-037 · wrapper-pattern prop 활용률 ≥ 80% 검증

**상황**: T2.1 시각 검증 결과 — KeyMessage `highlight`/`eyebrow` 미사용, Warning `tone` 미사용 → 패턴이 제공하는 시각 prop을 wrapper가 활용 X로 시각 정보 부족.

**결정**:
- wrapper가 패턴의 시각 prop (eyebrow, highlight, tone, accent 등) 활용률 ≥ **80%** 강제
- layer-composer β'.1 spec 작성 시 사용 가능한 모든 시각 prop 명시적 고려 의무
- quality-judge Group A.14 신설: wrapper-pattern prop 활용률 검증

**이유**:
1. 패턴의 시각 prop은 콘텐츠 의도 반영 도구 — 누락 시 시각 정보 손실
2. wrapper가 단순 데이터 매핑만 하고 시각 의도 반영 X → 매번 강사 게이트
3. 자동 검증으로 사전 차단 가능

**영향**: quality-judge.md Group A.14 / layer-composer.md β'.1 props 매핑 가이드

## D-038 · profile.core_visual_kind 기반 layout 자동 결정

**상황**: T2.1 #8 안티패턴 슬라이드 — lecture.md 콘텐츠는 "안티 vs 올바름" 명백한 comparison 의도 + profile.core_visual_kind = `comparison` (대조 우세). 그러나 wrapper layout이 `flex flex-col` (세로 배치)로 의도 X.

**결정**:
- profile.core_visual_kind에 따라 다중 패턴 wrapper의 기본 layout 자동 결정:
  - **`comparison`** → `grid grid-cols-2` (좌우 대조)
  - **`simulation`** → `flex flex-col` (상하 sequential) 또는 `grid grid-cols-2`
  - **`diagram`** → 자유 (콘텐츠 의도 따라)
  - **`data`** → 표 우선
- lecture.md 콘텐츠 키워드 (`vs` / `안티/올바름` / `❌ ✅`) → 좌우 layout 우선 매핑
- layer-composer β'.3 visual spec에서 명시

**이유**:
1. 콘텐츠 의도 ↔ layout 불일치 결함 패턴 (T2.1 #8 사례)
2. profile.core_visual_kind가 layout 결정에 반영되지 않으면 의미 X
3. 자동 결정으로 강사 게이트 부담 ↓

**영향**: layer-composer.md β'.3 layout 가이드 / docs/profile-system.md core_visual_kind 사용처 명시

---

## D-039 · Playwright visual regression 의무화

**상황**: T2.1 (5건) → 룰 D-036/D-037/D-038 신설 → T2.2 적용 → 그러나 #11 깨짐 재발. 모든 검증(β'/γ'/δ'/ε')이 코드·spec 레벨만 분석, 실제 시각 결과 검증 X. agent "PASS" 보고와 실제 화면 불일치.

**결정**:
- 각 미니 사이클 ε' 단계에서 **Playwright 자동 screenshot 의무**:
  - 1280×720 (desktop)
  - 360×800 (mobile)
- 기준 이미지 (baseline) 부재 시 → 첫 캡처를 baseline으로 등록
- 기준 이미지 존재 시 → diff 검출 (threshold 5% 이상 시 WARN)
- ε'.5 신규 단계로 render-validator 워크플로우에 추가
- `tests/e2e/slides-visual.spec.js` 신규 작성

**이유**:
1. agent의 시각 검증 불가능 (브라우저 미실행)
2. 강사 매번 시각 확인 부담 ↑
3. 시각 결함은 누적 11건 (T2.1 5 + T2.2 1 + 기존 가독성 8건) — 명백한 패턴

**영향**: `.claude/agents/render-validator.md` ε'.5 추가 / `docs/curation-workflow.md` ε' 단계 갱신 / `tests/e2e/slides-visual.spec.js` 신규

## D-046 · `font-mono` 클래스 사용 금지 (2026-05-13)

**상황**: S3 이론 87장 시각 검증 중, 코드/번호/eyebrow 등에 광범위하게 적용된 `font-mono`가 학생 화면에서 본문 폰트와 부조화. 31개 wrapper에서 사용 — 폰트 일관성 흔들림.

**결정**: wrapper 안 `font-mono` 클래스 직접 사용 **금지**.

**대체**:
- 코드 블록은 `<pre>` 기본 (또는 `CodeBlock` 패턴 컴포넌트가 처리)
- 번호/eyebrow는 일반 폰트 + `font-semibold` 등으로 강조

**룰화**: CLAUDE.md § 6 D14 + `.claude/utilities/design-checker.js` `FORBIDDEN_CLASSES`에 등록.

**영향**: S3 이론 31 wrapper 일괄 sed 제거 / 빌드 통과 / 향후 wrapper 작성 시 `font-mono` 적용 X.

---

## D-045 · 백그라운드 `#0F172A` (`bg-bg-elev`) 사용 금지 (2026-05-13)

**상황**: S3 이론 시각 검증 중, `bg-bg-elev` (= CSS `--code-bg` = `#0F172A` 어두운 톤)가 적용된 표 헤더·코드 블록에서 본문 텍스트 가독성 저하. 14개 wrapper에서 사용.

**결정**: wrapper 안 `bg-bg-elev` (`#0F172A`) 직접 사용 **금지**.

**대체**:
- 코드/표 헤더는 `bg-bg-soft` (밝은 톤) 사용
- 강조 영역은 `bg-bg-soft + border-l-2 border-accent` 패턴

**룰화**: CLAUDE.md § 6 D13 + `.claude/utilities/design-checker.js` `FORBIDDEN_CLASSES`에 등록.

**영향**: S3 이론 14 wrapper 일괄 sed `bg-bg-elev → bg-bg-soft` 치환 / 빌드 통과 / `globals.css` `--code-bg` 토큰은 유지 (CodeBlock 패턴 컴포넌트 한정).

---

## D-044 · 학생 프로젝트 구조 SSOT — `docs/student-project-reference.md` (2026-05-12)

**상황**: S3에서 학생이 만든 `planning_project/` 구조가 S4~S9까지 누적 사용되나, 각 세션 lecture.md가 독립적으로 작성되어 폴더 구조·파일명·docs 양식 불일치 위험. 슬라이드 빌더가 세션별 lecture만 보면 7세션 동안 학생 프로젝트 구조가 흔들림.

**결정**: `docs/student-project-reference.md`를 학생 프로젝트 구조의 **SSOT**로 신설.

**SSOT 5개 영역**:
1. 프로젝트 이름 (`planning_project`, D-043 연계)
2. 표준 폴더 구조 (docs/src/tests/data/rules/.claude)
3. 핵심 docs 8개 양식 + 출처 + 갱신 정책 (persona/painpoints/prd/README/CLAUDE.md + **rules/ + settings.json + .gitignore**)
4. 세션별 docs 매핑 (S3 초기 생성 → S4 rules·settings·gitignore 추가 + CLAUDE.md 4영역화 → S5~S9 강사 협업 갱신)
5. 슬라이드 빌더 참조 룰 (8건)

**갱신 이력**:
- 2026-05-12 초기 신설 (§3.1~§3.5, S3 기준)
- **2026-05-13**: S4 산출물 반영 — §3.5 CLAUDE.md 4영역 + § 5 참조 지침으로 갱신 / §3.6 rules/ 신규 / §3.7 .claude/settings.json 신규 / §3.8 .gitignore 신규 / §2 폴더 구조 보강 / § 4 S4 행 채움 / § 5 슬라이드 빌더 참조 룰 4건 추가

**갱신 정책**:
- 강사가 S4~S9 lecture.md 작성 시 본 SSOT 동시 갱신 권고
- Claude 슬라이드 빌드 시 본 SSOT 참조 + 충돌 시 강사 보고
- 본 SSOT 갱신 시 history.md에 변경 기록

**우선순위**: lecture.md와 본 SSOT 충돌 시 **SSOT 우선** — 강사가 보강해 SSOT를 진실로 만들거나, SSOT를 갱신.

**영향**:
- `CLAUDE.md § 6 A8`로 룰화 (콘텐츠 원칙 6 → 7개)
- D-043과 한 쌍 (D-043 폴더명 + D-044 폴더 안 docs 구조)
- S4~S9 빌드 진입 시 lecture.md ↔ SSOT 정합성 점검 의무

---

## D-043 · 실습 프로젝트명 `planning_project` 고정 (2026-05-12)

**상황**: S3 lecture.md의 실습 영역에 `mkdir 03_prd-refinement` 같은 단계별 폴더명 사용. S4-S9도 단계별 다른 이름 가능성. 학생이 9세션 누적 작업물을 추적하기 어려움.

**결정**: S3~S9 실습 슬라이드의 모든 폴더·디렉토리·CLI 예시 명령에서 프로젝트명을 `planning_project`로 통일.

**적용 범위**:
- 작업 폴더 생성 명령 (`mkdir planning_project`)
- 폴더 이동 명령 (`cd planning_project`)
- 파일 경로 (`planning_project/persona.md`)
- README/CLAUDE.md 같은 양식 파일 안 프로젝트명
- 폴더 구조 다이어그램

**A2 원칙 유지**: lecture.md는 수정 X. 슬라이드 빌드 시점에만 변환.

**예외**: 강사가 명시적으로 다른 이름 명시 시 그것 우선 (인라인 메타 `<!-- @folder: X -->` 같은 패턴은 향후 검토, 현재 미정의).

**영향**:
- S3~S9 실습 슬라이드 빌드 시 자동 변환 의무
- design-checker 추가 검증 룰 후보 (E.6 폴더명 일관성)
- CLAUDE.md § 6 A7로 룰화 (콘텐츠 원칙 5개 → 6개)
- 9세션 동안 한 폴더에 작업물 누적 — A4 메타 메시지(학생들이 만들 서비스의 모범)와 직결

---

## D-041 · D11 화살표 sequence 표현 예외 허용 (2026-05-12)

**상황**: S1 Phase 4 design-checker 실행 시 `→`/`↓` 화살표 10건이 D11 특수문자 룰로 자동 제거됨. 그러나 본 sprint에서 `→` (출처 화살표 #29~#31), `↓` (검증 흐름 sequential #37)는 정보 흐름 표현 필수 요소.

**결정**:
- `→`, `←`, `↑`, `↓` 화살표는 정보 흐름 표현 시 D11 예외로 허용
- design-checker `FORBIDDEN_CHARS`에서 화살표 4종 제거
- D11 정의 명확화: "정보 흐름 표현 화살표는 예외, 그 외 특수문자(§/⚠️/✓/✕/❌/💡) 금지"
- 단, 의미 없는 장식 화살표는 강사 검토에서 제거 권고

**이유**:
1. sequential flow / 분기 / 변환 표현에 화살표는 보편적 시각 언어
2. 일괄 금지는 의도 표현 막음 (실제 사고 발생)
3. 텍스트 대체("다음으로", "되어")는 시각적 압축 효과 ↓

**영향**: `.claude/utilities/design-checker.js` FORBIDDEN_CHARS / `docs/design-system.md § 7 D11`

---

## D-042 · 패턴 SSOT props 확장 (2026-05-12)

**상황**: S1 Phase 4 design-checker E.5 18건 위반 — wrapper에서 사용 중인 prop(Cover.objectives, Cover.eyebrow, KeyMessage.examples, Warning.level/tone, Objectives.eyebrow)이 PATTERN_PROPS SSOT에 미등록.

**결정** — `PATTERN_PROPS` 갱신:
- Cover: `sessionNumber, number, eyebrow, title, subtitle, objectives, meta`
- Objectives: `items, header, eyebrow`
- KeyMessage: `eyebrow, message, highlight, footer, subtext, examples, visual_polish`
- Warning: `title, level, tone, problem, reason, description, avoidance, personaContext`

**이유**: S1 T2.1~T3.6 진행 중 패턴 확장이 자연 발생. SSOT가 따라가지 못해 위반 다발.

**영향**: `.claude/utilities/design-checker.js` PATTERN_PROPS / `docs/slide-patterns.md`

---

## D-040 · 패턴 적합성 매트릭스 SSOT

**상황**: T2.2 #11 — 5 Whys (sequential 세로 인과 흐름) 콘텐츠를 StepGuide (가로 평면 step) 패턴에 매핑 → 본질적 불일치로 UI 깨짐. agent는 단순 키워드 매칭(`example` → StepGuide)만 적용.

**결정**:
- 각 패턴(`src/components/slides/patterns/*.jsx`)의 **사용 조건 매트릭스 SSOT** 신설
- 명시 항목:
  - 콘텐츠 길이 (label/text 최대 자수)
  - 의미 흐름 (sequential / parallel / comparison / definition)
  - 카드/요소 수 범위
  - 부적합 콘텐츠 종류
- layer-composer β'.1 패턴 선택 시 적합성 검증 의무
- quality-judge A.16 신설 — 패턴 적합성 검증 축

**매트릭스 초안**:

| 패턴 | 적합 콘텐츠 | 부적합 콘텐츠 | 최대 자수 | 카드 수 |
|---|---|---|---|---|
| StepGuide | 평면 step, 짧은 label | sequential 인과, 긴 문장 | label ≤ 15, desc ≤ 40 | 3-5 |
| ProcessSlide | sequential 흐름, weak ring | 평면 비교 | label ≤ 25 | 3-6 |
| Comparison | 좌우 대조 (A vs B) | 단계별 진행 | content[i] ≤ 60 | 2-3 cols |
| Definition | 정의 + 부연 | 사례 흐름 | def ≤ 80, notes[i] ≤ 80 | 1 |
| KeyMessage | 단정 + 근거 | 비교/대조 | message[i] ≤ 24 | 1-2 examples |
| Warning | 안티/주의 + 회피 | 단순 사례 | title ≤ 25 | 1-2 인스턴스 |
| ThreeCards | 3가지 평면 (병렬) | 인과 흐름 | desc ≤ 60 | 3 (고정) |
| Cover | 표지 (메타) | 콘텐츠 | title ≤ 40 | — |

**이유**:
1. 패턴 ↔ 콘텐츠 미스매치는 시각 결함의 주된 원인 (#11 사례)
2. 8타입 자동 매핑은 키워드만 — 콘텐츠 의미 흐름 X
3. 룰 신설로 사전 차단 가능

**영향**: `docs/slide-patterns.md` 또는 신규 `docs/pattern-suitability.md` / `.claude/agents/layer-composer.md` β'.1 패턴 선택 / `.claude/agents/quality-judge.md` A.16

---

## D-035 · 학생 화면 emoji 0건 완전 제거 (D11 강화)

**상황**: 기존 D11은 본문 emoji 제외, chapter_number(`1️⃣`) 등 메타 표기는 허용. 강사 의도 = 학생 화면에 emoji 전무.

**결정**:
- 학생 화면 emoji 0건 — **메타 표기 (chapter_number, eyebrow) 포함**
- chapter_number → `"01"`, `"Section 1"` 등 텍스트 대체
- 자료 (lecture.md)의 `1️⃣`/`2️⃣` 등은 강사 작성용 — 슬라이드 빌드 시 텍스트 변환

**이유**:
1. 시각 일관성 — 학생 화면 통일
2. 접근성 — 일부 환경에서 emoji 렌더링 실패
3. 인쇄/PDF 호환

**영향**: CLAUDE.md § 6 D1/D11 / docs/design-system.md § 7 / quality-judge A.7 / Cover.jsx 등 모든 패턴

---

## 변경 이력 룰

이 문서는 **추가만**, 삭제 X.

번복 시:
```
## D-NNN · [번복] D-XXX 결정 변경
이전 결정: ...
새 결정: ...
이유: ...
```

"기획은 변하지 않는 게 아니라 기록되는 것이다."

---

## 큐레이션 작업 중 자동 추가 결정

lecture-translator가 강사 결정 자동 기록:

```
## D-S4-01 · S4 core_visual_kind comparison 우선
강사 결정: "PRD/CLAUDE 대조 비중이 핵심"
시점: Gate-1
영향: comparison 슬라이드 우선 빌드
```

---

## D-049 · 디자인 토큰 화이트리스트 SSOT (2026-05-15)

**상황**: S6 Phase 6 27건 결함 분석 중 미정의 토큰 사용 12건 발견. `border-line` (a10/a14/a11/a15/s27/s51), `bg-bg-primary` (a11/a15), `accent-strong` (s37/s48/s53), `bg-state-*` (a21/s43), `bg-bg-elevated` (Objectives), `highlight-soft` (a18). β'/δ' agent (또는 메인)가 정확한 화이트리스트 부재로 토큰 명명 직접 생성. D4 룰이 있으나 화이트리스트 SSOT가 명시적이지 않아 위반 다발.

**결정**: `docs/design-system.md § 2`에 **정의된 토큰 화이트리스트** 정식 명시. `tailwind.config.js` + `globals.css` SSOT 기준.

**허용 토큰** (Tailwind colors + CSS 변수):
- backgrounds: `bg-bg`, `bg-bg-soft`
- text: `text-text`, `text-text-sub`, `text-text-muted`
- accent: `text-accent` / `bg-accent` / `bg-accent-soft` / `text-highlight`
- divider: `border-divider`, `border-divider-strong`
- semantic: `{text|bg|border}-success(+soft)` / warning / danger / info
- cluster: `bg-cluster-1` ~ `bg-cluster-4`

**금지 토큰** (미정의):
- `border-line` → `border-divider`
- `bg-bg-primary` → `bg-bg-soft`
- `accent-strong` → `accent`
- `bg-state-{success|info|warning|error}-soft` → `bg-{success|info|warning|danger}-soft`
- `bg-bg-elevated` → `bg-bg-soft`
- `highlight-soft` → `bg-bg-soft + text-accent` 조합
- (기존 D-045) `bg-bg-elev` / `#0F172A` → `bg-bg-soft`
- (기존 D-046) `font-mono`

**룰화**: CLAUDE.md § 6 D15 + `.claude/utilities/design-checker.js` `FORBIDDEN_CLASSES` 확장.

**영향**: S6 Phase 6 12건 정리 완료 / S7+ 적용 / 신규 wrapper 작성 시 화이트리스트 강제.

---

## D-050 · lecture.md 원문 보존 강화 (A2 강화, 2026-05-15)

**상황**: S6 Phase 6 분석 중 A2 위반 2건 발견. a38 step-n-outputs (lecture.md L1153-1160 산출물 7개 모두 다른 데이터로 변경), a40 step-n-retro (회고 3행 다른 질문 사용). β' agent가 spec § 2 작성 시 lecture.md 원문 데이터를 임의 재구성. A2 룰 (CLAUDE.md § 2.2)이 있으나 표/리스트 데이터 수준 강제 부족.

**결정**: spec § 2 작성 시 **`lecture_range: [N1, N2]` 인용 의무**. 표/리스트의 각 행 데이터는 lecture.md 원문 그대로 보존. 재구성/요약/대체 시 FAIL.

**대체 패턴**:
```yaml
# ❌ 위반: 데이터 임의 변경
rows:
  - { question: '자동화는 무엇을 줄인가?', good: '...', bad: '...' }  # lecture.md에 없음

# ✅ 준수: 원문 그대로
lecture_range: [1176, 1180]
rows:
  - { question: 'Issue #1 vs Issue #2 시간 차이', good: '"절반 줄어듦. 명령 복사 + hook 자동"', bad: '"빨라졌다"' }
```

**룰화**: CLAUDE.md § 6 D16 + quality-judge.md A.1 검증 강화 (β' 산출 데이터 vs lecture.md line N 일치 검증).

**영향**: S6 a38 / a40 lecture.md 원문 복원 완료 / S7+ β' agent prompt에 명시적 인용 의무 추가.

---

## D-051 · pre 블록 폰트 최소 `text-xs` (12px, 2026-05-15)

**상황**: D-046 (font-mono 금지) + overflow 해결 시 폰트 축소가 default → pre 블록에 `text-[11px]` 사용 다수 (s27/s51/a10/a14/a18). 강사 시각 검증: "pre 블록 텍스트 전체적으로 키우기 내용 잘 안보임". 가독성 임계 룰 부재.

**결정**: pre 블록 (및 코드 표시 영역) 폰트 최소 `text-xs` (12px) 의무. `text-[11px]` / `text-[10px]` / `text-2xs` 사용 금지.

**대체**:
- 너무 작아서 줄여야 할 때 → `text-xs` (12px) 유지 + leading-relaxed
- 콘텐츠 길이 문제 → 코드 일부 생략 또는 패턴 변경 (D-052)
- 폰트 축소로 overflow 해결 X (가독성 우선)

**룰화**: CLAUDE.md § 6 D17 + design-checker.js `FORBIDDEN_FONT_SIZES` 신규.

**영향**: S6 Phase 6 5건 정리 완료 (text-[11px] → text-sm) / S7+ pre 블록 작성 시 자동 grep 검증.

---

## D-052 · 6+ vertical sequential 카드 분할 의무 (2026-05-15)

**상황**: S6 Phase 6 overflow 결함 4건 (s48 7단계, s53 11단계, a25 6단계, a18 코드 33줄). 1280×720 viewport에 vertical 카드 + 화살표 6+ 배치 시 화면 초과. 폰트 축소 해결로 가독성 손상 (D-051 위반 유발).

**결정**: 6개 이상 vertical sequential 카드를 단일 column으로 배치 X. 분할 옵션:
1. **2-column grid** (예: 좌 1-N/2 + 우 N/2+1-N) — 11+ 카드 권장
2. **카드 컴팩트** (헤더 축소, 화살표 제거, gap 단축) — 6-8 카드
3. **단계 통합** (의미 단위로 묶기)
4. **패턴 변경** (vertical flow → horizontal pipeline)

**대체 패턴** (실제 S6 적용):
- s53 11단계: 1-column → 2-column (좌 1-6 / 우 7-11)
- s48 7단계: 화살표 제거 + 카드 px-5 py-2 컴팩트
- a25 6단계: 화살표 제거 + py-2.5 컴팩트

**룰화**: CLAUDE.md § 6 D18 + slide-patterns.md § 7.5 매트릭스 보강 + render-validator ε'.2 사전 검증.

**영향**: S6 4건 정리 완료 / S7+ ProcessSlide 6+ 카드 시 자동 분할 권고.

---

## D-053 · 도구 이름 첫 등장 시 설명 의무 (2026-05-15)

**상황**: S6 Phase 6 결함 #43 "Bash 도구가 무엇인지 설명 필요". s43 matcher 슬라이드에서 Bash가 첫 등장하지만 설명 부재. 학생이 도구 이름을 모르는 채로 학습 진행. mcpServers 필드 등장 이유 불명 (#21) 유사 사례.

**결정**: `Bash` / `Read` / `Grep` / `Glob` / `Write` / `Edit` / `WebFetch` / `SubagentStop` / `mcpServers` 등 **Claude Code 도구/필드가 슬라이드에 처음 등장할 때 인라인 설명 의무**.

**대체 패턴**:
- 상단 border-l-4 박스에 5 도구 1줄 요약 (s43 적용)
- 본문 인라인 괄호 설명 (예: "Bash (셸 명령 실행)")
- footer에 도구 컨텍스트 1줄 (a18 mcpServers 적용)

**룰화**: CLAUDE.md § 6 D19 (WARN) + quality-judge Group A 신규 축.

**영향**: S6 s43 / a18 / a44 (확장 개념) 적용 완료 / S7+ β' agent prompt에 첫 등장 추적 명시.

---

## D-054 · 산출물 파일 경로 inline code + accent 강조 (2026-05-15)

**상황**: S6 Phase 6 결함 "실습에서 파일 작성시 어떤 파일 이름과 어디 폴더로 배치해야 하는지 누락되어 추적이 어려움". 산출물 파일 경로가 slide 안 일반 텍스트로 묻혀 학생 추적 어려움.

**결정**: 모든 산출물 파일 경로는 `<code>` 태그 + `text-accent font-semibold bg-bg-soft px-2 py-1 rounded` 강조 의무. Cover 슬라이드에 "산출물 위치" 박스 권장 (border-l-4 border-accent).

**대체 패턴**:
- 본문 인라인: `<code className="text-accent font-semibold bg-bg-soft px-2 py-1 rounded">.claude/agents/prd-reviewer.md</code>`
- Cover 박스 (a17 적용):
  ```jsx
  <div className="border-l-4 border-accent bg-bg-soft rounded-r-md px-5 py-3">
    <span className="text-xs font-semibold text-accent uppercase tracking-wider">산출물 위치</span>
    <p><code>planning_project/.claude/settings.json</code></p>
  </div>
  ```

**룰화**: CLAUDE.md § 6 D20 (WARN) + slide-patterns.md § 7.5 보강.

**영향**: S6 a10 / a14 / a17 / a27 / a42 / a51 적용 완료 / S7+ 실습 wrapper 작성 시 산출물 경로 명시 의무.

---

**[docs/decisions.md v2 끝]**
