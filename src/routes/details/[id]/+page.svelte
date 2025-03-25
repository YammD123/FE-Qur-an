<script lang="ts">
	import { page } from '$app/state';
	let id = page.params.id;
	import { PUBLIC_API_URL } from '$env/static/public';
	import * as Card from '$lib/components/ui/card/index.js';
	import { onMount } from 'svelte';
	export let data;
	import { Pause, Play, List, MapPin, ArrowLeft } from '@lucide/svelte';
	import { Button } from "$lib/components/ui/button/index.js";
	import { goto } from '$app/navigation';

	let isPlaying = false;
	let audioRef: HTMLAudioElement;

	function AudioToggle() {
		if (audioRef) {
			if (isPlaying) {
				audioRef.pause();
			} else {
				audioRef.play();
			}
			isPlaying = !isPlaying;
		}
	}

	let audioRefs: HTMLAudioElement[] = [];
	let playingIndex: number | null = null;

	function AudioToggle2(index: number) {
		if (playingIndex !== null && playingIndex !== index) {
			audioRefs[playingIndex]?.pause();
		}

		if (audioRefs[index].paused) {
			audioRefs[index].play();
			playingIndex = index;
		} else {
			audioRefs[index].pause();
			playingIndex = null;
		}
	}

    function goBack(){
        goto('/')
    }
</script>
<main class="px-4 sm:px-16 pt-8">
    <Button variant="ghost" class="flex items-center gap-2 mb-4" onclick={goBack}>
        <ArrowLeft size={20} /> Kembali
    </Button>
	<div class="border rounded-sm border-solid border-slate-400">
		<Card.Root class="p-4 shadow-lg w-full">
			<h1 class="text-2xl sm:text-xl font-semibold">{data.surats.data.namaLatin} - {data.surats.data.nama}</h1>
			<div class="flex flex-wrap items-center justify-between gap-4">
				<div class="flex flex-wrap gap-5">
					<h1 class="flex gap-2 text-balance text-sm sm:text-base">
						<List size={20} class="mt-1" /> jumlah ayat:
						<span class="font-semibold">{data.surats.data.jumlahAyat}</span>
					</h1>
					<p class="flex gap-2 text-balance italic text-sm sm:text-base">
						<MapPin /> tempat turun:
						<span class="font-semibold">{data.surats.data.tempatTurun}</span>
					</p>
				</div>
				<audio bind:this={audioRef} src={data.surats.data.audioFull['01']}></audio>
				<Button class="rounded-full bg-black" onclick={AudioToggle}>
					{#if isPlaying}
						<Pause class="text-white" size={20} />
					{:else}
						<Play class="text-white" size={20} />
					{/if}
				</Button>
			</div>
			<p class="mt-3"><span class="font-semibold">Deskripsi :</span> {@html data.surats.data.deskripsi}</p>
		</Card.Root>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20">
		{#each data.surats.data.ayat as surat, index}
		<div class="w-full">
			<div class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border">
				<div class="flex justify-between items-center mb-2">
					<span class="text-gray-600 dark:text-gray-400 text-sm">{surat.nomorAyat}</span>
					<p class="arab text-right text-2xl sm:text-xl font-bold text-gray-800 dark:text-white">{surat.teksArab}</p>
				</div>
				<p class="text-gray-500 dark:text-gray-300 text-sm italic">{@html surat.teksLatin}</p>
				<p class="mt-2 text-gray-700 dark:text-gray-200">{surat.teksIndonesia}</p>
				<audio bind:this={audioRefs[index]} src={surat.audio['02']}></audio>
				<Button class="mt-4" variant={'ghost'} onclick={() => AudioToggle2(index)}>
					{#if playingIndex === index}
						<Pause size={20} />
					{:else}
						<Play size={20} />
					{/if}
				</Button>
			</div>
		</div>
		{/each}
	</div>
</main>
