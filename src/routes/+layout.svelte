<script lang="ts">
  import "../app.css";
</script>

<slot />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: var(--base-color-1);
    color: var(--base-color-4);
    font-family: Dosis, Helvetica, sans-serif;
  }
</style>
