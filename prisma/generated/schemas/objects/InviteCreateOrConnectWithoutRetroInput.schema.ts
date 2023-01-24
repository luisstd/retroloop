import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateWithoutRetroInputObjectSchema } from './InviteCreateWithoutRetroInput.schema'
import { InviteUncheckedCreateWithoutRetroInputObjectSchema } from './InviteUncheckedCreateWithoutRetroInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.InviteCreateOrConnectWithoutRetroInput> = z
  .object({
    where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InviteCreateWithoutRetroInputObjectSchema),
      z.lazy(() => InviteUncheckedCreateWithoutRetroInputObjectSchema),
    ]),
  })
  .strict()

export const InviteCreateOrConnectWithoutRetroInputObjectSchema = Schema
