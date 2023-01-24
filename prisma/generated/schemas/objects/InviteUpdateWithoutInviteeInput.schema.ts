import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { RetrospectiveUpdateOneRequiredWithoutInviteNestedInputObjectSchema } from './RetrospectiveUpdateOneRequiredWithoutInviteNestedInput.schema'

const Schema: z.ZodType<Prisma.InviteUpdateWithoutInviteeInput> = z
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
  })
  .strict()

export const InviteUpdateWithoutInviteeInputObjectSchema = Schema
