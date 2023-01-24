import { z } from 'zod'

import { InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema'

export const InviteFindUniqueSchema = z.object({ where: InviteWhereUniqueInputObjectSchema })
