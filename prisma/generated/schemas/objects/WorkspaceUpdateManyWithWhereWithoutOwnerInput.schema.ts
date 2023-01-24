import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceScalarWhereInputObjectSchema } from './WorkspaceScalarWhereInput.schema'
import { WorkspaceUncheckedUpdateManyWithoutWorkspaceInputObjectSchema } from './WorkspaceUncheckedUpdateManyWithoutWorkspaceInput.schema'
import { WorkspaceUpdateManyMutationInputObjectSchema } from './WorkspaceUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpdateManyWithWhereWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => WorkspaceScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => WorkspaceUpdateManyMutationInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedUpdateManyWithoutWorkspaceInputObjectSchema),
    ]),
  })
  .strict()

export const WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema
