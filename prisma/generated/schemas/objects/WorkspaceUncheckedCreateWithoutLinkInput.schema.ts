import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema } from './RetrospectiveUncheckedCreateNestedManyWithoutWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutLinkInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    retros: z
      .lazy(() => RetrospectiveUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema)
      .optional(),
    userId: z.string(),
  })
  .strict()

export const WorkspaceUncheckedCreateWithoutLinkInputObjectSchema = Schema
