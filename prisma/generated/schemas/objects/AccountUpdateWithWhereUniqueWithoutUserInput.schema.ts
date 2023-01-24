import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema'
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AccountUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
