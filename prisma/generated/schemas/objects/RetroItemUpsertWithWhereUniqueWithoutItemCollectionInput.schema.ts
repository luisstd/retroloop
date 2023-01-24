import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateWithoutItemCollectionInputObjectSchema } from './RetroItemCreateWithoutItemCollectionInput.schema'
import { RetroItemUncheckedCreateWithoutItemCollectionInputObjectSchema } from './RetroItemUncheckedCreateWithoutItemCollectionInput.schema'
import { RetroItemUncheckedUpdateWithoutItemCollectionInputObjectSchema } from './RetroItemUncheckedUpdateWithoutItemCollectionInput.schema'
import { RetroItemUpdateWithoutItemCollectionInputObjectSchema } from './RetroItemUpdateWithoutItemCollectionInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpsertWithWhereUniqueWithoutItemCollectionInput> = z
  .object({
    where: z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RetroItemUpdateWithoutItemCollectionInputObjectSchema),
      z.lazy(() => RetroItemUncheckedUpdateWithoutItemCollectionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RetroItemCreateWithoutItemCollectionInputObjectSchema),
      z.lazy(() => RetroItemUncheckedCreateWithoutItemCollectionInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemUpsertWithWhereUniqueWithoutItemCollectionInputObjectSchema = Schema
