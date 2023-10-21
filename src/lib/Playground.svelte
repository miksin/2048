<script lang="ts">
  import TileContainer from "./TileContainer.svelte";
  import { GameEngine, GameState } from "./models/GameEngine";

  let gameEngine = GameEngine.init();

  $: {
    const next = GameEngine.next(gameEngine);
    if (gameEngine.gameState !== next.gameState) {
      setTimeout(() => {
        gameEngine = next;
      }, 0);
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
      gameEngine = GameEngine.next({ ...gameEngine, gameState: nextState });
    }
  };

  $: {
    console.log("state:", gameEngine.gameState);
    console.log("queues:", gameEngine.queues);
  }
</script>

<div
  class="relative h-80 w-80 rounded-md border-4 border-solid border-violet-200 bg-violet-200 xs:h-96 xs:w-96 sm:h-128 sm:w-128"
>
  {#each gameEngine.tiles as tile}
    <TileContainer {tile} />
  {/each}
</div>

<svelte:window on:keydown|preventDefault={(e) => onKeyDown(e.key)} />
