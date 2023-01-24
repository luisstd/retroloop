import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateWithoutInviteInputObjectSchema } from './RetrospectiveCreateWithoutInviteInput.schema'
import { RetrospectiveUncheckedCreateWithoutInviteInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutInviteInput.schema'
import { RetrospectiveUncheckedUpdateWithoutInviteInputObjectSchema } from './RetrospectiveUncheckedUpdateWithoutInviteInput.schema'
import { RetrospectiveUpdateWithoutInviteInputObjectSchema } from './RetrospectiveUpdateWithoutInviteInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpsertWithoutInviteInput> = z
  .object({
    update: z.union([
      z.lazy(() => RetrospectiveUpdateWithoutInviteInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedUpdateWithoutInviteInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RetrospectiveCreateWithoutInviteInputObjectSchema),
      z.lazy(() => RetrospectiveUncheckedCreateWithoutInviteInputObjectSchema),
    ]),
  })
  .strict()

export const RetrospectiveUpsertWithoutInviteInputObjectSchema = Schema
