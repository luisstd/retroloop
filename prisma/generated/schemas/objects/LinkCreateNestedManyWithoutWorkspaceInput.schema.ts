import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LinkCreateManyWorkspaceInputEnvelopeObjectSchema } from './LinkCreateManyWorkspaceInputEnvelope.schema'
import { LinkCreateOrConnectWithoutWorkspaceInputObjectSchema } from './LinkCreateOrConnectWithoutWorkspaceInput.schema'
import { LinkCreateWithoutWorkspaceInputObjectSchema } from './LinkCreateWithoutWorkspaceInput.schema'
import { LinkUncheckedCreateWithoutWorkspaceInputObjectSchema } from './LinkUncheckedCreateWithoutWorkspaceInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './LinkWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.LinkCreateNestedManyWithoutWorkspaceInput> = z
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
    createMany: z.lazy(() => LinkCreateManyWorkspaceInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const LinkCreateNestedManyWithoutWorkspaceInputObjectSchema = Schema
