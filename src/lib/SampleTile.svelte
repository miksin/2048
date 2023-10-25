<script lang="ts">
	import TileBox from "./TileBox.svelte";
	import type { Level } from "./models/Tile";

	export let level: Level;
</script>

<div class="sx:border-6 h-20 w-20 border-4 border-solid border-transparent xs:h-24 xs:w-24 sm:h-32 sm:w-32 sm:border-8">
	<TileBox {level} />
</div>
