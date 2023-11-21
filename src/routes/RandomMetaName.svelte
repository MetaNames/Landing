<script lang="ts">
	import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

	let rand = Math.floor(Math.random()) + 1;
	const customConfig = {
		dictionaries: [adjectives, colors, animals],
		separator: '-',
		length: rand
	};
	const generateRandomName = () => {
		rand = Math.floor(Math.random()) + 1;
		customConfig.length = rand;
		return uniqueNamesGenerator(customConfig);
	};

	export let generatedName = generateRandomName();

	export const regenerate = () => {
		generatedName = generateRandomName();
	};

	$: generatedMetaName = generatedName + '.meta';
</script>

<span>{generatedMetaName}</span>
