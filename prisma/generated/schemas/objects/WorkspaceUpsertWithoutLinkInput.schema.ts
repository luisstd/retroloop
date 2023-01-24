import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateWithoutLinkInputObjectSchema } from './WorkspaceCreateWithoutLinkInput.schema'
import { WorkspaceUncheckedCreateWithoutLinkInputObjectSchema } from './WorkspaceUncheckedCreateWithoutLinkInput.schema'
import { WorkspaceUncheckedUpdateWithoutLinkInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutLinkInput.schema'
import { WorkspaceUpdateWithoutLinkInputObjectSchema } from './WorkspaceUpdateWithoutLinkInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpsertWithoutLinkInput> = z
  .object({
    update: z.union([
      z.lazy(() => WorkspaceUpdateWithoutLinkInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedUpdateWithoutLinkInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => WorkspaceCreateWithoutLinkInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedCreateWithoutLinkInputObjectSchema),
    ]),
  })
  .strict()

export const WorkspaceUpsertWithoutLinkInputObjectSchema = Schema
