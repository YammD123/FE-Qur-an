<script>
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';

	injectAnalytics()
</script>

<svelte:head>
	<title> Al quran - Baca Al Quran Seacara Online</title>
	<meta name="description" content="Baca Al-Qur'an online lengkap dengan terjemahan, tajwid, dan audio. Nikmati kemudahan membaca dan memahami ayat-ayat suci Al-Qur'an di mana saja dan kapan saja." />
	<link rel="icon" type="image/png" href="favicon.png" />
	<meta name="keywords" content="Al-Qur'an online, baca Al-Qur'an, terjemahan Al-Qur'an, tafsir Al-Qur'an, Quran digital, mushaf online, ayat Al-Qur'an, Quran dengan audio, Al-Qur'an dengan tajwid, Quran bahasa Indonesia" />

	<meta property="og:title" content="Baca Al-Qur'an Online | Quran Digital dengan Terjemahan & Tajwid" />
	<meta property="og:description" content="Baca Al-Qur'an online dengan terjemahan dan tajwid. Dengarkan audio dan pahami ayat suci di mana saja." />
	<meta property="og:image" content="Banner.png" />
	<meta property="og:url" content="https://yammd-al-quran.vercel.app/" />
	<meta property="og:type" content="website" />
</svelte:head>

<nav>
	<Navbar />
	<slot />
</nav>
