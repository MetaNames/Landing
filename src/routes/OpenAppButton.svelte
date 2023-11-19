<script lang="ts">
	import Button, { Icon } from '@smui/button';

	import OpenUrlButton from './OpenUrlButton.svelte';

	import { metaNamesAppUrl } from '$lib';

	import '../styles/app.scss';

	let klass: string = '';
	export { klass as class };
	export let color: 'primary' | 'secondary' = 'primary';
	export let variant: 'text' | 'raised' | 'outlined' = 'text';
	export let path: string = '/';

	$: fullUrl = metaNamesAppUrl + path;
</script>

<OpenUrlButton
	class={klass}
	{color}
	{variant}
	url="{fullUrl}"
>
	<slot>Launch App</slot>
</OpenUrlButton>
