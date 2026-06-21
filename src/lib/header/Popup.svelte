<script lang="ts">
	import { page } from '$app/stores';
	export let onClose: () => void = () => {};
	// SvelteKit 2 narrows pathname to the known-route union; widen to string
	// so we can compare against link targets without a type mismatch.
	$: pathname = $page.url.pathname as string;
</script>

<div class="container">
	<ul>
		<li class:active={pathname === '/pages'}>
			<span role="img" aria-label="article">🗒</span>
			<a data-sveltekit-preload-data href="/pages" on:click={onClose}> Articles </a>
		</li>
		<li class:active={pathname === '/portfolios'}>
			<span role="img" aria-label="portfolio">📚</span>
			<a data-sveltekit-preload-data href="/portfolios" on:click={onClose}> Portfolio </a>
		</li>
		<li class:active={pathname === '/'}>
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
