<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/state";
  import { detectSWUpdate } from "$lib/utils/sw";
  import Navbar from "$lib/components/Navbar.svelte";

  import "$lib/styles/app.css";

  let { children } = $props();

  onMount(() => {
    detectSWUpdate();
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="w-full min-h-svh flex flex-col items-center">
  {#if page.url.pathname === "/"}
    <Navbar />
  {/if}
  {@render children()}
</main>
