import { getRestPositions, pick, simulate } from "$lib/utils";
import type { GameModeUtils } from "./GameMode";
import { Position, Level, Tile } from "./Tile";

export const GameState = {
  Init: "init",
  Deal: "deal",
  Play: "play",
  MoveLeft: "moveLeft",
  MoveRight: "moveRight",
  MoveUp: "moveUp",
  MoveDown: "moveDown",
  Transition: "transition",
  Transitioning: "transitioning",
  Destroy: "destroy",
  Check: "check",
  Win: "win",
  Lose: "lose",
} as const;
export type GameState = (typeof GameState)[keyof typeof GameState];

type TileCreate = {
  level: Level;
  position: Position;
};

type TileUpdate = {
  key: number;
  level: Level;
  position: Position;
};

type TileDestroy = {
  key: number;
};

export type Queues = {
  create: TileCreate[];
  update: TileUpdate[];
  destroy: TileDestroy[];
};

export type GameEngine = {
  gameState: GameState;
  queues: Queues;
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
  next: (prev: GameEngine, utils: GameModeUtils): GameEngine => {
    switch (prev.gameState) {
      case GameState.Init: {
        const restPositions = getRestPositions(
          prev.tiles.map((t) => t.position),
        );
        const firstDeal = prev.tiles.length === 0;
        const initLevels = firstDeal ? utils.init() : undefined;
        const pickNum = firstDeal ? 2 : 1;
        return {
          ...prev,
          gameState: GameState.Deal,
          queues: {
            ...prev.queues,
            create: pick(restPositions, pickNum).map((position, i) => ({
              type: "create",
              level: initLevels?.[i] ?? utils.deal(),
              position,
            })),
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
        const nextState = (() => {
          if (tiles.length === Math.pow(Position.size, 2)) {
            const operations = Object.values(simulate).map(
              (s) => s(tiles, utils.merge).update.length,
            );
            if (operations.every((o) => o === 0)) return GameState.Lose;
          }
          return GameState.Play;
        })();
        return {
          ...prev,
          gameState: nextState,
          queues: { ...prev.queues, create: [] },
          tiles,
        };
      }

      case GameState.MoveLeft:
      case GameState.MoveRight:
      case GameState.MoveDown:
      case GameState.MoveUp: {
        const queues = simulate[prev.gameState](prev.tiles, utils.merge);
        if (queues.update.length < 1) {
          return {
            ...prev,
            gameState: GameState.Play,
          };
        }
        return {
          ...prev,
          gameState: GameState.Transition,
          queues,
        };
      }

      case GameState.Transition: {
        const tiles = prev.tiles.slice();
        prev.queues.update.forEach(({ key, level, position }) => {
          const index = tiles.findIndex((t) => t.key === key);
          tiles[index] = { ...tiles[index], level, position };
        });
        return {
          ...prev,
          gameState: GameState.Transitioning,
          queues: {
            ...prev.queues,
            update: [],
          },
          tiles,
        };
      }

      case GameState.Transitioning: {
        return {
          ...prev,
          gameState: GameState.Destroy,
        };
      }

      case GameState.Destroy: {
        const keys = new Set(prev.queues.destroy.map((d) => d.key));
        return {
          ...prev,
          gameState: GameState.Check,
          queues: {
            ...prev.queues,
            destroy: [],
          },
          tiles: prev.tiles.filter((t) => !keys.has(t.key)),
        };
      }

      case GameState.Check: {
        if (prev.tiles.some((t) => t.level === Level.max)) {
          return {
            ...prev,
            gameState: GameState.Win,
          };
        }

        return {
          ...prev,
          gameState: GameState.Init,
        };
      }
    }
    return prev;
  },
};
