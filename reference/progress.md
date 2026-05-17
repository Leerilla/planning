# Agent 시스템 재설계 — 작업 진행 트래커

**시작일**: 2026-05-10
**기반 문서**: `new_system_architecture.md`, `CLAUDE.md` (둘 다 outputs에 있음)

---

## 전체 작업 목록

### Phase 1 — 헌법/구조 (P0)
- [x] **Task 0**: 진단 리포트 작성 (`agent_system_diagnosis.md`)
- [x] **Task 1**: 새 시스템 아키텍처 설계 (`new_system_architecture.md`)
- [x] **Task 2**: 새 CLAUDE.md 작성 (`CLAUDE.md`)

### Phase 2 — 핵심 Agent 명세 (P0)
- [x] **Task 3**: ⭐ **lecture-translator.md** 작성 — 완료 (1507 lines)
- [x] **Task 4**: layer-composer.md 작성 — 완료 (1485 lines)
- [ ] **Task 5**: quality-judge.md 작성
- [ ] **Task 6**: creative-judge.md 작성
- [ ] **Task 7**: render-validator.md 작성

### Phase 3 — 보조 산출물 (P0)
- [ ] **Task 8**: design-checker.js 함수 명세
- [ ] **Task 9**: capture-checker.js 함수 명세
- [ ] **Task 10**: profile.yaml 스키마 검증 도구

### Phase 4 — 마이그레이션 (P1)
- [ ] **Task 11**: history.md 새 구조로 마이그레이션 (기존 raw 보존)
- [ ] **Task 12**: S1 profile.yaml 회고적 작성 (검증용)
- [ ] **Task 13**: S2 profile.yaml 회고적 작성
- [ ] **Task 14**: S3 profile.yaml 회고적 작성
- [ ] **Task 15**: docs/curation-workflow.md 6단계로 갱신
- [ ] **Task 16**: docs/decision-matrix.md 분리 (선택)

### Phase 5 — 검증 (P1)
- [ ] **Task 17**: S4 lecture.md 가상 시뮬레이션
- [ ] **Task 18**: 새 시스템 dry-run 결과 분석

### Phase 6 — 적용 (P1)
- [ ] **Task 19**: 기존 8개 agent .md를 deprecated 폴더로 이동
- [ ] **Task 20**: 새 5개 agent + utility 활성화
- [ ] **Task 21**: progress.md 갱신

---

## 현재 진행 중

(없음 — Task 4 완료. 다음 Task 5 대기)

---

## 완료된 산출물

| Task | 파일 | 일시 | 분량 |
|---|---|---|---|
| Task 0 | `/mnt/user-data/outputs/agent_system_diagnosis.md` | 2026-05-10 | 673 lines |
| Task 1 | `/mnt/user-data/outputs/new_system_architecture.md` | 2026-05-10 | 1413 lines |
| Task 2 | `/mnt/user-data/outputs/CLAUDE.md` | 2026-05-10 | ~580 lines |
| Task 3 | `/mnt/user-data/outputs/lecture-translator.md` | 2026-05-10 | 1507 lines |
| Task 4 | `/mnt/user-data/outputs/layer-composer.md` | 2026-05-10 | 1485 lines |

---

## 작업 룰

1. 각 Task 완료 시 이 progress.md의 체크박스 갱신
2. 산출물은 `/mnt/user-data/outputs/`에 저장
3. 작업 중 발견된 새 결정은 즉시 메모, Task 종료 시 CLAUDE.md 반영 검토
4. 한 Task가 너무 크면 서브 작업으로 분할
