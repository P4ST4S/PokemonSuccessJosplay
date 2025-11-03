import Image from "next/image";
import type { Achievement } from "@/types/achievement";

interface AchievementCardProps {
  achievement: Achievement;
  isCompleted: boolean;
  isHydrated: boolean;
  onToggle: (id: Achievement["id"]) => void;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  isCompleted,
  isHydrated,
  onToggle,
}) => {
  const { id, title, description, icon } = achievement;

  const handleClick = () => {
    onToggle(id);
  };

  const statusLabel = isCompleted ? "Valide" : "Non valide";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group relative flex h-full flex-col gap-5 overflow-hidden rounded-[22px] border-[3px] border-mii-silver bg-white/95 px-6 py-5 text-left shadow-[6px_6px_0_rgba(18,38,58,0.12)] transition-transform duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-mii-lime/70 active:translate-y-[2px] ${
        isCompleted && isHydrated
          ? "border-mii-lime/70 bg-mii-lime/20 animate-achievement-pop"
          : "hover:-translate-y-[3px]"
      }`}
      aria-pressed={isCompleted}
      aria-label={`${title} — ${statusLabel}`}
    >
      <span className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full border-[3px] border-white/60 bg-white p-1.5 shadow-[3px_3px_0_rgba(18,38,58,0.12)] transition-all duration-200 group-hover:bg-white">
        <span
          className={`grid size-7 place-items-center rounded-full font-semibold transition-all ${
            isCompleted ? "bg-mii-lime text-white" : "bg-mii-silver text-mii-slate"
          }`}
        >
          ✓
        </span>
        {isCompleted ? (
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full border border-mii-lime/40">
            <span className="pointer-events-none absolute inset-0 -z-10 animate-ripple-check rounded-full border border-mii-lime/60" />
          </span>
        ) : null}
      </span>
      <div className="flex items-center gap-4">
        <span className="relative flex size-16 shrink-0 items-center justify-center rounded-[18px] border-[3px] border-mii-silver bg-mii-sky-100">
          <Image
            src={icon}
            alt=""
            width={42}
            height={42}
            className="transition-transform duration-300 group-hover:scale-105"
            aria-hidden
          />
        </span>
        <div className="flex flex-1 flex-col">
          <h2 className="text-lg font-semibold text-mii-ink">{title}</h2>
          <p className="text-sm text-mii-slate">{description}</p>
        </div>
      </div>
      <span
        className={`mt-auto inline-flex items-center justify-center rounded-[14px] border-[2px] px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] ${
          isCompleted ? "border-mii-lime/80 bg-mii-lime/20 text-mii-ink" : "border-mii-silver bg-white text-mii-slate"
        }`}
      >
        {statusLabel}
      </span>
    </button>
  );
};
