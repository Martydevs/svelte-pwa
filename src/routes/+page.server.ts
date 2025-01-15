import { zod } from "sveltekit-superforms/adapters";
import { fail, superValidate } from "sveltekit-superforms";

import { schema as LoginSchema } from "@/schemas/login";
import { schema as RegisterSchema } from "@/schemas/register";

import { addUser } from "@/server/functions/user";
import type { PageServerLoad, Actions } from "./$types";
import type { ActionResponse } from "@/interfaces/actions";
import { auth } from "@/server/auth";

export const load: PageServerLoad = async ({ request }) => {
  const registerForm = await superValidate(zod(RegisterSchema));
  const loginForm = await superValidate(zod(LoginSchema));

  const session = await auth.api.getSession({
    headers: request.headers
  })

  return { registerForm, loginForm, props: { session } };
};

export const actions: Actions = {
  register: async (event) => {
    const form = await superValidate(event, zod(RegisterSchema));
    type Form = typeof form;

    if (!form.valid) {
      return fail(400, {
        message: "Error en el formulario",
        success: false,
        code: 400,
        registerForm: form,
      } satisfies ActionResponse<Form>);
    }

    try {
      await addUser(form.data);
    } catch (error) {
      return fail(400, {
        message: (error as Error).message,
        success: false,
        code: 400,
        registerForm: form
      } satisfies ActionResponse<Form>);
    }

    return {
      message: "Usuario registrado con éxito",
      success: true,
      code: 200,
      registerForm: form,
    } satisfies ActionResponse<Form>;
  },
  login: async (event) => {
    const form = await superValidate(event, zod(LoginSchema));
    type Form = typeof form;

    if (!form.valid) {
      return fail(400, {
        message: "Error en el formulario, revise los campos",
        success: false,
        code: 400,
        loginForm: form
      } satisfies ActionResponse<Form>);
    }

    return {
      message: "Usuario logueado con éxito",
      success: true,
      code: 200,
      loginForm: form
    } satisfies ActionResponse<Form>;
  },
};
