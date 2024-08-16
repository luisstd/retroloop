import { Prisma } from '@prisma/client'
import { IconArrowRight, IconUser } from '@tabler/icons-react'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

import { EditRetro } from '@/app/dashboard/retros/components/edit-retro'
import { Button } from '@/app/ui/button/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/card/card'
import { RetrospectiveUpdateInput } from '@/types/retrospective'
import { formatDate } from '@/utils/utils'

type RetroWithRelations = Prisma.RetrospectiveGetPayload<{
  include: {
    items: true
    participants: true
  }
}>

type RetroCardProps = {
  retrospective: RetroWithRelations
  handleUpdateRetro: (input: RetrospectiveUpdateInput) => void
}

export function RetroCard({
  retrospective,
  handleUpdateRetro,
}: RetroCardProps) {
  return (
    <Card
      key={retrospective.id}
      className='h-full w-full shadow-sm transition duration-200 ease-in-out hover:ring-2 hover:ring-primary hover:ring-offset-2 dark:hover:ring-secondary'
    >
      <CardHeader>
        <CardTitle className='flex items-baseline justify-between'>
          {retrospective.name}
          <EditRetro
            handleEditRetro={handleUpdateRetro}
            retrospective={retrospective}
          />
        </CardTitle>
        <CardDescription>{formatDate(retrospective.date)}</CardDescription>
      </CardHeader>

      <CardContent className='flex justify-between text-muted-foreground'>
        <div className='flex flex-col gap-2'>
          <p className='flex items-center gap-2'>
            <IconUser size={18} />
            {retrospective.participants.length}
            <p>Participants</p>
          </p>
          <p className='flex items-center gap-2'>
            <MessageCircle size={18} />
            {retrospective.items.length}
            <p>Feedback items</p>
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
      </CardContent>
    </Card>
  )
}
