import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutWorkspaceInput.schema'
import { RetrospectiveUpdateWithoutWorkspaceInputObjectSchema } from './RetrospectiveUpdateWithoutWorkspaceInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateWithWhereUniqueWithoutWorkspaceInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RetrospectiveUpdateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateWithoutWorkspaceInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema = Schema
