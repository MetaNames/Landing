<script lang="ts">
	import OpenAppButton from './OpenAppButton.svelte';

	import Typewriter from 'svelte-typewriter';
	import RandomMetaName from './RandomMetaName.svelte';
	import Button from '@smui/button/src/Button.svelte';
	import { Icon } from '@smui/icon-button';

	import '../styles/app.scss';

	let randomMetaName: RandomMetaName;
</script>

<div class="hero-primary">
	<div class="content">
		<h2>The official Name System for Partisia Blockchain</h2>
		<Typewriter>
			<h5>The decentralised naming system for wallets, social, websites, and more!</h5>
		</Typewriter>
		<OpenAppButton color="primary" klass="btn-primary-on-hero" variant="outlined" />
	</div>
</div>
<div class="hero-secondary">
	<div class="content">
		<h2>Generate your name</h2>
		<p>
			<span>What about</span>
			<b><RandomMetaName bind:this={randomMetaName} /></b>
			<span>?</span>
		</p>
		<p>
			<OpenAppButton color="secondary" variant="raised" />
			<Button color="secondary" variant="raised" on:click={() => randomMetaName.regenerate()}>
				<Icon class="material-icons icon-on-primary">refresh</Icon>
				Regenerate
			</Button>
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
