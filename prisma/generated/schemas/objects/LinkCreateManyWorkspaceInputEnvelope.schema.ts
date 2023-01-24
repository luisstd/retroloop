import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateManyWorkspaceInputObjectSchema } from './LinkCreateManyWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.LinkCreateManyWorkspaceInputEnvelope> = z
  .object({
    data: z.lazy(() => LinkCreateManyWorkspaceInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const LinkCreateManyWorkspaceInputEnvelopeObjectSchema = Schema
