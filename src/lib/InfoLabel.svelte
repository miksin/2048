<script lang="ts">
	export let name: string;
</script>

<div class="flex min-w-[5rem] flex-col items-center gap-2 rounded bg-violet-400 py-2 text-neutral-50">
	<p class="font-mono text-xs !leading-narrow">{name}</p>
	<p class="text-xl !leading-narrow">
		<slot />
	</p>
</div>
