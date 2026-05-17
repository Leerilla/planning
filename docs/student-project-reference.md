# 학생 프로젝트 구조 SSOT — `planning_project/`

> **D-043 + D-044**. S3에서 학생이 만들고 S4~S9 동안 누적·갱신하는 프로젝트 구조의 SSOT.
> 슬라이드 빌더는 본 문서를 참조한다. lecture.md와 충돌 시 본 SSOT가 우선.

---

## 1. 프로젝트 이름

**`planning_project`** (D-043 고정)

- S3~S9 실습 슬라이드의 모든 폴더·디렉토리·CLI 명령에서 통일
- lecture.md에 `03_prd-refinement` 같은 단계별 폴더명이 있어도 슬라이드 빌드 시 `planning_project`로 변환
- 9세션 동안 한 폴더에 누적 — A4 메타 메시지 강화

---

## 2. 표준 폴더 구조 (S3 Step 4-1 기반 + S4 보강)

```
planning_project/
├── docs/
│   ├── prd.md                ← S3 Manyfast export
│   ├── persona.md            ← S3 페르소나 워크시트
│   └── painpoints.md         ← S3 NotebookLM 메모
├── rules/                    ← S4 Step 2 (코딩 규칙 3개)
│   ├── coding-style.md       ← 네이밍·포맷·들여쓰기
│   ├── commit-convention.md  ← 커밋 type 목록과 예시
│   └── architecture.md       ← 폴더 구조와 모듈 분리 원칙
├── src/                      ← S4+ 코드 작성 영역
├── tests/                    ← S4+ 테스트 코드
├── data/                     ← S2/S3 수집 CSV·인터뷰
├── README.md                 ← S3 프로젝트 개요
├── .gitignore                ← S4 Step 4-3
└── .claude/
    ├── CLAUDE.md             ← S3 Claude Code 컨텍스트 (S4에서 4영역 + 참조 지침으로 진화)
    └── settings.json         ← S4 Step 3 (Permissions 3단계)
```

**폴더 생성 명령** (S3 Step 4-1):
```bash
# macOS / Linux
mkdir -p planning_project/{docs,src,tests,data,rules,.claude}

# Windows PowerShell
New-Item -ItemType Directory -Path planning_project/docs, planning_project/src, planning_project/tests, planning_project/data, planning_project/rules, planning_project/.claude
```

---

## 3. 핵심 docs 5개 — 양식 + 출처 + 갱신

### 3.1 `docs/persona.md`

**출처**: S2 활동 묶음 2 페르소나 6줄 → S3 Step 4-2에서 복사

**양식**:
```markdown
# 페르소나: {직군}

- 직군/역할: {직군 + 환경 한 줄}
- 환경 조건: {업무 환경·규모}
- 도구 사용: {현재 사용 중인 도구}
- 동기/목표: {왜 이 문제를 해결하고 싶은가}
- 페인포인트 빈도: {주 N회 / 월 N시간}
- 검증 가능 채널: {페르소나가 활동하는 커뮤니티}
```

**갱신**:
- S4 인터뷰 결과 반영
- S5 검증 패턴으로 페르소나 정제
- 큰 변화 발생 시 README.md 페르소나 섹션도 동기화

### 3.2 `docs/painpoints.md`

**출처**: S3 Step 1 NotebookLM 페인포인트 5개 + 출처 인용

**양식**:
```markdown
# 페인포인트

1. {핵심 페인포인트 1} (⭐ 핵심)
   - 출처 [N], [M]
2. {페인포인트 2}
3. {페인포인트 3}
4. {페인포인트 4}
5. {페인포인트 5}

## 현재 대안
1. {기존 해결 방식 1}
2. {기존 해결 방식 2}
3. {기존 해결 방식 3}
```

**갱신**:
- S5+ 추가 검증 데이터로 신뢰도 보강
- 새 페인포인트 발견 시 우선순위 재조정

### 3.3 `docs/prd.md`

**출처**: S3 Step 3에서 Manyfast → 마크다운 export

