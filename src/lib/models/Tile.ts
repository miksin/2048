type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export type Level = IntRange<1, 12>;
export const Level = {
	max: 11,
	fit: (x: number): x is Level => Number.isInteger(x) && x >= 1 && x <= 11,
} as const;

export type Position = {
	x: IntRange<0, 4>;
	y: IntRange<0, 4>;
};
export const Position = {
	size: 4,
	all: () => [0, 1, 2, 3].flatMap((x) => [0, 1, 2, 3].map((y) => ({ x, y }))) as Position[],
} as const;

export type Tile = {
	key: number;
	level: Level;
	position: Position;
};
