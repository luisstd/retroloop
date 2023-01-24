import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { InviteUpdateManyWithoutRetroNestedInputObjectSchema } from './InviteUpdateManyWithoutRetroNestedInput.schema'
import { ItemCollectionUpdateManyWithoutRetrospectivesNestedInputObjectSchema } from './ItemCollectionUpdateManyWithoutRetrospectivesNestedInput.schema'
import { LinkUpdateManyWithoutRetroNestedInputObjectSchema } from './LinkUpdateManyWithoutRetroNestedInput.schema'
import { RetroItemUpdateManyWithoutRetrospectiveNestedInputObjectSchema } from './RetroItemUpdateManyWithoutRetrospectiveNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { WorkspaceUpdateOneWithoutRetrosNestedInputObjectSchema } from './WorkspaceUpdateOneWithoutRetrosNestedInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateWithoutParticipantsInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    date: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    workspace: z.lazy(() => WorkspaceUpdateOneWithoutRetrosNestedInputObjectSchema).optional(),
    invite: z.lazy(() => InviteUpdateManyWithoutRetroNestedInputObjectSchema).optional(),
    itemCollections: z
      .lazy(() => ItemCollectionUpdateManyWithoutRetrospectivesNestedInputObjectSchema)
      .optional(),
    link: z.lazy(() => LinkUpdateManyWithoutRetroNestedInputObjectSchema).optional(),
    items: z.lazy(() => RetroItemUpdateManyWithoutRetrospectiveNestedInputObjectSchema).optional(),
    phase: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    timerExpiration: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict()

export const RetrospectiveUpdateWithoutParticipantsInputObjectSchema = Schema
