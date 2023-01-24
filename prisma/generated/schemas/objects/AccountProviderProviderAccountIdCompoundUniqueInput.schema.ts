import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z
  .object({
    provider: z.string(),
    providerAccountId: z.string(),
  })
  .strict()

export const AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema = Schema
