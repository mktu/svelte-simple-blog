<script lang="ts">
	import QiitaIcon from '$lib/icons/QiitaLogoIcon.svelte';
	import ZennIcon from '$lib/icons/ZennIcon.svelte';
	import GithunIcon from '$lib/icons/GithubIcon.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types';

	export let data: PageData;
	const { auther = null } = data;
</script>

<MetaTags
	title="mktu blog page"
	description="記事一覧"
	openGraph={{
		type: 'website',
		title: 'mktu blog page',
		description: auther?.description,
		images: [
			{
				url: 'https://raw.githubusercontent.com/mktu/svelte-simple-blog/main/static/ogp-img.png',
				alt: 'mktu blog page'
			}
		]
	}}
/>

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
