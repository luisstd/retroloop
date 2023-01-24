import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateWithoutRetrosInputObjectSchema } from './WorkspaceCreateWithoutRetrosInput.schema'
import { WorkspaceUncheckedCreateWithoutRetrosInputObjectSchema } from './WorkspaceUncheckedCreateWithoutRetrosInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutRetrosInput> = z
  .object({
    where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => WorkspaceCreateWithoutRetrosInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedCreateWithoutRetrosInputObjectSchema),
    ]),
  })
  .strict()

export const WorkspaceCreateOrConnectWithoutRetrosInputObjectSchema = Schema
