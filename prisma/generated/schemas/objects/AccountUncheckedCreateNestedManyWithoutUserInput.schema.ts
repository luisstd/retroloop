import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountCreateManyUserInputEnvelopeObjectSchema } from './AccountCreateManyUserInputEnvelope.schema'
import { AccountCreateOrConnectWithoutUserInputObjectSchema } from './AccountCreateOrConnectWithoutUserInput.schema'
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema'
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutUserInputObjectSchema),
        z.lazy(() => AccountCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputObjectSchema),
        z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema
