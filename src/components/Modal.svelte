<script lang="ts">
	import { css } from 'styled-system/css';

	export let showModal: boolean;

	let dialog: HTMLDialogElement;
	console.log('showModal', showModal);

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:click|stopPropagation
		class={css({
			position: 'relative',
			bg: 'transparent'
		})}
	>
		<!-- svelte-ignore a11y-autofocus -->
		<button
			class={css({
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',
				top: '-2',
				right: '-3',
				backgroundColor: 'gray.300',
				w: '5',
				h: '5',
				borderRadius: 'full',
				flexWrap: 'wrap-reverse',
				cursor: 'pointer'
			})}
			autofocus
			on:click={() => dialog.close()}>⨯</button
		>
		<slot />
	</div>
</dialog>

<style>
	/* panda styles for dialog were messing with the modal */
	dialog {
		max-width: 800px;
		max-height: 800px;
		width: 100%;
		margin: auto auto;
		aspect-ratio: 1/1;
		background-color: transparent;
		overflow: visible;
	}
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.3);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
