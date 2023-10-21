<script lang="ts">
  import TileContainer from "./TileContainer.svelte";
  import { tiles } from "./store";
</script>

<div
  class="relative h-80 w-80 rounded-md border-4 border-solid border-violet-200 bg-violet-200 xs:h-96 xs:w-96 sm:h-128 sm:w-128"
>
  {#each $tiles as tile}
    <TileContainer {tile} />
  {/each}
</div>
