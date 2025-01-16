<script lang="ts">
  import type { Snippet } from "svelte";
  import { ModeWatcher } from "mode-watcher";
  
  import Hero from '$lib/components/Hero.svelte';
  import { Toaster } from "$lib/components/ui/sonner";
  import "$lib/styles/app.css";

  let { children }: { children: Snippet } = $props();
</script>

<ModeWatcher />
<Toaster richColors />
<main class="min-h-dvh w-full flex flex-col items-center">
  <Hero />
  {@render children()}
</main>
