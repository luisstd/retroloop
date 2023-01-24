import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'
import { UserUncheckedUpdateManyWithoutParticipantsInputObjectSchema } from './UserUncheckedUpdateManyWithoutParticipantsInput.schema'
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutRetrospectivesInput> = z
  .object({
    where: z.lazy(() => UserScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateManyWithoutParticipantsInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpdateManyWithWhereWithoutRetrospectivesInputObjectSchema = Schema
