import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateManyWorkspaceInputObjectSchema } from './RetrospectiveCreateManyWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateManyWorkspaceInputEnvelope> = z
  .object({
    data: z.lazy(() => RetrospectiveCreateManyWorkspaceInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const RetrospectiveCreateManyWorkspaceInputEnvelopeObjectSchema = Schema
