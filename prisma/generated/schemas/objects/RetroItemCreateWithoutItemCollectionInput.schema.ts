import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateNestedOneWithoutItemsInputObjectSchema } from './RetrospectiveCreateNestedOneWithoutItemsInput.schema'
import { UserCreateNestedOneWithoutRetroItemInputObjectSchema } from './UserCreateNestedOneWithoutRetroItemInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateWithoutItemCollectionInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    content: z.string(),
    type: z.string(),
    retrospective: z.lazy(() => RetrospectiveCreateNestedOneWithoutItemsInputObjectSchema),
    votes: z.number().optional().nullable(),
    author: z.lazy(() => UserCreateNestedOneWithoutRetroItemInputObjectSchema).optional(),
  })
  .strict()

export const RetroItemCreateWithoutItemCollectionInputObjectSchema = Schema
