import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateNestedManyWithoutWorkspaceInputObjectSchema } from './RetrospectiveCreateNestedManyWithoutWorkspaceInput.schema'
import { UserCreateNestedOneWithoutWorkspaceInputObjectSchema } from './UserCreateNestedOneWithoutWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateWithoutLinkInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutWorkspaceInputObjectSchema),
    retros: z.lazy(() => RetrospectiveCreateNestedManyWithoutWorkspaceInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceCreateWithoutLinkInputObjectSchema = Schema
