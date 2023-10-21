<script lang="ts">
  import TileContainer from "./TileContainer.svelte";
  import { GameEngine } from "./models/GameEngine";

  let gameEngine = GameEngine.init();

  $: {
    const next = GameEngine.next(gameEngine);
    if (gameEngine.gameState !== next.gameState) {
      setTimeout(() => {
        gameEngine = next;
      }, 0);
    }
  }
</script>

<div
  class="relative h-80 w-80 rounded-md border-4 border-solid border-violet-200 bg-violet-200 xs:h-96 xs:w-96 sm:h-128 sm:w-128"
>
  {#each gameEngine.tiles as tile}
    <TileContainer {tile} />
  {/each}
</div>
