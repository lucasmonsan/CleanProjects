<script>
	import { onMount, onDestroy } from 'svelte';

	let width = 0;
	let isClient = false;

	const updateWidth = () => {
		if (isClient) width = window.innerWidth;
	};

	onMount(() => {
		isClient = true; // Define que estamos no cliente (navegador)
		updateWidth();
		window.addEventListener('resize', updateWidth);
	});

	onDestroy(() => {
		if (isClient) window.removeEventListener('resize', updateWidth);
	});
</script>

<!-- ---------------------------------------------------------------- -->

<div class="viewport-width">
	Largura: {width > 0 ? width + 'px' : 'Carregando...'}
</div>

<!-- ---------------------------------------------------------------- -->

<style>
	div.viewport-width {
		position: fixed;
		top: 10px;
		left: 10px;
		background: rgba(0, 0, 0, 0.75);
		color: white;
		padding: 0.25rem;
		font-size: 1rem;
		z-index: 10;
	}
</style>
