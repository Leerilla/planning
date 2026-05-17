# 캡처 이미지 워크플로우

> 9세션 × 평균 캡처 = 약 80~95장을 효율적으로 관리.

---

## 1. 핵심 정책: A + D 하이브리드

### 기본 (A): 로컬 폴더 + CaptureSlide 패턴
- 모든 캡처: `lectures/S{N}/captures/`
- 슬라이드에서 `<CaptureSlide>` 컴포넌트로 사용
- Git으로 버전 관리

### 선별 (D): 인라인 SVG 재현
- 자주 변하는 UI 일부는 SVG 재현
- 강조 영역은 CSS 박스로 재현

---

## 2. 파일명 규칙

```
{단계번호}-{도구명}-{설명}.png
```

**예시**:
```
01-chatgpt-prompt.png         ✅
02-notebook-lm-upload.png     ✅
03-vercel-deploy.png          ✅

screenshot.png                ❌ 정보 없음
캡처1.png                     ❌ 한글
chatgpt v2.png                ❌ 공백 + 버전
```

**규칙**:
- 단계 번호: 2자리 (01~99)
- 도구명: 소문자, 하이픈
- 설명: 영문 소문자, 4단어 이내
- 한글, 공백, 특수문자 금지

---

## 3. 슬라이드에서 사용 — CaptureSlide 패턴

```jsx
<CaptureSlide
  step="Step 2"                         // 단계 라벨
  src="01-chatgpt-prompt.png"           // 파일명만 (자동 경로 추정)
  caption="ChatGPT에 1차 리서치 프롬프트 입력"
  highlight={{ x: 200, y: 150, w: 800, h: 100 }}  // 강조 영역 (선택)
/>
```

**자동 처리**:
- `lectures/S{현재}/captures/01-chatgpt-prompt.png` 경로 자동 추정
- 통일된 스타일 (테두리, 그림자, 캡션)
- 강조 영역 빨간 박스 + 화살표
- 누락 시 placeholder

상세 props 시그니처: `docs/slide-patterns.md § 3.11`.

---

## 4. 누락 처리

캡처 미추가 시 자동 placeholder:

```
┌────────────────────────────────────┐
│   📷 캡처 추가 예정                  │
│   파일명: 01-chatgpt-prompt.png     │
│   경로: lectures/S1/captures/      │
└────────────────────────────────────┘
```

→ 콘솔 경고 + 빌드는 진행됨.

---

## 5. 인라인 SVG 재현 (D 방식)

**사용 시점**:
- 도구 UI에서 한 버튼만 강조
- UI가 자주 바뀌어 캡처 갱신 부담

**예시**:
```jsx
<UIRecreation tool="chatgpt">
  <PromptInput>
    "사이드 프로젝트 3주만에 포기하는 사람들의 기존 해결책은?"
  </PromptInput>
  <SubmitButton highlight />
</UIRecreation>
```

---

## 6. 캡처 가이드라인 (강사용)

1. 해상도: 1280px+ (권장 1600~1920px)
2. 개인정보 마스킹
3. 적절한 여백
4. 포맷: PNG (스크린샷)
5. 사이즈: 500KB ~ 2MB (5MB 초과 금지)

---

## 7. 자동화 — capture-checker (utility 함수)

> ⚠️ **재설계로 변경**: 이전 `capture-validator` sub-agent → `capture-checker.js` utility 함수.
> render-validator (Phase δ, ε)에서 호출.

위치: `.claude/utilities/capture-checker.js`.

### 검증 항목

1. **참조 무결성** — `<CaptureSlide src="X" />` 모든 참조의 실제 파일 존재
2. **파일명 규칙** — 정규식: `^\d{2}-[a-z][a-z0-9-]*[a-z0-9]\.(png|jpg|jpeg)$`
3. **사이즈** — 5MB 초과 ⛔ / 2MB 초과 ⚠️ / 50KB 미만 ⚠️ (해상도 의심)
4. **단계 번호 일관성** — 같은 폴더 내 번호 점프 검출

