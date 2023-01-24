import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateWithoutWorkspaceInputObjectSchema } from './LinkCreateWithoutWorkspaceInput.schema'
import { LinkUncheckedCreateWithoutWorkspaceInputObjectSchema } from './LinkUncheckedCreateWithoutWorkspaceInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkCreateOrConnectWithoutWorkspaceInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinkCreateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutWorkspaceInputObjectSchema),
    ]),
  })
  .strict()

export const LinkCreateOrConnectWithoutWorkspaceInputObjectSchema = Schema
