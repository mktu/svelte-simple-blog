<script lang="ts">
	export let width: number = 0;
	export let height: number = 0;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke="currentColor"
	stroke-width="2"
	{width}
	{height}
>
	<path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
</svg>

<style lang="scss">
	svg {
		stroke: #181717;
	}
</style>
