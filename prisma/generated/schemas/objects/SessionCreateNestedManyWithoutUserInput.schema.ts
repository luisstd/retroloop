import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SessionCreateManyUserInputEnvelopeObjectSchema } from './SessionCreateManyUserInputEnvelope.schema'
import { SessionCreateOrConnectWithoutUserInputObjectSchema } from './SessionCreateOrConnectWithoutUserInput.schema'
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema'
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const SessionCreateNestedManyWithoutUserInputObjectSchema = Schema
