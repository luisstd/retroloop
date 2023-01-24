import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutLinkInputObjectSchema } from './RetrospectiveCreateWithoutLinkInput.schema'
import { RetrospectiveUncheckedCreateWithoutLinkInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutLinkInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateOrConnectWithoutLinkInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutLinkInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutLinkInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveCreateOrConnectWithoutLinkInputObjectSchema = Schema
