import { useMemo } from "react";

interface UseAchievementStatsProps {
  completedSet: Set<string>;
  totalCount: number;
}

export function useAchievementStats({
  completedSet,
  totalCount,
}: UseAchievementStatsProps) {
  const completedCount = completedSet.size;

  const completionRatio = useMemo(() => {
    if (totalCount === 0) {
      return 0;
    }
    return Math.round((completedCount / totalCount) * 100);
  }, [completedCount, totalCount]);

  return {
    completedCount,
    totalCount,
    completionRatio,
  };
}
