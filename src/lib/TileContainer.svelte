<script lang="ts">
  export let position: number;
</script>

<div
  class="container"
  style:--x={position % 4}
  style:--y={Math.floor(position / 4)}
>
  <slot />
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
</style>
