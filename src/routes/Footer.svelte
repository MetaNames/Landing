<script>
</script>

<footer class="card-secondary">
	<div class="logo">Logo</div>
	<div class="links">Links</div>
	<div class="contact">Contact</div>
</footer>

<style>
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
