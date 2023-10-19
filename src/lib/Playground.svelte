<script lang="ts">
  import Tile from "./Tile.svelte";
  import TileContainer from "./TileContainer.svelte";
</script>

<div class="w-80 h-80 sm:w-96 sm:h-96 bg-violet-200 border-violet-200 relative border-solid border-4 rounded-md">
  <TileContainer position={3}><Tile level={1} /></TileContainer>
  <TileContainer position={7}><Tile level={2} /></TileContainer>
  <TileContainer position={1}><Tile level={3} /></TileContainer>
  <TileContainer position={10}><Tile level={4} /></TileContainer>
  <TileContainer position={0}><Tile level={9} /></TileContainer>
  <TileContainer position={14}><Tile level={11} /></TileContainer>
</div>
