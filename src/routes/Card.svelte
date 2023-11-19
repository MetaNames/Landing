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
	.content {
		max-width: 1280px;
		margin: 0 auto;
		padding: 6rem 4rem;
		text-align: center;

		@media only screen and (max-width: 600px) {
			padding: 10%;
		}
	}
</style>
