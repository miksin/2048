<script lang="ts">
  import TileContainer from "./TileContainer.svelte";
  import type { Tile } from "./types";
  import { getUniqKey } from "./utils";

  const sampleTiles = [
    { key: getUniqKey(), position: { x: 1, y: 0 }, level: 1 },
    { key: getUniqKey(), position: { x: 3, y: 1 }, level: 2 },
    { key: getUniqKey(), position: { x: 0, y: 0 }, level: 3 },
    { key: getUniqKey(), position: { x: 3, y: 2 }, level: 4 },
    { key: getUniqKey(), position: { x: 0, y: 1 }, level: 9 },
    { key: getUniqKey(), position: { x: 2, y: 3 }, level: 11 },
  ] satisfies Tile[];
</script>

<div
  class="relative h-80 w-80 rounded-md border-4 border-solid border-violet-200 bg-violet-200 xs:h-96 xs:w-96 sm:h-128 sm:w-128"
>
  {#each sampleTiles as sampleTile}
    <TileContainer tile={sampleTile} />
  {/each}
</div>
