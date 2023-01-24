import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateNestedManyWithoutItemCollectionInputObjectSchema } from './RetroItemCreateNestedManyWithoutItemCollectionInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionCreateWithoutRetrospectivesInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    votes: z.number().optional().nullable(),
    items: z.lazy(() => RetroItemCreateNestedManyWithoutItemCollectionInputObjectSchema).optional(),
    retrospectiveId: z.string(),
  })
  .strict()

export const ItemCollectionCreateWithoutRetrospectivesInputObjectSchema = Schema
