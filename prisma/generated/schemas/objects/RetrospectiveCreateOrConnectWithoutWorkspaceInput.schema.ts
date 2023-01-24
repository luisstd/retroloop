import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutWorkspaceInputObjectSchema } from './RetrospectiveCreateWithoutWorkspaceInput.schema'
import { RetrospectiveUncheckedCreateWithoutWorkspaceInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutWorkspaceInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateOrConnectWithoutWorkspaceInput> = z
  .object({
    where: z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutWorkspaceInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveCreateOrConnectWithoutWorkspaceInputObjectSchema = Schema
