<script lang="ts">
	import { GameModeUtils } from "$lib/models/GameMode";
	import { gameMode } from "$lib/store";
	import SampleTile from "./SampleTile.svelte";

	$: ({ deal, merge } = GameModeUtils[$gameMode]);

	$: seed1 = deal(0);
	$: seed2 = deal(1);
	$: merged = merge(seed1, seed2) || 1;
</script>

<div class="flex flex-row items-center font-dosis text-7xl text-neutral-950 sm:text-8xl">
	<SampleTile level={seed1} />
	+
	<SampleTile level={seed2} />
	=
	<SampleTile level={merged} />
</div>
