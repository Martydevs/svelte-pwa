import { options } from "$lib/config/geolocation";

export async function getLocation(successToast: () => void, errorToast: () => void): Promise<GeolocationCoordinates> {
  const { promise, resolve, reject } = Promise.withResolvers<GeolocationCoordinates>();
  navigator.geolocation.getCurrentPosition(
    (position) => {
      successToast();
      resolve(position.coords);
    },
    (error) => {
      errorToast();
      reject(error);
    },
    options
  );
  return promise;
}
