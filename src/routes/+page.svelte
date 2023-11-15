<script lang="ts">
	import OpenAppButton from './OpenAppButton.svelte';

	import RandomMetaName from './RandomMetaName.svelte';
	import Button from '@smui/button/src/Button.svelte';
	import { Icon } from '@smui/icon-button';

	import '../styles/app.scss';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import OpenUrlButton from './OpenUrlButton.svelte';

	let randomMetaName: RandomMetaName;

	let generatedName: string;

	const recordClasses = ['wallet address', 'social handles', 'website URL'];
	let recordClass: string = recordClasses[0];

	onMount(() => {
		const interval = setInterval(() => {
			recordClass = recordClasses[Math.floor(Math.random() * recordClasses.length)];
		}, 2000);

		return () => clearInterval(interval);
	});
</script>

<div class="card-primary">
	<div class="content">
		<h1 class="title">Meta Names</h1>
		<h7 class="subtitle"
			>Powered by <a
				href="https://partisiablockchain.com/"
				target="_blank"
				rel="noopener noreferrer">Partisia Blockchain</a
			></h7
		>
		<h6>
			Save your <span class="record-class">
				{#key recordClass}
					<span in:fade={{ duration: 200 }}>
						{recordClass}
					</span>
				{/key}
			</span> on your favourite web3 name
		</h6>
		<OpenAppButton color="primary" class="btn-primary-on-card" variant="outlined"
			>Register now</OpenAppButton
		>
	</div>
</div>

<div class="card-secondary">
	<div class="content">
		<h3>The only name you need</h3>
		<h6>
			Register your domain and subdomains effortlessly with <b>Meta Names</b>, the cutting-edge web3
			domain name system for
			<a href="https://partisiablockchain.com/" target="_blank" rel="noopener noreferrer"
				>Partisia Blockchain</a
			>.
			<br />
			Unlock a world of possibilities by conveniently saving various information within each domain:
			manage wallet addresses, social handles, website links, and more.
		</h6>
	</div>
</div>

<div class="card-primary">
	<div class="content">
		<h3>Generate your Meta Name</h3>
		<h6 class="card-subtitle">
			<span>What about minting</span>
			<b><RandomMetaName bind:this={randomMetaName} bind:generatedName /></b>
			<span>?</span>
		</h6>
		<p>
			<OpenAppButton
				color="primary"
				variant="outlined"
				class="btn-primary-on-card"
				path="register/{generatedName}">Register now</OpenAppButton
			>
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

<div class="card-secondary">
	<div class="content">
		<h3>Integrate with Meta Names</h3>
		<h6 class="card-subtitle">
			Our SDK is a powerful tool that allows you to integrate Meta Names into your application.
		</h6>
		<OpenUrlButton
			color="primary"
			variant="outlined"
			class="btn-primary-on-card"
			url="https://github.com/MetaNames/sdk/wiki">Learn more</OpenUrlButton
		>
	</div>
</div>

<style lang="scss">
	.content {
		max-width: 1280px;
		margin: 0 auto;
		padding: 8rem;
		text-align: center;

		@media only screen and (max-width: 600px) {
			padding: 10%;
		}
	}

	.card-subtitle {
		margin-bottom: 0.5rem;
	}

	.title {
		margin-bottom: 0.5rem;
	}

	.subtitle {
		font-size: 0.75rem;

		a {
			color: var(--mdc-theme-text-on-primary);
			text-decoration: none;
		}
	}

	.record-class {
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-weight: bold;
		background-color: var(--mdc-theme-surface);
		color: var(--mdc-theme-primary);
	}
</style>
