<script lang="ts" module>
  import MapView from "$lib/components/MapView.svelte";
  import { getLocation } from "$lib/utils/geolocation";
  
  export { loadMapViewAsync }
</script>

{#snippet loadMapViewAsync()}
  {#await getLocation()}
    <p>Cargando ubicación...</p>
  {:then coords}
    <MapView {coords} />
  {:catch error}
    <p>{error.message}</p>
  {/await}
{/snippet}
