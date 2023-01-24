import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionUncheckedUpdateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUncheckedUpdateWithoutRetrospectivesInput.schema'
import { ItemCollectionUpdateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUpdateWithoutRetrospectivesInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './ItemCollectionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUpdateWithWhereUniqueWithoutRetrospectivesInput> = z
  .object({
    where: z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ItemCollectionUpdateWithoutRetrospectivesInputObjectSchema),
      z.lazy(() => ItemCollectionUncheckedUpdateWithoutRetrospectivesInputObjectSchema),
    ]),
  })
  .strict()

export const ItemCollectionUpdateWithWhereUniqueWithoutRetrospectivesInputObjectSchema = Schema
