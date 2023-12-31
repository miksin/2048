import { Level } from "./Tile";

export const GameMode = {
	Decimal: "decimal",
	Rome: "rome",
	Fibonacci: "fibonacci",
} as const;
export type GameMode = (typeof GameMode)[keyof typeof GameMode];

export type GameModeUtils = {
	value: (level: Level) => number;
	render: (level: Level) => string;
	merge: (a: Level, b: Level) => Level | false;
	deal: (key: number) => Level;
};

const defaultGameModeUtils: GameModeUtils = {
	value: (level) => level,
	render: (level) => `${level}`,
	merge: (a, b) => {
		const next = a + 1;
		if (a === b && Level.fit(next)) return next;
		return false;
	},
	deal: (key) => (key % 10 === 9 ? 2 : 1),
};

export const GameModeUtils: Record<GameMode, GameModeUtils> = {
	[GameMode.Decimal]: {
		...defaultGameModeUtils,
		value: (level) => Math.pow(2, level),
		render: (level) => GameModeUtils[GameMode.Decimal].value(level).toString(),
	},
	[GameMode.Rome]: {
		...defaultGameModeUtils,
		value: (level) => Math.pow(2, level),
		render: (level) => {
			switch (level) {
				case 1:
					return "II";
				case 2:
					return "IV";
				case 3:
					return "VIII";
				case 4:
					return "XVI";
				case 5:
					return "XXXII";
				case 6:
					return "LXIV";
				case 7:
					return "CXXVIII";
				case 8:
					return "CCLVI";
				case 9:
					return "DXII";
				case 10:
					return "MXXIV";
				case 11:
					return "MMXLVIII";
			}
		},
	},
	[GameMode.Fibonacci]: {
		...defaultGameModeUtils,
		deal: (key) => (key % 2 === 0 ? 1 : 2),
		merge: (a, b) => {
			const next = Math.max(a, b) + 1;
			if (Math.abs(a - b) === 1 && Level.fit(next)) return next;
			return false;
		},
		value: (level) => {
			switch (level) {
				case 1:
					return 2;
				case 2:
					return 3;
				case 3:
					return 5;
				case 4:
					return 8;
				case 5:
					return 13;
				case 6:
					return 21;
				case 7:
					return 34;
				case 8:
					return 55;
				case 9:
					return 89;
				case 10:
					return 144;
				case 11:
					return 233;
			}
		},
		render: (level) => GameModeUtils[GameMode.Fibonacci].value(level).toString(),
	},
};
