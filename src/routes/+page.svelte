<script lang="ts">
  import GameModeSelector from "$lib/GameModeSelector.svelte";
  import GameTitle from "$lib/GameTitle.svelte";
  import Playground from "$lib/Playground.svelte";
  import { gameMode } from "$lib/store";
</script>

<div
  class="main flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden"
>
  <GameTitle />
  <GameModeSelector />
  {#key $gameMode}
    <Playground />
  {/key}
</div>
