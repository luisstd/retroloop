import { Retrospective } from '@prisma/client'

import { Card } from '@/app/ui/card/card'

type RetroTitleProps = {
  title: Retrospective['name']
}

export function RetroTitle({ title }: RetroTitleProps) {
  return (
    <Card className='flex h-full w-full items-center justify-center gap-3 p-3 text-lg font-bold'>
      {title}
    </Card>
  )
}
