import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateNestedOneWithoutLinkInputObjectSchema } from './WorkspaceCreateNestedOneWithoutLinkInput.schema'

const Schema: z.ZodType<Prisma.LinkCreateWithoutRetroInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    url: z.string(),
    expiration: z.date(),
    workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutLinkInputObjectSchema),
  })
  .strict()

export const LinkCreateWithoutRetroInputObjectSchema = Schema
