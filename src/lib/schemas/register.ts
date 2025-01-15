import { z } from "zod";
import { registerMessages as msg } from "$lib/values/string";

export const schema = z.object({
  nombre: z
    .string({
      required_error: msg.register.nombre.required_error,
    })
    .min(3, {
      message: msg.register.nombre.message,
    })
    .max(20, {
      message: msg.register.nombre.message,
    }),
  apellido: z
    .string({
      required_error: msg.register.apellido.required_error,
      invalid_type_error: msg.register.apellido.invalid_type_error,
    })
    .min(3, {
      message: msg.register.apellido.message,
    })
    .max(20, {
      message: msg.register.apellido.message,
    }),
  telefono: z
    .string({
      required_error: msg.register.telefono.required_error,
      invalid_type_error: msg.register.telefono.invalid_type_error,
      message: msg.register.telefono.message,
    })
    .min(10, {
      message: msg.register.telefono.message,
    }),
  edad: z
    .number({
      required_error: msg.register.edad.required_error,
    })
    .min(18, {
      message: msg.register.edad.message,
    })
    .positive(),
  password: z
    .string({
      required_error: msg.register.password.required_error,
      invalid_type_error: msg.register.password.invalid_type_error,
    })
    .min(6, {
      message: msg.register.password.message,
    }),
}, { required_error: msg.register.required_error });

export type RegisterFormSchema = typeof schema;
