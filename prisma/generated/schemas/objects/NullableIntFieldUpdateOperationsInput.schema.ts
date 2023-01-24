import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z
  .object({
    set: z.number().optional().nullable(),
    increment: z.number().optional(),
    decrement: z.number().optional(),
    multiply: z.number().optional(),
    divide: z.number().optional(),
  })
  .strict()

export const NullableIntFieldUpdateOperationsInputObjectSchema = Schema
