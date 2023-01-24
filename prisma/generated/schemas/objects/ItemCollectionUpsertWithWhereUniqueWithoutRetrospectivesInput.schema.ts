import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionCreateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionCreateWithoutRetrospectivesInput.schema'
import { ItemCollectionUncheckedCreateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUncheckedCreateWithoutRetrospectivesInput.schema'
import { ItemCollectionUncheckedUpdateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUncheckedUpdateWithoutRetrospectivesInput.schema'
import { ItemCollectionUpdateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUpdateWithoutRetrospectivesInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './ItemCollectionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionUpsertWithWhereUniqueWithoutRetrospectivesInput> = z
  .object({
    where: z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ItemCollectionUpdateWithoutRetrospectivesInputObjectSchema),
      z.lazy(() => ItemCollectionUncheckedUpdateWithoutRetrospectivesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemCollectionCreateWithoutRetrospectivesInputObjectSchema),
      z.lazy(() => ItemCollectionUncheckedCreateWithoutRetrospectivesInputObjectSchema),
    ]),
  })
  .strict()

export const ItemCollectionUpsertWithWhereUniqueWithoutRetrospectivesInputObjectSchema = Schema
