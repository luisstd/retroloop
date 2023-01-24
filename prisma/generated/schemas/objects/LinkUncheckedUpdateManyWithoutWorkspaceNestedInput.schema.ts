import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateManyWorkspaceInputEnvelopeObjectSchema } from './LinkCreateManyWorkspaceInputEnvelope.schema'
import { LinkCreateOrConnectWithoutWorkspaceInputObjectSchema } from './LinkCreateOrConnectWithoutWorkspaceInput.schema'
import { LinkCreateWithoutWorkspaceInputObjectSchema } from './LinkCreateWithoutWorkspaceInput.schema'
import { LinkScalarWhereInputObjectSchema } from './LinkScalarWhereInput.schema'
import { LinkUncheckedCreateWithoutWorkspaceInputObjectSchema } from './LinkUncheckedCreateWithoutWorkspaceInput.schema'
import { LinkUpdateManyWithWhereWithoutWorkspaceInputObjectSchema } from './LinkUpdateManyWithWhereWithoutWorkspaceInput.schema'
import { LinkUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema } from './LinkUpdateWithWhereUniqueWithoutWorkspaceInput.schema'
import { LinkUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema } from './LinkUpsertWithWhereUniqueWithoutWorkspaceInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutWorkspaceNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LinkCreateWithoutWorkspaceInputObjectSchema),
        z.lazy(() => LinkCreateWithoutWorkspaceInputObjectSchema).array(),
        z.lazy(() => LinkUncheckedCreateWithoutWorkspaceInputObjectSchema),
        z.lazy(() => LinkUncheckedCreateWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => LinkCreateOrConnectWithoutWorkspaceInputObjectSchema),
        z.lazy(() => LinkCreateOrConnectWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => LinkUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema),
        z.lazy(() => LinkUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => LinkCreateManyWorkspaceInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => LinkUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema),
        z.lazy(() => LinkUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => LinkUpdateManyWithWhereWithoutWorkspaceInputObjectSchema),
        z.lazy(() => LinkUpdateManyWithWhereWithoutWorkspaceInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => LinkScalarWhereInputObjectSchema),
        z.lazy(() => LinkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const LinkUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema = Schema
