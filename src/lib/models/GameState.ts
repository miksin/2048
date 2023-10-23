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
