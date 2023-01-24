import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema'
import { AccountUncheckedUpdateManyWithoutAccountsInputObjectSchema } from './AccountUncheckedUpdateManyWithoutAccountsInput.schema'
import { AccountUpdateManyMutationInputObjectSchema } from './AccountUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => AccountScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => AccountUpdateManyMutationInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateManyWithoutAccountsInputObjectSchema),
    ]),
  })
  .strict()

export const AccountUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
