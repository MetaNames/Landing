<script lang="ts">
	import Button, { Icon } from '@smui/button';

	import { metaNamesAppUrl } from '$lib';

	import '../styles/app.scss';

	export let klass: string = '';
	export let color: 'primary' | 'secondary' = 'primary';
	export let variant: 'text' | 'raised' | 'outlined' = 'text';
	export let label: string = 'Open App';
	export let path: string = '/';

	const iconClasses = variant === 'text' ? ' icon-on-primary' : '';

	$: fullUrl = metaNamesAppUrl + path;
</script>

<Button class={klass} {color} {variant} href="{fullUrl}" target="_blank">
	<Icon class="material-icons {iconClasses}">open_in_new</Icon>
	{label}
</Button>
