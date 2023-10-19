import { writable } from "svelte/store";
import { GameMode } from "./gameMode";

export let gameMode = writable<GameMode>(GameMode.Decimal);
