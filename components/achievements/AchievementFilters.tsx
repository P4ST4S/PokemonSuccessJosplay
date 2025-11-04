import type { AchievementCategory } from "@/types/achievement";
import { CATEGORY_ORDER, CATEGORY_LABELS } from "@/config/achievements.config";

type FilterStatus = "all" | "completed" | "incomplete";

interface AchievementFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filterStatus: FilterStatus;
  onStatusChange: (status: FilterStatus) => void;
  filterCategory: AchievementCategory | null;
  onCategoryChange: (category: AchievementCategory | null) => void;
  readOnly?: boolean;
}

export function AchievementFilters({
  searchQuery,
  onSearchChange,
  filterStatus,
  onStatusChange,
  filterCategory,
  onCategoryChange,
  readOnly = false,
}: AchievementFiltersProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 text-mii-slate/60"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un succes..."
            className="w-full rounded-2xl border-2 border-mii-silver bg-white px-12 py-3 text-base text-mii-ink placeholder-mii-slate/50 transition-all duration-200 focus:border-mii-sky-400 focus:outline-none focus:ring-4 focus:ring-mii-sky-400/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-mii-slate/60 transition-colors hover:bg-mii-silver/50 hover:text-mii-ink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {readOnly && (
          <div className="flex gap-2 rounded-2xl border-2 border-mii-silver bg-white p-1">
            <button
              type="button"
              onClick={() => onStatusChange("all")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                filterStatus === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-mii-slate hover:bg-mii-silver/50"
              }`}
            >
              Tous
            </button>
            <button
              type="button"
              onClick={() => onStatusChange("completed")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                filterStatus === "completed"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-mii-slate hover:bg-mii-silver/50"
              }`}
            >
              Valides
            </button>
            <button
              type="button"
              onClick={() => onStatusChange("incomplete")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                filterStatus === "incomplete"
                  ? "bg-gray-600 text-white shadow-sm"
                  : "text-mii-slate hover:bg-mii-silver/50"
              }`}
            >
              Non valides
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto rounded-2xl border-2 border-mii-silver bg-white p-1">
        <button
          type="button"
          onClick={() => onCategoryChange(null)}
          className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
            filterCategory === null
              ? "bg-purple-600 text-white shadow-sm"
              : "text-mii-slate hover:bg-mii-silver/50"
          }`}
        >
          Toutes categories
        </button>
        {CATEGORY_ORDER.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              filterCategory === category
                ? "bg-purple-600 text-white shadow-sm"
                : "text-mii-slate hover:bg-mii-silver/50"
            }`}
          >
            {CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>
    </div>
  );
}
