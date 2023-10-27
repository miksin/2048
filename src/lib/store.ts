import { writable } from "svelte/store";
import { GameMode } from "./models/GameMode";
import { browser } from "$app/environment";

export const gameMode = writable<GameMode>(GameMode.Decimal);

export const bestScore = writable<number | null>(null);

bestScore.subscribe((cur) => {
	if (browser) {
		if (cur != null) {
			window.localStorage.setItem("bestScore", `${cur}`);
		}
	}
});
