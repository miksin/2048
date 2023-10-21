import { getRestPositions, pick } from "$lib/utils";
import { Position, type Level, Tile } from "./Tile";

export const GameState = {
  Init: "init",
  Deal: "deal",
  Play: "play",
  MoveLeft: "moveLeft",
  MoveRight: "moveRight",
  MoveUp: "moveUp",
  MoveDown: "moveDown",
  Trasition: "transition",
  Destroy: "destroy",
  Check: "check",
  Win: "win",
  Lose: "lose",
} as const;
export type GameState = (typeof GameState)[keyof typeof GameState];

type TileCreate = {
  type: "create";
  level: Level;
  position: Position;
};

type TileUpdate = {
  type: "update";
  key: number;
  level: Level;
  position: Position;
};

type TileDestroy = {
  type: "destory";
  key: number;
};

export type GameEngine = {
  gameState: GameState;
  queues: {
    create: TileCreate[];
    update: TileUpdate[];
    destroy: TileDestroy[];
  };
  tiles: Tile[];
};

export const GameEngine = {
  init: (): GameEngine => ({
    gameState: GameState.Init,
    queues: {
      create: [],
      update: [],
      destroy: [],
    },
    tiles: [],
  }),
  next: (prev: GameEngine): GameEngine => {
    switch (prev.gameState) {
      case GameState.Init: {
        const restPositions = getRestPositions(
          prev.tiles.map((t) => t.position),
        );
        return {
          ...prev,
          gameState: GameState.Deal,
          queues: {
            create: pick(restPositions, 2).map((position) => ({
              type: "create",
              level: 1,
              position,
            })),
            update: [],
            destroy: [],
          },
        };
      }
      case GameState.Deal: {
        const tiles = [
          ...prev.tiles,
          ...prev.queues.create.map(({ level, position }) =>
            Tile.new({ level, position }),
          ),
        ];
        return {
          ...prev,
          gameState: GameState.Play,
          queues: { ...prev.queues, create: [] },
          tiles,
        };
      }
    }
    return prev;
  },
};
