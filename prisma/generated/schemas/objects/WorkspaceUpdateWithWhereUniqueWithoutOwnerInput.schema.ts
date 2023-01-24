import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutOwnerInput.schema'
import { WorkspaceUpdateWithoutOwnerInputObjectSchema } from './WorkspaceUpdateWithoutOwnerInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpdateWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => WorkspaceUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict()

export const WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = Schema
