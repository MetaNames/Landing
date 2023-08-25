<script lang="ts">
	import Section from '@smui/top-app-bar/src/Section.svelte';
	import TopAppBar, { AutoAdjust, Row, Title } from '@smui/top-app-bar';

	import OpenAppButton from './OpenAppButton.svelte';
	import Footer from './Footer.svelte';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<Title>
				<a class="home" href="/">Meta Names</a>
			</Title>
		</Section>

		<Section>
			<slot name="quick-links" />
		</Section>

		<Section align="end" toolbar>
			<OpenAppButton color="secondary" />
		</Section>
	</Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
	<slot />
	<Footer />
</AutoAdjust>

<style>
	.home {
		color: var(--mdc-theme-on-primary);
		text-decoration: none;
	}
</style>
