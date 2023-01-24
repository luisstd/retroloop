import { z } from 'zod'

import { LinkCreateInputObjectSchema } from './objects/LinkCreateInput.schema'
import { LinkUncheckedCreateInputObjectSchema } from './objects/LinkUncheckedCreateInput.schema'
import { LinkUncheckedUpdateInputObjectSchema } from './objects/LinkUncheckedUpdateInput.schema'
import { LinkUpdateInputObjectSchema } from './objects/LinkUpdateInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './objects/LinkWhereUniqueInput.schema'

export const LinkUpsertSchema = z.object({
  where: LinkWhereUniqueInputObjectSchema,
  create: z.union([LinkCreateInputObjectSchema, LinkUncheckedCreateInputObjectSchema]),
  update: z.union([LinkUpdateInputObjectSchema, LinkUncheckedUpdateInputObjectSchema]),
})
