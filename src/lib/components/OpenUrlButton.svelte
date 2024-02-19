<script lang="ts">
	import Button, { Icon } from '@smui/button';

	let klass: string = '';
	export { klass as class };
	export let color: 'primary' | 'secondary' = 'primary';
	export let variant: 'text' | 'raised' | 'outlined' = 'text';
	export let url: string = '';

	const iconClasses = variant === 'text' ? ' icon-on-primary' : '';
</script>

<Button class={klass} {color} {variant} href={url} target="_blank">
	<Icon class="material-icons {iconClasses}">open_in_new</Icon>
	<slot />
</Button>
