import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemWhereInputObjectSchema } from './RetroItemWhereInput.schema'

const Schema: z.ZodType<Prisma.RetroItemListRelationFilter> = z
  .object({
    every: z.lazy(() => RetroItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => RetroItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => RetroItemWhereInputObjectSchema).optional(),
  })
  .strict()

export const RetroItemListRelationFilterObjectSchema = Schema
