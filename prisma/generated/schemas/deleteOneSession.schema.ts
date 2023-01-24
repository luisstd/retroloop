import { z } from 'zod'

import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema'

export const SessionDeleteOneSchema = z.object({ where: SessionWhereUniqueInputObjectSchema })
