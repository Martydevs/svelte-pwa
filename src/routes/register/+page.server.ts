import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {};
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(registerSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    return {
      form,
    };
  },
};
