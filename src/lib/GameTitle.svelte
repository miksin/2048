<script lang="ts">
	import { GameModeUtils } from "$lib/models/GameMode";
	import { gameMode } from "$lib/store";

	$: ({ render } = GameModeUtils[$gameMode]);
</script>

<h1 class="font-dosis text-7xl text-neutral-950 sm:text-8xl">
	{render(11)}
</h1>
