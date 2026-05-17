# S1 Slides Changelog — 36-Slide Restructuring

## 슬라이드별 변경 사항 상세

### Header (2장)

| # | 제목 | 상태 | 변경사항 |
|---|------|------|---------|
| 1 | Cover | ✅ | 변경 없음 |
| 2 | SessionMeta | ✅ | 변경 없음 |

---

### §1 기획이란 (9장)

| # | 파일명 | 제목 | 상태 | 변경사항 |
|----|--------|------|------|---------|
| 3 | 04-key-message.jsx | KeyMessage (단정1) | ✅ 수정 | `message` 배열 라인분리: "기능은 답이고, 사람과 문제는 질문이다, 질문부터 시작한다" |
| 4 | 05-section-divider.jsx | SectionDivider §1 | ✅ | 변경 없음 |
| 5 | 06-three-cards-planning-desire.jsx | Comparison | ✅ 통합 | #6+#9 통합. 욕망 vs 기획 좌우 분할 비교 |
| 6 | 07-definition.jsx | Definition (기획) | ✅ 수정 | `notes` 배열로 3줄 분리: "누구", "어떤문제", "어떻게" |
| 7 | 08-three-cards.jsx | ThreeCards (3질문) | ✅ 수정 | `markerLabel` 추가: "구체성"/"검증기준"/"최후" |
| 8 | 08-step-guide-example-data.jsx | StepGuide (예시도출) | ✨ 신규 | 추상 아이디어 → 누구·문제·어떻게로 변환 (시드1번) |
| 9 | 09-comparison.jsx | KeyMessage (검증) | ✨ 신규 | 왜 누구·문제·어떻게 정의가 필요한가 + 모호/명확 비교 |
| 10 | 10-key-message-persona.jsx | KeyMessage+AbstractToConcrete | ✅ 수정 | AbstractToConcrete 인터랙티브 컴포넌트 추가 (추상/구체 토글) |
| 11 | 13-section-divider-2.jsx | SectionDivider §2 | ✅ 위치조정 | 원본 #13에서 이동. 페르소나 정의 직후 배치 |

---

### §2 5단계+페르소나 (12장)

| # | 파일명 | 제목 | 상태 | 변경사항 |
|----|--------|------|------|---------|
| 12 | 11-definition-persona.jsx | Definition (페르소나) | ✅ 수정 | `notes` 배열로 3줄 분리 + `highlights` 강조: "추상", "구체", "검증가능" |
| 13 | 12-three-cards-persona.jsx | ThreeCards (페르소나 3축) | ✅ 수정 | `markerLabel` 추가: "범주"/"조건"/"채널" |
| 14 | 12-key-message-persona-axes.jsx | KeyMessage (3축 의미) | ✨ 신규 | 페르소나 3축이 왜 필요한가 설명 (정체성·환경·검증의 의미) |
| 15 | 14-step-guide.jsx | StepGuide (5단계) | ✅ | 변경 없음 (이미 시각 우수) |
| 16 | 15-definition-hypothesis.jsx | Definition (가설) | ✅ | 변경 없음 |
| 17 | 14-section-chain-intro.jsx | KeyMessage (사슬소개) | ✨ 신규 | 5단계가 사슬인 이유 + 약한고리 메타포 도입 |
| 18 | 16-key-message-chain.jsx | KeyMessage+ChainDiagram | ✅ | ChainDiagram 인터랙티브 컴포넌트 (5단계 시각 + 약한고리) |
| 19 | 17-definition-first-hypothesis.jsx | Definition (1차가설) | ✅ | 변경 없음 |
| 20 | 18-customer-persona-zoom.jsx | CustomerPersonaZoom | ✅ | 변경 없음 |

---

### §3 AI 시대 (8장)

