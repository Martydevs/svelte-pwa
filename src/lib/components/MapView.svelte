<script lang="ts">
  import { DefaultMarker, MapLibre, Popup } from 'svelte-maplibre';
  import '$lib/styles/map-view.css';

  interface Props {
    coords: GeolocationCoordinates;
  }

  const { coords }: Props = $props();
</script>

<MapLibre
  center={[coords.longitude, coords.latitude]}
  zoom={18}
  class="map"
  standardControls
  style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
>
  <DefaultMarker lngLat={[coords.longitude, coords.latitude]}>
    <Popup offset={[0, 0]}>
      <span class="font-bold text-lg">Tu ubicación</span>
    </Popup>
  </DefaultMarker>
</MapLibre>