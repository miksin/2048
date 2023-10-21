<script lang="ts">
  import { GameModeUtils } from "./models/GameMode";
  import type { Level, Tile } from "./models/Tile";
  import { gameMode } from "./store";

  const LevelToBgClass: Record<Level, string> = {
    [1]: "bg-sky-50",
    [2]: "bg-sky-100",
    [3]: "bg-sky-200",
    [4]: "bg-sky-300",
    [5]: "bg-sky-400",
    [6]: "bg-sky-500",
    [7]: "bg-sky-600",
    [8]: "bg-sky-700",
    [9]: "bg-sky-800",
    [10]: "bg-sky-900",
    [11]: "bg-sky-950",
  } as const;

  const xToLeftClass = ["left-0", "left-1/4", "left-2/4", "left-3/4"] as const;
  const yToTopClass = ["top-0", "top-1/4", "top-2/4", "top-3/4"] as const;

  export let tile: Tile;
  const {
    position: { x, y },
    level,
  } = tile;

  $: ({ renderTile } = GameModeUtils[$gameMode]);
</script>

<div
  class={`absolute h-1/4 w-1/4 border-4 border-solid border-transparent ${xToLeftClass[x]} ${yToTopClass[y]}`}
>
  <div
    class={`flex h-full w-full items-center justify-center overflow-hidden rounded ${LevelToBgClass[level]}`}
  >
    <h6
      class="break-all font-dosis text-2xl font-bold !leading-narrow xs:text-4xl sm:text-5xl"
      class:text-stone-950={level <= 3}
      class:text-stone-50={level > 3}
    >
      {renderTile(tile)}
    </h6>
  </div>
</div>
