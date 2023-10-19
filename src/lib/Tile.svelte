<script lang="ts">
  import type { Level } from "./types";

  export let level: Level;
</script>

<div
  class="flex h-full w-full items-center justify-center rounded"
  class:bg-pink-50={level === 1}
  class:bg-pink-100={level === 2}
  class:bg-pink-200={level === 3}
  class:bg-pink-300={level === 4}
  class:bg-pink-400={level === 5}
  class:bg-pink-500={level === 6}
  class:bg-pink-600={level === 7}
  class:bg-pink-700={level === 8}
  class:bg-pink-800={level === 9}
  class:bg-pink-900={level === 10}
  class:bg-pink-950={level === 11}
>
  <h6
    class="text-5xl font-bold"
    class:text-stone-950={level <= 3}
    class:text-stone-50={level > 3}
  >
    {Math.pow(2, level)}
  </h6>
</div>
