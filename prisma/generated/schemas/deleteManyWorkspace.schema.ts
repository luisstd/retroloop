import { z } from 'zod'

import { WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema'

export const WorkspaceDeleteManySchema = z.object({
  where: WorkspaceWhereInputObjectSchema.optional(),
})
