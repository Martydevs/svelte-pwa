<script lang="ts">
  import { onMount } from "svelte";
  import { ModeWatcher } from "mode-watcher";
  import { detectSWUpdate } from "$lib/utils/sw";
  import { Toaster } from "@/components/ui/sonner";
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

<Toaster richColors />
<ModeWatcher />
<main class="w-full min-h-svh flex flex-col items-center">
  {@render children()}
</main>
