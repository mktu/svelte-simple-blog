<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<header>
	<ul>
		<li class:active={$page.url.pathname === `${base}/pages/0`}>
			<a sveltekit:prefetch href={`${base}/pages/0`}>Articles</a>
		</li>
		<li>|</li>
		<li class:active={$page.url.pathname === base}>
			<a sveltekit:prefetch href={`${base}/`}>About Me</a>
		</li>
	</ul>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		display: flex;
		align-items: center;
		z-index: 20;
		justify-content: center;
		width: 100vw;
		box-shadow: 0 0.1px 5px rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);
		background: rgba(255, 255, 255, 0.7);
		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			text-decoration: none;
			padding: 0;
			li {
				margin: 0 0.5rem;
				a {
					color: $primary-color;
					font-size: x-large;
				}
			}
		}
	}

	@media screen and (min-width: 800px) {
		header {
			ul {
				display: flex;
			}
			border-bottom: none;
			box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.1);
		}
	}
</style>
