import { z } from 'zod'

import { RetrospectiveWhereUniqueInputObjectSchema } from './objects/RetrospectiveWhereUniqueInput.schema'

export const RetrospectiveDeleteOneSchema = z.object({
  where: RetrospectiveWhereUniqueInputObjectSchema,
})
