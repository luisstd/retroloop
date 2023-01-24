import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { LinkUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './LinkUpdateManyWithoutWorkspaceNestedInput.schema'
import { RetrospectiveUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './RetrospectiveUpdateManyWithoutWorkspaceNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutWorkspaceNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWorkspaceNestedInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    owner: z.lazy(() => UserUpdateOneRequiredWithoutWorkspaceNestedInputObjectSchema).optional(),
    link: z.lazy(() => LinkUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional(),
    retros: z.lazy(() => RetrospectiveUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceUpdateInputObjectSchema = Schema
