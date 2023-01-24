import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z
  .object({
    set: z.string().optional(),
  })
  .strict()

export const StringFieldUpdateOperationsInputObjectSchema = Schema
