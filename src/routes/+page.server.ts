import { fail, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

import { schema as RegisterSchema } from "@/schemas/register";
import { schema as LoginSchema } from "@/schemas/login";

import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async () => {
  const registerForm = await superValidate(zod(RegisterSchema));
  const loginForm = await superValidate(zod(LoginSchema));
  return { registerForm, loginForm };
};

export const actions: Actions = {
  register: async (event) => {
    const form = await superValidate(event, zod(RegisterSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    return { form };
  },
  login: async (event) => {
    const form = await superValidate(event, zod(LoginSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    return { form };
  },
};
