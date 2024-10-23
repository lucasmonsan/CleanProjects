<script>
	/* CSS files */
	import '../styles/variables.css';
	import '../styles/reset.css';
	import '../styles/tags.css';
	import '../styles/leaflet.css';

	/* Imports */
	import { page } from '$app/stores'; // para acessar a rota atual
	import { onMount } from 'svelte';

	/* Components */
	import ScreenSize from '$lib/components/ScreenSize.svelte';
	import Loading from '$lib/components/Loading.svelte';

	onMount(() => {
		const lastAccess = sessionStorage.getItem('lastAccess');

		if (!lastAccess && $page.url.pathname !== '/splash') window.location.href = '/splash'; // Redireciona para splash
	});
</script>

<!-- ---------------------------------------------------------------- -->

<slot />
<!-- slot é onde o conteúdo da página será renderizado -->

<!-- Componente global -->
<ScreenSize />
<Loading />

<!-- ---------------------------------------------------------------- -->
