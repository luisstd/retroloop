import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema'
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'
import { SessionUncheckedUpdateWithoutUserInputObjectSchema } from './SessionUncheckedUpdateWithoutUserInput.schema'
import { SessionUpdateWithoutUserInputObjectSchema } from './SessionUpdateWithoutUserInput.schema'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SessionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
      z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
