<script lang="ts">
	let clazz = '';
	export { clazz as class };
	export let onClick: () => void;
</script>

<button class={`${clazz || ''}`} on:click={onClick}><slot /> </button>

<style lang="scss">
	button {
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
	}
</style>
