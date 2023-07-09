import { z } from 'zod'

export const RetrospectiveCreateInputSchema = z.object({
  name: z.string(),
  date: z.date(),
  phase: z.string(),
  timerExpiration: z.date(),
})

export const RetrospectiveUpdateInputSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  name: z.string(),
  date: z.date(),
  phase: z.string(),
  timerExpiration: z.date(),
  workspaceId: z.string().nullable(),
})
