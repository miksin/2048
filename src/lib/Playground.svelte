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
      const delay = gameEngine.gameState === GameState.Transitioning ? 150 : 0;
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

  let touchStart: { x: number; y: number } = { x: 0, y: 0 };

  const preventTouchDefault = (e: TouchEvent) => {
    if (gameEngine.gameState === GameState.Play && e.cancelable) {
      e.preventDefault();
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    preventTouchDefault(e);
    const touch = e.touches.item(0);
    if (touch) {
      touchStart = {
        x: touch.screenX,
        y: touch.screenY,
      };
    }
  };

  const onTouchEnd = (e: TouchEvent) => {
    preventTouchDefault(e);
    const touch = e.changedTouches.item(0) ?? e.touches.item(0);
    if (touch) {
      const delta = {
        x: touch.screenX - touchStart.x,
        y: touch.screenY - touchStart.y,
      };
      if (Math.pow(delta.x, 2) + Math.pow(delta.y, 2) < Math.pow(80, 2)) {
        return; // unreach threshold
      }

      if (Math.abs(delta.x) > Math.abs(delta.y)) {
        if (delta.x > 0) onKeyDown("ArrowRight");
        else onKeyDown("ArrowLeft");
      } else {
        if (delta.y > 0) onKeyDown("ArrowDown");
        else onKeyDown("ArrowUp");
      }
    }
  };

  const onRetry = () => {
    gameEngine = GameEngine.init();
  };
</script>

<div
  class="relative h-80 w-80 rounded-md border-4 border-solid border-teal-400 bg-teal-400 xs:h-96 xs:w-96 sm:h-128 sm:w-128"
  on:touchstart={onTouchStart}
  on:touchmove={preventTouchDefault}
  on:touchend={onTouchEnd}
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
