<script lang="ts">
	import "@fontsource/m-plus-1"
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
    main {
		flex: 1;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}
</style>