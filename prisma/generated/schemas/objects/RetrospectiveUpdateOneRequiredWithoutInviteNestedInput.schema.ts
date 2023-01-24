import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateOrConnectWithoutInviteInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutInviteInput.schema'
import { RetrospectiveCreateWithoutInviteInputObjectSchema } from './RetrospectiveCreateWithoutInviteInput.schema'
import { RetrospectiveUncheckedCreateWithoutInviteInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutInviteInput.schema'
import { RetrospectiveUncheckedUpdateWithoutInviteInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutInviteInput.schema'
import { RetrospectiveUpdateWithoutInviteInputObjectSchema } from './RetrospectiveUpdateWithoutInviteInput.schema'
import { RetrospectiveUpsertWithoutInviteInputObjectSchema } from './RetrospectiveUpsertWithoutInviteInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateOneRequiredWithoutInviteNestedInput> = z
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
    upsert: z.lazy(() => RetrospectiveUpsertWithoutInviteInputObjectSchema).optional(),
    connect: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => RetrospectiveUpdateWithoutInviteInputObjectSchema),
        z.lazy(() => RetrospectiveUncheckedUpdateWithoutInviteInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const RetrospectiveUpdateOneRequiredWithoutInviteNestedInputObjectSchema = Schema
