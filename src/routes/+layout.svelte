<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import Section from '@smui/top-app-bar/src/Section.svelte';
	import TopAppBar, { Row, Title } from '@smui/top-app-bar';

	import OpenAppButton from './OpenAppButton.svelte';
	import Footer from './Footer.svelte';
	import Logo from './Logo.svelte';

	import 'material-icons/iconfont/filled.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Meta Names</title>
</svelte:head>

<TopAppBar variant="fixed">
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
			<OpenAppButton color="primary" class="btn-primary-on-card" variant="outlined" />
		</Section>
	</Row>
</TopAppBar>

<slot />
<Footer />

<style>
	.home {
		display: flex;
		flex-direction: row;
		align-items: center;

		text-decoration: none;
		color: inherit;
	}
</style>
