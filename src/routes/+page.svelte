<script lang="ts">
	import OpenAppButton from './OpenAppButton.svelte';

	import Typewriter from 'svelte-typewriter';
	import RandomMetaName from './RandomMetaName.svelte';
	import Button from '@smui/button/src/Button.svelte';
	import { Icon } from '@smui/icon-button';

	import '../styles/app.scss';

	let randomMetaName: RandomMetaName;

	let generatedName: string;
</script>

<div class="card-primary">
	<div class="content">
		<h1>Meta Names</h1>
		<Typewriter>
			<h5>The official Name System for Partisia Blockchain</h5>
		</Typewriter>
		<OpenAppButton color="primary" klass="btn-primary-on-card" variant="outlined" />
	</div>
</div>

<div class="card-secondary">
	<div class="content">
		<h2>The only name you need for seamless experiences</h2>
		<h5>
			Register your domain and subdomains effortlessly with Meta Names, the cutting-edge domain name
			system for <a href="https://partisiablockchain.com/" target="_blank" rel="noopener noreferrer"
				>Partisia Blockchain</a
			>.
			<br />
			Unlock a world of possibilities by conveniently saving various information within each domain:
			manage wallet addresses, social handles, website links, and more.
		</h5>
	</div>
</div>

<div class="card-primary">
	<div class="content">
		<h2>Generate your name</h2>
		<p>
			<span>What about</span>
			<b><RandomMetaName bind:this={randomMetaName} bind:generatedName /></b>
			<span>?</span>
		</p>
		<p>
			<OpenAppButton
				color="primary"
				variant="outlined"
				klass="btn-primary-on-card"
				label="Register name"
				path="register/{generatedName}"
			/>
			<Button
				class="btn-primary-on-card"
				color="primary"
				variant="outlined"
				on:click={() => randomMetaName.regenerate()}
			>
				<Icon class="material-icons">refresh</Icon>
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
</style>
