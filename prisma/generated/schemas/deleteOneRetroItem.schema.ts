import { z } from 'zod'

import { RetroItemWhereUniqueInputObjectSchema } from './objects/RetroItemWhereUniqueInput.schema'

export const RetroItemDeleteOneSchema = z.object({ where: RetroItemWhereUniqueInputObjectSchema })
