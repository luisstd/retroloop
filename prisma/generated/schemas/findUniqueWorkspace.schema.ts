import { z } from 'zod'

import { WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema'

export const WorkspaceFindUniqueSchema = z.object({ where: WorkspaceWhereUniqueInputObjectSchema })
