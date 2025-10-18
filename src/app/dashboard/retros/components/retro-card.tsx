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
      className='hover:ring-primary dark:hover:ring-secondary h-full w-full shadow-xs transition duration-200 ease-in-out hover:ring-2 hover:ring-offset-2'
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

      <Card.Content className='text-muted-foreground flex justify-between'>
        <div className='flex flex-col gap-2 text-sm'>
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
        <Button
          variant='link'
          size='lg'
          className='self-end justify-self-end pr-0'
        >
          <Link
            className='flex items-center'
            href={{
              pathname: '/retro',
              query: {
                id: retrospective.id,
                name: retrospective.name,
              },
            }}
            aria-label='Go to retro view'
          >
            Open
            <IconArrowRight size={18} />
          </Link>
        </Button>
      </Card.Content>
    </Card>
  )
}
