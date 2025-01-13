export async function detectSWUpdate() {
  const registration = await navigator.serviceWorker.ready;

  registration.addEventListener("updatefound", () => {
    const newSW = registration.installing;

    newSW?.addEventListener("statechange", () => {
      if (newSW.state === "installed") {
        if (confirm("New app available. Load new version?")) {
          newSW.postMessage({ action: "SKIP_WAITING" });
          window.location.reload();
        }
      }
    });
  });
}
