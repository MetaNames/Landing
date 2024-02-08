<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Carousel from 'svelte-carousel';

	import Button from '@smui/button/src/Button.svelte';
	import { Icon } from '@smui/icon-button';
	import Card, { PrimaryAction } from '@smui/card';

	import OpenAppButton from './OpenAppButton.svelte';
	import RandomMetaName from './RandomMetaName.svelte';
	import OpenUrlButton from './OpenUrlButton.svelte';
	import Section from './Section.svelte';
	import type { PageData } from './$types';
	import Counter from './Counter.svelte';
	import { browser } from '$app/environment';
	import { formatDistanceToNow } from 'date-fns';
	import { metaNamesAppUrl } from '$lib';
	import { goto } from '$app/navigation';

	export let data: PageData;

	let randomMetaName: RandomMetaName;
	let generatedName: string;
	let innerWidth: number = browser ? window.innerWidth : 0;

	const recordClasses = ['wallet address', 'social handles', 'website URL', 'bio', 'avatar'];
	let recordClass: string = recordClasses[0];

	$: isDesktop = innerWidth > 768;

	if (browser) {
		window.addEventListener('resize', () => {
			innerWidth = window.innerWidth;
		});
	}

	onMount(() => {
		const interval = setInterval(() => {
			recordClass = recordClasses[Math.floor(Math.random() * recordClasses.length)];
		}, 2000);

		return () => clearInterval(interval);
	});

	function formatCreatedAt(date: Date) {
		return formatDistanceToNow(date, { addSuffix: true });
	}
</script>

<Section>
	<h1 class="title">META NAMES</h1>
	<h7 class="subtitle"
		>Powered by <a href="https://partisiablockchain.com/" target="_blank" rel="noopener noreferrer"
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
					<img src="/images/partisia-logo.svg" alt="Partisia Blockchain" />
				</a>
			</div>
		</div>
		<div class="box">
			<div class="box-content left"><Counter count={data.domainCount} /></div>
			Meta Names Registered
		</div>
		<div class="box">
			<div class="box-content left"><Counter count={data.ownerCount} /></div>
			Unique Wallets
		</div>
	</div>
</Section>

<Section type="primary" color="secondary">
	<h3 class="mt-0">The only <span class="purple">name</span> you need</h3>
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
	<div class="recent-domains">
		<div class="content">
			<Carousel
				autoplayDuration={0}
				particlesToShow={isDesktop ? 3 : 2}
				duration={8000}
				autoplay
				timingFunction="linear"
				dots={false}
				arrows={false}
			>
				{#each data.recentDomains as domain (domain.name)}
					<Card class="domain" variant="outlined">
						<PrimaryAction on:click={() => window.open(`${metaNamesAppUrl}/domain/${domain.name}`, '_blank')} padded>
							<span class="domain-name">{domain.name}</span>
							<span class="domain-date">{formatCreatedAt(domain.createdAt)}</span>
						</PrimaryAction>
					</Card>
				{/each}
			</Carousel>
		</div>
	</div>
</Section>

<Section type="secondary" color="primary">
	<h3>Generate your Meta Name</h3>
	<h6 class="card-subtitle">
		<span>What about minting</span>
		<b><RandomMetaName bind:this={randomMetaName} bind:generatedName /></b>
		<span>?</span>
	</h6>
	<div class="generate-buttons">
		<OpenAppButton
			color="primary"
			variant="outlined"
			class="btn-primary-on-card mb-1"
			path="/register/{generatedName}">Register now</OpenAppButton
		>
		<Button
			class="btn-primary-on-card mb-1"
			color="primary"
			variant="outlined"
			on:click={() => randomMetaName.regenerate()}
		>
			<Icon class="material-icons">refresh</Icon>
			Regenerate
		</Button>
	</div>
</Section>

<Section type="primary" color="secondary">
	<h3>Integrate with <span class="purple">Meta Names SDK</span></h3>
	<h6 class="card-subtitle">
		Discover the ease of web3 domain management with <b>Meta Names SDK</b> for
		<a href="https://partisiablockchain.com/" target="_blank" rel="noopener noreferrer"
			>Partisia Blockchain</a
		>.
		<br />
		Our platform offers simple domain and subdomain registration, versatile information embedding, and
		a developer-friendly toolkit.
		<br />
		<a href="https://t.me/mpc_metanames" target="_blank" rel="noopener noreferrrer"
			>Join our supportive community</a
		>, access detailed documentation, and transform your applications with the power of Meta Names.
		<br />
		Your journey into the future of web3 starts here.
	</h6>
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

		@media only screen and (max-width: 600px) {
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

			@media only screen and (max-width: 600px) {
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

	.generate-buttons {
		@media only screen and (max-width: 600px) {
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
			color: var(--mdc-theme-on-primary);
			:global(.domain) {
				margin-right: 1rem;
				user-select: none;
				background-color: var(--mdc-theme-primary);
			}

			:global(.domain-name) {
				font-weight: bold;
				margin-bottom: 0.5rem;
				overflow-x: visible;
			}

			:global(.domain-date) {
				font-size: 0.8rem;
				opacity: 0.7;
			}
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

		white-space: nowrap;
	}
</style>
