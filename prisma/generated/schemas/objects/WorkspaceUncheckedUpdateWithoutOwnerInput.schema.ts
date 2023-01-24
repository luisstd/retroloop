import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { LinkUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './LinkUncheckedUpdateManyWithoutWorkspaceNestedInput.schema'
import { RetrospectiveUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './RetrospectiveUncheckedUpdateManyWithoutWorkspaceNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUncheckedUpdateWithoutOwnerInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    link: z.lazy(() => LinkUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional(),
    retros: z
      .lazy(() => RetrospectiveUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema = Schema
