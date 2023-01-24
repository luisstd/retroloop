import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateWithoutRetrosInputObjectSchema } from './WorkspaceCreateWithoutRetrosInput.schema'
import { WorkspaceUncheckedCreateWithoutRetrosInputObjectSchema } from './WorkspaceUncheckedCreateWithoutRetrosInput.schema'
import { WorkspaceUncheckedUpdateWithoutRetrosInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutRetrosInput.schema'
import { WorkspaceUpdateWithoutRetrosInputObjectSchema } from './WorkspaceUpdateWithoutRetrosInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpsertWithoutRetrosInput> = z
  .object({
    update: z.union([
      z.lazy(() => WorkspaceUpdateWithoutRetrosInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedUpdateWithoutRetrosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => WorkspaceCreateWithoutRetrosInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedCreateWithoutRetrosInputObjectSchema),
    ]),
  })
  .strict()

export const WorkspaceUpsertWithoutRetrosInputObjectSchema = Schema
