import { Feedback, Retrospective } from '@prisma/client'
import { IconLayoutGrid, IconSlideshow } from '@tabler/icons-react'
import React, { useState } from 'react'

import { Loader } from '@/app/components/loader/loader'
import { Badge } from '@/app/ui/badge'
import { Card } from '@/app/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/ui/carousel'
import { Tabs, TabsTrigger,TabsTriggerList } from '@/app/ui/tabs'
import { api } from '@/trpc/react'
import { getFeedbackType } from '@/utils/utils'

type DiscussPhaseProps = {
  selectedRetro: Retrospective
}

type ViewType = 'carousel' | 'grid'

export function DiscussPhase({ selectedRetro }: DiscussPhaseProps) {
  const [view, setView] = useState<ViewType>('grid')

  const { data: feedback, isLoading } =
    api.feedback.getAllByRetroIdSorted.useQuery(selectedRetro.id)

  const FeedbackCard = ({
    item,
    index,
    total,
  }: {
    item: Feedback
    index?: number
    total?: number
  }) => (
    <Card className='flex min-h-72 w-full flex-col justify-between p-5 break-words'>
      <Card.Title className='flex flex-row items-center justify-between'>
        Feedback <Badge variant='secondary'>{getFeedbackType(item.type)}</Badge>
      </Card.Title>
      <Card.Description className='prose text-lg'>
        {item.content}
      </Card.Description>
      <div className='flex flex-row items-center justify-between'>
        <Badge className='text-lg font-bold'>+{item.votes}</Badge>
        {index !== undefined && total !== undefined && (
          <Card.Description className='self-end justify-self-end px-5 text-lg'>
            {`${index + 1}/${total}`}
          </Card.Description>
        )}
      </div>
    </Card>
  )

  const CarouselView = () => (
    <div className='px-16'>
      <Carousel className='mx-auto w-full max-w-3xl'>
        <CarouselContent>
          {feedback?.map((item, index) => (
            <CarouselItem key={item.id}>
              <div className='px-4'>
                <FeedbackCard item={item} index={index} total={feedback.length} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )

  const GridView = () => (
    <div className='grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3'>
      {feedback?.map((item) => (
        <div key={item.id}>
          <FeedbackCard item={item} />
        </div>
      ))}
    </div>
  )

  return (
    <div className='col-span-full w-full'>
      <div className='mb-6 flex items-center justify-between px-4'>
        <h2 className='text-2xl font-bold'>Discussion Items</h2>
        <Tabs
          selectedIndex={view === 'grid' ? 0 : 1}
          onChange={(index) => setView(index === 0 ? 'grid' : 'carousel')}
        >
          <TabsTriggerList className='grid w-24 grid-cols-2'>
            <TabsTrigger>
              <IconLayoutGrid className='h-4 w-4' />
            </TabsTrigger>
            <TabsTrigger>
              <IconSlideshow className='h-4 w-4' />
            </TabsTrigger>
          </TabsTriggerList>
        </Tabs>
      </div>

      {isLoading && <Loader isLoading fullHeight />}

      <div className='mt-6 pb-8'>
        {feedback && view === 'carousel' ? <CarouselView /> : <GridView />}
      </div>
    </div>
  )
}

export default DiscussPhase
