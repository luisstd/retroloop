import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema } from './LinkUncheckedCreateNestedManyWithoutWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutRetrosInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    link: z.lazy(() => LinkUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema).optional(),
    userId: z.string(),
  })
  .strict()

export const WorkspaceUncheckedCreateWithoutRetrosInputObjectSchema = Schema
