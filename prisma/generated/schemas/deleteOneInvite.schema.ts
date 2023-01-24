import { z } from 'zod'

import { InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema'

export const InviteDeleteOneSchema = z.object({ where: InviteWhereUniqueInputObjectSchema })
