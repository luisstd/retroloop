import { z } from 'zod'

import { RetroItemWhereUniqueInputObjectSchema } from './objects/RetroItemWhereUniqueInput.schema'

export const RetroItemFindUniqueSchema = z.object({ where: RetroItemWhereUniqueInputObjectSchema })
