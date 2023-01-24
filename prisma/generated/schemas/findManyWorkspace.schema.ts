import { z } from 'zod'

import { WorkspaceScalarFieldEnumSchema } from './enums/WorkspaceScalarFieldEnum.schema'
import { WorkspaceOrderByWithRelationInputObjectSchema } from './objects/WorkspaceOrderByWithRelationInput.schema'
import { WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema'

export const WorkspaceFindManySchema = z.object({
  orderBy: z
    .union([
      WorkspaceOrderByWithRelationInputObjectSchema,
      WorkspaceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: WorkspaceWhereInputObjectSchema.optional(),
  cursor: WorkspaceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(WorkspaceScalarFieldEnumSchema).optional(),
})
