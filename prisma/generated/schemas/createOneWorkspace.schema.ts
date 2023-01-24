import { z } from 'zod'

import { WorkspaceCreateInputObjectSchema } from './objects/WorkspaceCreateInput.schema'
import { WorkspaceUncheckedCreateInputObjectSchema } from './objects/WorkspaceUncheckedCreateInput.schema'

export const WorkspaceCreateOneSchema = z.object({
  data: z.union([WorkspaceCreateInputObjectSchema, WorkspaceUncheckedCreateInputObjectSchema]),
})
