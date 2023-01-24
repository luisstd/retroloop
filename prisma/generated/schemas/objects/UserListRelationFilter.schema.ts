import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const Schema: z.ZodType<Prisma.UserListRelationFilter> = z
  .object({
    every: z.lazy(() => UserWhereInputObjectSchema).optional(),
    some: z.lazy(() => UserWhereInputObjectSchema).optional(),
    none: z.lazy(() => UserWhereInputObjectSchema).optional(),
  })
  .strict()

export const UserListRelationFilterObjectSchema = Schema
