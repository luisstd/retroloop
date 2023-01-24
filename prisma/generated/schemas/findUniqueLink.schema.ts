import { z } from 'zod'

import { LinkWhereUniqueInputObjectSchema } from './objects/LinkWhereUniqueInput.schema'

export const LinkFindUniqueSchema = z.object({ where: LinkWhereUniqueInputObjectSchema })
