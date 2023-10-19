import type { Tile } from "./types";

export const GameMode = {
  Binary: "binary",
  Decimal: "decimal",
  Rome: "rome",
} as const;
export type GameMode = (typeof GameMode)[keyof typeof GameMode];

export const getMode = (str: string | null): GameMode => {
  return (
    Object.values(GameMode).find((mode) => mode === str) ?? GameMode.Decimal
  );
};

type GameModeUtils = {
  renderTile: (tile: Tile) => string;
  canMerge: (a: Tile, b: Tile) => boolean;
};

const defaultGameModeUtils: GameModeUtils = {
  renderTile: (tile) => `${tile.level}`,
  canMerge: (a, b) => a.level === b.level,
};

export const GameModeUtils: Record<GameMode, GameModeUtils> = {
  [GameMode.Binary]: {
    ...defaultGameModeUtils,
    renderTile: (tile) => Math.pow(2, tile.level).toString(2),
  },
  [GameMode.Decimal]: {
    ...defaultGameModeUtils,
    renderTile: (tile) => `${Math.pow(2, tile.level)}`,
  },
  [GameMode.Rome]: {
    ...defaultGameModeUtils,
    renderTile: (tile) => {
      switch (tile.level) {
        case 1:
          return "II";
        case 2:
          return "IV";
        case 3:
          return "VIII";
        case 4:
          return "XVI";
        case 5:
          return "XXXII";
        case 6:
          return "LXIV";
        case 7:
          return "CXXVIII";
        case 8:
          return "CCLVI";
        case 9:
          return "DXII";
        case 10:
          return "MXXIV";
        case 11:
          return "MMXLVIII";
      }
    },
  },
};
