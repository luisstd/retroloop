import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutLinkInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutLinkInput.schema'
import { RetrospectiveCreateWithoutLinkInputObjectSchema } from './RetrospectiveCreateWithoutLinkInput.schema'
import { RetrospectiveUncheckedCreateWithoutLinkInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutLinkInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateNestedOneWithoutLinkInput> = z
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
    connect: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const RetrospectiveCreateNestedOneWithoutLinkInputObjectSchema = Schema
