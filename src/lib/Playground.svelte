<script lang="ts">
	import Button from "./Button.svelte";
	import ScoreList from "./ScoreList.svelte";
	import TileBox from "./TileBox.svelte";
	import { GameEngine } from "./models/GameEngine";
	import { GameModeUtils } from "./models/GameMode";
	import { GameState } from "./models/GameState";
	import { gameMode } from "./store";
	import { useInteraction } from "./utils";

	$: utils = GameModeUtils[$gameMode];
	let gameEngine = GameEngine.init();

	$: disabled = gameEngine.gameState === GameState.Win || gameEngine.gameState === GameState.Lose;

	$: {
		const next = GameEngine.next(gameEngine, utils);
		if (gameEngine.gameState !== next.gameState) {
			const delay = gameEngine.gameState === GameState.Transitioning ? 150 : 0;
			setTimeout(() => {
				gameEngine = next;
			}, delay);
		}
	}

	$: ({ onKeyDown, onTouchStart, onTouchMove, onTouchEnd } = useInteraction((key) => {
		const nextState = (() => {
			switch (key) {
				case "ArrowLeft":
					return GameState.MoveLeft;
				case "ArrowRight":
					return GameState.MoveRight;
				case "ArrowUp":
					return GameState.MoveUp;
				case "ArrowDown":
					return GameState.MoveDown;
			}
		})();
		gameEngine = GameEngine.next({ ...gameEngine, gameState: nextState }, utils);
	}, gameEngine.gameState !== GameState.Play));

	const onRetry = () => {
		gameEngine = GameEngine.init();
	};
</script>

<ScoreList score={gameEngine.score} />

<div
	class="playground xs:border-6 relative h-80 w-80 rounded-md border-4 border-solid xs:h-96 xs:w-96 sm:h-128 sm:w-128 sm:border-8"
	on:touchstart={onTouchStart}
	on:touchmove={onTouchMove}
	on:touchend={onTouchEnd}
>
	{#each gameEngine.tiles as tile (tile.key)}
		{@const {
			position: { x, y },
			level,
		} = tile}
		<div
			class={`xs:border-6 absolute left-0 top-0 h-1/4 w-1/4 animate-appear border-4 border-solid border-transparent transition-all duration-150 sm:border-8 tile-x-${x}-y-${y} tile-z-${level}`}
		>
			<TileBox {level} />
		</div>
	{/each}
	<div
		class="absolute z-[100] flex h-full w-full flex-col items-center justify-center gap-8 rounded bg-black/50 text-neutral-50 transition-opacity duration-150"
		class:opacity-0={!disabled}
		class:pointer-events-none={!disabled}
	>
		<h1 class="text-2xl font-bold !leading-narrow xs:text-xl sm:text-3xl">
			{gameEngine.gameState === GameState.Win ? "WIN" : "LOSE"}
		</h1>
		<Button on:click={onRetry}>Retry</Button>
	</div>
</div>

<svelte:window on:keydown={onKeyDown} />

<style lang="scss">
	.playground {
		background-color: #a1a4f0;
		border-color: #a1a4f0;
	}

	@for $x from 0 through 3 {
		@for $y from 0 through 3 {
			.tile-x-#{$x}-y-#{$y} {
				translate: calc(#{$x} * 100%) calc(#{$y} * 100%);
			}
		}
	}

	@for $i from 1 through 11 {
		.tile-z-#{$i} {
			z-index: #{$i};
		}
	}
</style>
