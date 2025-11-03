"use client";

import { AchievementsGrid } from "@/components/achievements-grid";
import type { Achievement } from "@/types/achievement";
import successes from "@/public/successes.json";
import Link from "next/link";
import { useEffect, useState } from "react";

const achievements = successes as Achievement[];

export default function JosplayPage() {
  const [progress, setProgress] = useState<{
    completedIds: string[];
    lastUpdated: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProgress = async () => {
    try {
      const res = await fetch("/api/progress/josplay", {
        cache: "no-store",
      });

      if (!res.ok) {
        return;
      }

      const data = await res.json();
      setProgress(data);
    } catch (error) {
      console.error("Failed to fetch Josplay progress:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch initial data
    fetchProgress();

    // Poll every 10 seconds
    const interval = setInterval(fetchProgress, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 pb-16 pt-24 sm:px-8 lg:px-12">
      <section className="flex flex-col gap-4 text-left sm:gap-5">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-mii-slate shadow-mii backdrop-blur-gloss ring-1 ring-mii-silver/70 transition-all hover:bg-white/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Retour
        </Link>
        <div className="flex items-center gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 shadow-mii ring-1 ring-red-200">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-red-500" />
            </span>
            LIVE
          </span>
        </div>
        <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-mii-ink sm:text-5xl">
          Progression de Josplay
        </h1>
        <p className="max-w-2xl text-pretty text-base text-mii-slate sm:text-lg">
          Suivez en temps réel la progression de Josplay dans son challenge run
          Pokémon Heartgold & Soulsilver. Cette page se met à jour
          automatiquement.
        </p>
        {loading ? (
          <p className="text-sm text-mii-slate/70">Chargement...</p>
        ) : progress?.lastUpdated ? (
          <p className="text-sm text-mii-slate/70">
            Dernière mise à jour :{" "}
            {new Date(progress.lastUpdated).toLocaleString("fr-FR")}
          </p>
        ) : null}
      </section>
      {!loading && (
        <AchievementsGrid
          achievements={achievements}
          initialCompletedIds={progress?.completedIds || []}
          readOnly
        />
      )}
    </main>
  );
}
