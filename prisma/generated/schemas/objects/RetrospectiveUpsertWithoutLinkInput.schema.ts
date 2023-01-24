import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutLinkInputObjectSchema } from './RetrospectiveCreateWithoutLinkInput.schema'
import { RetrospectiveUncheckedCreateWithoutLinkInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutLinkInput.schema'
import { RetrospectiveUncheckedUpdateWithoutLinkInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutLinkInput.schema'
import { RetrospectiveUpdateWithoutLinkInputObjectSchema } from './RetrospectiveUpdateWithoutLinkInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpsertWithoutLinkInput> = z
  .object({
    update: z.union([
      z.lazy(() => RetrospectiveUpdateWithoutLinkInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateWithoutLinkInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutLinkInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutLinkInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpsertWithoutLinkInputObjectSchema = Schema
