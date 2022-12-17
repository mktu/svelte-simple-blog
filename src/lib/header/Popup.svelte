<script lang="ts">
	import { page } from '$app/stores';
	export let onClose: () => void = () => {};
</script>

<div class="container">
	<ul>
		<li class:active={$page.url.pathname === '/pages'}>
			<span role="img" aria-label="article">🗒</span>
			<a data-sveltekit-preload-data href="/pages" on:click={onClose}> Articles </a>
		</li>
		<li class:active={$page.url.pathname === '/portfolios'}>
			<span role="img" aria-label="portfolio">📚</span>
			<a data-sveltekit-preload-data href="/portfolios" on:click={onClose}> Portfolio </a>
		</li>
		<li class:active={$page.url.pathname === '/'}>
			<span role="img" aria-label="about me">💁‍♂️</span>
			<a data-sveltekit-preload-data href="/" on:click={onClose}> About Me </a>
		</li>
	</ul>
</div>

<style lang="scss">
	ul {
		list-style: none;
		text-decoration: none;
		li {
			margin: 1rem 0;
			font-size: x-large;
			a {
				color: $primary-color;
				text-decoration: underline;
			}
		}
	}
</style>
