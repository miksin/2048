<script lang="ts">
  import Button from "./Button.svelte";
  import TileContainer from "./TileContainer.svelte";
  import { GameEngine, GameState } from "./models/GameEngine";
  import { GameModeUtils } from "./models/GameMode";
  import { gameMode } from "./store";

  $: utils = GameModeUtils[$gameMode];
  let gameEngine = GameEngine.init();

  $: disabled =
    gameEngine.gameState === GameState.Win ||
    gameEngine.gameState === GameState.Lose;

  $: {
    const next = GameEngine.next(gameEngine, utils);
    if (gameEngine.gameState !== next.gameState) {
      const delay = gameEngine.gameState === GameState.Trasitioning ? 150 : 0;
      setTimeout(() => {
        gameEngine = next;
      }, delay);
    }
  }

  const onKeyDown = (key: string) => {
    if (gameEngine.gameState !== GameState.Play) return;

    const nextState = (() => {
      switch (key) {
        case "ArrowLeft":
          return GameState.MoveLeft;
        case "ArrowRight":
          return GameState.MoveRight;
        case "ArrowUp":
          return GameState.MoveUp;
        case "ArrowDown":
          return GameState.MoveDown;
      }
      return null;
    })();
    if (nextState) {
      gameEngine = GameEngine.next(
        { ...gameEngine, gameState: nextState },
        utils,
      );
    }
  };

  const onRetry = () => {
    gameEngine = GameEngine.init();
  };
</script>

<div
  class="relative h-80 w-80 rounded-md border-4 border-solid border-teal-400 bg-teal-400 xs:h-96 xs:w-96 sm:h-128 sm:w-128"
>
  {#each gameEngine.tiles as tile (tile.key)}
    <TileContainer {tile} />
  {/each}
  <div
    class="absolute z-[100] flex h-full w-full flex-col items-center justify-center gap-8 rounded bg-black/50 text-neutral-50 transition-opacity duration-150"
    class:opacity-0={!disabled}
    class:pointer-events-none={!disabled}
  >
    <h1
      class="font-dosis text-2xl font-bold !leading-narrow xs:text-xl sm:text-3xl"
    >
      {gameEngine.gameState === GameState.Win ? "WIN" : "LOSE"}
    </h1>
    <Button handleClick={onRetry}>Retry</Button>
  </div>
</div>

<svelte:window on:keydown|preventDefault={(e) => onKeyDown(e.key)} />
