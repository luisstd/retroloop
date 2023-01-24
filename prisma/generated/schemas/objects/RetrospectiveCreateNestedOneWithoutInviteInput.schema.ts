import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutInviteInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutInviteInput.schema'
import { RetrospectiveCreateWithoutInviteInputObjectSchema } from './RetrospectiveCreateWithoutInviteInput.schema'
import { RetrospectiveUncheckedCreateWithoutInviteInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutInviteInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateNestedOneWithoutInviteInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RetrospectiveCreateWithoutInviteInputObjectSchema),
        z.lazy(() => RetrospectiveUncheckedCreateWithoutInviteInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RetrospectiveCreateOrConnectWithoutInviteInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const RetrospectiveCreateNestedOneWithoutInviteInputObjectSchema = Schema
