import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { InviteCreateNestedManyWithoutRetroInputObjectSchema } from './InviteCreateNestedManyWithoutRetroInput.schema'
import { ItemCollectionCreateNestedManyWithoutRetrospectivesInputObjectSchema } from './ItemCollectionCreateNestedManyWithoutRetrospectivesInput.schema'
import { LinkCreateNestedManyWithoutRetroInputObjectSchema } from './LinkCreateNestedManyWithoutRetroInput.schema'
import { RetroItemCreateNestedManyWithoutRetrospectiveInputObjectSchema } from './RetroItemCreateNestedManyWithoutRetrospectiveInput.schema'
import { UserCreateNestedManyWithoutRetrospectivesInputObjectSchema } from './UserCreateNestedManyWithoutRetrospectivesInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveCreateWithoutWorkspaceInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    name: z.string(),
    date: z.date(),
    invite: z.lazy(() => InviteCreateNestedManyWithoutRetroInputObjectSchema).optional(),
    itemCollections: z
      .lazy(() => ItemCollectionCreateNestedManyWithoutRetrospectivesInputObjectSchema)
      .optional(),
    link: z.lazy(() => LinkCreateNestedManyWithoutRetroInputObjectSchema).optional(),
    items: z.lazy(() => RetroItemCreateNestedManyWithoutRetrospectiveInputObjectSchema).optional(),
    phase: z.string().optional(),
    participants: z
      .lazy(() => UserCreateNestedManyWithoutRetrospectivesInputObjectSchema)
      .optional(),
    timerExpiration: z.date().optional(),
  })
  .strict()

export const RetrospectiveCreateWithoutWorkspaceInputObjectSchema = Schema
