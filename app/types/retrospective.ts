import { z } from 'zod'

import {
  RetrospectiveCreateInputSchema,
  RetrospectiveUpdateInputSchema,
} from '@/schemas/retrospective'

export type RetrospectiveCreateInput = z.infer<typeof RetrospectiveCreateInputSchema>

export type RetrospectiveUpdateInput = z.infer<typeof RetrospectiveUpdateInputSchema>
