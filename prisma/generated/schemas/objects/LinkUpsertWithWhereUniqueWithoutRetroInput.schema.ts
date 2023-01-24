import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateWithoutRetroInputObjectSchema } from './LinkCreateWithoutRetroInput.schema'
import { LinkUncheckedCreateWithoutRetroInputObjectSchema } from './LinkUncheckedCreateWithoutRetroInput.schema'
import { LinkUncheckedUpdateWithoutRetroInputObjectSchema } from './LinkUncheckedUpdateWithoutRetroInput.schema'
import { LinkUpdateWithoutRetroInputObjectSchema } from './LinkUpdateWithoutRetroInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutRetroInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LinkUpdateWithoutRetroInputObjectSchema),
      z.lazy(() => LinkUncheckedUpdateWithoutRetroInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LinkCreateWithoutRetroInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutRetroInputObjectSchema),
    ]),
  })
  .strict()

export const LinkUpsertWithWhereUniqueWithoutRetroInputObjectSchema = Schema
