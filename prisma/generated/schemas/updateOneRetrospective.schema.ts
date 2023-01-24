import { z } from 'zod'

import { RetrospectiveUncheckedUpdateInputObjectSchema } from './objects/RetrospectiveUncheckedUpdateInput.schema'
import { RetrospectiveUpdateInputObjectSchema } from './objects/RetrospectiveUpdateInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './objects/RetrospectiveWhereUniqueInput.schema'

export const RetrospectiveUpdateOneSchema = z.object({
  data: z.union([
    RetrospectiveUpdateInputObjectSchema,
    RetrospectiveUncheckedUpdateInputObjectSchema,
  ]),
  where: RetrospectiveWhereUniqueInputObjectSchema,
})
