import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutWorkspaceInputObjectSchema } from './UserCreateWithoutWorkspaceInput.schema'
import { UserUncheckedCreateWithoutWorkspaceInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutWorkspaceInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutWorkspaceInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutWorkspaceInputObjectSchema = Schema
