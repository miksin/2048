<script lang="ts">
  export let handleClick: () => void;
</script>

<button
  class="rounded-md bg-teal-950 px-6 py-2 hover:bg-teal-700 active:bg-teal-800"
  on:click={handleClick}
>
  <slot />
</button>
