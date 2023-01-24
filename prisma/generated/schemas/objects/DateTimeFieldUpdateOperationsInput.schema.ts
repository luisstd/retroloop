import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z
  .object({
    set: z.date().optional(),
  })
  .strict()

export const DateTimeFieldUpdateOperationsInputObjectSchema = Schema
