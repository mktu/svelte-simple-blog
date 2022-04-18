<script lang="ts">
	import type { Article } from '$lib/types';
	import { format } from 'date-fns';
	import { MetaTags } from 'svelte-meta-tags';
	import IconButton from '$lib/buttons/IconButton.svelte';
	import ChevronDoubleUp from '$lib/icons/ChevronDoubleUp.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly } from 'svelte/transition';
	let element: HTMLElement;
	let intersecting: boolean;
	export let article: Article;
	const handleScroleTop = () => {
		if (typeof window !== undefined) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};
</script>

<MetaTags
	openGraph={article
		? {
				title: article?.title,
				description: article.meta?.description,
				type: 'article',
				article: {
					publishedTime: article._sys.createdAt,
					modifiedTime: article._sys.updatedAt,
					authors: [article._sys.owner],
				},
				images: [
					{
						url: article.meta?.ogImage?.src,
						alt: article.meta?.title
					}
				]
		  }
		: { title: '記事が存在しません' }}
/>

<svelte:head>
	<script
		type="text/javascript"
		src="https://b.st-hatena.com/js/bookmark_button.js"
		charset="utf-8"
		async></script>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<div class="container">
	{#if article}
		<article>
			<header>
				<IntersectionObserver {element} bind:intersecting>
					<h1 bind:this={element}>{article.title}</h1>
				</IntersectionObserver>

				<div class="meta">
					{format(new Date(article._sys.createdAt), 'yyyy-MM-dd')}{article._sys.updatedAt &&
					article._sys.updatedAt !== article._sys.createdAt
						? `(${format(new Date(article._sys.updatedAt), 'yyyy-MM-dd')}更新)`
						: ''}
				</div>
				<div class="sns">
					<a
						href="https://twitter.com/share?ref_src=twsrc%5Etfw"
						class="twitter-share-button"
						data-show-count="false">Tweet</a
					>
					<a
						href="https://b.hatena.ne.jp/entry/"
						class="hatena-bookmark-button"
						data-hatena-bookmark-layout="basic-label"
						data-hatena-bookmark-lang="ja"
						title="このエントリーをはてなブックマークに追加"
						><img
							src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
							alt="このエントリーをはてなブックマークに追加"
							width="20"
							height="20"
							style="border: none;"
						/></a
					>
				</div>
			</header>
			<div class="content">
				{@html article.body}
				{#if !intersecting}
					<span transition:fly={{ y: 200 }} class="scroll-top-button">
						<IconButton onClick={handleScroleTop}>
							<ChevronDoubleUp width={48} height={48} />
						</IconButton>
					</span>
				{/if}
			</div>
			<footer>
				<div class="meta">{format(new Date(article._sys.updatedAt), 'yyyy-MM-dd')}(更新)</div>
			</footer>
		</article>
	{:else}
		<h1>記事が見つかりませんでした</h1>
	{/if}
</div>

<style lang="scss">
	article {
		padding: 1rem;
	}
	footer {
		margin: 1rem 0;
	}
	.scroll-top-button {
		position: fixed;
		bottom: 0;
		right: 0;
		opacity: 0.6;
		&:hover {
			opacity: 1;
		}
	}
	.container {
		width: 100%;
	}
	.meta {
		display: flex;
		align-items: center;
		color: $text-meta;
	}
	.sns {
		margin: 0.5rem 0;
	}
	@media screen and (min-width: 800px) {
		.container {
			display: flex;
			align-items: center;
			flex-direction: column;
		}
		article {
			width: 840px;
			display: flex;
			align-items: start;
			flex-direction: column;
		}
	}
</style>
