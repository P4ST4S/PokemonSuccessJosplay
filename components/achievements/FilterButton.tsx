import type { ReactNode } from "react";

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function FilterButton({
  active,
  onClick,
  children,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
        active
          ? "bg-white text-black shadow-md"
          : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80"
      }`}
    >
      {children}
    </button>
  );
}
