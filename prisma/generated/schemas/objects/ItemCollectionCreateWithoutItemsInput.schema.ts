import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateNestedManyWithoutItemCollectionsInputObjectSchema } from './RetrospectiveCreateNestedManyWithoutItemCollectionsInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    votes: z.number().optional().nullable(),
    retrospectives: z
      .lazy(() => RetrospectiveCreateNestedManyWithoutItemCollectionsInputObjectSchema)
      .optional(),
    retrospectiveId: z.string(),
  })
  .strict()

export const ItemCollectionCreateWithoutItemsInputObjectSchema = Schema
