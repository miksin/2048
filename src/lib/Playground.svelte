<script lang="ts">
  import TileContainer from "./TileContainer.svelte";
  import { GameEngine, GameState } from "./models/GameEngine";

  let gameEngine = GameEngine.init();

  $: {
    const next = GameEngine.next(gameEngine);
    if (gameEngine.gameState !== next.gameState) {
      const delay = gameEngine.gameState === GameState.Trasitioning ? 300 : 0;
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
      gameEngine = GameEngine.next({ ...gameEngine, gameState: nextState });
    }
  };

  $: {
    console.log(
      "tiles",
      gameEngine.tiles.map((t) => t.key),
    );
  }
</script>

<div
  class="relative h-80 w-80 rounded-md border-4 border-solid border-violet-200 bg-violet-200 xs:h-96 xs:w-96 sm:h-128 sm:w-128"
>
  {#each gameEngine.tiles as tile (tile.key)}
    <TileContainer {tile} />
  {/each}
</div>

<svelte:window on:keydown|preventDefault={(e) => onKeyDown(e.key)} />
