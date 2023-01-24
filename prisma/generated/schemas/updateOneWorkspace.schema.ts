import { z } from 'zod'

import { WorkspaceUncheckedUpdateInputObjectSchema } from './objects/WorkspaceUncheckedUpdateInput.schema'
import { WorkspaceUpdateInputObjectSchema } from './objects/WorkspaceUpdateInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema'

export const WorkspaceUpdateOneSchema = z.object({
  data: z.union([WorkspaceUpdateInputObjectSchema, WorkspaceUncheckedUpdateInputObjectSchema]),
  where: WorkspaceWhereUniqueInputObjectSchema,
})
