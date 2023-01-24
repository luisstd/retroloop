import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceCreateManyOwnerInputEnvelopeObjectSchema } from './WorkspaceCreateManyOwnerInputEnvelope.schema'
import { WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema } from './WorkspaceCreateOrConnectWithoutOwnerInput.schema'
import { WorkspaceCreateWithoutOwnerInputObjectSchema } from './WorkspaceCreateWithoutOwnerInput.schema'
import { WorkspaceScalarWhereInputObjectSchema } from './WorkspaceScalarWhereInput.schema'
import { WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateWithoutOwnerInput.schema'
import { WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './WorkspaceUpdateManyWithWhereWithoutOwnerInput.schema'
import { WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './WorkspaceUpdateWithWhereUniqueWithoutOwnerInput.schema'
import { WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './WorkspaceUpsertWithWhereUniqueWithoutOwnerInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUpdateManyWithoutOwnerNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectSchema),
        z.lazy(() => WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => WorkspaceCreateManyOwnerInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
        z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectSchema),
        z.lazy(() => WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectSchema),
        z.lazy(() => WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => WorkspaceScalarWhereInputObjectSchema),
        z.lazy(() => WorkspaceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const WorkspaceUpdateManyWithoutOwnerNestedInputObjectSchema = Schema
