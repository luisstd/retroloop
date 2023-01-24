import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemUncheckedUpdateWithoutRetrospectiveInputObjectSchema } from './RetroItemUncheckedUpdateWithoutRetrospectiveInput.schema'
import { RetroItemUpdateWithoutRetrospectiveInputObjectSchema } from './RetroItemUpdateWithoutRetrospectiveInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpdateWithWhereUniqueWithoutRetrospectiveInput> = z
  .object({
    where: z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RetroItemUpdateWithoutRetrospectiveInputObjectSchema),
      z.lazy(() => RetroItemUncheckedUpdateWithoutRetrospectiveInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemUpdateWithWhereUniqueWithoutRetrospectiveInputObjectSchema = Schema
