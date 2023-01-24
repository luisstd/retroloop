import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateOrConnectWithoutRetrosInputObjectSchema } from './WorkspaceCreateOrConnectWithoutRetrosInput.schema'
import { WorkspaceCreateWithoutRetrosInputObjectSchema } from './WorkspaceCreateWithoutRetrosInput.schema'
import { WorkspaceUncheckedCreateWithoutRetrosInputObjectSchema } from './WorkspaceUncheckedCreateWithoutRetrosInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutRetrosInput> = z
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
    connect: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceCreateNestedOneWithoutRetrosInputObjectSchema = Schema
