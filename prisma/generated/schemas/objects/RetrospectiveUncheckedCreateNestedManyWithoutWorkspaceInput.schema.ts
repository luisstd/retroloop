import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RetrospectiveCreateManyWorkspaceInputEnvelopeObjectSchema } from './RetrospectiveCreateManyWorkspaceInputEnvelope.schema'
import { RetrospectiveCreateOrConnectWithoutWorkspaceInputObjectSchema } from './RetrospectiveCreateOrConnectWithoutWorkspaceInput.schema'
import { RetrospectiveCreateWithoutWorkspaceInputObjectSchema } from './RetrospectiveCreateWithoutWorkspaceInput.schema'
import { RetrospectiveUncheckedCreateWithoutWorkspaceInputObjectSchema } from './RetrospectiveUncheckedCreateWithoutWorkspaceInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './RetrospectiveWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUncheckedCreateNestedManyWithoutWorkspaceInput> = z
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
    createMany: z.lazy(() => RetrospectiveCreateManyWorkspaceInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema),
        z.lazy(() => RetrospectiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const RetrospectiveUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema = Schema
