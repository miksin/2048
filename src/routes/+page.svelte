<script>
	import Playground from '$lib/Playground.svelte';
</script>

<div class="main">
	<h1 class="title">2048</h1>
	<Playground />
</div>

<style>
	.main {
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.title {
		font-family: var(--pixel-font);
		font-size: 8rem;
		margin-bottom: 1rem;
	}
</style>
