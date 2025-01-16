import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad, Actions } from "./$types";
import { loginSchema } from "@/schemas/login";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(loginSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(loginSchema));
    
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    return {
      form,
    };
  },
};
