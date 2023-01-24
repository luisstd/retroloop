import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveWhereInputObjectSchema } from './RetrospectiveWhereInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveRelationFilter> = z
  .object({
    is: z.lazy(() => RetrospectiveWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => RetrospectiveWhereInputObjectSchema).optional(),
  })
  .strict()

export const RetrospectiveRelationFilterObjectSchema = Schema
