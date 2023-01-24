import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateWithoutRetroInputObjectSchema } from './LinkCreateWithoutRetroInput.schema'
import { LinkUncheckedCreateWithoutRetroInputObjectSchema } from './LinkUncheckedCreateWithoutRetroInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkCreateOrConnectWithoutRetroInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinkCreateWithoutRetroInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutRetroInputObjectSchema),
    ]),
  })
  .strict()

export const LinkCreateOrConnectWithoutRetroInputObjectSchema = Schema
