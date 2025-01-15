import { z } from 'zod'

export const schema = z.object({
  nombre: z.string(),
  apellido: z.string(),
  telefono: z.string().min(10).max(10),
  edad: z.number(),
  password: z.string().min(6),
})

export type RegisterFormSchema = typeof schema