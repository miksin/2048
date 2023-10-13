<script lang="ts">
	export let num: number | undefined;
	const level = num ? Math.log2(num) : undefined;
</script>

<div class={`tile ${level ? `--${level}` : ''}`}>
	<h6>{num}</h6>
</div>

<style lang="scss">
	.tile {
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		font-size: 64px;
		font-weight: bold;
		width: 100%;
		height: 100%;

		@for $i from 1 through 11 {
			&.--#{$i} {
				background-color: var(--tile-color-#{$i});
			}
		}

		@for $i from 1 through 2 {
			&.--#{$i} {
				color: var(--base-color-4);
			}
		}

		@for $i from 7 through 11 {
			&.--#{$i} {
				font-size: 48px;
			}
		}
	}
</style>
