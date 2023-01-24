import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const Schema: z.ZodType<Prisma.UserRelationFilter> = z
  .object({
    is: z.lazy(() => UserWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => UserWhereInputObjectSchema).optional(),
  })
  .strict()

export const UserRelationFilterObjectSchema = Schema
