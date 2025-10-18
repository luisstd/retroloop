import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'

import { Menu } from '@/app/components/menu/menu'
import { Providers } from '@/app/providers'
import { Toaster } from '@/app/ui/toast'
import { getServerAuthSession } from '@/server/auth'
import { font } from '@/styles/fonts'
import { TRPCReactProvider } from '@/trpc/react'

export const metadata: Metadata = {
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
    siteName: 'Retroloop',
    images: [
      {
        url: '/og.webp',
        width: 1200,
        height: 630,
        alt: 'Retroloop - Agile retrospectives made easy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retroloop - Agile retrospectives made easy',
    description:
      'Retroloop is a simple, open-source tool for facilitating agile retrospectives',
    images: ['/og.webp'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#18181b',
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
            <a
              href='#main-content'
              className='focus-visible:bg-primary focus-visible:text-primary-foreground sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded focus-visible:px-4 focus-visible:py-2 focus-visible:shadow-md'
            >
              Skip to main content
            </a>
            <main
              id='main-content'
              className='relative mx-auto flex min-h-screen w-full max-w-(--breakpoint-2xl) flex-col items-center'
            >
              <div className='opacity-gradient absolute -z-50 h-full min-h-screen w-full' />
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
