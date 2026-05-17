# Design System SSOT (v2)

> 디자인 토큰 + 폰트 + border-radius + 패턴 검증의 SSOT.
> layer-composer β'.3 / quality-judge Group E / render-validator / `.claude/utilities/design-checker.js` 참조.

---

## 1. D1-D12 디자인 토큰 결정 (CLAUDE.md § 6 발췌)

| ID | 결정 | 강제 |
|---|---|---|
| **D1** | emoji 0건 (학생 화면, **메타 표기 포함** — D-035) | FAIL |
| **D2** | 인라인 hex 색상 X — 토큰만 | FAIL |
| **D3** | `rounded-lg` 금지 — 12 / 16 / 100 만 | FAIL |
| **D4** | 미정의 토큰 금지 | FAIL |
| **D5** | 폰트 weight 4종 이내 | FAIL |
| **D6** | 표준 spacing — `gap-6 p-7` | WARN |
| **D7** | `KeyMessage`에 `footer + subtext` 동시 X | FAIL |
| **D8** | `message`는 배열 prop (분할 가능) | FAIL |
| **D9** | `\n` 줄바꿈 표기 (steps 등) | WARN |
| **D10** | `emphasis` 절제 (한 슬라이드 최대 1-2개) | WARN |
| **D11** | 특수문자 0건 (학생 화면, **메타 표기 포함** — D-035) | FAIL |
| **D12** | 시각 폭 검증 (8타입별 임계, `docs/slide-types.md § 4`) | FAIL |
| **D15** ⭐ | 토큰 화이트리스트 SSOT (D-049, 2026-05-15) — 미정의 토큰 금지 | FAIL |
| **D16** ⭐ | lecture.md 원문 보존 강화 (D-050) — 표/리스트 임의 변경 X | FAIL |
| **D17** ⭐ | pre 블록 폰트 최소 `text-xs` (D-051) — `text-[11px]` 이하 X | FAIL |
| **D18** ⭐ | 6+ vertical 카드 분할 (D-052) — 폰트 축소 X | FAIL |
| **D19** ⭐ | 도구 이름 첫 등장 설명 (D-053) | WARN |
| **D20** ⭐ | 산출물 파일 경로 inline code + accent (D-054) | WARN |

---

## 2. 디자인 토큰 화이트리스트 (D-049, 2026-05-15 정식 SSOT)

> `tailwind.config.js` + `globals.css` 정의 토큰만 사용. 미정의 토큰 FAIL.

### 2.1 허용 토큰

