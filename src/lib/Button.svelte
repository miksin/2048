<script lang="ts">
	export let handleClick: () => void;
</script>

<button class="rounded-md bg-neutral-950 px-6 py-2 hover:bg-neutral-700 active:bg-neutral-800" on:click={handleClick}>
	<slot />
</button>
