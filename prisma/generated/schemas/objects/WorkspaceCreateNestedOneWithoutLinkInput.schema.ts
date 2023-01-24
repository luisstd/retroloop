import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateOrConnectWithoutLinkInputObjectSchema } from './WorkspaceCreateOrConnectWithoutLinkInput.schema'
import { WorkspaceCreateWithoutLinkInputObjectSchema } from './WorkspaceCreateWithoutLinkInput.schema'
import { WorkspaceUncheckedCreateWithoutLinkInputObjectSchema } from './WorkspaceUncheckedCreateWithoutLinkInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutLinkInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkspaceCreateWithoutLinkInputObjectSchema),
        z.lazy(() => WorkspaceUncheckedCreateWithoutLinkInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutLinkInputObjectSchema).optional(),
    connect: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceCreateNestedOneWithoutLinkInputObjectSchema = Schema
