import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { InviteUpdateManyWithoutInviteeNestedInputObjectSchema } from './InviteUpdateManyWithoutInviteeNestedInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { RetroItemUpdateManyWithoutAuthorNestedInputObjectSchema } from './RetroItemUpdateManyWithoutAuthorNestedInput.schema'
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { WorkspaceUpdateManyWithoutOwnerNestedInputObjectSchema } from './WorkspaceUpdateManyWithoutOwnerNestedInput.schema'

const Schema: z.ZodType<Prisma.UserUpdateWithoutRetrospectivesInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    emailVerified: z
      .union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    role: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    invite: z.lazy(() => InviteUpdateManyWithoutInviteeNestedInputObjectSchema).optional(),
    retroItem: z.lazy(() => RetroItemUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
    workspace: z.lazy(() => WorkspaceUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
    image: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUpdateWithoutRetrospectivesInputObjectSchema = Schema
