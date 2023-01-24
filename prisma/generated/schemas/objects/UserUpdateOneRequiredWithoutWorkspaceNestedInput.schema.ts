import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutWorkspaceInputObjectSchema } from './UserCreateOrConnectWithoutWorkspaceInput.schema'
import { UserCreateWithoutWorkspaceInputObjectSchema } from './UserCreateWithoutWorkspaceInput.schema'
import { UserUncheckedCreateWithoutWorkspaceInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceInput.schema'
import { UserUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './UserUncheckedUpdateWithoutWorkspaceInput.schema'
import { UserUpdateWithoutWorkspaceInputObjectSchema } from './UserUpdateWithoutWorkspaceInput.schema'
import { UserUpsertWithoutWorkspaceInputObjectSchema } from './UserUpsertWithoutWorkspaceInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkspaceNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutWorkspaceInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutWorkspaceInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspaceInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutWorkspaceInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutWorkspaceInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutWorkspaceInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneRequiredWithoutWorkspaceNestedInputObjectSchema = Schema
