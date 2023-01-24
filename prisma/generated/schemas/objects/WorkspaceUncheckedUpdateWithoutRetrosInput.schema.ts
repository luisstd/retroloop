import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { LinkUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './LinkUncheckedUpdateManyWithoutWorkspaceNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUncheckedUpdateWithoutRetrosInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    link: z.lazy(() => LinkUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict()

export const WorkspaceUncheckedUpdateWithoutRetrosInputObjectSchema = Schema
