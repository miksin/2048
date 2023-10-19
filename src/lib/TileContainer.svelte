<script lang="ts">
  import type { Position } from "./types";
  export let position: Position;

  const xClassNames = ["left-0", "left-1/4", "left-2/4", "left-3/4"] as const;
  const yClassNames = ["top-0", "top-1/4", "top-2/4", "top-3/4"] as const;
  const positionClassNames = `${xClassNames[position % 4]} ${
    yClassNames[Math.floor(position / 4)]
  }`;
</script>

<div
  class={"absolute h-1/4 w-1/4 border-4 border-solid border-transparent " +
    positionClassNames}
>
  <slot />
</div>
