import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { RetrospectiveUpdateOneRequiredWithoutInviteNestedInputObjectSchema } from './RetrospectiveUpdateOneRequiredWithoutInviteNestedInput.schema'
import { UserUpdateOneRequiredWithoutInviteNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutInviteNestedInput.schema'

const Schema: z.ZodType<Prisma.InviteUpdateInput> = z
  .object({
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    userId: z
      .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    retro: z
      .lazy(() => RetrospectiveUpdateOneRequiredWithoutInviteNestedInputObjectSchema)
      .optional(),
    invitee: z.lazy(() => UserUpdateOneRequiredWithoutInviteNestedInputObjectSchema).optional(),
  })
  .strict()

export const InviteUpdateInputObjectSchema = Schema
