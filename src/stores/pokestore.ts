import { writable } from 'svelte/store';

export const pokemonList = writable([]);

const fetchPokemon = async (limit: number) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
	const response = await fetch(url);
	const data = await response.json();
	const loadedPokemon = data.results.map((data: { name: string }, index: any) => {
		return {
			name: data.name,
			id: index + 1,
			imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

	pokemonList.set(loadedPokemon);
};

fetchPokemon(150);
