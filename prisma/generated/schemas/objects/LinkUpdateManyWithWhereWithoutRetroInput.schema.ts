import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkScalarWhereInputObjectSchema } from './LinkScalarWhereInput.schema'
import { LinkUncheckedUpdateManyWithoutLinkInputObjectSchema } from './LinkUncheckedUpdateManyWithoutLinkInput.schema'
import { LinkUpdateManyMutationInputObjectSchema } from './LinkUpdateManyMutationInput.schema'

const Schema: z.ZodType<Prisma.LinkUpdateManyWithWhereWithoutRetroInput> = z
  .object({
    where: z.lazy(() => LinkScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => LinkUpdateManyMutationInputObjectSchema),
      z.lazy(() => LinkUncheckedUpdateManyWithoutLinkInputObjectSchema),
    ]),
  })
  .strict()

export const LinkUpdateManyWithWhereWithoutRetroInputObjectSchema = Schema
