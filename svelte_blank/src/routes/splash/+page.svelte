<script>
	const handleClick = async () => {
		document.title = 'MadBee - Splash';
		sessionStorage.setItem('lastAccess', new Date().getDate().toString());
	};
</script>

<!-- ---------------------------------------------------------------- -->

<h1>Bem-vindo à SplashPage!</h1>
<button on:click={() => handleClick()}>Entrar</button>

<!-- ---------------------------------------------------------------- -->
