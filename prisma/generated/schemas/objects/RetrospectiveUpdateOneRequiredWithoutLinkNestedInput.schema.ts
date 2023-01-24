import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutLinkInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutLinkInput.schema'
import { RetrospectiveCreateWithoutLinkInputObjectSchema } from './RetrospectiveCreateWithoutLinkInput.schema'
import { RetrospectiveUncheckedCreateWithoutLinkInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutLinkInput.schema'
import { RetrospectiveUncheckedUpdateWithoutLinkInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutLinkInput.schema'
import { RetrospectiveUpdateWithoutLinkInputObjectSchema } from './RetrospectiveUpdateWithoutLinkInput.schema'
import { RetrospectiveUpsertWithoutLinkInputObjectSchema } from './RetrospectiveUpsertWithoutLinkInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateOneRequiredWithoutLinkNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RetrospectiveCreateWithoutLinkInputObjectSchema),
        z.lazy(() => RetrospectiveUncheckedCreateWithoutLinkInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RetrospectiveCreateOrConnectWithoutLinkInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => RetrospectiveUpsertWithoutLinkInputObjectSchema).optional(),
    connect: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => RetrospectiveUpdateWithoutLinkInputObjectSchema),
        z.lazy(() => RetrospectiveUncheckedUpdateWithoutLinkInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const RetrospectiveUpdateOneRequiredWithoutLinkNestedInputObjectSchema = Schema
