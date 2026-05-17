# Docs 재정리 작업 매트릭스

> 새 시스템(8 → 5 agent, 6단계 파이프라인)에 맞춰 기존 9개 docs + 신규 4개 docs를 정리.
> SSOT 원칙: docs/가 SSOT, agent.md는 참조만.

---

## 처리 매트릭스

### 카테고리 A — 변경 없음 (그대로 사용, 4개)

| 파일 | 현재 상태 | 검증 결과 |
|---|---|---|
| `docs/deployment.md` | 그대로 | Vercel + KV + Notion 배포 — 시스템 변경과 무관 ✓ |
| `docs/design-system.md` | 그대로 | 디자인 토큰 — 새 시스템도 동일 토큰 사용 ✓ |
| `docs/slide-engine.md` | 그대로 | 슬라이드 엔진 사양 — 변경 없음 ✓ |
| `docs/decisions.md` | 추가만 | 누적 로그 원칙 — D-015~D-020 추가만 |

**조치**: 그대로 두되, decisions.md에 재설계 결정만 추가.

---

### 카테고리 B — 부분 갱신 (3개)

| 파일 | 갱신 사항 | 우선순위 |
|---|---|---|
| `docs/architecture.md` | sub-agent 8개 → 5개 + utility 2개 갱신 | P0 |
| `docs/capture-workflow.md` | capture-validator → capture-checker (utility 함수) 표현 갱신 | P1 |
| `docs/decisions.md` | D-015 ~ D-020 추가 (재설계 5개 결정) | P0 |

---

### 카테고리 C — 보강 (SSOT 강화, 2개)

| 파일 | 보강 사항 | 우선순위 |
|---|---|---|
| `docs/slide-patterns.md` | 18개 패턴별 **props 시그니처 + 시각 폭 임계값** 추가 (layer-composer 참조용 SSOT) | P0 |
| `docs/animation-patterns.md` | 8개 패턴에 **6개 카탈로그 분류 + V4 가산 점수** 추가 (creative-judge 참조용 SSOT) | P0 |

---

### 카테고리 D — 대체 (1개)

| 파일 | 처리 | 비고 |
|---|---|---|
| `docs/curation-workflow.md` | **완전 대체** | 9단계 → 6단계 (이미 새 버전 작성 완료) |

---

### 카테고리 E — 신규 (3개)

| 파일 | 처리 | 비고 |
|---|---|---|
| `docs/profile-system.md` | **신규 추가** | 작성 완료 |
| `docs/strength-mapping.md` | **신규 추가** | 작성 완료 |
| `docs/wireframe-guide.md` | **신규 추가** | 작성 완료 |

---

## 최종 docs/ 구조

```
docs/
├── architecture.md           # B 부분 갱신
├── capture-workflow.md       # B 부분 갱신
├── curation-workflow.md      # D 대체
├── decisions.md              # B 추가만
├── deployment.md             # A 변경 X
├── design-system.md          # A 변경 X
├── slide-engine.md           # A 변경 X
├── slide-patterns.md         # C 보강 (SSOT)
├── animation-patterns.md     # C 보강 (SSOT)
├── profile-system.md         # E 신규
├── strength-mapping.md       # E 신규
└── wireframe-guide.md        # E 신규
```

총 12개 파일. 잘 정돈된 SSOT 구조.

---

## 작업 순서 (이번 sprint)

1. ✅ **이 매트릭스 작성** (현재)
2. ⏳ `architecture.md` 갱신
3. ⏳ `decisions.md` D-015~D-020 추가
4. ⏳ `slide-patterns.md` 보강 (props 시그니처 + 임계값)
5. ⏳ `animation-patterns.md` 보강 (카탈로그 + V4)
6. ⏳ `capture-workflow.md` 갱신 (P1)

A 카테고리 4개와 D/E 7개는 그대로 유지 또는 이미 작성 완료.
