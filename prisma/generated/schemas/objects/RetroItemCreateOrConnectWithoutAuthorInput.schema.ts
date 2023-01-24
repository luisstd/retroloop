import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetroItemCreateWithoutAuthorInputObjectSchema } from './RetroItemCreateWithoutAuthorInput.schema'
import { RetroItemUncheckedCreateWithoutAuthorInputObjectSchema } from './RetroItemUncheckedCreateWithoutAuthorInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './RetroItemWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetroItemCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => RetroItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RetroItemCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => RetroItemUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const RetroItemCreateOrConnectWithoutAuthorInputObjectSchema = Schema
