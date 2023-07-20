<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import { css } from 'styled-system/css';
	import { vstack } from 'styled-system/patterns';
	import type { IllustrationItem, IllustrationTag, Illustrations } from '$lib/types';
	import { sortCategories } from '$lib/utils';
	import { ILLUSTRATION_CATEGORIES } from '$lib/constants';
	import Modal from '../components/Modal.svelte';

	export let data: { posts: Illustrations };

	let showModal = false;
	let lightboxPost: IllustrationItem | null = null;
	$: if (!showModal) {
		lightboxPost = null;
	}

	// parse the url to get the image id
	function getId(url: string) {
		return url.match(/illustration\/([^/.]+)\.\w+$/)?.[0] ?? url;
	}
	const postGroups: IllustrationTag[] = (
		Object.keys(ILLUSTRATION_CATEGORIES) as IllustrationTag[]
	).sort(sortCategories);

	function illustrations(postGroup: IllustrationTag) {
		return data?.posts?.[postGroup];
	}
</script>

<div class={vstack({ gap: '6', w: '100%', position: 'relative' })}>
	{#each postGroups as postGroup}
		<div
			class={vstack({
				gap: '1',
				w: '100%',
				sm: {
					flexDirection: 'row',
					gap: '3'
				}
			})}
		>
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
					w: 'full',
					textAlign: 'left',
					sm: {
						w: '1/3',
						textAlign: 'right',
						textDecoration: 'underline'
					}
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
			{#each illustrations(postGroup) as post}
				<button
					on:click={() => {
						showModal = true;
						lightboxPost = post;
					}}
					class={css({ cursor: 'pointer' })}
				>
					<CldImage
						width="400"
						height="400"
						src={getId(post.url)}
						alt={post.id}
						class={css({ borderRadius: 'md' })}
					/>
				</button>
			{/each}
		</div>
	{/each}

	<Modal bind:showModal>
		{#if lightboxPost}
			<CldImage
				width="800"
				height="800"
				src={getId(lightboxPost.url)}
				alt={lightboxPost.id}
				class={css({ borderRadius: 'md' })}
			/>
		{/if}
	</Modal>
</div>
