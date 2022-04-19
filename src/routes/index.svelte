<script lang="ts">
	import QiitaIcon from '$lib/icons/QiitaLogoIcon.svelte';
	import ZennIcon from '$lib/icons/ZennIcon.svelte';
	import GithunIcon from '$lib/icons/GithubIcon.svelte';
	import { base } from '$app/paths';
	import type { Auther } from '$lib/types';
	export let auther: Auther = null;
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<div class="container">
	<div class="paper">
		<h1>My Profile</h1>
		<article>
			{#if auther}
				{@html auther.biography}
			{/if}
		</article>
		<h2>Links</h2>
		<ul>
			<li class="link-item">
				<ZennIcon width={32} height={32} />
				<a href="https://zenn.dev/mktu">https://zenn.dev/mktu</a>
			</li>
			<li class="link-item">
				<QiitaIcon width={64} height={64} />
				<a href="https://qiita.com/mktu">https://qiita.com/mktu</a>
			</li>
			<li class="link-item">
				<GithunIcon width={32} height={32} />
				<a href="https://github.com/mktu">https://github.com/mktu</a>
			</li>
		</ul>
	</div>
	
</div>
<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 70vh;
		width: 100%;
	}
	.paper {
		padding: 1rem;
		> article {
			padding: 0 1rem;
		}
		> ul {
			padding: 0 1rem;
		}
	}
	.link-item {
		display: flex;
		align-items: center;
		margin-top: 0;
		margin-bottom: 0;
		> a {
			margin-left: 0.5rem;
			margin-right: 0.5rem;
			color: $secondary-color;
			text-decoration: underline;
		}
	}
	@media screen and (min-width: 800px) {
		.paper {
			border: 3px solid black;
			border-radius: 5px;
			min-width: 512px;
		}
	}
</style>
