import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let pokemon = data.post.result;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="w-full flex flex-col text-center items-center"><h1 class="py-10 text-primary text-4xl">${escape(pokemon.name.toUpperCase())}</h1>
	<img class="w-60 h-60"${add_attribute("src", pokemon.imageURL, 0)}${add_attribute("alt", `${pokemon.name} image`, 0)}>
	<p class="text-secondary pb-10">Weight: ${escape(pokemon.weight)} | Type: ${escape(pokemon.types[0].type.name)} | Height: ${escape(pokemon.height)}</p>
	<button class="bg-secondary text-center w-28 h-10 rounded-md"><a href="/">Home</a></button></div>`;
});
export {
  Page as default
};
