import { z } from 'zod'

import { SessionCreateManyInputObjectSchema } from './objects/SessionCreateManyInput.schema'

export const SessionCreateManySchema = z.object({
  data: z.union([SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema)]),
})
