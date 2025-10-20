import { Prisma } from '@prisma/client'
import { z } from 'zod'

import {
  RetrospectiveCreateInputSchema,
  RetrospectiveUpdateInputSchema,
} from '@/schemas/retrospective'

export type RetrospectiveCreateInput = z.infer<
  typeof RetrospectiveCreateInputSchema
>

export type RetrospectiveUpdateInput = z.infer<
  typeof RetrospectiveUpdateInputSchema
>

export type RetrospectiveWithRelations = Prisma.RetrospectiveGetPayload<{
  include: {
    items: true
    participants: true
  }
}>

export enum RetroPhase {
  WRITING = 'WRITING',
  GROUPING = 'GROUPING',
  VOTING = 'VOTING',
  DISCUSSING = 'DISCUSSING',
}

export const PHASE_NAMES: Record<RetroPhase, string> = {
  [RetroPhase.WRITING]: 'Write',
  [RetroPhase.GROUPING]: 'Group',
  [RetroPhase.VOTING]: 'Vote',
  [RetroPhase.DISCUSSING]: 'Discuss',
}

export const NEXT_PHASE_MAP: Record<RetroPhase, RetroPhase | null> = {
  [RetroPhase.WRITING]: RetroPhase.VOTING,
  [RetroPhase.GROUPING]: RetroPhase.VOTING,
  [RetroPhase.VOTING]: RetroPhase.DISCUSSING,
  [RetroPhase.DISCUSSING]: null,
}
