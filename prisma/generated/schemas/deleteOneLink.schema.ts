import { z } from 'zod'

import { LinkWhereUniqueInputObjectSchema } from './objects/LinkWhereUniqueInput.schema'

export const LinkDeleteOneSchema = z.object({ where: LinkWhereUniqueInputObjectSchema })
