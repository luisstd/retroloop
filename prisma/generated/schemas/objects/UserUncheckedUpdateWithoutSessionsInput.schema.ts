import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { InviteUncheckedUpdateManyWithoutInviteeNestedInputObjectSchema } from './InviteUncheckedUpdateManyWithoutInviteeNestedInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { RetroItemUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './RetroItemUncheckedUpdateManyWithoutAuthorNestedInput.schema'
import { RetrospectiveUncheckedUpdateManyWithoutParticipantsNestedInputObjectSchema } from './RetrospectiveUncheckedUpdateManyWithoutParticipantsNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { WorkspaceUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput.schema'

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z
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
    retrospectives: z
      .lazy(() => RetrospectiveUncheckedUpdateManyWithoutParticipantsNestedInputObjectSchema)
      .optional(),
    invite: z.lazy(() => InviteUncheckedUpdateManyWithoutInviteeNestedInputObjectSchema).optional(),
    retroItem: z
      .lazy(() => RetroItemUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
    workspace: z
      .lazy(() => WorkspaceUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema)
      .optional(),
    image: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedUpdateWithoutSessionsInputObjectSchema = Schema
