import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemScalarWhereInputObjectSchema } from './RetroItemScalarWhereInput.schema'
import { RetroItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from './RetroItemUncheckedUpdateManyWithoutItemsInput.schema'
import { RetroItemUpdateManyMutationInputObjectSchema } from './RetroItemUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpdateManyWithWhereWithoutRetrospectiveInput> = z
  .object({
    where: z.lazy(() => RetroItemScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RetroItemUpdateManyMutationInputObjectSchema),
      z.lazy(() => RetroItemUncheckedUpdateManyWithoutItemsInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemUpdateManyWithWhereWithoutRetrospectiveInputObjectSchema = Schema
