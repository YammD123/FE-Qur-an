<script>
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';

	injectAnalytics()
</script>

<nav>
	<Navbar />
	<slot />
</nav>
