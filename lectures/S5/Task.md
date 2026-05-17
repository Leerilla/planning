# S5 Task Tracker (2026-05-13)

> 93장 (이론 39 + 실습 54) PPT 빌드 — S3·S4 검증 패턴 일관 적용

## 슬라이드 합계 (93장)

- 이론 39장 (T2.0a/b 자동 2 + T2.1~T2.5 5 미니 사이클)
- 실습 54장 (T3.0 자동 1 + T3.1~T3.7 7 미니 사이클 + T3.8 과제 + T3.9 Tips 5×2)

## 적용 룰

- D-043 `planning_project` 폴더명 고정 (Step 0-2 그대로 사용)
- D-044 student-project-reference.md SSOT (Step 0-3 산출물 점검)
- D-045 `bg-bg-elev` 금지 — 처음부터 적용
- D-046 `font-mono` 금지 — 처음부터 적용

---

## Phase 0 — Pre-task ✓

- [x] **T0.1**: src/components/slides/s5/{theory,activity} 폴더 + placeholder index.js × 2 신규
- [x] **T0.2**: deck-registry.js s5 entry 등록
- [x] **T0.3**: lectures/S5/captures/ 폴더 신규

## Phase 1 — 통합 분석 + Gate-1 ✓

- [x] **T1.1**: profile.yaml (status: confirmed)
- [x] **T1.2**: spec.md § 0~§ 5 신규 (coverage 100%)
- [x] **T1.3**: Gate-1 reasonable defaults 5건 통과

## Phase 2 — 이론 미니 사이클 (39장) ✓

- [x] **T2.0a** 자동: `01-session-cover.jsx`
- [x] **T2.0b** 자동: `02-toc.jsx`
- [x] **T2.1** §1 수직 슬라이스 (8장): 03~10
- [x] **T2.2** §2-A 위임 3원칙 본질·원칙·양식 (8장): 11~18
- [x] **T2.3** §2-B 위험·습관·안티·전반 (5장): 19~23
- [x] **T2.4** §3-A Stitch와 단정 (5장): 24~28
- [x] **T2.5** §3-B 동작 3요소 + 합격선 (11장): 29~39
- [x] **T2.ε** 빌드 통과 (9 routes)

## Phase 3 — 실습 미니 사이클 (54장) ✓

- [x] **T3.0** 자동: `01-activity-toc.jsx`
- [x] **T3.1** Step 0 환경 진단 (6장)
- [x] **T3.2** Step 1 화면 분석·Task 매칭 (10장)
- [x] **T3.3** Step 2 GitHub Issue (4장)
- [x] **T3.4** Step 3 Stitch 시안 (5장)
- [x] **T3.5** Step 4 첫 Task 빌드·PR (8장)
- [x] **T3.6** Step 5 셀프 코드 리뷰 (4장)
- [x] **T3.7** Step N 정리·회고 (5장)
- [x] **T3.8** 과제 (1장)
- [x] **T3.9** Tips 5 카테고리 (10장)
- [x] **T3.ε** 빌드 통과

## Phase 4 — Final ε ✓

- [x] **T4.1** npm build 통과 (9 routes)
- [x] **T4.2** design-check 0 violation (D-045/046 처음부터 적용)
- [x] **T4.3** coverage 사후 100% (lecture.md L1~L1035)
- [x] **T4.4** history.md § 0 갱신
- [x] **T4.5** spec § 5 Sign-off

## Phase 5 — S5Form 제출 인프라 ✓

- [x] **P5.1** S5Form.jsx 신규 (화면 분석 + Issue 10 + Stitch 시안 + 첫 PR + 셀프 리뷰 + 회고 3)
- [x] **P5.2** SubmitForm.jsx s5 분기
- [x] **P5.3** /admin SUBMIT_SUPPORTED_SLUGS 's5' 추가

## Phase 6 — 강사 검증 + 결함 수정 사이클 (2026-05-13)

> 입력: `lectures/S5/request.md`
> 범위: 이론 9건 + 실습 9건 (신규 슬라이드 2장 포함) = **결함 18건**
> 슬라이드 카운트: **54장 → 56장** (신규 19, 27)

### 이론 결함

- [x] **S5-T6.1** 이론 #3 cover objectives — `s5/theory/03-c1-cover.jsx`
  - request: '#3 "수직 슬라이스 이점을 이해한다." 변경'
  - 처리: "이점을 외운다" → "이점을 이해한다"

- [x] **S5-T6.2** 이론 #10 본문 폰트 — `s5/theory/10-c1-terms.jsx`
  - 처리: term `text-base → text-lg`, definition `text-sm → text-base`

- [x] **S5-T6.3** 이론 #12 강조 텍스트 — `s5/theory/12-c2-essence.jsx`
  - request: '#12 "위임의 품질이 결과의 품질을 결정한다." 크기 키우기'
  - 처리: `text-base` → `text-2xl font-bold` + `bg-bg-soft` 강조 박스

- [x] **S5-T6.4** 이론 #23 본문 폰트 — `s5/theory/23-c2-terms.jsx`
  - 처리: T6.2와 동일 (terms 패턴 일관)

