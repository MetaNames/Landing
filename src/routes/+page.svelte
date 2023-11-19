<script lang="ts">
	import OpenAppButton from './OpenAppButton.svelte';

	import RandomMetaName from './RandomMetaName.svelte';
	import Button from '@smui/button/src/Button.svelte';
	import { Icon } from '@smui/icon-button';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import OpenUrlButton from './OpenUrlButton.svelte';
	import Card from './Card.svelte';

	let randomMetaName: RandomMetaName;

	let generatedName: string;

	const recordClasses = ['wallet address', 'social handles', 'website URL', 'bio', 'avatar'];
	let recordClass: string = recordClasses[0];

	onMount(() => {
		const interval = setInterval(() => {
			recordClass = recordClasses[Math.floor(Math.random() * recordClasses.length)];
		}, 2000);

		return () => clearInterval(interval);
	});
</script>

<Card>
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
</Card>

<Card type="secondary">
	<div class="box container">
		<div class="box">
			Supported by
			<div class="box-content right">
				<a
					class="partisia"
					href="https://partisiablockchain.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/images/partisia-logo.svg" alt="Partisia Blockchain" />
				</a>
			</div>
		</div>
		<div class="box">
			<div class="box-content left">SOON</div>
			Meta Names Registered
		</div>
		<div class="box">
			<div class="box-content left">SOON</div>
			Unique Wallets
		</div>
	</div>
</Card>

<Card type="secondary">
	<h3>The only <span class="purple">name</span> you need</h3>
	<h6>
		Register your domain and subdomains effortlessly with <b>Meta Names</b>, the cutting-edge web3
		domain name system for
		<a href="https://partisiablockchain.com/" target="_blank" rel="noopener noreferrer"
			>Partisia Blockchain</a
		>.
		<br />
		Unlock a world of possibilities by conveniently saving various information within each domain: manage
		wallet addresses, social handles, website links, and more.
	</h6>
</Card>

<Card type="secondary">
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
</Card>

<Card type="secondary">
	<h3>Integrate with <span class="purple">Meta Names</span></h3>
	<h6 class="card-subtitle">
		Our SDK is a powerful tool that allows you to integrate Meta Names into your application.
	</h6>
	<OpenUrlButton
		color="primary"
		variant="outlined"
		class="btn-primary-on-card"
		url="https://github.com/MetaNames/sdk/wiki">Learn more</OpenUrlButton
	>
</Card>

<style lang="scss">
	@use '../theme/colors.scss';

	h3 {
		font-weight: bold;
	}

	.box,
	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		margin: 0 0.5rem;

		.box {
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding: 1rem;
			border: 1px solid var(--mdc-theme-primary);
			color: grey;
			border-radius: 0.5rem;
			font-size: small;

			.box-content {
				display: flex;
				justify-content: center;
				color: var(--mdc-theme-primary);
				font-size: larger;
				font-weight: 900;

				&.left {
					margin-right: 0.5rem;
				}

				&.right {
					margin-left: 0.5rem;
				}
			}
		}
	}

	.card-subtitle {
		margin-bottom: 1rem;
	}

	.partisia {
		display: flex;
		justify-content: center;

		img {
			height: auto;
			width: 130pt;
		}
	}

	.purple {
		color: var(--mdc-theme-primary);
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

	a {
		text-decoration: none;
	}

	.record-class {
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-weight: bold;
		background-color: colors.$light-surface;
		color: var(--mdc-theme-primary);
	}
</style>
