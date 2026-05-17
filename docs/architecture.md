# 시스템 아키텍처

> **무엇이 어떻게 작동하는지** 정의.
> 새 기능 추가 시 이 구조 위반 X.

---

## 1. 전체 그림

```
┌─────────────────────────────────────────────────────────────┐
│                         학생 / 강사                          │
└────────────┬─────────────────────────────────┬──────────────┘
             ▼                                 ▼
┌──────────────────────────┐    ┌──────────────────────────┐
│   Next.js Frontend        │    │  Admin Panel              │
│                           │    │  (/admin)                 │
│  • 메인 허브 /             │    │  • 세션 잠금/해제          │
│  • 세션 허브 /sessions/sN  │    │  • 학생 진척도 뷰          │
│  • 슬라이드 덱            │    │                           │
└────────┬─────────────────┘    └──────────────┬───────────┘
         ▼                                     ▼
┌─────────────────────────────────────────────────────────────┐
│              Vercel Functions (API Routes)                  │
└─────────┬─────────────────────────────────────┬─────────────┘
          ▼                                     ▼
┌──────────────────────────┐      ┌──────────────────────────┐
│   Vercel KV (Redis)       │      │   Notion API              │
└──────────────────────────┘      └──────────────────────────┘
```

---

## 2. 페이지 라우팅

```
src/app/
├── page.js                       # / (메인 허브)
├── layout.js
├── globals.css
│
├── admin/page.js                 # /admin
│
├── sessions/[slug]/              # /sessions/s1
│   ├── page.js                   # 세션 허브
│   ├── theory/page.js            # 이론 덱
│   ├── activity-1/page.js        # 활동 1
│   └── activity-2/page.js        # 활동 2 (있을 경우)
│
├── completion/page.js            # /completion
│
└── api/
    ├── auth/route.js
    ├── access-check/route.js
    ├── admin-toggle/route.js
    ├── submit-assignment/route.js
    └── progress-track/route.js
```

---

## 3. API 명세

### POST /api/auth
**목적**: 비밀번호 검증 + 닉네임 등록.
- Request: `{ password, nickname, role }`
- Response: `{ success, userId, role }`

### GET /api/access-check?session=s1
**목적**: 세션 잠금 확인.
- Response: `{ session, status, decks: [{id, title, slideCount}], unlockDate }`

### POST /api/admin-toggle
**목적**: 강사 세션 활성/비활성.
- Request: `{ session, status, adminPassword }`

### POST /api/submit-assignment
**목적**: 과제 제출.
- Request: `{ userId, session, content }`
- 처리: Notion DB 페이지 생성 + KV 진척도 업데이트.

### POST /api/progress-track
**목적**: 슬라이드 진척도 자동 저장.
- Request: `{ userId, sessionId, deckId, currentSlide, totalSlides, status }`

### GET /api/progress-track?userId=user_abc123
**목적**: 진척도 조회.
- Response: `{ userId, progress: {...}, completedDecks, totalDecks }`

---

## 4. 데이터 스키마

### Vercel KV

```
session:{slug}:status = "active" | "locked"
session:{slug}:decks = JSON [{id, title, slideCount}]
progress:{userId}:{sessionId}:{deckId} = JSON {currentSlide, lastViewedAt, status}
user:{userId} = JSON {nickname, createdAt, lastActive}
```

### Notion DB

| 컬럼 | 타입 | 용도 |
|---|---|---|
| 학생 닉네임 | Title | 학생 식별 |
| User ID | Text | 시스템 ID |
| 세션 | Select (S1~S9) | 어떤 세션 |
| 제출 시각 | Created Time | 자동 |
| 과제 내용 | Rich Text | 학생 작성 |
| 첨부 URL | URL | 자료 링크 |
| 검토 상태 | Select | 미검토/검토중/완료 |
| 강사 코멘트 | Rich Text | 피드백 |

---

## 5. 컴포넌트 계층

```
src/components/
├── ui/                            # 기본 UI
│   ├── Button.jsx, Card.jsx, Badge.jsx, Input.jsx
│
├── slides/                        # 슬라이드 시스템
│   ├── SlideDeck.jsx              # 덱 컨테이너
│   ├── SlideControls.jsx
│   ├── KeyboardHandler.jsx
│   └── patterns/                  # 18개 패턴 (docs/slide-patterns.md)
│       ├── SlideFrame.jsx
│       └── ... (18개)
│
├── slides/s{N}/                   # 세션별 슬라이드
│   ├── theory/01-cover.jsx
│   └── activity-{N}/
│
├── animations/                    # 인터랙티브 (docs/animation-patterns.md)
│   ├── PersonaBuilder.jsx
│   └── ... (8 + 신규)
│
├── sections/                      # 메인 허브 섹션
│   ├── Hero.jsx, JourneyMap.jsx, SessionGrid.jsx, PrinciplesPanel.jsx, PasswordGate.jsx
│
├── session/                       # 세션 페이지 전용
│   ├── SessionHub.jsx, AssignmentForm.jsx
│
└── layout/
    ├── Nav.jsx, Footer.jsx
```

---

## 6. ⭐ Sub-Agent 시스템 (재설계)

