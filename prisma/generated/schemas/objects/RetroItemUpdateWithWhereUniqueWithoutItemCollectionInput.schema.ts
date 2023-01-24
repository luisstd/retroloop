import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemUncheckedUpdateWithoutItemCollectionInputObjectSchema } from './RetroItemUncheckedUpdateWithoutItemCollectionInput.schema'
import { RetroItemUpdateWithoutItemCollectionInputObjectSchema } from './RetroItemUpdateWithoutItemCollectionInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpdateWithWhereUniqueWithoutItemCollectionInput> = z
  .object({
    where: z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RetroItemUpdateWithoutItemCollectionInputObjectSchema),
      z.lazy(() => RetroItemUncheckedUpdateWithoutItemCollectionInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemUpdateWithWhereUniqueWithoutItemCollectionInputObjectSchema = Schema
