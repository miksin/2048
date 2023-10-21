<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import GameModeSelector from "$lib/GameModeSelector.svelte";
  import GameTitle from "$lib/GameTitle.svelte";
  import Playground from "$lib/Playground.svelte";
  import { gameMode } from "$lib/store";
  import { getGameMode } from "$lib/utils";
  import { onMount } from "svelte";

  onMount(() => {
    if (browser) {
      $gameMode = getGameMode($page.url.searchParams.get("mode"));
    }
  });
</script>

<div
  class="main flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden"
>
  <GameTitle />
  <GameModeSelector />
  <Playground />
</div>
