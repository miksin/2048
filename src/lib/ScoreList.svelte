<script lang="ts">
	import { onMount } from "svelte";
	import InfoLabel from "./InfoLabel.svelte";
	import { bestScore } from "./store";
	import { browser } from "$app/environment";
	export let score: number;

	onMount(() => {
		if (browser) {
			$bestScore = Number(window.localStorage.getItem("bestScore"));
		}
	});

	$: {
		if ($bestScore != null && score > $bestScore) {
			$bestScore = score;
		}
	}
</script>

<div class="flex gap-2">
	<InfoLabel name="SCORE">
		{score}
	</InfoLabel>
	<InfoLabel name="BEST">
		{$bestScore != null ? $bestScore : "-"}
	</InfoLabel>
</div>
