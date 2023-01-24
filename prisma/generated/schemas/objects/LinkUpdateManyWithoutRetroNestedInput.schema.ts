import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateManyRetroInputEnvelopeObjectSchema } from './LinkCreateManyRetroInputEnvelope.schema'
import { LinkCreateOrConnectWithoutRetroInputObjectSchema } from './LinkCreateOrConnectWithoutRetroInput.schema'
import { LinkCreateWithoutRetroInputObjectSchema } from './LinkCreateWithoutRetroInput.schema'
import { LinkScalarWhereInputObjectSchema } from './LinkScalarWhereInput.schema'
import { LinkUncheckedCreateWithoutRetroInputObjectSchema } from './LinkUncheckedCreateWithoutRetroInput.schema'
import { LinkUpdateManyWithWhereWithoutRetroInputObjectSchema } from './LinkUpdateManyWithWhereWithoutRetroInput.schema'
import { LinkUpdateWithWhereUniqueWithoutRetroInputObjectSchema } from './LinkUpdateWithWhereUniqueWithoutRetroInput.schema'
import { LinkUpsertWithWhereUniqueWithoutRetroInputObjectSchema } from './LinkUpsertWithWhereUniqueWithoutRetroInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkUpdateManyWithoutRetroNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LinkCreateWithoutRetroInputObjectSchema),
        z.lazy(() => LinkCreateWithoutRetroInputObjectSchema).array(),
        z.lazy(() => LinkUncheckedCreateWithoutRetroInputObjectSchema),
        z.lazy(() => LinkUncheckedCreateWithoutRetroInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => LinkCreateOrConnectWithoutRetroInputObjectSchema),
        z.lazy(() => LinkCreateOrConnectWithoutRetroInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => LinkUpsertWithWhereUniqueWithoutRetroInputObjectSchema),
        z.lazy(() => LinkUpsertWithWhereUniqueWithoutRetroInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => LinkCreateManyRetroInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => LinkUpdateWithWhereUniqueWithoutRetroInputObjectSchema),
        z.lazy(() => LinkUpdateWithWhereUniqueWithoutRetroInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => LinkUpdateManyWithWhereWithoutRetroInputObjectSchema),
        z.lazy(() => LinkUpdateManyWithWhereWithoutRetroInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => LinkScalarWhereInputObjectSchema),
        z.lazy(() => LinkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const LinkUpdateManyWithoutRetroNestedInputObjectSchema = Schema
