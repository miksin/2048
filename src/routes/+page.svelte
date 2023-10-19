<script>
  import { page } from "$app/stores";
  import Playground from "$lib/Playground.svelte";
  import { GameModeUtils, getMode } from "$lib/gameMode";

  const { renderTile } =
    GameModeUtils[getMode($page.url.searchParams.get("mode"))];
</script>

<div class="main flex min-h-screen flex-col items-center justify-center gap-8">
  <h1 class="font-pixel text-7xl text-violet-950 sm:text-9xl">
    {renderTile({ key: 0, position: { x: 0, y: 0 }, level: 11 })}
  </h1>
  <Playground />
</div>