### 보고 형식

```
📷 Capture Validation 결과

세션별:
✅ S1: 8/8 OK
⚠️ S3: 11/12 (1개 누락)
❌ S4: 5/8 (3개 누락 + 2개 명명 위반)

상세 (S4):
[1] ❌ 누락
   참조: theory/12-claude-md.jsx:23
   파일: 03-claude-md-template.png
   조치: 강사가 캡처 추가 필요

[2] ⚠️ 명명 위반
   파일: CLAUDE_md.png
   문제: 한글, 언더스코어, 단계 번호 없음
   권장: 04-claude-md-overview.png

📊 통계
- 총 캡처: 87개
- 통과: 81개
- 누락: 4개
- 명명 위반: 2개
```

### 자동 수정

- 파일명 정규화 (특수문자 제거, 영문화)
- 미사용 파일 격리 (`_unused/` 폴더)

### 자동 수정 불가 (강사 작업)

- 누락 캡처 추가
- 캡처 내용 자체

### 절대 원칙

- ❌ 캡처 파일 자동 삭제 X (격리만)
- ❌ lectures/ 마크다운 자동 수정 X
- ✅ 누락은 placeholder 처리 (빌드는 진행)
- ✅ 검증 결과 우선순위 정렬

---

## 8. 9세션 캡처 예상 분포

| 세션 | 예상 | 주요 도구 |
|---|---|---|
| S1 | 5~8장 | ChatGPT, 워크시트 |
| S2 | 8~10장 | 메타 프롬프팅, Playwright |
| S3 | 10~12장 | NotebookLM, Manyfast |
| S4 | 8~10장 | Claude Code, MCP |
| S5 | 10~12장 | Stitch, Claude Code |
| S6 | 8~10장 | sub-agent, hooks |
| S7 | 8~10장 | Playwright MCP |
| S8 | 12~15장 | Vercel, Railway, Clarity, Sentry |
| S9 | 5~8장 | NotebookLM, Notion |
| **합계** | **약 80~95장** | |

---

## 9. 강사 워크플로우

### 수업 전
```
1. lecture.md 작성하면서 캡처 위치 표시
   → "여기에 ChatGPT 캡처" 같은 자연 언어 OK
   → 또는 강사 힌트: <!-- @capture: 01-chatgpt-prompt.png -->

2. 도구 사용하면서 캡처
   → 파일명 규칙 따라 저장

3. lectures/S{N}/captures/ 폴더에 업로드
   → 드래그앤드롭

4. Claude Code: "S{N} 슬라이드 큐레이션해줘"
   → lecture-translator가 자동 매칭
   → 매칭 결과 Gate-1에서 강사 검토
```

### 수업 중
```
1. 학생 질문으로 새 캡처 필요
2. 그 자리에서 캡처 → captures/ 추가
3. 새로고침 → 즉시 표시 (개발 모드)
4. git push → Vercel 자동 재배포 (운영)
```

---

## 10. 체크리스트

새 캡처 추가 시:
- [ ] 파일명 규칙 (`{NN}-{tool}-{desc}.png`)
- [ ] 한글/공백/특수문자 없음
- [ ] 사이즈 5MB 이하
- [ ] 개인정보 마스킹
- [ ] 여백 적절

새 슬라이드 빌드 후:
- [ ] capture-checker PASS
- [ ] placeholder 없는가
- [ ] 모바일 보기 OK

---

## 11. 참조 관계

- **lecture-translator** Phase α.1 → 캡처 참조 추출 (이 문서 § 9)
- **layer-composer** β.1 → CaptureSlide props (`docs/slide-patterns.md § 3.11`)
- **render-validator** → capture-checker 호출 (이 문서 § 7)

---

**[docs/capture-workflow.md 끝]**
