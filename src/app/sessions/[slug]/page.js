import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSession, listDecks } from '@/lib/deck-registry';

export default function SessionHub({ params }) {
  const session = getSession(params.slug);
  if (!session) {
    notFound();
  }
  const decks = listDecks(params.slug);

  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="max-w-container mx-auto px-8 py-20 flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-text-sub text-sm hover:text-text transition-colors w-fit"
          >
            ← 메인 허브
          </Link>
          <div className="flex flex-col gap-2">
            <div className="text-text-sub font-mono text-sm tracking-tight uppercase">
              {params.slug.toUpperCase()}
            </div>
            <h1 className="text-5xl font-bold tracking-tight">{session.title}</h1>
            {session.subtitle ? (
              <p className="text-xl text-text-sub tracking-tight">
                {session.subtitle}
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-text-muted font-mono text-xs tracking-tight uppercase">
            슬라이드 덱
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {decks.map((deck) => (
              <Link
                key={deck.id}
                href={`/sessions/${params.slug}/${deck.id}`}
                className="rounded-2xl border border-divider bg-bg-soft hover:border-accent hover:bg-accent-soft transition-colors p-6 flex flex-col gap-2"
              >
                <div className="text-text-muted font-mono text-xs tracking-tight uppercase">
                  {deck.id}
                </div>
                <div className="text-2xl font-bold tracking-tight">{deck.title}</div>
                <div className="text-sm text-text-sub tracking-tight">
                  {deck.slides.length}장
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
