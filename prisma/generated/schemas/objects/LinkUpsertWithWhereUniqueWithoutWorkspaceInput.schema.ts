import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateWithoutWorkspaceInputObjectSchema } from './LinkCreateWithoutWorkspaceInput.schema'
import { LinkUncheckedCreateWithoutWorkspaceInputObjectSchema } from './LinkUncheckedCreateWithoutWorkspaceInput.schema'
import { LinkUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './LinkUncheckedUpdateWithoutWorkspaceInput.schema'
import { LinkUpdateWithoutWorkspaceInputObjectSchema } from './LinkUpdateWithoutWorkspaceInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutWorkspaceInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LinkUpdateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => LinkUncheckedUpdateWithoutWorkspaceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LinkCreateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutWorkspaceInputObjectSchema),
    ]),
  })
  .strict()

export const LinkUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema = Schema
