<script>
	let isDark = false;

	const toggleTheme = () => {
		isDark = !isDark;
		if (isDark) document.documentElement.classList.add('dark-theme');
		else document.documentElement.classList.remove('dark-theme');
	};
</script>

<!-- ---------------------------------------------------------------- -->

<button on:click={toggleTheme}>
	{#if isDark}
		Mudar para Tema Claro
	{/if}
	{#if !isDark}
		Mudar para Tema Escuro
	{/if}
</button>

<!-- ---------------------------------------------------------------- -->
