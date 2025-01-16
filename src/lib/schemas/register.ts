import { z } from "zod";
import { registerMessages as msg } from "$lib/values/string";

export const registerSchema = z.object(
  {
    name: z
      .string({
        invalid_type_error: msg.register.nombre.invalid_type_error,
      })
      .min(3, msg.register.nombre.min_error)
      .max(20, msg.register.nombre.max_error),
    email: z.string().email(msg.register.email.invalid_type_error),
    image: z.string().optional(),
    password: z
      .string({
        invalid_type_error: msg.register.password.invalid_type_error,
      })
      .min(8, msg.register.password.min_error)
      .max(20, msg.register.password.max_error),
  },
  {
    required_error: msg.register.required_error,
  }
);

export type RegisterSchema = typeof registerSchema;
