<script lang="ts">
	import GameModeSelector from "$lib/GameModeSelector.svelte";
	import GameTitle from "$lib/GameTitle.svelte";
	import Playground from "$lib/Playground.svelte";
	import { gameMode } from "$lib/store";
</script>

<div
	class="main mx-auto flex min-h-screen max-w-xs flex-col items-center justify-center gap-4 overflow-hidden xs:max-w-sm sm:max-w-lg"
>
	<GameTitle />
	<GameModeSelector />
	{#key $gameMode}
		<Playground />
	{/key}
</div>
