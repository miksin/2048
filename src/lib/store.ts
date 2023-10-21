import { writable } from "svelte/store";
import { GameMode } from "./models/GameMode";

export let gameMode = writable<GameMode>(GameMode.Decimal);
