# 📚 Lectures — 강사 작업 영역

> 강사가 직접 작성하는 영역.
> Claude Code는 이 폴더의 마크다운을 자동 수정하지 않습니다.

---

## 📁 폴더 구조

```
lectures/
├── S1/                      ← S1 세션
│   ├── lecture.md           ← ★ 이론+실습 통합 초안 (자유 형식)
│   ├── assignment.md        ← 과제
│   ├── checklist.md         ← 체크리스트
│   └── captures/            ← 캡처 PNG
├── S2/ ~ S9/                ← 동일 구조
└── _shared/                 ← 공통 자료
```

---

## ✍️ 작성 원칙

### lecture.md
- **자유 형식 OK** — 메모식, 강의 설계 노트
- 이론과 실습 모두 포함 (하나의 파일에)
- slide-curator가 자동으로 분류 + 슬라이드로 변환

### 권장 구조 (강제 X)
```markdown
# 세션 제목

## 학습 목표
- ...

## 1. 이론 섹션 1
...

## 2. 이론 섹션 2
...

## 활동 1: 실습 제목
### Step 1: ...
### Step 2: ...
(여기에 ChatGPT 캡처)

## 활동 2: ...
```

### 강사 힌트 (선택)
slide-curator가 더 정확히 분류하도록 힌트 추가 가능:

```markdown
<!-- @key -->
AI는 기획을 대신하지 않는다.

## 활동 1 <!-- @activity duration=25min -->

<!-- @persona-builder -->  ← 인터랙티브 컴포넌트 위치

<!-- @capture: 01-chatgpt-prompt.png -->
ChatGPT에 다음을 입력하세요...
```

---

## 🔄 작성 → 슬라이드 변환 흐름

```
1. 강사: lecture.md 자유롭게 작성
2. 강사: captures/ 에 PNG 추가 (파일명 규칙)
3. Claude Code: "S1 슬라이드 큐레이션해줘"
4. slide-curator가 9단계 워크플로우 진행:
   - 자동 분석
   - 분류 검증 (강사 응답)
   - 시퀀스 제안 (강사 응답)
   - 컴포넌트 생성
   - 자가 검증
5. 강사: npm run dev 로 시각 확인
6. 조정 요청 (자유롭게)
```

---

## 🚫 절대 하지 말 것

- ❌ src/ 등 코드 폴더 수정 (Claude Code에 맡기세요)
- ❌ 캡처 파일명에 한글/공백
- ❌ 5MB 초과 캡처

---

## 💡 캡처 파일명 규칙

```
{NN}-{tool}-{description}.png
```

예시:
- ✅ `01-chatgpt-prompt.png`
- ✅ `02-notebook-lm-upload.png`
- ❌ `screenshot.png` (정보 부족)
- ❌ `캡처1.png` (한글)

상세: `docs/capture-workflow.md`

---

## 📋 체크리스트 (각 세션마다)

- [ ] lecture.md 작성 (이론 + 실습 통합)
- [ ] assignment.md 작성
- [ ] checklist.md 작성
- [ ] captures/ 에 PNG 추가 (파일명 규칙)
- [ ] Claude Code 큐레이션 요청
- [ ] Phase 4 분류 검증 응답
- [ ] Phase 6 시퀀스 검토 응답
- [ ] 결과 시각 확인
