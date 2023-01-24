import { z } from 'zod'

import { LinkCreateManyInputObjectSchema } from './objects/LinkCreateManyInput.schema'

export const LinkCreateManySchema = z.object({
  data: z.union([LinkCreateManyInputObjectSchema, z.array(LinkCreateManyInputObjectSchema)]),
})
