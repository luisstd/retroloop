import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutWorkspaceInputObjectSchema } from './RetrospectiveCreateWithoutWorkspaceInput.schema'
import { RetrospectiveUncheckedCreateWithoutWorkspaceInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutWorkspaceInput.schema'
import { RetrospectiveUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutWorkspaceInput.schema'
import { RetrospectiveUpdateWithoutWorkspaceInputObjectSchema } from './RetrospectiveUpdateWithoutWorkspaceInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpsertWithWhereUniqueWithoutWorkspaceInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RetrospectiveUpdateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateWithoutWorkspaceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutWorkspaceInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema = Schema
