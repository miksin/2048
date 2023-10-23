import { GameEngine, GameState, type Queues } from "$lib/models/GameEngine";
import { type Tile, Position, type Level } from "$lib/models/Tile";

const getTileMap = (tiles: Tile[]) => {
	return Array.from(Array(Position.size).keys()).map((x) =>
		Array.from(Array(Position.size).keys()).map(
			(y) => tiles.find((t) => t.position.x === x && t.position.y === y) ?? null,
		),
	);
};

const moveTile = (target: Tile, to: Position, tileMap: (Tile | null)[][], queues: Queues) => {
	if (to.x === target.position.x && to.y === target.position.y) return;

	tileMap[target.position.x][target.position.y] = null;
	tileMap[to.x][to.y] = { ...target, position: to };
	queues.update.push({
		key: target.key,
		level: target.level,
		position: to,
	});
};

const mergeTile = (target: Tile, exist: Tile, level: Level, tileMap: (Tile | null)[][], queues: Queues) => {
	queues.update.push({
		key: exist.key,
		level,
		position: exist.position,
	});
	queues.update.push({
		...target,
		position: exist.position,
	});
	queues.destroy.push(target);
	tileMap[exist.position.x][exist.position.y] = {
		...exist,
		level,
	};
	tileMap[target.position.x][target.position.y] = null;
};

const simulateMoveLeft = (
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
		let bound = 0;
		const y = target.position.y;
		for (let x = target.position.x - 1; x >= bound - 1; x -= 1) {
			if (x < bound) {
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
						bound = existTile.position.x;
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

export const simulate = {
	[GameState.MoveLeft]: (rawTiles: Tile[], merge: (a: Level, b: Level) => Level | false): Queues =>
		simulateMoveLeft(rawTiles, merge, (p) => p),
	[GameState.MoveRight]: (rawTiles: Tile[], merge: (a: Level, b: Level) => Level | false): Queues =>
		simulateMoveLeft(rawTiles, merge, (p) => ({ x: Position.size - 1 - p.x, y: p.y }) as Position),
	[GameState.MoveDown]: (rawTiles: Tile[], merge: (a: Level, b: Level) => Level | false): Queues =>
		simulateMoveLeft(
			rawTiles,
			merge,
			(p) => ({ x: Position.size - 1 - p.y, y: p.x }) as Position,
			(p) => ({ x: p.y, y: Position.size - 1 - p.x }) as Position,
		),
	[GameState.MoveUp]: (rawTiles: Tile[], merge: (a: Level, b: Level) => Level | false): Queues =>
		simulateMoveLeft(rawTiles, merge, (p) => ({ x: p.y, y: p.x }) as Position),
} as const;
