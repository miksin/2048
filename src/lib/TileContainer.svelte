<script lang="ts">
	import { GameModeUtils } from "./models/GameMode";
	import type { Level } from "./models/Tile";
	import { gameMode } from "./store";

	export let level: Level;

	$: ({ render } = GameModeUtils[$gameMode]);
</script>

<div
	class={`flex h-full w-full items-center justify-center overflow-hidden rounded transition-colors duration-150 bg-tile-${level}`}
>
	<h6
		class="break-all font-dosis text-2xl font-bold !leading-narrow xs:text-4xl sm:text-5xl"
		class:text-neutral-950={level <= 1}
		class:text-neutral-50={level > 1}
	>
		{render(level)}
	</h6>
</div>

<style lang="scss">
	.bg-tile-11 {
		background-color: #192638;
	}
	.bg-tile-10 {
		background-color: #273d4d;
	}
	.bg-tile-9 {
		background-color: #354b66;
	}
	.bg-tile-8 {
		background-color: #43567f;
	}
	.bg-tile-7 {
		background-color: #515f97;
	}
	.bg-tile-6 {
		background-color: #6065af;
	}
	.bg-tile-5 {
		background-color: #746fc7;
	}
	.bg-tile-4 {
		background-color: #907ede;
	}
	.bg-tile-3 {
		background-color: #ae8ef5;
	}
	.bg-tile-2 {
		background-color: #b2b5fc;
	}
	.bg-tile-1 {
		background-color: #d9e8ff;
	}
</style>
