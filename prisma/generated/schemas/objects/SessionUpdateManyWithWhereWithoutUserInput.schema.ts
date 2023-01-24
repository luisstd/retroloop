import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema'
import { SessionUncheckedUpdateManyWithoutSessionsInputObjectSchema } from './SessionUncheckedUpdateManyWithoutSessionsInput.schema'
import { SessionUpdateManyMutationInputObjectSchema } from './SessionUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => SessionScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => SessionUpdateManyMutationInputObjectSchema),
      z.lazy(() => SessionUncheckedUpdateManyWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict()

export const SessionUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
