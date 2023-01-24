import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema } from './LinkUncheckedCreateNestedManyWithoutWorkspaceInput.schema'
import { RetrospectiveUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema } from './RetrospectiveUncheckedCreateNestedManyWithoutWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    link: z.lazy(() => LinkUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema).optional(),
    retros: z
      .lazy(() => RetrospectiveUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema)
      .optional(),
  })
  .strict()

export const WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema = Schema
