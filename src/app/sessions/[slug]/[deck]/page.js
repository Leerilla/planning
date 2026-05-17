'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getDeck, getSession } from '@/lib/deck-registry';
import SlideDeck from '@/components/slides/SlideDeck';

export default function DeckPage() {
  const params = useParams();
  const slug = params.slug;
  const deckId = params.deck;

  const session = getSession(slug);
  const deck = getDeck(slug, deckId);

  if (!session || !deck) {
    notFound();
  }

  return (
    <SlideDeck
      slides={deck.slides}
      sessionId={slug}
      deckId={deckId}
      deckTitle={deck.title}
    />
  );
}
