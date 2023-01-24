import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const Schema: z.ZodType<Prisma.RetrospectiveScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RetrospectiveScalarWhereInputObjectSchema),
        z.lazy(() => RetrospectiveScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RetrospectiveScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RetrospectiveScalarWhereInputObjectSchema),
        z.lazy(() => RetrospectiveScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    phase: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    timerExpiration: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    workspaceId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const RetrospectiveScalarWhereInputObjectSchema = Schema
