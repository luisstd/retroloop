import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteUncheckedCreateNestedManyWithoutRetroInputObjectSchema } from './InviteUncheckedCreateNestedManyWithoutRetroInput.schema'
import { ItemCollectionUncheckedCreateNestedManyWithoutRetrospectivesInputObjectSchema } from './ItemCollectionUncheckedCreateNestedManyWithoutRetrospectivesInput.schema'
import { RetroItemUncheckedCreateNestedManyWithoutRetrospectiveInputObjectSchema } from './RetroItemUncheckedCreateNestedManyWithoutRetrospectiveInput.schema'
import { UserUncheckedCreateNestedManyWithoutRetrospectivesInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutRetrospectivesInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUncheckedCreateWithoutLinkInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    name: z.string(),
    date: z.date(),
    invite: z.lazy(() => InviteUncheckedCreateNestedManyWithoutRetroInputObjectSchema).optional(),
    itemCollections: z
      .lazy(() => ItemCollectionUncheckedCreateNestedManyWithoutRetrospectivesInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => RetroItemUncheckedCreateNestedManyWithoutRetrospectiveInputObjectSchema)
      .optional(),
    phase: z.string().optional(),
    participants: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutRetrospectivesInputObjectSchema)
      .optional(),
    timerExpiration: z.date().optional(),
    workspaceId: z.string().optional().nullable(),
  })
  .strict()

export const RetrospectiveUncheckedCreateWithoutLinkInputObjectSchema = Schema
