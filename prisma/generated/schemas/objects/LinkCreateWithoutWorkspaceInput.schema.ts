import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateNestedOneWithoutLinkInputObjectSchema } from './RetrospectiveCreateNestedOneWithoutLinkInput.schema'

const Schema: z.ZodType<Prisma.LinkCreateWithoutWorkspaceInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    url: z.string(),
    expiration: z.date(),
    retro: z.lazy(() => RetrospectiveCreateNestedOneWithoutLinkInputObjectSchema),
  })
  .strict()

export const LinkCreateWithoutWorkspaceInputObjectSchema = Schema
