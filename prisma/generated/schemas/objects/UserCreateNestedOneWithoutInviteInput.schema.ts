import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutInviteInputObjectSchema } from './UserCreateOrConnectWithoutInviteInput.schema'
import { UserCreateWithoutInviteInputObjectSchema } from './UserCreateWithoutInviteInput.schema'
import { UserUncheckedCreateWithoutInviteInputObjectSchema } from './UserUncheckedCreateWithoutInviteInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutInviteInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutInviteInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutInviteInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInviteInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutInviteInputObjectSchema = Schema
