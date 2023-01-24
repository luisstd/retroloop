import { z } from 'zod'

import { LinkCreateInputObjectSchema } from './objects/LinkCreateInput.schema'
import { LinkUncheckedCreateInputObjectSchema } from './objects/LinkUncheckedCreateInput.schema'

export const LinkCreateOneSchema = z.object({
  data: z.union([LinkCreateInputObjectSchema, LinkUncheckedCreateInputObjectSchema]),
})
