'use client';

// 메인 허브 — 8섹션 (PasswordGate 영속화 + SessionFlow 신규)
// CLAUDE.md 원칙 6: reference/index.html 시각 유지 (구조 재설계 — Phase N1 강사 결정)

import { useState, useEffect } from 'react';
import PasswordGate from '@/components/sections/PasswordGate';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import JourneyMap from '@/components/sections/JourneyMap';
import SessionFlow from '@/components/sections/SessionFlow';
import SessionGrid from '@/components/sections/SessionGrid';
import PrinciplesSection from '@/components/sections/PrinciplesSection';
import Footer from '@/components/sections/Footer';

const STORAGE_KEY = 'cc-curriculum-authed';

export default function HomePage() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setAuthed(true);
    }
  }, []);

  const handleAuth = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setAuthed(true);
  };

  if (!authed) return <PasswordGate onAuthed={handleAuth} />;

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <JourneyMap />
        <SessionFlow />
        <SessionGrid />
        <PrinciplesSection />
      </main>
      <Footer />
    </>
  );
}
