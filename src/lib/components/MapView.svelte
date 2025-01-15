<script lang="ts">
  import { DefaultMarker, MapLibre, Popup } from "svelte-maplibre";
  import mapStyles from "$lib/styles/mapview.json";
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
  style={mapStyles}
>
  <DefaultMarker lngLat={[coords.longitude, coords.latitude]}>
    <Popup offset={[0, 0]}>
      <span class="font-bold text-lg text-dark">Tu ubicación</span>
    </Popup>
  </DefaultMarker>
</MapLibre>
