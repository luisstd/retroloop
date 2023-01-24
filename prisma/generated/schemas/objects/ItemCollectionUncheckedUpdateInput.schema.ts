import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'
import { RetroItemUncheckedUpdateManyWithoutItemCollectionNestedInputObjectSchema } from './RetroItemUncheckedUpdateManyWithoutItemCollectionNestedInput.schema'
import { RetrospectiveUncheckedUpdateManyWithoutItemCollectionsNestedInputObjectSchema } from './RetrospectiveUncheckedUpdateManyWithoutItemCollectionsNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUncheckedUpdateInput> = z
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
      .lazy(() => RetrospectiveUncheckedUpdateManyWithoutItemCollectionsNestedInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => RetroItemUncheckedUpdateManyWithoutItemCollectionNestedInputObjectSchema)
      .optional(),
    retrospectiveId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict()

export const ItemCollectionUncheckedUpdateInputObjectSchema = Schema
