import { z } from 'zod'

import { SessionCreateInputObjectSchema } from './objects/SessionCreateInput.schema'
import { SessionUncheckedCreateInputObjectSchema } from './objects/SessionUncheckedCreateInput.schema'
import { SessionUncheckedUpdateInputObjectSchema } from './objects/SessionUncheckedUpdateInput.schema'
import { SessionUpdateInputObjectSchema } from './objects/SessionUpdateInput.schema'
import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema'

export const SessionUpsertSchema = z.object({
  where: SessionWhereUniqueInputObjectSchema,
  create: z.union([SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema]),
  update: z.union([SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema]),
})
