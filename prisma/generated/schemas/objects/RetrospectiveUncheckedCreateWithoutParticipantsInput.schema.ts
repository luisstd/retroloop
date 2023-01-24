import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteUncheckedCreateNestedManyWithoutRetroInputObjectSchema } from './InviteUncheckedCreateNestedManyWithoutRetroInput.schema'
import { ItemCollectionUncheckedCreateNestedManyWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUncheckedCreateNestedManyWithoutRetrospectivesInput.schema'
import { LinkUncheckedCreateNestedManyWithoutRetroInputObjectSchema } from './LinkUncheckedCreateNestedManyWithoutRetroInput.schema'
import { RetroItemUncheckedCreateNestedManyWithoutRetrospectiveInputObjectSchema } from './RetroItemUncheckedCreateNestedManyWithoutRetrospectiveInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUncheckedCreateWithoutParticipantsInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    name: z.string(),
    date: z.date(),
    invite: z.lazy(() => InviteUncheckedCreateNestedManyWithoutRetroInputObjectSchema).optional(),
    itemCollections: z
      .lazy(() => ItemCollectionUncheckedCreateNestedManyWithoutRetrospectivesInputObjectSchema)
      .optional(),
    link: z.lazy(() => LinkUncheckedCreateNestedManyWithoutRetroInputObjectSchema).optional(),
    items: z
      .lazy(() => RetroItemUncheckedCreateNestedManyWithoutRetrospectiveInputObjectSchema)
      .optional(),
    phase: z.string().optional(),
    timerExpiration: z.date().optional(),
    workspaceId: z.string().optional().nullable(),
  })
  .strict()

export const RetrospectiveUncheckedCreateWithoutParticipantsInputObjectSchema = Schema