**양식** (Manyfast 자동 생성 5요소):
```markdown
# PRD: {프로젝트 이름}

## 문제 정의
{누가 + 어떤 상황 + 어떤 어려움}

## 페르소나
{6줄 가설}

## 핵심 기능 (3개)
1. {입력 기능}
2. {핵심 처리 — 가장 강한 페인포인트}
3. {출력 기능}

## 성공 지표
- {Before → After 측정 가능 형태}

## 제약사항
- {본 MVP에서 제외할 것}
```

**갱신**:
- S4+ 빌드 결과 반영해 검토 수정
- 모호 표현 발견 시 즉시 수정 후 다시 export

### 3.4 `README.md` (프로젝트 루트)

**출처**: S3 Step 4-3

**양식**:
```markdown
# {프로젝트 이름}

> {한 줄 요약}

## 페르소나
{페르소나 핵심 1줄}

## 핵심 페인포인트
{가장 강한 페인포인트 1줄}

## 핵심 기능 3개
1. {입력 기능}
2. {핵심 처리}
3. {출력 기능}

## 성공 지표
- {지표 1: Before → After}
- {지표 2: Before → After}

## 빌드 명령
\`\`\`bash
npm install
npm run dev
\`\`\`
```

**갱신**:
- S4+ 빌드 명령 보강 (실제 명령 + 환경 변수)
- S6+ 출시 가이드 / 배포 명령 추가 (추정)

### 3.5 `.claude/CLAUDE.md`

**출처**: S3 Step 4-4 (Claude Code 컨텍스트) → S4 Step 1에서 4영역 구조로 본격화

**양식** (S4 4영역 + 참조 지침, 200줄 미만 유지):
```markdown
# 1. 프로젝트 개요

{한 단락 — 페르소나·핵심 기능 3개·성공 지표 요약. 자세한 PRD는 docs/prd.md 참조.}

# 2. 기술 스택과 파일 구조

[기술 스택]
- FE: {프레임워크}
- BE: {프레임워크}
- AI API: {모델}
- 상태 관리: {도구}

[폴더 구조]
- src/app/         페이지 라우팅
- src/components/  UI 컴포넌트
- src/lib/         API 호출, 유틸
- docs/            PRD, 페르소나
- rules/           코딩 규칙

# 3. 코딩 가이드라인

- 함수명: camelCase
- 컴포넌트명: PascalCase
- 파일명: kebab-case
- 커밋 메시지: [type] description
- 코드 포맷: Prettier + ESLint

# 4. 제약사항

- {본 MVP에서 안 할 것 3-5줄}

# 5. 시스템 설계 참조 지침

다음 문서를 항상 참조한다:
- docs/prd.md: 제품 요구사항
- docs/persona.md: 페르소나 가설
- docs/painpoints.md: 검증된 페인포인트
- rules/coding-style.md: 네이밍·포맷
- rules/commit-convention.md: 커밋 형식
- rules/architecture.md: 폴더 구조 원칙

기능 구현 시 docs/prd.md의 핵심 기능 3개에 매핑되는지 확인.
모호함이 발견되면 임의 해석하지 말고 작업자에게 확인 요청.
```

**갱신**:
- **S4**: 4영역 + 참조 지침 5 추가 (S3 단순 구조 폐기)
- **S4+**: 디자인 가이드 / 테스트 정책 / API 문서 등 추가 컨텍스트 등록
- **AI 검증 루프**: AI가 CLAUDE.md만 읽고 프로젝트 한 문장 요약 가능해야 통과

### 3.6 `rules/` 폴더 3개 파일

**출처**: S4 Step 2-2 (코딩 규칙 분리)

**구성**:
```
rules/
├── coding-style.md       ← 네이밍, 포맷, 들여쓰기 상세
├── commit-convention.md  ← 커밋 type 목록과 예시
└── architecture.md       ← 폴더 구조와 모듈 분리 원칙
```

**작성 방식**:
- 각 파일 50줄 이내
- CLAUDE.md 3영역(코딩 가이드라인)의 상세화
- AI에게 채우게 함: "CLAUDE.md의 3영역을 참고해서 rules/ 폴더의 3개 파일을 채워줘. 각 파일은 50줄 이내."

**갱신**:
- S5+ 빌드 진행하며 새 규칙 누적 (테스트 규칙 / 디자인 토큰 등)
- 변경 시 CLAUDE.md § 5 참조 지침과 동기화

