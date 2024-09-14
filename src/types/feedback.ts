import { z } from 'zod'

import {
  FeedbackCreateInputSchema,
  FeedbackUpdateInputSchema,
} from '@/schemas/feedback'

export type FeedbackCreateInput = z.infer<typeof FeedbackCreateInputSchema>

export type FeedbackUpdateInput = z.infer<typeof FeedbackUpdateInputSchema>
