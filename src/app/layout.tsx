import '@/styles/globals.css'

import { headers } from 'next/headers'

import { Menu } from '@/app/components/menu/menu'
import { Providers } from '@/app/providers'
import { Toaster } from '@/app/ui/toaster'
import { getServerAuthSession } from '@/server/auth'
import { font } from '@/styles/fonts'
import { TRPCReactProvider } from '@/trpc/react'

export const metadata = {
  title: 'Retroloop - Agile retrospectives made easy',
  description:
    'Retroloop is a simple, open-source tool for facilitating agile retrospectives',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  metadataBase: new URL('https://retroloop.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://retroloop.io/',
    title: 'Retroloop - Agile retrospectives made easy',
    description:
      'Retroloop is a simple, open-source tool for facilitating agile retrospectives',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerAuthSession()

  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning className={font.className}>
        <Providers session={session}>
          <TRPCReactProvider headers={await headers()}>
            <main className='relative mx-auto flex w-screen max-w-(--breakpoint-2xl) flex-col items-center'>
              <div className='opacity-gradient absolute -z-50 h-full min-h-screen w-screen' />
              <Menu />
              {children}
              <Toaster />
            </main>
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  )
}
