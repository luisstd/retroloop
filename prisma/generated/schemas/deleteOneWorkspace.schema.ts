import { z } from 'zod'

import { WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema'

export const WorkspaceDeleteOneSchema = z.object({ where: WorkspaceWhereUniqueInputObjectSchema })
