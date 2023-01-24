import { z } from 'zod'

import { LinkUncheckedUpdateInputObjectSchema } from './objects/LinkUncheckedUpdateInput.schema'
import { LinkUpdateInputObjectSchema } from './objects/LinkUpdateInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './objects/LinkWhereUniqueInput.schema'

export const LinkUpdateOneSchema = z.object({
  data: z.union([LinkUpdateInputObjectSchema, LinkUncheckedUpdateInputObjectSchema]),
  where: LinkWhereUniqueInputObjectSchema,
})
