import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemUncheckedUpdateWithoutAuthorInputObjectSchema } from './RetroItemUncheckedUpdateWithoutAuthorInput.schema'
import { RetroItemUpdateWithoutAuthorInputObjectSchema } from './RetroItemUpdateWithoutAuthorInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemUpdateWithWhereUniqueWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RetroItemUpdateWithoutAuthorInputObjectSchema),
      z.lazy(() => RetroItemUncheckedUpdateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemUpdateWithWhereUniqueWithoutAuthorInputObjectSchema = Schema
