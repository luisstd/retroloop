import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateManyInviteeInputEnvelopeObjectSchema } from './InviteCreateManyInviteeInputEnvelope.schema'
import { InviteCreateOrConnectWithoutInviteeInputObjectSchema } from './InviteCreateOrConnectWithoutInviteeInput.schema'
import { InviteCreateWithoutInviteeInputObjectSchema } from './InviteCreateWithoutInviteeInput.schema'
import { InviteScalarWhereInputObjectSchema } from './InviteScalarWhereInput.schema'
import { InviteUncheckedCreateWithoutInviteeInputObjectSchema } from './InviteUncheckedCreateWithoutInviteeInput.schema'
import { InviteUpdateManyWithWhereWithoutInviteeInputObjectSchema } from './InviteUpdateManyWithWhereWithoutInviteeInput.schema'
import { InviteUpdateWithWhereUniqueWithoutInviteeInputObjectSchema } from './InviteUpdateWithWhereUniqueWithoutInviteeInput.schema'
import { InviteUpsertWithWhereUniqueWithoutInviteeInputObjectSchema } from './InviteUpsertWithWhereUniqueWithoutInviteeInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteUpdateManyWithoutInviteeNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => InviteUpsertWithWhereUniqueWithoutInviteeInputObjectSchema),
        z.lazy(() => InviteUpsertWithWhereUniqueWithoutInviteeInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => InviteCreateManyInviteeInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => InviteWhereUniqueInputObjectSchema),
        z.lazy(() => InviteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => InviteWhereUniqueInputObjectSchema),
        z.lazy(() => InviteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => InviteWhereUniqueInputObjectSchema),
        z.lazy(() => InviteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => InviteWhereUniqueInputObjectSchema),
        z.lazy(() => InviteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => InviteUpdateWithWhereUniqueWithoutInviteeInputObjectSchema),
        z.lazy(() => InviteUpdateWithWhereUniqueWithoutInviteeInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => InviteUpdateManyWithWhereWithoutInviteeInputObjectSchema),
        z.lazy(() => InviteUpdateManyWithWhereWithoutInviteeInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => InviteScalarWhereInputObjectSchema),
        z.lazy(() => InviteScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const InviteUpdateManyWithoutInviteeNestedInputObjectSchema = Schema
