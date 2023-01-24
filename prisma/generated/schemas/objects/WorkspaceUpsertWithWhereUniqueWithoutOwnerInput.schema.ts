import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateWithoutOwnerInputObjectSchema } from './WorkspaceCreateWithoutOwnerInput.schema'
import { WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateWithoutOwnerInput.schema'
import { WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutOwnerInput.schema'
import { WorkspaceUpdateWithoutOwnerInputObjectSchema } from './WorkspaceUpdateWithoutOwnerInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpsertWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => WorkspaceUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict()

export const WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectSchema = Schema
