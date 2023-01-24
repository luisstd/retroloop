import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutWorkspaceInputObjectSchema } from './UserCreateWithoutWorkspaceInput.schema'
import { UserUncheckedCreateWithoutWorkspaceInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceInput.schema'
import { UserUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './UserUncheckedUpdateWithoutWorkspaceInput.schema'
import { UserUpdateWithoutWorkspaceInputObjectSchema } from './UserUpdateWithoutWorkspaceInput.schema'

const Schema: z.ZodType<Prisma.UserUpsertWithoutWorkspaceInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutWorkspaceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutWorkspaceInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutWorkspaceInputObjectSchema = Schema
