import type { Metadata } from 'next'

import { Card } from '@/app/ui/card'

export const metadata: Metadata = {
  title: 'Retrospective - Retroloop',
  description: 'Agile retrospective session',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RetroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex h-full w-[calc(100%-2.5rem)] flex-col items-center gap-10 pb-10'>
      <Card className='bg-background flex w-full flex-col place-items-center gap-5 p-5 shadow-xs lg:grid lg:grid-cols-3'>
        {children}
      </Card>
    </section>
  )
}
