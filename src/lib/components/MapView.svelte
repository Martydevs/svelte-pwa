<script lang="ts">
  import { DefaultMarker, MapLibre, Popup } from "svelte-maplibre";
  import "$lib/styles/map-view.css";

  interface Props {
    coords: GeolocationCoordinates;
  }

  const { coords }: Props = $props();
</script>

<MapLibre
  zoom={18}
  class="map"
  standardControls
  center={[coords.longitude, coords.latitude]}
  style="https://tiles.openfreemap.org/styles/liberty"
>
  <DefaultMarker lngLat={[coords.longitude, coords.latitude]}>
    <Popup offset={[0, 0]}>
      <span class="font-bold text-lg">Tu ubicación</span>
    </Popup>
  </DefaultMarker>
</MapLibre>
