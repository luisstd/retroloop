import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateWithoutAuthorInputObjectSchema } from './RetroItemCreateWithoutAuthorInput.schema'
import { RetroItemUncheckedCreateWithoutAuthorInputObjectSchema } from './RetroItemUncheckedCreateWithoutAuthorInput.schema'
import { RetroItemUncheckedUpdateWithoutAuthorInputObjectSchema } from './RetroItemUncheckedUpdateWithoutAuthorInput.schema'
import { RetroItemUpdateWithoutAuthorInputObjectSchema } from './RetroItemUpdateWithoutAuthorInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpsertWithWhereUniqueWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RetroItemUpdateWithoutAuthorInputObjectSchema),
      z.lazy(() => RetroItemUncheckedUpdateWithoutAuthorInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RetroItemCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => RetroItemUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = Schema
