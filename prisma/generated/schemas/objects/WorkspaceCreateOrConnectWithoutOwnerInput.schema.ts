import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateWithoutOwnerInputObjectSchema } from './WorkspaceCreateWithoutOwnerInput.schema'
import { WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateWithoutOwnerInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict()

export const WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema = Schema
