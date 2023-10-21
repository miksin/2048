<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { GameMode } from "$lib/models/GameMode";
  import { gameMode } from "$lib/store";

  const getMode = (str: string | null): GameMode => {
    return (
      Object.values(GameMode).find((mode) => mode === str) ?? GameMode.Decimal
    );
  };

  $gameMode = getMode($page.url.searchParams.get("mode"));

  const udpateMode = (value: string) => {
    const params = new URLSearchParams($page.url.searchParams);
    const newMode = getMode(value);
    params.set("mode", newMode);
    $gameMode = newMode;
    goto(`?${params.toString()}`);
  };
</script>

<div class="flex flex-row items-center gap-2">
  <p class="text-lg">Game Mode:</p>
  <select
    class="px-4 py-2 text-lg"
    value={$gameMode}
    on:change={(e) => udpateMode(e.currentTarget.value)}
  >
    {#each Object.values(GameMode) as mode}
      <option value={mode}>{mode}</option>
    {/each}
  </select>
</div>
