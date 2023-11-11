<script lang="ts">
	import Section from '@smui/top-app-bar/src/Section.svelte';
	import TopAppBar, { AutoAdjust, Row, Title } from '@smui/top-app-bar';

	import OpenAppButton from './OpenAppButton.svelte';
	import Footer from './Footer.svelte';
	import Logo from './Logo.svelte';

	let topAppBar: TopAppBar;
</script>

<svelte:head>
	<title>Meta Names</title>
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<Title>
				<a class="home" href="/">
					<Logo />
					<span>Meta Names</span>
				</a>
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
