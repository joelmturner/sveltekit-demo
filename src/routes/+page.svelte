<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import { css } from 'styled-system/css';
	import { vstack } from 'styled-system/patterns';
	import type { Illustrations } from '$lib/types';
	import { ILLUSTRATION_CATEGORIES } from '$lib/constants';

	export let data: { post: Illustrations };
	const postGroups = Object.keys(ILLUSTRATION_CATEGORIES);
</script>

<div class={vstack({ gap: '6' })}>
	{#each postGroups as postGroup}
		<h2
			class={css({
				fontSize: '2xl',
				fontWeight: 'bold'
			})}
		>
			{postGroup}
		</h2>
		<div
			class={css({
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
				gap: '3',
				width: '100%'
			})}
		>
			{#each data?.post?.[postGroup] as post}
				<CldImage
					width="400"
					height="400"
					src={post.url}
					alt="alt image"
					class={css({ borderRadius: 'md' })}
				/>
			{/each}
		</div>
	{/each}
	<!-- <pre>{JSON.stringify(data?.post?.inktober2017, null, 2)}</pre> -->
</div>
