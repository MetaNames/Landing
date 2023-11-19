<script lang="ts">
	import '../styles/app.scss';

	export let type: 'primary' | 'secondary' = 'primary';
</script>

<div class="card-{type}">
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.card-secondary {
		.content {
			padding: 2rem 4rem;
		}
	}
	.content {
		max-width: 1280px;
		margin: 0 auto;
		text-align: center;
		padding: 10rem 4rem;

		@media only screen and (max-width: 600px) {
			padding: 10%;
		}
	}
</style>
