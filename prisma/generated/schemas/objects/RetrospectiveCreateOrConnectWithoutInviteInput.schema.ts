import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutInviteInputObjectSchema } from './RetrospectiveCreateWithoutInviteInput.schema'
import { RetrospectiveUncheckedCreateWithoutInviteInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutInviteInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateOrConnectWithoutInviteInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutInviteInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutInviteInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveCreateOrConnectWithoutInviteInputObjectSchema = Schema
