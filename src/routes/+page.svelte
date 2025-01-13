<script lang="ts">
  import { onMount } from "svelte";
  import MapView from "$lib/components/MapView.svelte";
  import { getLocation } from "$lib/utils/geolocation";

  let coords: GeolocationCoordinates | null = $state(null)

  onMount(async () => {
    coords = await getLocation()
  })
</script>

{#if coords}
  <MapView {coords} />
{/if}