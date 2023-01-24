import { z } from 'zod'

import { RetrospectiveWhereInputObjectSchema } from './objects/RetrospectiveWhereInput.schema'

export const RetrospectiveDeleteManySchema = z.object({
  where: RetrospectiveWhereInputObjectSchema.optional(),
})
