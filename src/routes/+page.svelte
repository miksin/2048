<script>
  import Playground from "$lib/Playground.svelte";
</script>

<div class="main">
  <h1 class="title">2048</h1>
  <Playground />
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 2rem;
  }

  .title {
    font-family: PixelifySans;
    font-size: 8rem;
  }
</style>
