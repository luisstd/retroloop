import { z } from 'zod'

import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema'

export const SessionFindUniqueSchema = z.object({ where: SessionWhereUniqueInputObjectSchema })
