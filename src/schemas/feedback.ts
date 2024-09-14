import { z } from 'zod'

export const FeedbackCreateInputSchema = z.object({
  content: z.string(),
  type: z.string(),
  retrospectiveId: z.string(),
  votes: z.number(),
  voters: z.array(z.string()),
  userId: z.string().nullable(),
})

export const FeedbackUpdateInputSchema = z.object({
  id: z.string(),
  content: z.string(),
  type: z.string(),
  retrospectiveId: z.string(),
  userId: z.string().nullable(),
  votes: z.number(),
  voters: z.array(z.string()),
})
