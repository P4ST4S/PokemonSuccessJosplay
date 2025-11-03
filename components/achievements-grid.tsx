"use client";

import { useCallback, useMemo } from "react";
import { AchievementCard } from "@/components/achievement-card";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { Achievement } from "@/types/achievement";

const STORAGE_KEY = "mii-achievements::completed";

interface AchievementsGridProps {
  achievements: Achievement[];
}

export const AchievementsGrid: React.FC<AchievementsGridProps> = ({
  achievements,
}) => {
  const {
    value: completedIds,
    setValue: setCompletedIds,
    reset,
    isHydrated,
  } = useLocalStorage<string[]>(STORAGE_KEY, []);

  const completedSet = useMemo(() => new Set(completedIds), [completedIds]);
  const completedCount = completedSet.size;
  const totalCount = achievements.length;

  const completionRatio = useMemo(() => {
    if (totalCount === 0) {
      return 0;
    }

    return Math.round((completedCount / totalCount) * 100);
  }, [completedCount, totalCount]);

  const handleToggle = useCallback(
    (id: Achievement["id"]) => {
      setCompletedIds((previous) => {
        if (previous.includes(id)) {
          return previous.filter((entry) => entry !== id);
        }

        return [...previous, id];
      });
    },
    [setCompletedIds],
  );

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col gap-4 rounded-3xl bg-white/80 px-6 py-5 shadow-mii ring-1 ring-mii-silver/70 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mii-slate/70">
            Progression
          </p>
          <p className="text-3xl font-extrabold text-mii-ink">
            {completedCount}
            <span className="text-base font-semibold text-mii-slate/80">
              {" "}
              / {totalCount} succes
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-mii-sky-100 px-4 py-2 text-sm font-medium text-mii-sky-800">
            <span className="size-2 rounded-full bg-mii-sky-400" aria-hidden />
            {completionRatio}% valides
          </span>
          <button
            type="button"
            onClick={handleReset}
            disabled={!isHydrated || completedCount === 0}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-mii-slate transition-all duration-200 hover:bg-mii-silver/60 hover:text-mii-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mii-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Reinitialiser
          </button>
        </div>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            isCompleted={completedSet.has(achievement.id)}
            onToggle={handleToggle}
            isHydrated={isHydrated}
          />
        ))}
      </div>
    </section>
  );
};
