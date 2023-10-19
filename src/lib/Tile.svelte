<script lang="ts">
  import type { Level } from "./types";

  export let level: Level;
</script>

<div
  class="flex h-full w-full items-center justify-center rounded"
  class:bg-sky-50={level === 1}
  class:bg-sky-100={level === 2}
  class:bg-sky-200={level === 3}
  class:bg-sky-300={level === 4}
  class:bg-sky-400={level === 5}
  class:bg-sky-500={level === 6}
  class:bg-sky-600={level === 7}
  class:bg-sky-700={level === 8}
  class:bg-sky-800={level === 9}
  class:bg-sky-900={level === 10}
  class:bg-sky-950={level === 11}
>
  <h6
    class="font-dosis text-3xl font-bold xs:text-4xl sm:text-5xl"
    class:text-stone-950={level <= 3}
    class:text-stone-50={level > 3}
  >
    {Math.pow(2, level)}
  </h6>
</div>
