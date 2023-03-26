import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="uppercase text-center my-8 text-primary text-4xl">About</h1>
${$$result.head += `<!-- HEAD_svelte-1o7m2u0_START -->${$$result.title = `<title>About</title>`, ""}<!-- HEAD_svelte-1o7m2u0_END -->`, ""}
<p class="text-center text-secondary text-lg">A simple Pokemon list with <a class="hover:text-cardsColor" href="https://kit.svelte.dev/">Svelte</a>
	&amp;
	<a class="hover:text-cardsColor" href="https://tailwindcss.com/">TailWindCSS</a></p>

<p class="text-center text-secondary p-3 text-lg">Made by <a href="https://github.com/Mat12143">Mat12143</a></p>`;
});
export {
  Page as default
};
