import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateManyOwnerInputObjectSchema } from './WorkspaceCreateManyOwnerInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateManyOwnerInputEnvelope> = z
  .object({
    data: z.lazy(() => WorkspaceCreateManyOwnerInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const WorkspaceCreateManyOwnerInputEnvelopeObjectSchema = Schema
