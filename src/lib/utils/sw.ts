export async function detectSWUpdate() {
  const registration = await navigator.serviceWorker.ready;

  registration.addEventListener("updatefound", () => {
    const newSW = registration.installing;

    newSW?.addEventListener("statechange", () => {
      if (newSW.state === "installed") {
        const isToUpdate = confirm("Hay una nueva versión de la aplicación disponible, desea actualizar?");
      
        if (isToUpdate) {
          newSW.postMessage({ action: "SKIP_WAITING" });
          window.location.reload();
        }
      }
    });
  });
}
