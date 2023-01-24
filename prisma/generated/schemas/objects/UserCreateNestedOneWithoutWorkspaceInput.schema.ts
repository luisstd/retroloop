import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutWorkspaceInputObjectSchema } from './UserCreateOrConnectWithoutWorkspaceInput.schema'
import { UserCreateWithoutWorkspaceInputObjectSchema } from './UserCreateWithoutWorkspaceInput.schema'
import { UserUncheckedCreateWithoutWorkspaceInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutWorkspaceInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutWorkspaceInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutWorkspaceInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspaceInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutWorkspaceInputObjectSchema = Schema
