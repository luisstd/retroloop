import { z } from 'zod'

import { WorkspaceUpdateManyMutationInputObjectSchema } from './objects/WorkspaceUpdateManyMutationInput.schema'
import { WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema'

export const WorkspaceUpdateManySchema = z.object({
  data: WorkspaceUpdateManyMutationInputObjectSchema,
  where: WorkspaceWhereInputObjectSchema.optional(),
})
