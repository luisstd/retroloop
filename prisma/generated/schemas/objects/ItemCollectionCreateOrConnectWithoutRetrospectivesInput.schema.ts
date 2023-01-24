import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionCreateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionCreateWithoutRetrospectivesInput.schema'
import { ItemCollectionUncheckedCreateWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUncheckedCreateWithoutRetrospectivesInput.schema'
import { ItemCollectionWhereUniqueInputObjectSchema } from './ItemCollectionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionCreateOrConnectWithoutRetrospectivesInput> = z
  .object({
    where: z.lazy(() => ItemCollectionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemCollectionCreateWithoutRetrospectivesInputObjectSchema),
      z.lazy(() => ItemCollectionUncheckedCreateWithoutRetrospectivesInputObjectSchema),
    ]),
  })
  .strict()

export const ItemCollectionCreateOrConnectWithoutRetrospectivesInputObjectSchema = Schema
