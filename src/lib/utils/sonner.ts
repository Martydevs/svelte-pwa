import { toast } from "svelte-sonner";

export function showToastSuccess(msg: string) {
  toast.info(msg);
}

export function showToastError(msg: string) {
  toast.error(msg);
}

export function showToastInfo(msg: string) {
  toast.info(msg);
}

export function showToastWarning(msg: string) {
  toast.warning(msg);
}