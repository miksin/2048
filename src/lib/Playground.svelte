<script lang="ts">
  import Tile from "./Tile.svelte";
  import TileContainer from "./TileContainer.svelte";
</script>

<div
  class="relative h-80 w-80 rounded-md border-4 border-solid border-violet-200 bg-violet-200 xs:h-96 xs:w-96 sm:h-128 sm:w-128"
>
  <TileContainer position={3}><Tile level={1} /></TileContainer>
  <TileContainer position={7}><Tile level={2} /></TileContainer>
  <TileContainer position={1}><Tile level={3} /></TileContainer>
  <TileContainer position={10}><Tile level={4} /></TileContainer>
  <TileContainer position={0}><Tile level={9} /></TileContainer>
  <TileContainer position={14}><Tile level={11} /></TileContainer>
</div>
