import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkUncheckedUpdateWithoutRetroInputObjectSchema } from './LinkUncheckedUpdateWithoutRetroInput.schema'
import { LinkUpdateWithoutRetroInputObjectSchema } from './LinkUpdateWithoutRetroInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutRetroInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LinkUpdateWithoutRetroInputObjectSchema),
      z.lazy(() => LinkUncheckedUpdateWithoutRetroInputObjectSchema),
    ]),
  })
  .strict()

export const LinkUpdateWithWhereUniqueWithoutRetroInputObjectSchema = Schema
