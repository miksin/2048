import { writable } from "svelte/store";
import { GameMode } from "./models/GameMode";
import {
  GameState,
  type TileDealAction,
  type TileDestroyAction,
  type TileTransitionAction,
} from "./models/GameState";
import type { Tile } from "./models/Tile";

export let gameMode = writable<GameMode>(GameMode.Decimal);
export let gameState = writable<GameState>(GameState.Init);
export let tiles = writable<Tile[]>([]);
export let transitionActions = writable<TileTransitionAction[]>([]);
export let destoryActions = writable<TileDestroyAction[]>([]);
export let dealActions = writable<TileDealAction[]>([]);
