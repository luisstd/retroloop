import {
  RetrospectiveCreateInputSchema,
  RetrospectiveUpdateInputSchema,
} from 'src/app/schemas/retrospective'
import { z } from 'zod'

export type RetrospectiveCreateInput = z.infer<typeof RetrospectiveCreateInputSchema>

export type RetrospectiveUpdateInput = z.infer<typeof RetrospectiveUpdateInputSchema>
