'use client'

import { Feedback, Retrospective } from '@prisma/client'

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
import { getFeedbackType } from '@/utils/utils'

type DiscussPhaseProps = {
  selectedRetro: Retrospective
}

export function DiscussPhase({ selectedRetro }: DiscussPhaseProps) {
  const { data: feedback, isLoading } =
    api.feedback.getAllByRetroIdSorted.useQuery(selectedRetro.id)

  return (
    <div className='col-start-2 w-full lg:min-h-screen'>
      {isLoading && <Loader isLoading fullHeight />}
      <Carousel className='lg:mt-48'>
        <CarouselContent>
          {feedback &&
            feedback.map((item: Feedback, index: number) => (
              <CarouselItem key={item.id}>
                <Card className='mx-auto flex min-h-[18rem] w-11/12 flex-col justify-between break-words p-5'>
                  <CardTitle className='flex flex-row items-center justify-between'>
                    Feedback{' '}
                    <Badge variant='secondary'>
                      {getFeedbackType(item.type)}
                    </Badge>
                  </CardTitle>
                  <CardDescription className='prose text-lg'>
                    {item.content}
                  </CardDescription>
                  <div className='flex flex-row items-center justify-between'>
                    <Badge className='text-lg font-bold'>+{item.votes}</Badge>
                    <CardDescription className='self-end justify-self-end px-5 text-lg'>
                      {`${index + 1}/${feedback.length}`}
                    </CardDescription>
                  </div>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
