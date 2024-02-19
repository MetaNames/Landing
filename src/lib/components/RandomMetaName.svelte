<script lang="ts">
	import {
		uniqueNamesGenerator,
		adjectives,
		colors,
		names,
		starWars
	} from 'unique-names-generator';

	let rand = Math.floor(Math.random()) + 1;
	const dictionaries = names.concat(adjectives, colors, starWars);
	const customConfig = {
		dictionaries: [shuffleArray(dictionaries)],
		separator: '-',
		length: rand
	};

	function shuffleArray<T>(arr: T[]): T[] {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}

	const generateRandomName = () => {
		rand = Math.floor(Math.random()) + 1;
		customConfig.length = rand;
		return uniqueNamesGenerator(customConfig).toLocaleLowerCase();
	};

	export let generatedName = generateRandomName();

	export const regenerate = () => {
		generatedName = generateRandomName();
	};

	$: generatedMetaName = generatedName + '.meta';
</script>

<span>{generatedMetaName}</span>
