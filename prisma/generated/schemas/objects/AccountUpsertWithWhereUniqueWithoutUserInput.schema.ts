import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema'
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'
import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema'
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AccountUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountCreateWithoutUserInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
