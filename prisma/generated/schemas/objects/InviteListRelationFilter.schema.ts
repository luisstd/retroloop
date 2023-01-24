import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteWhereInputObjectSchema } from './InviteWhereInput.schema'

const Schema: z.ZodType<Prisma.InviteListRelationFilter> = z
  .object({
    every: z.lazy(() => InviteWhereInputObjectSchema).optional(),
    some: z.lazy(() => InviteWhereInputObjectSchema).optional(),
    none: z.lazy(() => InviteWhereInputObjectSchema).optional(),
  })
  .strict()

export const InviteListRelationFilterObjectSchema = Schema
