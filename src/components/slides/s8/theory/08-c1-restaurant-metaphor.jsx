// Source: lectures/S8/captures/lecture.md L70-84 (자동 매핑, example pre block)
// Type: ExampleSlide
// Phase 6 (2026-05-17): request.md #8 — 시각적 콘텐츠 비유 카드 배치 (pre → 2-col)
// S8 T18d (2026-05-25): 강사 요구 — 비유에 맞는 애니메이션 추가 (자동 keyframe)
// S8 T18e (2026-05-25): 강사 요구 — 인터랙티브 요소 반영 (버튼 트리거)
// S8 T18f (2026-05-25): 강사 요구 — 상호작용 정합성 수정 (강조/타이밍)
// S8 T18g (2026-05-25): 강사 요구 — "예시와 맞지 않다, 다시 기획"
//                       5가지 사실 모두 시각화 (격리 + 비밀 위치 신설)
// S8 T18h (2026-05-25): 강사 요구 — "프로그레스 끝까지 왔다 갔다 + 주문/음식 들고 다님"
//                       1) 두 트랙 → 단일 트랙 (왕복)
//                       2) dot → 카드형 (라벨로 들고 있는 것 표시: 주문/음식/?)
//                       3) opacity fade 제거 (양 끝에서도 카드 명확히 보임)
'use client';

import { useState } from 'react';

