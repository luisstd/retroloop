import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateWithoutRetrospectiveInputObjectSchema } from './RetroItemCreateWithoutRetrospectiveInput.schema'
import { RetroItemUncheckedCreateWithoutRetrospectiveInputObjectSchema } from './RetroItemUncheckedCreateWithoutRetrospectiveInput.schema'
import { RetroItemUncheckedUpdateWithoutRetrospectiveInputObjectSchema } from './RetroItemUncheckedUpdateWithoutRetrospectiveInput.schema'
import { RetroItemUpdateWithoutRetrospectiveInputObjectSchema } from './RetroItemUpdateWithoutRetrospectiveInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpsertWithWhereUniqueWithoutRetrospectiveInput> = z
  .object({
    where: z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RetroItemUpdateWithoutRetrospectiveInputObjectSchema),
      z.lazy(() => RetroItemUncheckedUpdateWithoutRetrospectiveInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RetroItemCreateWithoutRetrospectiveInputObjectSchema),
      z.lazy(() => RetroItemUncheckedCreateWithoutRetrospectiveInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemUpsertWithWhereUniqueWithoutRetrospectiveInputObjectSchema = Schema
