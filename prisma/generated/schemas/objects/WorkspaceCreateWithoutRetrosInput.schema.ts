import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateNestedManyWithoutWorkspaceInputObjectSchema } from './LinkCreateNestedManyWithoutWorkspaceInput.schema'
import { UserCreateNestedOneWithoutWorkspaceInputObjectSchema } from './UserCreateNestedOneWithoutWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateWithoutRetrosInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutWorkspaceInputObjectSchema),
    link: z.lazy(() => LinkCreateNestedManyWithoutWorkspaceInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceCreateWithoutRetrosInputObjectSchema = Schema