export default function S8TheoryC1RestaurantMetaphor() {
  // phase: 'idle' | 'order' | 'cook' | 'food' | 'done' | 'peek' | 'blocked'
  const [phase, setPhase] = useState('idle');

  // 시나리오 A — 정상 흐름 (주문 카드 → 조리 → 음식 카드 → 수령)
  const startOrder = () => {
    if (phase !== 'idle') return;
    setPhase('order');
    setTimeout(() => setPhase('cook'), 1800);
    setTimeout(() => setPhase('food'), 2700);
    setTimeout(() => setPhase('done'), 4500);
    setTimeout(() => setPhase('idle'), 5300);
  };

  // 시나리오 B — 주방 들여다보기 시도 → 차단
  const startPeek = () => {
    if (phase !== 'idle') return;
    setPhase('peek');
    setTimeout(() => setPhase('blocked'), 1100);
    setTimeout(() => setPhase('idle'), 2800);
  };

  // 카드 상태
  const cardOnTrack = phase === 'order' || phase === 'food' || phase === 'peek';
  const cardLabel = phase === 'order' ? '주문' : phase === 'food' ? '음식' : phase === 'peek' ? '?' : '';
  const cardColor =
    phase === 'order'
      ? 'bg-accent text-white border-accent'
      : phase === 'food'
        ? 'bg-success text-white border-success'
        : phase === 'peek'
          ? 'bg-warning text-white border-warning'
          : 'bg-bg-soft text-text border-divider';
  const cardAnimation =
    phase === 'order'
      ? 's8RestOrder 1.8s ease-in-out forwards'
      : phase === 'food'
        ? 's8RestFood 1.8s ease-in-out forwards'
        : phase === 'peek'
          ? 's8RestPeek 1.1s ease-out forwards'
          : 'none';

  // 박스 강조
  const hallActive = phase === 'order' || phase === 'done' || phase === 'peek';
  const kitchenActive = phase === 'cook' || phase === 'food';
  const wallActive = phase === 'blocked';
  const showBarrier = phase === 'peek' || phase === 'blocked';

  const boxBase = 'border-l-4 rounded-r-xl px-5 py-4 transition-all duration-300';
  const hallClass = hallActive
    ? `${boxBase} border-divider bg-bg-soft ring-2 ring-accent scale-[1.03] shadow-lg`
    : `${boxBase} border-divider bg-bg-soft`;
  const kitchenClass = kitchenActive
    ? `${boxBase} border-accent bg-accent-soft ring-2 ring-accent scale-[1.03] shadow-lg`
    : `${boxBase} border-accent bg-accent-soft`;

  const isIdle = phase === 'idle';

  return (
    <div className="flex flex-col h-full">
      <style>{`
        /* 카드 폭 56px. left로 이동 (transform 속성 충돌 회피).
           left의 100%는 부모(트랙) 폭 기준이라 정상 작동. */
        @keyframes s8RestOrder {
          0% { left: 0; }
          100% { left: calc(100% - 56px); }
        }
        @keyframes s8RestFood {
          0% { left: calc(100% - 56px); }
          100% { left: 0; }
        }
        @keyframes s8RestPeek {
          0% { left: 0; }
          100% { left: calc(50% - 28px); }
        }
        /* 벽 흔들림 — 벽 요소는 translate 충돌 없음 (이미 -translate-x-1/2 className만) */
        @keyframes s8RestWallShake {
          0%, 100% { margin-left: 0; }
          20% { margin-left: -3px; }
          40% { margin-left: 3px; }
          60% { margin-left: -2px; }
          80% { margin-left: 2px; }
        }
      `}</style>

      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 1 · 비유
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">식당 비유</h2>
      <p className="text-sm text-text-sub mb-4 max-w-4xl">
        FE = 홀, BE = 주방{' '}
        <span className="text-text-sub">— 두 시나리오 버튼을 눌러 신뢰 경계를 체험해보자</span>
      </p>

      <div className="grid grid-cols-[1fr_280px_1fr] gap-3 max-w-5xl items-stretch">
        {/* FE = 홀 (손님) */}
        <div className={hallClass}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-sub font-bold text-xs uppercase tracking-widest">
              FE = 홀 (Hall)
            </span>
            <span className="text-xs font-bold text-text-muted bg-bg px-2 py-0.5 rounded border border-divider">
              공개
            </span>
          </div>
          <div className="text-sm font-bold text-text mb-2">손님 (사용자)</div>
          <ul className="flex flex-col gap-1.5 mb-2">
            <li className="flex items-start gap-2 text-xs text-text leading-snug">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              <span>홀에서 주문 <span className="text-text-sub">(FE에서 입력)</span></span>
            </li>
            <li className="flex items-start gap-2 text-xs text-text leading-snug">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              <span>홀에서 음식 받음 <span className="text-text-sub">(FE에서 결과 표시)</span></span>
            </li>
            <li className="flex items-start gap-2 text-xs text-text leading-snug">
              <span className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0" />
              <span>주방 못 들어감 <span className="text-text-sub">(BE 직접 접근 불가)</span></span>
            </li>
          </ul>
          <div className="pt-2 border-t border-divider">
            <div className="text-xs text-text-muted leading-snug">
              브라우저 조회 가능: <span className="text-text">화면 코드 · 공개 URL</span>
            </div>
          </div>
        </div>

        {/* 가운데 — 시나리오 트리거 + 왕복 트랙 + 차단 벽 */}
        <div className="flex flex-col gap-2 items-stretch justify-start pt-1">
          {/* 두 버튼 */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={startOrder}
              disabled={!isIdle}
              className={`px-2 py-1.5 text-xs font-bold uppercase tracking-wider rounded border-2 transition-all ${
                isIdle
                  ? 'border-accent text-accent hover:bg-accent hover:text-white cursor-pointer'
                  : 'border-divider text-text-muted cursor-not-allowed opacity-60'
              }`}
            >
              주문하기
            </button>
            <button
              type="button"
              onClick={startPeek}
              disabled={!isIdle}
              className={`px-2 py-1.5 text-xs font-bold uppercase tracking-wider rounded border-2 transition-all ${
                isIdle
                  ? 'border-warning text-warning hover:bg-warning hover:text-white cursor-pointer'
                  : 'border-divider text-text-muted cursor-not-allowed opacity-60'
              }`}
            >
              들여다보기
            </button>
          </div>

          {/* 양 끝 라벨 (홀 ↔ 주방) */}
          <div className="flex items-center justify-between text-xs font-bold text-text-muted uppercase tracking-wider mt-2">
            <span>홀</span>
            <span>주방</span>
          </div>

          {/* 단일 트랙 — 왕복 */}
          <div className="relative h-9 bg-bg-soft border border-divider rounded">
            {/* 트랙 카드 (들고 있는 것 — 주문/음식/?) */}
            {cardOnTrack && (
              <div
                className={`absolute top-1/2 -translate-y-1/2 left-0 w-14 h-6 rounded border-2 flex items-center justify-center text-xs font-bold shadow ${cardColor}`}
                style={{ animation: cardAnimation }}
              >
                {cardLabel}
              </div>
            )}

            {/* 차단 벽 — peek/blocked phase */}
            {showBarrier && (
              <div
                className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-warning rounded transition-opacity duration-200"
                style={wallActive ? { animation: 's8RestWallShake 0.4s ease-in-out 3' } : {}}
                aria-hidden="true"
              />
            )}
          </div>

          {/* 상태/차단 메시지 */}
          <div
            className={`mt-1 text-xs text-center min-h-[16px] font-medium leading-snug transition-colors ${
              wallActive ? 'text-warning font-bold' : 'text-text-muted'
            }`}
          >
            {phase === 'idle' && '시나리오를 선택하세요'}
            {phase === 'order' && '주문서를 들고 주방으로 →'}
            {phase === 'cook' && '주방에서 조리 중'}
            {phase === 'food' && '← 음식을 들고 홀로'}
            {phase === 'done' && '홀에 음식 도착'}
            {phase === 'peek' && '주방 들여다보기 시도...'}
            {phase === 'blocked' && '차단됨 — BE 직접 접근 불가'}
          </div>
        </div>

        {/* BE = 주방 (레시피·재료) */}
        <div className={kitchenClass}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">
              BE = 주방 (Kitchen)
            </span>
            {/* 자물쇠 + 비공개 라벨 */}
            <span className="flex items-center gap-1 text-xs font-bold text-accent bg-bg px-2 py-0.5 rounded border border-accent">
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              비공개
            </span>
          </div>
          <div className="text-sm font-bold text-text mb-2">레시피와 재료 (비밀)</div>
          <ul className="flex flex-col gap-1.5 mb-2">
            <li className="flex items-start gap-2 text-xs text-text leading-snug">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              <span>주방에만 있음 <span className="text-text-sub">(BE에만 보관)</span></span>
            </li>
            <li className="flex items-start gap-2 text-xs text-text leading-snug">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              <span>손님에게 안 보임 <span className="text-text-sub">(브라우저 조회 불가)</span></span>
            </li>
          </ul>
          <div className="pt-2 border-t border-divider">
            <div className="text-xs text-text-muted leading-snug">
              BE 전용: <span className="text-text font-semibold">API 키 · DB 인증 · 외부 서비스 인증</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
