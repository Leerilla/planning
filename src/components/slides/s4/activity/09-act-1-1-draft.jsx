// Source: lectures/S4/lecture.md lines 550-603 (1-1 1차 초안 가이드 + 시드 6 통합)
// Type: activity (inline 2-area — 좌 빈 양식 / 우 시드 6 거친 초안)

export default function S4Activity_1_1_Draft() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1 · 산출물: 거친 1차 초안 (작업자 손)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        1차 초안 — 빈 양식 + 시드 6 사례
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        <span className="highlight-mark">완벽하지 않아도 된다</span> — 작업자 의도를 거칠게 담는 것이 목적.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            빈 양식
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-line">{`# CLAUDE.md

## 1. 프로젝트 개요
{한 단락: 페르소나 + 핵심 기능 3개 + 성공 지표}

## 2. 기술 스택과 파일 구조
{스택과 폴더 구조}

## 3. 코딩 가이드라인
{네이밍, 커밋, 테스트}

## 4. 제약사항
{하지 않을 것}

자세한 내용은 docs/prd.md 참조`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            시드 6번 거친 초안
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-line">{`# CLAUDE.md

## 1. 프로젝트 개요
1인 스마트스토어 셀러를 위한 카피 생성 도구.
상품 사진과 키워드로 카피 3개를 빠르게 만들어줌.

## 2. 기술 스택
- Next.js + Tailwind
- OpenAI API

## 3. 코딩 가이드라인
- camelCase 함수
- 커밋은 feat/fix 형식

## 4. 제약사항
- 모바일 안 함
- 한국어만

자세한 내용은 docs/prd.md 참조`}</pre>
        </div>
      </div>
    </>
  );
}
