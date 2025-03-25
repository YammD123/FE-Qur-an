<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Header from '../components/Header.svelte';
	import { Search } from '@lucide/svelte';
  export let data;
 console.log(data.surats)

 let searchSuratQ = '';
  let filteredSurat = data.surats.data;

	$: filteredSurat = data.surats.data.filter((surat: any) =>
		surat.namaLatin.toLowerCase().includes(searchSuratQ.toLowerCase()) ||
		surat.nama.toLowerCase().includes(searchSuratQ.toLowerCase())
	);


</script>




<Header />
<main class="flex flex-col items-center justify-center gap-6">
  <div class="relative gap-2 w-full flex justify-center">
    <Input
      type="text"
      bind:value={searchSuratQ}
      placeholder="Ayo mengaji............."
      class="mt-7 w-1/2 border-2 border-solid outline-none focus:border-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0"
    />
    <Search  size="30" class="mt-8 text-black/65"/>
  </div>
  <div class="grid w-full max-w-5xl grid-cols-1 sm:grid-cols-2 gap-4">
    {#each filteredSurat as surat}
      <a href={`/details/${surat.nomor}`}>
        <Card.Root class="flex w-full justify-between rounded-lg border p-4 shadow-lg">
          <div>
            <h1 class="text-sm text-gray-500">{surat.nomor}.</h1>
            <Card.Title class="text-base">
              {surat.namaLatin} ({surat.jumlahAyat})
            </Card.Title>
            <Card.Description class="italic text-gray-500">{surat.arti}</Card.Description>
          </div>
          <div class="arab text-3xl">{surat.nama}</div>
        </Card.Root>
      </a>
    {/each}
  </div>
</main>
