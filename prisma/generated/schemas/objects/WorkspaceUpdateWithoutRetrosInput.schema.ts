import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { LinkUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './LinkUpdateManyWithoutWorkspaceNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutWorkspaceNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWorkspaceNestedInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpdateWithoutRetrosInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    owner: z.lazy(() => UserUpdateOneRequiredWithoutWorkspaceNestedInputObjectSchema).optional(),
    link: z.lazy(() => LinkUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceUpdateWithoutRetrosInputObjectSchema = Schema
