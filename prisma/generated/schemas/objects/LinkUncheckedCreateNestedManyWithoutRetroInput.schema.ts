import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateManyRetroInputEnvelopeObjectSchema } from './LinkCreateManyRetroInputEnvelope.schema'
import { LinkCreateOrConnectWithoutRetroInputObjectSchema } from './LinkCreateOrConnectWithoutRetroInput.schema'
import { LinkCreateWithoutRetroInputObjectSchema } from './LinkCreateWithoutRetroInput.schema'
import { LinkUncheckedCreateWithoutRetroInputObjectSchema } from './LinkUncheckedCreateWithoutRetroInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkUncheckedCreateNestedManyWithoutRetroInput> = z
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
    createMany: z.lazy(() => LinkCreateManyRetroInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const LinkUncheckedCreateNestedManyWithoutRetroInputObjectSchema = Schema
