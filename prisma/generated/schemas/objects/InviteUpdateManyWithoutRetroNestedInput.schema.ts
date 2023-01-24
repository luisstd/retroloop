import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateManyRetroInputEnvelopeObjectSchema } from './InviteCreateManyRetroInputEnvelope.schema'
import { InviteCreateOrConnectWithoutRetroInputObjectSchema } from './InviteCreateOrConnectWithoutRetroInput.schema'
import { InviteCreateWithoutRetroInputObjectSchema } from './InviteCreateWithoutRetroInput.schema'
import { InviteScalarWhereInputObjectSchema } from './InviteScalarWhereInput.schema'
import { InviteUncheckedCreateWithoutRetroInputObjectSchema } from './InviteUncheckedCreateWithoutRetroInput.schema'
import { InviteUpdateManyWithWhereWithoutRetroInputObjectSchema } from './InviteUpdateManyWithWhereWithoutRetroInput.schema'
import { InviteUpdateWithWhereUniqueWithoutRetroInputObjectSchema } from './InviteUpdateWithWhereUniqueWithoutRetroInput.schema'
import { InviteUpsertWithWhereUniqueWithoutRetroInputObjectSchema } from './InviteUpsertWithWhereUniqueWithoutRetroInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteUpdateManyWithoutRetroNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => InviteUpsertWithWhereUniqueWithoutRetroInputObjectSchema),
        z.lazy(() => InviteUpsertWithWhereUniqueWithoutRetroInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => InviteCreateManyRetroInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => InviteUpdateWithWhereUniqueWithoutRetroInputObjectSchema),
        z.lazy(() => InviteUpdateWithWhereUniqueWithoutRetroInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => InviteUpdateManyWithWhereWithoutRetroInputObjectSchema),
        z.lazy(() => InviteUpdateManyWithWhereWithoutRetroInputObjectSchema).array(),
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

export const InviteUpdateManyWithoutRetroNestedInputObjectSchema = Schema
