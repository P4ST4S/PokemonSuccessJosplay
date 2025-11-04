interface StatusDividerProps {
  title: string;
  type?: "completed" | "incomplete";
}

export function StatusDivider({ title, type = "incomplete" }: StatusDividerProps) {
  const isCompleted = type === "completed";

  return (
    <div className="col-span-full flex items-center gap-3">
      <div
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold shadow-lg ${
          isCompleted
            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
            : "bg-mii-slate/10 text-mii-slate font-semibold"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={isCompleted ? "2.5" : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          {isCompleted ? (
            <polyline points="20 6 9 17 4 12" />
          ) : (
            <>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </>
          )}
        </svg>
        {title}
      </div>
      <div
        className={`h-px flex-1 ${
          isCompleted
            ? "bg-gradient-to-r from-green-200 to-transparent"
            : "bg-gradient-to-r from-mii-slate/20 to-transparent"
        }`}
      />
    </div>
  );
}
