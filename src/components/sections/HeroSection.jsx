// Source: reference/index.html L1111-1142

import { HERO_META } from '@/lib/principles-data';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-eyebrow">5월 18일 첫 수업 시작 · 21시간 풀사이클</div>
        <h1 className="hero-title">
          AI가 기획을<br />
          대신하지 않는다.<br />
          <span className="highlight">속도만 바꾼다.</span>
        </h1>
        <p className="hero-sub">
          9개 세션 21시간 동안 기획부터 배포·운영까지 풀사이클을 손에 쥡니다.
          Claude Code를 도구로 쓰면서도, 내 서비스가 누구의 어떤 문제를 푸는지를 잃지 않는 법.
        </p>
        <div className="hero-meta">
          {HERO_META.map((item) => (
            <div className="hero-meta-item" key={item.label}>
              <span className="hero-meta-num">{item.num}</span>
              <span className="hero-meta-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
