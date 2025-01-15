import { z } from 'zod'
import { loginMessages as msg } from "$lib/values/string"

export const schema = z.object({
  telefono: z.string({
    required_error: msg.login.telefono.required_error,
    invalid_type_error: msg.login.telefono.invalid_type_error,
    message: msg.login.telefono.message
  }).min(10),
  password: z.string({
    required_error: msg.login.password.required_error,
    invalid_type_error: msg.login.password.invalid_type_error,
    message: msg.login.password.message
  }).min(6),
}, { required_error: msg.login.required_error })

export type LoginFormSchema = typeof schema