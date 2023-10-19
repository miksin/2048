<script lang="ts">
  import { GameModeUtils } from "$lib/gameMode";
  import { gameMode } from "$lib/store";

  $: ({ renderTile } = GameModeUtils[$gameMode]);
</script>

<h1 class="font-pixel text-7xl text-violet-950 sm:text-9xl">
  {renderTile({ key: 0, position: { x: 0, y: 0 }, level: 11 })}
</h1>
