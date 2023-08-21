<script lang="ts">
	import Button, { Icon } from '@smui/button';

	import { metaNamesUrl} from '$lib';

	import '../styles/app.scss';

	export let klass: string = '';
	export let color: 'primary' | 'secondary' = 'primary';
	export let variant: 'text' | 'raised' | 'outlined' = 'text';

	const iconClasses = variant === 'text' ? ' icon-on-primary' : '';
</script>

<Button class={klass} {color} {variant} href="{metaNamesUrl}" target="_blank">
	<Icon class="material-icons {iconClasses}">open_in_new</Icon>
	Open App
</Button>
