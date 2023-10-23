import type { Tile } from "./Tile";

export type Queues = {
	create: Tile[];
	update: Tile[];
	destroy: Tile[];
};

export const Queues = {
	init: (): Queues => ({
		create: [],
		update: [],
		destroy: [],
	}),
};
