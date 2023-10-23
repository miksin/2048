import { Position, Tile } from "../models/Tile";

let incrementNum = 0;
export const getUniqKey = () => incrementNum++;

const getAllPositions = () =>
  Position.dimensionX.flatMap((x) =>
    Position.dimensionY.map((y) => ({ x, y })),
  );

export const getRestPositions = (positions: Position[]): Position[] => {
  return getAllPositions().filter((ap) =>
    positions.every((p) => ap.x !== p.x || ap.y !== p.y),
  );
};

export const getTileMap = (tiles: Tile[]) => {
  return Position.dimensionX.map((x) =>
    Position.dimensionY.map((y) => {
      return (
        tiles.find((t) => t.position.x === x && t.position.y === y) ?? null
      );
    }),
  );
};

export const pick = <T>(candidates: T[], needs: number): T[] => {
  if (needs === 0) return [];
  if (candidates.length <= needs) return candidates;
  const index = Math.floor(Math.random() * candidates.length);
  const rest = [...candidates.slice(0, index), ...candidates.slice(index + 1)];
  return [candidates[index], ...pick(rest, needs - 1)];
};
