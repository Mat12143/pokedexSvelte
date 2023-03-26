<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

	let pokemon = data.post.result;
</script>

<div class="w-full flex flex-col text-center items-center">
	<h1 class="py-10 text-primary text-4xl">{pokemon.name.toUpperCase()}</h1>
	<img class="w-60 h-60" src={pokemon.imageURL} alt={`${pokemon.name} image`} />
	<p class="text-secondary pb-10">
		Weight: {pokemon.weight} | Type: {pokemon.types[0].type.name} | Height: {pokemon.height}
	</p>
	<button class="bg-secondary text-center w-28 h-10 rounded-md"><a href="/">Home</a></button>
</div>
