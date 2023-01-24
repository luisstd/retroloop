import { z } from 'zod'

import { SessionCreateInputObjectSchema } from './objects/SessionCreateInput.schema'
import { SessionUncheckedCreateInputObjectSchema } from './objects/SessionUncheckedCreateInput.schema'

export const SessionCreateOneSchema = z.object({
  data: z.union([SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema]),
})
