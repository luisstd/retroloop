import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateWithoutItemCollectionInputObjectSchema } from './RetroItemCreateWithoutItemCollectionInput.schema'
import { RetroItemUncheckedCreateWithoutItemCollectionInputObjectSchema } from './RetroItemUncheckedCreateWithoutItemCollectionInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateOrConnectWithoutItemCollectionInput> = z
  .object({
    where: z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RetroItemCreateWithoutItemCollectionInputObjectSchema),
      z.lazy(() => RetroItemUncheckedCreateWithoutItemCollectionInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemCreateOrConnectWithoutItemCollectionInputObjectSchema = Schema
