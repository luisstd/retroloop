import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateManyInviteeInputEnvelopeObjectSchema } from './InviteCreateManyInviteeInputEnvelope.schema'
import { InviteCreateOrConnectWithoutInviteeInputObjectSchema } from './InviteCreateOrConnectWithoutInviteeInput.schema'
import { InviteCreateWithoutInviteeInputObjectSchema } from './InviteCreateWithoutInviteeInput.schema'
import { InviteUncheckedCreateWithoutInviteeInputObjectSchema } from './InviteUncheckedCreateWithoutInviteeInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteCreateNestedManyWithoutInviteeInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => InviteCreateWithoutInviteeInputObjectSchema),
        z.lazy(() => InviteCreateWithoutInviteeInputObjectSchema).array(),
        z.lazy(() => InviteUncheckedCreateWithoutInviteeInputObjectSchema),
        z.lazy(() => InviteUncheckedCreateWithoutInviteeInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => InviteCreateOrConnectWithoutInviteeInputObjectSchema),
        z.lazy(() => InviteCreateOrConnectWithoutInviteeInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => InviteCreateManyInviteeInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => InviteWhereUniqueInputObjectSchema),
        z.lazy(() => InviteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const InviteCreateNestedManyWithoutInviteeInputObjectSchema = Schema
