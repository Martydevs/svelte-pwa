<script lang="ts">
  import type { Snippet } from "svelte";

  import { ModeWatcher } from "mode-watcher";
  import { Share2 } from "lucide-svelte"
  
  import { Toaster } from "$lib/components/ui/sonner";
  import type { LayoutData } from "./$types";
  import "$lib/styles/app.css";

  let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<ModeWatcher />
<Toaster richColors />
<main class="min-h-dvh w-full flex flex-col items-center">
  <header class="w-full h-[40dvh] flex flex-col items-center justify-center">
    <Share2 size={90} class="text-blue-400" />
    <h1 class="hero-title">Conexiones</h1>
    <p class="hero-description">Una app para encontrar conexiones</p>
  </header>

  {@render children()}
</main>
