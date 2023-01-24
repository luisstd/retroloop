import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'

const Schema: z.ZodType<Prisma.VerificationTokenWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VerificationTokenWhereInputObjectSchema),
        z.lazy(() => VerificationTokenWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VerificationTokenWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VerificationTokenWhereInputObjectSchema),
        z.lazy(() => VerificationTokenWhereInputObjectSchema).array(),
      ])
      .optional(),
    identifier: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    expires: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  })
  .strict()

export const VerificationTokenWhereInputObjectSchema = Schema