### 3.7 `.claude/settings.json`

**출처**: S4 Step 3-2 (Permissions 3단계 권장 템플릿)

**양식**:
```json
{
  "permissions": {
    "auto_allow": ["Read", "Grep", "Glob", "Edit"],
    "ask_before": ["Bash", "Write", "WebFetch"],
    "deny": ["BashWithSudo"]
  }
}
```

**3단계 의미**:
- `auto_allow` — 안전한 읽기/탐색/수정. 매번 묻지 않음
- `ask_before` — 부작용 있는 작업. 매번 확인
- `deny` — 시스템 위협 작업. 차단

**갱신**:
- S5+ 프로젝트 특성에 맞춰 권한 조정
- 의도된 차단 시연으로 작동 확인 (Step 3-3)

### 3.8 `.gitignore`

**출처**: S4 Step 4-3 (Claude Code에 위임 생성)

**원칙**:
- Next.js 기준 표준 ignore (node_modules / .env / build 결과물)
- `.claude/`는 **제외하지 말고 포함** (settings.json·CLAUDE.md 동기화 필요)
- AI에게 위임 명령: "이 프로젝트에 맞는 .gitignore를 만들어줘. Next.js 기준이고, .claude/는 제외하지 말고 포함. node_modules, .env, build 결과물은 제외."

**갱신**:
- 새 빌드 도구 도입 시 산출물 ignore 추가
- 비밀키 파일 발견 시 즉시 ignore 추가

---

## 4. 세션별 docs 매핑

| 세션 | 신규 docs | 갱신 docs | 비고 |
|---|---|---|---|
| **S3** | persona.md / painpoints.md / prd.md / README.md / CLAUDE.md(초안) | — | 초기 생성 (Step 4) |
| **S4** | rules/coding-style.md / rules/commit-convention.md / rules/architecture.md / .claude/settings.json / .gitignore | CLAUDE.md (4영역 + § 5 참조 지침) | Step 1~4 환경 본격화 |
| **S5~S9** | (각 세션 진입 시 강사 협업으로 갱신) | (TBD) | — |

**갱신 규칙**:
- 각 세션 진입 시 lecture.md 분석 → 본 표 매핑 갱신
- 강사가 lecture.md 보강 시 본 SSOT도 동시 갱신
- 본 SSOT 갱신 시 history.md에 변경 기록

---

## 5. 슬라이드 빌더 참조 룰

S3~S9 실습 슬라이드 빌드 시 본 SSOT를 참조:

1. **폴더 경로** — `planning_project/docs/{file}.md` 형식 통일
2. **명령 예시** — `cd planning_project`로 시작 (작업 디렉토리 진입)
3. **docs 양식** — 본 SSOT 양식 그대로 사용. lecture.md 양식과 차이 시 본 SSOT 우선
4. **CLAUDE.md 갱신** — 새 컨텍스트 파일 추가 시 본 SSOT § 3.5 영역에도 동시 반영
5. **rules/ 참조** — S4+ 슬라이드에서 코딩 규칙 언급 시 본 SSOT § 3.6 그대로 사용
6. **settings.json 참조** — Permissions 슬라이드는 본 SSOT § 3.7 권장 템플릿 사용
7. **.gitignore 원칙** — `.claude/` 제외 X 룰 슬라이드 빌드 시 본 SSOT § 3.8 명시
8. **충돌 보고** — lecture.md와 본 SSOT 불일치 시 강사에게 보고 → SSOT 갱신 권고

---

## 6. 관련 SSOT

- **CLAUDE.md § 6 A7**: 프로젝트명 `planning_project` 고정 룰 (D-043)
- **CLAUDE.md § 6 A8**: 본 SSOT 참조 의무 (D-044)
- **docs/decisions.md D-043**: 폴더명 고정 정식 결정
- **docs/decisions.md D-044**: 본 SSOT 신설 정식 결정

---

**[학생 프로젝트 구조 SSOT — 2026-05-13 S4 산출물 반영 (§3.5 4영역 + §3.6 rules + §3.7 settings.json + §3.8 .gitignore + § 5 참조 룰 4건), S5~S9 진입 시 강사 협업 갱신]**
