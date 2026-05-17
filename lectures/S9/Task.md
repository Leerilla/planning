# S9 큐레이션 Task 목록 (2026-05-17, sub-agent 시퀀스 재시작)

> **세션**: 노출과 재피드백 (Exposure & Re-feedback) — **본 학습 마지막 세션**
> **lecture.md**: 1,118줄 — 이론 4 챕터 + 실습 8 Step + 과제 + Tips 1 묶음 (10 bullets)
> **lecture.md 위치**: `lectures/S9/lecture.md` 직속 (S8과 다르게 captures/ 사용 X)
> **메타 메시지 (A4)**: 검증된 MVP를 실제 사용자에게 노출 → 4종 데이터(응답·Clarity·Sentry·이벤트)로 *살아있는 페르소나*로 진화 → Pivot · Persevere · Kill 결정 1개로 학습 종착 — 학생들이 만들 *21시간 사이클 닫기*의 모범

---

## ⭐ 작업 룰 — NEVER 7 (D-047) 엄수

미니 사이클(`###` 단위)당 4 sub-agent 호출 시퀀스 의무:
1. **β' layer-composer** — interactive + visual + wireframe (`####` 단위 props 설계)
2. **γ' quality-judge + creative-judge 병렬** — 28축 감산 + 5축 가산 + coverage 검증
3. **δ' lecture-translator** — 미니 사이클 빌드 실행 (.jsx 산출)
4. **ε' render-validator** — `####` 단위 + 통합 시각 검증

모든 T 단위 ⛳ 보고에 4단계 체크박스 (`✓ β' / ✓ γ' / ✓ δ' / ✓ ε'`) + 호출 사유 의무.
Fall-back은 **명시적 실패 사유 발생 후만** (효율 / 비용 / 메타 사유 X).

Phase 1 T1.1 = lecture-translator α 별도 호출 (파싱 + 8타입 매핑 + coverage_map + profile 도출).

---

## 강사 결정 (확정 후보 8건)

| # | 결정 | D-NNN |
|---|---|---|
| 1 | 표준 형식 (`####` 단위, S4~S8 동일) | — |
| 2 | lecture.md 위치: `lectures/S9/lecture.md` 직속 유지 | — |
| 3 | KeyMessage 4 단정문 (각 이론 챕터 1개, size='sm') | D-042 |
| 4 | Pivot · Persevere · Kill 3갈래 의사결정 — **Gate-2 추가** | — |
| 5 | D-043 `planning_project` 고정 (A7) | D-043 |
| 6 | D-044 SSOT 확장 (A8) — 7종 신규 docs | D-044 |
| 7 | D-049~D-054 룰 정상 운영 (S8 정착 → S9 표준) | D-049~D-054 |
| 8 | ⭐ **학습 종착 슬라이드** 별도 1장 (Step N 마지막) | — |

---

## 슬라이드 합계 (목표 ~90장, Phase 1 정밀 확정)

