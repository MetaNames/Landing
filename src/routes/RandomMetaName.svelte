<script lang="ts">
	import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

	// Generate number between 1 and 3
	let rand = Math.floor(Math.random() * 3) + 1;
	const customConfig = {
		dictionaries: [adjectives, colors, animals],
		separator: '-',
		length: rand
	};
	const generateRandomName = () => {
		rand = Math.floor(Math.random() * 3) + 1;
		customConfig.length = rand;
		return uniqueNamesGenerator(customConfig);
	};

	let generatedName = generateRandomName();

	export const regenerate = () => {
		generatedName = generateRandomName();
	};

	$: generatedMetaName = generatedName + '.meta';
</script>

<span>{generatedMetaName}</span>
