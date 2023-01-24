import { z } from 'zod'

import { RetrospectiveCreateInputObjectSchema } from './objects/RetrospectiveCreateInput.schema'
import { RetrospectiveUncheckedCreateInputObjectSchema } from './objects/RetrospectiveUncheckedCreateInput.schema'
import { RetrospectiveUncheckedUpdateInputObjectSchema } from './objects/RetrospectiveUncheckedUpdateInput.schema'
import { RetrospectiveUpdateInputObjectSchema } from './objects/RetrospectiveUpdateInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './objects/RetrospectiveWhereUniqueInput.schema'

export const RetrospectiveUpsertSchema = z.object({
  where: RetrospectiveWhereUniqueInputObjectSchema,
  create: z.union([
    RetrospectiveCreateInputObjectSchema,
    RetrospectiveUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RetrospectiveUpdateInputObjectSchema,
    RetrospectiveUncheckedUpdateInputObjectSchema,
  ]),
})