| 영역 | 추정 |
|---|---|
| 자동 (Cover + Theory TOC + Activity TOC + 4 챕터 Cover) | 7 |
| 이론 콘텐츠 (37 ####) | 37 |
| 실습 콘텐츠 (35 #### + Step Covers 8) | 43 |
| ⭐ 학습 종착 슬라이드 | 1 |
| 과제 | 1 |
| Tips (Cover 1 + Content 2) | 3 |
| **총** | **~92** |

---

## Phase 0 — Pre-task (4 T, 메인 직접 — sub-agent 불필요)

- [ ] **S9-T0.1** `src/components/slides/s9/{theory,activity}/` 폴더 + placeholder index.js × 2
- [ ] **S9-T0.2** `src/lib/deck-registry.js` s9 entry 등록
- [ ] **S9-T0.3** lecture.md 위치 유지 (`lectures/S9/lecture.md` 직속) + captures/ 빈 채로 유지
- [ ] **S9-T0.4** 표준 형식 검증 (1#/4##/12###/79####/1---)

---

## Phase 1 — α 분석 + Gate-1 (4 T)

- [ ] **S9-T1.1** ⛳ **lecture-translator α 호출** — 헤더 트리 + 8타입 자동 매핑 + coverage_map + profile 자동 도출
- [ ] **S9-T1.2** spec.md § 0 + § 1 작성 (agent 산출물 기반)
- [ ] **S9-T1.3** profile.yaml 작성 (agent 산출물 + 메인 추론)
- [ ] **S9-T1.4** ⛳ **Gate-1 강사 검토** — 8 강사 결정 확정 + profile.status → confirmed

---

## Phase 2 — 이론 미니사이클 (7 미니사이클 + 자동 2, ~43장)

### 미니 사이클 의무 시퀀스 — 각 T마다 β' → γ' 병렬 → δ' → ε'

- [ ] **S9-T2.0a** 세션 표지 (t1) — 4단계 시퀀스 적용 (메타도 fall-back X)
- [ ] **S9-T2.0b** 이론 목차 (t2) — 4단계 시퀀스 적용
- [ ] **S9-T2.1** §1 노출의 기획적 의미 (~8장) — 4단계 시퀀스
- [ ] **S9-T2.2a** §2-A 1명행동 + 단정 + 신호기준 + 4종 (~6장) — 4단계
- [ ] **S9-T2.2b** §2-B 4종 특징 + NotebookLM + 안티 + 용어 (~6장) — 4단계
- [ ] **S9-T2.3a** §3-A 3단계 + 단정 + 시드6 + 두종류 (~5장) — 4단계
- [ ] **S9-T2.3b** §3-B persona·prd 갱신 + 자동커밋 + 안티 + 비교 + 용어 (~5장) — 4단계
- [ ] **S9-T2.4a** §4-A 학습≠빌드 + 단정 + 3갈래 + Pivot/Persevere/Kill (~6장) ⛳ Gate-2 — 4단계
- [ ] **S9-T2.4b** §4-B Kill빠른실패 + 안티 + 회고 + 용어 (~5장) — 4단계

---

## Phase 3 — 실습 미니사이클 (10 + 자동 1, ~47장)

- [ ] **S9-T3.0** 실습 목차 (a1) — 4단계 시퀀스
- [ ] **S9-T3.1** Step 0 환경 진단 (~5장) — 4단계
- [ ] **S9-T3.2** Step 1 노출 발송 (~6장) — 4단계
- [ ] **S9-T3.3** Step 2 응답 대기 운영 (~4장) — 4단계
- [ ] **S9-T3.4** Step 3 분석 도구 해석 (~7장) — 4단계
- [ ] **S9-T3.5** Step 4 NotebookLM 종합 (~5장) — 4단계
- [ ] **S9-T3.6** Step 5 persona·PRD 갱신 (~5장) — 4단계
- [ ] **S9-T3.7** Step 6 결정 + 회고 (~6장) — 4단계
- [ ] **S9-T3.8** Step N 산출물 + ⭐ 학습 종착 슬라이드 (~5장) — 4단계
- [ ] **S9-T3.9** 과제 (1장) — 4단계
- [ ] **S9-T3.10** Tips Cover + Content×2 (~3장) — 4단계
- [ ] **S9-T3.ε** 실습 통합 검증 (render-validator 통합 호출)

---

## Phase 4 — Final ε (7 T)

- [ ] **S9-T4.1** ε.1 npm build — 12 routes PASS
- [ ] **S9-T4.2** ε.2 capture-checker (N/A)
- [ ] **S9-T4.3** ε.3 design-checker 5축 + D-049~D-054
- [ ] **S9-T4.4** ε.4 coverage 사후 — L1~L1118 100%
- [ ] **S9-T4.5** ε.5 Playwright 시각 (선택)
- [ ] **S9-T4.6** ε.6 history.md § 9 갱신 — 9세션 전체 완료
- [ ] **S9-T4.7** ε.7 spec § 5 Final Sign-off

---

## Phase 5 — S9Form 제출 인프라 (3 P)

- [ ] **S9-P5.1** `S9Form.jsx` — 7 fieldset
- [ ] **S9-P5.2** `SubmitForm.jsx` s9 분기
- [ ] **S9-P5.3** `/admin` SUPPORTED_SLUGS에 s9 추가

---

## Phase 6 — 강사 검증 + 결함 수정 (request.md 입력 시)

- [ ] **S9-T6.x** 결함 수정 (한 T = 한 결함)
- [ ] **S9-T6.ε** design-checker 0 violation
- [ ] **S9-T6.σ** history.md 갱신

---

## 강사 게이트 (2건)

| 게이트 | 위치 | 결정 |
|---|---|---|
| **Gate-1** | Phase 1 T1.4 | 8 강사 결정 확정 + KeyMessage 4단정 위치 + profile.status → confirmed |
| **Gate-2** | Phase 2 T2.4a | 3갈래 결정 시각화 방식 + Pivot/Persevere/Kill 신호 표 형식 |

---

**[S9 Task.md 끝 — sub-agent 시퀀스 재시작]**
