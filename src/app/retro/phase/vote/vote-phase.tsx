'use client'

import { Retrospective } from '@prisma/client'

import { FeedbackVoter } from '@/app/retro/phase/vote/components/feedback-voter'
import { Card } from '@/app/ui/card'

type VotePhaseProps = {
  selectedRetro: Retrospective
}

export function VotePhase({ selectedRetro }: VotePhaseProps) {
  return (
    <>
      {selectedRetro && (
        <>
          <Card className='col-start-1 row-span-6 row-start-2 h-full w-full px-2 lg:min-h-screen'>
            <FeedbackVoter
              retrospective={selectedRetro}
              itemType='success'
              title={'Went well'}
            />
          </Card>

          <Card className='col-start-2 row-span-6 row-start-2 h-full w-full px-2 lg:min-h-screen'>
            <FeedbackVoter
              retrospective={selectedRetro}
              itemType='improvement'
              title={'Can be improved'}
            />
          </Card>

          <Card className='col-start-3 row-span-6 row-start-2 h-full w-full px-2 lg:min-h-screen'>
            <FeedbackVoter
              retrospective={selectedRetro}
              itemType='action'
              title={'Start doing'}
            />
          </Card>
        </>
      )}
    </>
  )
}
