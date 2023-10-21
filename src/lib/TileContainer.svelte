<script lang="ts">
  import { GameModeUtils } from "./models/GameMode";
  import type { Level, Tile } from "./models/Tile";
  import { gameMode } from "./store";

  const LevelToBgClass: Record<Level, string> = {
    [1]: "bg-tile-50",
    [2]: "bg-tile-100",
    [3]: "bg-tile-200",
    [4]: "bg-tile-300",
    [5]: "bg-tile-400",
    [6]: "bg-tile-500",
    [7]: "bg-tile-600",
    [8]: "bg-tile-700",
    [9]: "bg-tile-800",
    [10]: "bg-tile-900",
    [11]: "bg-tile-950",
  } as const;

  const levelToZClass: Record<Level, string> = {
    [1]: "z-[1]",
    [2]: "z-[2]",
    [3]: "z-[3]",
    [4]: "z-[4]",
    [5]: "z-[5]",
    [6]: "z-[6]",
    [7]: "z-[7]",
    [8]: "z-[8]",
    [9]: "z-[9]",
    [10]: "z-[10]",
    [11]: "z-[11]",
  };

  const xToLeftClass = ["left-0", "left-1/4", "left-2/4", "left-3/4"] as const;
  const yToTopClass = ["top-0", "top-1/4", "top-2/4", "top-3/4"] as const;

  export let tile: Tile;
  $: ({
    position: { x, y },
    level,
  } = tile);

  $: ({ render } = GameModeUtils[$gameMode]);
</script>

<div
  class={`absolute h-1/4 w-1/4 border-4 border-solid border-transparent transition-all duration-300 ${xToLeftClass[x]} ${yToTopClass[y]} ${levelToZClass[level]}`}
>
  <div
    class={`flex h-full w-full items-center justify-center overflow-hidden rounded ${LevelToBgClass[level]}`}
  >
    <h6
      class="break-all font-dosis text-2xl font-bold !leading-narrow xs:text-4xl sm:text-5xl"
      class:text-neutral-950={level <= 2}
      class:text-neutral-50={level > 2}
    >
      {render(level)}
    </h6>
  </div>
</div>
