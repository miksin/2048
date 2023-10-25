import { Position } from "../models/Tile";

export const getRestPositions = (positions: Position[]): Position[] => {
	return Position.all().filter((ap) => positions.every((p) => ap.x !== p.x || ap.y !== p.y));
};

export const pick = <T>(candidates: T[], needs: number): T[] => {
	if (needs === 0) return [];
	if (candidates.length <= needs) return candidates;
	const index = Math.floor(Math.random() * candidates.length);
	const rest = [...candidates.slice(0, index), ...candidates.slice(index + 1)];
	return [candidates[index], ...pick(rest, needs - 1)];
};

export * from "./simulate";
export * from "./interaction";
