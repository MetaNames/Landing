<script lang="ts">
	import OpenUrlButton from './OpenUrlButton.svelte';

	import { metaNamesAppUrl } from '$lib';

	let klass: string = '';
	export { klass as class };
	export let color: 'primary' | 'secondary' = 'primary';
	export let variant: 'text' | 'raised' | 'outlined' = 'text';
	export let path: string = '/';

	$: fullUrl = metaNamesAppUrl.replace(/\/$/, '') + path;
</script>

<OpenUrlButton
	class={klass}
	{color}
	{variant}
	url="{fullUrl}"
>
	<slot>Launch App</slot>
</OpenUrlButton>
