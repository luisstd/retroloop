import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateOrConnectWithoutRetrosInputObjectSchema } from './WorkspaceCreateOrConnectWithoutRetrosInput.schema'
import { WorkspaceCreateWithoutRetrosInputObjectSchema } from './WorkspaceCreateWithoutRetrosInput.schema'
import { WorkspaceUncheckedCreateWithoutRetrosInputObjectSchema } from './WorkspaceUncheckedCreateWithoutRetrosInput.schema'
import { WorkspaceUncheckedUpdateWithoutRetrosInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutRetrosInput.schema'
import { WorkspaceUpdateWithoutRetrosInputObjectSchema } from './WorkspaceUpdateWithoutRetrosInput.schema'
import { WorkspaceUpsertWithoutRetrosInputObjectSchema } from './WorkspaceUpsertWithoutRetrosInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpdateOneWithoutRetrosNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkspaceCreateWithoutRetrosInputObjectSchema),
        z.lazy(() => WorkspaceUncheckedCreateWithoutRetrosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => WorkspaceCreateOrConnectWithoutRetrosInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => WorkspaceUpsertWithoutRetrosInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => WorkspaceUpdateWithoutRetrosInputObjectSchema),
        z.lazy(() => WorkspaceUncheckedUpdateWithoutRetrosInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const WorkspaceUpdateOneWithoutRetrosNestedInputObjectSchema = Schema
