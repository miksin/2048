import { getRestPositions, getTileMap, pick } from "$lib/utils";
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
      case GameState.MoveLeft: {
        const queues = GameEngine.init().queues;
        const tiles = prev.tiles
          .map((tile) => structuredClone(tile))
          .sort((a, b) => a.position.x - b.position.x);
        const tileMap = getTileMap(tiles);

        tiles.forEach((target) => {
          const y = target.position.y;
          for (let x = target.position.x - 1; x >= -1; x -= 1) {
            if (x < 0) {
              const position = { x: 0, y } as Position;
              if (
                position.x !== target.position.x ||
                position.y !== target.position.y
              ) {
                queues.update.push({
                  key: target.key,
                  level: target.level,
                  position,
                });
                tileMap[target.position.x][target.position.y] = null;
                tileMap[position.x][position.y] = target;
              }
            } else {
              const existTile = tileMap[x][y];
              if (existTile) {
                if (existTile.level !== target.level) {
                  const position = { x: x + 1, y } as Position;
                  if (
                    position.x !== target.position.x ||
                    position.y !== target.position.y
                  ) {
                    queues.update.push({
                      key: target.key,
                      level: target.level,
                      position,
                    });
                    tileMap[target.position.x][target.position.y] = null;
                    tileMap[position.x][position.y] = target;
                  }
                } else {
                  const level = (existTile.level + 1) as Level;
                  queues.update.push({
                    key: existTile.key,
                    level,
                    position: existTile.position,
                  });
                  queues.destroy.push({
                    key: target.key,
                  });
                  tileMap[existTile.position.x][existTile.position.y] = {
                    ...existTile,
                    level,
                  };
                  tileMap[target.position.x][target.position.y] = null;
                }
              }
            }
          }
        });
        return {
          ...prev,
          gameState: GameState.Trasition,
          queues,
        };
      }
    }
    return prev;
  },
};
