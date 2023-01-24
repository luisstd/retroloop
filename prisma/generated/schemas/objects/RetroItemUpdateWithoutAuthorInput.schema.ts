import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { ItemCollectionUpdateOneWithoutItemsNestedInputObjectSchema } from './ItemCollectionUpdateOneWithoutItemsNestedInput.schema'
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'
import { RetrospectiveUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './RetrospectiveUpdateOneRequiredWithoutItemsNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpdateWithoutAuthorInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    type: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    itemCollection: z
      .lazy(() => ItemCollectionUpdateOneWithoutItemsNestedInputObjectSchema)
      .optional(),
    retrospective: z
      .lazy(() => RetrospectiveUpdateOneRequiredWithoutItemsNestedInputObjectSchema)
      .optional(),
    votes: z
      .union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const RetroItemUpdateWithoutAuthorInputObjectSchema = Schema
