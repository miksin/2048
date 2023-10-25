<script lang="ts">
	import Button from "$lib/Button.svelte";
	import GameModeSelector from "$lib/GameModeSelector.svelte";
	import GameTitle from "$lib/GameTitle.svelte";
	import Playground from "$lib/Playground.svelte";
	import type { GameMode } from "$lib/models/GameMode";
	import { gameMode } from "$lib/store";

	let playgroundKey = 0;
	$: retry = () => {
		playgroundKey += 1;
	};
	$: updateMode = (value: string) => {
		$gameMode = value as GameMode;
		retry();
	};
</script>

<div class="main mx-auto flex max-w-xs flex-col gap-8 overflow-hidden pt-8 xs:max-w-sm sm:max-w-lg">
	<GameTitle />
	{#key playgroundKey}
		<Playground />
	{/key}
	<div class="flex justify-between">
		<GameModeSelector {updateMode} />
		<Button on:click={retry}>Retry</Button>
	</div>
</div>
