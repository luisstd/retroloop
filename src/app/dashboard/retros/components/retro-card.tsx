import { IconArrowRight, IconUser } from '@tabler/icons-react'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

import { EditRetro } from '@/app/dashboard/retros/components/edit-retro'
import { Button } from '@/app/ui/button'
import { Card } from '@/app/ui/card'
import {
  RetrospectiveUpdateInput,
  RetrospectiveWithRelations,
} from '@/types/retrospective'
import { formatDate } from '@/utils/utils'

type RetroCardProps = {
  retrospective: RetrospectiveWithRelations
  handleUpdateRetro: (input: RetrospectiveUpdateInput) => void
}

export function RetroCard({
  retrospective,
  handleUpdateRetro,
}: RetroCardProps) {
  return (
    <Card
      key={retrospective.id}
      className='h-full w-full shadow-xs transition hover:shadow-md'
    >
      <Card.Header>
        <Card.Title className='flex items-baseline justify-between'>
          {retrospective.name}
          <EditRetro
            handleEditRetro={handleUpdateRetro}
            retrospective={retrospective}
          />
        </Card.Title>
        <Card.Description>{formatDate(retrospective.date)}</Card.Description>
      </Card.Header>

      <div className='flex flex-col gap-4 p-4'>
        <div className='text-card-foreground flex flex-col gap-2 text-sm'>
          <p className='flex items-center gap-2'>
            <IconUser size={18} />
            {retrospective.participants.length}
            <span>Participants</span>
          </p>
          <p className='flex items-center gap-2'>
            <MessageCircle size={18} />
            {retrospective.items.length}
            <span>Feedback items</span>
          </p>
        </div>

        <Link
          href={{
            pathname: '/retro',
            query: {
              id: retrospective.id,
              name: retrospective.name,
            },
          }}
          aria-label='Open retro'
          className='w-full'
        >
          <Button variant='default' className='w-full'>
            Open Retro
            <IconArrowRight size={18} className='ml-1' />
          </Button>
        </Link>
      </div>
    </Card>
  )
}
