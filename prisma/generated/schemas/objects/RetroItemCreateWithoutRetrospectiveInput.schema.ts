import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionCreateNestedOneWithoutItemsInputObjectSchema } from './ItemCollectionCreateNestedOneWithoutItemsInput.schema'
import { UserCreateNestedOneWithoutRetroItemInputObjectSchema } from './UserCreateNestedOneWithoutRetroItemInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateWithoutRetrospectiveInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    content: z.string(),
    type: z.string(),
    itemCollection: z
      .lazy(() => ItemCollectionCreateNestedOneWithoutItemsInputObjectSchema)
      .optional(),
    votes: z.number().optional().nullable(),
    author: z.lazy(() => UserCreateNestedOneWithoutRetroItemInputObjectSchema).optional(),
  })
  .strict()

export const RetroItemCreateWithoutRetrospectiveInputObjectSchema = Schema
