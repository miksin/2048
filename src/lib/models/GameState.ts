import type { Level, Position, Tile } from "./Tile";

export const GameState = {
  Init: "init",
  Deal: "deal",
  Play: "play",
  Calculate: "calculate",
  Trasition: "transition",
  Destroy: "destroy",
  Check: "check",
  Win: "win",
  Lose: "lose",
} as const;
export type GameState = (typeof GameState)[keyof typeof GameState];

export type TileTransitionAction =
  | {
      type: "move";
      key: number;
      to: Position;
    }
  | {
      type: "evolution";
      key: number;
      level: Level;
    };

export type TileDestroyAction = {
  key: number;
};

export type TileDealAction = {
  key: number;
  tile: Tile;
};
