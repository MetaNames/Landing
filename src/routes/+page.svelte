<script lang="ts">
	import { metaNamesAppUrl } from '$lib';
	import Marqueeck from '@arisbh/marqueeck';
	import { formatDistanceToNow } from 'date-fns';
	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import partisiaLogo from '$lib/assets/images/partisia-logo.png';

	import Button from '@smui/button/src/Button.svelte';
	import Card, { PrimaryAction } from '@smui/card';
	import { Icon } from '@smui/icon-button';
	import Counter from '../lib/components/Counter.svelte';
	import OpenAppButton from '../lib/components/OpenAppButton.svelte';
	import OpenUrlButton from '../lib/components/OpenUrlButton.svelte';
	import RandomMetaName from '../lib/components/RandomMetaName.svelte';
	import Section from '../lib/components/Section.svelte';

	let randomMetaName: RandomMetaName;
	let generatedName: string;
	let interval: NodeJS.Timeout;

	const stats = writable({
		domainCount: 0,
		ownerCount: 0,
		recentDomains: [{ name: 'name', createdAt: '2024/02/01' }]
	});
	const recordClasses = ['wallet address', 'social handles', 'website URL', 'bio', 'avatar'];
	let recordClass: string = recordClasses[0];

	onMount(async () => {
		interval = setInterval(() => {
			recordClass = recordClasses[Math.floor(Math.random() * recordClasses.length)];
		}, 2000);

		await fetch('/api/stats').then(async (res) => {
			const data = await res.json();
			stats.set(data);
		});
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	function formatCreatedAt(date: string) {
		const parsed = new Date(date);
		return formatDistanceToNow(parsed, { addSuffix: true });
	}
</script>

<Section>
	<h1 class="title">META NAMES</h1>
	<h7 class="subtitle"
		>Powered by <a class="no-decoration" href="https://partisiablockchain.com/" target="_blank" rel="noopener noreferrer"
			>Partisia Blockchain</a
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
</Section>

<Section type="secondary">
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
					<img src={partisiaLogo} alt="Partisia Blockchain" />
				</a>
			</div>
		</div>
		<div class="box">
			<div class="box-content left">
				{#if $stats.domainCount > 0}
					<Counter count={$stats.domainCount} />
				{:else}
					<div class="placeholder" />
				{/if}
			</div>
			Meta Names Registered
		</div>
		<div class="box">
			<div class="box-content left" >
				{#if $stats.ownerCount > 0}
					<Counter count={$stats.ownerCount} />
				{:else}
					<div class="placeholder" />
				{/if}
			</div>
			Unique Wallets
		</div>
	</div>
</Section>

<Section type="primary" color="secondary">
	<h3 class="mt-0">The only name you need</h3>
	<p>
		Register your domain and subdomains effortlessly with <b>Meta Names</b>, the cutting-edge web3
		domain name system for
		<a href="https://partisiablockchain.com/" target="_blank" rel="noopener noreferrer"
			>Partisia Blockchain</a
		>.
	</p>
	<p>
		Create your unique Meta Names profile using your personal domain, allowing you to store and
		manage a wide array of information all in one place.
	</p>
	<p>
		With Meta Names, you can effortlessly organize your wallet addresses, social media handles
		(including Discord and Twitter), website links, and much more under your unique domain.
	</p>
</Section>

<Section type="secondary" color="primary">
	<h3>Recently registered domains</h3>
	<p>Check out the freshest domains just claimed on Meta Names!</p>
	<p>
		Did you just register a domain? Brag your new Meta Name in our <a
			href="https://t.me/mpc_metanames"
			target="_blank"
			rel="noopener noreferrer">community channel</a
		>
	</p>
	<div class="recent-domains">
		<div class="content">
			<Marqueeck>
				{#each $stats.recentDomains as domain (domain.name)}
					<Card class="domain" variant="outlined">
						<PrimaryAction
							on:click={() => window.open(`${metaNamesAppUrl}/domain/${domain.name}`, '_blank')}
							padded
						>
							<span class="domain-name">{domain.name}</span>
							<span class="domain-date">{formatCreatedAt(domain.createdAt)}</span>
						</PrimaryAction>
					</Card>
				{/each}
			</Marqueeck>
		</div>
	</div>
</Section>
<Section type="secondary" color="secondary">
	<h3>Generate your Meta Name</h3>
	<p>
		Running low on ideas? No worries, we've got your back!
		<br />
		How about snagging the following domain?
	</p>
	<p>
		<b><RandomMetaName bind:this={randomMetaName} bind:generatedName /></b>
	</p>
	<div class="generate-buttons">
		<OpenAppButton color="primary" variant="raised" class="mb-1" path="/register/{generatedName}"
			>Register now</OpenAppButton
		>
		<Button
			class="mb-1"
			color="primary"
			variant="raised"
			on:click={() => randomMetaName.regenerate()}
		>
			<Icon class="material-icons">refresh</Icon>
			Regenerate
		</Button>
	</div>
</Section>

<Section type="primary" color="primary">
	<h3>Integrate with Meta Names SDK</h3>
	<p>
		Discover the ease of web3 domain management with <b>Meta Names SDK</b> for Partisia Blockchain.
		<br />
		Our platform offers simple domain and subdomain registration, versatile information embedding, and
		a developer-friendly toolkit.
		<br />
		<a href="https://t.me/mpc_metanames" target="_blank" rel="noopener noreferrrer"
			>Join our supportive community</a
		>, access detailed documentation, and transform your applications with the power of Meta Names.
		<br />
		Your journey into the future of web3 starts here.
	</p>
	<OpenUrlButton
		color="primary"
		variant="outlined"
		class="btn-primary-on-card"
		url="https://github.com/MetaNames/sdk/wiki">Learn more</OpenUrlButton
	>
</Section>

<style lang="scss">
	@use '../theme/colors.scss';

	h1 {
		font-size: 50pt;
		font-weight: 500;
	}

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

		@media only screen and (max-width: 768px) {
			flex-direction: column;
		}

		.box {
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding: 1rem;
			background-color: var(--mdc-theme-primary);
			color: var(--mdc-theme-on-primary);
			border-radius: 0.5rem;
			font-size: small;

			@media only screen and (max-width: 768px) {
				margin-bottom: 1rem;
				width: 100%;
			}

			.box-content {
				display: flex;
				justify-content: center;
				color: var(--mdc-theme-on-primary);
				font-size: larger;
				font-weight: bolder;
				padding: 0 0.5rem;

				&.left {
					min-height: 1rem;
					min-width: 2rem;
					margin-right: 0.5rem;
				}

				&.right {
					margin-left: 0.5rem;
				}
			}
		}
	}

	.generate-buttons {
		@media only screen and (max-width: 768px) {
			display: flex;
			justify-content: space-evenly;
			flex-direction: column;
		}
	}

	.partisia {
		display: flex;
		justify-content: center;

		img {
			height: auto;
			width: 130pt;
		}
	}

	.recent-domains {
		margin-top: 4rem;

		.content {
			overflow-x: hidden;

			:global(.domain) {
				margin-right: 1rem;
				user-select: none;
			}

			.domain-name {
				font-weight: bold;
				margin-bottom: 0.5rem;
				overflow-x: visible;
			}

			.domain-date {
				font-size: 0.8rem;
				opacity: 0.7;
			}
		}
	}

	.title {
		margin-bottom: 0.5rem;
	}

	.subtitle {
		font-size: 0.75rem;
	}

	a {
		color: var(--mdc-theme-text-on-primary);
		font-weight: bold;

		&.no-decoration {
			text-decoration: none;
		}

		&:visited {
			color: var(--mdc-theme-text-secondary-on-dark);
		}
	}

	.record-class {
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-weight: bold;
		background-color: colors.$light-surface;
		color: var(--mdc-theme-primary);

		white-space: nowrap;
	}

	p {
		font-size: x-large;
		line-height: 32pt;
		font-weight: 400;
	}
</style>