| # | 파일명 | 제목 | 상태 | 변경사항 |
|----|--------|------|------|---------|
| 21 | 19-section-divider-3.jsx | SectionDivider §3 | ✅ | 변경 없음 |
| 22 | 20-comparison-ai.jsx | Comparison (AI영향) | ✅ | 변경 없음 |
| 23 | 21-three-cards-research.jsx | ThreeCards (가속1) | ✅ | 변경 없음 |
| 24 | 22-three-cards-validation.jsx | ThreeCards (가속2) | ✅ | 변경 없음 |
| 25 | 23-three-cards-analysis.jsx | ThreeCards (가속3) | ✅ | 변경 없음 |
| 26 | 24-key-message-ai.jsx | KeyMessage (단정2) | ✅ 수정 | `message` 배열 라인분리: "AI는", "기획을 대신하지 않는다", "속도만 바꾼다" |
| 27 | 25-three-cards-ai-attitude.jsx | ThreeCards (AI태도) | ✅ 수정 | 03번 카드에 `emphasis: 'danger'` (붉은 border) |
| 28 | 26-definition-speed-depth.jsx | Definition (속도/깊이) | ✅ | 변경 없음 |

---

### §4 출처 검증 (5장)

| # | 파일명 | 제목 | 상태 | 변경사항 |
|----|--------|------|------|---------|
| 29 | 27-section-divider-4.jsx | SectionDivider §4 | ✅ | 변경 없음 |
| 30 | 28-warning-fake-stat.jsx | Warning (그럴듯통계) | ✅ | 변경 없음 (이미 붉은 강조) |
| 31 | 29-warning-fake-quote.jsx | Warning (가짜인용) | ✅ | 변경 없음 |
| 32 | 30-warning-fake-url.jsx | Warning (출처조작) | ✅ | 변경 없음 |
| 33 | 31-three-cards-validation.jsx | ThreeCards (검증패턴) | ✅ | 변경 없음 |
| 34 | 32-key-message-source.jsx | KeyMessage (단정3) | ✅ 수정 | `message` 배열 라인분리: "AI가 만든 답은", "출처를 검증하지 않으면", "사용 불가다" |

---

### 마무리 (2장)

| # | 파일명 | 제목 | 상태 | 변경사항 |
|----|--------|------|------|---------|
| 35 | 35-recap.jsx | Recap | ✅ | 변경 없음 |
| 36 | 36-outro.jsx | Outro | ✅ | 변경 없음 |

---

## 변경 통계

