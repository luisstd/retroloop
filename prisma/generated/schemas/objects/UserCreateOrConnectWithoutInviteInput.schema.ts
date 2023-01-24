import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutInviteInputObjectSchema } from './UserCreateWithoutInviteInput.schema'
import { UserUncheckedCreateWithoutInviteInputObjectSchema } from './UserUncheckedCreateWithoutInviteInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutInviteInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutInviteInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutInviteInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutInviteInputObjectSchema = Schema
