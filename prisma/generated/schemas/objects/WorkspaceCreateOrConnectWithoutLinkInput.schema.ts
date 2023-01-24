import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateWithoutLinkInputObjectSchema } from './WorkspaceCreateWithoutLinkInput.schema'
import { WorkspaceUncheckedCreateWithoutLinkInputObjectSchema } from './WorkspaceUncheckedCreateWithoutLinkInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutLinkInput> = z
  .object({
    where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => WorkspaceCreateWithoutLinkInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedCreateWithoutLinkInputObjectSchema),
    ]),
  })
  .strict()

export const WorkspaceCreateOrConnectWithoutLinkInputObjectSchema = Schema
