import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveUncheckedCreateNestedManyWithoutItemCollectionsInputObjectSchema } from './RetrospectiveUncheckedCreateNestedManyWithoutItemCollectionsInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUncheckedCreateWithoutItemsInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    votes: z.number().optional().nullable(),
    retrospectives: z
      .lazy(() => RetrospectiveUncheckedCreateNestedManyWithoutItemCollectionsInputObjectSchema)
      .optional(),
    retrospectiveId: z.string(),
  })
  .strict()

export const ItemCollectionUncheckedCreateWithoutItemsInputObjectSchema = Schema
