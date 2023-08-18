<script lang="ts">
	import Button, { Icon } from '@smui/button';

	import '../styles/app.scss';

	export let color: 'primary' | 'secondary' = 'primary';
	export let variant: 'text' | 'raised' = 'text';
</script>

<Button {color} {variant} href="https://app.metanames.io" target="_blank">
	<Icon class="material-icons icon-on-primary">open_in_new</Icon>
	Open App
</Button>