- [x] **S5-T6.5** 이론 #28 KeyMessage 타이틀 축소 — `s5/theory/28-c3-third-assertion.jsx`
  - request: '#28 타이틀 크기 줄여서 가독성 높이기'
  - 처리: `size="sm"` 적용 (S4 신규 prop 재사용)

- [x] **S5-T6.6** 이론 #30~#32 본문 폰트 — `s5/theory/30~32-c3-element-*.jsx` (3 파일)
  - 처리: 동작 3요소 항목 `text-base → text-lg`, 간격·padding 확장

- [x] **S5-T6.7** 이론 "외운다" 일괄 제거 (4 파일)
  - request: '모든 내용에서 외운다 제거'
  - 처리: `03/11/24-cover.jsx` "외운다" → "이해한다" / `activity/52-tips-3-content.jsx` "외우기" → "챙기기"

- [x] **S5-T6.8** 이론 KeyMessage 일관 적용 — `s5/theory/05-c1-first-assertion.jsx`, `13-c2-second-assertion.jsx`
  - 처리: #28과 일관성 위해 #5, #13에도 `size="sm"` (KeyMessage 3개 모두 일관)

- [⚠️] **S5-T6.9** 이론 #18, #21 텍스트 의도 모호 — `s5/theory/18-c2-standard-form.jsx`, `21-c2-antipattern.jsx`
  - request: '#18 헤더 타이틀 폰트 조절 → "PRD는 무엇을 만들 것인가, <br> CLAUDE.md는 어떻게 만들 것인가이다"' / '#21 "AI가 CLAUDE.md만 읽고 <br> 프로젝트를 한 문장으로 요약할 수 있다면 <br> 헌법으로서 충분히 작동한다"'
  - **보류 — 사전 확인 필요**: request 텍스트는 S4의 #18/#21 내용 (PRD vs CLAUDE.md / AI 검증 루프) — S5 #18(위임 표준 양식), #21(위임 안티패턴)과 매칭 안 됨. 강사가 S4 메모 잘못 복사 가능성. **S4에서 이미 처리 완료 (T6.2/T6.3)** — S5 추가 처리 불필요로 추정

### 실습 결함

- [x] **S5-T6.10** 실습 #10~#12, #19, #29 본문 폰트 (5 파일) — pre `text-[11px] → text-sm`, 점검 카드 `text-xs → text-sm` + p-3 → p-4

- [x] **S5-T6.11** 실습 #19 앞에 GitHub MCP 슬라이드 신규 추가 — `s5/activity/19-act-2-0-github-mcp.jsx` (신규)
  - request: '#19 앞에 슬라이드 추가 후 github mcp 설치 및 인증 방법 추가'
  - 처리: 신규 슬라이드 (MCP 설치 명령 + Personal Access Token 인증 2단계 + 검증 명령). 기존 19~54 → 20~55로 일괄 rename

- [x] **S5-T6.12** 실습 #23 Stitch 프롬프트 재작성 — `s5/activity/24-act-3-1-prompt.jsx` (rename 후 24번)
  - request: 'AI에게 내가 원하는 디자인 정도만 입력하고 claude code가 stitch 전용 프롬프트 생성할 수 있도록 하는 방향으로 수정'
  - 처리: inline 2-area 재구성 — 좌: 작업자 → Claude Code 명령 (의도 간단 입력) / 우: Claude Code 생성 결과 → Stitch에 붙여넣기

- [x] **S5-T6.13** 실습 #25 export 설명 보강 — `s5/activity/26-act-3-3-export.jsx` (rename 후 26번)
  - request: '내보내기에서 무엇을 내보내야 하는지 정확하게 설명 및 파일 배치 방법 설명 추가'
  - 처리: 2 export 형식에 "무엇을 / 어디에 / 용도" 3축 명시 (`planning_project/docs/design/screen-1.png` 경로 포함)

- [x] **S5-T6.14** 실습 #25 이후 Claude Code → rules 적용 슬라이드 신규 — `s5/activity/27-act-3-4-design-to-rules.jsx` (신규)
  - request: '#25 이후 슬라이드에 claude code가 stitch에서 생성된 디자인 가이드를 rules에 적용하는 과정이 누락됨'
  - 처리: 신규 슬라이드 (Claude Code 명령으로 `rules/design.md` 4축 추출 + 예시 결과). 기존 27~55 → 28~56로 rename

### Phase 6 검증

- [x] **S5-T6.ε** npm build 통과 (이론 39 + 실습 56 = **95장**)
- [x] **S5-T6.σ** history.md § 0 "S5 Phase 6 결함 수정 완료 (17건 + T6.9 보류)" 블록 추가
- [ ] **S5-T6.f** profile.yaml expected_slide_count 93 → 95 갱신 / spec.md 매핑 표 갱신 (강사 재검증 통과 후)

---

**[Phase 0~6 진행. T6.9만 보류 (S4 의도 카피 추정). 슬라이드 54 → 56장.]**

---

**[Phase 0~5 완료. Phase 6 강사 검증 대기.]**
