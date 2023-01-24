import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemUncheckedCreateNestedManyWithoutItemCollectionInputObjectSchema } from './RetroItemUncheckedCreateNestedManyWithoutItemCollectionInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUncheckedCreateWithoutRetrospectivesInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    votes: z.number().optional().nullable(),
    items: z
      .lazy(() => RetroItemUncheckedCreateNestedManyWithoutItemCollectionInputObjectSchema)
      .optional(),
    retrospectiveId: z.string(),
  })
  .strict()

export const ItemCollectionUncheckedCreateWithoutRetrospectivesInputObjectSchema = Schema
