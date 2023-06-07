import { c as create_ssr_component, v as validate_component } from './index-0aa569f6.js';

const Empty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center justify-center"><img src="/empty.png" class="w-80" alt="Please load file.">
	<span class="text-xl italic text-gray-400">No file loaded yet...</span></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full h-screen"><div class="border-r flex flex-col flex-1"><h1 class="bg-red-500 font-semibold text-center text-xl p-3 text-white">Employee Data</h1>

		<button class="btn w-1/2 btn-outline my-6 mx-auto"><iconify-icon class="text-2xl" icon="solar:import-bold-duotone"></iconify-icon>
			<span>Load</span></button></div>

	<div class="flex-[5] bg-gray-50"><div class="h-full flex flex-col items-center justify-center" id="pdf-container">${validate_component(Empty, "Empty").$$render($$result, {}, {}, {})}</div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-322b2ea4.js.map
