import { Retrospective } from '@prisma/client'
import Link from 'next/link'

import { EditRetro } from '@/app/dashboard/retros/components/edit-retro'
import { Card, CardDescription, CardHeader, CardTitle } from '@/app/ui/card/card'
import { RetrospectiveUpdateInput } from '@/types/retrospective'
import { formatDate } from '@/utils/utils'

type RetroCardProps = {
  retrospective: Retrospective
  handleUpdateRetro: (input: RetrospectiveUpdateInput) => void
}

export function RetroCard({ retrospective, handleUpdateRetro }: RetroCardProps) {
  return (
    <Card
      key={retrospective.id}
      className='h-full w-full shadow-sm transition ease-in-out hover:scale-105'
    >
      <CardHeader>
        <CardTitle className='flex items-baseline justify-between'>
          {retrospective.name}
          <EditRetro handleEditRetro={handleUpdateRetro} retrospective={retrospective} />
        </CardTitle>
        <CardDescription>{formatDate(retrospective.date)}</CardDescription>
      </CardHeader>
      <Link
        className='hover:cursor-pointer'
        href={{
          pathname: '/retro',
          query: {
            id: retrospective.id,
            name: retrospective.name,
          },
        }}
        aria-label='Go to retro view'
      >
        <div className='pattern-cross h-28 pattern-bg-transparent pattern-foreground pattern-opacity-5 pattern-size-4' />
      </Link>
    </Card>
  )
}
