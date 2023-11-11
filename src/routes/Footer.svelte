<script>
	import Logo from "./Logo.svelte";

</script>

<footer class="card-secondary">
	<div class="logo">
		<Logo />
		<span>Meta Names</span>
	</div>
	<div class="links">
		<a href="mailto:metanames@proton.me" target="_blank">Contact us</a>
		<a href="https://x.com/metanames_" target="_blank">Twitter</a>
	</div>
</footer>

<style>
	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	a,
	span {
		color: var(--mdc-theme-on-primary);
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 2rem;

		@media only screen and (max-width: 600px) {
			flex-direction: column;
		}

		border-top: 1px solid var(--mdc-theme-secondary);
	}
</style>
