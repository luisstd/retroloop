import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemUncheckedCreateNestedManyWithoutItemCollectionInputObjectSchema } from './RetroItemUncheckedCreateNestedManyWithoutItemCollectionInput.schema'
import { RetrospectiveUncheckedCreateNestedManyWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUncheckedCreateNestedManyWithoutItemCollectionsInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    votes: z.number().optional().nullable(),
    retrospectives: z
      .lazy(() => RetrospectiveUncheckedCreateNestedManyWithoutItemCollectionsInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => RetroItemUncheckedCreateNestedManyWithoutItemCollectionInputObjectSchema)
      .optional(),
    retrospectiveId: z.string(),
  })
  .strict()

export const ItemCollectionUncheckedCreateInputObjectSchema = Schema
