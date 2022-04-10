<script lang="ts">
	import type { Article } from '$lib/types';
	import { format } from 'date-fns';
	import { base } from '$app/paths';
	export let articles: Article[] = [];
    export let hasMore = false;
    export let page = 0
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>
<div class="articles">
	
	<section>
		{#each articles as article (article.slug)}
			<article>
				<header>
					<h1>
						<a sveltekit:prefetch href={`${base}/articles/${article._id}`}>
							{article.title}
						</a>
					</h1>
					{#if article?.meta?.ogImage?.src}
					<div>
						<!-- 1:1.91 -->
						<img src={article.meta.ogImage.src} width={540} height={282} alt='og'/>
					</div>
					{/if}
					<div class="post-time">
						{format(new Date(article._sys.createdAt), 'yyyy-MM-dd hh:mm')}
					</div>
				</header>
				{#if article?.meta?.description}
					<div class="description">
						{article?.meta?.description || ''}
						<a sveltekit:prefetch href={`${base}/articles/${article._id}`}>...続きを読む</a>
					</div>
				{:else}
					<div class="description">
						<a sveltekit:prefetch href={`${base}/articles/${article._id}`}>...続きを読む</a>
					</div>
				{/if}
			</article>
		{/each}
	</section>
	<nav>
		<a class={page > 0 ? 'nav-link' : 'nav-link-disabled'} href={page > 0 ? `${base}/pages/${page-1}` : undefined} tabindex={page > 0 ? 0 : -1}>前へ</a>
		<a class={hasMore ? 'nav-link' : 'nav-link-disabled'} href={hasMore ? `${base}/pages/${page+1}` : undefined} tabindex={hasMore ? 0 : -1}>次へ</a>
	</nav>
</div>

<style lang="scss">
	article {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 1rem;
        margin-bottom : 1rem;
	}
	article:last-child {
		border-bottom: none;
	}
	header {
		margin-bottom: 1rem;
	}
	h1 {
		margin-bottom: 0.25rem;
	}
	nav {
		display: flex;
		justify-content: space-between;
		width: 90%;
		padding: 1rem 1rem;
	}
	img {
		border-radius: 0.25rem;
		margin : 0.5rem 0;
		width : 100%;
		height : auto;
		
	}
	.articles {
		padding: 2rem 0;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.post-time {
		font-size: 0.9rem;
		color: $text-meta;
	}
	.description {
		> a {
			color: $primary-color;
		}
	}
	.nav-link {
		color: rgba(0, 0, 0, 0.6);
		text-decoration: underline;
	}
	.nav-link-disabled{
		color: rgba(0, 0, 0, 0.3);
		pointer-events: none;
		text-decoration: none;
	}
	a:disabled{
		pointer-events: none;
		text-decoration: none;
	}
    @media screen and (min-width: 800px) {
		section {
			width : 600px;
		}
        nav {
            width: 650px;
        }
		img {
			width : 540px;
			height: 282px;
		}
	}
</style>
