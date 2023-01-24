import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveScalarWhereInputObjectSchema } from './RetrospectiveScalarWhereInput.schema'
import { RetrospectiveUncheckedUpdateManyWithoutRetrospectivesInputObjectSchema } from './RetrospectiveUncheckedUpdateManyWithoutRetrospectivesInput.schema'
import { RetrospectiveUpdateManyMutationInputObjectSchema } from './RetrospectiveUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateManyWithWhereWithoutItemCollectionsInput> = z
  .object({
    where: z.lazy(() => RetrospectiveScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RetrospectiveUpdateManyMutationInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateManyWithoutRetrospectivesInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpdateManyWithWhereWithoutItemCollectionsInputObjectSchema = Schema
