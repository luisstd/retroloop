import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateNestedManyWithoutWorkspaceInputObjectSchema } from './LinkCreateNestedManyWithoutWorkspaceInput.schema'
import { RetrospectiveCreateNestedManyWithoutWorkspaceInputObjectSchema } from './RetrospectiveCreateNestedManyWithoutWorkspaceInput.schema'
import { UserCreateNestedOneWithoutWorkspaceInputObjectSchema } from './UserCreateNestedOneWithoutWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutWorkspaceInputObjectSchema),
    link: z.lazy(() => LinkCreateNestedManyWithoutWorkspaceInputObjectSchema).optional(),
    retros: z.lazy(() => RetrospectiveCreateNestedManyWithoutWorkspaceInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceCreateInputObjectSchema = Schema
