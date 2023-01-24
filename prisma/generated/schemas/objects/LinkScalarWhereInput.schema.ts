import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'

const Schema: z.ZodType<Prisma.LinkScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LinkScalarWhereInputObjectSchema),
        z.lazy(() => LinkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LinkScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LinkScalarWhereInputObjectSchema),
        z.lazy(() => LinkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    expiration: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    retrospectiveId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    workspaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const LinkScalarWhereInputObjectSchema = Schema
