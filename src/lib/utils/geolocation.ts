import { options } from "$lib/config/geolocation";

export async function getLocation(): Promise<GeolocationCoordinates> {
  const { promise, resolve, reject } = Promise.withResolvers<GeolocationCoordinates>();
  navigator.geolocation.getCurrentPosition(
    (position) => {
      resolve(position.coords);
    },
    reject,
    options
  );
  return promise;
}
