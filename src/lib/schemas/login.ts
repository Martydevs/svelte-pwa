import { z } from "zod";
import { loginMessages as msg } from "$lib/values/string";

export const loginSchema = z.object({
  email: z
    .string({
      invalid_type_error: msg.login.email.invalid_type_error
    })
    .email()
    .nonempty(msg.login.email.required_error),
  password: z
    .string({
      invalid_type_error: msg.login.password.invalid_type_error
    })
    .min(8, msg.login.password.min_error)
    .max(20, msg.login.password.max_error)
    .nonempty(msg.login.password.required_error),
}, {
  required_error: msg.login.required_error
});

export type Login = typeof loginSchema;
