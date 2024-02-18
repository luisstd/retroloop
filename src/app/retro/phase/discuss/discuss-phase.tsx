'use client'

import { Retrospective } from '@prisma/client'

import { Loader } from '@/app/components/loader/loader'
import { Badge } from '@/app/ui/badge/badge'
import { Card, CardDescription, CardTitle } from '@/app/ui/card/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/ui/carousel/carousel'
import { api } from '@/trpc/react'
import { getFeedbackItemType } from '@/utils/utils'

type DiscussPhaseProps = {
  selectedRetro: Retrospective
}

export function DiscussPhase({ selectedRetro }: DiscussPhaseProps) {
  const { data: feedbackItems, isLoading } = api.retroItem.getAllByRetroIdSorted.useQuery(
    selectedRetro.id
  )

  return (
    <div className='col-start-2 w-full lg:min-h-screen'>
      <Carousel className='lg:mt-48'>
        <CarouselContent>
          {feedbackItems ? (
            feedbackItems.map((item, index) => (
              <CarouselItem key={item.id}>
                <Card className='mx-auto flex min-h-[18rem] w-11/12 flex-col justify-between break-words p-5'>
                  <CardTitle className='flex flex-row items-center justify-between'>
                    Feedback <Badge variant='secondary'>{getFeedbackItemType(item.type)}</Badge>
                  </CardTitle>
                  <CardDescription className='prose text-lg'>{item.content}</CardDescription>
                  <div className='flex flex-row items-center justify-between'>
                    <Badge className='text-lg font-bold'>+{item.votes}</Badge>
                    <CardDescription className='self-end justify-self-end px-5 text-lg'>
                      {`${index + 1}/${feedbackItems.length}`}
                    </CardDescription>
                  </div>
                </Card>
              </CarouselItem>
            ))
          ) : (
            <Loader isLoading={isLoading} />
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
