<script lang="ts">
	export let type: 'primary' | 'secondary' = 'primary';
	export let color: 'primary' | 'secondary' = type;

	color = color || type;
</script>

<div class="card-{color}">
	<div class="content content-{type}">
		<slot />
	</div>
</div>

<style lang="scss">
	.content {
		max-width: 1280px;
		margin: 0 auto;
		text-align: center;

		@media only screen and (max-width: 600px) {
			&.content-primary {
				padding: 3rem 2rem !important;
			}
			&.content-secondary {
				padding: 2rem 2rem !important;
			}
		}

		&.content-primary {
			padding: 6rem 4rem;
		}
		&.content-secondary {
			padding: 2rem 4rem;
		}
	}
</style>
