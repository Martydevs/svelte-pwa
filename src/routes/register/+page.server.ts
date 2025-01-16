import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import { zod } from "sveltekit-superforms/adapters";
import { registerSchema } from "$lib/schemas/register";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(registerSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    
  },
};
