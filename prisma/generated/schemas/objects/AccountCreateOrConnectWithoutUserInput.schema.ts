import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema'
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutUserInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const AccountCreateOrConnectWithoutUserInputObjectSchema = Schema
