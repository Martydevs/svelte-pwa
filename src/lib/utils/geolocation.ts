import { options } from "$lib/config/geolocation";

export async function getLocation(successToast: (msg: string) => void, errorToast: (msg: string) => void): Promise<GeolocationCoordinates> {
  const { promise, resolve, reject } = Promise.withResolvers<GeolocationCoordinates>();
  navigator.geolocation.getCurrentPosition(
    (position) => {
      successToast("Ubicación obtenida");
      resolve(position.coords);
    },
    (error) => {
      errorToast("No se pudo obtener la ubicación");
      reject(error);
    },
    options
  );
  return promise;
}
