import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './LinkUncheckedUpdateWithoutWorkspaceInput.schema'
import { LinkUpdateWithoutWorkspaceInputObjectSchema } from './LinkUpdateWithoutWorkspaceInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutWorkspaceInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LinkUpdateWithoutWorkspaceInputObjectSchema),
      z.lazy(() => LinkUncheckedUpdateWithoutWorkspaceInputObjectSchema),
    ]),
  })
  .strict()

export const LinkUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema = Schema
