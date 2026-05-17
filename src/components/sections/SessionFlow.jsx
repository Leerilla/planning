'use client';

// 9세션 산출물 사슬 — 수직 4단계 그리드 (강사 결정: 가로 스크롤 제거 + 전환 흐름 포커스)
// 레이아웃: 4 컬럼(plan/spec/build/ship) + 컬럼 안 세션 노드 세로 배치 + 단계 간 가로 화살표

import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { FLOW_STAGES, FLOW_NODES } from '@/lib/session-flow-data';

const STEP_MS = 1000;

export default function SessionFlow() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const timersRef = useRef([]);
  const playingRef = useRef(false);

  const [revealedCount, setRevealedCount] = useState(0);
  const [activeNode, setActiveNode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const clearAll = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const reset = useCallback(() => {
    clearAll();
    playingRef.current = false;
    setIsPlaying(false);
    setHasFinished(false);
    setRevealedCount(0);
    setActiveNode(null);
  }, [clearAll]);

  const play = useCallback(() => {
    reset();
    playingRef.current = true;
    setIsPlaying(true);

    FLOW_NODES.forEach((node, i) => {
      const t = setTimeout(() => {
        if (!playingRef.current) return;
        setRevealedCount(i + 1);
        setActiveNode(node.num);
      }, i * STEP_MS);
      timersRef.current.push(t);
    });

    const finish = setTimeout(() => {
      if (!playingRef.current) return;
      setActiveNode(null);
      playingRef.current = false;
      setIsPlaying(false);
      setHasFinished(true);
    }, FLOW_NODES.length * STEP_MS + 400);
    timersRef.current.push(finish);
  }, [reset]);

  const stop = useCallback(() => {
    clearAll();
    playingRef.current = false;
    setIsPlaying(false);
  }, [clearAll]);

  const jumpTo = (node) => {
    stop();
    const idx = FLOW_NODES.findIndex((n) => n.num === node.num);
    setRevealedCount(idx + 1);
    setActiveNode(node.num);
  };

  useEffect(() => () => clearAll(), [clearAll]);

  const progressPct = Math.round((revealedCount / FLOW_NODES.length) * 100);

  return (
    <section className="section" id="flow">
      <div className="container">
        <div className="section-header reveal sf-section-header" ref={headerRef}>
          <div className="section-eyebrow">FULL CYCLE · OUTPUT CHAIN</div>
          <h2 className="section-title">슬라이드가 아니라<br />배포된 사이트로</h2>
          <p className="section-sub">
            매 세션 산출물이 다음 세션의 입력값. 9세션 21시간 동안 한 사람의 가설이 어떻게 진화해 실제 사용자가 쓰는 사이트가 되는지 한눈에 보세요.
          </p>
        </div>

        <div className="session-flow reveal" ref={wrapperRef}>
          <div className="sf-flow">
            {FLOW_STAGES.flatMap((stage, sIdx) => {
              const stageNodes = FLOW_NODES.filter((n) => n.stage === stage.id);
              const stageActive = stageNodes.some((n) => n.num === activeNode);
              const stageColumn = (
                <div
                  key={`stage-${stage.id}`}
                  className={`sf-flow-stage${stageActive ? ' active' : ''}`}
                  data-stage={stage.id}
                >
                  <div className="sf-flow-stage-head">
                    <span className="sf-flow-stage-num">STAGE {stage.num}</span>
                    <h3 className="sf-flow-stage-title">{stage.title}</h3>
                    <span className="sf-flow-stage-sessions">{stage.sessions}</span>
                  </div>
                  <div className="sf-flow-stage-nodes">
                    {stageNodes.map((node) => {
                      const idx = FLOW_NODES.findIndex((n) => n.num === node.num);
                      const revealed = idx < revealedCount;
                      const active = activeNode === node.num;
                      return (
                        <button
                          key={`node-${node.num}`}
                          type="button"
                          className={`sf-flow-node${revealed ? ' revealed' : ''}${active ? ' active' : ''}`}
                          data-stage={node.stage}
                          onClick={() => jumpTo(node)}
                        >
                          <span className="sf-flow-node-num">{node.session}</span>
                          <span className="sf-flow-node-title">{node.title}</span>
                          <span className="sf-flow-node-desc">{node.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
              if (sIdx === FLOW_STAGES.length - 1) return [stageColumn];
              const lastNodeIdx = FLOW_NODES.findIndex(
                (n) => n.num === stageNodes[stageNodes.length - 1].num
              );
              const arrowRevealed = lastNodeIdx < revealedCount - 1;
              return [
                stageColumn,
                <span
                  key={`arrow-${stage.id}`}
                  className={`sf-flow-arrow${arrowRevealed ? ' revealed' : ''}`}
                  aria-hidden="true"
                />,
              ];
            })}
          </div>

          <div className="sf-controls">
            <span className="sf-summary">
              {revealedCount} / {FLOW_NODES.length} 단계 · 21시간 → 1배포
            </span>
            <div className="sf-progress">
              <div className="sf-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <button
              type="button"
              className="sf-btn secondary"
              onClick={reset}
              aria-label="처음부터"
            >
              <RotateCcw size={14} strokeWidth={2.2} />
              처음부터
            </button>
            <button
              type="button"
              className="sf-btn"
              onClick={isPlaying ? stop : play}
              aria-label={isPlaying ? '정지' : '재생'}
            >
              <Play size={14} fill="currentColor" strokeWidth={0} />
              {isPlaying ? '정지' : (hasFinished ? '다시 보기' : '풀사이클 재생')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
