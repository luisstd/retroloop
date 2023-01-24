import { z } from 'zod'

import { SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema'

export const SessionDeleteManySchema = z.object({ where: SessionWhereInputObjectSchema.optional() })
