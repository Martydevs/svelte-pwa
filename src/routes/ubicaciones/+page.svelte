<script lang="ts">
  import { loadMapViewAsync } from "$lib/snippets/LoadMapview.svelte";
</script>

<svelte:head>
  <title>Ubicaciones</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

{@render loadMapViewAsync()}
<div class="bg-base-100 z-50 absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3/12 py-5 rounded-lg">
  Controls here.
</div>