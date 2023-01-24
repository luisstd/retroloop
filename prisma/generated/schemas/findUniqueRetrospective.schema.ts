import { z } from 'zod'

import { RetrospectiveWhereUniqueInputObjectSchema } from './objects/RetrospectiveWhereUniqueInput.schema'

export const RetrospectiveFindUniqueSchema = z.object({
  where: RetrospectiveWhereUniqueInputObjectSchema,
})
