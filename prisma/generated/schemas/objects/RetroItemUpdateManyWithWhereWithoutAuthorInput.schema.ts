import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemScalarWhereInputObjectSchema } from './RetroItemScalarWhereInput.schema'
import { RetroItemUncheckedUpdateManyWithoutRetroItemInputObjectSchema } from './RetroItemUncheckedUpdateManyWithoutRetroItemInput.schema'
import { RetroItemUpdateManyMutationInputObjectSchema } from './RetroItemUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpdateManyWithWhereWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => RetroItemScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RetroItemUpdateManyMutationInputObjectSchema),
      z.lazy(() => RetroItemUncheckedUpdateManyWithoutRetroItemInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemUpdateManyWithWhereWithoutAuthorInputObjectSchema = Schema
