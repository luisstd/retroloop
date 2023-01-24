import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateManyRetroInputEnvelopeObjectSchema } from './InviteCreateManyRetroInputEnvelope.schema'
import { InviteCreateOrConnectWithoutRetroInputObjectSchema } from './InviteCreateOrConnectWithoutRetroInput.schema'
import { InviteCreateWithoutRetroInputObjectSchema } from './InviteCreateWithoutRetroInput.schema'
import { InviteUncheckedCreateWithoutRetroInputObjectSchema } from './InviteUncheckedCreateWithoutRetroInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteUncheckedCreateNestedManyWithoutRetroInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InviteCreateWithoutRetroInputObjectSchema),
        z.lazy(() => InviteCreateWithoutRetroInputObjectSchema).array(),
        z.lazy(() => InviteUncheckedCreateWithoutRetroInputObjectSchema),
        z.lazy(() => InviteUncheckedCreateWithoutRetroInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => InviteCreateOrConnectWithoutRetroInputObjectSchema),
        z.lazy(() => InviteCreateOrConnectWithoutRetroInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => InviteCreateManyRetroInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => InviteWhereUniqueInputObjectSchema),
        z.lazy(() => InviteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const InviteUncheckedCreateNestedManyWithoutRetroInputObjectSchema = Schema
