import type { AchievementCategory } from "@/types/achievement";
import { CATEGORY_COLORS, CATEGORY_LABELS } from "@/config/achievements.config";

interface CategoryDividerProps {
  category: AchievementCategory;
  completed: number;
  total: number;
}

export function CategoryDivider({ category, completed, total }: CategoryDividerProps) {
  return (
    <div className="col-span-full flex items-center gap-3">
      <div
        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${CATEGORY_COLORS[category]} px-4 py-2 text-sm font-bold text-white shadow-lg`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span>{category}</span>
        <span className="ml-1 opacity-90">
          ({completed}/{total})
        </span>
      </div>
      <div
        className={`h-px flex-1 bg-gradient-to-r ${CATEGORY_COLORS[category]}/20 to-transparent`}
      />
    </div>
  );
}
