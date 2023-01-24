import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateManyWorkspaceInputEnvelopeObjectSchema } from './RetrospectiveCreateManyWorkspaceInputEnvelope.schema'
import { RetrospectiveCreateOrConnectWithoutWorkspaceInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutWorkspaceInput.schema'
import { RetrospectiveCreateWithoutWorkspaceInputObjectSchema } from './RetrospectiveCreateWithoutWorkspaceInput.schema'
import { RetrospectiveScalarWhereInputObjectSchema } from './RetrospectiveScalarWhereInput.schema'
import { RetrospectiveUncheckedCreateWithoutWorkspaceInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutWorkspaceInput.schema'
import { RetrospectiveUpdateManyWithWhereWithoutWorkspaceInputObjectSchema } from './RetrospectiveUpdateManyWithWhereWithoutWorkspaceInput.schema'
import { RetrospectiveUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema } from './RetrospectiveUpdateWithWhereUniqueWithoutWorkspaceInput.schema'
import { RetrospectiveUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema } from './RetrospectiveUpsertWithWhereUniqueWithoutWorkspaceInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUpdateManyWithoutWorkspaceNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RetrospectiveCreateWithoutWorkspaceInputObjectSchema),
        z.lazy(() => RetrospectiveCreateWithoutWorkspaceInputObjectSchema).array(),
        z.lazy(() => RetrospectiveUncheckedCreateWithoutWorkspaceInputObjectSchema),
        z.lazy(() => RetrospectiveUncheckedCreateWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RetrospectiveCreateOrConnectWithoutWorkspaceInputObjectSchema),
        z.lazy(() => RetrospectiveCreateOrConnectWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RetrospectiveUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema),
        z.lazy(() => RetrospectiveUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => RetrospectiveCreateManyWorkspaceInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RetrospectiveUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema),
        z.lazy(() => RetrospectiveUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RetrospectiveUpdateManyWithWhereWithoutWorkspaceInputObjectSchema),
        z.lazy(() => RetrospectiveUpdateManyWithWhereWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RetrospectiveScalarWhereInputObjectSchema),
        z.lazy(() => RetrospectiveScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const RetrospectiveUpdateManyWithoutWorkspaceNestedInputObjectSchema = Schema
