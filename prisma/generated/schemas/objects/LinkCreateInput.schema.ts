import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateNestedOneWithoutLinkInputObjectSchema } from './RetrospectiveCreateNestedOneWithoutLinkInput.schema'
import { WorkspaceCreateNestedOneWithoutLinkInputObjectSchema } from './WorkspaceCreateNestedOneWithoutLinkInput.schema'

const Schema: z.ZodType<Prisma.LinkCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    url: z.string(),
    expiration: z.date(),
    retro: z.lazy(() => RetrospectiveCreateNestedOneWithoutLinkInputObjectSchema),
    workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutLinkInputObjectSchema),
  })
  .strict()

export const LinkCreateInputObjectSchema = Schema
