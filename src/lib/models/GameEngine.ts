import { getRestPositions, getTileMap, pick } from "$lib/utils";
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
  Trasition: "transition",
  Trasitioning: "transitioning",
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

type Queues = {
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
        return {
          ...prev,
          gameState: GameState.Deal,
          queues: {
            ...prev.queues,
            create: pick(restPositions, 2).map((position, i) => ({
              type: "create",
              level: utils.deal(i),
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
          if (
            tiles.length ===
            Position.dimensionX.length * Position.dimensionY.length
          ) {
            const operations = [
              moveLeft(tiles, utils.merge).update.length,
              moveRight(tiles, utils.merge).update.length,
              moveDown(tiles, utils.merge).update.length,
              moveUp(tiles, utils.merge).update.length,
            ];
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

      case GameState.MoveLeft: {
        return {
          ...prev,
          gameState: GameState.Trasition,
          queues: moveLeft(prev.tiles, utils.merge),
        };
      }

      case GameState.MoveRight: {
        return {
          ...prev,
          gameState: GameState.Trasition,
          queues: moveRight(prev.tiles, utils.merge),
        };
      }

      case GameState.MoveDown: {
        return {
          ...prev,
          gameState: GameState.Trasition,
          queues: moveDown(prev.tiles, utils.merge),
        };
      }

      case GameState.MoveUp: {
        return {
          ...prev,
          gameState: GameState.Trasition,
          queues: moveUp(prev.tiles, utils.merge),
        };
      }

      case GameState.Trasition: {
        const tiles = prev.tiles.slice();
        prev.queues.update.forEach(({ key, level, position }) => {
          const index = tiles.findIndex((t) => t.key === key);
          tiles[index] = { ...tiles[index], level, position };
        });
        return {
          ...prev,
          gameState: GameState.Trasitioning,
          queues: {
            ...prev.queues,
            update: [],
          },
          tiles,
        };
      }

      case GameState.Trasitioning: {
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

const moveTile = (
  target: Tile,
  to: Position,
  tileMap: (Tile | null)[][],
  queues: Queues,
) => {
  if (to.x === target.position.x && to.y === target.position.y) return;

  tileMap[target.position.x][target.position.y] = null;
  tileMap[to.x][to.y] = { ...target, position: to };
  queues.update.push({
    key: target.key,
    level: target.level,
    position: to,
  });
};

const mergeTile = (
  target: Tile,
  exist: Tile,
  level: Level,
  tileMap: (Tile | null)[][],
  queues: Queues,
) => {
  queues.update.push({
    key: exist.key,
    level,
    position: exist.position,
  });
  queues.update.push({
    ...target,
    position: exist.position,
  });
  queues.destroy.push({
    key: target.key,
  });
  tileMap[exist.position.x][exist.position.y] = {
    ...exist,
    level,
  };
  tileMap[target.position.x][target.position.y] = null;
};

const move = (
  rawTiles: Tile[],
  merge: (a: Level, b: Level) => Level | false,
  transpose: (p: Position) => Position,
  reverse: (p: Position) => Position = transpose,
) => {
  const queues = GameEngine.init().queues;
  const tiles = rawTiles
    .map((tile) => ({
      ...tile,
      position: transpose(tile.position),
    }))
    .sort((a, b) => a.position.x - b.position.x);
  const tileMap = getTileMap(tiles);

  tiles.forEach((target) => {
    const y = target.position.y;
    for (let x = target.position.x - 1; x >= -1; x -= 1) {
      if (x < 0) {
        const position = { x: x + 1, y } as Position;
        moveTile(target, position, tileMap, queues);
      } else {
        const existTile = tileMap[x][y];
        if (existTile) {
          const nextLevel = merge(existTile.level, target.level);
          if (nextLevel === false) {
            const position = { x: x + 1, y } as Position;
            moveTile(target, position, tileMap, queues);
          } else {
            mergeTile(target, existTile, nextLevel, tileMap, queues);
          }
          break;
        }
      }
    }
  });
  return {
    ...queues,
    update: queues.update.map((u) => ({
      ...u,
      position: reverse(u.position),
    })),
  };
};

const size = Position.dimensionX.length - 1;

const moveLeft = (
  rawTiles: Tile[],
  merge: (a: Level, b: Level) => Level | false,
): Queues => move(rawTiles, merge, (p) => p);

const moveRight = (
  rawTiles: Tile[],
  merge: (a: Level, b: Level) => Level | false,
): Queues =>
  move(rawTiles, merge, (p) => ({ x: size - p.x, y: p.y }) as Position);

const moveDown = (
  rawTiles: Tile[],
  merge: (a: Level, b: Level) => Level | false,
): Queues =>
  move(
    rawTiles,
    merge,
    (p) => ({ x: size - p.y, y: p.x }) as Position,
    (p) => ({ x: p.y, y: size - p.x }) as Position,
  );

const moveUp = (
  rawTiles: Tile[],
  merge: (a: Level, b: Level) => Level | false,
): Queues => move(rawTiles, merge, (p) => ({ x: p.y, y: p.x }) as Position);
