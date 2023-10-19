type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type Level = IntRange<1, 12>;
export type Position = {
  x: IntRange<0, 4>;
  y: IntRange<0, 4>;
};

export type Tile = {
  key: number;
  level: Level;
  position: Position;
};
