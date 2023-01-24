import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveScalarWhereInputObjectSchema } from './RetrospectiveScalarWhereInput.schema'
import { RetrospectiveUncheckedUpdateManyWithoutRetrosInputObjectSchema } from './RetrospectiveUncheckedUpdateManyWithoutRetrosInput.schema'
import { RetrospectiveUpdateManyMutationInputObjectSchema } from './RetrospectiveUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateManyWithWhereWithoutWorkspaceInput> = z
  .object({
    where: z.lazy(() => RetrospectiveScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RetrospectiveUpdateManyMutationInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateManyWithoutRetrosInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpdateManyWithWhereWithoutWorkspaceInputObjectSchema = Schema
