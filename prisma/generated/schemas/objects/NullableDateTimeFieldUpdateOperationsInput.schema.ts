import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z
  .object({
    set: z.date().optional().nullable(),
  })
  .strict()

export const NullableDateTimeFieldUpdateOperationsInputObjectSchema = Schema
