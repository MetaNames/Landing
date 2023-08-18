<script>
	import OpenAppButton from './OpenAppButton.svelte';
</script>

<div class="hero-primary">
	<div class="content">
		<h1>Meta Names</h1>
		<h5>The only name you need</h5>
	</div>
</div>
<div class="hero-secondary">
	<div class="content">
		<h2>The official Partisia Naming System</h2>
		<h5>Decentralised naming for wallets, social, websites</h5>
		<p>
			<OpenAppButton color="primary" variant="raised" />
		</p>
	</div>
</div>

<style>
	.content {
		max-width: 1280px;
		margin: 0 auto;
		padding: 8rem;
		text-align: center;

		@media only screen and (max-width: 600px) {
			padding: 10%;
		}
	}

	.hero-primary {
		color: var(--mdc-theme-text-primary-on-dark);
		background-color: var(--mdc-theme-primary);
	}

	.hero-secondary {
		background-color: var(--mdc-theme-background);
	}
</style>
