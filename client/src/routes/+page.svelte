<script lang="ts">
	import { browser } from '$app/environment';
	import Empty from '$lib/Empty.svelte';
	import ViewSDKClient from '$lib/adobe';
	import { onMount } from 'svelte';

	let AdobeClient: ViewSDKClient;

	onMount(async () => {
		AdobeClient = new ViewSDKClient();
		await AdobeClient.ready();
	});

	async function loadPdf() {
		AdobeClient.createView();
		AdobeClient.registerSaveApiHandler();
		AdobeClient.previewFile();
	}
	
</script>

<div class="flex w-full h-screen">
	<div class="border-r flex flex-col flex-1">
		<h1 class="bg-red-500 font-semibold text-center text-xl p-3 text-white">Employee Data</h1>

		<button class="btn w-1/2 btn-outline my-6 mx-auto" on:click={loadPdf}>
			<iconify-icon class="text-2xl" icon="solar:import-bold-duotone" />
			<span>Load</span>
		</button>
	</div>

	<div class="flex-[5] bg-gray-50">
		<div class="h-full flex flex-col items-center justify-center" id="pdf-container">
			<Empty />
		</div>
	</div>
</div>
