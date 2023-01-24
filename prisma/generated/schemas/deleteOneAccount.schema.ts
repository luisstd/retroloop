import { z } from 'zod'

import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema'

export const AccountDeleteOneSchema = z.object({ where: AccountWhereUniqueInputObjectSchema })
