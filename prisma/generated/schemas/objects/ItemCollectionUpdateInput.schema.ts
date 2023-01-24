import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'
import { RetroItemUpdateManyWithoutItemCollectionNestedInputObjectSchema } from './RetroItemUpdateManyWithoutItemCollectionNestedInput.schema'
import { RetrospectiveUpdateManyWithoutItemCollectionsNestedInputObjectSchema } from './RetrospectiveUpdateManyWithoutItemCollectionsNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    votes: z
      .union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    retrospectives: z
      .lazy(() => RetrospectiveUpdateManyWithoutItemCollectionsNestedInputObjectSchema)
      .optional(),
    items: z.lazy(() => RetroItemUpdateManyWithoutItemCollectionNestedInputObjectSchema).optional(),
    retrospectiveId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict()

export const ItemCollectionUpdateInputObjectSchema = Schema
