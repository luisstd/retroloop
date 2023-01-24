import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.RetrospectiveCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    name: z.string(),
    date: z.date(),
    phase: z.string().optional(),
    timerExpiration: z.date().optional(),
    workspaceId: z.string().optional().nullable(),
  })
  .strict()

export const RetrospectiveCreateManyInputObjectSchema = Schema
