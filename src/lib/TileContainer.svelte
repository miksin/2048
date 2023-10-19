<script lang="ts">
  import { page } from "$app/stores";
  import type { Tile } from "$lib/types";
  import { LevelToBgClass, xToLeftClass, yToTopClass } from "./constants";
  import { GameModeUtils, getMode } from "./gameMode";

  export let tile: Tile;
  const {
    position: { x, y },
    level,
  } = tile;

  const { renderTile } =
    GameModeUtils[getMode($page.url.searchParams.get("mode"))];
</script>

<div
  class={`absolute h-1/4 w-1/4 border-4 border-solid border-transparent ${xToLeftClass[x]} ${yToTopClass[y]}`}
>
  <div
    class={`flex h-full w-full items-center justify-center overflow-hidden rounded ${LevelToBgClass[level]}`}
  >
    <h6
      class="break-all font-dosis text-3xl font-bold xs:text-4xl sm:text-5xl"
      class:text-stone-950={level <= 3}
      class:text-stone-50={level > 3}
    >
      {renderTile(tile)}
    </h6>
  </div>
</div>
