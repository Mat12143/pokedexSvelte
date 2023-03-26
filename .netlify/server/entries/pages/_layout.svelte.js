import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="flex w-full justify-center"><a class="mx-4 text-lg text-secondary" href="/">Home</a>
	<a class="mx-4 text-lg text-secondary" href="/about">About</a></nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="p-8 max-w-6xl mx-auto">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
