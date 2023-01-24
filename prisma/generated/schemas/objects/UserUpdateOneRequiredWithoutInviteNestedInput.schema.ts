import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutInviteInputObjectSchema } from './UserCreateOrConnectWithoutInviteInput.schema'
import { UserCreateWithoutInviteInputObjectSchema } from './UserCreateWithoutInviteInput.schema'
import { UserUncheckedCreateWithoutInviteInputObjectSchema } from './UserUncheckedCreateWithoutInviteInput.schema'
import { UserUncheckedUpdateWithoutInviteInputObjectSchema } from './UserUncheckedUpdateWithoutInviteInput.schema'
import { UserUpdateWithoutInviteInputObjectSchema } from './UserUpdateWithoutInviteInput.schema'
import { UserUpsertWithoutInviteInputObjectSchema } from './UserUpsertWithoutInviteInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInviteNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutInviteInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutInviteInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInviteInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutInviteInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutInviteInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutInviteInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneRequiredWithoutInviteNestedInputObjectSchema = Schema
