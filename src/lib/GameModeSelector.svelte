<script lang="ts">
	import { GameMode } from "$lib/models/GameMode";
	import { gameMode } from "$lib/store";

	export let updateMode: (value: string) => void;
</script>

<div class="flex flex-row items-center gap-2">
	<p class="text-lg">Game Mode:</p>
	<select
		class="rounded bg-violet-400 px-2 py-2 text-lg text-neutral-50 outline-none sm:px-4"
		value={$gameMode}
		on:change={(e) => updateMode(e.currentTarget.value)}
	>
		{#each Object.values(GameMode) as mode}
			<option value={mode}>{mode}</option>
		{/each}
	</select>
</div>
