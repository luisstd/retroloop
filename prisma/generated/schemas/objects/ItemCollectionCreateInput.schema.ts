import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateNestedManyWithoutItemCollectionInputObjectSchema } from './RetroItemCreateNestedManyWithoutItemCollectionInput.schema'
import { RetrospectiveCreateNestedManyWithoutItemCollectionsInputObjectSchema } from './RetrospectiveCreateNestedManyWithoutItemCollectionsInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    votes: z.number().optional().nullable(),
    retrospectives: z
      .lazy(() => RetrospectiveCreateNestedManyWithoutItemCollectionsInputObjectSchema)
      .optional(),
    items: z.lazy(() => RetroItemCreateNestedManyWithoutItemCollectionInputObjectSchema).optional(),
    retrospectiveId: z.string(),
  })
  .strict()

export const ItemCollectionCreateInputObjectSchema = Schema
