import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateWithoutRetroInputObjectSchema } from './InviteCreateWithoutRetroInput.schema'
import { InviteUncheckedCreateWithoutRetroInputObjectSchema } from './InviteUncheckedCreateWithoutRetroInput.schema'
import { InviteUncheckedUpdateWithoutRetroInputObjectSchema } from './InviteUncheckedUpdateWithoutRetroInput.schema'
import { InviteUpdateWithoutRetroInputObjectSchema } from './InviteUpdateWithoutRetroInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteUpsertWithWhereUniqueWithoutRetroInput> = z
  .object({
    where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => InviteUpdateWithoutRetroInputObjectSchema),
      z.lazy(() => InviteUncheckedUpdateWithoutRetroInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InviteCreateWithoutRetroInputObjectSchema),
      z.lazy(() => InviteUncheckedCreateWithoutRetroInputObjectSchema),
    ]),
  })
  .strict()

export const InviteUpsertWithWhereUniqueWithoutRetroInputObjectSchema = Schema
