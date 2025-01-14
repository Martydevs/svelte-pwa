<script lang="ts">
  import MapView from "$lib/components/MapView.svelte";
  import { getLocation } from "$lib/utils/geolocation";
</script>

<svelte:head>
  <title>Ubicaciones</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full min-h-svh flex flex-col items-center">
  {#await getLocation()}
    <p>Cargando ubicación...</p>
  {:then coords}
    <MapView {coords} />
  {:catch error}
    <p>{error.message}</p>
  {/await}
</section>