**Backgrounds**:
- `bg-bg` (var(--bg) = #FFFFFF)
- `bg-bg-soft` (var(--bg-soft) = #FAFAFA)
- `bg-accent` / `bg-accent-soft`
- `bg-success` / `bg-success-soft`
- `bg-warning` / `bg-warning-soft`
- `bg-danger` / `bg-danger-soft`
- `bg-info` / `bg-info-soft`
- `bg-highlight`
- `bg-cluster-1` ~ `bg-cluster-4` (애니메이션 전용)

**Text**:
- `text-text` (var(--text) = #0A0A0A)
- `text-text-sub` (var(--text-sub) = #6B7280)
- `text-text-muted` (var(--text-muted) = #9CA3AF)
- `text-accent` / `text-highlight`
- `text-success` / `text-warning` / `text-danger` / `text-info`

**Borders**:
- `border-divider` (var(--divider) = #E5E7EB)
- `border-divider-strong` (var(--divider-strong) = #D1D5DB)
- `border-accent` / `border-success` / `border-warning` / `border-danger` / `border-info`

### 2.2 금지 토큰 (미정의)

| 금지 | 대체 |
|---|---|
| `border-line` | `border-divider` |
| `bg-bg-primary` | `bg-bg-soft` 또는 `bg-bg` |
| `accent-strong` (text/border/bg) | `accent` (text/border/bg) |
| `bg-state-success-soft` | `bg-success-soft` |
| `bg-state-info-soft` / `bg-state-warning-soft` / `bg-state-error-soft` | `bg-info-soft` / `bg-warning-soft` / `bg-danger-soft` |
| `border-state-success` / `text-state-success` / `bg-state-success` | `border-success` / `text-success` / `bg-success` |
| `bg-bg-elevated` | `bg-bg-soft` |
| `highlight-soft` | `bg-bg-soft` + `text-accent` 조합 |
| `bg-bg-elev` (D-045) | `bg-bg-soft` |
| `font-mono` (D-046) | `<pre>` 기본 또는 CodeBlock 패턴 |
| `rounded-lg` (D-003) | `rounded-xl` / `rounded-2xl` / `rounded-md` (소형만) |

---

## 3. 폰트 weight (D5)

| 사용 | weight |
|---|---|
| 본문 | 400 |
| 중간 강조 | 500 |
| 강조 | 600 |
| 단정 (KeyMessage 등) | 700 |

**4종 초과 X**. `font-thin` / `font-extralight` / `font-black` 사용 X.

---

## 4. Border-radius (D3)

| 사용 | 값 |
|---|---|
| 작은 카드 / 버튼 | `rounded-xl` (12px) |
| 큰 카드 / 패널 | `rounded-2xl` (16px) |
| 원형 | `rounded-full` (100%) |

**금지**: `rounded-lg` (8px), `rounded-md`, `rounded-sm`, `rounded` (default).

---

## 5. Spacing 표준 (D6)

| 영역 | 값 |
|---|---|
| 컨테이너 padding | `p-7` (28px) |
| 컬럼 gap | `gap-6` (24px) |
| 슬라이드 외부 여백 | SlideFrame 표준 |
| 인터랙티브 hit area | 최소 44px (a11y) |

---

## 6. 8타입 컴포넌트 슬롯 패턴 prop (D8)

```yaml
TitleSlide:    { title, subtitle, chapter_number, objectives, meta }
ConceptSlide:  { emphasis, title, message[], notes[], highlights[], aside }
ComparisonSlide: { title, columns[{label, content[], emphasis}], summary }
ProcessSlide:  { title, steps[{num, label, desc, weak_ring}], summary, aside }
ExampleSlide:  { title, scenario, steps[{num, content}], conclusion }
QuoteSlide:    { quote, context[], attribution }
ActivitySlide: { activity_number, title, goal, procedure[], checklist[], duration, deliverable, capture_refs }
TermsSlide:    { title, terms[{term, definition}] }
```

상세 임계값: `docs/slide-types.md § 4`.

---

## 6.5 시각 마커 시인성 임계값 (D-036, 2026-05-11 신설)

> 패턴 내부 시각 마커(dot/bullet/separator/라벨)의 최소 시인성 룰.
> 위반 시 quality-judge A.14 WARN 또는 FAIL.

### 6.5.1 dot / bullet
- **최소 크기**: `w-2 h-2` (8px × 8px) 이상
- **금지**: middle dot 문자 (`·`), 작은 dot (`w-1`, `w-1.5`)
- **권장**: `inline-block w-2 h-2 rounded-full bg-accent` 또는 `bg-text-sub`

### 6.5.2 separator / divider
- **최소 두께**: `h-[1px]` 이상
- **권장**: `h-[1px] bg-divider` 또는 `h-px bg-bg-elevated`
- **금지**: `h-0` (보이지 않음)

### 6.5.3 라벨 정렬 (다중 라벨)
- **방식**: `grid grid-cols-[Npx_1fr]` 고정 너비 사용 의무 (예: `grid grid-cols-[64px_1fr]`)
- **금지**: `min-w-[Npx]` 단독 사용 (정렬 흔들림 가능)
- **권장**: 라벨 너비는 64px / 80px / 96px / 120px 단위로 표준화

### 6.5.4 hover/transition 시각성
- 호버 효과는 visual mass 변화 필수: 색상 + scale + shadow 중 ≥ 1
- `hover:` 클래스 + `transition-` 클래스 동반 의무

---

## 7. design-checker.js (utility) 검증 5축

`.claude/utilities/design-checker.js` 호출 시 다음 5축 grep + 자동 수정 시도:

1. **D11 / D1**: emoji / 특수문자 (학생 화면)
2. **D2**: 인라인 hex 색상
3. **D3**: `rounded-lg` 등 금지 클래스
4. **D4**: 미정의 Tailwind / CSS 변수
5. **패턴 prop name**: 8타입 컴포넌트 prop 이름 일치 (TitleSlide.title 등)

자동 수정 가능: `rounded-lg` → `rounded-xl`, prop name rename.
자동 수정 불가: 미정의 토큰 (강사 결정 — 추가 vs 변경).

---

## 8. 참조 관계

- **CLAUDE.md § 6 D1-D12** → 본 문서가 토큰 부분 상세
- **docs/slide-types.md § 4** → 8타입 슬롯 임계값 SSOT
- **docs/decisions.md** → D-NNN 식별자 카탈로그 (D-001 ~ D-030 등)
- **docs/wireframe-guide.md** → 데스크톱/모바일 spacing 변환
- **`.claude/utilities/design-checker.js`** → 본 문서 § 7 자동 수정

---

## 9. v1 → v2 변경 요약

| 항목 | v1 | v2 |
|---|---|---|
| 토큰 범위 | 18 패턴별 | 8타입 컴포넌트 슬롯 통일 |
| design-checker 5축 | 4축 + 패턴 prop | 동일 5축 (8타입으로 prop 통일) |
| border-radius | 12/16/100 | 동일 |
| 폰트 weight | 4종 | 동일 |

---

## 10. 신규 룰 (D-051 ~ D-054, 2026-05-15)

### 10.1 pre 블록 폰트 최소 (D-051)

```yaml
min_font_size: text-xs (12px)
forbidden:
  - text-[11px]
  - text-[10px]
  - text-2xs
  - text-[9px] 등 더 작은 값
권장:
  - pre 코드 블록: text-xs leading-relaxed
  - 일반 본문: text-sm 이상
```

**design-checker grep**: `text-\[1[01]px\]` / `text-2xs` 검출 → FAIL.

### 10.2 6+ vertical 카드 분할 (D-052)

```yaml
threshold: 6개 이상 vertical sequential 카드
분할 옵션:
  1. 2-column grid (좌 1-N/2 + 우 N/2+1-N) — 11+ 카드 권장
  2. 카드 컴팩트 (px-5 py-2 / 화살표 제거 / gap 단축) — 6-8 카드
  3. 의미 단계 통합
  4. 패턴 변경 (vertical flow → horizontal pipeline)
금지:
  - 폰트 축소로 overflow 해결 (D-051 우선)
```

### 10.3 도구 이름 첫 등장 설명 (D-053)

```yaml
대상 도구:
  - Bash / Read / Grep / Glob / Write / Edit / WebFetch
  - SubagentStop / mcpServers / settings.json hooks
의무:
  - 슬라이드 처음 등장 시 인라인 설명 또는 footer 1줄
대체 패턴:
  - 상단 border-l-4 박스에 도구 요약 (s43 예시)
  - 본문 인라인 괄호 (예: "Bash (셸 명령 실행)")
  - footer 컨텍스트 1줄 (a18 mcpServers 예시)
```

### 10.4 산출물 파일 경로 강조 (D-054)

```yaml
스타일:
  - <code className="text-accent font-semibold bg-bg-soft px-2 py-1 rounded">PATH</code>
Cover 박스 (권장):
  - <div className="border-l-4 border-accent bg-bg-soft rounded-r-md px-5 py-3">
      <span className="text-xs font-semibold text-accent uppercase tracking-wider">산출물 위치</span>
      <p><code>PATH</code></p>
    </div>
적용 위치:
  - 모든 실습 wrapper의 파일 작성 단계 (a10/a14/a17/a18/a27/a42/a51 등)
```

### 10.5 가운데 정렬 (D-052 보완)

```yaml
slide 컨테이너 권장 패턴:
  - className="flex flex-col gap-N h-full justify-center"
잘못된 패턴:
  - flex-1 (콘텐츠 위로 쏠림)
  - h-full 없이 (자동 높이 불정확)
권장:
  - 표/그리드 위주 슬라이드는 justify-center 필수 (s52 예시)
```

---

**[docs/design-system.md v2 끝]**
