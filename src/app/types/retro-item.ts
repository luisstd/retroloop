import { RetroItemCreateInputSchema, RetroItemUpdateInputSchema } from 'src/app/schemas/retro-item'
import { z } from 'zod'

export type RetroItemCreateInput = z.infer<typeof RetroItemCreateInputSchema>

export type RetroItemUpdateInput = z.infer<typeof RetroItemUpdateInputSchema>
