<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import { css } from 'styled-system/css';
	import { hstack, vstack } from 'styled-system/patterns';
	import type { Illustrations } from '$lib/types';
	import { ILLUSTRATION_CATEGORIES } from '$lib/constants';

	export let data: { post: Illustrations };
	const postGroups = Object.keys(ILLUSTRATION_CATEGORIES);
</script>

<div class={vstack({ gap: '6', w: '100%' })}>
	{#each postGroups as postGroup}
		<div class={hstack({ gap: '6', w: '100%' })}>
			<h2
				id={postGroup}
				class={css({
					fontSize: '2xl',
					fontWeight: 'bold',
					w: '100%'
				})}
			>
				{postGroup}
			</h2>
			<div
				class={css({
					fontSize: 'xs',
					w: '1/3',
					textAlign: 'right',
					textDecoration: 'underline'
				})}
			>
				<a href="#root">back to top</a>
			</div>
		</div>
		<div
			class={css({
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
				gap: '3',
				width: '100%'
			})}
		>
			{#each data?.post?.[postGroup].sort((a, b) => b.id - a.id) as post}
				<CldImage
					width="400"
					height="400"
					src={post.url}
					alt={post.id}
					sizes="50vw"
					class={css({ borderRadius: 'md' })}
				/>
			{/each}
		</div>
	{/each}
	<!-- <pre>{JSON.stringify(data?.post?.inktober2017, null, 2)}</pre> -->
</div>
