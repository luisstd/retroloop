import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SessionUncheckedUpdateWithoutUserInputObjectSchema } from './SessionUncheckedUpdateWithoutUserInput.schema'
import { SessionUpdateWithoutUserInputObjectSchema } from './SessionUpdateWithoutUserInput.schema'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SessionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
