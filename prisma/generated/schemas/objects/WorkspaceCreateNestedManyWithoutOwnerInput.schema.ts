import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateManyOwnerInputEnvelopeObjectSchema } from './WorkspaceCreateManyOwnerInputEnvelope.schema'
import { WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema } from './WorkspaceCreateOrConnectWithoutOwnerInput.schema'
import { WorkspaceCreateWithoutOwnerInputObjectSchema } from './WorkspaceCreateWithoutOwnerInput.schema'
import { WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateWithoutOwnerInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceCreateNestedManyWithoutOwnerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema).array(),
        z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema),
        z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => WorkspaceCreateManyOwnerInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const WorkspaceCreateNestedManyWithoutOwnerInputObjectSchema = Schema
