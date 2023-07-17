<script>
	import '../app.css';
	import { hstack, vstack } from 'styled-system/patterns';
	import { ILLUSTRATION_CATEGORIES } from '$lib/constants';
	import { sortCategories } from '$lib/utils';
	import { css } from '../../styled-system/css';

	const postGroups = Object.keys(ILLUSTRATION_CATEGORIES).sort(sortCategories);
</script>

<div id="root" class={vstack({ gap: '6', maxW: '3xl', margin: '0 auto', px: '4', lg: { p: 0 } })}>
	<h1
		class={css({
			w: 'full',
			fontSize: 'xl',
			'& a': {
				textDecoration: 'underline'
			}
		})}
	>
		Exploration of <a href="https://svelte-cloudinary.vercel.app/">svelte-cloudinary</a>
		and
		<a href="https://panda-css.com/">panda css</a> by
		<a href="https://joelmturner.com">@joelmturner</a>
	</h1>
	<ul class={hstack({ gap: '3', flexWrap: 'wrap', my: '3' })}>
		{#each postGroups as postGroup}
			<li
				class={css({
					borderRadius: 'sm',
					bg: 'gray.700',
					px: '2',
					py: '1',
					fontSize: 'sm',
					transition: 'background-color 0.2s ease-in-out',
					_hover: {
						bg: 'gray.600'
					}
				})}
			>
				<a href={`#${postGroup}`}>{postGroup}</a>
			</li>
		{/each}
	</ul>
	<slot />
</div>
