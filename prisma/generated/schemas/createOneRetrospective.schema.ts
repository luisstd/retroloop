import { z } from 'zod'

import { RetrospectiveCreateInputObjectSchema } from './objects/RetrospectiveCreateInput.schema'
import { RetrospectiveUncheckedCreateInputObjectSchema } from './objects/RetrospectiveUncheckedCreateInput.schema'

export const RetrospectiveCreateOneSchema = z.object({
  data: z.union([
    RetrospectiveCreateInputObjectSchema,
    RetrospectiveUncheckedCreateInputObjectSchema,
  ]),
})
