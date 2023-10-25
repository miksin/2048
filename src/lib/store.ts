import { writable } from "svelte/store";
import { GameMode } from "./models/GameMode";

export const gameMode = writable<GameMode>(GameMode.Decimal);
