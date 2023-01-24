import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'

const Schema: z.ZodType<Prisma.InviteScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InviteScalarWhereInputObjectSchema),
        z.lazy(() => InviteScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InviteScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InviteScalarWhereInputObjectSchema),
        z.lazy(() => InviteScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    retrospectiveId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const InviteScalarWhereInputObjectSchema = Schema
