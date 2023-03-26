import { c as create_ssr_component, b as add_attribute, e as escape, a as subscribe, d as each, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const PokemonCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokemonData } = $$props;
  if ($$props.pokemonData === void 0 && $$bindings.pokemonData && pokemonData !== void 0)
    $$bindings.pokemonData(pokemonData);
  return `<a${add_attribute("href", `/pokemon/${pokemonData.id}`, 0)}><div class="bg-cardsColor rounded-md shadow-sm hover:shadow-lg flex flex-col items-center p-6"><h1 class="uppercase font-semibold text-background text-xl">${escape(pokemonData.name)}</h1>
		<img class="w-40 h-40"${add_attribute("src", pokemonData.imageURL, 0)} alt="${escape(pokemonData.name, true) + " image"}"></div></a>`;
});
const pokemonList = writable([]);
const fetchPokemon = async (limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const response = await fetch(url);
  const data = await response.json();
  const loadedPokemon = data.results.map((data2, index) => {
    return {
      name: data2.name,
      id: index + 1,
      imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    };
  });
  pokemonList.set(loadedPokemon);
};
fetchPokemon(150);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pokemonList, $$unsubscribe_pokemonList;
  $$unsubscribe_pokemonList = subscribe(pokemonList, (value) => $pokemonList = value);
  let shownPokemon = $pokemonList;
  let searchText = "";
  {
    {
      {
        shownPokemon = $pokemonList;
      }
    }
  }
  $$unsubscribe_pokemonList();
  return `${$$result.head += `<!-- HEAD_svelte-1pwqrhe_START -->${$$result.title = `<title>Svelte PokeDex</title>`, ""}<!-- HEAD_svelte-1pwqrhe_END -->`, ""}

<h1 class="uppercase text-center my-8 text-primary text-4xl">Svelte Pokedex</h1>
<div class="w-full flex justify-center py-3"><input class="border-secondary rounded-md focus:outline-none h-9 text-center text-md bg-background text-secondary w-full md:w-1/2" type="text" name="search" style="border-width: 1px;" placeholder="Search a Pokemon" autofocus${add_attribute("value", searchText, 0)}></div>
<div class="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">${each(shownPokemon, (pokemonData) => {
    return `${validate_component(PokemonCard, "PokemonCard").$$render($$result, { pokemonData }, {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};