`.claude/agents/`에 정의된 5개 sub-agent + 2개 utility 함수.

### 6.1 5개 핵심 Agent

| Agent | 역할 | Phase |
|---|---|---|
| **lecture-translator** ⭐ | lecture.md 분석 + profile 추론 + 강도 매핑 + 시퀀스 + 빌드 | α, δ |
| **layer-composer** | interactive + visual + wireframe(px) 통합 | β |
| **quality-judge** | 감산 통합 (28축, 31결정 + profile + 흐름 호흡 + 두께 + design grep) | γ |
| **creative-judge** ⭐ | 가산 평가 (5축, 다양성/강도일치/세션차별성/인터랙티브깊이/wireframe정교도) | γ |
| **render-validator** | 빌드 후 시각 검증 (overflow/줄바꿈/capture) | δ, ε |

### 6.2 2개 Utilities (함수, agent 아님)

```
.claude/utilities/
├── design-checker.js           # design 토큰 grep (이전 design-reviewer 흡수)
└── capture-checker.js          # capture 무결성 (이전 capture-validator 흡수)
```

함수형으로 처리 — quality-judge / render-validator가 호출.

### 6.3 6단계 파이프라인

```
lecture.md
  → [Phase α] lecture-translator
  → ⛳ Gate-1 (강사 검토)
  → [Phase β] layer-composer
  → [Phase γ] quality-judge + creative-judge (병렬)
  → ⛳ Gate-2 (강사 spec 검토)
  → [Phase δ] lecture-translator (섹션별 빌드 — render-validator 호출)
  → [Phase ε] render-validator (통합 검증)
```

상세는 `docs/curation-workflow.md`.

---

## 7. 데이터 흐름 시나리오

### 시나리오 A: 학생이 S1 이론 덱 학습

```
1. / 진입 → 비밀번호 입력
2. /api/auth → userId 발급
3. 메인 허브 → S1 카드 클릭
4. /sessions/s1 → 허브
5. /api/access-check?session=s1 → status: active
6. 덱 목록 표시 (이론 25장, 활동 1 12장)
7. "이론 시작" → /sessions/s1/theory
8. SlideDeck 마운트 → 슬라이드 1번 (Cover)
9. → 키 → 2번 전환 (300ms)
10. URL: #2
11. /api/progress-track → KV 저장
12. ... 25번 도달 → "completed" 마킹
13. "활동 1 시작" 버튼 표시
```

### 시나리오 B: 강사가 슬라이드 큐레이션 (재설계 후)

```
1. lectures/S{N}/lecture.md 작성
2. lectures/S{N}/captures/ 에 PNG 추가
3. 강사 → "S{N} 슬라이드 큐레이션해줘"
4. lecture-translator (Phase α) 활성화
5. 자동: 구조 분석 + profile 추론 + 강도 매핑 + 시퀀스 초안
6. ⛳ Gate-1: 분류 + profile + 시퀀스 강사 검토 → 응답
7. profile.yaml status: confirmed
8. layer-composer (Phase β) 자동 호출
9. 자동: props + interactive + visual + wireframe(px)
10. quality-judge + creative-judge 병렬 실행
11. ⛳ Gate-2: 감산 PASS + 가산 점수 + wireframe → 강사 응답
12. lecture-translator (Phase δ): §1 빌드 → render-validator → 강사 §1 검증
13. ... §2, §3 동일
14. render-validator (Phase ε): 통합 검증
15. history.md 갱신 + progress.md 갱신
16. git commit + push → Vercel 자동 배포
```

---

## 8. 성능 고려사항

### 8.1 정적 생성 (SSG)
- 메인 허브, 세션 허브, 슬라이드 덱: SSG (콘텐츠는 빌드 시점 결정)
- 잠금 상태만 클라이언트 fetch

### 8.2 슬라이드 Lazy Loading
- 25+ 슬라이드 한번에 로드 X
- 현재 ± 2장만 활성 렌더링
- 인터랙티브는 활성 슬라이드만 작동

### 8.3 클라이언트 컴포넌트 최소화
- `'use client'`는 인터랙션 필수만
- 슬라이드 패턴 컴포넌트는 대부분 Server Component
- SlideDeck만 Client (키보드 이벤트)

---

## 9. 보안

### 9.1 환경변수
- `.env.local`만 사용, 절대 커밋 X
- `NEXT_PUBLIC_` 프리픽스 최소화

### 9.2 Rate Limiting
- `/api/auth`: 분당 5회
- `/api/submit-assignment`: 분당 10회

### 9.3 CORS
- 동일 도메인 — 이슈 없음
- Notion API 호출은 서버 사이드만

---

## 10. 확장 가능성 (현재 미구현)

- 학생 간 채팅/Q&A
- 자동 채점
- 강의 영상 임베드
- 발표자 모드 (강사용 메모)
- 슬라이드 미리보기 그리드
- 다국어 지원

---

## 11. 변경 이력

- **2026-05-XX 재설계**: sub-agent 8 → 5 + utility 2. 13단계 → 6단계 파이프라인. profile 시스템 도입. 가산 평가 (creative-judge) 신설. 자세한 결정은 `docs/decisions.md` D-015~D-020 참조.

---

**[docs/architecture.md 끝]**
