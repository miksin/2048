<script lang="ts">
	import { GameModeUtils } from "./models/GameMode";
	import type { Tile } from "./models/Tile";
	import { gameMode } from "./store";

	export let tile: Tile;
	$: ({
		position: { x, y },
		level,
	} = tile);

	$: ({ render } = GameModeUtils[$gameMode]);
</script>

<div
	class={`xs:border-6 absolute h-1/4 w-1/4 animate-appear border-4 border-solid border-transparent transition-all duration-150 sm:border-8 tile-x-${x} tile-y-${y} tile-z-${level}`}
>
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
</div>

<style lang="scss">
	.tile-x-0 {
		left: 0%;
	}
	.tile-x-1 {
		left: 25%;
	}
	.tile-x-2 {
		left: 50%;
	}
	.tile-x-3 {
		left: 75%;
	}
	.tile-y-0 {
		top: 0%;
	}
	.tile-y-1 {
		top: 25%;
	}
	.tile-y-2 {
		top: 50%;
	}
	.tile-y-3 {
		top: 75%;
	}
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

	@for $i from 1 through 11 {
		.tile-z-#{$i} {
			z-index: #{$i};
		}
	}
</style>
