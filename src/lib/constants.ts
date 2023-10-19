import type { Level } from "./types";

export const LevelToBgClass: Record<Level, string> = {
  [1]: "bg-sky-50",
  [2]: "bg-sky-100",
  [3]: "bg-sky-200",
  [4]: "bg-sky-300",
  [5]: "bg-sky-400",
  [6]: "bg-sky-500",
  [7]: "bg-sky-600",
  [8]: "bg-sky-700",
  [9]: "bg-sky-800",
  [10]: "bg-sky-900",
  [11]: "bg-sky-950",
} as const;

export const xToLeftClass = [
  "left-0",
  "left-1/4",
  "left-2/4",
  "left-3/4",
] as const;
export const yToTopClass = ["top-0", "top-1/4", "top-2/4", "top-3/4"] as const;
