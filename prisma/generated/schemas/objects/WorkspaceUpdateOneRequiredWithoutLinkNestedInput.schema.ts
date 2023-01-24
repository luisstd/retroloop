import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateOrConnectWithoutLinkInputObjectSchema } from './WorkspaceCreateOrConnectWithoutLinkInput.schema'
import { WorkspaceCreateWithoutLinkInputObjectSchema } from './WorkspaceCreateWithoutLinkInput.schema'
import { WorkspaceUncheckedCreateWithoutLinkInputObjectSchema } from './WorkspaceUncheckedCreateWithoutLinkInput.schema'
import { WorkspaceUncheckedUpdateWithoutLinkInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutLinkInput.schema'
import { WorkspaceUpdateWithoutLinkInputObjectSchema } from './WorkspaceUpdateWithoutLinkInput.schema'
import { WorkspaceUpsertWithoutLinkInputObjectSchema } from './WorkspaceUpsertWithoutLinkInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutLinkNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkspaceCreateWithoutLinkInputObjectSchema),
        z.lazy(() => WorkspaceUncheckedCreateWithoutLinkInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutLinkInputObjectSchema).optional(),
    upsert: z.lazy(() => WorkspaceUpsertWithoutLinkInputObjectSchema).optional(),
    connect: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => WorkspaceUpdateWithoutLinkInputObjectSchema),
        z.lazy(() => WorkspaceUncheckedUpdateWithoutLinkInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const WorkspaceUpdateOneRequiredWithoutLinkNestedInputObjectSchema = Schema
