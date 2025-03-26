<script>
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<nav>
	<Navbar />
	<slot></slot>
</nav>
