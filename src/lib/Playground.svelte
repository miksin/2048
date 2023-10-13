<script lang="ts">
	import Tile from "./Tile.svelte";

	const tileNumbers = Array.from(Array(16).keys());
	const items = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

	const numToX = (n: number) => n % 4;
	const numToY = (n: number) => Math.floor(n / 4);
</script>

<div class="playground">
	{#each tileNumbers as tileNumber}
		<div class="container" style:--x={numToX(tileNumber)} style:--y={numToY(tileNumber)}>
			<Tile num={items[tileNumber % items.length]} />
		</div>
	{/each}
</div>

<style>
	.container {
		position: absolute;
		left: calc(var(--x) * 25%);
		top: calc(var(--y) * 25%);
		width: 25%;
		height: 25%;
		border: 4px solid transparent;
	}

	.playground {
		width: 512px;
		height: 512px;

		position: relative;
		background-color: var(--base-color-2);
		border-radius: 6px;
		border: 4px solid var(--base-color-2);
	}

	@media screen and (max-width: 512px) {
		.playground {
			width: 300px;
			height: 300px;
		}
	}
</style>
