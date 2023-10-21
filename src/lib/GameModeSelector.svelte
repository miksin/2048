<script lang="ts">
  import { GameMode } from "$lib/models/GameMode";
  import { gameMode } from "$lib/store";

  const udpateMode = (value: string) => ($gameMode = value as GameMode);
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
