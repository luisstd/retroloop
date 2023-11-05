import { z } from 'zod'

import { RetroItemCreateInputSchema, RetroItemUpdateInputSchema } from '@/schemas/retro-item'

export type RetroItemCreateInput = z.infer<typeof RetroItemCreateInputSchema>

export type RetroItemUpdateInput = z.infer<typeof RetroItemUpdateInputSchema>
