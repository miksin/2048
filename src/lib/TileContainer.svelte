<script lang="ts">
  import type { Tile } from "$lib/types";
  import { LevelToBgClass, xToLeftClass, yToTopClass } from "./constants";
  export let tile: Tile;
  const {
    position: { x, y },
    level,
  } = tile;
</script>

<div
  class={`absolute h-1/4 w-1/4 border-4 border-solid border-transparent ${xToLeftClass[x]} ${yToTopClass[y]}`}
>
  <div
    class={`flex h-full w-full items-center justify-center rounded ${LevelToBgClass[level]}`}
  >
    <h6
      class="font-dosis text-3xl font-bold xs:text-4xl sm:text-5xl"
      class:text-stone-950={level <= 3}
      class:text-stone-50={level > 3}
    >
      {Math.pow(2, level)}
    </h6>
  </div>
</div>
