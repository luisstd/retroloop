import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { InviteUpdateManyWithoutRetroNestedInputObjectSchema } from './InviteUpdateManyWithoutRetroNestedInput.schema'
import { ItemCollectionUpdateManyWithoutRetrospectivesNestedInputObjectSchema } from './ItemCollectionUpdateManyWithoutRetrospectivesNestedInput.schema'
import { LinkUpdateManyWithoutRetroNestedInputObjectSchema } from './LinkUpdateManyWithoutRetroNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { UserUpdateManyWithoutRetrospectivesNestedInputObjectSchema } from './UserUpdateManyWithoutRetrospectivesNestedInput.schema'
import { WorkspaceUpdateOneWithoutRetrosNestedInputObjectSchema } from './WorkspaceUpdateOneWithoutRetrosNestedInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateWithoutItemsInput> = z
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
    phase: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    participants: z
      .lazy(() => UserUpdateManyWithoutRetrospectivesNestedInputObjectSchema)
      .optional(),
    timerExpiration: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict()

export const RetrospectiveUpdateWithoutItemsInputObjectSchema = Schema
