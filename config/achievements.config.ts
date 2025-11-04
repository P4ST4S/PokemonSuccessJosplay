import type { AchievementCategory } from "@/types/achievement";

export const CATEGORY_ORDER: AchievementCategory[] = [
  "Intrigue",
  "Pokémon",
  "Quêtes",
  "Collection",
  "Divers",
];

export const CATEGORY_COLORS: Record<AchievementCategory, string> = {
  Intrigue: "from-red-500 to-pink-500",
  Pokémon: "from-blue-500 to-cyan-500",
  Quêtes: "from-green-500 to-emerald-500",
  Collection: "from-purple-500 to-violet-500",
  Divers: "from-gray-500 to-slate-500",
};

export const CATEGORY_LABELS: Record<AchievementCategory, string> = {
  Intrigue: "Intrigue",
  Pokémon: "Pokemon",
  Quêtes: "Quetes",
  Collection: "Collection",
  Divers: "Divers",
};

export const STORAGE_KEY = "mii-achievements::completed";
