import { z } from 'zod'

import { WorkspaceCreateInputObjectSchema } from './objects/WorkspaceCreateInput.schema'
import { WorkspaceUncheckedCreateInputObjectSchema } from './objects/WorkspaceUncheckedCreateInput.schema'
import { WorkspaceUncheckedUpdateInputObjectSchema } from './objects/WorkspaceUncheckedUpdateInput.schema'
import { WorkspaceUpdateInputObjectSchema } from './objects/WorkspaceUpdateInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema'

export const WorkspaceUpsertSchema = z.object({
  where: WorkspaceWhereUniqueInputObjectSchema,
  create: z.union([WorkspaceCreateInputObjectSchema, WorkspaceUncheckedCreateInputObjectSchema]),
  update: z.union([WorkspaceUpdateInputObjectSchema, WorkspaceUncheckedUpdateInputObjectSchema]),
})
