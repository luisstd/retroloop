import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveWhereInputObjectSchema } from './RetrospectiveWhereInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveListRelationFilter> = z
  .object({
    every: z.lazy(() => RetrospectiveWhereInputObjectSchema).optional(),
    some: z.lazy(() => RetrospectiveWhereInputObjectSchema).optional(),
    none: z.lazy(() => RetrospectiveWhereInputObjectSchema).optional(),
  })
  .strict()

export const RetrospectiveListRelationFilterObjectSchema = Schema