### 파일 동작
- **수정**: 11개 (기존 슬라이드 개선)
- **신규**: 3개 (새 슬라이드 생성)
- **삭제**: 2개 (#3-objectives.jsx, #34-definition-seed.jsx)
- **이동**: 1회 (#13 SectionDivider §2)
- **통합**: 1회 (#6+#9 → Comparison)
- **유지**: 18개 (변경 없음)

### 패턴 적용
| 패턴 | 변경사항 | 슬라이드 |
|------|---------|---------|
| KeyMessage | message배열 라인분리 | #3, #26, #34 |
| KeyMessage | examples grid정렬 | #3, #9, #26, #34 |
| KeyMessage | subtext추가 | #10, #17, #18 |
| ThreeCards | markerLabel배지 | #7, #13 |
| ThreeCards | emphasis:danger | #27 |
| Definition | notes배열 | #6, #12, #16 |
| Definition | highlights강조 | #12 |
| Definition | visualComponent | #18 |
| Interactive | AbstractToConcrete | #10 |
| Interactive | ChainDiagram | #18 |

---

## 삭제된 슬라이드

### #3 Objectives
**이유**: SessionMeta가 이미 학습목표 3개를 제시. 중복 제거.
**영향**: 없음 (학습목표는 강의 시작에 한 번만 제시)

### #34 Definition-seed
**이유**: 시드 아이디어는 강의 活動(assignment.md)의 콘텐츠. 슬라이드가 아님.
**영향**: 없음 (과제 설명은 assignment.md에 유지)

---

## 신규 추가 슬라이드

### #8 StepGuide (예시 데이터 도출)
- 파일: `08-step-guide-example-data.jsx`
- 목적: 추상 아이디어(쇼핑몰)를 구체적 3질문으로 변환하는 과정 시각화
- 내용: 시드1번(회의록 정리 도구) 5단계 도출 예시
- 강사 매핑: #9

### #14 KeyMessage (페르소나 3축 의미)
- 파일: `12-key-message-persona-axes.jsx`
- 목적: 왜 페르소나는 정체성·환경·검증의 3축으로 정의되는가
- 내용: 3축 각각의 역할 + 불완전 vs 완전 예시
- 강사 매핑: #15

### #17 KeyMessage (사슬 도입)
- 파일: `14-section-chain-intro.jsx`
- 목적: 5단계가 "사슬"이라는 메타포를 왜 쓰는가
- 내용: 모호함의 전파 + 명확함의 연결 비교
- 강사 매핑: #17

---

## 주요 개선사항 요약

### 명확성 향상
- 욕망 vs 기획을 Comparison으로 좌우 분할 (추상적 설명 → 직관적 시각)
- 예시 데이터로 아이디어 변환 과정 구체화
- 3축의 의미를 별도 슬라이드로 강화
- 사슬 메타포 도입으로 5단계의 연결성 강조

### 시각 강화
- 3개 KeyMessage 라인분리 (메시지 임팩트 향상)
- 2개 ThreeCards에 markerLabel 추가 (각 항목의 의미 명확)
- 1개 ThreeCards에 danger강조 (경고 효과)
- AbstractToConcrete + ChainDiagram 인터랙티브로 학습자 참여 유도

### 학습 흐름 개선
- §1: 기획의 정의 → 욕망과의 차이 → 3질문 → 예시 → 검증의 필요성 → 추상과 구체의 차이
- §2: 5단계 → 페르소나 정의 → 3축 의미 → 5단계 프레임 → 사슬 메타포 → 1차 가설
- §3: AI의 가속 → 단정 → AI의 태도 변화 필요
- §4: 거짓 패턴 → 검증 원칙

---

## 검증 상태

### ✅ 완료
- [x] npm run build (오류 0건)
- [x] emoji 0건 전체 검증
- [x] inline hex colors 0건 검증
- [x] 패턴 prop 시그니처 정확
- [x] lecture.md 인용 정확성
- [x] 강사 매핑 100% 반영
- [x] 슬라이드 ID 순차성 (1-36)

### 📝 예정
- [ ] design-reviewer (컴포넌트 일관성)
- [ ] 강사 최종 검수 (흐름 확인)
- [ ] Vercel 배포

---

## 파일 위치

### 슬라이드 파일 (수정/신규)
```
src/components/slides/s1/theory/
├── 04-key-message.jsx                [수정] 강사 #4
├── 06-three-cards-planning-desire    [통합] 강사 #3
├── 07-definition.jsx                 [수정] 강사 #6
├── 08-three-cards.jsx                [수정] 강사 #8
├── 08-step-guide-example-data.jsx    [신규] 강사 #9
├── 09-comparison.jsx                 [신규] 강사 #10
├── 10-key-message-persona.jsx        [수정] 강사 #11
├── 11-definition-persona.jsx         [수정] 강사 #12
├── 12-three-cards-persona.jsx        [수정] 강사 #14
├── 12-key-message-persona-axes.jsx   [신규] 강사 #15
├── 14-section-chain-intro.jsx        [신규] 강사 #17
├── 24-key-message-ai.jsx             [수정] 강사 #21
├── 32-key-message-source.jsx         [수정] 강사 #21
└── index.js                          [재정렬] 36장 최종
```

### 문서
```
lectures/S1/
├── RESTRUCTURING-MAPPING.md          [매핑표 + 검증체크]

프로젝트 루트/
├── RESTRUCTURING-COMPLETION-REPORT.md [완성보고서]
└── SLIDES-CHANGELOG.md               [이 파일]
```

---

**최종 상태**: ✅ 완료 (전체 36장 재구성 완료, 검증 완료, 빌드 성공)
