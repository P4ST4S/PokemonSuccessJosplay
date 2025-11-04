interface EmptyStateProps {
  searchQuery: string;
  hasActiveFilters: boolean;
}

export function EmptyState({ searchQuery, hasActiveFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-mii-silver bg-white/50 px-6 py-12 text-center">
      <div className="rounded-full bg-mii-sky-100 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-8 text-mii-sky-600"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-mii-ink">
          Aucun succes trouve
        </p>
        <p className="text-sm text-mii-slate">
          Essaye avec d&apos;autres mots-cles
        </p>
      </div>
    </div>
  );
}
