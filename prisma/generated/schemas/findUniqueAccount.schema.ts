import { z } from 'zod'

import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema'

export const AccountFindUniqueSchema = z.object({ where: AccountWhereUniqueInputObjectSchema })
