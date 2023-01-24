import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.RetrospectiveCreateManyWorkspaceInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    name: z.string(),
    date: z.date(),
    phase: z.string().optional(),
    timerExpiration: z.date().optional(),
  })
  .strict()

export const RetrospectiveCreateManyWorkspaceInputObjectSchema = Schema
