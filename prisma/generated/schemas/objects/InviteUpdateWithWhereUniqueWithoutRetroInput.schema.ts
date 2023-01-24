import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteUncheckedUpdateWithoutRetroInputObjectSchema } from './InviteUncheckedUpdateWithoutRetroInput.schema'
import { InviteUpdateWithoutRetroInputObjectSchema } from './InviteUpdateWithoutRetroInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteUpdateWithWhereUniqueWithoutRetroInput> = z
  .object({
    where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => InviteUpdateWithoutRetroInputObjectSchema),
      z.lazy(() => InviteUncheckedUpdateWithoutRetroInputObjectSchema),
    ]),
  })
  .strict()

export const InviteUpdateWithWhereUniqueWithoutRetroInputObjectSchema = Schema
