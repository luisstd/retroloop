import { z } from 'zod'

import { RetrospectiveCreateManyInputObjectSchema } from './objects/RetrospectiveCreateManyInput.schema'

export const RetrospectiveCreateManySchema = z.object({
  data: z.union([
    RetrospectiveCreateManyInputObjectSchema,
    z.array(RetrospectiveCreateManyInputObjectSchema),
  ]),
})
