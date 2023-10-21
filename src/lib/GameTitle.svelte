<script lang="ts">
  import { GameModeUtils } from "$lib/models/GameMode";
  import { gameMode } from "$lib/store";
  import { Tile } from "./models/Tile";

  $: ({ render } = GameModeUtils[$gameMode]);
</script>

<h1 class="font-pixel text-7xl text-violet-950 sm:text-9xl">
  {render(11)}
</h1>
