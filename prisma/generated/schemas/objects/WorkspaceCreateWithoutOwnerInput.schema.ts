import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateNestedManyWithoutWorkspaceInputObjectSchema } from './LinkCreateNestedManyWithoutWorkspaceInput.schema'
import { RetrospectiveCreateNestedManyWithoutWorkspaceInputObjectSchema } from './RetrospectiveCreateNestedManyWithoutWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    link: z.lazy(() => LinkCreateNestedManyWithoutWorkspaceInputObjectSchema).optional(),
    retros: z.lazy(() => RetrospectiveCreateNestedManyWithoutWorkspaceInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceCreateWithoutOwnerInputObjectSchema = Schema
