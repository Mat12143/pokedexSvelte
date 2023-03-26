<script lang="ts">
	import PokemonCard from '../components/PokemonCard.svelte';
	import { pokemonList } from '../stores/pokestore';

	let shownPokemon = $pokemonList;
	let searchText = '';

	$: {
		if (searchText) {
			searchText = searchText.toLowerCase();

			shownPokemon = $pokemonList.filter((pokemon: any) => {
				return pokemon.name.toLowerCase().includes(searchText);
			});
		} else {
			shownPokemon = $pokemonList;
		}
	}
</script>

<svelte:head><title>Svelte PokeDex</title></svelte:head>

<h1 class="uppercase text-center my-8 text-primary text-4xl">Svelte Pokedex</h1>
<div class="w-full flex justify-center py-3">
	<input
		class="border-secondary rounded-md focus:outline-none h-9 text-center text-md bg-background text-secondary w-full md:w-1/2"
		type="text"
		name="search"
		style="border-width: 1px;"
		placeholder="Search a Pokemon"
		bind:value={searchText}
		autofocus
	/>
</div>
<div class="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
	{#each shownPokemon as pokemonData}
		<PokemonCard {pokemonData} />
	{/each}
</div>
