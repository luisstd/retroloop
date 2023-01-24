import { z } from 'zod'

import { LinkWhereInputObjectSchema } from './objects/LinkWhereInput.schema'

export const LinkDeleteManySchema = z.object({ where: LinkWhereInputObjectSchema.optional() })
