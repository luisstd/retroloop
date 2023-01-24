import { z } from 'zod'

import { WorkspaceCreateManyInputObjectSchema } from './objects/WorkspaceCreateManyInput.schema'

export const WorkspaceCreateManySchema = z.object({
  data: z.union([
    WorkspaceCreateManyInputObjectSchema,
    z.array(WorkspaceCreateManyInputObjectSchema),
  ]),
})
