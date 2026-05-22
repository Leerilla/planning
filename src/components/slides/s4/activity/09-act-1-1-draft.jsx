// Source: lectures/S4/request.md (실습 #2) — /init 명령어로 초안 생성으로 전면 교체 (2026-05-21)
// Type: activity (inline 2-area — 좌 명령 실행 / 우 /init 결과 미리보기)

export default function S4Activity_1_1_Draft() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1 · 산출물: <code className="text-accent font-semibold">/project/claude.md</code> 1차 초안
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        1차 초안 — <span className="highlight-mark">/init</span> 명령어로 자동 생성
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        빈 양식을 직접 채우지 않고 <span className="highlight-mark">/init</span>으로 프로젝트 컨텍스트 기반 초안을 만든다 — 작업자는 검토와 보강만.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Step 1 · 명령 실행
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`# planning_project 폴더에서
$ claude

> /init

[Claude]
프로젝트를 분석합니다...
- docs/prd.md 확인
- docs/persona.md 확인
- docs/painpoints.md 확인

/project/claude.md 생성 완료.`}</pre>
          <p className="text-xs text-text-sub leading-relaxed mt-2">
            <code className="text-accent font-semibold">/init</code>은 현재 폴더의 docs/ 자료를 참조해 <code className="text-accent font-semibold">/project/claude.md</code>를 자동 작성한다.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Step 2 · 생성된 /project/claude.md 미리보기
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`# /project/claude.md

## 1. 프로젝트 개요
1인 스마트스토어 셀러를 위한
카피 생성 도구.
상품 사진과 키워드로
카피 3개를 빠르게 만들어줌.

## 2. 기술 스택과 파일 구조
(다음 단계에서 AI 추천)

## 3. 코딩 가이드라인
(다음 단계에서 AI 추천)

## 4. 제약사항
- 모바일 안 함
- 한국어만

자세한 내용은 docs/prd.md 참조`}</pre>
          <p className="text-xs text-text-sub leading-relaxed mt-2">
            2번/3번 영역은 다음 슬라이드에서 AI 추천으로 채운다.
          </p>
        </div>
      </div>
    </>
  );
}
