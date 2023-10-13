<script lang="ts">
	import Tile from './Tile.svelte';
	import TileContainer from './TileContainer.svelte';
</script>

<div class="playground">
	<TileContainer position={3}><Tile num={2} /></TileContainer>
	<TileContainer position={7}><Tile num={4} /></TileContainer>
	<TileContainer position={1}><Tile num={8} /></TileContainer>
	<TileContainer position={10}><Tile num={16} /></TileContainer>
	<TileContainer position={0}><Tile num={512} /></TileContainer>
</div>

<style>
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
