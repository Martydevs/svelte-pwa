import { z } from 'zod'

export const schema = z.object({
  telefono: z.string().min(10).max(10),
  password: z.string().min(6),
})

export type LoginFormSchema = typeof schema