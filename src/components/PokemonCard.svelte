<script lang="ts">
	export let pokemonData: any;
</script>

<a href={`/pokemon/${pokemonData.id}`}>
	<div class="bg-cardsColor rounded-md shadow-sm hover:shadow-lg flex flex-col items-center p-6">
		<h1 class="uppercase font-semibold text-background text-xl">{pokemonData.name}</h1>
		<img class="w-40 h-40" src={pokemonData.imageURL} alt="{pokemonData.name} image" />
	</div>
</a>
