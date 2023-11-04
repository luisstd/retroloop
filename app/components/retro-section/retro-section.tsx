'use client'

import { Retrospective, User } from '@prisma/client'
import { format, Locale } from 'date-fns'
import { de, enUS, fr } from 'date-fns/locale'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import GridLoader from 'react-spinners/GridLoader'

import { RetroDialog } from '@/components/retro-section/components/retro-dialog'
import { RetrospectiveCreateInput } from '@/types/retrospective'
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/card/card'
import { trpc } from '@/utils/trpc'

type RetroSectionProps = {
  userId: User['id']
}

type LocalesMap = {
  [key: string]: Locale
}

export function RetroSection({ userId }: RetroSectionProps) {
  const { data: retrospectives, refetch, isLoading } = trpc.retrospective.getAll.useQuery(userId)
  const { mutate } = trpc.retrospective.add.useMutation({
    onSuccess: async () => {
      refetch()
    },
  })
  const { resolvedTheme } = useTheme()
  const [sortedRetros, setSortedRetros] = useState(retrospectives)

  const formatDate = (date: Date): string => {
    const locales: LocalesMap = { 'en-US': enUS, 'de-DE': de, 'fr-FR': fr }
    const userLocale = navigator.language || 'en-US'
    const locale: Locale = locales[userLocale] || enUS
    return format(date, 'PP', { locale })
  }

  const sortItems = () => {
    if (retrospectives) {
      setSortedRetros(
        [...retrospectives].sort((a, b) => {
          if (b.date === null) {
            return 1
          }
          if (a.date === null) {
            return -1
          }
          return b.date.getTime() - a.date.getTime()
        })
      )
    }
  }

  const handleAddRetro = (input: RetrospectiveCreateInput) => {
    mutate(input)
  }

  useEffect(() => {
    sortItems()
  }, [retrospectives])

  return (
    <Card className='w-[calc(100%-2.5rem)] bg-background p-10 shadow-sm'>
      <div className='flex flex-row items-baseline justify-between'>
        <CardTitle className='p-5 text-center'>RETROS</CardTitle>

        <div className='flex w-full justify-end'>
          <RetroDialog handleAddRetro={handleAddRetro} />
        </div>
      </div>

      {isLoading && (
        <div className='grid place-items-center'>
          <GridLoader
            color={resolvedTheme === 'light' ? 'black' : 'white'}
            loading={isLoading}
            size={15}
            aria-label='Loading Spinner'
          />
        </div>
      )}

      <section className='mt-5 grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {sortedRetros &&
          sortedRetros.map((retrospective: Retrospective) => (
            <Link
              key={retrospective.id}
              href={{
                pathname: '/retro',
                query: {
                  id: retrospective.id,
                  name: retrospective.name,
                },
              }}
            >
              <Card className='h-full w-full shadow-sm transition ease-in-out hover:scale-105 hover:cursor-pointer'>
                <CardHeader>
                  <CardTitle>{retrospective.name}</CardTitle>
                  <CardDescription>{formatDate(retrospective.date)}</CardDescription>
                </CardHeader>
                <div className='pattern-cross h-28 pattern-bg-transparent pattern-foreground pattern-opacity-5 pattern-size-4' />
              </Card>
            </Link>
          ))}
      </section>
    </Card>
  )
}
