async function load({ params, fetch }) {
  const id = params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();
  pokeman["imageURL"] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return {
    post: {
      result: pokeman
    }
  };
}
export {
  load
};
