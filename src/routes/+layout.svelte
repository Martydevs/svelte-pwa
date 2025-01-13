<script lang="ts">
  import { onMount } from 'svelte';
  import { detectSWUpdate } from '../lib/utils/sw';
	import '$lib/styles/app.css';
	
	let { children } = $props();

	onMount(() => {
		detectSWUpdate();
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="w-full min-h-svh flex flex-col items-center">
	{@render children()}
</main>
