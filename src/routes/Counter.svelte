<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { quintOut } from 'svelte/easing'
  import { derived } from 'svelte/store'
	import { onMount } from 'svelte';

	export let count: number = 0;

  let countTweened = tweened(0, { duration: 2000, easing: quintOut })
  let formatted = derived(countTweened, ($countTweened) => $countTweened.toFixed())

  onMount(() => countTweened.set(count))
</script>

<span>{$formatted}</span>
