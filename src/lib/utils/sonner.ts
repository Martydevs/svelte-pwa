import { toast } from "svelte-sonner";

export function showToastSuccess() {
  toast.info("Cargando ubicación...");
}

export function showToastError() {
  toast.error("No se pudo obtener la ubicación, intenta de nuevo");
}